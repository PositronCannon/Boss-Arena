// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005754, 4871, 4870, 4874, 4876, 2047462701, 2047460180, 4343, 4860, 2047460700, 2047462181, 1120403456, 2047462182, 2047462185, 2047462186, 2047462702);
    InitializeCommonEvent(0, 90005755, 4871, 4876, 0, 4860, 4861, 2);
    InitializeCommonEvent(0, 90005790, 0, 2047460180, 2047462181, 2047462182, 2047460700, 22, 2047462700, 2047462701, 0, 2047462702, 0, 0);
    InitializeCommonEvent(0, 90005791, 2047460180, 2047462181, 2047462182, 2047460700);
    InitializeCommonEvent(0, 90005792, 2047460180, 2047462181, 2047462182, 2047460700, 0, 0);
    InitializeCommonEvent(0, 90005793, 2047460180, 2047462181, 2047462182, 2047460700, 2047462700, 2047462182, 0);
    InitializeCommonEvent(0, 90005768, 2047460180, 106920, 400694, 106930, 400696, 4860);
    InitializeCommonEvent(0, 90005790, 0, 2047460184, 2047462185, 2047462186, 2047460720, 22, 2047462720, 2047462721, 0, 2045429296, 0, 0);
    InitializeCommonEvent(0, 90005791, 2047460184, 2047462185, 2047462186, 2047460720);
    InitializeCommonEvent(0, 90005792, 2047460184, 2047462185, 2047462186, 2047460720, 0, 0);
    InitializeCommonEvent(0, 90005793, 2047460184, 2047462185, 2047462186, 2047460720, 2047462720, 0, 0);
    InitializeCommonEvent(0, 90005774, 2047460184, 116401, 400645);
    InitializeEvent(0, 2047460705, 2047460710, 2047460711, 4385, 4956, 2045422710, 4383, 4386, 2047462730);
    InitializeEvent(0, 2047460706, 2047460710, 3360, 4956, 4959, 1077936128, 20010, 20503310);
    InitializeEvent(0, 2047460707, 2047462710, 4956, 400755, 2047460710, 4959);
    InitializeCommonEvent(0, 90005779, 2047460710, 4956, 20016, 4385, 4383);
    InitializeCommonEvent(0, 90005744, 2047460710, 2047469250, 2047469250, 20015);
    InitializeEvent(0, 2047460709, 2045429280, 4385, 4966, 2047460710, 4956, 2045429296, 4950, 4956, 2045429281, 2045429282, 4901, 1065353216, 2045429346, 1106247680);
    InitializeCommonEvent(0, 90005766, 2047462185, 2047460720, 1120403456, 2045429277, 4966);
    InitializeCommonEvent(0, 90005767, 2045429280, 4380, 4383, 2047460720, 4901, 2047460721, 2045429297);
    InitializeCommonEvent(0, 90005777, 2047460721, 4966, 4383, 2047462185);
    InitializeCommonEvent(0, 90005774, 2045429297, 116401, 400645);
    InitializeEvent(0, 2047460708, 2047460730, 4380, 4383, 4386, 90101, 2047462730);
    InitializeCommonEvent(0, 90005750, 2047461730, 4350, 106420, 400644, 400645, 4386, 6102);
    InitializeEvent(0, 2047460700, 2047462701, 2047462701, 2047460180, 2047462182, 4860, 1086324736, 2047462181, 4870, 4874, 4871, 2047462185, 2047462186, 2047462703);
    InitializeCommonEvent(0, 90005737, 2047460180, 2047462703);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005485, -2047507096);
    InitializeCommonEvent(0, 90005485, -2047507095);
    InitializeCommonEvent(0, 90005251, -2047507096, 1135214592, 0, -1);
    InitializeCommonEvent(0, 90005251, -2047507095, 1135214592, 0, -1);
});

$Event(2047460700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X8_4));
    WaitFor(
        InArea(20000, X0_4)
            && (!AnyBatchEventFlags(X28_4, X32_4) || EventFlag(X36_4))
            && (!EventFlag(X40_4) || (EventFlag(X40_4) && EventFlag(X44_4)))
            && !EventFlag(X48_4));
    WaitFixedTimeFrames(1);
    GotoIf(L0, EventValue(X16_4, 4) == 0);
    Goto(L1);
L0:
    WaitFor(ElapsedSeconds(X20_4) || EventFlag(X12_4));
    Goto(L5);
L1:
    WaitFor(EventFlag(X24_4) || EventFlag(X12_4));
    Goto(L5);
L5:
    EndIf(EventFlag(X12_4));
    SetEventFlagID(X4_4, ON);
    EndEvent();
});

$Event(2047460705, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    DisableCharacterGravity(X0_4);
    DisableCharacterGravity(X4_4);
    SetCharacterMaphit(X0_4, false);
    SetCharacterMaphit(X4_4, false);
    SetEventFlagID(X16_4, ON);
    if (!EventFlag(X24_4)) {
        EndIf(!EventFlag(X8_4) || EventFlag(X20_4));
        GotoIf(L1, !EventFlag(4959) && !EventFlag(X12_4));
        GotoIf(L2, EventFlag(4959) && !EventFlag(X12_4));
        GotoIf(L3, EventFlag(X12_4));
L1:
        DisableCharacterHPBarDisplay(X0_4);
        EnableCharacter(X0_4);
        SetSpEffect(X0_4, 4409);
        ForceAnimationPlayback(X0_4, 30012, false, false, false);
        WaitFixedTimeSeconds(1);
        EnableCharacterHPBarDisplay(X0_4);
        ResetCharacterPosition(X0_4);
        EndEvent();
L2:
        EnableCharacter(X0_4);
        ForceAnimationPlayback(X0_4, 30007, false, false, false);
        WaitFixedTimeSeconds(1);
        ResetCharacterPosition(X0_4);
        EndEvent();
L3:
        EnableCharacter(X4_4);
        ForceAnimationPlayback(X4_4, 30008, false, false, false);
        SetCharacterTeamType(X4_4, TeamType.Disabled);
        DisableCharacterCollision(X4_4);
        WaitFixedTimeSeconds(1);
        ResetCharacterPosition(X4_4);
        EndEvent();
    }
L4:
    EnableCharacter(X4_4);
    ForceAnimationPlayback(X4_4, 30008, false, false, false);
    SetCharacterTeamType(X4_4, TeamType.Disabled);
    DisableCharacterCollision(X4_4);
    WaitFor(CharacterBackreadStatus(X4_4));
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(X4_4, TargetEntityType.Area, X28_4, -1);
});

$Event(2047460706, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X8_4) || EventFlag(X12_4));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) || CharacterHasSpEffect(X0_4, X24_4));
    WaitFixedTimeSeconds(X16_4);
    EndIf(EventFlag(X8_4));
    SetEventFlagID(X12_4, ON);
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
});

$Event(2047460707, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    SetEventFlagID(X0_4, ON);
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    EndIf(!EventFlag(X16_4));
    SetEventFlagID(X0_4, OFF);
    WaitFor(
        HasDamageType(X12_4, 10000, DamageType.Unspecified)
            || HasDamageType(X12_4, 40000, DamageType.Unspecified)
            || EventFlag(X4_4)
            || EventFlag(X8_4));
    SetEventFlagID(X0_4, ON);
});

$Event(2047460708, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    DisableCharacterGravity(X0_4);
    SetCharacterMaphit(X0_4, false);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(X12_4)) {
        WaitFor(EventFlag(X12_4));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(X4_4));
    GotoIf(L4, EventFlag(X8_4));
L1:
    if (!EventFlag(X20_4)) {
        EnableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, false);
        SetCharacterTeamType(X0_4, TeamType.Disabled);
    }
    WaitFor(CharacterBackreadStatus(X0_4) && EventFlag(X4_4));
    ResetCharacterPosition(X0_4);
    WaitFixedTimeRealFrames(1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X20_4, -1);
    ForceAnimationPlayback(X0_4, X16_4, true, false, false);
    Goto(L20);
L3:
    Goto(L20);
L4:
    Goto(L20);
L20:
    WaitFor(!EventFlag(X12_4));
    RestartEvent();
});

$Event(2047460709, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X0_4));
    EndIf(!EventFlag(X4_4));
    EndIf(EventFlag(X8_4));
    if (!EventFlag(X48_4)) {
        if (EventFlag(X48_4)) {
        }
L0:
        EndIf(EventFlag(X16_4));
        WaitFor(CharacterRatioDead(X12_4) || CharacterHPValue(X12_4) <= 0 || EventFlag(X16_4));
        SetEventFlagID(X16_4, ON);
        if (CountEventFlags(TargetEventFlagType.EventFlag, X24_4, X28_4) == 1) {
            SetEventFlagID(X32_4, ON);
        }
        if (CountEventFlags(TargetEventFlagType.EventFlag, X24_4, X28_4) >= 2) {
            SetEventFlagID(X36_4, ON);
            EndIf(EventFlag(X40_4));
            SetEventFlagID(X48_4, ON);
            flag |= !EventFlag(2047462181) || EventFlag(2047460180);
            flag2 &= EventFlag(2047462181);
        }
        flag2 &= EventFlag(2047462182);
        flag |= flag2;
        WaitFor(flag);
        WaitFixedTimeSeconds(X44_4);
        SetEventFlagID(X20_4, ON);
        WaitFor(EventFlag(X8_4));
        SetEventFlagID(X48_4, OFF);
        EndEvent();
    }
L10:
    WaitFor(
        !EventFlag(2047462181)
            || EventFlag(2047460180)
            || (EventFlag(2047462181) && EventFlag(2047462182)));
    WaitFixedTimeRealFrames(1);
    WaitFor(EntityInRadiusOfEntity(10000, X12_4, X52_4, 1));
    EndIf(EventFlag(X40_4));
    SetEventFlagID(X20_4, ON);
    WaitFor(EventFlag(X8_4));
    SetEventFlagID(X48_4, OFF);
    EndEvent();
});


