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
    InitializeCommonEvent(0, 90005220, 1048560210, 30004, 20004, 0, 0, 1, 1);
    InitializeEvent(2, 1048562350, 1048560352, 1048560372);
    InitializeEvent(5, 1048562350, 1048560355, 1048560374);
    InitializeCommonEvent(0, 90005790, 0, 1048560180, 1048562181, 1048562182, 1048560700, 22, 1048562180, 1048562181, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 1048560180, 1048562181, 1048562182, 1048560700);
    InitializeCommonEvent(0, 90005792, 1048560180, 1048562181, 1048562182, 1048560700, 1048560800, 0);
    InitializeCommonEvent(0, 90005793, 1048560180, 1048562181, 1048562182, 1048560700, 1048562180, 1048562182, 0);
});

$Event(1048562350, Restart, function(X0_4, X4_4) {
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

$Event(100, Default, function() {
    InitializeCommonEvent(0, 90005300, 1148560200, 1148560200, 40524, 0, 0);
});
