// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeCommonEvent(0, 90005261, 1037410200, 1037412200, 1077936128, 0, 3020);
    InitializeCommonEvent(0, 90005261, 1037410201, 1037412200, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410202, 1037412200, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410203, 1037412200, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410204, 1037412204, 1077936128, 0, 3020);
    InitializeCommonEvent(0, 90005261, 1037410205, 1037412204, 1077936128, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037410206, 1037412204, 1077936128, 0, -1);
    InitializeCommonEvent(0, 900005610, 1037411680, 100, 800, 0);
    InitializeEvent(0, 1037410220, 1037410220);
});

$Event(1037410220, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});
