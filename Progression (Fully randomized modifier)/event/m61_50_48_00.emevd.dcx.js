// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2050480000, 2050481950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 9005810, 2050480800, 2050480001, 2050480951, 2050481951, 1084227584);
    InitializeEvent(0, 2050480800, 0);
    InitializeEvent(0, 2050482810, 0);
    InitializeEvent(0, 2050482811, 0);
    InitializeEvent(0, 2050482812, 0);
    InitializeEvent(0, 2050482815, 2050480801);
    InitializeEvent(1, 2050482815, 2050480802);
    InitializeEvent(0, 2050482820, 0);
    InitializeEvent(0, 2050482821, 0);
    InitializeEvent(0, 2050482825, 2050480800, 2050480810);
    InitializeEvent(1, 2050482825, 2050480801, 2050480811);
    InitializeEvent(2, 2050482825, 2050480802, 2050480812);
    InitializeEvent(0, 2050482830, 2050480800, 2050480810);
    InitializeEvent(1, 2050482830, 2050480801, 2050480811);
    InitializeEvent(2, 2050482830, 2050480802, 2050480812);
    InitializeEvent(0, 2050482849, 0);
    InitializeEvent(0, 2050482500, 2050486500);
    InitializeEvent(0, 2050482501, 0);
    InitializeEvent(0, 2050482505, 0);
    InitializeEvent(0, 2050482506, 0);
});

$Event(2050482500, Restart, function(X0_4) {
    if (EventFlag(2050480800)) {
        ForceAnimationPlayback(X0_4, 2, false, false, false);
        EndEvent();
    }
    WaitFor(EventFlag(2050480800));
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    EndEvent();
});

$Event(2050482501, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(2050480800));
    if (PlayerIsInOwnWorld()) {
        WaitFor(EventFlag(2050482805));
        WaitFixedTimeSeconds(2);
        ChangeCamera(5232, 5230);
    } else {
L0:
        WaitFor(EventFlag(2050482806));
        ChangeCamera(5232, 5230);
    }
L1:
    WaitFor(EventFlag(2050480800));
    ChangeCamera(-1, -1);
});

$Event(2050482505, Default, function() {
    EndIf(EventFlag(2050480801));
    SetSpEffect(2050480104, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 2050480801);
    SetSpEffect(2050480104, 9532);
});

$Event(2050482506, Default, function() {
    EndIf(EventFlag(2050480800));
    SetCharacterTalkRange(2050480104, 210);
});

$Event(2050480800, Default, function() {
    if (EventFlag(2050480800)) {
        EndIf(!PlayerIsInOwnWorld());
        GotoIf(L1, !EventFlag(126));
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(2050480800) <= 0);
    if (!CharacterHasSpEffect(2050480802, 20011445)) {
        ForceAnimationPlayback(2050480800, 20002, false, false, false);
    } else {
        ForceAnimationPlayback(2050480800, 20003, false, false, false);
    }
    WaitFixedTimeSeconds(1);
    PlaySE(2050480800, SoundType.SFX, 888880000);
    WaitFor(
        (PlayerIsInOwnWorld() && CharacterDead(2050480800) && !CharacterHasSpEffect(10000, 9646))
            || EventFlag(2050480800));
    HandleBossDefeatAndDisplayBanner(2050480800, TextBannerType.LegendFelled);
    //boss rewards (5 bonus items, DLC version)
    InitializeCommonEvent(0,90001045,1049304293,1049304154,1049304158,1049307258,1049307259,1049307260,1049307261,1049307262,1049307263,1049306472,1049306476,1049306478,1049306480,1049306485,1049306487,1049300293);
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
});

$Event(2050482810, Restart, function() {
    if (EventFlag(2050480800)) {
        DisableCharacter(2050485801);
        DisableCharacter(2050485811);
        DisableCharacterCollision(2050485801);
        DisableCharacterCollision(2050485811);
        ForceCharacterDeath(2050485801, false);
        ForceCharacterDeath(2050485811, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(2050485801);
    DisableCharacterAI(2050485811);
    DisableCharacterHPBarDisplay(2050485801);
    DisableCharacterHPBarDisplay(2050485811);
    DisableCharacterCollision(2050485801);
    DisableCharacterCollision(2050485811);
    if (!EventFlag(2050480801)) {
        ForceAnimationPlayback(2050480802, 30010, false, false, false);
        EnableCharacterCollision(2050480802);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 2050482801))
                || HasDamageType(2050482800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(2050480801, ON);
        ForceAnimationPlayback(2050480802, 20010, false, false, false);
        WaitFixedTimeSeconds(4);
    } else {
L1:
        WaitFor(EventFlag(2050482805) && InArea(10000, 2050482800));
    }
L2:
    EnableCharacterAI(2050480802);
    SetNetworkUpdateRate(2050480802, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterCollision(2050480802);
    CreateReferredDamagePair(2050480802, 2050480812);
    WaitFixedTimeSeconds(0.5);
    DisplayBossHealthBar(Enabled, 2050480812, 0, 905230001);
});

$Event(2050482811, Default, function() {
    EndIf(EventFlag(2050480800));
    WaitFor(CharacterHPValue(2050480812) <= 0);
    if (!CharacterHasSpEffect(2050480802, 20011445)) {
        ForceAnimationPlayback(2050480802, 20004, false, false, false);
    }
    CreateReferredDamagePair(2050480801, 2050480811);
    EnableCharacter(2050480801);
    SetNetworkUpdateRate(2050480801, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(CharacterDead(2050480802));
    SetEventFlagID(2050482802, ON);
    WaitFixedTimeSeconds(2);
    DisplayBossHealthBar(Disabled, 2050480812, 0, 905230001);
    WaitFixedTimeSeconds(3);
    EnableCharacter(2050480801);
    EnableCharacterCollision(2050480801);
    IssueShortWarpRequest(2050480801, TargetEntityType.Area, 2050482802, -1);
    EnableCharacterAI(2050480801);
    SetSpEffect(2050480801, 20011443);
    WaitFixedTimeSeconds(3.5);
    DisplayBossHealthBar(Enabled, 2050480811, 0, 905230002);
});

$Event(2050482812, Default, function() {
    EndIf(EventFlag(2050480800));
    WaitFor(CharacterHPValue(2050480811) <= 0);
    if (!CharacterHasSpEffect(2050480801, 20011445)) {
        ForceAnimationPlayback(2050480801, 20004, false, false, false);
    }
    CreateReferredDamagePair(2050480800, 2050480810);
    EnableCharacter(2050480800);
    SetNetworkUpdateRate(2050480800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(CharacterDead(2050480801));
    SetEventFlagID(2050482803, ON);
    WaitFixedTimeSeconds(2);
    DisplayBossHealthBar(Disabled, 2050480811, 0, 905230002);
    WaitFixedTimeSeconds(3);
    EnableCharacter(2050480800);
    EnableCharacterCollision(2050480800);
    IssueShortWarpRequest(2050480800, TargetEntityType.Area, 2050482802, -1);
    EnableCharacterAI(2050480800);
    SetSpEffect(2050480800, 20011443);
    WaitFixedTimeSeconds(3.5);
    DisplayBossHealthBar(Enabled, 2050480810, 0, 905230000);
});

$Event(2050482815, Restart, function(X0_4) {
    EndIf(EventFlag(2050480800));
    EnableCharacterImmortality(X0_4);
    WaitFor(CharacterHasSpEffect(X0_4, 20011445));
    DisableCharacterImmortality(X0_4);
    WaitFor(!CharacterHasSpEffect(X0_4, 20011445));
    RestartEvent();
});

$Event(2050482820, Restart, function() {
    EndIf(EventFlag(2050480800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        CharacterHasSpEffect(2050480802, 20011445) && CharacterHasSpEffect(2050480802, 20011448));
    SetSpEffect(2050480801, 4403);
    EndEvent();
});

$Event(2050482821, Restart, function() {
    EndIf(EventFlag(2050480800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        CharacterHasSpEffect(2050480801, 20011445) && CharacterHasSpEffect(2050480801, 20011448));
    SetSpEffect(2050480800, 4403);
    EndEvent();
});

$Event(2050482825, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(2050480800));
    WaitFor(CharacterHPValue(X0_4) == 0);
    ForceCharacterDeath(X4_4, false);
    EndEvent();
});

$Event(2050482830, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(2050480800));
    WaitFor(CharacterHPValue(X4_4) == 0);
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(2050482849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2050480800, 2050481800, 2050482800, 2050482805, 2050485800, 10000, 2050480801, 2050482801);
    InitializeCommonEvent(0, 9005801, 2050480800, 2050481800, 2050482800, 2050482805, 2050482806, 10000);
    InitializeCommonEvent(0, 9005811, 2050480800, 2050481800, 5, 2050480801);
    InitializeCommonEvent(0, 9005824, 2050480800, 523000, 2050482805, 2050482806, 0, 2050482802, 2050482803, 0, 0);
});



