// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005870, 1041530800, 904580600, 8);
    InitializeCommonEvent(0, 90005860, 1041530800, 0, 1041530800, 0, 30320, 0);
    InitializeCommonEvent(0, 90005636, 32058691, 1041530650, 1041531650, 4470, 1041532650, 1041532651, 1041532650, 1041533650, 0);
    InitializeCommonEvent(0, 90005637, 32058691, 1041530650, 1041531650);
    InitializeCommonEvent(0, 90005300, 1041530500, 1041530500, 40308, 0, 0);
    //init boss reward
    InitializeEvent(0, 1041539990, 0);
});

//generic boss event
$Event(1041539990, Default, function() {
    WaitFor(CharacterDead(1041530800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304193,1049304075,-1,1049304004,1049304822,1049304823,1049304824,1049304825,1049305302,1049305305,1049305308,1049305310,1049300193);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1041530362, 1041532362, 1077936128, 0, 3010);
    InitializeCommonEvent(0, 90005200, 1041530365, 30000, 20000, 1041532365, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1041530357, 30001, 20001, 1041532357, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1041530361, 1041532361, 0, 3011);
    InitializeCommonEvent(0, 90005201, 1041530800, 30000, 20000, 1097859072, 0, 0, 0, 0, 0);
});
