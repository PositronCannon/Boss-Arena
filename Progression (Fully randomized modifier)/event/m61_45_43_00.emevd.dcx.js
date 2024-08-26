// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 2045432550, 580400, 580100, 2045430250, 30015, 20015, 2045431550, 2045431560);
});

$Event(2045432550, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetSpEffect(X0_4, 10124);
    DisableCharacter(X8_4);
    DisableCharacterCollision(X8_4);
    DisableAsset(X20_4);
    DisableAsset(X24_4);
    DisableAssetTreasure(X24_4);
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && EntityInRadiusOfEntity(X8_4, 10000, 15, 1));
    EnableCharacter(X8_4);
    ClearSpEffect(X0_4, 10124);
    ForceAnimationPlayback(X8_4, X12_4, false, false, false);
    EnableAsset(X20_4);
    EnableAsset(X24_4);
    ForceAnimationPlayback(X20_4, 2, false, false, false);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && EntityInRadiusOfEntity(X8_4, 10000, 5, 1));
    ForceAnimationPlayback(X8_4, X16_4, false, false, false);
    ForceAnimationPlayback(X20_4, 1, false, false, false);
    WaitFixedTimeSeconds(3.8);
    DisableCharacter(X8_4);
    DisableAsset(X20_4);
    EnableAssetTreasure(X24_4);
});


