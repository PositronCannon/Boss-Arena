// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1049540000, 1049541950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76652, 76650, 1049541980, 77520, 0, 78520, 78521, 78522, 78523, 78524, 78525, 78526, 78527, 78528, 78529);
    InitializeCommonEvent(0, 90005300, 1049540200, 1049540200, 1049540700, 0, 0);
    InitializeCommonEvent(0, 90005501, 1049540510, 1049541511, 10, 12031510, 12031511, 12031512, 1049540512);
    InitializeEvent(0, 1049542510, 0);
    InitializeCommonEvent(0, 90005640, 1049540540, 1049541540);
    InitializeEvent(0, 1049542210, 0);
    InitializeEvent(0, 1049542216, 1049540216);
    InitializeCommonEvent(0, 90005261, 1049540260, 1049542260, 1092616192, 0, 20010);
    InitializeCommonEvent(0, 90005261, 1049540373, 1049542260, 1092616192, 0, 20002);
    InitializeEvent(0, 1049542350, 1049540350, 1049540370);
    InitializeCommonEvent(0, 900005610, 1049541600, 100, 800, 0);
    InitializeEvent(0, 1049543700, 1049540700, 1049542700, 1125842944);
    InitializeCommonEvent(0, 90005706, 1049540710, 930023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1049540700, true);
    SetCharacterBackreadState(1049540710, true);
});

$Event(1049542210, Restart, function() {
    EndIf(ThisEventSlot());
    DisableCharacterAI(1049540210);
    DisableCharacterAI(1049540211);
    DisableCharacterAI(1049540212);
    WaitFor(
        HasDamageType(1049540210, 0, DamageType.Unspecified)
            || HasDamageType(1049540211, 0, DamageType.Unspecified)
            || HasDamageType(1049540212, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(1049540210, 436)
            || CharacterHasStateInfo(1049540210, 2)
            || CharacterHasStateInfo(1049540210, 5)
            || CharacterHasStateInfo(1049540210, 6)
            || CharacterHasStateInfo(1049540210, 260)
            || CharacterHasStateInfo(1049540211, 436)
            || CharacterHasStateInfo(1049540211, 2)
            || CharacterHasStateInfo(1049540211, 5)
            || CharacterHasStateInfo(1049540211, 6)
            || CharacterHasStateInfo(1049540211, 260)
            || CharacterHasStateInfo(1049540212, 436)
            || CharacterHasStateInfo(1049540212, 2)
            || CharacterHasStateInfo(1049540212, 5)
            || CharacterHasStateInfo(1049540212, 6)
            || CharacterHasStateInfo(1049540212, 260)
            || (CharacterHasSpEffect(1049540210, 481)
                && !CharacterHasSpEffect(1049540210, 90100)
                && !CharacterHasSpEffect(1049540210, 90110)
                && !CharacterHasSpEffect(1049540210, 90160))
            || (CharacterHasSpEffect(1049540210, 482)
                && !CharacterHasSpEffect(1049540210, 90100)
                && !CharacterHasSpEffect(1049540210, 90120)
                && !CharacterHasSpEffect(1049540210, 90160)
                && !CharacterHasSpEffect(1049540210, 90162))
            || (CharacterHasSpEffect(1049540210, 483)
                && !CharacterHasSpEffect(1049540210, 90100)
                && !CharacterHasSpEffect(1049540210, 90140)
                && !CharacterHasSpEffect(1049540210, 90160)
                && !CharacterHasSpEffect(1049540210, 90161))
            || (CharacterHasSpEffect(1049540210, 484)
                && !CharacterHasSpEffect(1049540210, 90100)
                && !CharacterHasSpEffect(1049540210, 90130)
                && !CharacterHasSpEffect(1049540210, 90161)
                && !CharacterHasSpEffect(1049540210, 90162))
            || (CharacterHasSpEffect(1049540210, 487)
                && !CharacterHasSpEffect(1049540210, 90100)
                && !CharacterHasSpEffect(1049540210, 90150)
                && !CharacterHasSpEffect(1049540210, 90160))
            || (CharacterHasSpEffect(1049540211, 481)
                && !CharacterHasSpEffect(1049540211, 90100)
                && !CharacterHasSpEffect(1049540211, 90110)
                && !CharacterHasSpEffect(1049540211, 90160))
            || (CharacterHasSpEffect(1049540211, 482)
                && !CharacterHasSpEffect(1049540211, 90100)
                && !CharacterHasSpEffect(1049540211, 90120)
                && !CharacterHasSpEffect(1049540211, 90160)
                && !CharacterHasSpEffect(1049540211, 90162))
            || (CharacterHasSpEffect(1049540211, 483)
                && !CharacterHasSpEffect(1049540211, 90100)
                && !CharacterHasSpEffect(1049540211, 90140)
                && !CharacterHasSpEffect(1049540211, 90160)
                && !CharacterHasSpEffect(1049540211, 90161))
            || (CharacterHasSpEffect(1049540211, 484)
                && !CharacterHasSpEffect(1049540211, 90100)
                && !CharacterHasSpEffect(1049540211, 90130)
                && !CharacterHasSpEffect(1049540211, 90161)
                && !CharacterHasSpEffect(1049540211, 90162))
            || (CharacterHasSpEffect(1049540211, 487)
                && !CharacterHasSpEffect(1049540211, 90100)
                && !CharacterHasSpEffect(1049540211, 90150)
                && !CharacterHasSpEffect(1049540211, 90160))
            || (CharacterHasSpEffect(1049540212, 481)
                && !CharacterHasSpEffect(1049540212, 90100)
                && !CharacterHasSpEffect(1049540212, 90110)
                && !CharacterHasSpEffect(1049540212, 90160))
            || (CharacterHasSpEffect(1049540212, 482)
                && !CharacterHasSpEffect(1049540212, 90100)
                && !CharacterHasSpEffect(1049540212, 90120)
                && !CharacterHasSpEffect(1049540212, 90160)
                && !CharacterHasSpEffect(1049540212, 90162))
            || (CharacterHasSpEffect(1049540212, 483)
                && !CharacterHasSpEffect(1049540212, 90100)
                && !CharacterHasSpEffect(1049540212, 90140)
                && !CharacterHasSpEffect(1049540212, 90160)
                && !CharacterHasSpEffect(1049540212, 90161))
            || (CharacterHasSpEffect(1049540212, 484)
                && !CharacterHasSpEffect(1049540212, 90100)
                && !CharacterHasSpEffect(1049540212, 90130)
                && !CharacterHasSpEffect(1049540212, 90161)
                && !CharacterHasSpEffect(1049540212, 90162))
            || (CharacterHasSpEffect(1049540212, 487)
                && !CharacterHasSpEffect(1049540212, 90100)
                && !CharacterHasSpEffect(1049540212, 90150)
                && !CharacterHasSpEffect(1049540212, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    EnableCharacterAI(1049540210);
    EnableCharacterAI(1049540211);
    EnableCharacterAI(1049540212);
});

$Event(1049542216, Restart, function(X0_4) {
    EnableCharacterImmortality(X0_4);
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 30005, true, false, false);
    DisableLockOnPoint(X0_4, 220);
    DisableCharacterHPBarDisplay(X0_4);
    EndEvent();
});

$Event(1049542350, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        SetCharacterEventTarget(X4_4, X0_4);
    }
    WaitFor(CharacterHasSpEffect(X4_4, 11893) && !CharacterDead(X0_4) && !CharacterDead(X4_4));
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(X4_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 283, 0);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X4_4, 20003, false, false, false);
    SetSpEffect(X0_4, 11880);
    SetSpEffect(X4_4, 11880);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(5);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(X4_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    RestartEvent();
});

$Event(1049542510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1049540510, 1049540511, 10, 12031510, 1049541511, 1049543511, 12031512, 12033512, 1049542511, 12032512, 1049540512, 1049542513, 0);
});

$Event(1049540519, Restart, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1049540510, OFF);
});

$Event(1049543700, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4100));
    EndIf(!EventFlag(4106));
    EndIf(EventFlag(1049549201));
    EndIf(EventFlag(1047589205));
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    if (!EventFlag(1049512700)) {
        SetEventFlagID(1049549200, OFF);
    }
    WaitFor(InArea(10000, X4_4));
    SetCharacterTalkRange(X0_4, X8_4);
    SetEventFlagID(1049549200, ON);
    WaitFixedTimeSeconds(30);
    SetCharacterTalkRange(X0_4, 17);
    EndEvent();
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005421, 1249540300, 1249541301, 1249548301);
    InitializeCommonEvent(0, 90005422, 1249548301, 1249541300, 1249543301);
    InitializeCommonEvent(0, 90005424, 1249541300, 1249540302, 1249540303, 1249540300, 1249541301);
    InitializeCommonEvent(0, 90005423, 1249540302);
    InitializeCommonEvent(0, 90005423, 1249540303);
    InitializeCommonEvent(0, 90005261, 1249540300, 1249542300, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1249540301, 1249542300, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1249540302, 1249542300, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 1249540303, 1249542300, 1092616192, 0, 0);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005420, 1249540300, 1249541300, 1249541301, 1249540301, 1249540302, 1249540303, 0);
});
