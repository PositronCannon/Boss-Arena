// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1038500000, 1038501950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76209, 76209, 1038501980, 77210, 2, 78210, 78211, 78212, 78213, 78214, 78215, 78216, 78217, 78218, 78219);
    RegisterBonfire(1038500001, 1038501951, 0, 0, 0, 5);
    RegisterBonfire(76301, 1038501952, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1038500210, 1038500210, 40256, 0, 0);
    InitializeEvent(0, 1038502580, 0);
    InitializeEvent(0, 1038502500, 0);
    InitializeEvent(0, 1038503700, 1038500700, 1038501700);
    InitializeCommonEvent(0, 90005752, 1038501700, 200, 120, 1077936128);
    InitializeEvent(0, 1038503701, 0);
    InitializeEvent(0, 1038503702, 1038501700, 1038500700);
    InitializeEvent(0, 1038503703, 0);
    InitializeCommonEvent(0, 90005740, 1038502705, 1038502706, 1038502707, 1038500700, 703, 1038501701, 703, 1045220557, 90203, -1, -1, 1067030938);
    InitializeCommonEvent(0, 90005741, 1038502708, 1038502709, 1038502707, 1038500700, 90201, 0, -1, -1, 1056964608);
    InitializeCommonEvent(0, 90005771, 1038500950, 1038502710);
    InitializeCommonEvent(0, 90005771, 1038500952, 1038502711);
    InitializeCommonEvent(0, 90005706, 1038500710, 930023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1038500700, true);
    DisableAsset(1038501700);
    SetCharacterBackreadState(1038500710, true);
    InitializeEvent(0, 1038502400, 1038500402, 1038502400, 0, 0, 1038500400);
    InitializeEvent(1, 1038502400, 1038500400, 1038502400, 0, 0, 1038500402);
});

$Event(1038502400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    flag = !EventFlag(1046367500) || !EventFlag(1051397900);
    areaFlagChrSp = InArea(10000, X4_4) && flag && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || HasDamageType(X16_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaFlagChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaFlagChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
});

$Event(1038502500, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1038500500));
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 1038502550));
    SetEventFlagID(1038500500, ON);
});

$Event(1038502580, Restart, function() {
    RegisterLadder(1038500580, 1038500581, 1038501580);
    RegisterLadder(1038500582, 1038500583, 1038501582);
    RegisterLadder(1038500584, 1038500585, 1038501584);
});

$Event(1038503700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3420)) {
            SetEventFlagID(1038519203, OFF);
        }
        if (EventFlag(1038509205)) {
            SetNetworkconnectedEventFlagID(1038502700, ON);
        }
    }
L10:
    if (!(EventFlag(3426) && (EventFlag(1038509205) || EventFlag(1038502700)))) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableAsset(X4_4);
        WaitFor(EventFlag(3426) && (EventFlag(1038509205) || EventFlag(1038502700)));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3420));
    GotoIf(L2, EventFlag(3421));
    GotoIf(L3, EventFlag(3422));
    GotoIf(L4, EventFlag(3423));
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    EnableAsset(X4_4);
    WarpAssetToCharacter(X4_4, X0_4, -1);
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
    WaitFor(!(EventFlag(3426) && (EventFlag(1038509205) || EventFlag(1038502700))));
    RestartEvent();
});

$Event(1038503701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeRealFrames(1);
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038519207) || EventFlag(1038509205));
    EndIf(EntityInRadiusOfEntity(10000, 1038510950, 5, 1));
    WaitFor(
        InArea(10000, 1038502500) || EventFlag(16000860) || EventFlag(76301) || EventFlag(76302));
    EndIf(EventFlag(1038519207) || EventFlag(1038509205));
    SetEventFlagID(1038509205, ON);
    EndEvent();
});

$Event(1038503702, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038519207));
    EndIf(EventFlag(1038512704));
    GotoIf(L1, !EventFlag(1038512701));
    Goto(L2);
L1:
    WaitFor(HasDamageType(X0_4, 20000, DamageType.Unspecified));
    Goto(L3);
L2:
    dmg = HasDamageType(X0_4, 20000, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(4));
    if (dmg.Passed) {
L3:
        GotoIf(L5, !EventFlag(1038512701));
        GotoIf(L6, !EventFlag(1038512703));
        RestartEvent();
L5:
        if (EntityInRadiusOfEntity(20000, X4_4, 10, 1)) {
            SetEventFlagID(1038512700, ON);
            WaitFor(EventFlag(1038512706));
        }
        RestartEvent();
L6:
        if (EntityInRadiusOfEntity(20000, X4_4, 10, 1)) {
            SetEventFlagID(1038512702, ON);
            WaitFor(EventFlag(1038512707));
        }
        RestartEvent();
    }
L7:
    SetEventFlagID(1038512704, ON);
    EndEvent();
});

$Event(1038503703, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038519207));
    WaitFor(EventFlag(1038519205) && EventFlag(1038509205));
    SetEventFlagID(16008540, ON);
    SendAllPhantomsHome();
    WarpPlayer(16, 0, 0, 0, 16002701, 0);
    EndEvent();
});
