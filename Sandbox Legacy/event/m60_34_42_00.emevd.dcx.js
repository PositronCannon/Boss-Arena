// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    RegisterBonfire(1034420000, 1034421950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005870, 1034420800, 904502602, 25);
    InitializeCommonEvent(0, 90005860, 1034420800, 0, 1034420800, 1, 30260, 0);
    InitializeEvent(0, 1034422800, 0);
    InitializeEvent(0, 1034422801, 0);
    InitializeEvent(0, 1034422802, 0);
    InitializeCommonEvent(0, 90005201, 1034420340, 30000, 20000, 1099431936, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1034420340, 1099431936, 0, -1);
    InitializeCommonEvent(0, 90005300, 1034420340, 1034420340, 1034420400, 0, 0);
    InitializeEvent(0, 1034422600, 1034421600, 1034422600, 1034420600);
    InitializeEvent(1, 1034422600, 1034421601, 1034422601, 1034420600);
    InitializeEvent(2, 1034422600, 1034421602, 1034422602, 1034420600);
    InitializeEvent(3, 1034422600, 1034421603, 1034422603, 1034420600);
    InitializeEvent(4, 1034422600, 1034421604, 1034422604, 1034420600);
    InitializeEvent(5, 1034422600, 1034421605, 1034422605, 1034420600);
    InitializeEvent(6, 1034422600, 1034421606, 1034422606, 1034420600);
    InitializeEvent(7, 1034422600, 1034421607, 1034422607, 1034420600);
    InitializeEvent(8, 1034422600, 1034421608, 1034422608, 1034420600);
    InitializeEvent(9, 1034422600, 1034421609, 1034422609, 1034420600);
    InitializeCommonEvent(0, 90005525, 1034420650, 1034421650);
    InitializeCommonEvent(0, 90005706, 1034420710, 930023, 0);
    InitializeEvent(0, 1034420700, 1034420700, 1034421700);
    InitializeCommonEvent(0, 90005704, 1034420700, 4221, 4220, 10009701, 3);
    InitializeCommonEvent(0, 90005703, 1034420700, 4221, 4222, 10009701, 4221, 4220, 4224, -1);
    InitializeCommonEvent(0, 90005702, 1034420700, 4223, 4220, 4224);
    InitializeEvent(0, 1034420701, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1034420700, true);
    SetCharacterBackreadState(1034420710, true);
    InitializeEvent(0, 1034422230, 0);
    InitializeCommonEvent(0, 90005251, 1034420200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005250, 1034420203, 1034422203, 0, -1);
    InitializeCommonEvent(0, 90005251, 1034420206, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005250, 1034420208, 1034422208, 0, -1);
    InitializeCommonEvent(0, 90005250, 1034420209, 1034422208, 0, -1);
    InitializeCommonEvent(0, 90005250, 1034420210, 1034422208, 0, -1);
    InitializeCommonEvent(0, 90005251, 1034420222, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005251, 1034420228, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005201, 1034420370, 30003, 20003, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1034420373, 1098907648, 0, -1);
    InitializeCommonEvent(0, 90005251, 1034420390, 1106247680, 0, -1);
});

$Event(1034422230, Restart, function() {
    EndIf(ThisEventSlot());
    DisableCharacterAI(1034420220);
    DisableCharacterAI(1034420221);
    DisableCharacterAI(1034420223);
    DisableCharacterAI(1034420229);
    DisableCharacterAI(1034420230);
    WaitFor(
        HasDamageType(1034420202, 0, DamageType.Unspecified)
            || HasDamageType(1034420220, 0, DamageType.Unspecified)
            || HasDamageType(1034420221, 0, DamageType.Unspecified)
            || HasDamageType(1034420223, 0, DamageType.Unspecified)
            || HasDamageType(1034420227, 0, DamageType.Unspecified)
            || HasDamageType(1034420229, 0, DamageType.Unspecified)
            || HasDamageType(1034420230, 0, DamageType.Unspecified)
            || HasDamageType(1034420231, 0, DamageType.Unspecified));
    SetNetworkconnectedThisEventSlot(ON);
    EnableCharacterAI(1034420220);
    EnableCharacterAI(1034420221);
    EnableCharacterAI(1034420223);
    EnableCharacterAI(1034420229);
    EnableCharacterAI(1034420230);
});

$Event(1034422600, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X4_4));
    EndIf(AssetDestroyed(X0_4, Equal, 1));
    CreateBulletOwner(X8_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgArea = HasDamageType(X0_4, 20000, DamageType.Unspecified) || EntityInRadiusOfEntity(X0_4, 20000, 2, 1);
    WaitFor(dmgArea && chrSp);
    RequestAssetDestruction(X0_4, 0);
    if (EventFlag(50)) {
        ShootBullet(X8_4, X0_4, 100, 802402200, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(X8_4, X0_4, 100, 802402210, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(X8_4, X0_4, 100, 802402220, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(X8_4, X0_4, 100, 802402230, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(X8_4, X0_4, 100, 802402240, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(X8_4, X0_4, 100, 802402250, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(X8_4, X0_4, 100, 802402260, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(X8_4, X0_4, 100, 802402270, 0, 0, 0);
    }
    EndEvent();
});

$Event(1034422800, Restart, function() {
    EndIf(EventFlag(1034420800));
    EndIf(SpecialStandbyEndedFlag(1034420800));
    DisableCharacter(1034420800);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgAreaChr = HasDamageType(1034420800, 10000, DamageType.Unspecified)
        || InArea(10000, 1034422800)
        || CharacterHasStateInfo(1034420800, 436)
        || CharacterHasStateInfo(1034420800, 2)
        || CharacterHasStateInfo(1034420800, 5)
        || CharacterHasStateInfo(1034420800, 6)
        || CharacterHasStateInfo(1034420800, 260);
    sp = CharacterHasSpEffect(1034420800, 481)
        && !CharacterHasSpEffect(1034420800, 90100)
        && !CharacterHasSpEffect(1034420800, 90110)
        && !CharacterHasSpEffect(1034420800, 90160);
    sp2 = CharacterHasSpEffect(1034420800, 482)
        && !CharacterHasSpEffect(1034420800, 90100)
        && !CharacterHasSpEffect(1034420800, 90120)
        && !CharacterHasSpEffect(1034420800, 90160)
        && !CharacterHasSpEffect(1034420800, 90162);
    sp3 = CharacterHasSpEffect(1034420800, 483)
        && !CharacterHasSpEffect(1034420800, 90100)
        && !CharacterHasSpEffect(1034420800, 90140)
        && !CharacterHasSpEffect(1034420800, 90160)
        && !CharacterHasSpEffect(1034420800, 90161);
    sp4 = CharacterHasSpEffect(1034420800, 484)
        && !CharacterHasSpEffect(1034420800, 90100)
        && !CharacterHasSpEffect(1034420800, 90130)
        && !CharacterHasSpEffect(1034420800, 90161)
        && !CharacterHasSpEffect(1034420800, 90162);
    sp5 = CharacterHasSpEffect(1034420800, 487)
        && !CharacterHasSpEffect(1034420800, 90100)
        && !CharacterHasSpEffect(1034420800, 90150)
        && !CharacterHasSpEffect(1034420800, 90160);
    chrSpDmgArea = chrSp && dmgAreaChr;
    WaitFor(chrSpDmgArea || sp || sp2 || sp3 || sp4 || sp5);
    SetNetworkconnectedEventFlagID(1034422800, ON);
    SetSpecialStandbyEndedFlag(1034420800, ON);
    EnableCharacter(1034420800);
    ForceAnimationPlayback(1034420800, 20008, false, false, false);
});

$Event(1034422801, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1034420800));
    WaitFor(InArea(1034420800, 1034422801));
    SetSpEffect(1034420800, 10285);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1034422802, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1034420800));
    WaitFor(InArea(1034420800, 1034422802));
    SetSpEffect(1034420800, 10286);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1034420700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(4220)) {
            SetEventFlagID(10009703, OFF);
        }
    }
L19:
    if (!(EventFlag(4227) && !EventFlag(1035422160))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(4227) && !EventFlag(1035422160));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4220));
    GotoIf(L2, EventFlag(4221));
    GotoIf(L4, EventFlag(4223));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    EnableAsset(X4_4);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableAsset(X4_4);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4227) || EventFlag(1035422160));
    RestartEvent();
});

$Event(1034420701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(AnyBatchEventFlags(4221, 4223));
    SetNetworkconnectedEventFlagID(1034429209, OFF);
    EndEvent();
});


