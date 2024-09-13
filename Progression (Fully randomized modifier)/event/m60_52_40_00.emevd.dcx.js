// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1052402200, 0);
    InitializeEvent(0, 1052402210, 0);
});

$Event(1052402200, Restart, function() {
    InitializeCommonEvent(0, 9005811, 1252380800, 1052401800, 5, 0);
});

$Event(1052402210, Restart, function() {
    EndIf(EventFlag(1052408600));
    if (!EventFlag(1252380800)) {
        DisableObjAct(1052401550, -1);
        WaitFor(EventFlag(1252380800));
    }
L0:
    EnableObjAct(1052401550, -1);
});
