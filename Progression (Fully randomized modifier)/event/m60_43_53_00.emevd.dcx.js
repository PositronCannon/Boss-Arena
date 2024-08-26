// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76311, 1043531950, 0, 0, 0, 5);
    RegisterBonfire(76312, 1043531951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76314, 76312, 1043531981, 77300, 4, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    InitializeCommonEvent(0, 90005300, 1043530500, 1043530500, 40318, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043530354, 30005, 20021, 1043532350, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043530355, 30005, 20021, 1043532350, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043530350, 30000, 20000, 1043532350, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 1043530800, 903100602, 10);
    InitializeCommonEvent(0, 90005860, 1043530800, 0, 1043530800, 0, 1043530400, 0);
    InitializeCommonEvent(0, 90005760, 1043530800, 1043530800, 1043532400, 1043532708);
    InitializeCommonEvent(0, 90005872, 1043530800, 10, 0);
    InitializeCommonEvent(0, 90005702, 1043530700, 4763, 4760, 4763);
    InitializeCommonEvent(0, 90005703, 1043530700, 4761, 4762, 1043530702, 4761, 4760, 4763, 0);
    InitializeCommonEvent(0, 90005704, 1043530700, 4761, 4760, 1043530702, 3);
    InitializeEvent(0, 1043530700, 1043530700, 1043530701, 1043536700);
    InitializeCommonEvent(0, 90005770, 1043530701);
    InitializeCommonEvent(0, 90005727, 4761, 1043530700, 1043530701, 4760, 4763);
    InitializeCommonEvent(0, 90005728, 1043530701, 1043532706, 1043532707);
    InitializeCommonEvent(0, 90005703, 1043530701, 4761, 4762, 1043530702, 4761, 4760, 4763, 0);
    InitializeCommonEvent(0, 90005704, 1043530701, 4761, 4760, 1043530702, 3);
    InitializeCommonEvent(0, 90005771, 1043530951, 1043532710);
    //init boss reward
    InitializeEvent(0, 1043539990, 0);
});

//generic boss event
$Event(1043539990, Default, function() {
    WaitFor(CharacterDead(1043530800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304202,1049304104,1049304112,-1,1049304863,1049304864,1049304865,1049304866,1049305414,1049305416,1049305418,1049305420,1049300202);
});

$Event(50, Default, function() {
    if (EventFlag(1049308078))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    SetCharacterBackreadState(1043530700, true);
    SetCharacterBackreadState(1043530701, true);
    InitializeCommonEvent(0, 90005211, 1043530202, 30016, 20016, 1043532203, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043530203, 30016, 20016, 1043532203, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043530204, 30016, 20016, 1043532204, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043530206, 30014, 20014, 1043532206, 1090519040, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1043530207, 30014, 20014, 1043532206, 1090519040, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043530208, 30014, 20014, 1043532208, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530218, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530219, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530221, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530222, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530228, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530229, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530209, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530210, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530211, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530214, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530215, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1043530216, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043530230, 30014, 20014, 1043532230, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043530212, 30016, 20016, 1043532212, 0, 0, 0, 0, 0);
});

$Event(1043530700, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4760)) {
            SetEventFlagID(1043539205, OFF);
        }
    }
L10:
    if (!EventFlag(1043532709)) {
        SetNetworkconnectedEventFlagID(1043532708, OFF);
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && !EventFlag(1043530800)
            && (EventFlag(1043530701) || EventFlag(4761) || EventFlag(4763))) {
            SetNetworkconnectedEventFlagID(1043532708, ON);
        }
    }
L4:
    SetNetworkconnectedEventFlagID(1043532709, ON);
    GotoIf(L0, EventFlag(4760));
    GotoIf(L1, EventFlag(4761));
    GotoIf(L3, EventFlag(4763));
L0:
    GotoIf(S0, !EventFlag(1043532708));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    DisableAsset(X8_4);
    Goto(L20);
S0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 930003, false, false, false);
    EnableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, false);
    EnableAsset(X8_4);
    Goto(L20);
L1:
    GotoIf(S1, !EventFlag(1043532708));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    DisableAsset(X8_4);
    Goto(L20);
S1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EnableAsset(X8_4);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    DisableAsset(X8_4);
    Goto(L20);
L20:
    EndEvent();
});
