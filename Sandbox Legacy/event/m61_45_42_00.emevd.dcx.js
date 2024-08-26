// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2045420000, 2045421950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430214, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430216, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430223, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430225, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430228, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430229, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430231, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005639, 2045420500, 2045421500, 2045421501, 2045421502, 0);
    InitializeCommonEvent(0, 900005580, 580600, 2045421602, 9146);
    InitializeEvent(0, 2045420700, 2045420700, 4400, 4405, 90100, 4899, 4928, 2045429205, 2045429207, 2045422701);
    InitializeCommonEvent(0, 90005749, 2045420701, 2045420700, 4405, 2045422701);
    InitializeEvent(0, 2045420705, 2045420710, 4380, 4383, 4385, 90102, 4901, 4382, 2045421711, 2045422711);
    InitializeCommonEvent(0, 90005749, 2045420711, 2045420710, 4385, 2045422711);
    InitializeCommonEvent(0, 90005744, 2045420710, 2045429268, 2045429268, 90200);
    InitializeCommonEvent(0, 90005744, 2045420710, 2045429272, 2045429272, 90200);
    InitializeEvent(0, 2045420706, 2045420710, 4382, 4386, 90202, 90203, 1077936128);
    InitializeCommonEvent(0, 90005750, 2045421710, 4350, 106420, 400644, 400644, 2045429280, 6102);
    InitializeCommonEvent(0, 90005748, 2045421700, 206022, 1030023, 1106247680, 4913);
    InitializeEvent(0, 2045420701, 2045420700, 2045422708, 4405, 4899);
});

$Event(2045420700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableCharacterInvincibility(X0_4);
    SetEventFlagID(X24_4, OFF);
    GotoIf(S0, !EventFlag(X16_4));
    Goto(L20);
S0:
    GotoIf(S1, !EventFlag(X20_4));
    Goto(L20);
S1:
    if (!EventFlag(X8_4)) {
        WaitFor(EventFlag(X8_4));
        RestartEvent();
    }
L0:
    if (!EventFlag(X4_4)) {
    }
L1:
    GotoIf(L20, EventFlag(X32_4));
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    WaitFor(CharacterBackreadStatus(X0_4));
    ResetCharacterPosition(X0_4);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    if (EventFlag(X28_4)) {
        SetEventFlagID(X24_4, ON);
    }
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L20:
    WaitFor(!EventFlag(X8_4));
    RestartEvent();
});

$Event(2045420705, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableAssetInvunerability(X28_4);
    if (!EventFlag(X12_4)) {
        WaitFor(EventFlag(X12_4));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(X4_4));
    GotoIf(L3, EventFlag(X24_4));
    GotoIf(L4, EventFlag(X8_4));
L1:
    GotoIf(L20, EventFlag(X32_4));
    if (!EventFlag(X20_4)) {
        EnableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, false);
        WaitFor(CharacterBackreadStatus(X0_4));
        ResetCharacterPosition(X0_4);
    }
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 2045422710, -1);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    if (Signed(-1) != X16_4) {
        ForceAnimationPlayback(X0_4, X16_4, true, false, false);
    }
    Goto(L20);
L3:
    Goto(L20);
L4:
    Goto(L20);
L20:
    WaitFor(!EventFlag(X12_4));
    RestartEvent();
});

$Event(2045420706, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeFrames(2);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4) || EventFlag(X8_4));
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, X20_4, 1));
    ForceAnimationPlayback(X0_4, X12_4, false, true, false);
    WaitFor(!EntityInRadiusOfEntity(10000, X0_4, X20_4, 1) && !CharacterHasSpEffect(X0_4, 9601));
    ForceAnimationPlayback(X0_4, X16_4, false, true, false);
    RestartEvent();
});

$Event(2045420701, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(X8_4));
    WaitFixedTimeRealFrames(1);
    EndIf(EventFlag(X12_4));
    GotoIf(L1, !EventFlag(X4_4));
    Goto(L2);
L1:
    WaitFor(EntityInRadiusOfEntity(X0_4, 10000, 2.6, 1));
    SetEventFlagID(X4_4, ON);
    RestartEvent();
L2:
    WaitFor(!EntityInRadiusOfEntity(X0_4, 10000, 2.6, 1));
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});


