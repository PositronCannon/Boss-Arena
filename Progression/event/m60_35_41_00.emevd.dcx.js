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
    InitializeCommonEvent(0, 90005525, 1035410612, 1035411612);
    InitializeCommonEvent(0, 90005525, 1035410611, 1035411611);
    InitializeCommonEvent(0, 90005620, 1035410570, 1035411570, 1035411571, 0, 1035412570, 1035412571, 1035412572);
    InitializeCommonEvent(0, 90005621, 1035410570, 1035411573);
    InitializeEvent(0, 1035412610, 1035410610, 1035410610);
    InitializeEvent(0, 1035412611, 1035410610, 1035410610);
    InitializeCommonEvent(0, 90005251, 1035410610, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1035410610, 1035410610, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1035410200, 1035412200, 1065353216, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1035410201, 1035412200, 1065353216, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1035410202, 1035412200, 1065353216, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1035410203, 1035412203, 1065353216, 0, 1705);
    InitializeCommonEvent(0, 90005261, 1035410204, 1035412203, 1065353216, 1073741824, 1705);
    InitializeCommonEvent(0, 90005261, 1035410205, 1035412203, 1065353216, 1056964608, 1705);
    InitializeCommonEvent(0, 90005261, 1035410206, 1035412203, 1065353216, 1065353216, 1705);
    InitializeCommonEvent(0, 90005261, 1035410340, 1035412340, 1065353216, 0, 1700);
    InitializeCommonEvent(0, 90005261, 1035410350, 1035412350, 1065353216, 0, 1700);
});

$Event(1035412610, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    DisableCharacter(X4_4);
    DisableCharacterCollision(X4_4);
    if (!PlayerIsInOwnWorld()) {
        EnableCharacterInvincibility(X4_4);
    }
    WaitFor(EventFlag(1034432616));
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    EnableCharacterImmortality(X4_4);
    DisableCharacterHPBarDisplay(X4_4);
});

$Event(1035412611, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(HasDamageType(X4_4, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 20008, false, false, false);
    SetEventFlagID(X0_4, ON);
});
