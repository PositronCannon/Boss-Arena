// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1039522650, 0);
    InitializeEvent(0, 1039522660, 0);
    InitializeEvent(0, 1039522700, 0);
    InitializeCommonEvent(0, 90005790, 0, 1039520180, 1039522181, 1039522182, 1039520710, 21, 1039522180, 1039522181, 0, 1039529206, 0, 0);
    InitializeCommonEvent(0, 90005791, 1039520180, 1039522181, 1039522182, 1039520710);
    InitializeCommonEvent(0, 90005792, 1039520180, 1039522181, 1039522182, 1039520710, 101620, 0);
    InitializeCommonEvent(0, 90005793, 1039520180, 1039522181, 1039522182, 1039520710, 1039522180, 1039522182, 0);
    InitializeCommonEvent(0, 90005631, 1039521400, 61031);
    InitializeCommonEvent(0, 90005300, 1039520500, 1039520500, 40306, 0, 0);
    InitializeEvent(0, 1039523700, 1039520701);
    InitializeEvent(0, 1039523701, 1039520701);
    InitializeEvent(0, 1039523703, 1039521700, 1039521701, 1039521702);
    InitializeEvent(0, 1039523702, 1039529206);
    InitializeEvent(0, 1039523704, 1039520701);
    InitializeCommonEvent(0, 90005750, 1039521703, 4350, 101630, 400163, 400163, 1039529205, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039520701, true);
    SetCharacterBackreadState(1039520710, true);
    InitializeCommonEvent(0, 90005251, 1039520500, 1103626240, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039520500, 30001, 20004, 1103626240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039520300, 30003, 20003, 1087373312, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039520301, 30003, 20003, 1087373312, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039520302, 30003, 20003, 1087373312, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1039520303, 30003, 20003, 1087373312, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1039520350, 1125515264, 0, 0);
    InitializeEvent(0, 1039522220, 1039520360);
    InitializeCommonEvent(0, 90005423, 1039520360);
    InitializeEvent(1, 1039522220, 1039520361);
    InitializeCommonEvent(0, 90005423, 1039520361);
    InitializeCommonEvent(0, 90005200, 1039520400, 30000, 20000, 1039522400, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1039522400, 0);
    InitializeCommonEvent(0, 90005300, 1039520400, 1039520400, 0, 0, 0);
});

$Event(1039522220, Restart, function(X0_4) {
    SetSpEffect(X0_4, 5551);
    EndEvent();
});

$Event(1039522400, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(3630) || (EventFlag(3631) && !EventFlag(1039520180)));
        SetNetworkconnectedThisEventSlot(ON);
    }
L0:
    DisableCharacter(1039520400);
    DisableCharacterCollision(1039520400);
    EndEvent();
});

$Event(1039522650, Restart, function() {
    if (!EventFlag(1039520655)) {
        DisableAsset(1039521650);
        DeleteMapSFX(1039522650, false);
        WaitFor(EventFlag(1039530505));
        EnableAsset(1039521650);
        SpawnMapSFX(1039522650);
        EndEvent();
    }
L0:
    DisableAsset(1039521650);
    DeleteMapSFX(1039522650, false);
    EndEvent();
});

$Event(1039522660, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1039520655));
    WaitFor(
        EventFlag(1039530505) && InArea(10000, 1039522651) && ActionButtonInArea(9521, 1039521650));
    SetNetworkconnectedEventFlagID(1039520655, ON);
    DisableAsset(1039521650);
    RotateCharacter(10000, 1039521650, -1, true);
    ForceAnimationPlayback(10000, 60010, false, false, false);
    WaitFixedTimeSeconds(1);
    PlaySE(1039522650, SoundType.SFX, 806855);
    DeleteMapSFX(1039522650, true);
    EndEvent();
});

$Event(1039522700, Restart, function() {
    flag = EventFlag(1039520655);
    if (flag) {
        if (EventFlag(1039520502)) {
            ForceCharacterDeath(1039520600, false);
            ForceCharacterDeath(1039520601, false);
        }
        if (!EventFlag(1039520502)) {
            SetEventFlagID(1039520502, ON);
            ForceCharacterDeath(1039520600, true);
            ForceCharacterDeath(1039520601, true);
        }
        EndIf(flag);
    }
L0:
    DisableGenerator(1039523200);
    if (!EventFlag(1039522701)) {
        DisableGenerator(1039523200);
        WaitFor(EventFlag(1039530505) && InArea(10000, 1039522260));
        EnableGenerator(1039523200);
        ClearCharactersAITarget(1039520600);
        InvokeEnemyGenerator(1039523200);
        WaitRandomTimeSeconds(5, 5);
        ClearCharactersAITarget(1039520601);
        InvokeEnemyGenerator(1039523200);
    }
L1:
    if (CharacterDead(1039520600)) {
        WaitRandomTimeSeconds(5, 5);
        EnableGenerator(1039523200);
        ClearCharactersAITarget(1039520600);
    }
    InvokeEnemyGenerator(1039523200);
    if (CharacterDead(1039520601)) {
        WaitRandomTimeSeconds(5, 5);
        EnableGenerator(1039523200);
        ClearCharactersAITarget(1039520601);
    }
    InvokeEnemyGenerator(1039523200);
    if (EventFlag(1039520655)) {
        WaitFixedTimeSeconds(5);
    }
    DisableGenerator(1039523200);
    SetEventFlagID(1039522701, ON);
    RestartEvent();
});

$Event(1039523700, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620)) {
            SetEventFlagID(1043379255, OFF);
        }
    }
L10:
    if (!EventFlag(3630)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3630));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3620));
    GotoIf(L2, EventFlag(3621));
    GotoIf(L3, EventFlag(3622));
    GotoIf(L4, EventFlag(3623));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
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
    if (!EventFlag(1039529205)) {
        ForceCharacterTreasure(X0_4);
    }
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3630));
    RestartEvent();
});

$Event(1039523701, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    WarpAssetToCharacter(1039521703, X0_4, -1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3620));
    EndIf(EventFlag(3631));
    WaitFor(EventFlag(1039529205) || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    SetEventFlagID(1039529209, ON);
    DisableCharacterCollision(X0_4);
    GotoIf(S0, !EventFlag(1039529205));
    ForceAnimationPlayback(X0_4, 90201, false, false, false);
    EndEvent();
    SetEventFlagID(1039529207, ON);
S0:
    EndEvent();
});

$Event(1039523702, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1039520180));
    if (EventFlag(1039529205)) {
        SetEventFlagID(X0_4, ON);
        EndEvent();
    }
    if (EventFlag(1039529207)) {
        SetEventFlagID(X0_4, ON);
        EndEvent();
    }
    WaitFor(EventFlag(1039529209) || EventFlag(3631));
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(1039523703, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(1039529208)) {
        DisableAsset(X0_4);
        DisableAsset(X4_4);
        DisableAsset(X8_4);
        WaitFixedTimeFrames(1);
        EndIf(!EventFlag(3630));
        SetNetworkconnectedEventFlagID(1039529208, ON);
    }
L1:
    EnableAsset(X0_4);
    EnableAsset(X4_4);
    EnableAsset(X8_4);
    EndEvent();
});

$Event(1039523704, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043359259));
    EndIf(EventFlag(1044389209));
    EndIf(EventFlag(1035469209));
    if (!EventFlag(1039529209)) {
        WaitFor(EventFlag(1039529209));
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3623, ON);
        SaveRequest();
        EndEvent();
    }
L1:
    EndIf(EventFlag(1039529205));
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(3630));
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});
