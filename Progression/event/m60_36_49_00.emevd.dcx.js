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
    RegisterBonfire(1036490000, 1036491950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76209, 76208, 1036491980, 77210, 1, 78210, 78211, 78212, 78213, 78214, 78215, 78216, 78217, 78218, 78219);
    RegisterBonfire(1036490001, 1036491951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005300, 1036490200, 1036490200, 40204, 0, 0);
    InitializeEvent(0, 1036492610, 0);
    InitializeCommonEvent(0, 90005704, 1036490700, 3381, 3380, 1036499201, 3);
    InitializeCommonEvent(0, 90005703, 1036490700, 3381, 3382, 1036499201, 3381, 3380, 3384, -1);
    InitializeCommonEvent(0, 90005702, 1036490700, 3383, 3380, 3384);
    InitializeEvent(0, 1036493700, 1036490700);
    InitializeCommonEvent(0, 90005725, 4755, 4756, 4758, 1036499255, 1036490705, 1036490706, 1036496700);
    InitializeCommonEvent(0, 90005703, 1036490705, 4756, 4757, 1036499256, 4756, 4755, 4759, 0);
    InitializeCommonEvent(0, 90005704, 1036490705, 4756, 4755, 1036499256, 3);
    InitializeCommonEvent(0, 90005702, 1036490705, 4758, 4755, 4759);
    InitializeCommonEvent(0, 90005703, 1036490706, 4756, 4757, 1036499257, 4756, 4755, 4759, 0);
    InitializeCommonEvent(0, 90005704, 1036490706, 4756, 4755, 1036499257, 3);
    InitializeCommonEvent(0, 90005727, 4756, 1036490705, 1036490706, 4755, 4758);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1036490700, true);
    SetCharacterBackreadState(1036490705, true);
    SetCharacterBackreadState(1036490706, true);
});

$Event(1036492610, Restart, function() {
    asset = AssetDestroyed(1036491620, Equal, 1);
    asset2 = !AssetDestroyed(1036491610, Equal, 1) || !AssetDestroyed(1036491610, Equal, 1);
    WaitFor(asset2 && asset);
    RequestAssetDestruction(1036491610, 0);
    RequestAssetDestruction(1036491611, 0);
});

$Event(1036493700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3380)) {
            SetEventFlagID(1036499202, OFF);
        }
    }
L19:
    if (!EventFlag(3391)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        WaitFor(EventFlag(3391));
        RestartEvent();
    }
L11:
    GotoIf(L0, EventFlag(3380));
    GotoIf(L1, EventFlag(3381));
    GotoIf(L3, EventFlag(3383));
L0:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetSpEffect(X0_4, 9628);
    ForceAnimationPlayback(X0_4, 90101, false, false, false);
    Goto(L20);
L3:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3391));
    RestartEvent();
});
