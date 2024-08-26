// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1049522820, 1049520800, 30004, 20004, 1049522800, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1049522825, 1049520800, 1049520800);
    InitializeCommonEvent(0, 90005870, 1049520800, 904770600, 16);
    InitializeCommonEvent(0, 90005860, 1049520800, 0, 1049520800, 0, 30505, 0);
    InitializeCommonEvent(0, 90005872, 1049520800, 16, 0);
    InitializeCommonEvent(0, 90005261, 1049520550, 1049522550, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005780, 1049520800, 1049522160, 1049522161, 1049520700, 20, 1049522700, 1042559209, 0, 0);
    InitializeCommonEvent(0, 90005781, 1049520800, 1049522160, 1049522161, 1049520700);
    InitializeCommonEvent(0, 90005783, 1049520800, 1049522160, 1049522161, 1049520700, 1049522701, 0, 0);
    InitializeEvent(0, 1049523700, 0);
    //init boss reward
    InitializeEvent(0, 1049529990, 0);
});

//generic boss event
$Event(1049529990, Default, function() {
    WaitFor(CharacterDead(1049520800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304221,1049304118,-1,1049304004,1049304947,1049304948,1049304949,1049304950,1049305635,1049305638,1049305640,1049305642,1049300221);
});

$Event(1049522820, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    if (X20_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    DisableCharacterAI(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, X12_4)
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X24_4 == 0 && X28_4 == 0 && X32_4 == 0)) {
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X32_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
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
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        WaitFixedTimeSeconds(X16_4);
        if (X20_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        EnableCharacterAI(X0_4);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X20_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(1049522825, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(CharacterBackreadStatus(X4_4) && EventFlag(1049522820));
    WaitFor(!EntityInRadiusOfEntity(10000, X4_4, 170, 1));
    ClearCharactersAITarget(X4_4);
    RequestCharacterAIReplan(X4_4);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

$Event(1049523700, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(AnyBatchEventFlags(4181, 4183));
    BatchSetNetworkconnectedEventFlags(1042559207, 1042559209, OFF);
    EndEvent();
});
