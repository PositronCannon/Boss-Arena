// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //infinite hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeCommonEvent(0, 90005780, 2044470800, 2044482160, 2044482161, 2044480700, 0, 2044482701, 2046429391, 1, 0);
    InitializeCommonEvent(0, 90005781, 2044470800, 2044482160, 2044482161, 2044480700);
    InitializeCommonEvent(0, 90005785, 2044470800, 2044482160, 2044482161, 2044480700, 2044482700, 2044482400, 0);
    InitializeEvent(0, 2044480700, 2046429378, 2046429391, 4897);
    InitializeEvent(0, 2044480701, 2044482160, 2044482161, 2046422723, 2046429370, 2044470800, 9290, 9291);
});

$Event(2044480700, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(X0_4) || EventFlag(X8_4)) {
        SetEventFlagID(X4_4, OFF);
    } else {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(2044480701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X16_4));
    GotoIf(L0, !EventFlag(X8_4));
    Goto(L1);
L0:
    WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && (EventFlag(X20_4) || EventFlag(X24_4)));
    WaitFixedTimeSeconds(1);
    SetEventFlagID(X8_4, ON);
    RestartEvent();
L1:
    WaitFor(EventFlag(X8_4) && EventFlag(X16_4));
    SetEventFlagID(X12_4, ON);
    EndEvent();
});


