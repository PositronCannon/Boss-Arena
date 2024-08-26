// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2050420000, 2050421950, 0, 0, 0, 5);
    InitializeEvent(0, 2050422200, 2050420200, 2050420300);
    InitializeEvent(0, 2050422201, 2050420200);
    InitializeEvent(0, 2050422202, 2050420200);
    InitializeEvent(0, 2050422203, 2050420200);
    InitializeCommonEvent(0, 90005301, 2050420200, 2050420200, 2050420700, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050420201, 2050422201, 1056964608, 0);
    InitializeEvent(0, 2050422500, 2050421550, 2050422550);
    InitializeEvent(1, 2050422500, 2050421551, 2050422551);
    InitializeEvent(2, 2050422500, 2050421552, 2050422552);
    InitializeEvent(3, 2050422500, 2050421553, 2050422553);
    InitializeEvent(4, 2050422500, 2050421554, 2050422554);
    InitializeEvent(5, 2050422500, 2050421555, 2050422555);
    InitializeEvent(6, 2050422500, 2050421556, 2050422556);
    InitializeEvent(7, 2050422500, 2050421557, 2050422557);
    InitializeEvent(8, 2050422500, 2050421558, 2050422558);
    InitializeEvent(9, 2050422500, 2050421559, 2050422559);
    InitializeEvent(10, 2050422500, 2050421560, 2050422560);
    InitializeEvent(11, 2050422500, 2050421561, 2050422561);
    InitializeEvent(12, 2050422500, 2050421562, 2050422562);
    InitializeEvent(13, 2050422500, 2050421563, 2050422563);
    InitializeEvent(14, 2050422500, 2050421564, 2050422564);
    InitializeEvent(15, 2050422500, 2050421565, 2050422565);
    InitializeEvent(16, 2050422500, 2050421566, 2050422566);
    InitializeEvent(17, 2050422500, 2050421567, 2050422567);
    InitializeEvent(18, 2050422500, 2050421568, 2050422568);
    InitializeEvent(19, 2050422500, 2050421569, 2050422569);
    InitializeEvent(20, 2050422500, 2050421570, 2050422570);
    InitializeEvent(21, 2050422500, 2050421571, 2050422571);
    InitializeEvent(22, 2050422500, 2050421572, 2050422572);
    InitializeEvent(23, 2050422500, 2050421573, 2050422573);
});

$Event(2050422200, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011451) && CharacterHasSpEffect(X0_4, 20011450));
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(X0_4, X4_4);
    ClearSpEffect(X0_4, 20011450);
    RestartEvent();
});

$Event(2050422201, Restart, function(X0_4) {
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

$Event(2050422202, Restart, function(X0_4) {
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

$Event(2050422203, Restart, function(X0_4) {
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

$Event(2050422500, Restart, function(X0_4, X4_4) {
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || (InArea(10000, X4_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(X0_4, SoundType.EnvironmentalSound, 610200888);
    SpawnOneshotSFX(TargetEntityType.Asset, X0_4, 100, 861221);
    TriggerAISound(8000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(1.5);
    TriggerAISound(8000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


