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
    RegisterBonfire(1038480000, 1038481950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005870, 1038480800, 904810601, 18);
    InitializeCommonEvent(0, 90005860, 1038480800, 0, 1038480800, 0, 30200, 0);
    InitializeCommonEvent(0, 90005872, 1038480800, 18, 0);
    InitializeEvent(0, 1038482580, 0);
    InitializeCommonEvent(0, 90005683, 62201, 1038481684, 209, 78290, 78290);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038480700, true);
    InitializeCommonEvent(0, 90005261, 1038480200, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480201, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480202, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480203, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480204, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480205, 1038482200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1038480206, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480207, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480208, 1038482200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1038480209, 1038482200, 0, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1038480210, 1038482200, 0, 1068708659, 1705);
    InitializeCommonEvent(0, 90005261, 1038480211, 1038482200, 0, 1065353216, 1705);
});

$Event(1038482580, Default, function() {
    RegisterLadder(1038480580, 1038480581, 1038481580);
    RegisterLadder(1038480582, 1038480583, 1038481582);
    RegisterLadder(1038480584, 1038480585, 1038481584);
});


