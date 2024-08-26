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
    RegisterBonfire(1041380000, 1041381950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 71001, 76102, 1041381980, 77100, 3, 78100, 78101, 78102, 78103, 78104, 78105, 78106, 78107, 78108, 78109);
    InitializeEvent(0, 1041382650, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeCommonEvent(0, 90005460, 1041380240);
    InitializeCommonEvent(0, 90005461, 1041380240);
    InitializeCommonEvent(0, 90005462, 1041380240);
    InitializeCommonEvent(0, 90005300, 1041380230, 1041380230, 40104, 0, 0);
    InitializeEvent(0, 1041382200, 1041380250, 1041382250, 1041380258);
    InitializeEvent(1, 1041382200, 1041380251, 1041382250, 1041380258);
    InitializeEvent(2, 1041382200, 1041380252, 1041382250, 1041380258);
    InitializeEvent(3, 1041382200, 1041380253, 1041382250, 1041380258);
    InitializeEvent(0, 1041383710, 4720, 1042389201, 1041389370);
    InitializeEvent(0, 1041383730, 1041380720);
    InitializeCommonEvent(0, 90005752, 1041381700, 200, 120, 1077936128);
    InitializeEvent(0, 1041383731, 0);
    InitializeCommonEvent(0, 90005750, 1041381702, 4350, 101910, 400191, 400191, 1041389414, 0);
    InitializeCommonEvent(0, 90005750, 1041381702, 4350, 101910, 400191, 400191, 3708, 0);
    InitializeCommonEvent(0, 90005750, 1041381702, 4350, 101910, 400191, 400191, 3709, 0);
    InitializeEvent(0, 1041383750, 1041380705);
    InitializeEvent(0, 1041383760, 78103, 1041380950, 1041389500);
    InitializeEvent(0, 1041383761, 1041380950, 1041389500);
    InitializeEvent(0, 1041383762, 1041380950, 1041389501);
    InitializeEvent(0, 1041383763, 1041380950, 1041389501);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041380720, true);
    SetCharacterBackreadState(1041380730, true);
    DisableAsset(1041381700);
    InitializeCommonEvent(0, 90005251, 1041380220, 1120403456, 0, -1);
    InitializeCommonEvent(0, 90005251, 1041380216, 1103626240, 0, 1704);
});

$Event(1041382200, Restart, function(X0_4, X4_4, X8_4) {
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

$Event(1041382650, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 41, 38, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    SetEventFlagID(X12_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X8_4, true, true);
    EndIf(EventFlag(X16_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, X4_4, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, X12_4, 1);
    SetEventFlagID(X16_4, ON);
    SetEventFlagID(X20_4, ON);
});

$Event(1041383700, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
});

$Event(1041383701, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3223));
    WaitFor(EventFlag(3221));
    ForceAnimationPlayback(X0_4, 20015, false, false, false);
});

$Event(1041383710, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X0_4) || EventFlag(X4_4)) {
        SetNetworkconnectedEventFlagID(X8_4, OFF);
        EndEvent();
    }
    SetNetworkconnectedEventFlagID(X8_4, ON);
    WaitFor(!EventFlag(X0_4) || EventFlag(X4_4));
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    EndEvent();
});

$Event(1041383730, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3705)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        EnableAsset(1041381701);
        DisableAsset(1041381700);
        DeleteMapSFX(120, true);
        if (!EventFlag(1041389412)) {
            SetNetworkconnectedEventFlagID(1041389414, ON);
        }
        WaitFor(EventFlag(3705));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3700));
    GotoIf(L2, EventFlag(3701));
    GotoIf(L4, EventFlag(3703));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableCharacterInvincibility(X0_4);
    DisableAsset(1041381701);
    EnableAsset(1041381700);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    DisableAsset(1041381701);
    EnableAsset(1041381700);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(1041381700);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3705));
    RestartEvent();
});

$Event(1041383731, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3705));
    GotoIf(L1, !EventFlag(1041382731));
    GotoIf(L2, !EventFlag(1041382732));
    GotoIf(L3, !EventFlag(1041382733));
    EndEvent();
L1:
    WaitFor(HasDamageType(1041381700, 20000, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(1041382736, ON);
    WaitFixedTimeSeconds(20);
    Goto(L20);
L2:
    WaitFor(HasDamageType(1041381700, 20000, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(1041382737, ON);
    WaitFixedTimeSeconds(15);
    Goto(L20);
L3:
    WaitFor(HasDamageType(1041381700, 20000, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(1041382738, ON);
    Goto(L20);
L20:
    RestartEvent();
});

$Event(1041383750, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
});

$Event(1041383760, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(X0_4) && EntityInRadiusOfEntity(20000, X4_4, 5, 1) && !EventFlag(X8_4));
    SetEventFlagID(1042372701, ON);
    WaitFor(!EventFlag(X0_4) || !EntityInRadiusOfEntity(20000, X4_4, 5, 1) || EventFlag(X8_4));
    SetEventFlagID(1042372701, OFF);
    RestartEvent();
});

$Event(1041383761, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4680));
    WaitFor(EventFlag(4680));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1041383762, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(1042379203));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1041383763, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379207));
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 5, 1) && EventFlag(X4_4));
    SetEventFlagID(1042372702, ON);
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 5, 1));
    SetEventFlagID(1042372702, OFF);
    RestartEvent();
});
