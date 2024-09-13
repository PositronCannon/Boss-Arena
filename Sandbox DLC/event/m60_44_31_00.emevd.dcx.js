// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1044312200, 1044310200, 1044312200);
    InitializeEvent(1, 1044312200, 1044310201, 1044312200);
    InitializeEvent(2, 1044312200, 1044310202, 1044312200);
    InitializeEvent(3, 1044312200, 1044310203, 1044312200);
    InitializeEvent(0, 1044312340, 0);
    InitializeCommonEvent(0, 90005300, 1044310350, 1044310350, 0, 0, 0);
    InitializeCommonEvent(0, 90005550, 1044310200, 1044311200, 44313200);
    InitializeCommonEvent(0, 90005631, 1044311640, 61012);
});

$Event(1044312200, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(InArea(10000, X4_4));
    SetSpEffect(X0_4, 14200);
});

$Event(1044312210, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1044312340, Restart, function() {
    EndIf(EventFlagState(ON, TargetEventFlagType.EventIDSlotNumber, 1044310200));
    DisableCharacterAI(1044310340);
    areaChrSp = EntityInRadiusOfEntity(10000, 1044310340, 0, 1)
        && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom));
    WaitFor(
        HasDamageType(1044310340, 0, DamageType.Unspecified) || EventFlag(1044310200) || areaChrSp);
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 1044310200, ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(0);
        if (Signed(1700) != -1) {
            ForceAnimationPlayback(1044310340, 1700, true, false, false);
        }
    }
L1:
    EnableCharacterAI(1044310340);
});

$Event(1044312350, Restart, function() {
    EndIf(EventFlag(1044310350));
    DisableCharacterHPBarDisplay(1044310350);
    SetSpEffect(1044310350, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1044310350, 12189);
    EnableCharacterHPBarDisplay(1044310350);
});

$Event(250, Default, function() {
    InitializeCommonEvent(0, 90005485, 1044310350);
    InitializeCommonEvent(0, 90005251, 1044310350, 1135214592, 0, -1);
    InitializeEvent(0, 1044312350, 0);
});
