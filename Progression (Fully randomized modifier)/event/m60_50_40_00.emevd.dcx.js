// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1050400000, 1050401950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 1050402210, 1050400200, 30000, 20000, 1050402800, 1099956224, 0, 0, 0, 0);
    InitializeCommonEvent(1, 1050402210, 1050400201, 30000, 20000, 1050402800, 1099956224, 0, 0, 0, 0);
    InitializeCommonEvent(2, 1050402210, 1050400202, 30000, 20000, 1050402800, 1099956224, 0, 0, 0, 0);
    InitializeCommonEvent(3, 1050402210, 1050400203, 30000, 20000, 1050402800, 1099956224, 0, 0, 0, 0);
    InitializeCommonEvent(4, 1050402210, 1050400204, 30000, 20000, 1050402800, 1099956224, 0, 0, 0, 0);
    InitializeCommonEvent(5, 1050402210, 1050400205, 30000, 20000, 1050402800, 1099956224, 0, 0, 0, 0);
    InitializeCommonEvent(6, 1050402210, 1050400207, 30000, 20000, 1050402800, 1099956224, 0, 0, 0, 0);
    InitializeEvent(0, 1050402201, 1050400200);
    InitializeEvent(1, 1050402201, 1050400201);
    InitializeEvent(2, 1050402201, 1050400202);
    InitializeEvent(3, 1050402201, 1050400203);
    InitializeEvent(4, 1050402201, 1050400204);
    InitializeEvent(5, 1050402201, 1050400205);
    InitializeEvent(6, 1050402201, 1050400207);
    InitializeEvent(0, 1050402202, 1050400200);
    InitializeEvent(1, 1050402202, 1050400201);
    InitializeEvent(2, 1050402202, 1050400202);
    InitializeEvent(3, 1050402202, 1050400203);
    InitializeEvent(4, 1050402202, 1050400204);
    InitializeEvent(5, 1050402202, 1050400205);
    InitializeEvent(6, 1050402202, 1050400207);
    InitializeEvent(0, 1050402204, 1050400200);
    InitializeEvent(1, 1050402204, 1050400201);
    InitializeEvent(2, 1050402204, 1050400202);
    InitializeEvent(3, 1050402204, 1050400203);
    InitializeEvent(4, 1050402204, 1050400204);
    InitializeEvent(5, 1050402204, 1050400205);
    InitializeEvent(6, 1050402204, 1050400207);
    InitializeEvent(0, 1050402203, 0);
    InitializeEvent(0, 1050402206, 0);
    InitializeEvent(0, 1050402800, 0);
    InitializeCommonEvent(0, 90005300, 1050400800, 1050400800, 1050400800, 0, 0);
    InitializeEvent(0, 1050402205, 0);
});

$Event(1050402201, Restart, function(X0_4) {
    EndIf(EventFlag(1050400599));
    SetSpEffect(X0_4, 4405);
    WaitFor(CharacterDead(X0_4));
    if (HPRatio(1050400800) <= 3) {
        SetSpEffect(1050400800, 4402);
        EndEvent();
    }
L0:
    SetSpEffect(1050400800, 4404);
});

$Event(1050402202, Restart, function(X0_4) {
    if (!EventFlag(1050400599)) {
        WaitFor(CharacterDead(1050400800));
        SetEventFlagID(1050400599, ON);
        ForceCharacterDeath(X0_4, true);
        EndEvent();
    }
L0:
    ForceCharacterDeath(X0_4, false);
});

$Event(1050402203, Restart, function() {
    WaitFor(CharacterDead(1050400800));
    RequestAssetDestruction(1050401599, 1);
    DisableHit(1050401500);
});

$Event(1050402204, Restart, function(X0_4) {
    DisableNetworkSync();
    DisableCharacterHPBarDisplay(X0_4);
    WaitFixedTimeSeconds(3);
    EnableCharacterHPBarDisplay(X0_4);
});

$Event(1050402205, Restart, function() {
    EndIf(EventFlag(1050400800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterDead(1050400800));
    WaitFixedTimeSeconds(2);
    DisplayBlinkingMessage(30063);
});

$Event(1050402206, Restart, function() {
    DisableAsset(1050406500);
});

$Event(1050402210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, X12_4)
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFor(
            HasDamageType(X0_4, 0, DamageType.Unspecified)
                || CharacterHasStateInfo(X0_4, 436)
                || CharacterHasStateInfo(X0_4, 2)
                || CharacterHasStateInfo(X0_4, 5)
                || CharacterHasStateInfo(X0_4, 6)
                || CharacterHasStateInfo(X0_4, 260)
                || ElapsedSeconds(X16_4));
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(1050402800, Restart, function() {
    EndIf(EventFlag(1050400599));
    ForceAnimationPlayback(1050400800, 30006, false, false, false);
    if (!EventFlag(1050402599)) {
        chrSp |= (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            (chrSp && InArea(10000, 1050402800))
                || HasDamageType(1050400800, 0, DamageType.Unspecified)
                || HasDamageType(1050400200, 0, DamageType.Unspecified)
                || HasDamageType(1050400201, 0, DamageType.Unspecified)
                || HasDamageType(1050400202, 0, DamageType.Unspecified)
                || HasDamageType(1050400203, 0, DamageType.Unspecified)
                || HasDamageType(1050400204, 0, DamageType.Unspecified)
                || HasDamageType(1050400205, 0, DamageType.Unspecified)
                || HasDamageType(1050400207, 0, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(1050402599, ON);
    } else {
L0:
        chrSp |= CharacterAIState(1050400800, AIStateType.Combat)
            || CharacterAIState(1050400200, AIStateType.Combat)
            || CharacterAIState(1050400201, AIStateType.Combat)
            || CharacterAIState(1050400202, AIStateType.Combat)
            || CharacterAIState(1050400203, AIStateType.Combat)
            || CharacterAIState(1050400204, AIStateType.Combat)
            || CharacterAIState(1050400205, AIStateType.Combat)
            || CharacterAIState(1050400207, AIStateType.Combat);
        WaitFor(chrSp && !CharacterHasSpEffect(10000, 10251));
    }
L1:
    ForceAnimationPlayback(1050400800, 20006, false, false, false);
    WaitFixedTimeSeconds(20);
    EndIf(EventFlag(1050400599));
    if (!CharacterType(10000, TargetType.BlackPhantom)) {
        SetSpEffect(20000, 10251);
    }
    SetSpEffect(1050400200, 10250);
    SetSpEffect(1050400201, 10250);
    SetSpEffect(1050400202, 10250);
    SetSpEffect(1050400203, 10250);
    SetSpEffect(1050400204, 10250);
    SetSpEffect(1050400205, 10250);
    SetSpEffect(1050400207, 10250);
    WaitFixedTimeSeconds(18);
    ForceAnimationPlayback(1050400800, 30006, false, false, false);
    WaitFixedTimeSeconds(10);
    RestartEvent();
});
