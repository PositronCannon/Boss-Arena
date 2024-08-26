// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76314, 1045521950, 0, 0, 0, 5);
    InitializeEvent(0, 1045522500, 0);
    InitializeCommonEvent(0, 90005870, 1045520800, 903250600, 12);
    InitializeCommonEvent(0, 90005860, 1045520800, 0, 1045520800, 0, 30315, 0);
    InitializeCommonEvent(0, 90005872, 1045520800, 12, 0);
    InitializeCommonEvent(0, 9005811, 1045520800, 1045521800, 5, 0);
    InitializeCommonEvent(0, 90005251, 1045520201, 1116471296, 0, 3006);
    InitializeEvent(0, 1045522200, 0);
    InitializeCommonEvent(0, 90005300, 1045520200, 1045520200, 30360, 0, 0);
    InitializeCommonEvent(0, 90005300, 1045520202, 1045520202, 30365, 0, 0);
    InitializeCommonEvent(0, 90005251, 1045520300, 1120403456, 0, 0);
    InitializeCommonEvent(0, 90005251, 1045520301, 1120403456, 0, 0);
    InitializeCommonEvent(0, 90005251, 1045520302, 1120403456, 0, 0);
    InitializeCommonEvent(0, 90005251, 1045520303, 1120403456, 0, 0);
    InitializeCommonEvent(0, 90005251, 1045520304, 1120403456, 0, 0);
    InitializeCommonEvent(0, 90005201, 1045520400, 30000, 20000, 1107558400, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005560, 1045520600, 1045521600, 0);
    InitializeCommonEvent(0, 90005683, 62315, 1045521300, 205, 78394, 78394);
    InitializeCommonEvent(0, 900005610, 1045521685, 100, 800, 1045528600);
    InitializeCommonEvent(0, 900005610, 1045521680, 100, 800, 0);
    InitializeCommonEvent(0, 90005780, 1045520800, 1045522160, 1045522161, 1045520710, 20, 1045522720, 1042559208, 0, 0);
    InitializeCommonEvent(0, 90005781, 1045520800, 1045522160, 1045522161, 1045520710);
    InitializeCommonEvent(0, 90005783, 1045520800, 1045522160, 1045522161, 1045520710, 1045522722, 1045522721, 0);
    InitializeCommonEvent(0, 90005780, 1045520800, 1045522170, 1045522171, 1045520730, 20, 1045522731, 1045529250, 0, 0);
    InitializeCommonEvent(0, 90005781, 1045520800, 1045522170, 1045522171, 1045520730);
    InitializeCommonEvent(0, 90005783, 1045520800, 1045522170, 1045522171, 1045520730, 1045522730, 1045522732, 0);
    InitializeCommonEvent(0, 90005790, 0, 1045520180, 1045522181, 1045522182, 1045520705, 23, 1045522180, 1044522181, 0, 35009315, 0, 0);
    InitializeCommonEvent(0, 90005791, 1045520180, 1045522181, 1045522182, 1045520705);
    InitializeCommonEvent(0, 90005792, 1045520180, 1045522181, 1045522182, 1045520705, 113800, 0);
    InitializeCommonEvent(0, 90005793, 1045520180, 1045522181, 1045522182, 1045520705, 1045522180, 0, 0);
    InitializeEvent(0, 1045520700, 0);
    InitializeEvent(0, 1045520710, 0);
    InitializeEvent(0, 1045520720, 0);
    //init boss reward
    InitializeEvent(0, 1045529990, 0);
});

//generic boss event
$Event(1045529990, Default, function() {
    WaitFor(CharacterDead(1045520800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304207,1049304106,-1,-1,1049304883,1049304884,1049304885,1049304886,1049305465,1049305468,1049305470,1049305475,1049300207);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1045520700, true);
    SetCharacterBackreadState(1045520701, true);
    SetCharacterBackreadState(1045520705, true);
});

$Event(1045522200, Restart, function() {
    EndIf(EventFlag(1045520200));
    WaitFor(AllPlayersInArea(1045522182));
    SetSpEffect(1045520200, 8082);
    ClearCharactersAITarget(1045520200);
});

$Event(1045522500, Restart, function() {
    if (EventFlag(1045520500)) {
        DisableAsset(1045521500);
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(1045522550)) {
            DeleteAssetfollowingSFX(1045521500, true);
            CreateAssetfollowingSFX(1045521500, 101, 1540);
            SetNetworkconnectedEventFlagID(1045522550, ON);
        }
L2:
        onlineAct = PlayerIsInOwnWorld() && ActionButtonInArea(9503, 1045521500);
        flag = EventFlag(182) && EventFlag(105);
        WaitFor(onlineAct || flag);
        if (!flag.Passed) {
            DisplayGenericDialog(20003, PromptType.YESNO, NumberofOptions.NoButtons, 1045521500, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L3:
        SetNetworkconnectedEventFlagID(1045520500, ON);
        DeleteAssetfollowingSFX(1045521500, true);
        DisableAsset(1045521500);
        EndEvent();
    }
L1:
    DeleteAssetfollowingSFX(1045521500, true);
    CreateAssetfollowingSFX(1045521500, 101, 1540);
    EndEvent();
});

$Event(1045520700, Restart, function() {
    EnableAssetInvunerability(1045521700);
    DisableCharacterGravity(1045520700);
    DisableCharacterCollision(1045520700);
    ForceAnimationPlayback(1045520700, 90101, false, false, false);
    IssueShortWarpRequest(1045520700, TargetEntityType.Area, 1045522700, -1);
});

$Event(1045520710, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!AnyBatchEventFlags(1042559207, 1042559209));
    WaitFor(AnyBatchEventFlags(4181, 4183));
    BatchSetNetworkconnectedEventFlags(1042559207, 1042559209, OFF);
    EndEvent();
});

$Event(1045520720, Restart, function() {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1045529250, OFF);
    EndIf(EventFlag(1045520800));
    EndIf(EventFlag(7606));
    SetEventFlagID(1045529250, ON);
    EndEvent();
});

$Event(150, Default, function() {
    InitializeCommonEvent(0, 90005485, 1045520202);
});
