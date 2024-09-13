// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1048400000, 1048401950, 0, 0, 0, 5);
    RegisterBonfire(1048400001, 1048401951, 0, 0, 0, 5);
    InitializeEvent(0, 1048402800, 0);
    InitializeEvent(0, 1048402810, 0);
    InitializeEvent(0, 1048402849, 0);
    InitializeCommonEvent(0, 90005706, 1048400700, 30018, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1048400700, true);
});

$Event(1048402800, Restart, function() {
    EndIf(EventFlag(1048400800));
    WaitFor(CharacterHPValue(1048400800) <= 0 && CharacterHPValue(1048400801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1048400800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1048400800) && CharacterDead(1048400801));
    HandleBossDefeatAndDisplayBanner(1048400800, TextBannerType.EnemyFelled);
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, -11100);
    EnableObjAct(1048401550, -1);
});

$Event(1048402810, Restart, function() {
    if (EventFlag(1048400800)) {
        DisableCharacter(1048400800);
        DisableCharacterCollision(1048400800);
        ForceCharacterDeath(1048400800, false);
        DisableCharacter(1048400801);
        DisableCharacterCollision(1048400801);
        ForceCharacterDeath(1048400801, false);
        EnableObjAct(1048401550, -1);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(1048400800, 30005, true, false, false);
    DisableCharacterAI(1048400801);
    DisableCharacterAI(1048400800);
    DisableObjAct(1048401550, -1);
    WaitFor(EventFlag(1048402805) && InArea(10000, 1048402800));
    EnableCharacterAI(1048400801);
    SetNetworkUpdateRate(1048400801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1048400801, 0, 904340542);
    ForceAnimationPlayback(1048400801, 3012, true, false, false);
    SetNetworkUpdateRate(1048400800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1048400800, 1, 904340541);
    WaitFixedTimeSeconds(2.2);
    EnableCharacterAI(1048400800);
    ForceAnimationPlayback(1048400800, 20005, true, false, false);
});

$Event(1048402849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1048400800, 1048401800, 1048402800, 1048402805, 1048405800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1048400800, 1048401800, 1048402800, 1048402805, 1048402806, 10000);
    InitializeCommonEvent(0, 9005811, 1048400800, 1048401800, 3, 0);
    InitializeCommonEvent(0, 9005811, 1048400800, 1048401801, 3, 0);
    InitializeCommonEvent(0, 9005822, 1048400800, 920900, 1048402805, 1048402806, 0, 1048402802, 0, 0);
});
