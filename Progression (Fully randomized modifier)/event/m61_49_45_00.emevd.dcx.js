// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005870, 2049450800, 905820601, 16);
    //boss event
    InitializeCommonEvent(0, 90005860, 2049450800, 0, 2049450800, 0, 30930, 0);
    InitializeCommonEvent(0, 90005251, 2049450300, 1108082688, 0, -1);
    //init boss reward
    InitializeEvent(0, 2049459990, 0);
});

//generic boss event
$Event(2049459990, Default, function() {
    WaitFor(CharacterDead(2049450800));
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001034,1049304282,-1,-1,1049304152,1049307204,1049307205,1049307206,1049307207,1049307208,1049306324,1049306326,1049306328,1049306331,1049306333,1049300282);
});
