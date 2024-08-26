// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2047430000, 2047431950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005301, 2047430300, 2047430300, 2047430980, 0, 0);
    InitializeCommonEvent(0, 90005261, 2047430203, 2047432203, 1092616192, 1065353216, 0);
    InitializeCommonEvent(0, 90005261, 2047430212, 2047432203, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 2047430213, 2047432203, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 2047430217, 2047432203, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005261, 2047430218, 2047432203, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047430300, 30002, 20002, 2047432300, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 2047430214, 2047432203, 0, 0);
    InitializeCommonEvent(0, 90005250, 2047430215, 2047432203, 0, 0);
    InitializeCommonEvent(0, 90005250, 2047430216, 2047432203, 0, 0);
    InitializeEvent(0, 2047432222, 2047435201, 2047432201);
    InitializeEvent(0, 2047432240, 2047435202, 2047432202);
});

$Event(2047432222, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 90020);
    ClearSpEffect(X0_4, 5650);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(2047432222));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 90020);
    SetSpEffect(X0_4, 5650);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(2047432222, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
});

$Event(2047432240, Restart, function(X0_4, X4_4) {
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 90020);
    ClearSpEffect(X0_4, 5650);
    SetSpEffect(X0_4, 4802);
    EndIf(EventFlag(2047432240));
    SetSpEffect(X0_4, 4800);
    SetSpEffect(X0_4, 90020);
    SetSpEffect(X0_4, 5650);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(X0_4, 10000, DamageType.Unspecified)
                || HasDamageType(X0_4, 35000, DamageType.Unspecified)
                || HasDamageType(35000, X0_4, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, X0_4, 10, 1)
                || EntityInRadiusOfEntity(35000, X0_4, 10, 1)
                || InArea(10000, X4_4)
                || InArea(35000, X4_4)));
    SetNetworkconnectedEventFlagID(2047432240, ON);
    ClearSpEffect(X0_4, 4800);
    ClearSpEffect(X0_4, 5650);
});

$Event(2047432250, Restart, function(X0_4) {
    SetSpEffect(X0_4, 20007030);
});


