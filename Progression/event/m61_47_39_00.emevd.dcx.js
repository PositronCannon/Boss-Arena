// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    RegisterBonfire(2047390000, 2047391950, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047390800, 30000, 20000, 2047392800, 0, 0, 1, 0, 0, 0);
    InitializeCommonEvent(0, 90005870, 2047390800, 906260600, 24);
    InitializeCommonEvent(0, 90005860, 2047390800, 0, 2047390800, 0, 30855, 0);
    InitializeCommonEvent(0, 90005211, 2047390200, 30016, 20016, 0, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047390201, 30016, 20016, 0, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047390202, 30016, 20016, 0, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047390203, 30016, 20016, 2047392201, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047390204, 30016, 20016, 2047392201, 0, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2047390205, 30016, 20016, 2047392201, 0, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005301, 2047390300, 2047390400, 2047390070, 1077936128, 0);
    //init boss reward
    InitializeEvent(0, 2047399990, 0);
});

//generic boss event
$Event(2047399990, Default, function() {
    WaitFor(CharacterDead(2047390800));
    //boss rewards (3 bonus items, DLC version)
    InitializeCommonEvent(0,90001043,1049304287,1049304158,-1,1049307227,1049307228,1049307229,1049307230,1049306386,1049306388,1049306390,1049306393,1049300287);
});
