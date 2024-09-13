// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1045512620, 0);
    InitializeCommonEvent(0, 900005610, 1045511680, 100, 800, 1045518620);
});

$Event(1045512620, Restart, function() {
    if (!EventFlag(1045510620)) {
        WaitFor(ObjActEventFlag(1145513620));
        SetEventFlagID(1045510620, ON);
        WaitFixedTimeSeconds(3);
    }
L0:
    DisableObjAct(1145511620, -1);
    ReproduceAssetAnimation(1145511620, 0);
    EndEvent();
});
