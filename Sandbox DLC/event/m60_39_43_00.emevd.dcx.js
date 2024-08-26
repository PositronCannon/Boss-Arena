// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005300, 1039430800, 1039430341, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1039430340, 1039430341);
    InitializeCommonEvent(0, 90005477, 0);
    InitializeEvent(0, 1039432340, 1039430340, 1039430341);
    InitializeCommonEvent(0, 90005860, 1039430800, 0, 1039430340, 0, 1039430400, 0);
    InitializeCommonEvent(0, 90005872, 1039430340, 10, 0);
    InitializeCommonEvent(0, 90005871, 1039430340, 903150602, 10, 1039430341);
    InitializeCommonEvent(0, 90005706, 1039430700, 930023, 0);
    InitializeCommonEvent(0, 90005300, 1039430310, 1039430310, 40252, 0, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039430700, true);
    if (EventFlag(1049308070))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
});

$Event(1039432340, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(CharacterBackreadStatus(X4_4));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(X4_4));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
