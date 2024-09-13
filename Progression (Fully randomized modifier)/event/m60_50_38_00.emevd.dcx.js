// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1050380000, 1050381950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005200, 1050380200, 30000, 20000, 1050382200, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1050383700, 1050380700, 1050380702);
    InitializeCommonEvent(0, 90005702, 1050380700, 4163, 4160, 4163);
    InitializeCommonEvent(0, 90005702, 1050380702, 4163, 4160, 4163);
    InitializeEvent(0, 1050383701, 0);
    InitializeEvent(0, 1050383702, 0);
    InitializeEvent(0, 1050383703, 1050380701);
    InitializeEvent(0, 1050383704, 1050380700, 1050381702, 1050380702);
    InitializeCommonEvent(0, 90005750, 1050381703, 4110, 103120, 400312, 400312, 7611, 0);
    InitializeCommonEvent(0, 90005750, 1050381703, 4110, 103120, 400312, 400312, 1050389238, 0);
    InitializeEvent(0, 1050383710, 1050380705);
    InitializeCommonEvent(0, 90005704, 1050380705, 4181, 4180, 1050389251, 3);
    InitializeCommonEvent(0, 90005703, 1050380705, 4181, 4182, 1050389251, 1059481190, 4180, 4184, -1);
    InitializeCommonEvent(0, 90005702, 1050380705, 4183, 4180, 4184);
    InitializeEvent(0, 1050383711, 1050380710);
    InitializeCommonEvent(0, 90005704, 1050380710, 4181, 4180, 1050389251, 3);
    InitializeCommonEvent(0, 90005703, 1050380710, 4181, 4182, 1050389251, 1059481190, 4180, 4184, -1);
    InitializeCommonEvent(0, 90005702, 1050380710, 4183, 4180, 4184);
    InitializeEvent(0, 1050383712, 1050380706);
    InitializeCommonEvent(0, 90005704, 1050380706, 4181, 4180, 1050389261, 3);
    InitializeCommonEvent(0, 90005703, 1050380706, 4181, 4182, 1050389261, 1059481190, 4180, 4184, -1);
    InitializeCommonEvent(0, 90005702, 1050380706, 4183, 4180, 4184);
    InitializeEvent(0, 1050383713, 0);
    InitializeEvent(0, 1050383714, 0);
    InitializeCommonEvent(0, 90005752, 1050381700, 200, 120, 1077936128);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1050380700, true);
    SetCharacterBackreadState(1050380701, true);
    SetCharacterBackreadState(1050380702, true);
    SetCharacterBackreadState(1050380705, true);
    SetCharacterBackreadState(1050380706, true);
    DisableAsset(1050381700);
});

$Event(1050383700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!(EventFlag(4165)
        || EventFlag(4166)
        || EventFlag(4167)
        || EventFlag(4168)
        || EventFlag(4169)
        || EventFlag(4170)
        || EventFlag(4171))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableCharacter(X4_4);
        SetCharacterBackreadState(X4_4, true);
        DisableAsset(1050381702);
        flag = EventFlag(4165)
            || EventFlag(4166)
            || EventFlag(4167)
            || EventFlag(4168)
            || EventFlag(4169)
            || EventFlag(4170)
            || EventFlag(4171);
        WaitFor(cond);
        RestartEvent();
    }
L6:
    GotoIf(L3, EventFlag(4171));
    GotoIf(L1, EventFlag(4160));
    GotoIf(L2, EventFlag(4161));
    if (!EventFlag(4163)) {
L3:
        EnableAsset(1050381702);
        RequestAssetRestoration(1050381702);
        EnableAssetInvunerability(1050381702);
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        EnableCharacter(X4_4);
        SetCharacterBackreadState(X4_4, false);
        SetCharacterTeamType(X4_4, TeamType.Disabled);
        ForceAnimationPlayback(X4_4, 90102, false, false, false);
        Goto(L20);
L1:
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableCharacter(X4_4);
        SetCharacterBackreadState(X4_4, true);
        DisableAsset(1050381702);
        GotoIf(L20, !EventFlag(1050389266) && !EventFlag(4183) && EventFlag(4187));
        EnableAsset(1050381702);
        RequestAssetRestoration(1050381702);
        EnableAssetInvunerability(1050381702);
        if (AnyBatchEventFlags(4165, 4168)) {
            EnableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, false);
            ForceAnimationPlayback(X0_4, 90100, false, false, false);
        } else if (AnyBatchEventFlags(4169, 4170)) {
            EnableCharacter(X4_4);
            SetCharacterBackreadState(X4_4, false);
            ForceAnimationPlayback(X4_4, 90100, false, false, false);
        }
        if (EventFlag(4168) && !EventFlag(1050389230)) {
            ForceAnimationPlayback(X0_4, 90101, false, false, false);
        }
        if (AnyBatchEventFlags(4169, 4170)) {
            ForceAnimationPlayback(X4_4, 90101, false, false, false);
        }
        Goto(L20);
    }
L4:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X4_4);
    DisableAsset(1050381702);
    Goto(L20);
L20:
    WaitFor(
        !(EventFlag(4165)
            || EventFlag(4166)
            || EventFlag(4167)
            || EventFlag(4168)
            || EventFlag(4169)
            || EventFlag(4170)
            || EventFlag(4171)));
    RestartEvent();
});

$Event(1050383701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(4166) && EventFlag(1050389255));
    SetEventFlagID(4178, ON);
    EndEvent();
});

$Event(1050383702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (!(EventFlag(1050389228) && EventFlag(1050389217))) {
        WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 110850);
        SetNetworkconnectedEventFlagID(1050389228, ON);
    }
L20:
    EndEvent();
});

$Event(1050383703, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndIf(!PlayerIsInOwnWorld());
    hpDmgChr = (CharacterHPValue(1050380700) == 0 || HasDamageType(1050380700, 0, DamageType.Unspecified))
        && CharacterBackreadStatus(1050380700);
    WaitFor(
        hpDmgChr
            || ((CharacterHPValue(1050380702) == 0
                || HasDamageType(1050380702, 0, DamageType.Unspecified))
                && CharacterBackreadStatus(1050380702)));
    if (hpDmgChr.Passed) {
        ForceCharacterDeath(1050380700, true);
    } else {
        ForceCharacterDeath(1050380702, true);
    }
    WaitFixedTimeSeconds(5);
    if (!(EventFlag(4169) || EventFlag(4170))) {
L1:
        EnableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, false);
        IssueShortWarpRequest(X0_4, TargetEntityType.Character, 1050380700, 900);
        EnableCharacterCollision(X0_4);
        ForceAnimationPlayback(X0_4, 930010, false, false, false);
        BatchSetNetworkconnectedEventFlags(4160, 4163, OFF);
        SetNetworkconnectedEventFlagID(4163, ON);
        EndEvent();
    }
L2:
    BatchSetNetworkconnectedEventFlags(4160, 4163, OFF);
    SetNetworkconnectedEventFlagID(4163, ON);
    SetNetworkconnectedEventFlagID(1050389238, ON);
    EndEvent();
});

$Event(1050383704, Restart, function(X0_4, X4_4, X8_4) {
    EnableAssetInvunerability(X4_4);
    WaitFor(CharacterHPValue(X0_4) == 0 || CharacterHPValue(X8_4) == 0);
    DisableAssetInvunerability(X4_4);
    RequestAssetDestruction(X4_4, 0);
    EndEvent();
});

$Event(1050383710, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(4185)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(1050381700);
        WaitFor(EventFlag(4185));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    EnableAsset(1050381700);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableAsset(1050381700);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(1050381700);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4185));
    RestartEvent();
});

$Event(1050383711, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
    }
L19:
    if (!EventFlag(4186)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4186));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    DisableAsset(1050381700);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4186));
    RestartEvent();
});

$Event(1050383712, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
        SetNetworkconnectedEventFlagID(1050389265, OFF);
        SetNetworkconnectedEventFlagID(1038519255, OFF);
        SetNetworkconnectedEventFlagID(4197, OFF);
    }
L19:
    GotoIf(L6, EventFlag(4187) && !EventFlag(1050389266));
    GotoIf(S0, PlayerIsInOwnWorld());
    GotoIf(L6, EventFlag(4187) && !EventFlag(4197));
S0:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(EventFlag(4187) && !EventFlag(1050389266));
    RestartEvent();
L6:
    SetNetworkconnectedEventFlagID(1050389265, ON);
    SetNetworkconnectedEventFlagID(1038519255, OFF);
    SetNetworkconnectedEventFlagID(4197, OFF);
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4187));
    RestartEvent();
});

$Event(1050383713, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4185));
    WaitFor(!EventFlag(1050389255));
    WaitFor(EventFlag(1050382716));
    WaitFixedTimeFrames(2);
    PlayCutsceneToPlayer(60500000, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(1050382717, ON);
    ForceAnimationPlayback(1050380705, 90102, false, false, false);
    WaitFixedTimeRealFrames(1);
    EndEvent();
});

$Event(1050383714, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetCharacterTalkRange(1050380705, 17);
    EndIf(EventFlag(1050389255));
    SetCharacterTalkRange(1050380705, 50);
    WaitFor(!EventFlag(1050389255) && !EventFlag(1050382713) && InArea(10000, 1050382710));
    SetNetworkconnectedEventFlagID(1050382713, ON);
    EndEvent();
});
