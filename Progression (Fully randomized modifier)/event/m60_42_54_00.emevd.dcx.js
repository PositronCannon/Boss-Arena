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
    RegisterLadder(1042540580, 1042540581, 1042541580);
    RegisterLadder(1042540582, 1042540583, 1042541582);
    RegisterLadder(1042540584, 1042540585, 1042541584);
    InitializeCommonEvent(0, 90005633, 580350, 580050, 1042540400, 30017, 20017, 1042541400, 1042541410);
    InitializeCommonEvent(0, 90005706, 1042540700, 30025, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042540700, true);
    InitializeCommonEvent(0, 90005250, 1042540200, 1042542200, 0, 3005);
    InitializeEvent(0, 1042542350, 1042540300, 1042542300, 1042545300);
    InitializeEvent(1, 1042542350, 1042540301, 1042542301, 1042545300);
    InitializeEvent(2, 1042542350, 1042540302, 1042542302, 1042545300);
    InitializeEvent(3, 1042542350, 1042540310, 1042542310, 1042545310);
    InitializeEvent(4, 1042542350, 1042540311, 1042542311, 1042545310);
    InitializeEvent(5, 1042542350, 1042540312, 1042542312, 1042545310);
    InitializeEvent(6, 1042542350, 1042540313, 1042542313, 1042545310);
    InitializeEvent(7, 1042542350, 1042540314, 1042542314, 1042545310);
    InitializeEvent(8, 1042542350, 1042540315, 1042542315, 1042545310);
    InitializeEvent(9, 1042542350, 1042540316, 1042542316, 1042545310);
    InitializeEvent(10, 1042542350, 1042540317, 1042542317, 1042545310);
    InitializeEvent(11, 1042542350, 1042540318, 1042542318, 1042545310);
    InitializeEvent(12, 1042542350, 1042540327, 1042542327, 1042545327);
    InitializeEvent(13, 1042542350, 1042540328, 1042542328, 1042545327);
    InitializeEvent(14, 1042542350, 1042540329, 1042542329, 1042545327);
    InitializeCommonEvent(0, 90005251, 1042540331, 1082130432, 0, 3004);
    InitializeEvent(15, 1042542350, 1042540338, 1042542338, 1042545338);
    InitializeEvent(16, 1042542350, 1042540339, 1042542339, 1042545338);
    InitializeEvent(17, 1042542350, 1042540303, 1042542303, 1042545303);
    InitializeEvent(18, 1042542350, 1042540304, 1042542304, 1042545303);
    InitializeEvent(19, 1042542350, 1042540305, 1042542305, 1042545303);
    InitializeCommonEvent(0, 90005200, 1042540651, 30004, 20004, 1042542651, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042540652, 30004, 20004, 1042542651, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1042540653, 30004, 20004, 1042542651, 0, 0, 0, 0, 0);
});

$Event(1042542350, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    if (ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 20018, false, false, false);
        WaitFixedTimeSeconds(1.6);
    }
L0:
    ForceAnimationPlayback(X0_4, 30008, true, false, false);
    DisableCharacterAI(X0_4);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterAIState(X8_4, AIStateType.Combat, GreaterOrEqual, 1)
            || (CharacterHasSpEffect(X0_4, 481)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90110)
                && !CharacterHasSpEffect(X0_4, 90160))
            || (CharacterHasSpEffect(X0_4, 482)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90120)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 483)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90140)
                && !CharacterHasSpEffect(X0_4, 90160)
                && !CharacterHasSpEffect(X0_4, 90161))
            || (CharacterHasSpEffect(X0_4, 484)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90130)
                && !CharacterHasSpEffect(X0_4, 90161)
                && !CharacterHasSpEffect(X0_4, 90162))
            || (CharacterHasSpEffect(X0_4, 487)
                && !CharacterHasSpEffect(X0_4, 90100)
                && !CharacterHasSpEffect(X0_4, 90150)
                && !CharacterHasSpEffect(X0_4, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(X0_4, 20008, false, false, false);
    EnableCharacterAI(X0_4);
    WaitFixedTimeSeconds(5);
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Normal) && InArea(X0_4, X4_4)) || CharacterDead(X0_4));
    RestartEvent();
});
