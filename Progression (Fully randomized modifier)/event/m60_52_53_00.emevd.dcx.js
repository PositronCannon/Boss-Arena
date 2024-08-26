// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1052530000, 1052531950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76508, 1052531980, 77500, 7, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeEvent(0, 1052532500, 0);
    InitializeEvent(0, 1052532510, 0);
    InitializeCommonEvent(0, 90005771, 1052530950, 1052532710);
    InitializeEvent(0, 1052533700, 0);
    InitializeEvent(0, 1052533701, 0);
});

$Event(1052532500, Restart, function() {
    if (EventFlag(1252520800)) {
        EndEvent();
    }
L0:
    SetSpEffect(1052530100, 9531);
    if (!EventFlag(1252520801)) {
        WaitFor(EventFlag(1252520801));
        GotoIf(L2, mainGroupAbuse);
    }
L1:
    WaitFor(
        HasDamageType(1052520801, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(1052520801, 436)
            || CharacterHasStateInfo(1052520801, 2)
            || CharacterHasStateInfo(1052520801, 5)
            || CharacterHasStateInfo(1052520801, 6)
            || CharacterHasStateInfo(1052520801, 260)
            || EntityInRadiusOfEntity(1052520801, 10000, 120, 1)
            || ((InArea(10000, 1052532800) || InArea(10000, 1052532801)) && EventFlag(1252522805)));
L2:
    SetSpEffect(1052530100, 9532);
    EndEvent();
});

$Event(1052532510, Restart, function() {
    EndIf(EventFlag(1254560800));
    SetCharacterTalkRange(1052530100, 300);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005781, 1252520800, 1252532160, 1252532161, 1052530700);
    InitializeCommonEvent(0, 90005783, 1252520800, 1252532160, 1252532161, 1052530700, 1052532700, 1052532162, 2);
    InitializeCommonEvent(0, 90005781, 1252520800, 1252532164, 1252532165, 1052530701);
    InitializeCommonEvent(0, 90005783, 1252520800, 1252532164, 1252532165, 1052530701, 1052532701, 1052532162, 2);
    InitializeEvent(0, 1052532400, 1252520800, 1252532160, 1252532161, 1052530700, 1052532700, 1035539209, 0, 1252532400, 1252532401);
    InitializeEvent(1, 1052532400, 1252520800, 1252532164, 1252532165, 1052530701, 1052532701, 1035539209, 0, 1252532401, 1252532400);
});

$Event(1052532400, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_1, X28_4, X32_4) {
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X12_4, AuthorityLevel.Forced);
    }
    EndIf(EventFlag(X0_4));
    if (0 != X20_4) {
        flagOnlineChrArea &= EventFlag(X20_4);
    }
    flagOnlineChrArea &= PlayerIsInOwnWorld()
        && CharacterBackreadStatus(X12_4)
        && EntityInRadiusOfEntity(10000, X12_4, 10, 1);
    WaitFor(flagOnlineChrArea);
    EndIf(EventFlag(X32_4));
    SetEventFlagID(X28_4, ON);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1252520804, ON);
    }
L1:
    PlaceNPCSummonSign(SummonSignType.NPCWhiteSign, X12_4, X16_4, X4_4, X8_4, X24_1);
});

$Event(1052533700, Restart, function() {
    EndIf(EventFlag(1052520800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1052520800) && (EventFlag(1252532160) || EventFlag(1252532164)));
    SetNetworkconnectedEventFlagID(13009259, ON);
    EndEvent();
});

$Event(1052533701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(AnyBatchEventFlags(3661, 3663));
    SetNetworkconnectedEventFlagID(1035539209, OFF);
    EndEvent();
});
