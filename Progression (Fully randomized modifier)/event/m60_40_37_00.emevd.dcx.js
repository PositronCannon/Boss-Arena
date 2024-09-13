// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(1040372200, Restart, function(X0_4, X4_4, X8_4) {
    
    
    DisableCharacter(X0_4);
    WaitFor(
        InArea(10000, X4_4)
            && (PlayerIsInOwnWorld() || CharacterType(10000, TargetType.WhitePhantom)));
    WaitFixedTimeSeconds(X8_4);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 3020, false, true, false);
    EndEvent();
});
