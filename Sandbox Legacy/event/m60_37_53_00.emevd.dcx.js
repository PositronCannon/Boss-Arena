// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90001001, 0);
    InitializeCommonEvent(0, 90005600, 76357, 1037531950, 1084227584, 0);
    InitializeCommonEvent(0, 90005870, 1037530800, 904130600, 16);
    InitializeEvent(0, 1037532345, 0);
    InitializeEvent(0, 1037532350, 0);
    InitializeCommonEvent(0, 90005860, 1037530800, 1037530800, 1037530800, 0, 30395, 0);
    InitializeCommonEvent(0, 90005872, 1037530800, 16, 0);
    InitializeEvent(0, 1037532450, 1037530800, 1037532400, 1092616192, 0, -1);
    InitializeCommonEvent(1, 90005261, 1037530350, 1037532400, 1084227584, 1073741824, -1);
    InitializeCommonEvent(2, 90005261, 1037530351, 1037532400, 1084227584, 1073741824, -1);
    InitializeCommonEvent(3, 90005261, 1037530352, 1037532400, 1084227584, 1092616192, -1);
    InitializeCommonEvent(0, 90005300, 1037530400, 1037530400, 40332, 0, 0);
    InitializeCommonEvent(0, 90005211, 1037540370, 30001, 20001, 1037542370, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1037540370, 1037542370, 1084227584, 0, -1);
    InitializeCommonEvent(1, 90005211, 1037540371, 30002, 20002, 1037542370, 1084227584, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(1, 90005261, 1037540371, 1037542370, 1084227584, 1069547520, -1);
    InitializeCommonEvent(2, 90005211, 1037540372, 30002, 20002, 1037542370, 1084227584, 1082130432, 0, 0, 0, 0);
    InitializeCommonEvent(2, 90005261, 1037540372, 1037542370, 1084227584, 1082130432, -1);
    InitializeCommonEvent(3, 90005211, 1037540373, 30001, 20001, 1037542370, 1084227584, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(3, 90005261, 1037540373, 1037542370, 1084227584, 1065353216, -1);
    InitializeCommonEvent(4, 90005211, 1037540374, 30001, 20001, 1037542370, 1084227584, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(4, 90005261, 1037540374, 1037542370, 1084227584, 1073741824, -1);
    InitializeCommonEvent(5, 90005211, 1037540375, 30001, 20001, 1037542370, 1084227584, 1079194419, 0, 0, 0, 0);
    InitializeCommonEvent(5, 90005261, 1037540375, 1037542370, 1084227584, 1079194419, -1);
    InitializeCommonEvent(0, 90005211, 1037530360, 30000, 20010, 1037532360, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1037530365, 30000, 20000, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1037530366, 30000, 20000, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1037532400, 1037530300, 1037532300, 1037530310);
    InitializeEvent(1, 1037532400, 1037530301, 1037532300, 1037530310);
    InitializeEvent(2, 1037532400, 1037530302, 1037532300, 1037530310);
    InitializeEvent(3, 1037532400, 1037530303, 1037532300, 1037530310);
    InitializeEvent(0, 1037532201, 0);
    InitializeEvent(0, 1037532200, 1037531200, 1082549862);
    InitializeEvent(1, 1037532200, 1037531201, 1083388723);
    InitializeEvent(2, 1037532200, 1037531202, 1072064102);
    InitializeEvent(3, 1037532200, 1037531203, 1084227584);
    InitializeEvent(4, 1037532200, 1037531204, 1072902963);
    InitializeEvent(5, 1037532200, 1037531205, 1073741824);
    InitializeEvent(6, 1037532200, 1037531206, 1077936128);
    InitializeEvent(7, 1037532200, 1037531207, 1093664768);
    InitializeEvent(8, 1037532200, 1037531208, 1075838976);
    InitializeEvent(9, 1037532200, 1037531209, 1069547520);
    InitializeEvent(10, 1037532200, 1037531210, 1073741824);
    InitializeEvent(11, 1037532200, 1037531211, 1088631603);
    InitializeEvent(12, 1037532200, 1037531212, 1074580685);
    InitializeEvent(13, 1037532200, 1037531213, 1075000115);
    InitializeEvent(14, 1037532200, 1037531214, 1072902963);
    InitializeEvent(15, 1037532200, 1037531215, 1083388723);
    InitializeEvent(16, 1037532200, 1037531216, 1082130432);
    InitializeCommonEvent(0, 900005610, 1037531680, 100, 800, 1037538620);
    InitializeEvent(0, 1037533700, 1037530700);
});

$Event(1037532300, Restart, function() {
    ClearSpEffect(1037530210, 5070);
    ClearSpEffect(1037530211, 5070);
    ClearSpEffect(1037530212, 5070);
    ClearSpEffect(1037530213, 5070);
    ClearSpEffect(1037530214, 5070);
    ClearSpEffect(1037530215, 5070);
    ClearSpEffect(1037530216, 5070);
    ClearSpEffect(1037530217, 5070);
    ClearSpEffect(1037530218, 5070);
    ClearSpEffect(1037530219, 5070);
    ClearSpEffect(1037530220, 5070);
    ClearSpEffect(1037530221, 5070);
    ClearSpEffect(1037530222, 5070);
    ClearSpEffect(1037530223, 5070);
    ClearSpEffect(1037530224, 5070);
    ClearSpEffect(1037530225, 5070);
    ClearSpEffect(1037530226, 5070);
    ClearSpEffect(1037530227, 5070);
    ClearSpEffect(1037530228, 5070);
});

$Event(1037532345, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(1037530800, 8087);
    SetThisEventSlot(ON);
    EndEvent();
});

$Event(1037532350, Restart, function() {
    if (!EventFlag(1037530800)) {
        WaitFor(EventFlag(1037530800));
        ForceCharacterDeath(1037530350, true);
        ForceCharacterDeath(1037530351, true);
        ForceCharacterDeath(1037530352, true);
        ForceCharacterDeath(1037530353, true);
        ForceCharacterDeath(1037530354, true);
        EndEvent();
    }
L0:
    DisableCharacter(1037530350);
    DisableCharacter(1037530351);
    DisableCharacter(1037530352);
    DisableCharacter(1037530353);
    DisableCharacter(1037530354);
    EndEvent();
});

$Event(1037532200, Restart, function(X0_4, X4_4) {
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 70, 1));
    if (!ThisEventSlot()) {
        WaitFixedTimeSeconds(X4_4);
        SetThisEventSlot(ON);
    }
L0:
    if (EventFlag(50)) {
        ShootBullet(1037530299, X0_4, -1, 802803200, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1037530299, X0_4, -1, 802803210, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1037530299, X0_4, -1, 802803220, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1037530299, X0_4, -1, 802803230, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1037530299, X0_4, -1, 802803240, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1037530299, X0_4, -1, 802803250, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1037530299, X0_4, -1, 802803260, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1037530299, X0_4, -1, 802803270, 0, 0, 0);
    }
    WaitFixedTimeSeconds(6);
    RestartIf(mainGroupAbuse);
});

$Event(1037532201, Restart, function() {
    CreateBulletOwner(1037530299);
});

$Event(1037532400, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacter(X0_4);
    CreateBulletOwner(X8_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive);
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
    areaChrSp = InArea(10000, X4_4) && chrSp;
    WaitFor(
        HasDamageType(X0_4, 10000, DamageType.Unspecified)
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
    SetSpecialStandbyEndedFlag(X0_4, ON);
    PlaySE(X4_4, SoundType.CharacterMotion, 407008100);
    WaitFixedTimeSeconds(1);
    if (!(!InArea(10000, X4_4)
        && (CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom)))) {
        WaitRandomTimeSeconds(0, 0.5);
        ShootBullet(X8_4, 10000, 900, 100920, 0, 0, 0);
    }
L0:
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 20011, false, false, false);
    SetSpEffect(X0_4, 8090);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(X0_4, 8090);
});

$Event(1037532450, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
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
            || CharacterAIState(1037530351, AIStateType.Alert)
            || CharacterAIState(1037530351, AIStateType.Combat)
            || CharacterAIState(1037530352, AIStateType.Alert)
            || CharacterAIState(1037530352, AIStateType.Combat)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1037533700, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndIf(EventFlag(400441));
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacterImmortality(X0_4);
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(EventFlag(14009267));
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacterImmortality(X0_4);
    EndEvent();
});


