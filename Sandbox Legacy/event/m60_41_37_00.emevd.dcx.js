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
    InitializeCommonEvent(0, 900005610, 1041371680, 100, 800, 1041378540);
    InitializeCommonEvent(0, 90005300, 1041370200, 1041370200, 40120, 0, 0);
    InitializeCommonEvent(0, 90005300, 1041370340, 1041370340, 0, 0, 0);
    InitializeCommonEvent(0, 90005570, 60833, 91, 1041371520, 0, 1, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1041372340, 0);
    InitializeCommonEvent(0, 90005261, 1041370340, 1041372340, 1084227584, 0, 1700);
});

$Event(1041372340, Restart, function() {
    EndIf(EventFlag(1041370340));
    DisableCharacterHPBarDisplay(1041370340);
    SetSpEffect(1041370340, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1041370340, 12189);
    EnableCharacterHPBarDisplay(1041370340);
});

$Event(1041372670, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1041370670));
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9240, 1041371670));
    SetEventFlagID(1041370670, ON);
    DisplayGenericDialog(90010, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 1);
});
