// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1034410000, 1034411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005501, 1034410510, 1034410511, 1, 1034411510, 1034411511, 1034411512, 1034410512);
    InitializeEvent(0, 1034412510, 0);
    InitializeCommonEvent(0, 90005640, 1034410540, 1034411540);
});

$Event(1034412510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1034410510, 1034410511, 1, 1034411510, 1034411511, 1034413511, 1034411512, 1034413512, 1034412511, 1034412512, 1034410512, 1034412513, 0);
});

$Event(1034410519, Default, function() {
    EndIf(EventFlag(1034410519));
    SetEventFlagID(1034410510, OFF);
});
