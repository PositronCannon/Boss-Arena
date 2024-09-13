// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,148]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 900005610, 1035511650, 100, 800, 0);
});

$Event(1035512210, Default, function() {
    WaitFor(
        (CharacterHasSpEffect(10000, 415) && EntityInRadiusOfEntity(1035510200, 10000, 6, 1))
            || EntityInRadiusOfEntity(1035510200, 1035511200, 6, 1));
    EnableCharacterHPBarDisplay(1035510200);
    EnableLockOnPoint(1035510200, 220);
    SetSpEffect(1035510200, 14501);
    SetSpEffect(1035510200, 14502);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1035512220, Default, function() {
    WaitFor(
        (!CharacterHasSpEffect(10000, 415)
            || !EntityInRadiusOfEntity(1035510200, 10000, 6, 1)
            || !EntityInRadiusOfEntity(1035510200, 1035511200, 6, 1))
            && !CharacterHasSpEffect(1035510200, 14503));
    DisableCharacterHPBarDisplay(1035510200);
    DisableLockOnPoint(1035510200, 220);
    SetSpEffect(1035510200, 14500);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1035512211, Restart, function() {
    if ((CharacterHasSpEffect(10000, 415) && EntityInRadiusOfEntity(1035510200, 10000, 6, 1))
        || EntityInRadiusOfEntity(1035510200, 1035511200, 6, 1)) {
        EnableCharacterHPBarDisplay(1035510200);
        EnableLockOnPoint(1035510200, 220);
        SetSpEffect(1035510200, 14501);
        SetSpEffect(1035510200, 14502);
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L0:
    DisableCharacterHPBarDisplay(1035510200);
    DisableLockOnPoint(1035510200, 220);
    SetSpEffect(1035510200, 14500);
    WaitFixedTimeFrames(1);
    RestartEvent();
});
