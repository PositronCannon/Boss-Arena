// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90001001, 0);
    InitializeCommonEvent(0, 90005600, 76355, 1035531950, 1084227584, 0);
    InitializeEvent(0, 1035532200, 1035535200, 1035532200);
    InitializeEvent(0, 1035532210, 0);
    InitializeCommonEvent(0, 90005251, 1035530250, 1092616192, 1045220557, -1);
    InitializeCommonEvent(1, 90005251, 1035530251, 1092616192, 1050253722, -1);
    InitializeCommonEvent(2, 90005251, 1035530252, 1092616192, 1050253722, -1);
    InitializeCommonEvent(3, 90005251, 1035530253, 1092616192, 1053609165, -1);
    InitializeCommonEvent(4, 90005251, 1035530254, 1092616192, 1053609165, -1);
    InitializeCommonEvent(0, 90005261, 1035530230, 1035532230, 1106247680, 0, -1);
    InitializeCommonEvent(0, 90005261, 1035530231, 1035532230, 1106247680, 0, -1);
    InitializeCommonEvent(0, 90005261, 1035530400, 1035532400, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005200, 1035530800, 30001, 20001, 1035532346, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1035530800, 1035532346, 1056964608, 3004);
    InitializeEvent(0, 1035532300, 0);
    InitializeCommonEvent(0, 90005870, 1035530800, 904910600, 5);
    InitializeCommonEvent(0, 90005861, 1035530800, 1035530800, 1035530800, 1, 30390, 30062, 0);
    InitializeEvent(0, 1035532500, 0);
    InitializeEvent(0, 1035532450, 1035531400);
    InitializeEvent(1, 1035532450, 1035531401);
    InitializeEvent(2, 1035532450, 1035531402);
    InitializeCommonEvent(0, 90005704, 1035530700, 3661, 3660, 1043399301, 3);
    InitializeCommonEvent(0, 90005703, 1035530700, 3661, 3662, 1043399301, 3661, 3660, 3663, -1);
    InitializeCommonEvent(0, 90005702, 1035530700, 3663, 3660, 3663);
    InitializeEvent(0, 1035533700, 1035530700);
    InitializeEvent(0, 1035533701, 0);
    InitializeCommonEvent(0, 90005730, 1035532702, 1109393408, 1035539206, 1051369265, 1035539205, 1035539205);
});

$Event(1035532200, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5658);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(1050562200));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 5658);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || CharacterHasStateInfo(X0_4, 436)
                || CharacterHasStateInfo(X0_4, 2)
                || CharacterHasStateInfo(X0_4, 5)
                || CharacterHasStateInfo(X0_4, 6)
                || CharacterHasStateInfo(X0_4, 260)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(1050562200, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5658);
});

$Event(1035532210, Default, function() {
    SetSpEffect(1035530210, 8092);
    SetSpEffect(1035530211, 8092);
});

$Event(1035532300, Restart, function() {
    WaitFor(CharacterAIState(1035530800, AIStateType.Combat));
    ForceAnimationPlayback(1035530800, 3004, false, false, true);
    EndEvent();
});

$Event(1035532340, Restart, function(X0_4, X4_4, X8_4) {
    if (EventFlag(1035530340)) {
        EndEvent();
    }
    flag = !EventFlag(1035530340);
    ForceAnimationPlayback(X0_4, 30001, true, false, false);
    WaitFor(!EventFlag(1035530340) && InArea(10000, X4_4) && PlayerIsInOwnWorld());
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20002, true, false, false);
    SetNetworkconnectedEventFlagID(1035530340, ON);
    EndEvent();
});

$Event(1035532450, Restart, function(X0_4) {
    DisableAsset(X0_4);
    EndEvent();
});

$Event(1035532500, Default, function() {
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003270, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003260, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003250, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003240, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003230, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003220, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003210, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003200, 1065353216, 0, 1065353216);
    }
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003270, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003260, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003250, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003240, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003230, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003220, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003210, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003200, 1065353216, 0, 1065353216);
    }
    if (EventFlag(57)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003270, 1065353216, 0, 1065353216);
    }
    if (EventFlag(56)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003260, 1065353216, 0, 1065353216);
    }
    if (EventFlag(55)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003250, 1065353216, 0, 1065353216);
    }
    if (EventFlag(54)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003240, 1065353216, 0, 1065353216);
    }
    if (EventFlag(53)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003230, 1065353216, 0, 1065353216);
    }
    if (EventFlag(52)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003220, 1065353216, 0, 1065353216);
    }
    if (EventFlag(51)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003210, 1065353216, 0, 1065353216);
    }
    if (EventFlag(50)) {
        InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003200, 1065353216, 0, 1065353216);
    }
});

$Event(1035533700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3660)) {
            SetEventFlagID(1043399303, OFF);
        }
    }
L19:
    if (!(EventFlag(3669) || EventFlag(3670))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3669) || EventFlag(3670));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3660));
    GotoIf(L2, EventFlag(3661));
    GotoIf(L4, EventFlag(3663));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 930020, false, false, false);
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
    WaitFor(!EventFlag(3669) && !EventFlag(3670));
    RestartEvent();
});

$Event(1035533701, Restart, function() {
    EndIf(!EventFlag(3669) && !EventFlag(3670));
    area = EntityInRadiusOfEntity(10000, 1035530700, 90, 1);
    SetNetworkconnectedEventFlagID(1035539204, ON);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1035530800);
    if (!EventFlag(1035539207)) {
        SetNetworkconnectedEventFlagID(1035539207, ON);
        WaitFixedTimeSeconds(20);
    }
    WaitFor(EntityInRadiusOfEntity(10000, 1035530700, 90, 1));
    SetNetworkconnectedEventFlagID(1035539206, ON);
    WaitFor(!EntityInRadiusOfEntity(10000, 1035530700, 90, 1));
    SetNetworkconnectedEventFlagID(1035539206, OFF);
    RestartEvent();
});


