// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005605, 1034511620, 268, 12012480, 0, 1034512620, 1034512621, 1034512622, 0, 0, 0, 0);
    InitializeCommonEvent(0, 900055278, 1034510739, 1034511739, 1506, 9320, 30051, 0, 0, 0);
    InitializeCommonEvent(0, 90005920, 1034510600, 1034511600, 1034513600);
    InitializeEvent(0, 1034512580, 0);
});

$Event(1034512580, Default, function() {
    RegisterLadder(1034510580, 1034510581, 1034511580);
});
