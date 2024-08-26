// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeEvent(0, 1051372598, 1051371600, 2437948, 1051382300, 0, 0, 1052382610, 1052382611);
    InitializeEvent(0, 1051372599, 0);
});

$Event(1051372598, Restart, function(X0_4, X4_1, X5_1, X6_1, X7_1, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X20_4, OFF);
    SetEventFlagID(X24_4, OFF);
    DeleteAssetfollowingSFX(X0_4, true);
    CreateAssetfollowingSFX(X0_4, 200, 806870);
    onlineAct = PlayerIsInOwnWorld()
        && !HasMultiplayerState(MultiplayerState.MultiplayerPending)
        && ActionButtonInArea(9140, X0_4);
    online = HasMultiplayerState(MultiplayerState.MultiplayerPending)
        && !HasMultiplayerState(MultiplayerState.Multiplayer);
    onlineAct2 = PlayerIsInOwnWorld()
        && HasMultiplayerState(MultiplayerState.MultiplayerPending)
        && HasMultiplayerState(MultiplayerState.Multiplayer)
        && ActionButtonInArea(9140, X0_4);
    WaitFor(
        onlineAct
            || online
            || onlineAct2
            || HasMultiplayerState(MultiplayerState.InvasionPending)
            || HasMultiplayerState(MultiplayerState.Invasion));
    if (!onlineAct.Passed) {
        if (!onlineAct2.Passed) {
            DeleteAssetfollowingSFX(X0_4, true);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
    }
L3:
    DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, X0_4, 3, X20_4, X24_4, X24_4);
    if (!EventFlag(X20_4)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L6:
    if (!((HasMultiplayerState(MultiplayerState.MultiplayerPending)
        && HasMultiplayerState(MultiplayerState.Multiplayer))
        || (!HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && !HasMultiplayerState(MultiplayerState.Multiplayer)))) {
        RestartEvent();
    }
    RestartIf(
        HasMultiplayerState(MultiplayerState.InvasionPending)
            || HasMultiplayerState(MultiplayerState.Invasion));
    RotateCharacter(10000, X0_4, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    SetNetworkconnectedEventFlagID(1052382602, ON);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, X8_4, 10, 10000, false, true);
    DisableCharacterInvincibility(10000);
    if (!EventFlag(1252380800)) {
        if (PlayerIsInOwnWorld()) {
            IssueBossRoomEntryNotification();
        }
L2:
        ActivateMultiplayerdependantBuffs(1052385800);
        SendInvadingPhantomsHome(0);
        SetNetworkconnectedEventFlagID(1052382805, ON);
    }
L4:
    RestartEvent();
    Goto(S0);
    SetEventFlagID(X16_4, OFF);
S0:
    Goto(S1);
    WarpPlayer(X4_1, X5_1, X6_1, X7_1, X8_4, X12_4);
S1:
    NoOp();
});

$Event(1051372599, Restart, function() {
    DisableNetworkSync();
    EndIf(PlayerIsInOwnWorld());
    EndIf(
        CharacterInvadeType(10000, 2)
            || CharacterInvadeType(10000, 3)
            || CharacterInvadeType(10000, 4)
            || CharacterInvadeType(10000, 5));
    WaitFor(EventFlag(1052382602));
    WarpCharacterAndCopyFloorWithFadeout(20000, TargetEntityType.Area, 1051382302, 10, 20000, false, true);
    if (!EventFlag(1252380800)) {
        ActivateMultiplayerdependantBuffs(1052385800);
        SetNetworkconnectedEventFlagID(1052382806, ON);
    }
L1:
    EndEvent();
});
