// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000"
// @linked    [0,72,154,238]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1044380000, 1044381950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005460, 1044380200);
    InitializeCommonEvent(0, 90005461, 1044380200);
    InitializeCommonEvent(0, 90005462, 1044380200);
    InitializeCommonEvent(0, 90005300, 1044380210, 1044380210, 40142, 0, 0);
    InitializeCommonEvent(0, 90005632, 580000, 1044381600, 80000);
    InitializeEvent(0, 1044382220, 0);
    InitializeCommonEvent(0, 90005704, 1044380710, 3621, 3620, 1043379251, 3);
    InitializeCommonEvent(0, 90005703, 1044380710, 3621, 3622, 1043379251, 3621, 3620, 3624, -1);
    InitializeCommonEvent(0, 90005702, 1044380710, 1044389209, 1044389209, 1044389209);
    InitializeEvent(0, 1044383720, 1044380710);
    InitializeEvent(0, 1044383721, 1044380710);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1044380700, true);
    SetCharacterBackreadState(1044380701, true);
    SetCharacterBackreadState(1044380702, true);
    SetCharacterBackreadState(1044380710, true);
    InitializeCommonEvent(0, 90005251, 1044380340, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005250, 1044380200, 1044382200, 1065353216, 1700);
    InitializeCommonEvent(0, 90005250, 1044380201, 1044382200, 1050253722, 1700);
    InitializeCommonEvent(0, 90005250, 1044380202, 1044382200, 0, 1700);
    InitializeCommonEvent(0, 90005250, 1044380203, 1044382200, 0, 1700);
    InitializeCommonEvent(0, 90005250, 1044380204, 1044382200, 1056964608, 1700);
});

$Event(1044382220, Restart, function() {
    if (!EventFlag(3625) && EventFlag(1044380220)) {
        EnableCharacter(1044385220);
        EnableCharacterCollision(1044385220);
        EndEvent();
    }
    WaitFor(EventFlag(3625));
    DisableCharacter(1044385220);
    DisableCharacterCollision(1044385220);
    SetEventFlagID(1044380220, ON);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1044382600, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    CreateAssetfollowingSFX(X0_4, 200, 806840);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9310, X0_4));
    DeleteAssetfollowingSFX(X0_4, true);
    PlaySE(X0_4, SoundType.SFX, 806841);
    WaitFixedTimeSeconds(0.1);
    AwardItemLot(X4_4);
    SetEventFlagID(X8_4, ON);
});

$Event(1044383720, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620)) {
            SetEventFlagID(1043379255, OFF);
        }
        SetEventFlagID(1043369200, OFF);
    }
L10:
    if (!((!EventFlag(1043372717) || EventFlag(1043372718))
        && (!EventFlag(1043369200) || EventFlag(1043360800))
        && EventFlag(3625))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(
            (!EventFlag(1043372717) || EventFlag(1043372718))
                && (!EventFlag(1043369200) || EventFlag(1043360800))
                && EventFlag(3625));
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
    WaitFor(
        !((!EventFlag(1043372717) || EventFlag(1043372718))
            && (!EventFlag(1043369200) || EventFlag(1043360800))
            && EventFlag(3625)));
    RestartEvent();
});

$Event(1044383721, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043359259));
    EndIf(EventFlag(1035469209));
    EndIf(EventFlag(1039529209));
    if (!EventFlag(1044389209)) {
        WaitFor(EventFlag(1044389209));
        BatchSetNetworkconnectedEventFlags(3620, 3624, OFF);
        SetNetworkconnectedEventFlagID(3623, ON);
        SaveRequest();
        EndEvent();
    }
L1:
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(3625));
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});
