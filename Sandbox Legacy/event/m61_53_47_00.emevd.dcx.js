// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2053472400, 0);
    InitializeEvent(0, 2053472403, 0);
    InitializeCommonEvent(0, 90005200, 2053470210, 30002, 20002, 2053472210, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2053470211, 30002, 20002, 2053472210, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2053470212, 30002, 20002, 2053472210, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2053470213, 30002, 20002, 2053472210, 1061997773, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 2053470214, 30002, 20002, 2053472210, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2053470215, 30002, 20002, 1103626240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2053470216, 30002, 20002, 1103626240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2053470217, 30002, 20002, 1103626240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005221, 2053470204, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005221, 2053470207, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005221, 2053470218, 30003, 20003, 0, 0);
});

$Event(2053472400, Restart, function() {
    EndIf(!CharacterHasSpEffect(2053475200, 20011076));
    WaitFor(EventFlag(2053472301));
    GotoIf(S0, 
        CharacterBackreadStatus(2053470200)
            && !CharacterHasSpEffect(2053470200, 20011075)
            && !CharacterDead(2053470200));
    Goto(S1);
S0:
    SetEventFlagID(2053472200, ON);
    SetEventFlagID(2053472301, OFF);
    Goto(L0);
S1:
    GotoIf(S2, 
        CharacterBackreadStatus(2053470201)
            && !CharacterHasSpEffect(2053470201, 20011075)
            && !CharacterDead(2053470201));
    Goto(S3);
S2:
    SetEventFlagID(2053472201, ON);
    SetEventFlagID(2053472301, OFF);
    Goto(L0);
S3:
    GotoIf(S4, 
        CharacterBackreadStatus(2053470202)
            && !CharacterHasSpEffect(2053470202, 20011075)
            && !CharacterDead(2053470202));
    Goto(S5);
S4:
    SetEventFlagID(2053472202, ON);
    SetEventFlagID(2053472301, OFF);
    Goto(L0);
S5:
    GotoIf(S6, 
        CharacterBackreadStatus(2053470205)
            && !CharacterHasSpEffect(2053470205, 20011075)
            && !CharacterDead(2053470205));
    Goto(S7);
S6:
    SetEventFlagID(2053472205, ON);
    SetEventFlagID(2053472301, OFF);
    Goto(L0);
S7:
    GotoIf(S8, 
        CharacterBackreadStatus(2053470206)
            && !CharacterHasSpEffect(2053470206, 20011075)
            && !CharacterDead(2053470206));
    Goto(S9);
S8:
    SetEventFlagID(2053472206, ON);
    SetEventFlagID(2053472301, OFF);
    Goto(L0);
S9:
    GotoIf(S10, 
        CharacterBackreadStatus(2053470208)
            && !CharacterHasSpEffect(2053470208, 20011075)
            && !CharacterDead(2053470208));
    Goto(S11);
S10:
    SetEventFlagID(2053472208, ON);
    SetEventFlagID(2053472301, OFF);
    Goto(L0);
S11:
    WaitFixedTimeRealFrames(1);
L0:
    RestartEvent();
});

$Event(2053472403, Restart, function() {
    areaChr = (EntityInRadiusOfEntity(10000, 2053470200, 25, 1)
        && !CharacterDead(2053470200)
        && CharacterAIState(2053470200, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053470201, 25, 1)
            && !CharacterDead(2053470201)
            && CharacterAIState(2053470201, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053470202, 25, 1)
            && !CharacterDead(2053470202)
            && CharacterAIState(2053470202, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053470205, 25, 1)
            && !CharacterDead(2053470205)
            && CharacterAIState(2053470205, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053470206, 25, 1)
            && !CharacterDead(2053470206)
            && CharacterAIState(2053470206, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053470208, 25, 1)
            && !CharacterDead(2053470208)
            && CharacterAIState(2053470208, AIStateType.Combat));
    if (!areaChr) {
        SetEventFlagID(2053472303, ON);
    }
    if (areaChr) {
        SetEventFlagID(2053472303, OFF);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


