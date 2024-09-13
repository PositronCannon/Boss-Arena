// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1042402650, 710670, 1670, 9123, 69230);
    InitializeEvent(0, 1042402655, 0);
    InitializeEvent(0, 1042402657, 0);
    InitializeEvent(0, 1042402656, 0);
    InitializeEvent(0, 1042402390, 0);
    InitializeCommonEvent(0, 90005706, 1042400700, 90101, 0);
    InitializeEvent(0, 1042402659, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042400700, true);
});

$Event(1042402650, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

$Event(1042402655, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        !EventFlag(710860)
            && InArea(10000, 1042402655)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(710860, ON);
    SetEventFlagID(60360, ON);
    if (!EventFlag(6080)) {
        SetEventFlagID(6080, ON);
        StartPS5Activity(7);
    }
    WaitFixedTimeFrames(1);
    ShowTutorialPopup(1860, true, true);
    if (!EventFlag(69460)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9151, 710860, 1);
    }
    WaitFixedTimeFrames(1);
    SetEventFlagID(69460, ON);
});

$Event(1042402657, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        EventFlag(710880)
            && !EventFlag(69480)
            && !EventFlag(2051)
            && !EventFlag(2052)
            && PlayerIsInOwnWorld()
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    WaitFixedTimeFrames(1);
    ShowTutorialPopup(1880, true, true);
    if (!EventFlag(69480)) {
        DirectlyGivePlayerItem(ItemType.Goods, 9153, 710880, 1);
    }
    SetEventFlagID(69480, ON);
});

$Event(1042402656, Restart, function() {
    EndIf(EventFlag(1042408560));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
            EnableObjAct(1042401656, 400655);
            online |= HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending);
            WaitFor(online);
            DisableObjAct(1042401656, 400655);
            RestartEvent();
        }
    }
L0:
    DisableObjAct(1042401656, 400655);
    online |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    WaitFor(!online);
    EnableObjAct(1042401656, 400655);
    RestartEvent();
});

$Event(1042402658, Restart, function() {
    EndIf(EventFlag(1042408560));
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
            EnableObjAct(1042401656, 400655);
            online |= HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending);
            WaitFor(online);
            DisableObjAct(1042401656, 400655);
            RestartEvent();
        }
    }
L0:
    DisableObjAct(1042401656, 400655);
    online |= HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    WaitFor(!online);
    EnableObjAct(1042401656, 400655);
    RestartEvent();
});

$Event(1042402659, Restart, function() {
    WaitFixedTimeFrames(1);
    DisableCharacter(1042400700);
});

$Event(1042403700, Restart, function(X0_4) {
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 30025, false, false, false);
});

$Event(1042402390, Restart, function() {
    DisableNetworkSync();
    WaitFor(PlayerInMap(60, 42, 40, 0));
    if (!InArea(10000, 1042402390)) {
L1:
        SetSpEffect(10000, 4211);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    ClearSpEffect(10000, 4211);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
