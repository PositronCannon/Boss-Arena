// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (EventFlag(1049308087))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    InitializeCommonEvent(0, 90005600, 1050570000, 1050571950, 1084227584, 1050570480);
    InitializeEvent(0, 1050572820, 1050570800, 30000, 20000, 1050572800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 1050570800, 904980600, 24);
    InitializeCommonEvent(0, 90005860, 1050570800, 0, 1050570800, 0, 30530, 0);
    InitializeCommonEvent(0, 90005870, 1050570850, 904811600, 18);
    InitializeCommonEvent(0, 90005860, 1050570850, 0, 1050570850, 0, 30555, 0);
    InitializeCommonEvent(0, 90005872, 1050570850, 18, 0);
    InitializeEvent(0, 1050572320, 1050570320, 1051570320, 5030);
    InitializeEvent(0, 1050572330, 1050570320, 5021);
    InitializeEvent(0, 1050572340, 1050570320, 1050572320, 1050572330);
    InitializeEvent(0, 1050572200, 1050575200);
    InitializeEvent(0, 1050572250, 0);
    InitializeEvent(1, 1050572250, 0);
    //init boss reward
    InitializeEvent(0, 1050579990, 0);
    InitializeEvent(0, 1050579991, 0);
});

//death rite bird mountaintops
$Event(1050579990, Default, function() {
    WaitFor(CharacterDead(1050570800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304233,1049304138,1049304166,-1,1049307000,1049307001,1049307002,1049307003,1049305767,1049305769,1049305771,1049305774,1049300233);
});

//putrid avatar snowfield
$Event(1050579991, Default, function() {
    WaitFor(CharacterDead(1050570850));
    //boss rewards (2 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001032,1049304260,-1,-1,-1,1049307111,1049307112,1049307113,1049306068,1049306071,1049306073,1049300260);
});

$Event(1050572200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1050572250, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1050570250);
    WaitFor(InArea(10000, 1050572250));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1050570250, 1050572251, 900, 802105000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1050570250, 1050572251, 900, 802105010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1050570250, 1050572251, 900, 802105020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1050570250, 1050572251, 900, 802105030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1050570250, 1050572251, 900, 802105040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1050570250, 1050572251, 900, 802105050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1050570250, 1050572251, 900, 802105060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1050570250, 1050572251, 900, 802105070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1050572320, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasSpEffect(X0_4, X8_4));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Asset, X4_4, 90, X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1050572330, Restart, function(X0_4, X4_4) {
    SetSpEffect(X0_4, X4_4);
});

$Event(1050572340, Restart, function(X0_4, X4_4, X8_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    WaitFor(CharacterBackreadStatus(X0_4));
    if (!EventFlag(X8_4)) {
        WaitFor(
            (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && !AllPlayersInArea(X4_4))
                || EventFlag(X8_4));
        SetSpEffect(X0_4, 15338);
        SetNetworkconnectedEventFlagID(X8_4, ON);
    }
L0:
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4))
            || !EventFlag(X8_4));
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    SetSpEffect(X0_4, 15339);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(1050572820, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, X12_4)
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        EnableCharacterAI(X0_4);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});
