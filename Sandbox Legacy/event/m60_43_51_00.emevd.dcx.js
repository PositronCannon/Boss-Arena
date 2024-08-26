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
    InitializeCommonEvent(0, 90005300, 1043510500, 1043510500, 40314, 0, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1043510400, 30000, 20000, 1043512400, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043510401, 30001, 20001, 1043512400, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043510402, 30001, 20001, 1043512400, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043510403, 30001, 20001, 1043512400, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043510404, 30001, 20001, 1043512400, 0, 0, 0, 0, 0);
});
