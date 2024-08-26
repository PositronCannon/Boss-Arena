// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005261, 2050390200, 2050392200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 2050390205, 2050392200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 2050390206, 2050392200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 2050390207, 2050392200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 2050390208, 2050392200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 2050390209, 2050392200, 1065353216, 0, 0);
    InitializeCommonEvent(0, 90005261, 2050390210, 2050392200, 1065353216, 0, 0);
    InitializeEvent(0, 2050392400, 0);
    InitializeEvent(0, 2050392401, 0);
    InitializeEvent(0, 2050392405, 0);
    InitializeEvent(0, 2050392404, 0);
});

$Event(2050392400, Restart, function() {
    EndIf(!CharacterHasSpEffect(2050395200, 20011076));
    WaitFor(EventFlag(2050392301));
    GotoIf(S0, 
        CharacterBackreadStatus(2050390205)
            && !CharacterHasSpEffect(2050390205, 20011075)
            && !CharacterDead(2050390205));
    Goto(S1);
S0:
    SetEventFlagID(2050392205, ON);
    SetEventFlagID(2050392301, OFF);
    Goto(L0);
S1:
    GotoIf(S2, 
        CharacterBackreadStatus(2050390206)
            && !CharacterHasSpEffect(2050390206, 20011075)
            && !CharacterDead(2050390206));
    Goto(S3);
S2:
    SetEventFlagID(2050392206, ON);
    SetEventFlagID(2050392301, OFF);
    Goto(L0);
S3:
    GotoIf(S4, 
        CharacterBackreadStatus(2050390207)
            && !CharacterHasSpEffect(2050390207, 20011075)
            && !CharacterDead(2050390207));
    Goto(S5);
S4:
    SetEventFlagID(2050392207, ON);
    SetEventFlagID(2050392301, OFF);
    Goto(L0);
S5:
    GotoIf(S6, 
        CharacterBackreadStatus(2050390208)
            && !CharacterHasSpEffect(2050390208, 20011075)
            && !CharacterDead(2050390208));
    Goto(S7);
S6:
    SetEventFlagID(2050392208, ON);
    SetEventFlagID(2050392301, OFF);
    Goto(L0);
S7:
    SetEventFlagID(2050392301, ON);
    SetEventFlagID(2050392301, OFF);
    WaitFixedTimeRealFrames(1);
L0:
    RestartEvent();
});

$Event(2050392401, Restart, function() {
    WaitFor(CharacterHasSpEffect(10000, 20011090) && EventFlag(2050392303));
    SetEventFlagID(2050392301, ON);
    WaitFor(!CharacterHasSpEffect(10000, 20011090));
    RestartEvent();
});

$Event(2050392404, Restart, function() {
    areaChr = (EntityInRadiusOfEntity(10000, 2050390205, 25, 1)
        && !CharacterDead(2050390205)
        && CharacterAIState(2050390205, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2050390206, 25, 1)
            && !CharacterDead(2050390206)
            && CharacterAIState(2050390206, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2050390207, 25, 1)
            && !CharacterDead(2050390207)
            && CharacterAIState(2050390207, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2050390208, 25, 1)
            && !CharacterDead(2050390208)
            && CharacterAIState(2050390208, AIStateType.Combat));
    if (!areaChr) {
        SetEventFlagID(2050392303, ON);
    }
    if (areaChr) {
        SetEventFlagID(2050392303, OFF);
    }
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

$Event(2050392405, Restart, function() {
    WaitFor(
        EventFlag(2050392205)
            || EventFlag(2050392206)
            || EventFlag(2050392207)
            || EventFlag(2050392208));
    if (EventFlag(2050392205)) {
        SetNetworkUpdateAuthority(2050390205, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2050390205, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2050390205, 20011073);
    } else if (EventFlag(2050392206)) {
        SetNetworkUpdateAuthority(2050390206, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2050390206, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2050390206, 20011073);
    } else if (EventFlag(2050392207)) {
        SetNetworkUpdateAuthority(2050390207, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2050390207, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2050390207, 20011073);
    } else if (EventFlag(2050392208)) {
        SetNetworkUpdateAuthority(2050390208, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2050390208, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2050390208, 20011073);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(0.2);
    SetNetworkUpdateRate(2050390205, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2050390206, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2050390207, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2050390208, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateAuthority(2050390205, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2050390206, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2050390207, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2050390208, AuthorityLevel.Normal);
    SetEventFlagID(2050392205, OFF);
    SetEventFlagID(2050392206, OFF);
    SetEventFlagID(2050392207, OFF);
    SetEventFlagID(2050392208, OFF);
    RestartEvent();
});


