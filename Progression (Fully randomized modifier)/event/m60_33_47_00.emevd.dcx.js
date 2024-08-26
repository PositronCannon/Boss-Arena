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
    RegisterBonfire(1033470000, 1033471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005605, 1033471610, 524, 12022210, 0, 1033472610, 1033472611, 1033472612, 1033470610, 0, 0, 0);
    InitializeEvent(0, 1033472611, 1033470611, 1033471611, 1033472613, 1033472614);
    InitializeEvent(0, 1033472612, 1033470611, 1033471612);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1033470200, 1033472200, 0, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1033470201, 1033472200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1033470202, 1033472200, 0, 1073741824, 1705);
    InitializeCommonEvent(0, 90005261, 1033470203, 1033472200, 0, 1069547520, 1705);
    InitializeCommonEvent(0, 90005261, 1033470204, 1033472200, 0, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1033470205, 1033472200, 0, 1065353216, 1705);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005421, 1033470300, 1033471301, 1033478301);
    InitializeCommonEvent(0, 90005422, 1033478301, 1033471300, 1033473301);
    InitializeCommonEvent(0, 90005424, 1033471300, 1033470302, 1033470303, 1033470300, 1033471301);
    InitializeCommonEvent(0, 90005423, 1033470302);
    InitializeCommonEvent(0, 90005423, 1033470303);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005420, 1033470300, 1033471300, 1033471301, 1033470301, 1033470302, 1033470303, 0);
});

$Event(1033472610, Restart, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    WaitFor(HasMultiplayerState(MultiplayerState.Singleplayer) && ActionButtonInArea(9140, X0_4));
    if (!EventFlag(1033470610)) {
        DisplayGenericDialogAndSetEventFlags(108186, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X12_4, X16_4, X16_4);
        if (!EventFlag(X12_4)) {
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L1:
        if (!PlayerHasItem(ItemType.Goods, 8186)) {
            DisplayGenericDialogAndSetEventFlags(308186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X0_4, 3, 0, 0, 0);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
        SetEventFlagID(1033470610, ON);
        DisplayGenericDialogAndSetEventFlags(208186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X0_4, 2, 0, 0, 0);
        RemoveItemFromPlayer(ItemType.Goods, 8186, 1);
    }
L5:
    RotateCharacter(10000, X0_4, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, 0);
});

$Event(1033472611, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4) || !PlayerIsInOwnWorld());
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    WaitFor(ActionButtonInArea(9523, X4_4));
    DisplayGenericDialogAndSetEventFlags(108186, PromptType.YESNO, NumberofOptions.TwoButtons, X4_4, 3, X8_4, X12_4, X12_4);
    if (!EventFlag(X8_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (!PlayerHasItem(ItemType.Goods, 8186)) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 50050, false, false, false);
        WaitFixedTimeSeconds(1.5);
        DisplayGenericDialog(308186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X4_4, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    IssueShortWarpRequest(10000, TargetEntityType.Asset, X4_4, 191);
    ForceAnimationPlayback(10000, 60810, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetNetworkconnectedEventFlagID(X0_4, ON);
    SetNetworkconnectedEventFlagID(1033470610, ON);
    DisplayGenericDialog(208186, PromptType.OKCANCEL, NumberofOptions.NoButtons, X4_4, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8186, 1);
});

$Event(1033472612, Restart, function(X0_4, X4_4) {
    if (EventFlag(X0_4)) {
        EnableAsset(X4_4);
        EndEvent();
    }
L0:
    DisableAsset(X4_4);
    WaitFor(EventFlag(X0_4));
    EnableAsset(X4_4);
});
