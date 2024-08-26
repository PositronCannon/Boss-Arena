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
    InitializeCommonEvent(0, 90005300, 1042530501, 1042530501, 1042530300, 0, 0);
    InitializeCommonEvent(0, 90005390, 1042530350, 1042532350, 1042530365, 1042530350, 0, 1043530100);
    InitializeCommonEvent(0, 90005391, 1042530350, 1042532350, 1042530365, 1042530350, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1042530202, 1042532202, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042530201, 30002, 20002, 1042532300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1042530305, 30010, 20010, 1042532305, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1042530317, 30010, 20010, 1042532305, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1042530318, 30010, 20010, 1042532305, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1042530319, 1042532202, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1042530320, 1042532202, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1042530323, 1042532202, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042530300, 30005, 20021, 1042532300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042530308, 30010, 20010, 1042532300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042530309, 30010, 20010, 1042532300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1042530322, 1042532300, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005201, 1042530314, 30005, 20021, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1042530403, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1042530407, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1042530409, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1042530413, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1042532365, 1042530365);
});

$Event(1042532365, Restart, function(X0_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, 30012, true, false, false);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
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
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    EnableCharacterAI(X0_4);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005490, 1042530402, 1042530403, 1042531402, 0, 0, 1042532402, 0);
    InitializeCommonEvent(0, 90005490, 1042530406, 1042530407, 1042531406, 0, 0, 1042532406, 1);
    InitializeCommonEvent(0, 90005490, 1042530408, 1042530409, 1042531408, 0, 0, 1042532408, 1);
    InitializeCommonEvent(0, 90005490, 1042530412, 1042530413, 1042531412, 0, 0, 1042532412, 1);
});
