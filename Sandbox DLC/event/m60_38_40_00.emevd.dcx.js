// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000"
// @linked    [0,72,154,238]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1038400000, 1038401950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76206, 76201, 1038401980, 77200, 1, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    InitializeCommonEvent(0, 90005251, 1038400210, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005630, 61384000, 1038401500, 122);
});
