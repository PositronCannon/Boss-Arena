// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2045410000, 2045411950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005790, 0, 2045410180, 2045412181, 2045412182, 2045410700, 23, 2045412700, 2045412701, 0, 2045429293, 0, 0);
    InitializeCommonEvent(0, 90005791, 2045410180, 2045412181, 2045412182, 2045410700);
    InitializeCommonEvent(0, 90005792, 2045410180, 2045412181, 2045412182, 2045410700, 0, 0);
    InitializeCommonEvent(0, 90005793, 2045410180, 2045412181, 2045412182, 2045410700, 2045412700, 0, 0);
    InitializeCommonEvent(0, 90005774, 2045410180, 116401, 400645);
    InitializeCommonEvent(0, 90005557, 2045411680);
    InitializeCommonEvent(0, 90005557, 2045411681);
    InitializeCommonEvent(0, 90005557, 2045411682);
    InitializeCommonEvent(0, 90005557, 2045411683);
    InitializeCommonEvent(0, 90005557, 2045411684);
    InitializeCommonEvent(0, 90005557, 2045411685);
    InitializeCommonEvent(0, 90005557, 2045411686);
    InitializeCommonEvent(0, 90005557, 2045411687);
    InitializeCommonEvent(0, 90005557, 2045411688);
    InitializeCommonEvent(0, 90005556, 2045411689, 2045417900);
    InitializeCommonEvent(0, 90005639, 2045410500, 2045411500, 2045411501, 2045411502, 1073741824);
    InitializeCommonEvent(0, 90005766, 2045412181, 2045410700, 1120403456, 2045429277, 4963);
    InitializeCommonEvent(0, 90005767, 2045429280, 4380, 4383, 2045410700, 4901, 2045410701, 2045429297);
    InitializeCommonEvent(0, 90005777, 2045410701, 4963, 4383, 2045412181);
    InitializeCommonEvent(0, 90005774, 2045429297, 116401, 400645);
    InitializeCommonEvent(0, 90005757, 2045400700, 2045400701, 4385, 4953, 2045422710, 4383);
    InitializeCommonEvent(0, 90005759, 2045429280, 4385, 4963, 2045400700, 4953, 2045429293, 4950, 4956, 2045429281, 2045429282, 4901, 1065353216, 2045429343, 1106247680);
    InitializeCommonEvent(0, 90005778, 2045402700, 4953, 400753, 2045400700);
    InitializeCommonEvent(0, 90005779, 2045400700, 4953, 20016, 4385, 4383);
    InitializeCommonEvent(0, 90005744, 2045400700, 2045409200, 2045409200, 20015);
});

$Event(50, Default, function() {
    InitializeEvent(0, 2045412300, 2045410211, 2045415300, 30000, 20000, 1091567616);
    InitializeEvent(1, 2045412300, 2045410209, 2045415300, 30000, 20000, 1091567616);
    InitializeEvent(2, 2045412300, 2045410206, 2045415300, 30001, 20001, 1091567616);
    InitializeEvent(3, 2045412300, 2045410218, 2045415301, 30000, 20000, 1092616192);
    InitializeEvent(4, 2045412300, 2045410210, 2045415301, 30001, 20001, 1092616192);
    InitializeEvent(5, 2045412300, 2045410221, 2045415302, 30000, 20000, 1090519040);
    InitializeEvent(6, 2045412300, 2045410227, 2045415302, 30001, 20001, 1090519040);
    InitializeCommonEvent(0, 90005200, 2045410202, 30002, 20002, 2045412202, 0, 0, 0, 0, 0);
});

$Event(2045412300, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || CharacterAIState(X4_4, AIStateType.Combat, GreaterOrEqual, 1)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.BluePhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(10000, X4_4, X16_4, 1)));
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    EnableCharacterAI(X0_4);
    SetSpecialStandbyEndedFlag(X0_4, ON);
});


