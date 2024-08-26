// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1038410000, 1038411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76206, 76202, 1038411980, 77200, 2, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    InitializeCommonEvent(0, 90005880, 1038410800, 1038410805, 1038412800, 1038410800, 30245, 2696764, 1038412805);
    InitializeCommonEvent(0, 90005881, 1038410800, 1038410805, 1038412801, 1038412802, 20300, 1038411805, 2696764, 1038412805);
    InitializeCommonEvent(0, 90005882, 1038410800, 1038410805, 1038412800, 1038410800, 1038412806, 1038415810, 1038411800, 1038410810, 1038412810, 900000520, -1, 90005);
    InitializeCommonEvent(0, 90005883, 1038410800, 1038410805, 1038411805);
    InitializeCommonEvent(0, 90005885, 1038410800, 0, 1038412806, 1038412807, 0, 1);
    InitializeCommonEvent(0, 90005704, 1038410710, 3381, 3380, 1038419201, 3);
    InitializeCommonEvent(0, 90005703, 1038410710, 3381, 3382, 1038419201, 3381, 3380, 3384, -1);
    InitializeCommonEvent(0, 90005702, 1038410710, 3383, 3380, 3384);
    InitializeEvent(0, 1038413700, 1038410710);
    InitializeCommonEvent(0, 90005706, 1038410720, 30018, 0);
    InitializeCommonEvent(0, 90005725, 4740, 4741, 4743, 1043339205, 1038410730, 1038400730, 1038416700);
    InitializeCommonEvent(0, 90005703, 1038410730, 4741, 4742, 1043339206, 4741, 4740, 4744, 0);
    InitializeCommonEvent(0, 90005704, 1038410730, 4741, 4740, 1043339206, 3);
    InitializeCommonEvent(0, 90005702, 1038410730, 4743, 4740, 4744);
    InitializeCommonEvent(0, 90005703, 1038400730, 4741, 4742, 1043339207, 4741, 4740, 4744, 0);
    InitializeCommonEvent(0, 90005704, 1038400730, 4741, 4740, 1043339207, 3);
    InitializeCommonEvent(0, 90005728, 1038400730, 1043332706, 1043332707);
    InitializeCommonEvent(0, 90005727, 4741, 1038410730, 1038400730, 4740, 4743);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038410700, true);
    SetCharacterBackreadState(1038410710, true);
    SetCharacterBackreadState(1038410720, true);
    SetCharacterBackreadState(1038410730, true);
    SetCharacterBackreadState(1038400730, true);
});

$Event(1038413700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3380)) {
            SetEventFlagID(1038419202, OFF);
        }
    }
L19:
    if (!EventFlag(3388)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3388));
        RestartEvent();
    }
L8:
    GotoIf(L0, EventFlag(3380));
    GotoIf(L1, EventFlag(3381));
    GotoIf(L3, EventFlag(3383));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetSpEffect(X0_4, 9628);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3388));
    RestartEvent();
});

$Event(1038413710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3680)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    if (!EventFlag(3687)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3687));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3680));
    GotoIf(L2, EventFlag(3681));
    GotoIf(L3, EventFlag(3682));
    GotoIf(L4, EventFlag(3683));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
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
    WaitFor(!EventFlag(3687));
    RestartEvent();
});

$Event(1038413711, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3683));
    EndIf(!EventFlag(3685) && !EventFlag(3686) && !EventFlag(3687));
    GotoIf(L1, !EventFlag(3681));
    Goto(L2);
L1:
    WaitFor(EventFlag(3681));
    RestartEvent();
L2:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, X0_4, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(X4_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
    EndEvent();
});

$Event(1038413712, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(31009206));
    EndIf(EventFlag(1038419254));
    EndIf(!EventFlag(3685) && !EventFlag(3686) && !EventFlag(3687));
    SetEventFlagID(1038419254, ON);
    WaitFixedTimeFrames(1);
    SetEventFlagID(3698, ON);
    EndEvent();
});


