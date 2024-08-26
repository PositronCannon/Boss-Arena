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
    RegisterBonfire(1035470000, 1035471950, 0, 0, 0, 5);
    InitializeEvent(0, 1035472580, 0);
    InitializeEvent(0, 1035472205, 0);
    InitializeEvent(0, 1035472206, 1035470201, 1035470201);
    InitializeEvent(1, 1035472206, 1035470202, 1035470202);
    InitializeEvent(0, 1035472207, 1035475200, 1035470200);
    InitializeEvent(1, 1035472207, 1035475201, 1035470201);
    InitializeEvent(2, 1035472207, 1035475202, 1035470202);
    InitializeEvent(0, 1035472220, 0);
    InitializeEvent(0, 1035472221, 0);
    InitializeEvent(0, 1035472222, 0);
    InitializeEvent(0, 1035472200, 0);
    InitializeEvent(0, 1035472210, 0);
    InitializeCommonEvent(0, 90005300, 1035470200, 1035470200, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035470201, 1035470201, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035470202, 1035470202, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035470220, 1035470220, 0, 0, 0);
    InitializeEvent(0, 1035472240, 1035470260, 12603, 1035472240, 1035472241, 1035472242);
    InitializeCommonEvent(0, 90005300, 1035470260, 1035470260, 40210, 0, 0);
    InitializeEvent(0, 1035472270, 0);
    InitializeEvent(1, 1035472270, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005251, 1035470201, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470202, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470210, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470211, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470212, 1077936128, 0, 0);
    InitializeCommonEvent(0, 90005251, 1035470218, 1077936128, 0, 0);
});

$Event(1035472200, Default, function() {
    DisableNetworkSync();
    if (EventFlag(1035470215)) {
        ChangeWeather(Weather.None, -1, false);
        EndEvent();
    }
    if (!InArea(10000, 1035472200)) {
        ChangeWeather(Weather.None, -1, false);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    if (!WeatherActive(Weather.HeavyFog, 0, 0)) {
        ChangeWeather(Weather.HeavyFog, -1, false);
    }
L1:
    RestartEvent();
});

$Event(1035472205, Restart, function() {
    EndIf(EventFlag(1035470200));
    ForceAnimationPlayback(1035470200, 30006, false, false, false);
    EnableCharacterImmortality(1035470220);
    DisableCharacterHPBarDisplay(1035470220);
    WaitFor(
        HasDamageType(1035470200, 10000, DamageType.Unspecified)
            || HasDamageType(1035470220, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(1035470200, 20006, false, false, false);
    DisableCharacter(1035470220);
    SetEventFlagID(1035470200, ON);
    SetEventFlagID(1035470220, ON);
    EndEvent();
});

$Event(1035472206, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(HasDamageType(X4_4, 10000, DamageType.Unspecified));
    DisableCharacterCollision(X4_4);
    ForceAnimationPlayback(X4_4, 20008, false, false, false);
    SetEventFlagID(X0_4, ON);
});

$Event(1035472207, Restart, function(X0_4, X4_4) {
    DisableCharacter(X4_4);
    DisableCharacter(1035470220);
    EndIf(EventFlag(X0_4));
    if (!PlayerIsInOwnWorld()) {
        EnableCharacterInvincibility(X4_4);
        EnableCharacterInvincibility(1035470220);
    }
    WaitFor(EventFlag(1035472211));
    EnableCharacter(X4_4);
    EnableCharacterImmortality(X4_4);
    DisableCharacterHPBarDisplay(X4_4);
    EnableCharacter(1035470220);
});

$Event(1035472210, Restart, function() {
    if (EventFlag(1035470215)) {
        DisableCharacter(1035475210);
        DisableGenerator(1035473210);
        DisableGenerator(1035473211);
        DisableGenerator(1035473212);
        DisableGenerator(1035473213);
        DisableGenerator(1035473214);
        DisableGenerator(1035473215);
        DisableGenerator(1035473216);
        DisableGenerator(1035473217);
        DisableGenerator(1035473218);
        DisableGenerator(1035473219);
        DisableGenerator(1035473220);
        DisableGenerator(1035473221);
        DisableGenerator(1035473222);
        EndEvent();
    }
L0:
    DisableCharacter(1035470210);
    DisableCharacter(1035470211);
    DisableCharacter(1035470212);
    DisableGenerator(1035473210);
    DisableGenerator(1035473211);
    DisableGenerator(1035473212);
    DisableGenerator(1035473213);
    DisableGenerator(1035473214);
    DisableGenerator(1035473215);
    DisableGenerator(1035473216);
    DisableGenerator(1035473217);
    DisableGenerator(1035473218);
    DisableGenerator(1035473219);
    DisableGenerator(1035473220);
    DisableGenerator(1035473221);
    DisableGenerator(1035473222);
    WaitFor(EventFlag(1035472211));
    EnableCharacter(1035470210);
    EnableCharacter(1035470211);
    EnableCharacter(1035470212);
    EnableGenerator(1035473210);
    EnableGenerator(1035473211);
    EnableGenerator(1035473212);
    EnableGenerator(1035473213);
    EnableGenerator(1035473214);
    EnableGenerator(1035473215);
    EnableGenerator(1035473216);
    EnableGenerator(1035473217);
    EnableGenerator(1035473218);
    EnableGenerator(1035473219);
    EnableGenerator(1035473220);
    EnableGenerator(1035473221);
    EnableGenerator(1035473222);
    EndEvent();
});

$Event(1035472220, Restart, function() {
    if (EventFlag(1035470215)) {
        DisableAsset(1035471210);
        DeleteAssetfollowingSFX(1035471210, true);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(1035471210, true);
    CreateAssetfollowingSFX(1035471210, 200, 1500);
    WaitFor(EventFlag(1035470200) && EventFlag(1035470201) && EventFlag(1035470202));
    SetEventFlagID(1035470215, ON);
    DisplayGenericDialog(20210, PromptType.OKCANCEL, NumberofOptions.NoButtons, 0, 5);
    PlaySE(1035471210, SoundType.SFX, 1500);
    DisableAsset(1035471210);
    DeleteAssetfollowingSFX(1035471210, true);
    ForceCharacterDeath(1035475210, false);
    DisableGenerator(1035473210);
    DisableGenerator(1035473211);
    DisableGenerator(1035473212);
    DisableGenerator(1035473213);
    DisableGenerator(1035473214);
    DisableGenerator(1035473215);
    DisableGenerator(1035473216);
    DisableGenerator(1035473217);
    DisableGenerator(1035473218);
    DisableGenerator(1035473219);
    DisableGenerator(1035473220);
    DisableGenerator(1035473221);
    DisableGenerator(1035473222);
    EndEvent();
});

$Event(1035472221, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(1035470215));
    WaitFor(ActionButtonInArea(9320, 1035471210) || EventFlag(1035470215));
    EndIf(EventFlag(1035470215));
    DisplayGenericDialog(20200, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1035471210, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472222, Restart, function() {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9210, 1035471211));
    DisplayGenericDialog(60011, PromptType.OKCANCEL, NumberofOptions.NoButtons, 1035471211, 3);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1035472211, ON);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472240, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1035470260));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !CharacterDead(X0_4));
    SetEventFlagID(1035472241, OFF);
    SetEventFlagID(1035472242, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1035472241, 1035472242, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1035472241));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1035472241));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1035472241));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1035470270);
    WaitFor(InArea(10000, 1035472270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1035470270, 1035472271, 900, 802102000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1035470270, 1035472271, 900, 802102010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1035470270, 1035472271, 900, 802102020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1035470270, 1035472271, 900, 802102030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1035470270, 1035472271, 900, 802102040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1035470270, 1035472271, 900, 802102050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1035470270, 1035472271, 900, 802102060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1035470270, 1035472271, 900, 802102070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1035472580, Restart, function() {
    RegisterLadder(1035470580, 1035470581, 1035471580);
});
