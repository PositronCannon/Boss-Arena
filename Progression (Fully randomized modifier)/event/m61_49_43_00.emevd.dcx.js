// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2049430000, 2049431950, 0, 0, 0, 5);
    RegisterBonfire(2049430001, 2049431951, 0, 0, 0, 5);
    RegisterBonfire(2049430002, 2049431952, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005860, 2049430800, 0, 2049430800, 1, 30945, 0);
    InitializeEvent(0, 2049432314, 0);
    InitializeEvent(0, 2049430830, 2049430800, 905860603, 920300, 1114636288, 1121058816, 2049432822, 2049435100);
    InitializeEvent(0, 2049432300, 2049430810, 2049432300);
    InitializeEvent(1, 2049432300, 2049430811, 2049432300);
    InitializeEvent(2, 2049432300, 2049430812, 2049432300);
    InitializeEvent(3, 2049432300, 2049430813, 2049432300);
    InitializeEvent(4, 2049432300, 2049440810, 2049432300);
    InitializeEvent(5, 2049432300, 2049440811, 2049432300);
    InitializeEvent(6, 2049432300, 2049440812, 2049432300);
    InitializeEvent(7, 2049432300, 2049440813, 2049432300);
    InitializeEvent(8, 2049432300, 2049440814, 2049432300);
    InitializeEvent(9, 2049432300, 2049440815, 2049432300);
    InitializeEvent(10, 2049432300, 2049440816, 2049432300);
    InitializeEvent(11, 2049432300, 2049440817, 2049432300);
    InitializeEvent(12, 2049432300, 2049440818, 2049432300);
    InitializeEvent(13, 2049432300, 2049430800, 2049432300);
    InitializeCommonEvent(0, 90005870, 2049430850, 905840500, 12);
    InitializeCommonEvent(0, 90005860, 2049430850, 0, 2049430850, 0, 30965, 0);
    InitializeCommonEvent(0, 90005250, 2049430850, 2049432850, 1056964608, 0);
    InitializeCommonEvent(0, 90005872, 2049430850, 12, 0);
    InitializeEvent(0, 2049432322, 2049430322, 2049432322, 1069547520, 0, 3008);
    InitializeCommonEvent(0, 90005250, 2049430320, 2049432320, 0, 0);
    InitializeEvent(0, 2049432330, 2049430331, 30000, 20010, 2049430330, 0, 0);
    InitializeCommonEvent(0, 90005250, 2049430200, 2049432200, 0, 3001);
    InitializeCommonEvent(0, 90005250, 2049430209, 2049432209, 0, 3026);
    InitializeCommonEvent(0, 90005250, 2049430201, 2049432201, 0, 0);
    InitializeCommonEvent(0, 90005250, 2049430202, 2049432201, 0, 0);
    InitializeCommonEvent(0, 90005250, 2049430203, 2049432203, 0, 0);
    InitializeCommonEvent(0, 90005250, 2049430204, 2049432212, 0, 3001);
    InitializeCommonEvent(0, 90005250, 2049430205, 2049432212, 1065353216, 3001);
    InitializeCommonEvent(0, 90005250, 2049430211, 2049432212, 0, 3010);
    InitializeCommonEvent(0, 90005250, 2049430212, 2049432212, 0, 3020);
    InitializeEvent(0, 2049462580, 0);
    InitializeEvent(0, 2049432690, 0);
    InitializeCommonEvent(0, 900005610, 2049431201, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 2049431200, 100, 800, 0);
    //init boss reward
    InitializeEvent(0, 2049469990, 0);
    InitializeEvent(0, 2049469991, 0);
});

//edredd
$Event(2049469990, Default, function() {
    WaitFor(CharacterDead(2049430850));
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001034,1049304273,-1,-1,-1,1049307194,1049307195,1049307196,1049307197,1049307198,1049306296,1049306298,1049306301,1049306306,1049306308,1049300273);
});

//ghostflame dragon
$Event(2049469991, Default, function() {
    WaitFor(CharacterDead(2049430800));
    //boss rewards (2 bonus items, DLC version)
InitializeCommonEvent(0,90001042,1049304298,1049304152,1049304158,1049307280,1049307281,1049307282,1049306525,1049306527,1049306530,1049300298);
});


$Event(2049432690, Restart, function() {
    EndIf(EventFlag(4925));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(InArea(10000, 2049432690));
    SetEventFlagID(4925, ON);
});

$Event(2049432300, Restart, function(X0_4, X4_4) {
    if (EventFlag(2049430800)) {
        DisableCharacter(X0_4);
        DisableCharacterCollision(X0_4);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    }
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5662);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 30, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 30, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4))
            && CharacterBackreadStatus(X0_4));
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    }
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5662);
});

$Event(2049432314, Restart, function() {
    EndIf(CharacterDead(2049430800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EntityInRadiusOfEntity(10000, 2049430800, 40, 1) && HPRatio(2049430800) <= 0.85);
    SetCharacterEventTarget(2049430800, 2049430830);
    SetSpEffect(2049430800, 20011655);
});

$Event(2049430830, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    DisableNetworkSync();
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5662);
    EndIf(
        (CharacterType(10000, TargetType.BlackPhantom) && !CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Invader)
            || CharacterType(10000, TargetType.Invader3)
            || CharacterType(10000, TargetType.Invader2));
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Combat)
            && !EventFlag(9000)
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)
                || EntityInRadiusOfEntity(35000, X0_4, X12_4, 1)))
            || EventFlag(X20_4));
    ClearSpEffect(X24_4, 4800);
    ClearSpEffect(X24_4, 5662);
    GotoIf(L0, !EventFlag(9290));
    GotoIf(L1, !EventFlag(9291));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetBossBGM(X8_4, BossBGMState.Start);
    SetEventFlagID(9290, ON);
    SetNetworkconnectedEventFlagID(X20_4, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    cond |= !CharacterAIState(X0_4, AIStateType.Combat);
    WaitFor(
        CharacterDead(X0_4)
            || EventFlag(9000)
            //fix for OR condition groups limit
            
            //|| !(EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
            //    || (!(CharacterType(10001, TargetType.BlackPhantom)
            //        || CharacterType(10001, TargetType.Invader)
            //        || CharacterType(10001, TargetType.Invader3)
            //        || CharacterType(10001, TargetType.Invader2))
            //        && EntityInRadiusOfEntity(10001, X0_4, X16_4, 1))
            //    || (!(CharacterType(10002, TargetType.BlackPhantom)
            //        || CharacterType(10002, TargetType.Invader)
            //        || CharacterType(10002, TargetType.Invader3)
            //        || CharacterType(10002, TargetType.Invader2))
            //        && EntityInRadiusOfEntity(10002, X0_4, X16_4, 1))
            //    || (!(CharacterType(10003, TargetType.BlackPhantom)
            //        || CharacterType(10003, TargetType.Invader)
            //        || CharacterType(10003, TargetType.Invader3)
            //        || CharacterType(10003, TargetType.Invader2))
            //        && EntityInRadiusOfEntity(10003, X0_4, X16_4, 1))
            //    || (!(CharacterType(10004, TargetType.BlackPhantom)
            //        || CharacterType(10004, TargetType.Invader)
            //        || CharacterType(10004, TargetType.Invader3)
            //        || CharacterType(10004, TargetType.Invader2))
            //        && EntityInRadiusOfEntity(10004, X0_4, X16_4, 1))
            //    || (!(CharacterType(10004, TargetType.BlackPhantom)
            //        || CharacterType(10004, TargetType.Invader)
            //        || CharacterType(10004, TargetType.Invader3)
            //        || CharacterType(10004, TargetType.Invader2))
            //        && EntityInRadiusOfEntity(10004, X0_4, X16_4, 1))
            //    || EntityInRadiusOfEntity(35000, X0_4, X16_4, 1))
            || !EventFlag(X20_4));
    SetSpEffect(X24_4, 4800);
    SetSpEffect(X24_4, 5662);
    SetBossBGM(X8_4, BossBGMState.Stop2);
    SetNetworkconnectedEventFlagID(X20_4, OFF);
    if (CharacterDead(X0_4)) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
        EndEvent();
    }
    if (!EventFlag(9000)) {
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
    SetBossBGM(X8_4, BossBGMState.Start);
    SetEventFlagID(9291, ON);
    SetNetworkconnectedEventFlagID(X20_4, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    cond |= !CharacterAIState(X0_4, AIStateType.Combat);
    WaitFor(
        CharacterDead(X0_4)
            || EventFlag(9000)
            || !(EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
                || (!(CharacterType(10001, TargetType.BlackPhantom)
                    || CharacterType(10001, TargetType.Invader)
                    || CharacterType(10001, TargetType.Invader3)
                    || CharacterType(10001, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10001, X0_4, X16_4, 1))
                || (!(CharacterType(10002, TargetType.BlackPhantom)
                    || CharacterType(10002, TargetType.Invader)
                    || CharacterType(10002, TargetType.Invader3)
                    || CharacterType(10002, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10002, X0_4, X16_4, 1))
                || (!(CharacterType(10003, TargetType.BlackPhantom)
                    || CharacterType(10003, TargetType.Invader)
                    || CharacterType(10003, TargetType.Invader3)
                    || CharacterType(10003, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10003, X0_4, X16_4, 1))
                || (!(CharacterType(10004, TargetType.BlackPhantom)
                    || CharacterType(10004, TargetType.Invader)
                    || CharacterType(10004, TargetType.Invader3)
                    || CharacterType(10004, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10004, X0_4, X16_4, 1))
                || (!(CharacterType(10004, TargetType.BlackPhantom)
                    || CharacterType(10004, TargetType.Invader)
                    || CharacterType(10004, TargetType.Invader3)
                    || CharacterType(10004, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10004, X0_4, X16_4, 1))
                || EntityInRadiusOfEntity(35000, X0_4, X16_4, 1))
            || !EventFlag(X20_4));
    SetSpEffect(X24_4, 4800);
    SetSpEffect(X24_4, 5662);
    SetBossBGM(X8_4, BossBGMState.Stop2);
    SetNetworkconnectedEventFlagID(X20_4, OFF);
    if (CharacterDead(X0_4)) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
        EndEvent();
    }
    if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9291, OFF);
    RestartEvent();
});

$Event(2049432322, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
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
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (!EntityInRadiusOfEntity(10000, X0_4, X8_4, 1)) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(2049432330, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
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
    chrSpArea = ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, 2049432331);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || HPRatio(X12_4) <= 0.7
            || chrSpArea
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        SetSpecialStandbyEndedFlag(X0_4, ON);
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
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

$Event(2049432500, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 2049432500));
    EndIf(EventFlag(2049432500));
    SetEventFlagID(2049432500, ON);
    PlaySE(2049432500, SoundType.BGM, 990000021);
});

$Event(2049462580, Default, function() {
    RegisterLadder(2049430580, 2049430581, 2049431580);
    RegisterLadder(2049430582, 2049430583, 2049431582);
    RegisterLadder(2049430584, 2049430585, 2049431584);
    RegisterLadder(2049430586, 2049430587, 2049431586);
    RegisterLadder(2049430588, 2049430589, 2049431588);
});
