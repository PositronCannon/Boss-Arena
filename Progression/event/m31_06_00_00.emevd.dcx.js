// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(31060000, 31061950, 0, 0, 0, 5);
    InitializeEvent(0, 31062800, 0);
    InitializeEvent(0, 31062801, 0);
    InitializeEvent(0, 31062802, 0);
    InitializeEvent(0, 31062810, 0);
    InitializeEvent(0, 31062849, 0);
    InitializeEvent(0, 31062811, 0);
    InitializeCommonEvent(0, 90005525, 31060600, 31061600);
    InitializeCommonEvent(0, 90005511, 31060540, 31061540, 31063540, 27043, 0);
    InitializeCommonEvent(0, 90005512, 31060540, 31062540, 31062541);
    InitializeCommonEvent(0, 90005646, 31060800, 31062840, 31062841, 31061840, 31062840, 1567);
    InitializeCommonEvent(0, 91005600, 31062800, 31061695, 5);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 31060200, 31062200, 1073741824, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 31060201, 31062200, 1073741824, 1067030938, 0);
    InitializeCommonEvent(0, 90005261, 31060202, 31062200, 1073741824, 1068708659, 0);
    InitializeCommonEvent(0, 90005261, 31060203, 31062203, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060204, 31062203, 1073741824, 1045220557, 0);
    InitializeCommonEvent(0, 90005261, 31060205, 31062205, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060211, 31062211, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060212, 31062211, 1073741824, 1045220557, 0);
    InitializeCommonEvent(0, 90005261, 31060215, 31062215, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060280, 31062280, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060281, 31062281, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060282, 31062281, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060283, 31062283, 1073741824, 0, 0);
    InitializeCommonEvent(0, 90005261, 31060300, 31062300, 1073741824, 0, 0);
});

$Event(31062300, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(InArea(31060300, 31062301));
    WaitFixedTimeSeconds(2);
    ChangeCharacterPatrolBehavior(31060300, 31063301);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(31062800, Restart, function() {
    EndIf(EventFlag(31060800));
    WaitFor(CharacterDead(31060800) && CharacterDead(31060801));
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(31060800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0,90001023,1049304147,1049304049,1049304045,-1,1049304741,1049304611,1049304612,1049304613,1049304744,1049304746,1049304749,1049300147);
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
});

$Event(31062801, Restart, function() {
    EndIf(EventFlag(31060800));
    WaitFor(CharacterHPValue(31060800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31060800, SoundType.SFX, 888880000);
});

$Event(31062802, Restart, function() {
    EndIf(EventFlag(31060800));
    WaitFor(CharacterHPValue(31060801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31060801, SoundType.SFX, 888880000);
});

$Event(31062810, Restart, function() {
    if (EventFlag(31060800)) {
        DisableCharacter(31060800);
        DisableCharacter(31060801);
        DisableCharacterCollision(31060800);
        DisableCharacterCollision(31060801);
        ForceCharacterDeath(31060800, false);
        ForceCharacterDeath(31060801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31060800);
    DisableCharacterAI(31060801);
    ForceAnimationPlayback(31060800, 30000, false, false, false);
    ForceAnimationPlayback(31060801, 30000, false, false, false);
    WaitFor(
        (PlayerIsInOwnWorld() && InArea(10000, 31062800))
            || HasDamageType(31060800, 10000, DamageType.Unspecified)
            || HasDamageType(31060801, 10000, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(31060801, ON);
    Goto(L2);
L1:
    WaitFor(EventFlag(31062805) && InArea(10000, 31062800));
L2:
    EnableCharacterAI(31060800);
    EnableCharacterAI(31060801);
    SetNetworkUpdateRate(31060800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(31060801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31060800, 0, 903350310);
    DisplayBossHealthBar(Enabled, 31060801, 1, 903350311);
    ForceAnimationPlayback(31060800, 20000, false, false, false);
    ForceAnimationPlayback(31060801, 20000, false, false, false);
});

$Event(31062811, Restart, function() {
    EndIf(EventFlag(31060800));
    WaitFor(CharacterDead(31060800) || CharacterDead(31060801));
    SetEventFlagID(31062842, ON);
});

$Event(31062849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 31060800, 31061800, 31062800, 31062805, 31065800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 31060800, 31061800, 31062800, 31062805, 31062806, 10000);
    InitializeCommonEvent(0, 9005811, 31060800, 31061800, 3, 0);
    InitializeCommonEvent(0, 9005813, 31060800, 31061801, 3, 0, 806760);
    InitializeCommonEvent(0, 9005822, 31060800, 931000, 31062805, 31062806, 0, 31062842, 0, 0);
});
