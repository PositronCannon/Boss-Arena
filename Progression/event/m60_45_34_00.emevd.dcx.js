// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeEvent(0, 1045342580, 0);
    InitializeEvent(0, 1045342250, 1045340204);
    InitializeEvent(1, 1045342250, 1045340250);
    InitializeEvent(2, 1045342250, 1045340251);
    InitializeCommonEvent(0, 90005201, 1045340702, 30028, -1, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1045340703, 30028, -1, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1045340704, 30029, -1, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005461, 1045340207);
    InitializeCommonEvent(1, 90005462, 1045340207);
    InitializeCommonEvent(0, 90005460, 1045340207);
    InitializeCommonEvent(0, 900005610, 1045341680, 100, 800, 1045348540);
    InitializeCommonEvent(0, 90005683, 62151, 1045341684, 208, 78198, 78198);
    InitializeCommonEvent(0, 90005704, 1045340700, 3381, 3380, 1045349201, 3);
    InitializeCommonEvent(0, 90005703, 1045340700, 3381, 3382, 1045349201, 3381, 3380, 3384, -1);
    InitializeCommonEvent(0, 90005702, 1045340700, 3383, 3380, 3384);
    InitializeEvent(0, 1045340700, 1045340700);
    InitializeEvent(0, 1045340701, 1045340701, 1045341700);
    InitializeCommonEvent(0, 90005704, 1045340705, 3401, 3400, 1045349251, 3);
    InitializeCommonEvent(0, 90005703, 1045340705, 3401, 3402, 1045349251, 3401, 3400, 3403, -1);
    InitializeCommonEvent(0, 90005702, 1045340705, 3403, 3400, 3403);
    InitializeEvent(0, 1045340705, 1045340705);
    InitializeCommonEvent(0, 90005750, 1045341706, 4110, 110620, 400061, 400061, 1045349258, 0);
    InitializeEvent(0, 1045340707, 1045340705);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1045340700, true);
    SetCharacterBackreadState(1045340701, true);
    SetCharacterBackreadState(1045340705, true);
    InitializeEvent(0, 1045340706, 0);
    InitializeCommonEvent(0, 90005250, 1045340405, 1045342405, 0, 0);
});

$Event(1045342250, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1045342680, Restart, function() {
    WaitFor(EventFlag(1045348540));
    CreateAssetfollowingSFX(1045341680, 100, 800);
});

$Event(1045340700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3380)) {
            SetEventFlagID(1045349202, OFF);
        }
    }
L10:
    if (!EventFlag(3385)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3385));
        RestartEvent();
    }
L5:
    GotoIf(L0, EventFlag(3380));
    GotoIf(L1, EventFlag(3381));
    GotoIf(L3, EventFlag(3383));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 1045342700, -1);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 1045342700, -1);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetSpEffect(X0_4, 9628);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3385));
    RestartEvent();
});

$Event(1045340701, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    if (!AnyBatchEventFlags(3386, 3397)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(AnyBatchEventFlags(3386, 3397));
        RestartEvent();
    }
L6:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 90105, false, false, false);
    EnableAsset(X4_4);
    Goto(L20);
L20:
    WaitFor(!AnyBatchEventFlags(3386, 3397));
    RestartEvent();
});

$Event(1045340705, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(3400)) {
            SetEventFlagID(1043319202, OFF);
        }
    }
L10:
    if (!EventFlag(3408)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3408));
        RestartEvent();
    }
L8:
    GotoIf(L0, EventFlag(3400));
    GotoIf(L1, EventFlag(3401));
    GotoIf(L2, EventFlag(3402));
    GotoIf(L3, EventFlag(3403));
L0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L1:
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(1045349258, ON);
    }
    Goto(L20);
L20:
    WaitFor(!EventFlag(3408));
    RestartEvent();
});

$Event(1045340706, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045349256));
    WaitFor(EventFlag(1043300800) && EventFlag(1043319206));
    SetEventFlagID(1045342719, ON);
    SetEventFlagID(3418, ON);
});

$Event(1045340707, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045349256));
    WaitFor(HasDamageType(X0_4, 0, DamageType.Unspecified));
    SetEventFlagID(1045349256, ON);
});
