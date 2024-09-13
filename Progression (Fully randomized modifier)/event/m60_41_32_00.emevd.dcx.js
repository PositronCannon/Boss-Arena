// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1041320000, 1041321950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005724, 1041320290, 1041320290, 70000, 0, 1, 1041325291);
    InitializeCommonEvent(0, 90005722, 1041320290, 1041320291);
    InitializeCommonEvent(0, 90005720, 1041320290, 1041320292, 10961, 181);
    InitializeCommonEvent(0, 90005720, 1041320290, 1041320293, 10961, 182);
    InitializeCommonEvent(0, 90005721, 1041320290, 1041320292);
    InitializeCommonEvent(0, 90005721, 1041320290, 1041320293);
    InitializeCommonEvent(0, 90005723, 1041320290);
    InitializeCommonEvent(0, 90005920, 1041320900, 1041321900, 1041323900);
    InitializeCommonEvent(0, 90005261, 1041329200, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005261, 1041329201, 1041322200, 1084227584, 1073741824, 1701);
    InitializeCommonEvent(0, 90005261, 1041329202, 1041322200, 1084227584, 1065353216, 1702);
    InitializeCommonEvent(0, 90005261, 1041329203, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005261, 1041329204, 1041322200, 1084227584, 1073741824, 1702);
    InitializeCommonEvent(0, 90005261, 1041329205, 1041322200, 1084227584, 1065353216, 1702);
    InitializeCommonEvent(0, 90005261, 1041329206, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005725, 4745, 4746, 4748, 1041329205, 1041320700, 1041320701, 1041326700);
    InitializeCommonEvent(0, 90005703, 1041320700, 4746, 4747, 1041329206, 4746, 4745, 4749, 0);
    InitializeCommonEvent(0, 90005704, 1041320700, 4746, 4745, 1041329206, 3);
    InitializeCommonEvent(0, 90005702, 1041320700, 4748, 4745, 4749);
    InitializeCommonEvent(0, 90005703, 1041320701, 4746, 4747, 1041329207, 4746, 4745, 4749, 0);
    InitializeCommonEvent(0, 90005704, 1041320701, 4746, 4745, 1041329207, 3);
    InitializeCommonEvent(0, 90005728, 1041320701, 1041322706, 1041322707);
    InitializeCommonEvent(0, 90005727, 4746, 1041320700, 1041320701, 4745, 4748);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041320700, true);
    SetCharacterBackreadState(1041320701, true);
});

$Event(1041320300, Restart, function() {
    ForceCharacterTreasure(1041320360);
    WaitFor(PlayerIsInOwnWorld() && !EventFlag(1041320321) && InArea(10000, 1041322350));
    SetEventFlagID(1041322320, ON);
});

$Event(1041320301, Restart, function() {
    WaitFor(PlayerIsInOwnWorld() && EventFlag(1041322320) && !InArea(10000, 1041322350));
    DisableCharacter(1041320350);
    DisableCharacterCollision(1041320350);
    SetEventFlagID(1041320321, ON);
    SetEventFlagID(1041322320, OFF);
});
