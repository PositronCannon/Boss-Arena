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
    InitializeCommonEvent(0, 90005501, 1051580510, 1051580511, 1, 1051581510, 1051581511, 1051581512, 1051580512);
    InitializeEvent(0, 1051582510, 0);
    InitializeCommonEvent(0, 90005706, 1051580700, 930023, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1051580700, true);
});

$Event(1051582510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1051580510, 1051580511, 1, 1051581510, 1051581511, 1051583511, 1051581512, 1051583512, 1051582511, 1051582512, 1051580512, 1051580513, 0);
});

$Event(1051580519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1051580510, OFF);
});
