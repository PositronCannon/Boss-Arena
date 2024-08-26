// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2051470000, 2051471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005638, 2051470600, 2051471600, 2051471601);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 2051470200, 30003, 20003, 2051472200, 1073741824, 0, 0, 0, 0);
});


