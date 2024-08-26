// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2047350000, 2047351950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005200, 2047350214, 30001, 20001, 2047352200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2047350215, 30001, 20001, 2047352200, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2047350216, 30001, 20001, 2047352200, 1066192077, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2047350213, 30001, 20001, 2047352201, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2047350219, 30001, 20001, 2047352201, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2047350220, 30001, 20001, 2047352201, 1056964608, 0, 0, 0, 0);
    InitializeEvent(0, 2047351500, 0);
});

$Event(2047351500, Restart, function() {
    if (EventFlag(2047350500)) {
        DisableAsset(2047351500);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(2047352550)) {
            DeleteAssetfollowingSFX(2047351500, true);
            CreateAssetfollowingSFX(2047351500, 101, 1550);
            SetNetworkconnectedEventFlagID(2047352550, ON);
        }
L2:
        onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(209504, 2047351500);
        flag = EventFlag(4927);
        WaitFor(onlineAct || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(2020004, PromptType.YESNO, NumberofOptions.NoButtons, 2047351500, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        SetNetworkconnectedEventFlagID(2047350500, ON);
        DeleteAssetfollowingSFX(2047351500, true);
        DisableAsset(2047351500);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(2047351500, true);
    CreateAssetfollowingSFX(2047351500, 101, 1550);
    EndEvent();
});


