// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2051480000, 2051481950, 0, 0, 0, 5);
    RegisterBonfire(2051480001, 2051481951, 0, 0, 0, 5);
});

$Event(50, Default, function() {
    InitializeEvent(0, 205148200, 2051480200, 30003, 20003, 1065353216, 2051482290);
    InitializeEvent(1, 205148200, 2051480201, 30003, 20003, 1056964608, 2051482290);
    InitializeEvent(2, 205148200, 2051480202, 30003, 20003, 0, 2051482292);
    InitializeEvent(3, 205148200, 2051480203, 30003, 20003, 1045220557, 2051482291);
    InitializeEvent(4, 205148200, 2051480204, 30003, 20003, 1061997773, 2051482291);
    InitializeEvent(5, 205148200, 2051480205, 30003, 20003, 1053609165, 2051482292);
    InitializeEvent(6, 205148200, 2051480206, 30003, 20003, 0, 2051482296);
    InitializeEvent(7, 205148200, 2051480207, 30003, 20003, 1058642330, 2051482293);
    InitializeEvent(8, 205148200, 2051480208, 30003, 20003, 1056964608, 2051482294);
    InitializeEvent(9, 205148200, 2051480209, 30003, 20003, 1060320051, 2051482294);
    InitializeEvent(10, 205148200, 2051480210, 30003, 20003, 1058642330, 2051482293);
    InitializeEvent(11, 205148200, 2051480211, 30003, 20003, 1036831949, 2051482293);
    InitializeEvent(12, 205148200, 2051480212, 30003, 20003, 1050253722, 2051482295);
    InitializeEvent(13, 205148200, 2051480213, 30003, 20003, 1063675494, 2051482295);
    InitializeEvent(14, 205148200, 2051480214, 30003, 20003, 1050253722, 2051482296);
    InitializeEvent(15, 205148200, 2051480215, 30003, 20003, 1050253722, 2051482296);
    InitializeEvent(16, 205148200, 2051480216, 30003, 20003, 1050253722, 2051482295);
});

$Event(205148200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || EventFlag(X16_4)
            || (CharacterHasSpEffect(X0_4, 481)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90110)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160)));
    SetEventFlagID(X16_4, ON);
    WaitFixedTimeSeconds(0.1);
    GotoIf(L0, !CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450));
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    WaitFixedTimeSeconds(X12_4);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    EndEvent();
});


