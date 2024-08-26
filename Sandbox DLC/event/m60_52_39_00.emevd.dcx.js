// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(1052392699, Restart, function(X0_4) {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    GotoIf(L0, EventFlag(9411));
    GotoIf(L1, EventFlag(1052380800));
    DisableAsset(X0_4);
    WaitFor(EventFlag(9411));
L0:
    EnableAsset(X0_4);
    WaitFor(EventFlag(1052380800));
L1:
    DisableAsset(X0_4);
});
