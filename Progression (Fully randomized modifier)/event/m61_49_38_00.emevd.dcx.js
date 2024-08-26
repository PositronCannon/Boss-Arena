// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005706, 2049380700, 30014, 2049382700);
    InitializeEvent(0, 2049380700, 2049381700, 2049380700);
});

$Event(2049380700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EnableAssetInvunerability(X0_4);
    WarpAssetToCharacter(X0_4, X4_4, -1);
    EndEvent();
});


