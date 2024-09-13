// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000"
// @linked    [0,72,154,238]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1044340000, 1044341950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76161, 76157, 1044341980, 77110, 1, 78110, 78111, 78112, 78113, 78114, 78115, 78116, 78117, 78118, 78119);
    InitializeCommonEvent(0, 90005637, 31018600, 1044340620, 1044341620);
    InitializeCommonEvent(0, 90005636, 31018600, 1044340620, 1044341620, 4470, 1044342620, 1044342621, 1044342620, 1044343620, -1);
    InitializeEvent(0, 1044342502, 0);
    InitializeEvent(0, 1044342200, 0);
    InitializeEvent(0, 1044340650, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1044342300, 1044340300, 1044341300, 1044342300);
    InitializeEvent(1, 1044342300, 1044340301, 1044341302, 1044342301);
    InitializeEvent(2, 1044342300, 1044340302, 1044341301, 1044342301);
    InitializeEvent(0, 1044342203, 1044340203);
    InitializeCommonEvent(0, 90005250, 1044340203, 1044342280, 0, -1);
    InitializeEvent(0, 1044342280, 0);
    InitializeCommonEvent(0, 90005261, 1044340270, 1044342270, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005261, 1044340271, 1044342270, 1084227584, 1069547520, -1);
    InitializeEvent(0, 1044342230, 1044340230);
    InitializeEvent(1, 1044342230, 1044340231);
    InitializeEvent(2, 1044342230, 1044340232);
    InitializeEvent(3, 1044342230, 1044340240);
    InitializeCommonEvent(0, 90005251, 1044340252, 1090519040, 0, 0);
    InitializeCommonEvent(0, 90005250, 1044340250, 1044342600, 0, -1);
    InitializeCommonEvent(0, 90005630, 61443400, 1044341500, 127);
    InitializeEvent(0, 1044343700, 1044340700, 1044340701, 1044340702, 1044346700);
    InitializeEvent(0, 1044343702, 1044340700);
    InitializeEvent(0, 1044343704, 1044340700);
    InitializeEvent(0, 1044343701, 1044340700);
    InitializeCommonEvent(0, 90005700, 1044340700, 4741, 4742, 1044349249, 1059481190, 4740, 4743, 0);
    InitializeCommonEvent(0, 90005701, 1044340700, 4741, 4742, 1044349249, 3);
    InitializeCommonEvent(0, 90005702, 1044340700, 4743, 4740, 4743);
    InitializeEvent(0, 1044343703, 0);
    InitializeCommonEvent(0, 90005700, 1044340701, 1044349246, 1044349246, 1044349247, 1059481190, 1044349246, 1044349246, 0);
    InitializeCommonEvent(0, 90005701, 1044340701, 4741, 4742, 1044349249, 3);
    InitializeCommonEvent(0, 1044343705, 1044340700, 1044340701);
    InitializeEvent(0, 1044343706, 1044340700, 4740, 4741, 4742, 4743, 1044340701, 1044349246);
    InitializeEvent(0, 1044343707, 4740, 1041369201, 1044349226);
    InitializeCommonEvent(0, 90005704, 1044340710, 3601, 3600, 1044349251, 3);
    InitializeCommonEvent(0, 90005703, 1044340710, 3601, 3602, 1044349251, 3603, 3600, 3603, -1);
    InitializeCommonEvent(0, 90005702, 1044340710, 3603, 3600, 3604);
    InitializeEvent(0, 1044343710, 1044340710);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1044340710, true);
});

$Event(1044342502, Restart, function() {
    RegisterLadder(44340580, 44340851, 1044341580);
    RegisterLadder(44340582, 44340853, 1044341582);
    RegisterLadder(44340584, 44340855, 1044341584);
});

$Event(1044342200, Restart, function() {
    DisableAsset(1044346200);
});

$Event(1044342203, Restart, function(X0_4) {
    EndIf(CharacterDead(X0_4));
    SetSpEffect(X0_4, 8089);
    SetCharacterTeamType(X0_4, TeamType.CoopNPC);
    WaitFor(InArea(10000, 1044342281));
    SetCharacterTeamType(X0_4, TeamType.Enemy2);
    EndEvent();
});

$Event(1044342230, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1044342280, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterDead(1044345280));
    TriggerAISound(4132, 1044340280, TargetEntityType.Character);
    TriggerAISound(4132, 1044340281, TargetEntityType.Character);
    TriggerAISound(4132, 1044340282, TargetEntityType.Character);
    TriggerAISound(4132, 1044340283, TargetEntityType.Character);
    EndEvent();
});

$Event(1044342300, Restart, function(X0_4, X4_4, X8_4) {
    DisableCharacter(X0_4);
    DisableAsset(X4_4);
    EndIf(SpecialStandbyEndedFlag(X0_4));
    EndIf(CharacterDead(X0_4));
    EnableAsset(X4_4);
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

$Event(1044340650, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 44, 34, 0)
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

$Event(1044343700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1044349200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4740) && EventFlag(1041369248)) {
            SetEventFlagID(1041369248, OFF);
        }
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    DisableCharacter(X8_4);
    DisableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    GotoIf(L20, 
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747)) && EventFlag(1044349221)));
    GotoIf(L1, EventFlag(4740));
    GotoIf(L2, EventFlag(4741));
    GotoIf(L4, EventFlag(4743));
L1:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(X0_4, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(X0_4, 30002, false, false, false);
    }
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(X0_4, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(X0_4, 30002, false, false, false);
        DisableCharacterAI(X0_4);
    }
    Goto(L20);
L4:
    GotoIf(L20, !EventFlag(1044349222));
    ForceCharacterTreasure(X0_4);
    ForceCharacterTreasure(X4_4);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(EventFlag(1044349200));
    RestartEvent();
});

$Event(1044343701, Default, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4743));
    EndIf(!EventFlag(1044349221));
    WaitFor(CharacterDead(X0_4));
    SetNetworkconnectedEventFlagID(1044349222, ON);
    EndEvent();
});

$Event(1044343702, Default, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747))
            && (EventFlag(4740) || EventFlag(4741))));
    GotoIf(L0, EventFlag(4980));
    GotoIf(L10, AnyBatchEventFlags(4982, 4983));
L0:
    WaitFor(CharacterHasSpEffect(X0_4, 9601) || CharacterHasSpEffect(X0_4, 9603));
    GotoIf(L1, CharacterHasSpEffect(X0_4, 9601));
    GotoIf(L2, CharacterHasSpEffect(X0_4, 9603));
L1:
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 4, 1) || !CharacterHasSpEffect(X0_4, 9601));
    if (CharacterHasSpEffect(X0_4, 9601)) {
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9601));
    Goto(L20);
L2:
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 6, 1) || !CharacterHasSpEffect(X0_4, 9603));
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20010, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9603));
    Goto(L20);
L10:
    WaitFor(CharacterHasSpEffect(X0_4, 9603));
    if (!CharacterHasSpEffect(X0_4, 9603)) {
    }
L11:
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 6, 1) || !CharacterHasSpEffect(X0_4, 9603));
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20011, false, false, false);
        DisableCharacterAI(X0_4);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9603));
    Goto(L20);
L20:
    RestartEvent();
});

$Event(1044343703, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1044349229));
    WaitFor(EntityInRadiusOfEntity(10000, 1044340700, 7.5, 1));
    SetNetworkconnectedEventFlagID(1044349229, ON);
    EndEvent();
});

$Event(1044343704, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747))
            && (EventFlag(4740) || EventFlag(4741))));
    GotoIf(L0, CharacterHasSpEffect(X0_4, 9602));
    Goto(L10);
L0:
    DisableCharacterAI(X0_4);
    WaitFor(!CharacterHasSpEffect(X0_4, 9602));
    RestartEvent();
L10:
    EnableCharacterAI(X0_4);
    WaitFor(CharacterHasSpEffect(X0_4, 9602));
    RestartEvent();
});

$Event(1044343705, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(X4_4, 20000, DamageType.Unspecified)
            || HasDamageType(X4_4, 40000, DamageType.Unspecified))
            && !EventFlag(1041362709));
    SetNetworkconnectedEventFlagID(1041362708, ON);
    EndIf(EventFlag(4741));
    if (CharacterHasSpEffect(X0_4, 9601)) {
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    }
    if (CharacterHasSpEffect(X0_4, 9602)) {
        ForceAnimationPlayback(X0_4, 20006, false, false, false);
    }
});

$Event(1044343706, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X4_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    flagDmgHp = EventFlag(X8_4)
        || EventFlag(X12_4)
        || (HasDamageType(X0_4, 20000, DamageType.Unspecified) && CharacterHPValue(X0_4) < 1);
    flagDmgHp2 = EventFlag(X24_4)
        || (HasDamageType(X20_4, 20000, DamageType.Unspecified) && CharacterHPValue(X20_4) < 1);
    WaitFor(flagDmgHp || flagDmgHp2);
    GotoIf(L0, flagDmgHp.Passed);
    GotoIf(L5, flagDmgHp2.Passed);
L0:
    SetNetworkconnectedEventFlagID(X24_4, ON);
    SetCharacterTeamType(X20_4, TeamType.HostileNPC);
    Goto(L10);
L5:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableCharacterAI(X0_4);
    BatchSetNetworkconnectedEventFlags(X4_4, X16_4, OFF);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SaveRequest();
    Goto(L10);
L10:
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    WaitFor(EventFlag(X24_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    EndEvent();
});

$Event(1044343707, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X0_4) || EventFlag(X4_4)) {
        SetNetworkconnectedEventFlagID(X8_4, OFF);
        EndEvent();
    }
    SetNetworkconnectedEventFlagID(X8_4, ON);
    WaitFor(!EventFlag(X0_4) || EventFlag(X4_4));
    SetNetworkconnectedEventFlagID(X8_4, OFF);
    EndEvent();
});

$Event(1044343710, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3600)) {
            SetEventFlagID(1044349252, OFF);
        }
    }
L19:
    if (!EventFlag(3607)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3607));
        RestartEvent();
    }
L7:
    GotoIf(L0, EventFlag(3600));
    GotoIf(L1, EventFlag(3601));
    GotoIf(L2, EventFlag(3602));
    GotoIf(L3, EventFlag(3603));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L1:
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3607));
    RestartEvent();
});
