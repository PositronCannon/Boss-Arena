// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005704, 1039390700, 3801, 3800, 1039399201, 3);
    InitializeCommonEvent(0, 90005703, 1039390700, 3801, 3802, 1039399201, 3801, 3800, 3803, -1);
    InitializeCommonEvent(0, 90005702, 1039390700, 3803, 3800, 3803);
    InitializeEvent(0, 1039393700, 1039390700);
    InitializeEvent(0, 1039393701, 0);
    InitializeEvent(0, 1039393702, 1039390700, 1039391700);
    InitializeCommonEvent(0, 90005300, 1039390200, 1039390200, 40206, 0, 0);
    InitializeEvent(0, 1039392200, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039390700, true);
});

$Event(1039392200, Restart, function() {
    EndIf(EventFlag(3803));
    DisableCharacter(1039390200);
    DisableCharacterCollision(1039390200);
});

$Event(1039393700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3800) && EventFlag(1039399203)) {
            SetEventFlagID(1039399203, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(3805)) {
        WaitFor(EventFlag(3805));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(3800));
    GotoIf(L2, EventFlag(3801));
    GotoIf(L4, EventFlag(3803));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 1039392700, -1);
    DisableCharacterGravity(X0_4);
    EnableAssetInvunerability(1039391700);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3805));
    RestartEvent();
});

$Event(1039393701, Restart, function() {
    if (!(EventFlag(1039399213) && EventFlag(1039399218))) {
        WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, 120500, 120749) >= 3);
        SetNetworkconnectedEventFlagID(1039399218, ON);
    }
L20:
    EndEvent();
});

$Event(1039393702, Restart, function(X0_4, X4_4) {
    WaitFor(flagSpChrOnline);
    flagSpChrOnline = EventFlag(3801)
        && !CharacterHasSpEffect(X0_4, 9624)
        && CharacterBackreadStatus(X0_4)
        && PlayerIsInOwnWorld();
    WaitFor(flagSpChrOnline);
    DisableAssetInvunerability(X4_4);
    RequestAssetDestruction(X4_4, 0);
    EnableCharacterGravity(X0_4);
    EndEvent();
});
