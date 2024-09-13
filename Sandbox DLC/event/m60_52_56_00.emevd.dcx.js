// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    RegisterBonfire(1052560000, 1052561950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76520, 1052561980, 77500, 5, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeCommonEvent(0, 90005860, 1052560800, 0, 1052560800, 0, 30525, 0);
    InitializeEvent(0, 1052562815, 1052560800, 904810601, 18);
    InitializeCommonEvent(0, 90005872, 1052560800, 18, 0);
    InitializeCommonEvent(0, 90005211, 1052560800, 30000, 20000, 1052562800, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1052560211, 30001, 20001, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1052562820, 0);
    InitializeEvent(0, 1052562821, 0);
    InitializeEvent(0, 1052562830, 1052560801, 30001, 20020, 0, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005771, 1052560950, 1052562700);
});

$Event(1052562815, Default, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(X8_4));
    GotoIf(L0, !EventFlag(9290));
    GotoIf(L1, !EventFlag(9291));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetEventFlagID(9290, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 1052560803, 0, X4_4);
    WaitFor(
        !((CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, 1052560803, 0, X4_4);
    SetEventFlagID(9290, OFF);
    RestartEvent();
L1:
    SetEventFlagID(9291, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 1052560803, 1, X4_4);
    WaitFor(
        !((CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, 1052560803, 1, X4_4);
    SetEventFlagID(9291, OFF);
    RestartEvent();
});

$Event(1052562820, Restart, function() {
    SetSpEffect(1052560800, 17320);
    SetSpEffect(1052560801, 17321);
    SetSpEffect(1052560802, 17322);
    DisableCharacterHPBarDisplay(1052560800);
    DisableCharacterHPBarDisplay(1052560801);
    DisableCharacterHPBarDisplay(1052560802);
    DisableCharacterHPBarDisplay(1052560803);
    DisableCharacterGravity(1052560803);
    DisableCharacterCollision(1052560803);
    CreateReferredDamagePair(1052560800, 1052560803);
    CreateReferredDamagePair(1052560801, 1052560803);
    CreateReferredDamagePair(1052560802, 1052560803);
});

$Event(1052562821, Restart, function() {
    if (EventFlag(1052560800)) {
        DisableCharacterCollision(1052560800);
        DisableCharacterCollision(1052560801);
        DisableCharacterCollision(1052560802);
        DisableCharacterCollision(1052560803);
        ForceCharacterDeath(1052560800, false);
        ForceCharacterDeath(1052560801, false);
        ForceCharacterDeath(1052560802, false);
        ForceCharacterDeath(1052560803, false);
        EndEvent();
    }
L0:
    WaitFor(
        CharacterHPValue(1052560800) == 0
            || CharacterHPValue(1052560801) == 0
            || CharacterHPValue(1052560802) == 0
            || CharacterHPValue(1052560803) == 0);
    ForceCharacterDeath(1052560800, false);
    ForceCharacterDeath(1052560801, false);
    ForceCharacterDeath(1052560802, false);
    ForceCharacterDeath(1052560803, false);
});

$Event(1052562830, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        areaSp |= InArea(10000, X12_4);
    }
    areaSp |= CharacterHasSpEffect(1052560800, 17325) || CharacterHasSpEffect(1052560801, 17326);
    areaSpChr &= areaSp
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X28_4 == 0 && X32_4 == 0 && X36_4 == 0)) {
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X36_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaSpChr &= chr;
    }
L9:
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaSpChr &= chrSp;
    WaitFor(
        areaSpChr
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        SetSpecialStandbyEndedFlag(X0_4, ON);
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        EnableCharacterAI(X0_4);
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 1052560800, 900, 1052560800);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        WaitFixedTimeSeconds(5);
        SetSpEffect(1052560800, 17327);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    WaitFixedTimeSeconds(5);
    SetSpEffect(1052560800, 17327);
    EndEvent();
    WaitFixedTimeSeconds(X16_4);
});


