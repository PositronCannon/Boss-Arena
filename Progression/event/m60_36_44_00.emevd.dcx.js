// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeEvent(0, 1036442203, 1036440203);
    InitializeEvent(1, 1036442203, 1036440204);
    InitializeEvent(2, 1036442203, 1036440205);
    InitializeEvent(3, 1036442203, 1036440206);
    InitializeCommonEvent(0, 90005300, 1036440250, 1036440250, 40202, 0, 0);
    InitializeCommonEvent(0, 90005300, 1036440260, 1036440260, 1036440200, 0, 0);
    InitializeCommonEvent(0, 90005920, 1036440600, 1036441600, 1036443600);
    InitializeCommonEvent(0, 90005705, 1036440700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1036440700, true);
    InitializeCommonEvent(0, 90005201, 1036440210, 30002, 20002, 1088421888, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036440220, 1036442220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036440230, 1036442220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036440231, 1036442220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036440241, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005251, 1036440242, 1097859072, 0, 0);
});

$Event(1036442203, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});
