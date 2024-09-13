// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1044523701, 1044520700);
    InitializeEvent(0, 1044523702, 1044520701, 1044521702, 1044521703);
    InitializeEvent(0, 1044523703, 1044521705, 1044521706);
    InitializeEvent(0, 1044523704, 1044520701);
    InitializeEvent(0, 1044523705, 0);
    InitializeEvent(0, 1044523706, 0);
    InitializeEvent(0, 1044523707, 1044521700, 1044521701);
    InitializeCommonEvent(0, 90005704, 1044520700, 4141, 4140, 1044529251, 3);
    InitializeCommonEvent(0, 90005703, 1044520700, 4141, 4142, 1044529251, 4141, 4140, 4144, -1);
    InitializeCommonEvent(0, 90005702, 1044520700, 4143, 4140, 4144);
    InitializeCommonEvent(0, 90005702, 1044520701, 4143, 4140, 4144);
    InitializeCommonEvent(0, 90005750, 1044521704, 4350, 113010, 400308, 400309, 1044529272, 6101);
    InitializeEvent(0, 1044523710, 0);
    InitializeEvent(0, 1044523711, 0);
    InitializeEvent(0, 1044523712, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1044523700, 1044521700);
    SetCharacterBackreadState(1044520700, true);
    SetCharacterBackreadState(1044520701, true);
    InitializeCommonEvent(0, 90005201, 1044520300, 30014, 20014, 1097859072, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044520301, 30016, 20016, 1101004800, 0, 0, 0, 0, 0);
});

$Event(1044523700, Default, function(X0_4) {
    EndIf(!EntityInRadiusOfEntity(X0_4, 10000, 5, 1));
    EndIf(!EventFlag(4145));
    SetEventFlagID(1044522701, ON);
    EndEvent();
});

$Event(1044523701, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4140)) {
            SetEventFlagID(1036439203, OFF);
        }
    }
L10:
    if (!EventFlag(4146)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(4146));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(4140));
    GotoIf(L2, EventFlag(4141));
    GotoIf(L3, EventFlag(4142));
    GotoIf(L4, EventFlag(4143));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
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
    WaitFor(!EventFlag(4146));
    RestartEvent();
});

$Event(1044523702, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4140)) {
            SetEventFlagID(1036439203, OFF);
        }
    }
L10:
    if (!EventFlag(4147)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        DisableAsset(X8_4);
        WaitFor(EventFlag(4147));
        RestartEvent();
    }
L5:
    EnableAsset(X4_4);
    EnableAsset(X8_4);
    GotoIf(L1, EventFlag(4140));
    GotoIf(L2, EventFlag(4141));
    GotoIf(L3, EventFlag(4142));
    GotoIf(L4, EventFlag(4143));
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
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90102, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4147));
    RestartEvent();
});

$Event(1044523703, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableAsset(X0_4);
    DisableAsset(X4_4);
    EndIf(!EventFlag(35009315));
    EndIf(!(EventFlag(4145) || (EventFlag(4146) && EventFlag(4143))));
    EnableAsset(X0_4);
    EnableAsset(X4_4);
    EndEvent();
});

$Event(1044523704, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4143));
    EndIf(!EventFlag(4147));
    WaitFor(EventFlag(1044529271));
    BatchSetNetworkconnectedEventFlags(4140, 4144, OFF);
    SetNetworkconnectedEventFlagID(4143, ON);
    SaveRequest();
    WaitFixedTimeRealFrames(2);
    ForceAnimationPlayback(X0_4, 90201, false, false, false);
    EndEvent();
});

$Event(1044523705, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4145));
    EndIf(EventFlag(1044529255));
    SetEventFlagID(1044529255, ON);
    EndEvent();
});

$Event(1044523706, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4147));
    EndIf(EventFlag(1044529272));
    if (!EventFlag(4143)) {
        WaitFor(EventFlag(4143));
        WaitFixedTimeSeconds(1.5);
    }
L1:
    SetEventFlagID(1044529272, ON);
    EndEvent();
});

$Event(1044523707, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (!EventFlag(4146)) {
        if (!EventFlag(4147)) {
            DisableAsset(X0_4);
            DisableAsset(X4_4);
            DeleteAssetfollowingSFX(X4_4, true);
            WaitFor(EventFlag(4146) || EventFlag(4147));
            RestartEvent();
        }
    }
L5:
    EnableAsset(X0_4);
    EnableAsset(X4_4);
    DeleteAssetfollowingSFX(X4_4, true);
    if (!EventFlag(4143)) {
        if (!EventFlag(4147)) {
            CreateAssetfollowingSFX(X4_4, 90, 800291);
            Goto(L20);
        }
    }
L20:
    WaitFor(!(EventFlag(4146) || EventFlag(4147)));
    RestartEvent();
});

$Event(1044523710, Restart, function() {
    EndIf(!EventFlag(4240));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1045522181);
    WarpCharacterAndSetFloor(1045520705, TargetEntityType.Area, 1044522700, -1, 0);
    ForceAnimationPlayback(1045520705, 63010, false, false, false);
    EndEvent();
});

$Event(1044523711, Restart, function() {
    DisableAsset(1045521705);
    DisableAsset(1045521706);
    EndIf(!EventFlag(4240));
    EndIf(!EventFlag(4247));
    EndIf(AnyBatchEventFlags(4146, 4147));
    EnableAsset(1045521705);
    EnableAsset(1045521706);
    EnableAssetInvunerability(1045521705);
    EnableAssetInvunerability(1045521706);
    ReproduceAssetAnimation(1045521705, 201091);
    EndEvent();
});

$Event(1044523712, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(35009315, OFF);
    EndIf(!EventFlag(4240));
    GotoIf(L19, !EventFlag(4247));
    GotoIf(L20, !EventFlag(4140));
    GotoIf(L20, EventFlag(4145));
    EndIf(EventFlag(4146));
    WaitFor(EventFlag(4147) && !EventFlag(4140));
    Goto(L20);
L19:
    WaitFor(EventFlag(4240) && EventFlag(4247));
    RestartEvent();
L20:
    SetNetworkconnectedEventFlagID(35009315, ON);
    EndEvent();
});
