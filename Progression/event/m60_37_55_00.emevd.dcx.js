// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    SetCharacterMaphit(0, false);
    InitializeCommonEvent(0, 90005261, 1037550200, 1037552200, 1092616192, 0, 0);
    InitializeCommonEvent(1, 90005261, 1037550201, 1037552200, 1092616192, 0, 0);
    InitializeEvent(0, 1037552200, 1037550200, 1037552200);
    InitializeEvent(1, 1037552200, 1037550201, 1037552200);
    InitializeCommonEvent(0, 90005261, 1037550205, 1037552205, 1092616192, 0, 0);
});

$Event(1037552200, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(10000, X4_4));
    SetSpEffect(X0_4, 8081);
    SetSpEffect(X0_4, 8082);
    WaitFor(
        !InArea(10000, X4_4)
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260));
    ClearSpEffect(X0_4, 8081);
    ClearSpEffect(X0_4, 8082);
    EndEvent();
});
