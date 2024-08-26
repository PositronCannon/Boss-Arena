// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1048410000, 1048411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1048410290, 1048410290, 40412, 0, 0);
    InitializeCommonEvent(0, 90005760, 1048410800, 1048410800, 1048412300, 1048412708);
    InitializeCommonEvent(0, 90005870, 1048410800, 903100603, 10);
    InitializeCommonEvent(0, 90005860, 1048410800, 0, 1048410800, 0, 1048410800, 0);
    InitializeCommonEvent(0, 90005872, 1048410800, 10, 0);
    InitializeCommonEvent(0, 90005702, 1048410700, 4793, 4790, 4793);
    InitializeCommonEvent(0, 90005703, 1048410700, 4791, 4792, 1048410702, 4791, 4790, 4793, 0);
    InitializeCommonEvent(0, 90005704, 1048410700, 4791, 4790, 1048410702, 3);
    InitializeEvent(0, 1048410700, 1048410700, 1048410701, 1048416700);
    InitializeCommonEvent(0, 90005770, 1048410701);
    InitializeCommonEvent(0, 90005727, 4791, 1048410700, 1048410701, 4790, 4793);
    InitializeCommonEvent(0, 90005728, 1048410701, 1048412706, 1048412707);
    InitializeCommonEvent(0, 90005703, 1048410701, 4791, 4792, 1048410702, 4791, 4790, 4793, 0);
    InitializeCommonEvent(0, 90005704, 1048410701, 4791, 4790, 1048410702, 3);
    //init boss reward
    InitializeEvent(0, 1048419990, 0);
});

//generic boss event
$Event(1048419990, Default, function() {
    WaitFor(CharacterDead(1048410800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304250,1049304130,-1,-1,1049307071,1049307072,1049307073,1049307074,1049305961,1049305966,1049305968,1049305971,1049300250);
});

$Event(50, Default, function() {
    if (EventFlag(1049308090))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    SetCharacterBackreadState(1048410700, true);
    SetCharacterBackreadState(1048410701, true);
});

$Event(1048410700, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4790)) {
            SetEventFlagID(1048419205, OFF);
        }
    }
L10:
    if (!EventFlag(1048412709)) {
        SetNetworkconnectedEventFlagID(1048412708, OFF);
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && !EventFlag(1048410800)
            && (EventFlag(1048410701) || EventFlag(4791) || EventFlag(4793))) {
            SetNetworkconnectedEventFlagID(1048412708, ON);
        }
    }
L4:
    SetNetworkconnectedEventFlagID(1048412709, ON);
    GotoIf(L0, EventFlag(4790));
    GotoIf(L1, EventFlag(4791));
    GotoIf(L3, EventFlag(4793));
L0:
    GotoIf(S0, !EventFlag(1048412708));
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
    GotoIf(S1, !EventFlag(1048412708));
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
