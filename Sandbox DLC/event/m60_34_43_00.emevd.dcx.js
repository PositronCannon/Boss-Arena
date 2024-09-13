// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1034430000, 1034431950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1034430310, 1034430310, 40260, 0, 0);
    InitializeEvent(0, 1034432580, 1034430580, 1034431580);
    InitializeEvent(0, 1034432610, 0);
    InitializeEvent(0, 1034432260, 1034430250, 1034431250, 1034430250, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1034432261, 1034430250, 1034431250, 1034430250, 1034435260, 0, 0, 0, 0, 0, 1034430200, 1034432250);
    InitializeEvent(0, 1034432262, 1034430250, 0, 1034430250, 0, 1034430260, 30010, 20010, 1101004800, 0, 0, 1034432250);
    InitializeEvent(1, 1034432262, 1034430250, 0, 1034430250, 0, 1034430261, 30010, 20010, 1101004800, 0, 0, 1034432250);
    InitializeEvent(3, 1034432262, 1034430250, 0, 1034430250, 0, 1034430262, 30010, 20010, 1101004800, 0, 0, 1034432250);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 1034430300, 1034432300, 0, -1);
    InitializeCommonEvent(0, 90005250, 1034430302, 1034432302, 0, -1);
    InitializeCommonEvent(0, 90005250, 1034430303, 1034432300, 0, -1);
    InitializeCommonEvent(0, 90005250, 1034430305, 1034432305, 0, -1);
});

$Event(1034432260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
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

$Event(1034432261, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
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

$Event(1034432262, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
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

$Event(1034432580, Restart, function(X0_4, X4_4) {
    if (!EventFlag(X0_4)) {
        ForceAnimationPlayback(X4_4, 0, false, false, false);
        WaitFor(
            PlayerIsInOwnWorld() && InArea(10000, 1034432580) && CharacterHasSpEffect(10000, 485));
        SetNetworkconnectedEventFlagID(X0_4, ON);
    }
L0:
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    RegisterLadder(1034430580, 1034430581, 1034431580);
    EndEvent();
});

$Event(1034432610, Default, function() {
    DisableAsset(1034431610);
});
