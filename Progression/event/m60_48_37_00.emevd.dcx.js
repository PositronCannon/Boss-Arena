// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1048370000, 1048371950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76458, 76405, 1048371980, 77410, 0, 78410, 78411, 78412, 78413, 78414, 78415, 78416, 78417, 78418, 78419);
    InitializeCommonEvent(0, 90005201, 1048370800, 30000, 20000, 1112014848, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 1048370800, 904501600, 25);
    InitializeCommonEvent(0, 90005861, 1048370800, 0, 1048370800, 1, 30400, 30064, 0);
    InitializeEvent(0, 1048372200, 1048370299, 12603, 1048372299, 1048372298, 1048372297);
    InitializeCommonEvent(0, 90005300, 1048370299, 1048370299, 40406, 0, 0);
    //init boss reward
    InitializeEvent(0, 1048379990, 0);
});

//generic boss event
$Event(1048379990, Default, function() {
    WaitFor(CharacterDead(1048370800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304205,1049304120,-1,-1,1049304875,1049304876,1049304877,1049304878,1049305443,1049305446,1049305449,1049305453,1049300205);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1048370700, true);
});

$Event(1048372200, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterHasSpEffect(X0_4, X4_4) && !CharacterDead(X0_4));
    SetEventFlagID(1048372201, OFF);
    SetEventFlagID(1048372202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1048372201, 1048372202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(X0_4, X8_4));
    GotoIf(L2, InArea(X0_4, X12_4));
    GotoIf(L3, InArea(X0_4, X16_4));
L1:
    GotoIf(S0, EventFlag(1048372201));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1048372201));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1048372201));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, true, false);
    Goto(L0);
L0:
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
