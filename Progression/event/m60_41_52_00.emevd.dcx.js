// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76305, 1041521951, 0, 0, 0, 5);
    InitializeEvent(0, 1041522320, 1041520800, 904510600, 28);
    InitializeCommonEvent(0, 90005860, 1041520800, 0, 1041520800, 1, 30300, 0);
    InitializeEvent(0, 1041522270, 1041520270, 1041522270, 1041522271);
    InitializeEvent(1, 1041522270, 1041520270, 1041522270, 1041522271);
    InitializeEvent(2, 1041522270, 1041520280, 1041522280, 1041522281);
    InitializeEvent(3, 1041522270, 1041520280, 1041522280, 1041522281);
    InitializeCommonEvent(0, 90005633, 580320, 580020, 1041520300, 30015, 20015, 1041521300, 1041521310);
    InitializeCommonEvent(0, 90005631, 1041521400, 61030);
    //init boss reward
    InitializeEvent(0, 1041529990, 0);
});

//generic boss event
$Event(1041529990, Default, function() {
    WaitFor(CharacterDead(1041520800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304219,1049304118,-1,-1,1049304939,1049304940,1049304941,1049304942,1049305611,1049305613,1049305616,1049305621,1049300219);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1041522300, 1041520800);
});

$Event(1041522270, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(X0_4, X8_4, 900, 802103000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X0_4, X8_4, 900, 802103010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X0_4, X8_4, 900, 802103020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X0_4, X8_4, 900, 802103030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X0_4, X8_4, 900, 802103040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X0_4, X8_4, 900, 802103050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X0_4, X8_4, 900, 802103060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(X0_4, X8_4, 900, 802103070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1041522300, Restart, function(X0_4) {
    if (!EventFlag(1041520800)) {
        if (!EventFlag(1037510800)) {
            if (!EventFlag(1041522810)) {
                DisableCharacter(X0_4);
                DisableCharacterCollision(X0_4);
                WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 1041522800));
                SetEventFlagID(1041520820, ON);
                SetEventFlagID(1041522810, ON);
                EnableCharacterFadeOnEnable(X0_4);
                EnableCharacter(X0_4);
                EnableCharacterCollision(X0_4);
                ForceAnimationPlayback(X0_4, 20019, false, false, false);
            }
L1:
            EndEvent();
        }
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    EndEvent();
});

$Event(1041522320, Default, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4) && !EventFlag(9000));
    GotoIf(L0, !EventFlag(9290));
    GotoIf(L1, !EventFlag(9291));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetEventFlagID(9290, ON);
    if (EventFlag(1037510810)) {
        SetSpEffect(X0_4, 4401);
    }
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9290, OFF);
    RestartEvent();
L1:
    SetEventFlagID(9291, ON);
    if (EventFlag(1037510810)) {
        SetSpEffect(X0_4, 4401);
    }
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 1, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 1, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9291, OFF);
    RestartEvent();
});
