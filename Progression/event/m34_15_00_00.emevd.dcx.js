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
    RegisterBonfire(34150000, 34151950, 0, 0, 0, 5);
    InitializeEvent(0, 34152500, 0);
    InitializeCommonEvent(0, 90005508, 34150510, 34151510, 0, 34151510, 34151511, 34151512, 34150511);
    InitializeCommonEvent(0, 90005110, 196, 9120, 34151599, 34150000, 8153, 806940, 9085, 60525, 0);
});

$Event(34152500, Default, function() {
    InitializeCommonEvent(0, 90005507, 34150510, 34151510, 0, 34151510, 34151511, 34152513, 34151512, 34152514, 34152511, 34152512, 34150511, 34152512, 0);
});

$Event(34152800, Restart, function() {
    EndIf(EventFlag(34150800));
    WaitFor(CharacterHPValue(34150800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(34150800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(34150800));
    HandleBossDefeatAndDisplayBanner(34150800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(34150800, ON);
});

$Event(34152810, Restart, function() {
    if (EventFlag(34150800)) {
        DisableCharacter(34150800);
        DisableCharacterCollision(34150800);
        ForceCharacterDeath(34150800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(34150800);
    DisableCharacterCollision(34150800);
    flagArea = EventFlag(34152805) && InArea(10000, 34152800);
    dmg = HasDamageType(34150800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
L2:
    EnableCharacterAI(34150800);
    EnableCharacterCollision(34150800);
    SetNetworkUpdateRate(34150800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 34150800, 0, 0);
});

$Event(34152849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 34150800, 34151800, 34152800, 34152805, 34155800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 34150800, 34151800, 34152800, 34152805, 34152806, 10000);
    InitializeCommonEvent(0, 9005811, 34150800, 34151800, 3, 0);
    InitializeCommonEvent(0, 9005822, 34150800, 900000, 34152805, 34152806, 0, 11002852, 0, 0);
});
