// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005261, 1040400206, 1040402206, 1092616192, 0, 3011);
    InitializeEvent(0, 1040402200, 1040400210);
    InitializeEvent(1, 1040402200, 1040400211);
    InitializeEvent(2, 1040402200, 1040400212);
    InitializeEvent(3, 1040402200, 1040400213);
    InitializeEvent(4, 1040402200, 1040400214);
    InitializeEvent(5, 1040402200, 1040400215);
    InitializeEvent(6, 1040402200, 1040400216);
    InitializeEvent(7, 1040402200, 1040400217);
    InitializeEvent(8, 1040402200, 1040400218);
    InitializeEvent(0, 1040402220, 1040400220);
    InitializeCommonEvent(0, 90005423, 1040400220);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005422, 1040408500, 1040401500, 1040403500);
});

$Event(1040402200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1040402220, Restart, function(X0_4) {
    SetSpEffect(X0_4, 5551);
    EndEvent();
});
