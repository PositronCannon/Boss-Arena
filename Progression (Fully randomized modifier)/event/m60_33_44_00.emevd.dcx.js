// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1033440000, 1033441950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005460, 1033440200);
    InitializeCommonEvent(0, 90005461, 1033440200);
    InitializeCommonEvent(0, 90005462, 1033440200);
    InitializeCommonEvent(0, 90005460, 1033440201);
    InitializeCommonEvent(0, 90005461, 1033440201);
    InitializeCommonEvent(0, 90005462, 1033440201);
    InitializeCommonEvent(0, 90005460, 1033440204);
    InitializeCommonEvent(0, 90005461, 1033440204);
    InitializeCommonEvent(0, 90005462, 1033440204);
    InitializeCommonEvent(0, 90005460, 1033440205);
    InitializeCommonEvent(0, 90005461, 1033440205);
    InitializeCommonEvent(0, 90005462, 1033440205);
    InitializeCommonEvent(0, 90005460, 1033440206);
    InitializeCommonEvent(0, 90005461, 1033440206);
    InitializeCommonEvent(0, 90005462, 1033440206);
    InitializeCommonEvent(0, 90005683, 62202, 1033441684, 209, 78292, 78292);
    InitializeCommonEvent(0, 90005790, 0, 1033440180, 1033442181, 1033442182, 1033440700, 23, 1033442701, 1033442700, 0, 1045349259, 0, 0);
    InitializeCommonEvent(0, 90005791, 1033440180, 1033442181, 1033442182, 1033440700);
    InitializeCommonEvent(0, 90005792, 1033440180, 1033442181, 1033442182, 1033440700, 100610, 0);
    InitializeCommonEvent(0, 90005793, 1033440180, 1033442181, 1033442182, 1033440700, 1033442701, 0, 0);
    InitializeEvent(0, 1033440700, 1033440701, 930027);
    InitializeEvent(1, 1033440700, 1033440702, 930029);
    InitializeEvent(2, 1033440700, 1033440703, 930028);
    InitializeEvent(0, 1033440705, 1033441700);
    InitializeEvent(1, 1033440705, 1033441701);
    InitializeEvent(2, 1033440705, 1033441702);
    InitializeEvent(3, 1033440705, 1033441703);
    InitializeEvent(4, 1033440705, 1033441704);
    InitializeEvent(0, 1033440710, 1033441710);
    InitializeEvent(1, 1033440710, 1033441711);
    InitializeEvent(2, 1033440710, 1033441715);
    InitializeEvent(3, 1033440710, 1033441713);
});

$Event(1033440700, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3409)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3409));
        RestartEvent();
    }
L9:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3409));
    RestartEvent();
});

$Event(1033440705, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3409)) {
        DisableAsset(X0_4);
        DisableAssetTreasure(X0_4);
        WaitFor(EventFlag(3409));
        RestartEvent();
    }
L9:
    EnableAsset(X0_4);
    EnableAssetTreasure(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3409));
    RestartEvent();
});

$Event(1033440710, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3409)) {
        DisableAsset(X0_4);
        WaitFor(EventFlag(3409));
        RestartEvent();
    }
L9:
    EnableAsset(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3409));
    RestartEvent();
});
