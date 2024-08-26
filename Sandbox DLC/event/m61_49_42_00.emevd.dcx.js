// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005261, 2049420200, 2049422200, 1110704128, 0, -1);
    InitializeEvent(0, 2049422200, 2049420200, 2049420300);
    InitializeEvent(0, 2049422201, 2049420200);
    InitializeEvent(0, 2049422202, 2049420200);
    InitializeEvent(0, 2049422203, 2049420200);
    InitializeCommonEvent(0, 90005301, 2049420200, 2049420200, 2049420700, 0, 0);
    InitializeEvent(1, 2049422200, 2049420202, 2049420302);
    InitializeEvent(1, 2049422201, 2049420202);
    InitializeEvent(1, 2049422202, 2049420202);
    InitializeEvent(1, 2049422203, 2049420202);
    InitializeCommonEvent(0, 90005301, 2049420202, 2049420202, 2049420720, 0, 0);
    InitializeCommonEvent(0, 90005638, 2049420600, 2049421600, 2049421601);
    InitializeEvent(0, 2049422500, 2049421550, 2049422550);
    InitializeEvent(1, 2049422500, 2049421551, 2049422551);
    InitializeEvent(2, 2049422500, 2049421552, 2049422552);
    InitializeEvent(3, 2049422500, 2049421553, 2049422553);
    InitializeEvent(4, 2049422500, 2049421554, 2049422554);
    InitializeEvent(6, 2049422500, 2049421556, 2049422556);
    InitializeEvent(7, 2049422500, 2049421557, 2049422557);
    InitializeEvent(8, 2049422500, 2049421558, 2049422558);
    InitializeEvent(9, 2049422500, 2049421559, 2049422559);
    InitializeEvent(10, 2049422500, 2049421560, 2049422560);
    InitializeEvent(11, 2049422500, 2049421561, 2049422561);
    InitializeEvent(12, 2049422500, 2049421562, 2049422562);
    InitializeEvent(13, 2049422500, 2049421563, 2049422563);
    InitializeEvent(14, 2049422500, 2049421564, 2049422564);
    InitializeCommonEvent(0, 90005706, 2049420700, 30011, 2049422700);
    InitializeEvent(0, 2049420700, 2049421700, 2049420700);
});

$Event(2049422200, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011451) && CharacterHasSpEffect(X0_4, 20011450));
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(X0_4, X4_4);
    ClearSpEffect(X0_4, 20011450);
    RestartEvent();
});

$Event(2049422201, Restart, function(X0_4) {
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

$Event(2049422202, Restart, function(X0_4) {
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

$Event(2049422203, Restart, function(X0_4) {
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

$Event(2049422500, Restart, function(X0_4, X4_4) {
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

$Event(2049420700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EnableAssetInvunerability(X0_4);
    WarpAssetToCharacter(X0_4, X4_4, -1);
    EndEvent();
});


