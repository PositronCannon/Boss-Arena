// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005250, 2047420266, 2047422266, 0, 0);
    InitializeCommonEvent(0, 90005250, 2047420267, 2047422266, 1056964608, 0);
    InitializeCommonEvent(0, 90005250, 2047420262, 2047422262, 0, 4100);
    InitializeCommonEvent(0, 90005790, 0, 2047420180, 2047422181, 2047422182, 2047420300, 23, 2047422180, 2047422181, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 2047420180, 2047422181, 2047422182, 2047420300);
    InitializeCommonEvent(0, 90005792, 2047420180, 2047422181, 2047422182, 2047420300, 0, 0);
    InitializeCommonEvent(0, 90005793, 2047420180, 2047422181, 2047422182, 2047420300, 2047422180, 0, 0);
    InitializeEvent(0, 2047422550, 580110, 2047421550, 80110);
});

$Event(2047422550, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    DeleteAssetfollowingSFX(X4_4, false);
    CreateAssetfollowingSFX(X4_4, 200, 806845);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9310, X4_4));
    DeleteAssetfollowingSFX(X4_4, true);
    PlaySE(X4_4, SoundType.SFX, 806841);
    WaitFixedTimeSeconds(0.1);
    AwardItemsIncludingClients(X8_4);
});


