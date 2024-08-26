// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //infinite hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(76943, 2044461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005102, 76945, 76943, 2044461980, 77900, 5, 78900, 78901, 78902, 78903, 78904, 78905, 78906, 78907, 78908, 78909, 9146);
    InitializeCommonEvent(0, 90005790, 0, 2044460180, 2044462181, 2044462182, 2044460700, 23, 2044462700, 2044462701, 0, 21019216, 0, 0);
    InitializeCommonEvent(0, 90005791, 2044460180, 2044462181, 2044462182, 2044460700);
    InitializeCommonEvent(0, 90005792, 2044460180, 2044462181, 2044462182, 2044460700, 0, 0);
    InitializeEvent(0, 2044462550, 2044460180, 2044462181, 2044462182, 2044460700, 2044462700, 2044462182, 0, 2044462400);
    InitializeCommonEvent(0, 90005780, 2044450800, 2044462164, 2044462165, 2044460730, 0, 2044462731, 2049449213, 1, 0);
    InitializeCommonEvent(0, 90005781, 2044450800, 2044462164, 2044462165, 2044460730);
    InitializeCommonEvent(0, 90005784, 2044462164, 2044452805, 2044460730, 2044452800, 2044462809, 0);
    InitializeCommonEvent(0, 90005785, 2044450800, 2044462164, 2044462165, 2044460730, 2044462730, 2044462300, 0);
    InitializeCommonEvent(0, 90005250, 2044460200, 2044462200, 0, 3005);
    InitializeCommonEvent(0, 90005501, 2044460510, 2044460511, 0, 2044461510, 2044461511, 2044461512, 2044460512);
    InitializeEvent(0, 2044462510, 0);
    InitializeCommonEvent(0, 90005638, 2044460500, 2044461500, 2044461501);
    InitializeCommonEvent(0, 90005774, 2044460180, 116100, 400614);
    InitializeCommonEvent(0, 90005706, 2044460710, 30011, 0);
    InitializeEvent(0, 2044460706, 2049449213, 2044450800);
});

$Event(2044460050, Default, function() {
    EndIf(ThisEventSlot());
});

$Event(2044462510, Default, function() {
    InitializeCommonEvent(0, 90005500, 2044460510, 2044460511, 0, 2044461510, 2044461511, 2044463511, 2044461512, 2044463512, 2044462511, 2044462512, 2044460512, 2044460513, 0);
});

$Event(2044462500, Restart, function() {
    if (EventFlag(2044460500)) {
        DisableAsset(2044461500);
        DisableAsset(2044461501);
        EndEvent();
    }
L0:
    EnableAssetInvunerability(2044461501);
    WaitFor(AssetDestroyed(2044461500, Equal, 1));
    DisableAssetInvunerability(2044461501);
    WaitFixedTimeRealFrames(1);
    RequestAssetDestruction(2044461501, 0);
    SetEventFlagID(2044460500, ON);
});

$Event(2044462550, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    flag = EventFlag(X0_4);
    onlineFlagChrArea &= PlayerIsInOwnWorld()
        && EventFlag(X4_4)
        && CharacterAIState(X12_4, AIStateType.Combat, NotEqual, 1);
    if (X20_4 == 0) {
        onlineFlagChrArea &= !EntityInRadiusOfEntity(10000, X16_4, 110, 1);
    } else {
        onlineFlagChrArea &= !InArea(10000, X20_4);
    }
    onlineFlagArea &= PlayerIsInOwnWorld() && EventFlag(X4_4);
    if (Signed(X24_4) != 2) {
        GotoIf(S0, Signed(X24_4) == 1);
        onlineFlagArea &= !EntityInRadiusOfEntity(10000, X16_4, 180, 1);
        Goto(S1);
S0:
        onlineFlagArea &= !EntityInRadiusOfEntity(10000, X16_4, 360, 1);
    } else {
        onlineFlagArea &= !EntityInRadiusOfEntity(10000, X16_4, 720, 1);
    }
S1:
    WaitFor(
        flag
            || onlineFlagChrArea
            || onlineFlagArea
            || (PlayerIsInOwnWorld() && EventFlag(X4_4) && InArea(10000, X28_4)));
    EndIf(EventFlag(X0_4));
    SendNPCSummonHome(X12_4);
    EndEvent();
    flag2 = !EventFlag(X8_4);
});

$Event(2044460705, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    EndIf(EventFlag(X4_4));
    EndIf(EventFlag(X8_4) || EventFlag(X12_4));
    SetEventFlagID(X0_4, ON);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4) || EventFlag(X12_4));
    SetEventFlagID(X0_4, OFF);
});

$Event(2044460706, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(X0_4, OFF);
    EndIf(EventFlag(X4_4));
    SetEventFlagID(X0_4, ON);
    WaitFor(EventFlag(X4_4));
    SetEventFlagID(X0_4, OFF);
});


