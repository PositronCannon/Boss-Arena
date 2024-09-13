// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    RegisterBonfire(310300, 31031950, 0, 0, 0, 5);
    InitializeEvent(0, 31032800, 0);
    InitializeEvent(0, 31032810, 0);
    InitializeEvent(0, 31032811, 0);
    InitializeEvent(0, 31032849, 0);
    InitializeCommonEvent(0, 90005646, 31030800, 31032840, 31032841, 31031840, 31032840, 799);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 31030202, 31032202, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005211, 31030210, 30000, 20000, 31032210, 1086324736, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31030211, 30005, 20005, 31032210, 1090519040, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 31030216, 30001, 20001, 31032216, 1073741824, 0, 0, 0, 0, 0);
});

$Event(31032650, Restart, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(PlayerHasItemIncludingBBox(ItemType.Goods, 250));
    WaitFor(
        PlayerHasItemIncludingBBox(ItemType.Goods, 250)
            && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9115, X4_4, 1);
});

$Event(31032651, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        EventFlag(X8_4) && !EventFlag(X4_4) && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, X4_4, 1);
});

$Event(31032800, Restart, function() {
    EndIf(EventFlag(31030800));
    WaitFor(CharacterHPValue(31030800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31030800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31030800));
    HandleBossDefeatAndDisplayBanner(31030800, TextBannerType.EnemyFelled);
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, -11100);
});

$Event(31032810, Restart, function() {
    if (EventFlag(31030800)) {
        DisableCharacter(31030800);
        DisableCharacterCollision(31030800);
        ForceCharacterDeath(31030800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31030800);
    DisableCharacterCollision(31030800);
    ForceAnimationPlayback(31030800, 30003, false, false, false);
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 31032800));
    SetNetworkconnectedEventFlagID(31030801, ON);
    Goto(L2);
L1:
L2:
    EnableCharacterAI(31030800);
    EnableCharacterCollision(31030800);
    SetNetworkUpdateRate(31030800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31030800, 0, 903970310);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(31030800, 20003, false, false, false);
});

$Event(31032811, Restart, function() {
    EndIf(EventFlag(31030800));
    WaitFor(HPRatio(31030800) <= 0.6);
    SetEventFlagID(31032802, ON);
});

$Event(31032849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31030800, 31031800, 31032800, 31032805, 31035800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31030800, 31031800, 31032800, 31032805, 31032806, 10000);
    InitializeCommonEvent(0, 9005811, 31030800, 31031800, 3, 0);
    InitializeCommonEvent(0, 9005822, 31030800, 931000, 31032805, 31032806, 0, 31032802, 0, 0);
});


