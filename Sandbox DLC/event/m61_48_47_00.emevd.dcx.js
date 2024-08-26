// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76912, 2048471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005301, 2048470500, 2048470500, 40910, 0, 0);
    InitializeCommonEvent(0, 90005301, 2048470501, 2048470501, 40912, 0, 0);
    InitializeCommonEvent(0, 90005301, 2048470502, 2048470502, 40914, 0, 0);
});

$Event(2048470200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});


