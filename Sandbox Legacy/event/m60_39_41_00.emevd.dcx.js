// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000"
// @linked    [0,72,154,238]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1039410000, 1039411950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 1039412200, 1039410200, 1092616192, 1036831949);
    InitializeCommonEvent(1, 1039412200, 1039410201, 1092616192, 1036831949);
    InitializeCommonEvent(2, 1039412200, 1039410202, 1092616192, 1036831949);
    InitializeCommonEvent(3, 1039412200, 1039410203, 1092616192, 1036831949);
    InitializeCommonEvent(0, 90005261, 1039410270, 1039412270, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 1039410271, 1039412270, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005261, 1039410272, 1039412272, 1077936128, 0, 0);
    InitializeCommonEvent(0, 900005610, 1039411680, 100, 800, 1039418600);
    InitializeCommonEvent(0, 90005706, 1039410710, 930018, 0);
    InitializeEvent(0, 1039412250, 1039410250, 1039411250, 1039410250, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(1, 1039412250, 1039410280, 1039411280, 1039410280, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1039412251, 1039410250, 1039411250, 1039410250, 0, 0, 0, 0, 0, 1039410300, 1039412250);
    InitializeEvent(1, 1039412251, 1039410280, 1039411280, 1039410280, 0, 0, 0, 0, 0, 1039410310, 1039412280);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039410710, true);
    InitializeEvent(0, 1039412340, 1039410700);
    InitializeEvent(1, 1039412340, 1039410701);
    InitializeEvent(2, 1039412340, 1039410702);
});

$Event(1039412200, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
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
    areaChrSp = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1) && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterHasSpEffect(1039410210, 13680)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1039412250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
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

$Event(1039412251, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    if (EventFlag(X0_4)) {
        if (!EventFlag(X36_4)) {
            DisableAsset(X4_4);
            DisableCharacter(X8_4);
            DisableCharacterCollision(X8_4);
            ForceCharacterDeath(X8_4, false);
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
        AwardItemsIncludingClients(X32_4);
    }
    EndEvent();
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
});

$Event(1039412340, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});
