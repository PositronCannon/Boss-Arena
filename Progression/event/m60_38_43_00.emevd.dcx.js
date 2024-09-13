// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1038430000, 1038431950, 0, 0, 0, 5);
    InitializeEvent(0, 1038432260, 1038430250, 1038431250, 1038430250, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1038432261, 1038430250, 1038431250, 1038430250, 1038435260, 0, 0, 0, 0, 0, 1038430100, 1038432250);
    InitializeEvent(0, 1038432262, 1038430250, 0, 1038430250, 0, 1038430260, 30010, 20010, 1101004800, 0, 0, 1038432250);
    InitializeEvent(1, 1038432262, 1038430250, 0, 1038430250, 0, 1038430261, 30010, 20010, 1101004800, 0, 0, 1038432250);
    InitializeEvent(3, 1038432262, 1038430250, 0, 1038430250, 0, 1038430262, 30010, 20010, 1101004800, 0, 0, 1038432250);
    InitializeCommonEvent(0, 90005704, 1038430700, 3381, 3380, 1038439201, 3);
    InitializeCommonEvent(0, 90005703, 1038430700, 3381, 3382, 1038439201, 3381, 3380, 3384, -1);
    InitializeCommonEvent(0, 90005702, 1038430700, 3383, 3380, 3384);
    InitializeEvent(0, 1038430700, 1038430700);
    InitializeEvent(0, 1038430701, 1038430700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038430700, true);
    InitializeCommonEvent(0, 90005201, 1038430210, 30001, 20001, 1092616192, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1038430702, 0);
});

$Event(1038432260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(X0_4));
    EndIf(HasDamageType(X8_4, 20000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    IssueShortWarpRequest(X8_4, TargetEntityType.Asset, X4_4, 220);
    WaitFixedTimeSeconds(5.4);
    RestartEvent();
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1038432261, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    if (EventFlag(X0_4)) {
        if (!EventFlag(X40_4)) {
            DisableAsset(X4_4);
            DisableCharacter(X8_4);
            DisableCharacterCollision(X8_4);
            ForceCharacterDeath(X8_4, false);
            DisableCharacter(X12_4);
            DisableCharacterCollision(X12_4);
            ForceCharacterDeath(X12_4, false);
            EndEvent();
        }
L1:
        DisableAsset(X4_4);
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X4_4, 200, 803160);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChr = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X8_4, 436)
        || CharacterHasStateInfo(X8_4, 2)
        || CharacterHasStateInfo(X8_4, 5)
        || CharacterHasStateInfo(X8_4, 6)
        || CharacterHasStateInfo(X8_4, 260);
    WaitFor(dmgChr && chrSp);
    SetEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X4_4, true);
    WaitFixedTimeSeconds(1);
    DisableAsset(X4_4);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.3);
        AwardItemsIncludingClients(X36_4);
    }
    EndEvent();
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
});

$Event(1038432262, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(EventFlag(X0_4));
    EndIf(SpecialStandbyEndedFlag(X16_4));
    ForceAnimationPlayback(X16_4, X20_4, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || HasDamageType(X16_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X16_4, 436)
        || CharacterHasStateInfo(X16_4, 2)
        || CharacterHasStateInfo(X16_4, 5)
        || CharacterHasStateInfo(X16_4, 6)
        || CharacterHasStateInfo(X16_4, 260)
        || EntityInRadiusOfEntity(X16_4, 20000, X28_4, 1);
    WaitFor(
        (CharacterHasSpEffect(X0_4, 481)
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
                && !CharacterHasSpEffect(X0_4, 90160))
            || (dmgChrArea && chrSp));
    SetNetworkconnectedEventFlagID(X40_4, ON);
    SetSpecialStandbyEndedFlag(X16_4, ON);
    WaitFixedTimeSeconds(X32_4);
    ForceAnimationPlayback(X16_4, X24_4, false, false, false);
    EndEvent();
    WaitFixedTimeSeconds(X4_4);
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1038430700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3380)) {
            SetEventFlagID(1038439202, OFF);
        }
    }
L19:
    GotoIf(L9, EventFlag(3389));
    GotoIf(L10, EventFlag(3390));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(AnyBatchEventFlags(3389, 3390));
    RestartEvent();
L9:
L10:
    GotoIf(L0, EventFlag(3380));
    GotoIf(L1, EventFlag(3381));
    GotoIf(L3, EventFlag(3383));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetSpEffect(X0_4, 9628);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!AnyBatchEventFlags(3389, 3390));
    RestartEvent();
});

$Event(1038430701, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    WaitFor(
        AnyBatchEventFlags(1041389320, 1041389322)
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified) || HPRatio(X0_4) <= 0));
    SetEventFlagID(1041389334, ON);
});

$Event(1038430702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        AnyBatchEventFlags(1041389320, 1041389322)
            && !EventFlag(1041382729)
            && !EventFlag(1038412709));
    SetEventFlagID(3398, ON);
    SetEventFlagID(1038432709, ON);
});
