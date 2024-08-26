// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1051530000, 1051531950, 0, 0, 0, 5);
    InitializeEvent(0, 1051532200, 1051535200);
    InitializeEvent(0, 1051532390, 0);
    InitializeCommonEvent(0, 90005200, 1051530321, 30005, 20005, 1051532321, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1051530322, 30006, 20006, 1051532322, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1051530323, 30006, 20006, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1051530324, 30006, 20006, 0, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1051530210, 1051530210, 1051530700, 0, 0);
    InitializeEvent(0, 1051532220, 1051530210, 12603, 1051532210, 1051532211, 1051532212);
    InitializeCommonEvent(0, 90005201, 1051530210, 30000, 20000, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1051530380, 1051530180, 0, 0, 0);
    InitializeCommonEvent(0, 90005790, 0, 1051530180, 1051532181, 1051532182, 1051530180, 21, 1051532180, 1051532181, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 1051530180, 1051532181, 1051532182, 1051530180);
    InitializeCommonEvent(0, 90005792, 1051530180, 1051532181, 1051532182, 1051530180, 1051530500, 0);
    InitializeCommonEvent(0, 90005793, 1051530180, 1051532181, 1051532182, 1051530180, 1051532180, 1051532182, 0);
    InitializeEvent(0, 1051532330, 1051535330, 1051532330);
    InitializeEvent(1, 1051532330, 1051535331, 1051532331);
    InitializeCommonEvent(0, 90005200, 1051530284, 30000, 20000, 1051532284, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1051530283, 1051532283, 0, 0, 0);
    InitializeCommonEvent(0, 90005771, 1051530950, 1051532700);
});

$Event(1051532200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1051532220, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1051530210));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !EventFlag(1051530210) && !CharacterDead(X0_4));
    SetEventFlagID(1051532221, OFF);
    SetEventFlagID(1051532222, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1051532221, 1051532222, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1051532221));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X12_4);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X16_4);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1051532221));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X8_4);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X16_4);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1051532221));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X8_4);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    SetCharacterHome(X0_4, X12_4);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1051532330, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5651);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1051532330));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5651);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(1050562200, ON);
    ClearSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 4802);
    ClearSpEffect(X0_4, 5651);
});

$Event(1051532390, Restart, function() {
    SetSpEffect(1051530331, 12019);
    WaitFor(CharacterHasSpEffect(1051530331, 12019) && CharacterHasSpEffect(1051530331, 12018));
    ForceAnimationPlayback(1051530331, 20020, false, false, false);
    EndEvent();
});
