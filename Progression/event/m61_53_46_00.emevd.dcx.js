// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2053462400, 0);
    InitializeEvent(0, 2053462401, 0);
    InitializeEvent(0, 2053462405, 0);
    InitializeEvent(0, 2053462404, 0);
    InitializeCommonEvent(0, 90005201, 2053460209, 30002, 20002, 1103626240, 0, 0, 0, 0, 0);
    InitializeEvent(0, 2053462600, 0);
});

$Event(2053462400, Restart, function() {
    EndIf(!CharacterHasSpEffect(2053465200, 20011076));
    WaitFor(EventFlag(2053462301));
    GotoIf(S0, 
        CharacterBackreadStatus(2053460201)
            && !CharacterHasSpEffect(2053460201, 20011075)
            && !CharacterDead(2053460201));
    Goto(S1);
S0:
    SetEventFlagID(2053462201, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S1:
    GotoIf(S2, 
        CharacterBackreadStatus(2053460202)
            && !CharacterHasSpEffect(2053460202, 20011075)
            && !CharacterDead(2053460202));
    Goto(S3);
S2:
    SetEventFlagID(2053462202, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S3:
    GotoIf(S4, 
        CharacterBackreadStatus(2053460203)
            && !CharacterHasSpEffect(2053460203, 20011075)
            && !CharacterDead(2053460203));
    Goto(S5);
S4:
    SetEventFlagID(2053462203, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S5:
    GotoIf(S6, 
        CharacterBackreadStatus(2053460204)
            && !CharacterHasSpEffect(2053460204, 20011075)
            && !CharacterDead(2053460204));
    Goto(S7);
S6:
    SetEventFlagID(2053462204, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S7:
    GotoIf(S8, 
        CharacterBackreadStatus(2053460205)
            && !CharacterHasSpEffect(2053460205, 20011075)
            && !CharacterDead(2053460205));
    Goto(S9);
S8:
    SetEventFlagID(2053462205, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S9:
    GotoIf(S10, 
        CharacterBackreadStatus(2053460206)
            && !CharacterHasSpEffect(2053460206, 20011075)
            && !CharacterDead(2053460206));
    Goto(S11);
S10:
    SetEventFlagID(2053462206, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S11:
    GotoIf(S12, 
        CharacterBackreadStatus(2053460207)
            && !CharacterHasSpEffect(2053460207, 20011075)
            && !CharacterDead(2053460207));
    Goto(S13);
S12:
    SetEventFlagID(2053462207, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S13:
    GotoIf(S14, 
        CharacterBackreadStatus(2053460208)
            && !CharacterHasSpEffect(2053460208, 20011075)
            && !CharacterDead(2053460208));
    Goto(S15);
S14:
    SetEventFlagID(2053462208, ON);
    SetEventFlagID(2053462301, OFF);
    Goto(L0);
S15:
    SetEventFlagID(2053472301, ON);
    SetEventFlagID(2053462301, OFF);
    WaitFixedTimeRealFrames(1);
L0:
    RestartEvent();
});

$Event(2053462401, Restart, function() {
    WaitFor(
        CharacterHasSpEffect(10000, 20011090) && !(!EventFlag(2053462303) || !EventFlag(2053472303)));
    SetEventFlagID(2053462301, ON);
    WaitFor(!CharacterHasSpEffect(10000, 20011090));
    RestartEvent();
});

$Event(2053462404, Restart, function() {
    areaChr = (EntityInRadiusOfEntity(10000, 2053460201, 25, 1)
        && !CharacterDead(2053460201)
        && CharacterAIState(2053460201, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460202, 25, 1)
            && !CharacterDead(2053460202)
            && CharacterAIState(2053460202, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460203, 25, 1)
            && !CharacterDead(2053460203)
            && CharacterAIState(2053460203, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460204, 25, 1)
            && !CharacterDead(2053460204)
            && CharacterAIState(2053460204, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460205, 25, 1)
            && !CharacterDead(2053460205)
            && CharacterAIState(2053460205, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460206, 25, 1)
            && !CharacterDead(2053460206)
            && CharacterAIState(2053460206, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460207, 25, 1)
            && !CharacterDead(2053460207)
            && CharacterAIState(2053460207, AIStateType.Combat))
        || (EntityInRadiusOfEntity(10000, 2053460208, 25, 1)
            && !CharacterDead(2053460208)
            && CharacterAIState(2053460208, AIStateType.Combat));
    if (!areaChr) {
        SetEventFlagID(2053462303, ON);
    }
    if (areaChr) {
        SetEventFlagID(2053462303, OFF);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2053462405, Restart, function() {
    WaitFor(
        EventFlag(2053472200)
            || EventFlag(2053472201)
            || EventFlag(2053472202)
            || EventFlag(2053472205)
            || EventFlag(2053472206)
            || EventFlag(2053472208)
            || EventFlag(2053462201)
            || EventFlag(2053462202)
            || EventFlag(2053462203)
            || EventFlag(2053462204)
            || EventFlag(2053462205)
            || EventFlag(2053462206)
            || EventFlag(2053462207)
            || EventFlag(2053462208));
    if (EventFlag(2053472200)) {
        SetNetworkUpdateAuthority(2053470200, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470200, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470200, 20011073);
    } else if (EventFlag(2053472201)) {
        SetNetworkUpdateAuthority(2053470201, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470201, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470201, 20011073);
    } else if (EventFlag(2053472202)) {
        SetNetworkUpdateAuthority(2053470202, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470202, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470202, 20011073);
    } else if (EventFlag(2053472205)) {
        SetNetworkUpdateAuthority(2053470205, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470205, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470205, 20011073);
    } else if (EventFlag(2053472206)) {
        SetNetworkUpdateAuthority(2053470206, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470206, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470206, 20011073);
    } else if (EventFlag(2053472208)) {
        SetNetworkUpdateAuthority(2053470208, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053470208, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053470208, 20011073);
    } else if (EventFlag(2053462201)) {
        SetNetworkUpdateAuthority(2053460201, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460201, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460201, 20011073);
    } else if (EventFlag(2053462202)) {
        SetNetworkUpdateAuthority(2053460202, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460202, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460202, 20011073);
    } else if (EventFlag(2053462203)) {
        SetNetworkUpdateAuthority(2053460203, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460203, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460203, 20011073);
    } else if (EventFlag(2053462204)) {
        SetNetworkUpdateAuthority(2053460204, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460204, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460204, 20011073);
    } else if (EventFlag(2053462205)) {
        SetNetworkUpdateAuthority(2053460205, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460205, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460205, 20011073);
    } else if (EventFlag(2053462206)) {
        SetNetworkUpdateAuthority(2053460206, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460206, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460206, 20011073);
    } else if (EventFlag(2053462207)) {
        SetNetworkUpdateAuthority(2053460207, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460207, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460207, 20011073);
    } else if (EventFlag(2053462208)) {
        SetNetworkUpdateAuthority(2053460208, AuthorityLevel.Forced);
        SetNetworkUpdateRate(2053460208, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
        SetSpEffect(2053460208, 20011073);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(0.2);
    SetNetworkUpdateRate(2053470200, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470201, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470202, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470205, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470206, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053470208, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460201, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460202, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460203, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460204, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460205, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460206, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460207, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(2053460208, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateAuthority(2053470200, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470201, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470202, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470205, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470206, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053470208, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460201, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460202, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460203, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460204, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460205, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460206, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460207, AuthorityLevel.Normal);
    SetNetworkUpdateAuthority(2053460208, AuthorityLevel.Normal);
    SetEventFlagID(2053472200, OFF);
    SetEventFlagID(2053472201, OFF);
    SetEventFlagID(2053472202, OFF);
    SetEventFlagID(2053472205, OFF);
    SetEventFlagID(2053472206, OFF);
    SetEventFlagID(2053472208, OFF);
    SetEventFlagID(2053462201, OFF);
    SetEventFlagID(2053462202, OFF);
    SetEventFlagID(2053462203, OFF);
    SetEventFlagID(2053462204, OFF);
    SetEventFlagID(2053462205, OFF);
    SetEventFlagID(2053462206, OFF);
    SetEventFlagID(2053462207, OFF);
    SetEventFlagID(2053462208, OFF);
    RestartEvent();
});

$Event(2053462600, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(2053460600)) {
        DisableObjAct(2053461600, 52407);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(2053460600);
        EndEvent();
    }
    if (PlayerHasItem(ItemType.Goods, 2008008)) {
        WaitFor(
            PlayerIsInOwnWorld()
                && PlayerHasItem(ItemType.Goods, 2008008)
                && ObjActEventFlag(2053463600));
        SetNetworkconnectedEventFlagID(2053460600, ON);
        WaitFixedTimeSeconds(10);
        AwardItemsIncludingClients(2053460600);
        EndEvent();
    }
L10:
    DisableObjAct(2053461600, 52407);
    WaitFor(PlayerHasItem(ItemType.Goods, 2008008));
    EnableObjAct(2053461600, 52407);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});


