// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeEvent(0, 1042392200, 1042390200, 1042392200, 1042390210, 1042392200);
    InitializeEvent(1, 1042392200, 1042390201, 1042392200, 1042390210, 1042392200);
    InitializeEvent(2, 1042392200, 1042390202, 1042392200, 1042390210, 1042392200);
    InitializeEvent(3, 1042392200, 1042390203, 1042392200, 1042390210, 1042392200);
    InitializeEvent(4, 1042392200, 1042390204, 1042392200, 1042390210, 1042392200);
    InitializeEvent(5, 1042392200, 1042390240, 1042392240, 1042390210, 1042392240);
    InitializeEvent(6, 1042392200, 1042390241, 1042392240, 1042390210, 1042392240);
    InitializeEvent(7, 1042392200, 1042390242, 1042392240, 1042390210, 1042392240);
    InitializeEvent(8, 1042392200, 1042390249, 1042392249, 1042390210, 1042392249);
    InitializeEvent(9, 1042392200, 1042390250, 1042392249, 1042390210, 1042392249);
    InitializeEvent(10, 1042392200, 1042390251, 1042392249, 1042390210, 1042392249);
    InitializeEvent(11, 1042392200, 1042390252, 1042392249, 1042390210, 1042392249);
    InitializeCommonEvent(0, 90005300, 1042390310, 1042390310, 40146, 0, 0);
    InitializeEvent(0, 1042392600, 1042391600, 1042392600);
    InitializeEvent(1, 1042392600, 1042391601, 1042392601);
    InitializeEvent(2, 1042392600, 1042391602, 1042392602);
    InitializeEvent(3, 1042392600, 1042391603, 1042392603);
    InitializeEvent(4, 1042392600, 1042391604, 1042392604);
    InitializeEvent(5, 1042392600, 1042391605, 1042392605);
    InitializeEvent(6, 1042392600, 1042391606, 1042392606);
    InitializeCommonEvent(0, 90005790, 0, 1042390180, 1042392181, 1042392182, 1042390710, 22, 1042392180, 1042392181, 0, 1042399250, 0, 0);
    InitializeCommonEvent(0, 90005791, 1042390180, 1042392181, 1042392182, 1042390710);
    InitializeCommonEvent(0, 90005792, 1042390180, 1042392181, 1042392182, 1042390710, 1042390700, 0);
    InitializeCommonEvent(0, 90005793, 1042390180, 1042392181, 1042392182, 1042390710, 1042392180, 0, 0);
    InitializeCommonEvent(0, 90005795, 7602, 0, 1042399300, 1042392141, 1042392142, 80602, 9000, 1042391701, 30010);
    if (CeremonyActive(20)) {
        InitializeCommonEvent(0, 90005796, 7602, 1042390700, 5, 1042392141);
        InitializeEvent(0, 1042392145, 0);
    }
    InitializeEvent(0, 1042393700, 0);
    InitializeEvent(0, 1042393710, 0);
    InitializeCommonEvent(0, 90005774, 7602, 1042390500, 1042397500);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042390700, true);
    SetCharacterBackreadState(1042390180, true);
});

$Event(1042392145, Restart, function() {
    EndIf(!CeremonyActive(20));
    SetCharacterBackreadState(1042390700, false);
    SetCharacterTeamType(1042390700, TeamType.Human);
    DeleteAssetfollowingSFX(1042391700, true);
    CreateAssetfollowingSFX(1042391700, 200, 806700);
});

$Event(1042392200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
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
    SetEventFlagID(X12_4, ON);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    PlaySE(X4_4, SoundType.CharacterMotion, 407008100);
    WaitFixedTimeSeconds(1);
    GotoIf(L0, 
        !InArea(10000, X4_4)
            && (CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    WaitRandomTimeSeconds(0, 0.5);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 20011, false, false, false);
    ShootBullet(X8_4, 10000, 900, 100920, 0, 0, 0);
    SetSpEffect(X0_4, 8090);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(X0_4, 8090);
});

$Event(1042392300, Restart, function() {
    EndIf(EventFlag(1042399710));
    EndIf(EventFlag(1042399700));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    DisableCharacter(1042390700);
    CreateAssetfollowingSFX(1042391701, 100, 30010);
    WaitFor(
        !EventFlag(1042399700)
            && ActionButtonInArea(9000, 1042391701)
            && HasMultiplayerState(MultiplayerState.Singleplayer));
    DeleteAssetfollowingSFX(1042391701, true);
    WaitFixedTimeSeconds(1);
    SetSpEffect(10000, 15);
L0:
    NoOp();
});

$Event(1042392301, Restart, function() {
    EndIf(EventFlag(1042399710));
    EndIf(!EventFlag(1042399700));
    EnableCharacter(1042390700);
    ActivateGparamOverride(0, 0);
    SetCharacterTeamType(1042390700, TeamType.Enemy);
    SetEventFlagID(1042399700, OFF);
    WaitFor(CharacterDead(1042390700));
    SetEventFlagID(1042399710, ON);
    DeactivateGparamOverride(10);
    DisplayBanner(TextBannerType.GreatEnemyFelled);
    SetPsuedoMultiplayerReturnPosition(1042392721);
    IssueEndOfPseudoMultiplayerNotification(true);
});

$Event(1042392302, Restart, function() {
    GotoIf(L1, EventFlag(1042399710));
    GotoIf(L0, !EventFlag(1042399700));
    EnableAsset(1042391700);
    CreateAssetfollowingSFX(1042391700, 200, 806700);
    DeleteAssetfollowingSFX(1042391701, true);
    WaitFor(CharacterDead(1042390700));
L1:
    DeleteAssetfollowingSFX(1042391701, true);
L0:
    DisableAsset(1042391700);
});

$Event(1042392600, Restart, function(X0_4, X4_4) {
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || (InArea(10000, X4_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(X0_4, SoundType.GeometrySet, 810000099);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(2);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1042393700, Restart, function() {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1042399250, ON);
    EndIf(!EventFlag(16009208));
    SetEventFlagID(1042399250, OFF);
    EndEvent();
});

$Event(1042393710, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(400073));
    SetEventFlagID(1042399300, ON);
    EndEvent();
});
