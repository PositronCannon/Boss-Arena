// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    InitializeCommonEvent(0, 90005616, 530170, 1045392700);
    InitializeEvent(0, 1045392281, 1045390250, 1045392280, 1045390281);
    InitializeEvent(1, 1045392281, 1045390251, 1045392280, 1045390281);
    InitializeEvent(2, 1045392281, 1045390252, 1045392280, 1045390281);
    InitializeEvent(3, 1045392281, 1045390253, 1045392280, 1045390281);
    InitializeEvent(4, 1045392281, 1045390254, 1045392280, 1045390281);
    InitializeEvent(5, 1045392281, 1045390255, 1045392280, 1045390281);
    InitializeEvent(6, 1045392281, 1045390256, 1045392280, 1045390281);
    InitializeEvent(7, 1045392281, 1045390257, 1045392280, 1045390281);
    InitializeEvent(8, 1045392281, 1045390258, 1045392280, 1045390281);
    InitializeEvent(0, 1045392280, 1045395280, 1045392280);
    InitializeCommonEvent(0, 90005620, 1045390570, 1045391570, 1045391571, 0, 1045392570, 1045392571, 1045392572);
    InitializeCommonEvent(0, 90005621, 1045390570, 1045391573);
    InitializeEvent(0, 1045392341, 1045390800, 1045393240, 1045393241, 1045393242, 1045393230, 1045393231, 1045393232, 15300, 15310, 15311, 15312);
    InitializeEvent(0, 1045392342, 1045390800, 1045390800, 15302, 1045392343, 1045390350, 15310, 15311, 15312, 1045392343, 1045392344, 1045392345, 1045390351);
    InitializeEvent(0, 1045392343, 1045390800, 1045392340, 1045392341, 1045392342, 15310, 15311, 15312);
    InitializeEvent(0, 1045392345, 1045390800, 1045390800, 1045395230);
    InitializeEvent(0, 1045392346, 1045390800, 1045392810);
    InitializeCommonEvent(0, 90005870, 1045390800, 904950600, 24);
    InitializeCommonEvent(0, 90005860, 1045390800, 0, 1045390800, 0, 30170, 0);
    InitializeCommonEvent(0, 90005704, 1045390700, 4041, 4040, 1044399201, 3);
    InitializeCommonEvent(0, 90005703, 1045390700, 4041, 4042, 1044399201, 4041, 4040, 4043, -1);
    InitializeCommonEvent(0, 90005702, 1045390700, 4043, 4040, 4043);
    InitializeEvent(0, 1045390700, 1045390700);
    InitializeEvent(0, 1045390701, 0);
    InitializeCommonEvent(0, 90005775, 81463900, 1045399206, -1082130432);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1045390700, true);
    InitializeEvent(0, 1045392282, 0);
});

$Event(1045392280, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5654);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1045392280));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5654);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(1045392280, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5654);
});

$Event(1045392281, Restart, function(X0_4, X4_4, X8_4) {
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

$Event(1045392282, Restart, function() {
    ForceCharacterTreasure(1045395282);
});

$Event(1045392341, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    if (EventFlag(1045390800)) {
        DisableGenerator(X4_4);
        DisableGenerator(X8_4);
        DisableGenerator(X12_4);
        DisableGenerator(X16_4);
        DisableGenerator(X20_4);
        DisableGenerator(X24_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterHasSpEffect(X0_4, X28_4) && !EventFlag(X0_4));
    if (CharacterHasSpEffect(X0_4, X32_4)) {
        EnableGenerator(X4_4);
        EnableGenerator(X16_4);
        EnableGenerator(X20_4);
        EnableGenerator(X24_4);
    }
    if (CharacterHasSpEffect(X0_4, X36_4)) {
        EnableGenerator(X8_4);
        EnableGenerator(X16_4);
        EnableGenerator(X20_4);
        EnableGenerator(X24_4);
    }
    if (CharacterHasSpEffect(X0_4, X40_4)) {
        EnableGenerator(X12_4);
        EnableGenerator(X16_4);
        EnableGenerator(X20_4);
        EnableGenerator(X24_4);
    }
    WaitFixedTimeSeconds(1);
    DisableGenerator(X4_4);
    DisableGenerator(X8_4);
    DisableGenerator(X12_4);
    DisableGenerator(X16_4);
    DisableGenerator(X20_4);
    DisableGenerator(X24_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1045392342, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(EventFlag(X4_4));
    WaitFor(CharacterHasSpEffect(X0_4, X8_4));
    BatchSetNetworkconnectedEventFlags(X16_4, X44_4, OFF);
    RandomlySetEventFlagInRange(X16_4, X44_4, ON);
    GotoIf(L1, CharacterHasSpEffect(X0_4, X20_4));
    GotoIf(L2, CharacterHasSpEffect(X0_4, X24_4));
    GotoIf(L3, CharacterHasSpEffect(X0_4, X28_4));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    Goto(L0);
L1:
    GotoIf(S0, EventFlag(X16_4));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X36_4, -1, X0_4);
    Goto(L0);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X40_4, -1, X0_4);
    Goto(L0);
L2:
    GotoIf(S1, EventFlag(X16_4));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X32_4, -1, X0_4);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X40_4, -1, X0_4);
    Goto(L0);
L3:
    GotoIf(S2, EventFlag(X16_4));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X32_4, -1, X0_4);
    Goto(L0);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X36_4, -1, X0_4);
    Goto(L0);
L0:
    ForceAnimationPlayback(X0_4, 3022, true, false, false);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

$Event(1045392343, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(1045390800));
    area = InArea(X0_4, X4_4);
    area2 = InArea(X0_4, X8_4);
    area3 = InArea(X0_4, X12_4);
    WaitFor(area || area2 || area3);
    if (area.Passed) {
        SetSpEffect(X0_4, X16_4);
    }
L2:
    if (area2.Passed) {
        SetSpEffect(X0_4, X20_4);
    }
L3:
    if (area3.Passed) {
        SetSpEffect(X0_4, X24_4);
    }
L4:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1045392345, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X4_4));
    WaitFor(mainGroupAbuse);
    ForceCharacterDeath(X8_4, false);
    DisableGenerator(1045393230);
    DisableGenerator(1045393231);
    DisableGenerator(1045393232);
    DisableGenerator(1045393240);
    DisableGenerator(1045393241);
    DisableGenerator(1045393242);
    WaitFixedTimeSeconds(2);
    ForceCharacterDeath(X8_4, false);
    WaitFixedTimeSeconds(7);
    DisableCharacter(X8_4);
    DisableCharacterCollision(X8_4);
    EndEvent();
});

$Event(1045392346, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    EndIf(EventFlag(1045390800));
    WaitFor(CharacterTargetedBy(X0_4, 20000) && !InArea(20000, X4_4));
    ClearCharactersAITarget(X0_4);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

$Event(1045390700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4040)) {
            SetEventFlagID(1044399202, OFF);
        }
    }
L19:
    if (!EventFlag(4046)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4046));
        RestartEvent();
    }
L6:
    GotoIf(L0, EventFlag(4040));
    GotoIf(L1, EventFlag(4041));
    GotoIf(L3, EventFlag(4043));
L0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90105, false, false, false);
    Goto(L20);
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4046));
    RestartEvent();
});

$Event(1045390701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045390800));
    WaitFor(EventFlag(1045390800));
    EndIf(!EventFlag(4045));
    SetEventFlagID(4058, ON);
});


