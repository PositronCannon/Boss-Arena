// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(21020001, 21021951, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005102, 76945, 72120, 21021981, 77900, 1, 78900, 78901, 78902, 78903, 78904, 78905, 78906, 78907, 78908, 78909, 9146);
    InitializeEvent(0, 21022450, 0);
    InitializeCommonEvent(0, 90005501, 21020510, 21020511, 0, 21021510, 21021511, 21021512, 21020512);
    InitializeEvent(0, 21022510, 0);
    InitializeCommonEvent(0, 90005525, 21020570, 21021570);
    InitializeCommonEvent(0, 90005511, 21020560, 21021560, 21023560, 427036, 0);
    InitializeCommonEvent(0, 900005610, 21020490, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 21020491, 100, 800, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005301, 21020450, 21020450, 21021991, 0, 2);
    InitializeCommonEvent(0, 90005261, 21020202, 21022202, 1065353216, 0, 3009);
    InitializeCommonEvent(0, 90005261, 21020204, 21022204, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005445, 21020207, 30004, 20004, 21022207, 1072064102, 1, 0, 0, 0, 21021207);
    InitializeCommonEvent(0, 90005211, 21020209, 30000, 20000, 21022209, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21020215, 21022215, 1065353216, 0, 3002);
    InitializeCommonEvent(0, 90005261, 21020230, 21022230, 1065353216, 1036831949, -1);
    InitializeCommonEvent(0, 90005211, 21020250, 30000, 20000, 21022230, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21020251, 30000, 20000, 21022230, 1065353216, 1066192077, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21020252, 30000, 20000, 21022230, 1065353216, 1084437299, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21020253, 30000, 20000, 21022230, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21020256, 30000, 20000, 21022256, 1065353216, 1066192077, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21020257, 30000, 20000, 21022256, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21020258, 30000, 20000, 21022258, 1065353216, 1036831949, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 21020259, 30000, 20000, 21022258, 1065353216, 1056964608, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 21020270, 21022270, 1065353216, 0, 3004);
    InitializeCommonEvent(0, 90005261, 21020450, 21022450, 1065353216, 0, 0);
});

$Event(21020050, Default, function() {
    EndIf(ThisEventSlot());
});

$Event(21022450, Restart, function() {
    EndIf(CharacterDead(21020450));
    WaitFor(InArea(10000, 21022450));
    SetSpEffect(10000, 20011739);
    WaitFixedTimeSeconds(2.5);
    RestartEvent();
});

$Event(21022510, Default, function() {
    InitializeCommonEvent(0, 90005500, 21020510, 21020511, 0, 21021510, 21021511, 21023511, 21021512, 21023512, 21022511, 21022512, 21020512, 21020513, 0);
});

$Event(21022920, Restart, function(X0_4, X4_4) {
    DeleteAssetfollowingSFX(X0_4, true);
    DeleteAssetfollowingSFX(X4_4, true);
    CreateAssetfollowingSFX(X0_4, 90, 6100);
    CreateAssetfollowingSFX(X4_4, 90, 6100);
    onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(9000, X0_4);
    onlineAct2 = PlayerIsInOwnWorld() && ActionButtonInArea(9000, X4_4);
    WaitFor(onlineAct || onlineAct2);
    if (!onlineAct2.Passed) {
        WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Asset, X4_4, 100, 10000, false, true);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Asset, X0_4, 100, 10000, false, true);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


