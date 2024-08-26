// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeCommonEvent(0, 90005300, 1040510500, 1040510500, 40310, 0, 0);
    InitializeCommonEvent(0, 90005706, 1040510700, 930023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1040510700, true);
    InitializeCommonEvent(0, 90005250, 1040510407, 1040512407, 0, 3003);
    InitializeCommonEvent(0, 90005250, 1040510408, 1040512407, 0, 3003);
    InitializeCommonEvent(0, 90005250, 1040510407, 1040512408, 0, 0);
    InitializeCommonEvent(0, 90005250, 1040510408, 1040512408, 0, 0);
    InitializeCommonEvent(0, 90005201, 1040510406, 30001, 20001, 1084227584, 0, 0, 0, 0, 0);
});
