// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005633, 580360, 580060, 1051400298, 30017, 20017, 1051401500, 1051401501);
    InitializeCommonEvent(0, 90005870, 1051400800, 904811601, 18);
    InitializeCommonEvent(0, 90005860, 1051400800, 0, 1051400800, 0, 30415, 0);
    InitializeCommonEvent(0, 90005872, 1051400800, 18, 0);
    InitializeCommonEvent(0, 90005250, 1051400200, 1051402200, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051400201, 1051402200, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051400202, 1051402200, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051400299, 1051402300, 0, -1);
    InitializeCommonEvent(0, 90005251, 1051400300, 1088421888, 0, -1);
    //init boss reward
    InitializeEvent(0, 1051409990, 0);
});

//generic boss event
$Event(1051409990, Default, function() {
    WaitFor(CharacterDead(1051400800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304255,1049304130,-1,-1,1049307091,1049307092,1049307093,1049307094,1049306018,1049306021,1049306023,1049306028,1049300255);
});
