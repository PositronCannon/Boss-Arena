// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1043370000, 1043371950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1043370210, 1043370210, 40108, 0, 0);
    InitializeCommonEvent(0, 90005300, 1043370800, 1043370341, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1043370340, 1043370341);
    InitializeCommonEvent(0, 90005477, 0);
    InitializeEvent(0, 1043372340, 1043370340, 1043370341);
    InitializeCommonEvent(0, 90005860, 1043370800, 0, 1043370340, 0, 1043370400, 0);
    InitializeCommonEvent(0, 90005871, 1043370340, 903150600, 10, 1043370341);
    InitializeCommonEvent(0, 90005872, 1043370340, 10, 0);
    InitializeEvent(0, 1043373700, 1043370700, 1043370701, 1043370702, 1043376700);
    InitializeEvent(0, 1043373703, 1043370700);
    InitializeEvent(0, 1043373705, 1043370700);
    InitializeCommonEvent(0, 90005703, 1043370700, 4701, 4702, 1043379249, 4701, 4700, 4703, 0);
    InitializeCommonEvent(0, 90005704, 1043370700, 4701, 4700, 1043379249, 3);
    InitializeCommonEvent(0, 90005702, 1043370700, 4703, 4700, 4703);
    InitializeCommonEvent(0, 90005703, 1043370701, 1043379246, 1043379246, 1043379247, 1043379246, 1043379246, 1043379246, 0);
    InitializeCommonEvent(0, 90005704, 1043370701, 1043379246, 1043379246, 1043379247, 3);
    InitializeCommonEvent(0, 1043373706, 1043370700, 1043370701);
    InitializeEvent(0, 1043373707, 1043370700, 4700, 4701, 4702, 4703, 1043370701, 1043379246);
    InitializeEvent(0, 1043373701, 0);
    InitializeEvent(0, 1043373710, 1043370730);
    InitializeEvent(0, 1043373711, 0);
    InitializeEvent(0, 1043373722, 1043370740, 1043372709, 1043372711, 1043372701, 1043382700);
    InitializeEvent(0, 1043373726, 1043370740);
    InitializeCommonEvent(0, 90005791, 1043379262, 1043372715, 1043372716, 1043370740);
    InitializeCommonEvent(0, 90005790, 0, 1043379262, 1043372715, 1043372716, 1043370740, 21, 1043382710, 1043372709, 0, 1043372740, 0, 0);
    InitializeCommonEvent(0, 90005790, 0, 1043379262, 1043372715, 1043372716, 1043370740, 21, 1043372712, 1043372711, 0, 1043372741, 0, 0);
    InitializeCommonEvent(0, 90005774, 1043379262, 1042370700, 1042377700);
    InitializeCommonEvent(0, 90005704, 1043370750, 3941, 3940, 1043379351, 3);
    InitializeCommonEvent(0, 90005703, 1043370750, 3941, 3942, 1043379351, 3941, 3940, 3944, -1);
    InitializeCommonEvent(0, 90005702, 1043370750, 3943, 3940, 3944);
    InitializeEvent(0, 1043373730, 1043370750, 1043371700);
    InitializeEvent(0, 1043373731, 1095761920, 1095761920, 1103626240);
    InitializeEvent(0, 1043373732, 1043370750, 1043371700);
    InitializeEvent(0, 1043373733, 1043370750);
    InitializeEvent(0, 1043373734, 1043370750);
    InitializeCommonEvent(0, 90005630, 61433700, 1043371500, 127);
    InitializeCommonEvent(0, 90005460, 1043370200);
    InitializeCommonEvent(0, 90005461, 1043370200);
    InitializeCommonEvent(0, 90005462, 1043370200);
    InitializeCommonEvent(0, 900005610, 1043371680, 100, 800, 0);
    InitializeCommonEvent(0, 90005631, 1043371640, 61010);
    InitializeEvent(0, 1043372650, 1520, 710520, 1770, 710770, 69090, 69370);
});

$Event(50, Default, function() {
    if (EventFlag(1049308052))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    SetCharacterBackreadState(1043370711, true);
    SetCharacterBackreadState(1043370720, true);
    SetCharacterBackreadState(1043370740, true);
    SetCharacterBackreadState(1043370750, true);
    InitializeCommonEvent(0, 90005200, 1043370240, 30019, 20019, 1043372240, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043370241, 30019, 20019, 1043372240, 1082130432, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043370242, 30019, 20019, 1043372240, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043370243, 30019, 20019, 1043372240, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1043370244, 30019, 20019, 1043372240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1043370210, 1043372210, 1077936128, 0, -1);
});

$Event(1043372250, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(1041382200));
    DisableCharacter(X0_4);
    CreateBulletOwner(X8_4);
    WaitFor(
        HasDamageType(X0_4, 10000, DamageType.Unspecified)
            || (InArea(10000, X4_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive))));
    SetEventFlagID(1041382200, ON);
    EndIf(CharacterDead(X0_4));
    PlaySE(X4_4, SoundType.CharacterMotion, 407008100);
    WaitFixedTimeSeconds(1);
    EndIf(!InArea(10000, X4_4));
    WaitRandomTimeSeconds(0, 0.5);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 20011, false, false, false);
    ShootBullet(X8_4, 10000, 900, 100920, 0, 0, 0);
    SetSpEffect(X0_4, 8090);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(X0_4, 8090);
});

$Event(1043372340, Restart, function(X0_4, X4_4) {
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

$Event(1043372650, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 43, 37, 0)
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

$Event(1043373700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1043379200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4700) && EventFlag(1043379248)) {
            SetEventFlagID(1043379248, OFF);
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
    GotoIf(L20, !(EventFlag(4705) || EventFlag(4706) || EventFlag(4707)));
    GotoIf(L1, EventFlag(4700));
    GotoIf(L2, EventFlag(4701));
    GotoIf(L4, EventFlag(4703));
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
    ForceCharacterTreasure(X0_4);
    ForceCharacterTreasure(X4_4);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(EventFlag(1043379200));
    RestartEvent();
});

$Event(1043373701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379229));
    WaitFor(EntityInRadiusOfEntity(10000, 1043370700, 7.5, 1));
    SetNetworkconnectedEventFlagID(1043379229, ON);
    EndEvent();
});

$Event(1043373703, Default, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4705) || EventFlag(4706) || EventFlag(4707))
            && (EventFlag(4700) || EventFlag(4701))));
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

$Event(1043373705, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4705) || EventFlag(4706) || EventFlag(4707))
            && (EventFlag(4700) || EventFlag(4701))));
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

$Event(1043373706, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(X4_4, 20000, DamageType.Unspecified)
            || HasDamageType(X4_4, 40000, DamageType.Unspecified))
            && !EventFlag(1043372709));
    SetNetworkconnectedEventFlagID(1043372708, ON);
    EndIf(EventFlag(4701));
    if (CharacterHasSpEffect(X0_4, 9601)) {
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    }
    if (CharacterHasSpEffect(X0_4, 9602)) {
        ForceAnimationPlayback(X0_4, 20006, false, false, false);
    }
});

$Event(1043373707, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(3000));
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

$Event(1043373710, Restart, function(X0_4) {
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 30023, false, false, false);
});

$Event(1043373711, Restart, function() {
    WaitFor(
        !EventFlag(1043379305)
            && !EventFlag(1043379306)
            && EntityInRadiusOfEntity(10000, 1043370730, 8, 1));
    SetNetworkconnectedEventFlagID(1043372722, ON);
});

$Event(1043373721, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetCharacterBackreadState(X0_4, true);
    EndIf(!EventFlag(3620));
    EndIf(!EventFlag(3625) && !EventFlag(3626));
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    WaitFor(!EventFlag(1043372713) && EventFlag(1043372717));
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTalkRange(X0_4, X8_4);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    EndEvent();
});

$Event(1043373722, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    GotoIf(L1, !EventFlag(1043372714));
    GotoIf(L2, EventFlag(1043372714));
L1:
    WaitFor(InArea(10000, X4_4) || InArea(10000, X8_4));
    GotoIf(L5, InArea(10000, X4_4));
    Goto(L6);
L5:
    SetEventFlagID(1043372740, ON);
    SetEventFlagID(1043372741, OFF);
    Goto(L7);
L6:
    SetEventFlagID(1043372741, ON);
    SetEventFlagID(1043372740, OFF);
    Goto(L7);
L7:
    SetEventFlagID(1043372714, ON);
    SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    RestartEvent();
L2:
    WaitFor(InArea(10000, X12_4) || InArea(10000, X16_4) || CharacterDead(X0_4));
    SetEventFlagID(1043372714, OFF);
    SetEventFlagID(1043372740, OFF);
    SetEventFlagID(1043372741, OFF);
    SetEventFlagID(1043379263, ON);
    if (CharacterDead(X0_4)) {
        SetEventFlagID(1043379262, ON);
        WaitFixedTimeFrames(1);
    }
    SetEventFlagID(3638, ON);
    SetEventFlagID(1043369200, OFF);
    EndIf(EventFlag(1043379262));
    SendNPCSummonHome(X0_4);
    EndEvent();
});

$Event(1043373726, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    WaitFor(CharacterHasSpEffect(X0_4, 9760));
    WaitFixedTimeSeconds(5);
    SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
    EndEvent();
});

$Event(1043373730, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940) && EventFlag(1043379353)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X4_4);
    if (!EventFlag(3945)) {
        WaitFor(EventFlag(3945));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    GotoIf(L5, !EventFlag(1043379357));
    Goto(L6);
L5:
    SetCharacterTalkRange(X0_4, 70);
    SetCharacterBackreadState(X0_4, false);
    DisableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    EnableAsset(X4_4);
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L6:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3945));
    RestartEvent();
});

$Event(1043373731, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3945));
    EndIf(EventFlag(1043379357));
    SetEventFlagID(1043372732, ON);
    WaitFor(EventFlag(1043372733));
    WaitFixedTimeSeconds(X0_4);
    SetEventFlagID(1043372734, ON);
    WaitFor(EventFlag(1043372735));
    WaitFixedTimeSeconds(X4_4);
    SetEventFlagID(1043372736, ON);
    WaitFor(EventFlag(1043372737));
    WaitFixedTimeSeconds(X8_4);
    SetEventFlagID(1043372732, OFF);
    SetEventFlagID(1043372733, OFF);
    SetEventFlagID(1043372734, OFF);
    SetEventFlagID(1043372735, OFF);
    SetEventFlagID(1043372736, OFF);
    SetEventFlagID(1043372737, OFF);
    RestartEvent();
});

$Event(1043373732, Restart, function(X0_4, X4_4) {
    if (PlayerIsInOwnWorld()) {
        EndIf(EventFlag(1044342300));
        WaitFor(HasDamageType(X4_4, 20000, DamageType.Unspecified) && PlayerIsInOwnWorld());
        SetEventFlagID(1043379357, ON);
    }
L0:
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1043379357);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 900, 641012);
    WaitFixedTimeSeconds(0.5);
    DisableAsset(X4_4);
    WaitFixedTimeSeconds(0.3);
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    EndEvent();
});

$Event(1043373733, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    DisableCharacterDefaultBackread(X0_4);
    EndIf(!EventFlag(3945));
    EndIf(EventFlag(1043379357));
    WaitFor(!EventFlag(1043379357) && EntityInRadiusOfEntity(10000, X0_4, 15, 1));
    EnableCharacterDefaultBackread(X0_4);
    WaitFor(!(!EventFlag(1043379357) && EntityInRadiusOfEntity(10000, X0_4, 15, 1)));
    DisableCharacterDefaultBackread(X0_4);
    RestartEvent();
});

$Event(1043373734, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3945));
    EndIf(!EventFlag(3940));
    WaitFor(EventFlag(3941));
    ForceAnimationPlayback(X0_4, 20043, false, false, false);
    RestartEvent();
});
