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
    InitializeCommonEvent(0, 90005300, 1042500300, 1042500300, 1042500020, 0, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005201, 1042500300, 30000, 20000, 1106247680, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1042500401, 30001, 20001, 1106247680, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1042500351, 1120403456, 0, 0);
});
