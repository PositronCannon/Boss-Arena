// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(34100000, 34101950, 0, 0, 0, 5);
    RegisterBonfire(34100002, 34101952, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005508, 34100510, 34101510, 0, 34101510, 34101511, 34101512, 34100511);
    InitializeEvent(0, 34102510, 0);
    InitializeCommonEvent(0, 90005605, 34101600, 2594, 34102600, 0, 34102610, 34102611, 34102612, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005110, 191, 9101, 34101650, 34100500, 8148, 806934, 9080, 60522, 0);
    InitializeCommonEvent(0, 90005300, 34100300, 34100300, 34100300, 0, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005200, 34100200, 30020, 20020, 34102200, 1097859072, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 34100201, 30020, 20020, 34102200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 34100202, 34102200, 1090519040, -1);
});

$Event(34102510, Default, function() {
    InitializeCommonEvent(0, 90005507, 34100510, 34101510, 0, 34101510, 34101511, 34102513, 34101512, 34102514, 34102511, 34102512, 34100511, 34102512, 0);
});

$Event(34102690, Restart, function() {
    DisableNetworkSync();
    GotoIf(L0, InArea(10000, 34102690));
    GotoIf(L1, InArea(10000, 34102691));
    ChangeWeather(Weather.None, -1, false);
    WaitFixedTimeSeconds(1);
    RestartEvent();
L0:
    cond |= WeatherActive(Weather.RainyClouds, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.RainyClouds, -1, false);
    Goto(L2);
L1:
    cond |= WeatherActive(Weather.HeavyFog, 0, 0);
    GotoIf(L2, cond);
    ChangeWeather(Weather.HeavyFog, -1, false);
L2:
    RestartEvent();
});

$Event(34102800, Restart, function() {
    EndIf(EventFlag(34100800));
    WaitFor(CharacterHPValue(34100800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(34108000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(34100800));
    HandleBossDefeatAndDisplayBanner(34100800, TextBannerType.GreatEnemyFelled);
    SetEventFlagID(9280, ON);
    SetEventFlagID(34100800, ON);
});

$Event(34102810, Restart, function() {
    if (EventFlag(34100800)) {
        DisableCharacter(34100800);
        DisableCharacterCollision(34100800);
        ForceCharacterDeath(34100800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(34100800);
    if (!EventFlag(34100801)) {
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 34102801))
                || HasDamageType(34100800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(34100801, ON);
    } else {
L1:
        WaitFor(EventFlag(34102805) && InArea(10000, 34102800));
    }
L2:
    EnableCharacterAI(34100800);
    SetNetworkUpdateRate(34100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 34100800, 0, 0);
});

$Event(34102849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 34100800, 34101800, 34102800, 34102805, 34105800, 10000, 34100801, 34102801);
    InitializeCommonEvent(0, 9005801, 34100800, 34101800, 34102800, 34102805, 34102806, 10000);
    InitializeCommonEvent(0, 9005811, 34100800, 34101800, 3, 34100801);
    InitializeCommonEvent(0, 9005822, 34100800, 90003101, 34102805, 34102806, 0, 11002852, 0, 0);
});
