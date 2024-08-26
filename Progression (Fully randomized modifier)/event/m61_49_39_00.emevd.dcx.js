// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2049390000, 2049391950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005200, 2054390200, 30003, 20003, 2054392200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005615, 2049392690, 0);
    InitializeEvent(0, 2049390700, 2049390700, 4300, 4305, 4306, 2049392713, 2049392714, 2049399725, 2049392715, 2049399723, 90101, 90102, 90100, 2049399736, 4318, 1108082688, 1099431936, 2049392716, 2054390800);
    InitializeEvent(0, 2049390701, 4300, 4825, 4827, 4318);
    InitializeEvent(0, 2049390702, 1106247680, 1106247680, 2049392702, 4305, 2049399722, 2049399725, 2049392701);
    InitializeEvent(0, 2049390707, 4305, 2049392710, 1084227584, 2049399716, 2049399722);
    InitializeEvent(0, 2049390705, 2049390700, 2049399722, 90201, 90209);
    InitializeEvent(0, 2049390706, 2049390700, 2049392711, 90203);
    InitializeCommonEvent(0, 90005744, 2049390700, 2049399727, 2049399727, 90200);
    InitializeEvent(0, 2049390708, 4305, 2049399729, 2049399722, 2054390800);
    InitializeCommonEvent(0, 90005750, 2049391701, 4350, 107030, 400704, 400704, 2049399729, 6102);
    InitializeEvent(0, 2049390709, 2049399728, 2049392713, 2049399732, 2049392714, 2049399722, 2049392715, 2049399743, 2049392716);
    InitializeEvent(0, 2049390704, 2049392704, 2049392705, 2049392706, 2049390700, 710, 2049391700, 710, 1051931443, 90208, -1, -1, 1066192077, 1075419546, 2049399703, 2049392709, 2049399705, 1036831949);
    InitializeCommonEvent(0, 90005741, 2049392707, 2049392708, 2049392706, 2049390700, 90202, 0, -1, -1, 1056964608);
    InitializeEvent(0, 2049390703, 2049392709, 2049399704, 1036831949);
    InitializeEvent(0, 2049390710, 2049390710);
    InitializeEvent(0, 2049390711, 0);
    InitializeEvent(0, 2049390712, 2049392710, 2049392710, 2049392720, 1);
});

$Event(2049390700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4, X68_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableCharacterInvincibility(X0_4);
    SetCharacterTalkRange(X0_4, X60_4);
    SetEventFlagID(X24_4, OFF);
    SetEventFlagID(X48_4, OFF);
    if (!EventFlag(X64_4)) {
        if (!EventFlag(X8_4)) {
            if (!EventFlag(X12_4)) {
                WaitFor(AnyBatchEventFlags(X8_4, X12_4));
                RestartEvent();
            }
        }
L0:
        if (!EventFlag(X4_4)) {
        }
L1:
        if (!EventFlag(X28_4) && EventFlag(X68_4)) {
            DisableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, true);
        } else {
            GotoIf(S0, !(TimeOfDayInRange(20, 0, 0, 22, 0, 0) && !EventFlag(X16_4)));
            Goto(L20);
S0:
            GotoIf(S1, 
                !(TimeOfDayInRange(20, 0, 0, 22, 0, 0) && EventFlag(X16_4) && !EventFlag(X20_4)));
            Goto(L20);
S1:
            EnableCharacter(X0_4);
            SetCharacterBackreadState(X0_4, false);
            SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
            ResetCharacterPosition(X0_4);
            if (TimeOfDayInRange(20, 0, 0, 22, 0, 0) && EventFlag(X16_4) && EventFlag(X20_4)) {
                SetEventFlagID(X24_4, ON);
                SetCharacterTalkRange(X0_4, X56_4);
            }
            if (EventFlag(X12_4)) {
                ForceAnimationPlayback(X0_4, X44_4, false, false, false);
                SetEventFlagID(X48_4, ON);
            } else if (EventFlag(X28_4) && !EventFlag(X32_4)) {
                ForceAnimationPlayback(X0_4, X40_4, false, false, false);
                SetCharacterTalkRange(X0_4, X56_4);
                SetEventFlagID(X48_4, ON);
            } else if (!EventFlag(X28_4) && EventFlag(X24_4)) {
                ForceAnimationPlayback(X0_4, X36_4, false, false, false);
                SetEventFlagID(X48_4, ON);
            } else {
                ForceAnimationPlayback(X0_4, X44_4, false, false, false);
                Goto(L20);
            }
        }
    }
L20:
    WaitFor(!AnyBatchEventFlags(X8_4, X12_4) || EventFlag(X52_4));
    if (EventFlag(X52_4)) {
        WaitFor(ElapsedSeconds(3));
    }
    RestartEvent();
});

$Event(2049390701, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(X0_4));
    WaitFor(AnyBatchEventFlags(X4_4, X8_4));
    SetEventFlagID(X12_4, ON);
    BatchSetEventFlags(X4_4, X8_4, OFF);
    RestartEvent();
});

$Event(2049390702, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X12_4));
    WaitFor(EventFlag(X8_4));
    if (!EventFlag(X16_4)) {
        Goto(L0);
L0:
        WaitFor(ElapsedSeconds(X0_4) || EventFlag(X24_4) || !EventFlag(X20_4) || EventFlag(X16_4));
        RestartIf(!EventFlag(X20_4));
    } else {
L1:
        WaitFor(ElapsedSeconds(X4_4) || EventFlag(X24_4));
        Goto(L20);
    }
L20:
    SetEventFlagID(X8_4, OFF);
    RestartEvent();
});

$Event(2049390703, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(X0_4));
    SetEventFlagID(X4_4, ON);
    WaitFixedTimeSeconds(X8_4);
L0:
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(2049390704, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_2, X28_4, X32_4, X36_4, X40_4, X44_4, X48_4, X52_4, X56_4, X60_4, X64_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X60_4, OFF);
    WaitFor(EventFlag(X0_4));
    if (Signed(X16_4) != 0) {
        GotoIf(L0, X20_4 == 0);
        WarpAssetToCharacter(X20_4, X12_4, X24_2);
        WaitFixedTimeRealFrames(1);
        area &= EntityInRadiusOfEntity(10000, X20_4, X28_4, 1);
        GotoIf(S0, !area);
        SetEventFlagID(X4_4, ON);
        SetEventFlagID(X60_4, ON);
        Goto(L15);
S0:
        GotoIf(S1, 
            !(EntityInRadiusOfEntity(10000, X20_4, X44_4, 1)
                && EntityInRadiusOfEntity(10000, X12_4, X44_4, 1)));
        SetEventFlagID(X4_4, ON);
        SetEventFlagID(X60_4, ON);
        Goto(L15);
S1:
        RotateCharacter(10000, X20_4, -1, true);
        RotateCharacter(10000, X20_4, 90006, false);
        Goto(L8);
    }
L0:
    RotateCharacter(10000, X12_4, -1, true);
    area &= EntityInRadiusOfEntity(10000, X12_4, X28_4, 1);
    GotoIf(L9, area);
    RotateCharacter(10000, X12_4, 90006, false);
    Goto(L8);
L8:
    SetEventFlagID(X52_4, ON);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(X52_4, OFF);
    sp = !CharacterHasSpEffect(10000, 9900);
    flagTime = !EventFlag(X0_4) || ElapsedSeconds(X48_4);
    spFlagTimeArea |= sp || flagTime;
    if (Signed(X16_4) != 0) {
        GotoIf(S2, X20_4 == 0);
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, X20_4, X28_4, 1);
    } else {
S2:
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, X12_4, X28_4, 1);
    }
    WaitFor(spFlagTimeArea);
    GotoIf(L20, sp.Passed);
    GotoIf(L19, flagTime.Passed);
L9:
    SetEventFlagID(X4_4, ON);
    if (Signed(X16_4) != 0) {
        RequestCharacterAnimationReset(10000, Disabled);
        GotoIf(S3, EventFlag(X60_4));
        RotateCharacter(10000, X12_4, -1, true);
        RotateCharacter(10000, X12_4, X32_4, false);
        Goto(S4);
    }
S3:
    Goto(L15);
S4:
    SetEventFlagID(X56_4, ON);
    WaitFixedTimeSeconds(X64_4);
L15:
    if (X8_4 != 0) {
        SetEventFlagID(X8_4, ON);
    }
    if (Signed(X16_4) != 0) {
        IssueShortWarpRequest(10000, TargetEntityType.Character, X12_4, X16_4);
    }
    if (Signed(X40_4) != -1) {
        RotateCharacter(10000, X12_4, X32_4, false);
    } else {
        RotateCharacter(10000, X12_4, X32_4, true);
    }
    Goto(L8);
L8:
    WaitFixedTimeRealFrames(1);
    sp2 = !CharacterHasSpEffect(10000, 9900);
    WaitFor(!EventFlag(X0_4) || sp2);
    if (!sp2.Passed) {
        if (Signed(X36_4) != -1) {
            if (Signed(X40_4) != -1) {
                sp3 = !CharacterHasSpEffect(10000, 9900);
                WaitFor(CharacterHasSpEffect(10000, X40_4) || sp3);
                GotoIf(L20, sp3.Passed);
            }
L10:
            SetEventFlagID(X4_4, OFF);
            ForceAnimationPlayback(10000, X36_4, false, true, false);
            RestartEvent();
        }
L18:
        SetEventFlagID(X4_4, OFF);
        RestartEvent();
    }
L19:
    SetEventFlagID(X0_4, OFF);
    ForceAnimationPlayback(10000, 0, false, false, false);
    RestartEvent();
L20:
    SetEventFlagID(X0_4, OFF);
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(2049390705, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(X4_4));
L1:
    WaitFor(EventFlag(X4_4));
    RotateCharacter(10000, X0_4, -1, true);
    RotateCharacter(10000, X0_4, X12_4, false);
    WaitFixedTimeSeconds(3);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
L20:
    SetEventFlagID(4318, ON);
    EndEvent();
});

$Event(2049390706, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(X4_4));
    DisableCharacterCollision(X0_4);
    DisableCharacterGravity(X0_4);
    SetCharacterMaphit(X0_4, false);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    WaitFixedTimeSeconds(4.5);
    DisableCharacter(X0_4);
    WaitFixedTimeSeconds(10);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(2049390707, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X0_4));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X4_4);
    GotoIf(S0, EventFlag(X16_4));
    GotoIf(S1, EventFlag(X12_4));
S0:
    WaitFor(ElapsedSeconds(X8_4));
S1:
    SetEventFlagID(X4_4, OFF);
    RestartEvent();
});

$Event(2049390708, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(X0_4));
    EndIf(EventFlag(X4_4));
    WaitFor(!EventFlag(X8_4) && EventFlag(X12_4));
    SetEventFlagID(X4_4, ON);
    RestartEvent();
});

$Event(2049390709, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    flag = EventFlag(X0_4);
    flag2 = EventFlag(X8_4);
    flag3 = EventFlag(X16_4);
    flag4 = EventFlag(X24_4);
    if (flag) {
        SetNetworkconnectedEventFlagID(X4_4, ON);
    }
    if (flag2) {
        SetNetworkconnectedEventFlagID(X12_4, ON);
    }
    if (flag3) {
        SetNetworkconnectedEventFlagID(X20_4, ON);
    }
    if (flag4) {
        SetNetworkconnectedEventFlagID(X28_4, ON);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X0_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X16_4)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X24_4));
    RestartEvent();
});

$Event(2049390710, Restart, function(X0_4) {
    DisableCharacterGravity(X0_4);
    DisableCharacterCollision(X0_4);
});

$Event(2049390711, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(10000, 9611) && !CharacterHasSpEffect(10000, 9612));
    ForceAnimationPlayback(10000, 60510, false, false, false);
    WaitFixedTimeSeconds(0.2);
    RestartEvent();
});

$Event(2049390712, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    SetEventFlagID(X8_4, ON);
    WaitFor(InArea(10000, X0_4));
    SetEventFlagID(X8_4, OFF);
    WaitFixedTimeFrames(1);
    WaitFor(!InArea(10000, X0_4) && !InArea(10000, X4_4));
    if (Signed(-1) != X12_4) {
        SetEventFlagID(X8_4, ON);
    }
    RestartEvent();
});


