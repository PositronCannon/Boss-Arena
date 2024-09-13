// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    ConnectCharacterToCaravan(1041550400, 1041552000);
    ConnectCharacterToCaravan(1041550401, 1041552000);
    ConnectCharacterToCaravan(1041550402, 1041552000);
    ConnectCharacterToCaravan(1041550403, 1041552000);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1041552400, 1041550400);
    InitializeEvent(1, 1041552400, 1041550401);
    InitializeEvent(2, 1041552400, 1041550402);
    InitializeEvent(3, 1041552400, 1041550406);
    InitializeEvent(4, 1041552400, 1041550408);
    InitializeEvent(5, 1041552400, 1041550409);
    InitializeCommonEvent(0, 90005201, 1041550301, 30001, 20001, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041550351, 30000, 20000, 1041552351, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1041550352, 1041552352, 0, 3000);
    InitializeEvent(0, 1041552350, 1041550200, 1041552200, 1041555200);
    InitializeEvent(1, 1041552350, 1041550201, 1041552201, 1041555200);
    InitializeEvent(2, 1041552350, 1041550202, 1041552202, 1041555200);
    InitializeEvent(3, 1041552350, 1041550203, 1041552203, 1041555200);
    InitializeEvent(4, 1041552350, 1041550204, 1041552204, 1041555200);
    InitializeEvent(5, 1041552350, 1041550205, 1041552205, 1041555200);
    InitializeCommonEvent(0, 90005200, 1041550250, 30001, 20001, 1041552250, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041550251, 30001, 20001, 1041552250, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041550252, 30001, 20001, 1041552250, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041550253, 30001, 20001, 1041552250, 1063675494, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041550254, 30001, 20001, 1041552250, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041550255, 30001, 20001, 1041552250, 1061997773, 0, 0, 0, 0);
});

$Event(1041552350, Restart, function(X0_4, X4_4, X8_4) {
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

$Event(1041552400, Restart, function(X0_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, 30012, true, false, false);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
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
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    EnableCharacterAI(X0_4);
});
