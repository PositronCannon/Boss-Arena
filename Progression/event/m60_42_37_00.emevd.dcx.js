// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    RegisterBonfire(1042370000, 1042371950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 71001, 76111, 1042371980, 77100, 2, 78100, 78101, 78102, 78103, 78104, 78105, 78106, 78107, 78108, 78109);
    InitializeCommonEvent(0, 900005610, 1042371680, 100, 800, 0);
    InitializeCommonEvent(0, 900005610, 1042371681, 100, 800, 0);
    InitializeCommonEvent(0, 90005880, 1042370800, 1042370805, 1042372800, 1042370800, 30120, 2435644, 1042372805);
    InitializeCommonEvent(0, 90005881, 1042370800, 1042370805, 1042372801, 1042372802, 20300, 1042371805, 2435644, 1042372805);
    InitializeCommonEvent(0, 90005882, 1042370800, 1042370805, 1042372800, 1042370800, 1042372806, 1042375810, 1042371800, 1042370810, 1042372810, 902500520, -1, 20000);
    InitializeCommonEvent(0, 90005883, 1042370800, 1042370805, 1042371805);
    InitializeCommonEvent(0, 90005885, 1042370800, 0, 1042372806, 1042372807, 0, 1);
    InitializeEvent(0, 1042372610, 0);
    InitializeEvent(0, 1042372651, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1042373700, 78102, 1042370950, 1042379204);
    InitializeEvent(0, 1042373701, 1042370950, 1042379204);
    InitializeEvent(0, 1042373702, 1042370950, 1042379205);
    InitializeEvent(0, 1042373703, 1042370950, 1042379205);
    //init boss reward
    InitializeEvent(0, 1042373990, 0);
});

//crucible knight
$Event(1042373990, Default, function() {
    WaitFor(CharacterDead(1042370800));
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0,90001023,1049304128,1049304041,-1,-1,1049304502,1049304524,1049304525,1049304526,1049304504,1049304506,1049304509,1049300128);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005251, 1042370200, 1084227584, 0, -1);
});

$Event(1042372610, Restart, function() {
    DisableAsset(1042371610);
});

$Event(1042372620, Restart, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    if (EventFlag(X8_4)) {
        ForceAnimationPlayback(X4_4, 1, false, false, false);
        DeleteAssetfollowingSFX(X0_4, true);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X0_4, 200, 803220);
    WaitFor(EventFlag(X8_4));
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X0_4, true);
});

$Event(1042372651, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 42, 37, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    SetEventFlagID(X12_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X8_4, true, true);
    EndIf(EventFlag(X16_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, X4_4, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, X12_4, 1);
    SetEventFlagID(X16_4, ON);
    SetEventFlagID(X20_4, ON);
});

$Event(1042373700, Restart, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(X0_4) && EntityInRadiusOfEntity(20000, X4_4, 5, 1) && !EventFlag(X8_4));
    SetEventFlagID(1042372701, ON);
    WaitFor(!EventFlag(X0_4) || !EntityInRadiusOfEntity(20000, X4_4, 5, 1) || EventFlag(X8_4));
    SetEventFlagID(1042372701, OFF);
    RestartEvent();
});

$Event(1042373701, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4680));
    WaitFor(EventFlag(4680));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1042373702, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(1042379203));
    if (EntityInRadiusOfEntity(20000, X0_4, 5, 1)) {
        SetEventFlagID(X4_4, ON);
    }
    EndEvent();
});

$Event(1042373703, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379207));
    WaitFor(EntityInRadiusOfEntity(20000, X0_4, 5, 1) && EventFlag(X4_4));
    SetEventFlagID(1042372702, ON);
    WaitFor(!EntityInRadiusOfEntity(20000, X0_4, 5, 1));
    SetEventFlagID(1042372702, OFF);
    RestartEvent();
});
