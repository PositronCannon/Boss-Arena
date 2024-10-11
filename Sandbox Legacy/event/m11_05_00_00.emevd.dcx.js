// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(11050002, 11051952, 0, 0, 0, 8);
    RegisterBonfire(11050003, 11051953, 0, 0, 0, 8);
    RegisterBonfire(11050004, 11051954, 0, 0, 0, 8);
    RegisterBonfire(11050005, 11051955, 0, 0, 0, 8);
    InitializeCommonEvent(0, 9005810, 11050800, 11050000, 11050950, 11051950, 1090519040);
    InitializeCommonEvent(0, 9005810, 11050850, 11050001, 11050951, 11051951, 1090519040);
    InitializeEvent(0, 11052800, 0);
    InitializeEvent(0, 11052810, 0);
    InitializeEvent(0, 11052811, 0);
    InitializeEvent(0, 11052830, 0);
    InitializeEvent(0, 11052849, 0);
    InitializeEvent(0, 11052850, 0);
    InitializeEvent(0, 11052860, 0);
    InitializeEvent(0, 11052861, 0);
    InitializeEvent(0, 11052859, 0);
    InitializeCommonEvent(0, 90005780, 11050800, 11052160, 11052161, 11050740, 20, 11052160, 11059350, 1, 0);
    InitializeCommonEvent(0, 90005781, 11050800, 11052160, 11052161, 11050740);
    InitializeCommonEvent(0, 90005784, 11052160, 11052805, 11050740, 11052800, 11052805, 0);
    InitializeCommonEvent(0, 90005780, 11050800, 11052164, 11052165, 11050750, 20, 11052164, 10009719, 1, 0);
    InitializeCommonEvent(0, 90005781, 11050800, 11052164, 11052165, 11050750);
    InitializeCommonEvent(0, 90005784, 11052164, 11052805, 11050750, 11052800, 11052805, 0);
    InitializeCommonEvent(0, 90005501, 11050525, 11051525, 0, 11051525, 11051526, 11051527, 11050526);
    InitializeCommonEvent(0, 90005501, 11050530, 11051530, 0, 11051530, 11051531, 11051532, 11050531);
    InitializeCommonEvent(0, 90005501, 11050535, 11051535, 1, 11051535, 11051536, 11051537, 11050536);
    InitializeCommonEvent(0, 90005501, 11050610, 11051610, 2, 11051610, 11051611, 11051612, 11050611);
    InitializeEvent(0, 11052510, 0);
    InitializeCommonEvent(0, 90005511, 11050560, 11051560, 11053560, 227010, 0);
    InitializeCommonEvent(0, 90005512, 11050560, 11052560, 11052561);
    InitializeEvent(0, 11052580, 0);
    InitializeCommonEvent(0, 90005520, 11050578, 11051578, 11052578, 11052579);
    InitializeEvent(0, 11052691, 0);
    InitializeEvent(0, 11052692, 0);
    InitializeCommonEvent(0, 90005605, 11051680, 3874, 34152692, 11050000, 11052680, 11052681, 11052682, 0, 0, 0, 0);
    InitializeEvent(0, 11052698, 0);
    InitializeEvent(0, 11052697, 0);
    InitializeEvent(0, 11052699, 0);
    InitializeEvent(0, 11053700, 11050801, 11050800, 11050800, 11052805, 1119092736);
    InitializeEvent(0, 11053705, 11050710);
    InitializeCommonEvent(0, 90005704, 11050710, 4201, 4200, 1040529251, 3);
    InitializeCommonEvent(0, 90005703, 11050710, 4201, 4202, 1040529251, 4201, 4200, 4203, -1);
    InitializeCommonEvent(0, 90005702, 11050710, 4203, 4200, 4204);
    InitializeEvent(0, 11053706, 11050705);
    InitializeCommonEvent(0, 90005750, 11051700, 6450, 4900, 9500, 9500, 11059206, 806780);
    InitializeEvent(0, 11053707, 0);
    InitializeCommonEvent(0, 90005750, 11051700, 4110, 105000, 400500, 400500, 11059305, 0);
    InitializeCommonEvent(0, 11053708, 11051740, 4110, 103700, 400370, 400370, 4208, 0, 4203);
    InitializeCommonEvent(0, 90005706, 11050721, 930025, 0);
    InitializeCommonEvent(0, 90005706, 11050720, 930010, 0);
    InitializeEvent(0, 11053710, 11050850);
    InitializeEvent(0, 11053720, 0);
    InitializeCommonEvent(0, 90005703, 11050730, 3941, 3942, 1039409251, 3941, 3940, 3943, 0);
    InitializeCommonEvent(0, 90005704, 11050730, 3941, 3940, 1039409251, 3);
    InitializeCommonEvent(0, 90005702, 11050730, 3943, 3940, 3944);
    InitializeEvent(0, 11053730, 11050730);
    InitializeEvent(0, 11053731, 11050730);
});

//hoarah loux
$Event(11052800, Default, function() {
    EndIf(EventFlag(11050800));
    WaitFor(CharacterHPValue(11050800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(11058000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(11050800));
    HandleBossDefeatAndDisplayBanner(11050800, TextBannerType.LegendFelled);
    WaitFixedTimeSeconds(6);
    //boss rush
    if (AnyBatchEventFlags(1049308250, 1049308275)) {
        SetEventFlagID(1049302510, ON);
        InitializeCommonEvent(0, 90009920, 0);
    }
    //roundtable warp
    else
        WarpPlayer(11, 10, 0, 0, 11102021, 0);
});

$Event(11052810, Restart, function() {
    if (EventFlag(11050800)) {
        DisableCharacter(11055800);
        DisableCharacterCollision(11055800);
        ForceCharacterDeath(11055800, false);
        DisableAsset(11051820);
        EndEvent();
    }
L0:
    DisableCharacterAI(11055800);
    DisableCharacterGravity(11050800);
    DisableCharacterCollision(11050800);
    EnableCharacterImmortality(11050801);
    DisableCharacterCollision(11050801);
    EndIf(
        CharacterType(10000, TargetType.BlackPhantom)
            || CharacterType(10000, TargetType.Invader)
            || CharacterType(10000, TargetType.Invader2)
            || CharacterType(10000, TargetType.Invader3)
            || CharacterType(10000, TargetType.BluePhantom));
    if (!EventFlag(11050801)) {
        DisableCharacterCollision(11050801);
        ForceAnimationPlayback(11050801, 30010, false, false, false);
        WaitFor(EventFlag(11052805) && InArea(10000, 11052801));
        SendInvadingPhantomsHome(0);
        WaitFixedTimeFrames(1);
        SetEventFlagID(9021, ON);
        if (PlayerIsInOwnWorld()) {
            PlayCutsceneToPlayerAndWarp(11050010, CutscenePlayMode.Skippable, 11052811, 11050000, 10000, 0, false);
        } else {
            PlayCutsceneToPlayer(11050010, CutscenePlayMode.Skippable, 10000);
        }
        WaitFixedTimeRealFrames(1);
        SetNetworkconnectedEventFlagID(11050801, ON);
        if (!PlayerIsInOwnWorld()) {
            SetBossBGM(472000, BossBGMState.Stop2);
        }
        if (PlayerIsInOwnWorld()) {
            SetCameraAngle(7.5, -37.16);
        }
        DisableAsset(11051820);
        EnableCharacter(11050801);
        EnableCharacterCollision(11050801);
        WarpCharacterAndCopyFloor(11050801, TargetEntityType.Area, 11052815, -1, 11050801);
        ForceAnimationPlayback(11050801, 20020, false, false, false);
    } else {
L1:
        DisableAsset(11051820);
        WaitFor(EventFlag(11052805) && InArea(10000, 11052800));
    }
L2:
    EnableCharacterCollision(11050801);
    EnableCharacterAI(11050801);
    SetNetworkUpdateRate(11050801, true, CharacterUpdateFrequency.AlwaysUpdate);
    CreateReferredDamagePair(11050801, 11050800);
    DisableCharacterHPBarDisplay(11050801);
    DisplayBossHealthBar(Enabled, 11050800, 0, 904720000);
});

$Event(11052811, Restart, function() {
    EndIf(EventFlag(11050800));
    WaitFor(CharacterHPValue(11050801) <= 1);
    DisableCharacterCollision(11050801);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(11050020, CutscenePlayMode.Skippable, 11052816, 11050000, 10000, 0, false);
    } else {
        PlayCutsceneToPlayer(11050020, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(11052802, ON);
    DisableCharacter(11050801);
    if (PlayerIsInOwnWorld()) {
        SetCameraAngle(8.09, -37.16);
    }
    EnableCharacter(11050800);
    WaitFixedTimeFrames(1);
    EnableCharacterGravity(11050800);
    WarpCharacterAndCopyFloor(11050800, TargetEntityType.Area, 11052815, -1, 11050800);
    WaitFixedTimeFrames(1);
    EnableCharacterCollision(11050800);
    ForceAnimationPlayback(11050800, 20020, false, false, false);
    EnableCharacterAI(11050800);
    DisplayBossHealthBar(Enabled, 11050800, 0, 904720001);
});

$Event(11052830, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(11050800));
    WaitFor(
        (PlayerIsInOwnWorld() && EventFlag(11052805) && !EventFlag(11050800))
            || (!PlayerIsInOwnWorld() && EventFlag(11052806) && !EventFlag(11050800)));
    ChangeCamera(4721, 4721);
    WaitFor(CharacterHasSpEffect(11050800, 12298) && !EventFlag(11050800));
    ChangeCamera(4725, 4725);
    WaitFor(!(CharacterHasSpEffect(11050800, 12298) && !EventFlag(11050800)));
    RestartEvent();
});

$Event(11052849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 11050800, 11051800, 11052800, 11052805, 11055800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 11050800, 11051800, 11052800, 11052805, 11052806, 10000);
    InitializeCommonEvent(0, 9005811, 11050800, 11051800, 17, 0);
    InitializeCommonEvent(0, 9005813, 11050800, 11051801, 18, 11050801, 18);
    InitializeCommonEvent(0, 9005822, 11050800, 472000, 11052805, 11052806, 11050801, 11052802, 1, 1);
});

$Event(11053710, Restart, function(X0_4) {
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedThisEventSlot(OFF);
    }
    WaitFor(ThisEventSlot());
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedThisEventSlot(ON);
        SetNetworkconnectedEventFlagID(11050854, ON);
    }
L0:
    SetCharacterTeamType(X0_4, TeamType.Enemy);
});

$Event(11053720, Restart, function() {
    SetEventFlagID(11059350, OFF);
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3631));
    EndIf(EventFlag(11050800));
    EndIf(!EventFlag(35000500));
    EndIf(EventFlag(3621));
    EndIf(EventFlag(1049539212));
    EndIf(EventFlag(116));
    SetEventFlagID(11059350, ON);
    EndEvent();
});

//gideon
$Event(11052850, Restart, function() {
    EndIf(EventFlag(11050850));
    WaitFor(CharacterHPValue(11050850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(11058050, SoundType.SFX, 888880000);
    SetSpEffect(20000, 1899);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(11050850) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(11050850));
    HandleBossDefeatAndDisplayBanner(11050850, TextBannerType.GreatEnemyFelled);
    DisableCharacterDefaultBackread(11050850);
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, -11100);
});

$Event(11052860, Restart, function() {
    if (EventFlag(11050850)) {
        DisableCharacter(11055850);
        DisableCharacterCollision(11055850);
        ForceCharacterDeath(11055850, false);
        EndEvent();
    }
L0:
    DisableCharacter(11055851);
    DisableCharacterCollision(11055851);
    DisableCharacterAI(11055850);
    EnableCharacterDefaultBackread(11050850);
    //set gideon's moveset randomly
    BatchSetEventFlags(1049300044,1049300050, OFF);
    RandomlySetEventFlagInRange(1049300044,1049300050, ON);
    GotoIf(L8, EventFlag(1049300044));
    GotoIf(L7, EventFlag(1049300045));
    GotoIf(L6, EventFlag(1049300046));
    GotoIf(L5, EventFlag(1049300047));
    GotoIf(L4, EventFlag(1049300048));
    GotoIf(L3, EventFlag(1049300049));
    GotoIf(L2, EventFlag(1049300050));
    Goto(L1);
L2:
    CopyPlayerCharacterData(11050851, 11050850);
    Goto(L1);
L3:
    CopyPlayerCharacterData(11050852, 11050850);
    Goto(L1);
L4:
    CopyPlayerCharacterData(11050853, 11050850);
    Goto(L1);
L5:
    CopyPlayerCharacterData(11050854, 11050850);
    Goto(L1);
L6:
    CopyPlayerCharacterData(11050855, 11050850);
    Goto(L1);
L7:
    CopyPlayerCharacterData(11050856, 11050850);
    Goto(L1);
L8:
    CopyPlayerCharacterData(11050857, 11050850);
    Goto(L1);
L1:
    if (!EventFlag(11050851)) {
        ForceAnimationPlayback(11050850, 90102, true, false, false);
        if (PlayerIsInOwnWorld()) {
            SetEventFlagID(11050854, OFF);
        }
        WaitFor(
            (PlayerIsInOwnWorld() && CharacterHasSpEffect(11050850, 9770))
                || HasDamageType(11050850, 0, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(11050851, ON);
        SetSpEffect(11050850, 9644);
    } else {
L1_:
        cond = EventFlag(11052855);
        WaitFor(InArea(10000, 11052850) || InArea(10000, 11052855));
        WaitFor(cond);
    }
L10:
    SetCharacterTeamType(11050850, TeamType.Enemy);
    EnableCharacterAI(11050850);
    SetNetworkUpdateRate(11055850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 11050850, 0, 132400);
});

$Event(11052861, Restart, function() {
    EndIf(EventFlag(11050850));
    WaitFor(HPRatio(11050850) <= 0.6);
    SetEventFlagID(11052852, ON);
});

$Event(11052859, Restart, function() {
    InitializeCommonEvent(0, 9005800, 11050850, 11051850, 11052850, 11052855, 11055850, 10000, 11050851, 0);
    if (!EventFlag(11050851)) {
        InitializeCommonEvent(0, 9005800, 11050850, 11051851, 11052855, 11052855, 11055850, 10000, 6000, 0);
    } else {
        InitializeCommonEvent(0, 9005800, 11050850, 11051851, 11052855, 11052855, 11055850, 10000, 11050851, 0);
    }
    InitializeCommonEvent(0, 9005801, 11050850, 11051850, 11052850, 11052855, 11052856, 10000);
    InitializeCommonEvent(0, 9005801, 11050850, 11051851, 11052855, 11052855, 11052856, 10000);
    InitializeCommonEvent(0, 9005811, 11050850, 11051850, 5, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051851, 4, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051852, 4, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051853, 8, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051854, 4, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051855, 5, 11050854);
    InitializeCommonEvent(0, 9005811, 11050850, 11051856, 5, 11050854);
    InitializeCommonEvent(0, 9005822, 11050850, 921100, 11052855, 11052856, 0, 11052852, 0, 0);
});
