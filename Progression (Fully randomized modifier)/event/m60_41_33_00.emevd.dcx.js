// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1041330000, 1041331950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005251, 1041330233, 1090519040, 1065353216, -1);
    InitializeCommonEvent(0, 90005251, 1041330234, 1090519040, 1056964608, -1);
    InitializeCommonEvent(0, 90005251, 1041330235, 1090519040, 1066192077, -1);
    InitializeCommonEvent(0, 90005251, 1041330236, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005251, 1041330237, 1090519040, 1056964608, -1);
    InitializeCommonEvent(0, 90005251, 1041330238, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005251, 1041330239, 1090519040, 1065353216, -1);
    InitializeCommonEvent(0, 90005251, 1041330240, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005251, 1041330241, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005201, 1041330200, 30000, 20000, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005920, 1041330900, 1041331900, 1041333900);
    InitializeCommonEvent(0, 90005703, 1041330700, 3461, 3462, 1044369204, 3461, 3460, 3464, -1);
    InitializeCommonEvent(0, 90005704, 1041330700, 3461, 3460, 1044369204, 3);
    InitializeEvent(0, 1041333700, 1041330700, 1041330701);
    InitializeCommonEvent(0, 90005740, 1044362702, 1044362703, 1044362704, 1041330700, 704, 1041331700, 704, 1045220557, 90204, -1, -1, 1067030938);
    InitializeCommonEvent(0, 90005741, 1044362708, 1044362709, 1044362704, 1041330700, 90201, 0, -1, -1, 1056964608);
    InitializeEvent(0, 1041333705, 1041330710);
    InitializeCommonEvent(0, 90005703, 1041330710, 3361, 3362, 1041339251, 3361, 3360, 3363, -1);
    InitializeCommonEvent(0, 90005704, 1041330710, 3361, 3360, 1041339251, 3);
    InitializeCommonEvent(0, 90005702, 1041330710, 3363, 3360, 3363);
    InitializeCommonEvent(0, 90005706, 1041330720, 930023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041330700, true);
    SetCharacterBackreadState(1041330701, true);
    SetCharacterBackreadState(1041330710, true);
    SetCharacterBackreadState(1041330720, true);
});

$Event(1041332800, Restart, function() {
    EndIf(EventFlag(1041330800));
    WaitFor(CharacterHPValue(1041330800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1041330800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1041330800));
    HandleBossDefeatAndDisplayBanner(1041330800, TextBannerType.GreatEnemyFelled);
    EnableObjAct(1041331560, -1);
    SetEventFlagID(1041330800, ON);
});

$Event(1041332810, Restart, function() {
    if (EventFlag(1041330800)) {
        DisableCharacter(1041330800);
        DisableCharacterCollision(1041330800);
        ForceCharacterDeath(1041330800, false);
        EnableObjAct(1041331560, -1);
        EndEvent();
    }
L0:
    DisableCharacterAI(1041330800);
    WaitFor(EventFlag(1041332805) && InArea(10000, 1041332800));
L2:
    EnableCharacterAI(1041330800);
    SetNetworkUpdateRate(1041330800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1041330800, 0, 904133540);
    DisableObjAct(1041331560, -1);
});

$Event(1041332849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 1041330800, 1041331800, 1041332800, 1041332805, 1041335800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 1041330800, 1041331800, 1041332800, 1041332805, 1041332806, 10000);
    InitializeCommonEvent(0, 9005811, 1041330800, 1041331800, 3, 0);
    InitializeCommonEvent(0, 9005822, 1041330800, 0, 1041332805, 1041332806, 0, 1041332802, 0, 0);
    InitializeCommonEvent(0, 9005812, 1041330800, 1041331801, 3, 0, 0);
});

$Event(1041333700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3460)) {
            SetEventFlagID(1034509253, OFF);
        }
    }
L19:
    if (!(EventFlag(3465) || EventFlag(3466) || EventFlag(3467) || EventFlag(3468) || EventFlag(3469))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableCharacter(X4_4);
        SetCharacterBackreadState(X4_4, true);
        DisableAsset(1041331701);
        WaitFor(
            EventFlag(3465)
                || EventFlag(3466)
                || EventFlag(3467)
                || EventFlag(3468)
                || EventFlag(3469));
        RestartEvent();
    }
L6:
    GotoIf(L4, EventFlag(1041339259));
    GotoIf(L1, EventFlag(3460));
    GotoIf(L2, EventFlag(3461));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    DisableAsset(1041331701);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    DisableAsset(1041331701);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L4:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterTeamType(X4_4, TeamType.Disabled);
    ForceAnimationPlayback(X4_4, 90102, false, false, false);
    if (!EventFlag(1041339259)) {
        DisableAsset(1041331701);
    }
    Goto(L20);
L20:
    WaitFor(
        !EventFlag(3465)
            && !EventFlag(3466)
            && !EventFlag(3467)
            && !EventFlag(3468)
            && !EventFlag(3469));
    RestartEvent();
});

$Event(1041333705, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3360)) {
            SetEventFlagID(1041339253, OFF);
        }
    }
L19:
    if (!EventFlag(3369)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3369));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3360));
    GotoIf(L2, EventFlag(3361));
    GotoIf(L4, EventFlag(3363));
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
    WaitFor(!EventFlag(3369));
    RestartEvent();
});
