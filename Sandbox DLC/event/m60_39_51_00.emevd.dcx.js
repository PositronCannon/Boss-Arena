// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76303, 1039511950, 0, 0, 0, 3);
    InitializeCommonEvent(0, 90005100, 76314, 76303, 1039511980, 77300, 2, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    InitializeCommonEvent(0, 90005476, 1039510800, 1039510801);
    InitializeEvent(0, 1039512451, 1039510800, 1039510801);
    InitializeCommonEvent(0, 90005871, 1039510800, 903150604, 10, 1039510801);
    InitializeCommonEvent(0, 90005860, 1039510800, 0, 1039510800, 0, 1039510200, 0);
    InitializeCommonEvent(0, 90005300, 1039510800, 1039510801, 0, 0, 0);
    InitializeCommonEvent(0, 90005872, 1039510800, 10, 0);
    InitializeCommonEvent(0, 90005300, 1039510500, 1039510500, 40304, 0, 0);
    InitializeCommonEvent(0, 90005703, 1039510700, 3941, 3942, 1039409251, 3941, 3940, 3943, 0);
    InitializeCommonEvent(0, 90005704, 1039510700, 3941, 3940, 1039409251, 3);
    InitializeCommonEvent(0, 90005702, 1039510700, 3943, 3940, 3944);
    InitializeEvent(0, 1039513700, 1039510700);
    InitializeEvent(0, 1039513701, 1039510700);
    InitializeCommonEvent(0, 90005771, 1039510950, 1039512710);
    InitializeCommonEvent(0, 90005771, 1039510950, 1039512711);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039510700, true);
    InitializeCommonEvent(0, 90005201, 1039510201, 30000, 20000, 1094713344, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039510202, 30001, 20001, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1039510300, 1039512300, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039510406, 30001, 20001, 1088421888, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039510407, 30010, 20010, 1099956224, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039510408, 30010, 20010, 1099956224, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1039510350, 1039512350, 0, 3003);
    InitializeCommonEvent(0, 90005201, 1039510363, 30000, 20000, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1039510361, 1039512361, 0, -1);
    if (EventFlag(1049308076))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
});

$Event(1039512451, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(CharacterBackreadStatus(X4_4));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(X4_4));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1039513700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940) && EventFlag(1043379353)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L0:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!(EventFlag(3947) && !EventFlag(11109819) && !EventFlag(3957))) {
        flag &= EventFlag(3947) && !EventFlag(11109819) && !EventFlag(3957);
        WaitFor(flag);
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    if (!EventFlag(3956)) {
        if (!EventFlag(1039519209)) {
            flag &= EventFlag(76303) && EventFlag(9000);
            WaitFor(flag);
        }
    }
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    SetNetworkconnectedEventFlagID(1039519209, ON);
    SetNetworkconnectedEventFlagID(3956, ON);
    Goto(L20);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3947) && !EventFlag(11109819) && !EventFlag(3957)));
    RestartEvent();
});

$Event(1039513701, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3943) || !EventFlag(3947) || EventFlag(1039409259));
    WaitFor(EntityInRadiusOfEntity(X0_4, 20000, 4, 1) && CharacterHasSpEffect(20000, 9690));
    SetNetworkconnectedEventFlagID(1039402710, ON);
    EndEvent();
});
