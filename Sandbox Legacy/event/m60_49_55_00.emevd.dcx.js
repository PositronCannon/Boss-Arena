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
    RegisterBonfire(1049550000, 1049551950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76652, 76651, 1049551980, 77520, 1, 78520, 78521, 78522, 78523, 78524, 78525, 78526, 78527, 78528, 78529);
    InitializeEvent(0, 1049552210, 1049550205);
    InitializeEvent(1, 1049552210, 1049550210);
    InitializeEvent(2, 1049552210, 1049550211);
    InitializeEvent(0, 1049552200, 1049555200, 1049552200);
    InitializeEvent(0, 1049552500, 0);
    InitializeEvent(0, 1049552550, 1049550209, 1049551550);
    InitializeEvent(1, 1049552550, 1049550203, 1049551551);
    InitializeEvent(2, 1049552550, 1049550221, 1049551552);
    InitializeCommonEvent(0, 90005683, 62512, 1049551600, 211, 78594, 0);
    InitializeEvent(0, 1049552400, 1049550405, 1049552405, 1049550400, 1049550410, 1, 1049550700);
    InitializeEvent(0, 1049552401, 1049550405, 1049552405, 1049550400, 1049550410, 1);
    InitializeEvent(0, 1049552410, 1049550400);
    InitializeEvent(0, 1049552420, 1049550222, 30000, 20000, 0, 1061997773, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005706, 1049550710, 930023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1049550700, true);
    SetCharacterBackreadState(1049550710, true);
});

$Event(1049552200, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1049552200));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5650);
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
    SetNetworkconnectedEventFlagID(1049552200, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
});

$Event(1049552210, Restart, function(X0_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, 30012, true, false, false);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || (CharacterHasSpEffect(X0_4, 481)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90110)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160)));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    EnableCharacterAI(X0_4);
});

$Event(1049552400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4) && CharacterDead(X12_4));
    WaitFixedTimeSeconds(1);
    if (Signed(X16_4) != 0) {
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 960, 601111);
    } else {
L2:
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 960, 601110);
    }
L3:
    SetSpEffect(X12_4, 4305);
    WaitFixedTimeSeconds(3);
    DisableCharacter(X12_4);
    EndIf(!PlayerIsInOwnWorld());
    if (Signed(X20_4) != 0) {
        AwardItemsIncludingClients(X20_4);
    }
    SetNetworkconnectedEventFlagID(X0_4, ON);
});

$Event(1049552401, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        DisableCharacter(X12_4);
        DisableCharacterCollision(X12_4);
        EndEvent();
    }
L0:
    if (EventFlag(X4_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        EndEvent();
    }
L1:
    DisableCharacter(X12_4);
    DisableCharacterCollision(X12_4);
    DisableCharacterGravity(X12_4);
    DisableCharacterAI(X12_4);
    EnableCharacterFadeOnEnable(X12_4);
    WaitFor(CharacterDead(X8_4));
    EnableCharacterDefaultBackread(X8_4);
    EnableCharacterDefaultBackread(X12_4);
    WaitFixedTimeSeconds(0.8);
    WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Character, X8_4, 900, X8_4);
    WaitFixedTimeSeconds(0.5);
    SetSpEffect(X8_4, 4305);
    if (Signed(X16_4) != 0) {
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 900, 601101);
    } else {
L2:
        SpawnOneshotSFX(TargetEntityType.Character, X8_4, 900, 601100);
    }
L3:
    EnableCharacter(X12_4);
    EnableCharacterGravity(X12_4);
    EnableCharacterCollision(X12_4);
    EnableCharacterAI(X12_4);
    DisableCharacter(X8_4);
    DisableCharacterDefaultBackread(X8_4);
    DisableCharacterDefaultBackread(X12_4);
    TriggerAISound(6410, 1049552400, TargetEntityType.Area);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(X4_4, ON);
    }
});

$Event(1049552410, Restart, function(X0_4) {
    EndIf(EventFlag(1049540405));
    DisableCharacterGravity(X0_4);
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, 30006, true, false, false);
});

$Event(1049552420, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    EndIf(EventFlag(1049550405));
    if (X24_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != X12_4) {
        areaChr |= InArea(10000, X12_4);
    }
    dmgAreaChrSp |= HasDamageType(1049550400, 0, DamageType.Unspecified);
    areaChr |= EntityInRadiusOfEntity(10000, X0_4, X16_4, 1)
        || CharacterHasStateInfo(1049550400, 436)
        || CharacterHasStateInfo(1049550400, 2)
        || CharacterHasStateInfo(1049550400, 5)
        || CharacterHasStateInfo(1049550400, 6)
        || CharacterHasStateInfo(1049550400, 260);
    areaChrSp &= areaChr
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X28_4 == 0 && X32_4 == 0 && X36_4 == 0)) {
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X36_4 != 0) {
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
    dmgAreaChrSp |= areaChrSp
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
        || sp5;
    WaitFor(dmgAreaChrSp);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X20_4);
        if (X24_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X24_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(1049552500, Restart, function() {
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 1049552500));
    TriggerAISound(6410, 1049552501, TargetEntityType.Area);
});

$Event(1049552550, Restart, function(X0_4, X4_4) {
    AttachAssetToCharacter(X0_4, 72, X4_4);
});
