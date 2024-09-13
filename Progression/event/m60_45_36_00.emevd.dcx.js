// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1045360000, 1045361950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005460, 1045360211);
    InitializeCommonEvent(0, 90005461, 1045360211);
    InitializeCommonEvent(0, 90005462, 1045360211);
    InitializeCommonEvent(0, 90005463, 1045362212, 1045360211);
    InitializeCommonEvent(0, 90005464, 1045362212, 1045360211, 1045360212, 0);
    InitializeCommonEvent(0, 90005464, 1045362212, 1045360211, 1045360213, 1);
    InitializeCommonEvent(0, 90005464, 1045362212, 1045360211, 1045360214, 2);
    InitializeCommonEvent(0, 90005464, 1045362212, 1045360211, 1045360215, 3);
    InitializeCommonEvent(0, 90005464, 1045362212, 1045360211, 1045360216, 4);
    InitializeEvent(0, 1045362200, 0);
    InitializeEvent(0, 1045362400, 0);
    InitializeCommonEvent(0, 90005725, 4725, 4726, 4728, 1045369305, 1045360700, 1045360701, 1045366700);
    InitializeCommonEvent(0, 90005703, 1045360700, 4726, 4727, 1045369306, 4726, 4725, 4729, 0);
    InitializeCommonEvent(0, 90005704, 1045360700, 4726, 4725, 1045369306, 3);
    InitializeCommonEvent(0, 90005702, 1045360700, 4728, 4725, 4729);
    InitializeCommonEvent(0, 90005703, 1045360701, 4726, 4727, 1045369307, 4726, 4725, 4729, 0);
    InitializeCommonEvent(0, 90005704, 1045360701, 4726, 4725, 1045369307, 3);
    InitializeCommonEvent(0, 90005728, 1045360701, 1045362706, 1045362707);
    InitializeCommonEvent(0, 90005727, 4726, 1045360700, 1045360701, 4725, 4728);
    InitializeCommonEvent(0, 90005729, 1045369300, 1045360700, 1109393408, 1045362702);
    InitializeCommonEvent(0, 90005725, 4725, 4726, 4728, 1045369305, 1045360702, 1045360703, 1045366701);
    InitializeCommonEvent(0, 90005703, 1045360702, 4726, 4727, 1045369306, 4726, 4725, 4729, 0);
    InitializeCommonEvent(0, 90005704, 1045360702, 4726, 4725, 1045369306, 3);
    InitializeCommonEvent(0, 90005702, 1045360702, 4728, 4725, 4729);
    InitializeCommonEvent(0, 90005703, 1045360703, 4726, 4727, 1045369307, 4726, 4725, 4729, 0);
    InitializeCommonEvent(0, 90005704, 1045360703, 4726, 4725, 1045369307, 3);
    InitializeCommonEvent(0, 90005728, 1045360703, 1045362706, 1045362707);
    InitializeCommonEvent(0, 90005727, 4726, 1045360702, 1045360703, 4725, 4728);
    InitializeCommonEvent(0, 90005729, 1045369300, 1045360702, 1109393408, 1045362702);
    InitializeCommonEvent(0, 90005706, 1045360710, 930023, 0);
    InitializeEvent(0, 1045363704, 0);
    InitializeCommonEvent(0, 90005706, 1045360710, 30023, 0);
    InitializeEvent(0, 1045363715, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1045360700, true);
    SetCharacterBackreadState(1045360701, true);
    SetCharacterBackreadState(1045360710, true);
    SetCharacterBackreadState(1045360702, true);
    SetCharacterBackreadState(1045360703, true);
});

$Event(1045362200, Restart, function() {
    SetSpEffect(1045360211, 11771);
});

$Event(1045362400, Restart, function() {
    EndIf(EventFlag(1045360500));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(310) && InArea(10000, 1045362400));
    SetEventFlagID(1045360500, ON);
});

$Event(1045363700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1045369200, OFF);
    if (PlayerIsInOwnWorld()) {
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    DisableCharacter(X8_4);
    DisableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    GotoIf(L20, 
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747)) && EventFlag(1045369221)));
    GotoIf(L1, EventFlag(4740));
    GotoIf(L2, EventFlag(4741));
    GotoIf(L4, EventFlag(4743));
L1:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(X0_4, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(X0_4, 30002, false, false, false);
    }
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    EnableCharacter(X4_4);
    EnableCharacter(X8_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterBackreadState(X8_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(X0_4, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(X0_4, 30002, false, false, false);
        DisableCharacterAI(X0_4);
    }
    Goto(L20);
L4:
    GotoIf(L20, !EventFlag(1045369222));
    ForceCharacterTreasure(X0_4);
    ForceCharacterTreasure(X4_4);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    EnableAsset(X12_4);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(EventFlag(1045369200));
    RestartEvent();
});

$Event(1045363702, Default, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4743));
    EndIf(!EventFlag(1045369221));
    WaitFor(CharacterDead(X0_4));
    SetNetworkconnectedEventFlagID(1045369222, ON);
    EndEvent();
});

$Event(1045363703, Default, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747))
            && (EventFlag(4740) || EventFlag(4741))));
    GotoIf(L0, EventFlag(4980));
    GotoIf(L10, AnyBatchEventFlags(4982, 4983));
L0:
    WaitFor(CharacterHasSpEffect(X0_4, 9601) || CharacterHasSpEffect(X0_4, 9603));
    GotoIf(L1, CharacterHasSpEffect(X0_4, 9601));
    GotoIf(L2, CharacterHasSpEffect(X0_4, 9603));
L1:
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 4, 1) || !CharacterHasSpEffect(X0_4, 9601));
    if (CharacterHasSpEffect(X0_4, 9601)) {
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9601));
    Goto(L20);
L2:
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 6, 1) || !CharacterHasSpEffect(X0_4, 9603));
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20010, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9603));
    Goto(L20);
L10:
    WaitFor(CharacterHasSpEffect(X0_4, 9603));
    if (!CharacterHasSpEffect(X0_4, 9603)) {
    }
L11:
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 6, 1) || !CharacterHasSpEffect(X0_4, 9603));
    if (CharacterHasSpEffect(X0_4, 9603)) {
        ForceAnimationPlayback(X0_4, 20011, false, false, false);
        DisableCharacterAI(X0_4);
    }
    WaitFor(!CharacterHasSpEffect(X0_4, 9603));
    Goto(L20);
L20:
    RestartEvent();
});

$Event(1045363704, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1045369229));
    WaitFor(EntityInRadiusOfEntity(10000, 1045360700, 7.5, 1));
    SetNetworkconnectedEventFlagID(1045369229, ON);
    EndEvent();
});

$Event(1045363705, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4745) || EventFlag(4746) || EventFlag(4747))
            && (EventFlag(4740) || EventFlag(4741))));
    GotoIf(L0, CharacterHasSpEffect(X0_4, 9602));
    Goto(L10);
L0:
    DisableCharacterAI(X0_4);
    WaitFor(!CharacterHasSpEffect(X0_4, 9602));
    RestartEvent();
L10:
    EnableCharacterAI(X0_4);
    WaitFor(CharacterHasSpEffect(X0_4, 9602));
    RestartEvent();
});

$Event(1045363706, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(X4_4, 20000, DamageType.Unspecified)
            || HasDamageType(X4_4, 40000, DamageType.Unspecified))
            && !EventFlag(1041362709));
    SetNetworkconnectedEventFlagID(1041362708, ON);
    EndIf(EventFlag(4741));
    if (CharacterHasSpEffect(X0_4, 9601)) {
        ForceAnimationPlayback(X0_4, 20004, false, false, false);
    }
    if (CharacterHasSpEffect(X0_4, 9602)) {
        ForceAnimationPlayback(X0_4, 20006, false, false, false);
    }
});

$Event(1045363707, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X4_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    flagDmgHp = EventFlag(X8_4)
        || EventFlag(X12_4)
        || (HasDamageType(X0_4, 20000, DamageType.Unspecified) && CharacterHPValue(X0_4) < 1);
    flagDmgHp2 = EventFlag(X24_4)
        || (HasDamageType(X20_4, 20000, DamageType.Unspecified) && CharacterHPValue(X20_4) < 1);
    WaitFor(flagDmgHp || flagDmgHp2);
    GotoIf(L0, flagDmgHp.Passed);
    GotoIf(L5, flagDmgHp2.Passed);
L0:
    SetNetworkconnectedEventFlagID(X24_4, ON);
    SetCharacterTeamType(X20_4, TeamType.HostileNPC);
    Goto(L10);
L5:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EnableCharacterAI(X0_4);
    BatchSetNetworkconnectedEventFlags(X4_4, X16_4, OFF);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SaveRequest();
    Goto(L10);
L10:
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    WaitFor(EventFlag(X24_4));
    SetNetworkconnectedEventFlagID(X24_4, OFF);
    EndEvent();
});

$Event(1045363710, Restart, function(X0_4) {
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 30023, false, false, false);
});

$Event(1045363715, Restart, function() {
    SetEventFlagID(1044399265, OFF);
    if (!EventFlag(4728)) {
        SetEventFlagID(1044399265, ON);
    }
    EndEvent();
});
