// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 9005910, 1043321940, 1043320101, 1043320101, 1);
    InitializeCommonEvent(0, 9005911, 1043321941);
    InitializeCommonEvent(0, 9005912, 1043320100, 605055);
    InitializeCommonEvent(0, 90005550, 1043320500, 1043321500, 43323500);
    InitializeEvent(0, 1043322215, 1043320215, 1043322215);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1043320200, 1043322200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005261, 1043320201, 1043322200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005251, 1043320202, 1084227584, 0, 3005);
});

$Event(1043322215, Restart, function(X0_4, X4_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(InArea(10000, X4_4));
    SetSpEffect(X0_4, 8080);
});
