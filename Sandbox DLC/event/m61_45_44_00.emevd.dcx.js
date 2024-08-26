// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2045442811, 2045440800, 30002, 20002, 2045440820, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2045440800, 905860600, 22);
    InitializeCommonEvent(0, 90005860, 2045440800, 0, 2045440800, 1, 30860, 0);
    InitializeEvent(0, 2045442812, 0);
    InitializeCommonEvent(0, 90005200, 2045440200, 30001, 20001, 2045442200, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2045440201, 30001, 20001, 2045442200, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2045440202, 30001, 20001, 2045442200, 1073741824, 0, 0, 0, 0);
});

$Event(2045442810, Default, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4) && !EventFlag(9000));
    GotoIf(L0, !EventFlag(9290));
    GotoIf(L1, !EventFlag(9291));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetEventFlagID(9290, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    EnableLockOnPoint(X0_4, 220);
    EnableLockOnPoint(X0_4, 224);
    EnableLockOnPoint(X0_4, 225);
    EnableLockOnPoint(X0_4, 226);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9290, OFF);
    RestartEvent();
L1:
    SetEventFlagID(9291, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 1, X4_4);
    EnableLockOnPoint(X0_4, 220);
    EnableLockOnPoint(X0_4, 224);
    EnableLockOnPoint(X0_4, 225);
    EnableLockOnPoint(X0_4, 226);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 1, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9291, OFF);
    RestartEvent();
});

$Event(2045442811, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    EndIf(EventFlag(X12_4));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    DisableLockOnPoint(X0_4, 220);
    DisableLockOnPoint(X0_4, 224);
    DisableLockOnPoint(X0_4, 225);
    DisableLockOnPoint(X0_4, 226);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
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
        areaChrSp &= chr;
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
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    SetNetworkconnectedEventFlagID(X12_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EnableLockOnPoint(X0_4, 220);
        EnableLockOnPoint(X0_4, 224);
        EnableLockOnPoint(X0_4, 225);
        EnableLockOnPoint(X0_4, 226);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(2045442812, Default, function() {
    EndIf(EventFlag(2045440820));
    SetSpEffect(2045440100, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 2045440820);
    SetSpEffect(2045440100, 9532);
});
