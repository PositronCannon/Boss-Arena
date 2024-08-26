// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2050412200, 2050410200, 2050410300);
    InitializeEvent(0, 2050412201, 2050410200);
    InitializeEvent(0, 2050412202, 2050410200);
    InitializeEvent(0, 2050412203, 2050410200);
    InitializeCommonEvent(0, 90005301, 2050410200, 2050410200, 2050410700, 0, 0);
});

$Event(2050412200, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011451) && CharacterHasSpEffect(X0_4, 20011450));
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(X0_4, X4_4);
    ClearSpEffect(X0_4, 20011450);
    RestartEvent();
});

$Event(2050412201, Restart, function(X0_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    SetSpEffect(X0_4, 20011470);
    SetSpEffect(X0_4, 19690);
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(CharacterHasSpEffect(X0_4, 20011471));
    ClearSpEffect(X0_4, 20011470);
    CreateNPCPart(X0_4, 10, NPCPartType.Part10, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 10, 109, 109, -1, 113, -1);
    EnableCharacterHPBarDisplay(X0_4);
    SetSpEffect(X0_4, 20011472);
});

$Event(2050412202, Restart, function(X0_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    WaitFor(CharacterHasSpEffect(X0_4, 20011453) || CharacterHasSpEffect(X0_4, 20011451));
    if (!CharacterHasSpEffect(X0_4, 20011451)) {
        SetSpEffect(10000, 20011454);
    } else {
L0:
        SetSpEffect(10000, 20011455);
    }
L1:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2050412203, Restart, function(X0_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    WaitFor(
        CharacterAIState(X0_4, AIStateType.PassiveAlert)
            || CharacterAIState(X0_4, AIStateType.ActiveAlert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    chr = CharacterAIState(X0_4, AIStateType.PassiveAlert);
    chr2 = CharacterAIState(X0_4, AIStateType.ActiveAlert);
    chr3 = CharacterAIState(X0_4, AIStateType.Combat);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    SetSpEffect(X0_4, 20011458);
    SetSpEffect(X0_4, 20011474);
    Goto(L20);
L1:
    SetSpEffect(X0_4, 20011459);
    Goto(L20);
    SetSpEffect(X0_4, 20011474);
L2:
    SetSpEffect(X0_4, 20011460);
    SetSpEffect(X0_4, 20011475);
L20:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});


