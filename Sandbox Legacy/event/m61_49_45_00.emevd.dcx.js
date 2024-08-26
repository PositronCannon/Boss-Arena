// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //infinite hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeCommonEvent(0, 90005870, 2049450800, 905820601, 16);
    //boss event
    InitializeCommonEvent(0, 90005860, 2049450800, 0, 2049450800, 0, 30930, 0);
    InitializeCommonEvent(0, 90005251, 2049450300, 1108082688, 0, -1);
});


