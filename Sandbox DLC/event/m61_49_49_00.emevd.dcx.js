// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(2049492500, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(2049492500));
    EndIf(EventFlag(124));
    DeleteAssetfollowingSFX(2049491500, true);
    CreateAssetfollowingSFX(2049491500, 90, 6102);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9512, 2049491500));
    SetNetworkconnectedEventFlagID(2049492500, ON);
    SetNetworkconnectedEventFlagID(124, ON);
    WaitFixedTimeSeconds(1);
    DeleteAssetfollowingSFX(2049491500, false);
});


