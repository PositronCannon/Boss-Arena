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
    RegisterBonfire(76309, 1042511950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76314, 76309, 1042511980, 77300, 3, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    InitializeCommonEvent(0, 90005300, 1042510300, 1042510300, 1042510900, 0, 0);
    InitializeEvent(0, 1042512240, 1042511690, 1042511691, 62031);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 1042510300, 30004, 20004, 1042512301, 0, 0, 0, 0, 0);
});

$Event(1042512240, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    if (EventFlag(X8_4)) {
        ForceAnimationPlayback(X4_4, 1, false, false, false);
        DeleteAssetfollowingSFX(X0_4, true);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X0_4, 200, 803220);
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});
