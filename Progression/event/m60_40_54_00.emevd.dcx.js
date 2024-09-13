// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005600, 76307, 1040541950, 1084227584, 0);
    InitializeCommonEvent(0, 90005100, 71602, 76307, 1040541980, 77350, 0, 78350, 78351, 78352, 78353, 78354, 78355, 78356, 78357, 78358, 78359);
    InitializeCommonEvent(0, 90005300, 1040540500, 1040540500, 40312, 0, 0);
    InitializeEvent(0, 1040542700, 1040540705);
    InitializeCommonEvent(0, 90005704, 1040540705, 4201, 4200, 1040549201, 3);
    InitializeCommonEvent(0, 90005703, 1040540705, 4201, 4202, 1040549201, 4201, 4200, 4204, -1);
    InitializeCommonEvent(0, 90005702, 1040540705, 4203, 4200, 4204);
    InitializeEvent(0, 1040542705, 1040540700);
    InitializeEvent(0, 1040542706, 1040540700);
    InitializeCommonEvent(0, 90005706, 1040540710, 30023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1040540700, true);
    SetCharacterBackreadState(1040540705, true);
    SetCharacterBackreadState(1040540710, true);
    InitializeCommonEvent(0, 90005261, 1040540270, 1040542270, 1101004800, 0, 0);
    InitializeEvent(0, 1040542201, 1040540250, 1040543250);
    InitializeEvent(1, 1040542201, 1040540251, 1040543251);
    InitializeEvent(2, 1040542201, 1040540252, 1040543252);
    InitializeEvent(3, 1040542201, 1040540253, 1040543253);
    InitializeEvent(4, 1040542201, 1040540254, 1040543254);
    InitializeCommonEvent(0, 90005201, 1040540350, 30005, 20005, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 1040540340, 0, 0, -1);
    InitializeCommonEvent(0, 90005201, 1040540402, 30000, 20000, 1092616192, 0, 0, 0, 0, 0);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005424, 1040541300, 1040540302, 1040540303, 1040540300, 1040541301);
    InitializeEvent(0, 1040542301, 0);
    InitializeCommonEvent(0, 90005423, 1040540302);
    InitializeCommonEvent(0, 90005423, 1040540303);
    InitializeEvent(0, 1040542300, 0);
    InitializeEvent(0, 1040542210, 1040540330, 1040542330);
    InitializeEvent(1, 1040542210, 1040540310, 1040542310);
    InitializeEvent(2, 1040542210, 1040540311, 1040542311);
    InitializeEvent(3, 1040542210, 1040540312, 1040542312);
    InitializeEvent(4, 1040542210, 1040540313, 1040542313);
    InitializeEvent(5, 1040542210, 1040540314, 1040542314);
    InitializeEvent(6, 1040542210, 1040540315, 1040542315);
    InitializeEvent(7, 1040542210, 1040540316, 1040542316);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005420, 1040540300, 1040541300, 1040541301, 1040540301, 1040540302, 1040540303, 0);
});

$Event(1040542201, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(1040542201));
    WaitFor(InArea(1040540301, 1040542301));
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
    SetEventFlagID(1040542201, ON);
    EndEvent();
});

$Event(1040542210, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(1040542210));
    WaitFor(InArea(1040540301, 1040542309));
    SetSpEffect(1040540301, 5555);
    WaitFixedTimeSeconds(1);
    SetSpEffect(X0_4, 5002);
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
    SetEventFlagID(1040542210, ON);
    EndEvent();
});

$Event(1040542300, Restart, function() {
    CreateDamagingAsset(1040541301, 1040541300, 150, 100700, DamageTargetType.Character, 3, 0, 10);
    CreateDamagingAsset(1040541301, 1040541300, 200, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1040541301, 1040541300, 201, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1040541301, 1040541300, 202, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1040541301, 1040541300, 203, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1040541301, 1040541300, 204, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1040541301, 1040541300, 205, 100701, DamageTargetType.Character, 2, 0, 10);
});

$Event(1040542301, Restart, function() {
    EndIf(EventFlag(1040542301));
    WaitFor(CharacterDead(1040540390));
    WaitFor(mainGroupAbuse);
    ForceCharacterDeath(1040540301, false);
    EndEvent();
});

$Event(1040542700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4200)) {
            SetEventFlagID(1040529253, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!(EventFlag(4207) || (EventFlag(4208) && EventFlag(1040549254)))) {
        WaitFor(EventFlag(4207) || (EventFlag(4208) && EventFlag(1040549254)));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(4200));
    GotoIf(L2, EventFlag(4201));
    GotoIf(L4, EventFlag(4203));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
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
    WaitFor(!(EventFlag(4207) || (EventFlag(4208) && EventFlag(1040549254))));
    RestartEvent();
});

$Event(1040542705, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    WaitFor(
        ((EventFlag(4205) || EventFlag(4206) || EventFlag(4207)) && !EventFlag(4203))
            || (!EventFlag(4217)
                && EventFlag(4203)
                && !EventFlag(11009554)
                && !EventFlag(1051569454)
                && !EventFlag(11059304))
            || (EventFlag(1040549254) && !EventFlag(4217)));
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 930000, false, false, false);
    SetNetworkconnectedEventFlagID(1040549254, ON);
    SetNetworkconnectedEventFlagID(11009554, OFF);
    SetNetworkconnectedEventFlagID(1051569454, OFF);
    SetNetworkconnectedEventFlagID(11059304, OFF);
    if (!mainGroupAbuse) {
    }
L20:
    WaitFor(
        !(((EventFlag(4205) || EventFlag(4206) || EventFlag(4207)) && !EventFlag(4203))
            || (!EventFlag(4217)
                && EventFlag(4203)
                && !EventFlag(11009554)
                && !EventFlag(1051569454)
                && !EventFlag(11059304))
            || (EventFlag(1040549254) && !EventFlag(4217))));
    RestartEvent();
});

$Event(1040542706, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EnableCharacterImmortality(X0_4);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(1040542710, ON);
    ForceAnimationPlayback(X0_4, 20010, false, true, true);
    EndEvent();
});
