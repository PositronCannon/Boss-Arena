// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005251, 1043400200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005300, 1043400200, 1043400200, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1043402200, 0);
});

$Event(1043402200, Restart, function() {
    EndIf(EventFlag(1043400200));
    DisableCharacterHPBarDisplay(1043400200);
    SetSpEffect(1043400200, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1043400200, 12189);
    EnableCharacterHPBarDisplay(1043400200);
});
