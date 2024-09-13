// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(76308, 1041541950, 0, 0, 0, 3);
    InitializeCommonEvent(0, 90005100, 76314, 76308, 1041541980, 77310, 1, 78310, 78311, 78312, 78313, 78314, 78315, 78316, 78317, 78318, 78319);
    InitializeCommonEvent(0, 90005706, 1041540700, 930025, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041540700, true);
    InitializeCommonEvent(0, 90005251, 1041540206, 1119092736, 0, 0);
    InitializeEvent(0, 1041542200, 0);
    InitializeEvent(0, 1041542230, 1041540201, 30006, 20006, 1077936128);
    InitializeEvent(1, 1041542230, 1041540202, 30006, 20006, 1077936128);
    InitializeEvent(2, 1041542230, 1041540203, 30006, 20006, 1077936128);
    InitializeEvent(3, 1041542230, 1041540204, 30006, 20006, 1084227584);
    InitializeEvent(4, 1041542230, 1041540205, 30006, 20006, 1077936128);
});

$Event(1041542200, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(1041540200, 12054);
    SetSpEffect(1041540200, 8092);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(1041542230, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450);
    sp2 = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp3 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp4 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp5 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp6 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = EntityInRadiusOfEntity(10000, X0_4, X12_4, 1) && CharacterBackreadStatus(X0_4) && sp && chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterHasSpEffect(1041540200, 12051)
            || sp2
            || sp3
            || sp4
            || sp5
            || sp6);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    EndEvent();
});
