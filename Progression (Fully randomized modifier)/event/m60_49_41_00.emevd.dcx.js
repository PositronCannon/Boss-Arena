// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005300, 1049410299, 1049410299, 40426, 0, 0);
    InitializeEvent(0, 1049412580, 0);
    InitializeCommonEvent(0, 900005610, 1049411650, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 1049411651, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 1049411652, 100, 800, 0);
});

$Event(1049412580, Restart, function() {
    RegisterLadder(1049410580, 1049410581, 1049411580);
    RegisterLadder(1049410582, 1049410583, 1049411582);
    RegisterLadder(1049410584, 1049410585, 1049411584);
    RegisterLadder(1049410586, 1049410587, 1049411586);
    RegisterLadder(1049410588, 1049410589, 1049411588);
    RegisterLadder(1049410590, 1049410591, 1049411590);
    RegisterLadder(1049410592, 1049410593, 1049411592);
    RegisterLadder(1049410594, 1049410595, 1049411594);
    RegisterLadder(1049410596, 1049410597, 1049411596);
});
