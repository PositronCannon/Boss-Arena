// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005250, 1048390203, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390204, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390205, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390402, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390403, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390404, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390405, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390406, 1048392203, 0, -1);
    InitializeCommonEvent(0, 90005250, 1048390407, 1048392203, 0, -1);
    RegisterBonfire(1048390000, 1048391950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76418, 76409, 1048391980, 77400, 2, 78400, 78401, 78402, 78403, 78404, 78405, 78406, 78407, 78408, 78409);
    InitializeCommonEvent(0, 90005630, 61483900, 1048391500, 123);
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004070, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004060, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004050, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004040, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004030, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004020, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004010, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1048392501, 1048391501, 200, 0, 802004000, 1065353216, 0, 1065353216);
    }
    InitializeCommonEvent(0, 90005705, 1048390705);
    InitializeCommonEvent(0, 90005706, 1048390701, 930027, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1048390700, true);
    SetCharacterBackreadState(1048390701, true);
    SetCharacterBackreadState(1048390705, true);
});
