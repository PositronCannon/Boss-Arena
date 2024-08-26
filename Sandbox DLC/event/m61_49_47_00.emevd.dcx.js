// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2049470000, 2049471950, 0, 0, 0, 5);
    InitializeEvent(0, 2049472505, 0);
});

$Event(2049472505, Restart, function() {
    DisableNetworkSync();
    WaitFor(
        PlayerIsInOwnWorld()
            && !HasMultiplayerState(MultiplayerState.Multiplayer)
            && ActionButtonInArea(209620, 21001576));
    WaitFixedTimeSeconds(0.1);
    SetEventFlagID(9021, ON);
    SetPlayerRespawnPoint(2049472020);
    SaveRequest();
    PlayCutsceneToPlayerAndWarp(21000000, CutscenePlayMode.Skippable, 2049472020, 61494700, 10000, 21000000, false);
    WaitFixedTimeRealFrames(1);
    PlayCutsceneToPlayer(21000010, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeFrames(1);
    WaitFixedTimeSeconds(1);
});


