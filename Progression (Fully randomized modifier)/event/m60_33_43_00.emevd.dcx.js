// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005870, 1033430800, 904810600, 18);
    InitializeCommonEvent(0, 90005860, 1033430800, 0, 1033430800, 0, 30205, 0);
    InitializeCommonEvent(0, 90005251, 1033430800, 1101004800, 0, 0);
    InitializeCommonEvent(0, 90005872, 1033430800, 18, 0);
    InitializeCommonEvent(0, 900005610, 1033431680, 100, 800, 1033438600);
    InitializeCommonEvent(0, 90005300, 1033430200, 1033430200, 40238, 0, 0);
    //init boss reward
    InitializeEvent(0, 1033430990, 0);
});

//generic boss event
$Event(1033430990, Default, function() {
    WaitFor(CharacterDead(1033430800));
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0,90001023,1049304164,1049304056,1049304069,-1,1049304952,1049304692,1049304693,1049304694,1049304955,1049304958,1049304960,1049300164);
});
