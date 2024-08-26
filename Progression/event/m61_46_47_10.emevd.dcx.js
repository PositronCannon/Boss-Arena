// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76941, 2046471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005102, 76945, 76941, 2046471980, 77900, 3, 78900, 78901, 78902, 78903, 78904, 78905, 78906, 78907, 78908, 78909, 9146);
    InitializeCommonEvent(0, 90005221, 2046470300, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470305, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470310, 30001, 20001, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470311, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470312, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470313, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470314, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470315, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470316, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470317, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470318, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470319, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470323, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470327, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470346, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470348, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470349, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470350, 30005, 20005, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470351, 30002, 20002, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470365, 30014, 20014, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470366, 30013, 20013, 0, 0);
    InitializeCommonEvent(0, 90005221, 2046470367, 30005, 20005, 0, 0);
    InitializeEvent(0, 2046472540, 2046478540, 2046471540, 2046471541, 2046473541, 1464026, 10, 2, 2046473540, 464057);
    InitializeCommonEvent(0, 900005580, 580600, 2046471500, 9146);
    InitializeCommonEvent(0, 90005748, 2046471700, 206020, 1030026, 1106247680, 4916);
});

$Event(2046472540, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    if (EventFlag(X0_4)) {
        DisableObjAct(X8_4, X16_4);
        DisableObjAct(X4_4, X32_4);
        ReproduceAssetAnimation(X4_4, X24_4);
        EndEvent();
    }
L0:
    obj = ObjActEventFlag(X12_4);
    obj2 = ObjActEventFlag(X28_4);
    WaitFor(obj || obj2);
    SetNetworkconnectedEventFlagID(X0_4, ON);
    if (!obj2.Passed) {
        DisableObjAct(X8_4, X16_4);
        DisableObjAct(X4_4, X32_4);
        ForceAnimationPlayback(X4_4, X20_4, false, false, false);
        EndEvent();
    }
L1:
    DisableObjAct(X8_4, X16_4);
    DisableObjAct(X4_4, X32_4);
    EndEvent();
});


