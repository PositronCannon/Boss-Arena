// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1034440000, 1034441950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 1034442200, 0);
    InitializeCommonEvent(0, 90005300, 1034440220, 1034440220, 40218, 0, 0);
    InitializeEvent(0, 1034440700, 1034440700, 930023, 3409);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1034440700, true);
    InitializeCommonEvent(0, 90005261, 1034440200, 1034442200, 1077936128, 1073741824, -1);
    InitializeCommonEvent(0, 90005211, 1034440200, 30002, 20002, 1034442200, 1077936128, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1034440201, 30002, 20002, 1034442200, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1034440202, 1034442200, 1077936128, 1065353216, -1);
    InitializeCommonEvent(0, 90005211, 1034440202, 30002, 20002, 1034442200, 1077936128, 1065353216, 0, 0, 0, 0);
});

$Event(1034440700, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (!EventFlag(X8_4)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(X8_4));
        RestartEvent();
    }
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    DisableCharacterGravity(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    WaitFor(!EventFlag(X8_4));
    RestartEvent();
});

$Event(1034442200, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, 1034442200);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    TriggerAISound(4020, 1034442200, TargetEntityType.Area);
    EndEvent();
});
