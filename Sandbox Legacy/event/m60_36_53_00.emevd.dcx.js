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
    InitializeCommonEvent(0, 90005261, 1036530200, 1036532200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036530200, 30001, 20001, 1036532200, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036530201, 1036532200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1036530201, 30001, 20001, 1036532200, 1092616192, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1036532300, 0);
    InitializeEvent(0, 1036532500, 0);
    InitializeEvent(0, 1036532450, 1036531400);
    InitializeEvent(1, 1036532450, 1036531401);
    InitializeEvent(2, 1036532450, 1036531402);
    InitializeEvent(0, 1036533700, 0);
});

$Event(1036532300, Restart, function() {
    ClearSpEffect(1036530300, 5070);
    ClearSpEffect(1036530301, 5070);
    ClearSpEffect(1036530302, 5070);
    ClearSpEffect(1036530303, 5070);
    ClearSpEffect(1036530304, 5070);
    ClearSpEffect(1036530305, 5070);
    ClearSpEffect(1036530306, 5070);
    ClearSpEffect(1036530307, 5070);
});

$Event(1036532450, Restart, function(X0_4) {
    DisableAsset(X0_4);
    EndEvent();
});

$Event(1036532500, Default, function() {
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003270, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003260, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003250, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003240, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003230, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003220, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003210, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1036532200, 1036531200, 200, 0, 802003200, 1065353216, 0, 1065353216);
    }
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003270, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003260, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003250, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003240, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003230, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003220, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003210, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1036532201, 1036531201, 200, 0, 802003200, 1065353216, 0, 1065353216);
    }
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003270, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003260, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003250, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003240, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003230, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003220, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003210, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1036532202, 1036531202, 200, 0, 802003200, 1065353216, 0, 1065353216);
    }
});

$Event(1036533700, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3670));
    EndIf(EventFlag(400179));
    WaitFor(EventFlag(400179));
    SetNetworkconnectedEventFlagID(1035539204, ON);
    EndEvent();
});
