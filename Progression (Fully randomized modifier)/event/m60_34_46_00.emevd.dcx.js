// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1034460000, 1034461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005920, 1034460600, 1034461600, 1034463600);
});

$Event(1034462210, Restart, function(X0_4) {
    ForceAnimationPlayback(X0_4, 30000, false, false, false);
    DisableAsset(1038461210);
    WaitFor(InArea(10000, 1034462210));
    EnableAsset(1038461210);
    WaitFixedTimeSeconds(3);
    ForceAnimationPlayback(X0_4, 20000, false, false, false);
    WaitFixedTimeSeconds(6);
    DisableAsset(1038461210);
    EndEvent();
});
