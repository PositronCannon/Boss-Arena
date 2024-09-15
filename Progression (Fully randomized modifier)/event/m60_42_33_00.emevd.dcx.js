// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1042330000, 1042331950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1042330220, 1042330220, 40132, 0, 0);
    InitializeCommonEvent(0, 90005261, 1042330405, 1042332400, 1084227584, 0, 3006);
    InitializeCommonEvent(0, 90005620, 1042330570, 1042331570, 1042331571, 0, 1042332570, 1042332571, 1042332572);
    InitializeCommonEvent(0, 90005880, 1042330800, 1042330805, 1042332800, 1042330800, 1042330100, 2173500, 1042332805);
    InitializeCommonEvent(0, 90005882, 1042330800, 1042330805, 1042332800, 1042330800, 1042332806, 1042335810, 1042331800, 1042330810, 1042332810, 907100520, -1, 20002);
    InitializeCommonEvent(0, 90005885, 1042330800, 0, 1042332806, 1042332807, 0, 1);
    InitializeEvent(0, 1042332575, 1042330800, 1042330805, 1042332801, 1042332802, 20300, 1042331805, 2173500, 1042332805, 1042330570);
    InitializeEvent(0, 1042332576, 1042330800, 1042330805, 1042331805, 1042330570);
    InitializeCommonEvent(0, 90005400, 1042330230, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005401, 0, 1042330230);
    InitializeEvent(0, 1042332200, 1042330200, 0);
    InitializeEvent(1, 1042332200, 1042330201, 1073741824);
    InitializeEvent(2, 1042332200, 1042330202, 1065353216);
    InitializeEvent(3, 1042332200, 1042330203, 1056964608);
    InitializeEvent(4, 1042332200, 1042330204, 1069547520);
    InitializeEvent(5, 1042332200, 1042330205, 1073741824);
    InitializeEvent(6, 1042332200, 1042330206, 0);
    InitializeEvent(7, 1042332200, 1042330207, 1075838976);
    InitializeEvent(8, 1042332200, 1042330208, 1077936128);
    InitializeEvent(9, 1042332200, 1042330209, 1056964608);
    InitializeEvent(10, 1042332200, 1042330210, 0);
    InitializeEvent(11, 1042332200, 1042330212, 0);
    InitializeEvent(12, 1042332200, 1042330213, 1075838976);
    InitializeEvent(13, 1042332200, 1042330214, 1077936128);
    //init boss reward
    InitializeEvent(0, 1042332990, 0);
});

//ancient hero of zamor
$Event(1042332990, Default, function() {
    WaitFor(CharacterDead(1042330800));
    //boss rewards (4 bonus items)
    InitializeCommonEvent(0,90001024,1049304122,1049304026,1049304091,-1,1049304427,1049304495,1049304496,1049304497,1049304498,1049304429,1049304432,1049304437,1049304439,1049300122);
});

$Event(1042332200, Restart, function(X0_4, X4_4) {
    if (EventFlag(1242330400)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(1242330400));
    WaitFor(mainGroupAbuse);
    WaitFixedTimeSeconds(X4_4);
    ForceCharacterDeath(X0_4, false);
});

$Event(1042332575, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_1, X25_1, X26_1, X27_1, X28_4, X32_4) {
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && ActionButtonInArea(9230, X20_4));
    DisplayGenericDialogAndSetEventFlags(X16_4, PromptType.YESNO, NumberofOptions.TwoButtons, X20_4, 3, X8_4, X12_4, X12_4);
    RestartIf(EventFlag(X12_4));
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    if (!EventFlag(X32_4)) {
        WaitFixedTimeSeconds(0.5);
        DisplayGenericDialog(20510, PromptType.OKCANCEL, NumberofOptions.NoButtons, X20_4, 5);
        WaitFixedTimeSeconds(3);
        RestartEvent();
    }
    SetNetworkconnectedEventFlagID(X4_4, ON);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(10000, 60450, false, false, false);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, X28_4, -1, 10000, true, true);
    SetEventFlagID(9021, ON);
    EndEvent();
    WarpPlayer(X24_1, X25_1, X26_1, X27_1, X28_4, 0);
});

$Event(1042332576, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ForceAnimationPlayback(X8_4, 0, true, false, false);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && EventFlag(X12_4));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X8_4, 1, true, false, false);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending)));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042330700, true);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005451, 1042330400, 1042336420);
    InitializeCommonEvent(0, 90005452, 1042330400, 1242330400);
    InitializeCommonEvent(0, 90005454, 1042330400, 1242332400, 1242330400);
    InitializeCommonEvent(0, 90005458, 1042330400, 1042331401);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331420, 101, 0);
    InitializeCommonEvent(1, 90005453, 1042330400, 1042331421, 102, 1036831949);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331422, 103, 1045220557);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331423, 104, 1050253722);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331424, 105, 1053609165);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331425, 106, 1056964608);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331426, 107, 1058642330);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331427, 108, 1060320051);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331428, 109, 1061997773);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331429, 110, 1063675494);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331430, 111, 1065353216);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331436, 117, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331437, 118, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331438, 119, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331439, 120, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331440, 121, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331441, 122, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331442, 123, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331443, 124, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331444, 125, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331445, 126, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331446, 127, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331447, 128, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331452, 133, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331453, 134, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331454, 135, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331455, 136, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331456, 137, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331457, 138, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331458, 139, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331459, 140, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331460, 141, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331461, 142, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331468, 149, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331469, 150, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331470, 151, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331471, 152, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331472, 153, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331473, 154, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331474, 155, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331475, 156, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331476, 157, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331477, 158, 0);
    InitializeCommonEvent(0, 90005453, 1042330400, 1042331478, 159, 0);
    InitializeCommonEvent(0, 90005456, 1042330400, 1042331410, 1042331418, 1042330400);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005450, 1042330400, 1042331400, 1042331410, 1042331418);
});

$Event(1042332800, Restart, function() {
    WaitFor(EventFlag(1042332800) && PlayerIsInOwnWorld());
    DisableCharacter(1042335800);
    DisableCharacterCollision(1042335800);
    DisableAsset(1042335801);
    WaitFor(EventFlag(1042330800));
    WaitFixedTimeSeconds(7);
    EnableCharacter(1042335800);
    EnableCharacterCollision(1042335800);
    EnableAsset(1042335801);
});
