// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1052410000, 1052411950, 0, 0, 0, 5);
    InitializeEvent(0, 1052412220, 0);
    InitializeEvent(0, 1052412270, 0);
    InitializeEvent(1, 1052412270, 0);
    InitializeEvent(0, 1052412200, 1052410210, 1052411210, 1052412210);
    InitializeCommonEvent(0, 90005300, 1052410850, 1052410851, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1052410850, 1052410851);
    InitializeEvent(0, 1052412291, 1052410850, 1052410851);
    InitializeCommonEvent(0, 90005871, 1052410850, 903150606, 10, 1052410851);
    InitializeCommonEvent(0, 90005860, 1052410850, 0, 1052410850, 0, 1052410100, 0);
    InitializeCommonEvent(0, 90005872, 1052410850, 10, 0);
    InitializeEvent(0, 1052412510, 0);
    InitializeCommonEvent(0, 90005501, 1052410510, 1052410511, 0, 1052411510, 1052411511, 1052411512, 1052410512);
    InitializeCommonEvent(0, 90005870, 1052410800, 904500601, 25);
    InitializeCommonEvent(0, 90005860, 1052410800, 0, 1052410800, 1, 30420, 0);
    InitializeEvent(0, 1052412230, 0);
    //init boss reward
    InitializeEvent(0, 1052419990, 0);
    InitializeEvent(0, 1052419991, 0);
});

//greyll
$Event(1052419990, Default, function() {
    WaitFor(CharacterDead(1052410800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304252,1049304134,-1,1049304004,1049307079,1049307080,1049307081,1049307082,1049305984,1049305986,1049305988,1049305990,1049300252);
});

//night's cavalry
$Event(1052419991, Default, function() {
    WaitFor(CharacterDead(1052410850));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304254,1049304134,1049304138,-1,1049307087,1049307088,1049307089,1049307090,1049306006,1049306008,1049306011,1049306016,1049300254);
});

$Event(50, Default, function() {
    if (EventFlag(1049308092))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    InitializeEvent(0, 1052410519, 0);
});

$Event(1052412200, Restart, function(X0_4, X4_4, X8_4) {
    DisableCharacter(X0_4);
    EndIf(EventFlag(X8_4));
    EndIf(CharacterDead(X0_4));
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(
        InArea(10000, X8_4)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    CreateAssetfollowingSFX(X4_4, 100, 620383);
    EnableCharacter(X0_4);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    WaitFixedTimeSeconds(2);
    DeleteAssetfollowingSFX(X4_4, true);
    ForceAnimationPlayback(X0_4, 20001, false, false, false);
    WaitFixedTimeSeconds(1.9);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(1);
    DisableCharacter(X0_4);
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1052412220, Restart, function() {
    CreateAssetfollowingSFX(1052411200, 200, 1500);
});

$Event(1052412230, Restart, function() {
    SetCharacterEnableDistanceAndUnknown200484(1052410800, 220, 40);
});

$Event(1052412291, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(CharacterBackreadStatus(X4_4));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(X4_4));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1052412510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1052410510, 1052410511, 0, 1052411510, 1052411511, 1052413511, 1052411512, 1052413512, 1052412511, 1052412512, 1052410512, 1052410513, 0);
});

$Event(1052410519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1052410510, OFF);
});

$Event(1052412270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1052410270);
    WaitFor(EntityInRadiusOfEntity(10000, 1052410270, 60, 1));
    WaitRandomTimeSeconds(1, 8);
    if (GameCycle() == 0) {
        ShootBullet(1052410270, 1052412271, 900, 802104200, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1052410270, 1052412271, 900, 802104210, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1052410270, 1052412271, 900, 802104220, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1052410270, 1052412271, 900, 802104230, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1052410270, 1052412271, 900, 802104240, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1052410270, 1052412271, 900, 802104250, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1052410270, 1052412271, 900, 802104260, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1052410270, 1052412271, 900, 802104270, 0, 0, 0);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
