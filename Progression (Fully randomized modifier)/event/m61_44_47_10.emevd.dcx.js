// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005870, 2044470800, 905820600, 16);
    InitializeCommonEvent(0, 90005860, 2044470800, 0, 2044470800, 0, 30910, 0);
    InitializeCommonEvent(0, 90005872, 2044470800, 16, 2044472802);
    InitializeEvent(0, 2044472810, 0);
    InitializeCommonEvent(0, 90005557, 2044471680);
    InitializeCommonEvent(0, 90005557, 2044471681);
    InitializeCommonEvent(0, 90005557, 2044471682);
    InitializeCommonEvent(0, 90005557, 2044471683);
    InitializeCommonEvent(0, 90005557, 2044471684);
    InitializeCommonEvent(0, 90005557, 2044471685);
    InitializeCommonEvent(0, 90005557, 2044471686);
    InitializeCommonEvent(0, 90005557, 2044471687);
    InitializeCommonEvent(0, 90005557, 2044471688);
    InitializeCommonEvent(0, 90005556, 2044471689, 2044477900);
    InitializeCommonEvent(0, 90005501, 2044470510, 2044470511, 1, 2044471510, 2044471511, 2044471512, 2044470512);
    InitializeEvent(0, 2044472510, 0);
    //init boss reward
    InitializeEvent(0, 2044479990, 0);
});

//generic boss event
$Event(2044479990, Default, function() {
    WaitFor(CharacterDead(2044470800));
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001034,1049304286,-1,-1,1049304152,1049307241,1049307242,1049307243,1049307244,1049307245,1049306426,1049306428,1049306430,1049306433,1049306436,1049300286);
});

$Event(2044470050, Default, function() {
    EndIf(ThisEventSlot());
});

$Event(2044472810, Default, function() {
    EndIf(EventFlag(2044470800));
    if (!EventFlag(2044472802)) {
        WaitFor(CharacterHasSpEffect(2044470800, 20010130));
    }
    SetNetworkconnectedEventFlagID(2044472802, ON);
    EndEvent();
});

$Event(2044472510, Default, function() {
    InitializeCommonEvent(0, 90005500, 2044470510, 2044470511, 1, 2044471510, 2044471511, 2044473511, 2044471512, 2044473512, 2044472511, 2044472512, 2044470512, 2044470513, 0);
});
