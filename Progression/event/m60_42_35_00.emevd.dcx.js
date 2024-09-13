// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1042352222, 1042350222, 1042352222);
    InitializeEvent(1, 1042352222, 1042350223, 1042352223);
    InitializeEvent(2, 1042352222, 1042350224, 1042352223);
    InitializeCommonEvent(0, 90005633, 580340, 580040, 1042350600, 30017, 20017, 1042351600, 1042351610);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 1042350210, 1042352210, 0, -1);
    InitializeCommonEvent(0, 90005201, 1042350200, 30016, 20016, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1042350200, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005201, 1042350201, 30016, 20016, 1101004800, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1042350201, 1101004800, 1065353216, -1);
    InitializeCommonEvent(0, 90005201, 1042350202, 30016, 20016, 1101004800, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1042350202, 1101004800, 1069547520, -1);
});

$Event(1042352222, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(InArea(10000, X4_4));
    SetSpEffect(X0_4, 8080);
});
