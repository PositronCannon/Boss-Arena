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
    InitializeEvent(0, 1035522200, 1035520200);
    InitializeEvent(1, 1035522200, 1035520201);
    InitializeEvent(2, 1035522200, 1035520202);
});

$Event(1035522200, Restart, function(X0_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 3015, false, false, true);
    EndEvent();
});
