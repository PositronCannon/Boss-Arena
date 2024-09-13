// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(76300, 1037511950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76314, 76300, 1037511980, 77300, 0, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    InitializeCommonEvent(0, 90005870, 1037510800, 904510600, 28);
    InitializeCommonEvent(0, 90005860, 1037510800, 0, 1037510800, 1, 30300, 0);
    InitializeEvent(0, 1037512208, 1037510208, 1037512208, 1084227584, 0, 20005);
    InitializeCommonEvent(0, 90005251, 1037510200, 1110704128, 0, 0);
    InitializeCommonEvent(0, 90005300, 1037510210, 1037510210, 40224, 0, 0);
    InitializeCommonEvent(0, 90005300, 1037510500, 1037510500, 40300, 0, 0);
    InitializeCommonEvent(0, 900005610, 1037511300, 100, 800, 39200514);
    InitializeCommonEvent(0, 900005610, 1037511301, 100, 800, 39200514);
    InitializeCommonEvent(0, 90005771, 1037510950, 1037512700);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1037512350, 1037510800);
    InitializeEvent(0, 1037512301, 1037510800);
});

$Event(1037512208, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    WaitFixedTimeSeconds(X12_4);
    ForceAnimationPlayback(X0_4, X16_4, true, false, false);
    EnableCharacterAI(X0_4);
});

$Event(1037512301, Restart, function(X0_4) {
    EndIf(EventFlag(1037510810));
    WaitFor(CharacterHasSpEffect(X0_4, 14887));
    SetEventFlagID(1037510810, ON);
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    EndEvent();
});

$Event(1037512350, Restart, function(X0_4) {
    if (!EventFlag(1037510810)) {
        if (!EventFlag(1037510800)) {
            if (!EventFlag(1041520820)) {
                DisableCharacter(X0_4);
                DisableCharacterCollision(X0_4);
                WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 1037512300));
                EnableCharacterFadeOnEnable(X0_4);
                EnableCharacter(X0_4);
                EnableCharacterCollision(X0_4);
                ForceAnimationPlayback(X0_4, 20019, false, false, false);
                EndEvent();
            }
        }
    }
L0:
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    EndEvent();
});
