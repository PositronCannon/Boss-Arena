// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1044370000, 1044371950, 0, 0, 0, 5);
    InitializeEvent(0, 1044372210, 1044370211, 1044371211, 1044372210);
    InitializeEvent(1, 1044372210, 1044370212, 1044371212, 1044372210);
    InitializeEvent(2, 1044372210, 1044370213, 1044371213, 1044372210);
    InitializeEvent(3, 1044372210, 1044370214, 1044371214, 1044372210);
    InitializeCommonEvent(0, 90005706, 1044370700, 930023, 0);
    InitializeEvent(0, 1044373715, 1044370705);
    InitializeEvent(0, 1044373716, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1044370700, true);
    SetCharacterBackreadState(1044370705, true);
    InitializeEvent(0, 1044375220, 0);
    InitializeCommonEvent(0, 90005251, 1044370203, 1121189888, 0, -1);
    InitializeCommonEvent(0, 90005201, 1044370262, 30001, 20001, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1044370200, 1044372200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1044370200, 30014, 20014, 1044372200, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1044370201, 1044372200, 1092616192, 1065353216, -1);
    InitializeCommonEvent(0, 90005211, 1044370201, 30014, 20014, 1044372200, 1092616192, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1044370350, 1044372350, 1097859072, 0, 0);
});

$Event(1044372210, Restart, function(X0_4, X4_4, X8_4) {
    EnableAsset(X4_4);
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (CharacterDead(X0_4)) {
        DisableAsset(X4_4);
        EndEvent();
    }
    EnableAsset(X4_4);
    DisableCharacter(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(X4_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260)
        || InArea(10000, X8_4);
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
    dmgChrAreaSp = dmgChrArea && chrSp;
    WaitFor(dmgChrAreaSp || sp || sp2 || sp3 || sp4 || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 900, 641012);
    WaitFixedTimeSeconds(0.5);
    DisableAsset(X4_4);
    WaitFixedTimeSeconds(0.3);
    EnableCharacter(X0_4);
});

$Event(1044375220, Restart, function() {
    ForceCharacterTreasure(1044375220);
});

$Event(1044372650, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(PlayerHasItem(ItemType.Goods, 130) && PlayerIsInOwnWorld());
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X0_4, true, false);
});

$Event(1044373700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(X12_4, OFF);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableAsset(X8_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    if (!EventFlag(X24_4)) {
        DisableCharacter(X0_4);
        DisableCharacter(X4_4);
        DisableAsset(X8_4);
    } else {
L0:
        GotoIf(L1, EventFlag(X16_4));
        GotoIf(L2, EventFlag(X20_4));
        Goto(L20);
L1:
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
        Goto(L20);
L2:
        ForceCharacterTreasure(X0_4);
        ForceCharacterTreasure(X4_4);
        DisableCharacter(X0_4);
        DisableCharacter(X4_4);
        DisableAsset(X0_4);
        DisableAsset(X4_4);
        DisableAsset(X8_4);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterBackreadState(X8_4, true);
        Goto(L20);
    }
L20:
    WaitFor(EventFlag(X12_4));
    RestartEvent();
});

$Event(1044373701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X0_4));
    if (!EventFlag(X4_4)) {
        BatchSetNetworkconnectedEventFlags(X12_4, X16_4, OFF);
        SetNetworkconnectedEventFlagID(X8_4, ON);
        SetNetworkconnectedEventFlagID(X12_4, ON);
        EndEvent();
    }
    EndIf(EventFlag(X8_4));
    BatchSetNetworkconnectedEventFlags(X12_4, X16_4, OFF);
    RandomlySetEventFlagInRange(X12_4, X16_4, ON);
    SetNetworkconnectedEventFlagID(X8_4, ON);
});

$Event(1044373702, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && EventFlag(X8_4) && EventFlag(X20_4));
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X8_4, X16_4, OFF);
    SetNetworkconnectedEventFlagID(X12_4, ON);
});

$Event(1044373710, Restart, function(X0_4) {
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 30021, false, false, false);
    DisableCharacterGravity(X0_4);
});

$Event(1044373715, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
});

$Event(1044373716, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3503));
    WaitFor(EventFlag(3506) && !EventFlag(1044379256) && InArea(10000, 1044372700));
    SetNetworkconnectedEventFlagID(1044379255, ON);
    EndEvent();
});
