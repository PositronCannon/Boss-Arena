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
    InitializeCommonEvent(0, 90005261, 1047550209, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550210, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550220, 1047552200, 1073741824, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550200, 1047552211, 1065353216, 0, -1);
    InitializeCommonEvent(0, 90005261, 1047550211, 1047552211, 1065353216, 0, -1);
});

$Event(1047552300, Restart, function(X0_4) {
    DisableCharacterAI(X0_4);
    EnableCharacterImmortality(X0_4);
    DisableCharacterHPBarDisplay(X0_4);
    ForceAnimationPlayback(X0_4, 30019, true, false, false);
});
