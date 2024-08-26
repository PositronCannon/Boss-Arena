// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,82,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeEvent(0, 1041392340, 1041390705);
    InitializeEvent(1, 1041392340, 1041390706);
    InitializeEvent(2, 1041392340, 1041390707);
    InitializeEvent(3, 1041392340, 1041390708);
    InitializeCommonEvent(0, 90005705, 1041390700);
    InitializeCommonEvent(0, 90005706, 1041390720, 30023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041390700, true);
    SetCharacterBackreadState(1041390720, true);
    InitializeCommonEvent(0, 90005261, 1041390200, 1041382200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1041390201, 1041382200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1041390202, 1041382200, 1092616192, 0, -1);
});

$Event(1041392340, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, true);
});
