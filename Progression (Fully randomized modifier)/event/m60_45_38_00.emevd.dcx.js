// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeCommonEvent(0, 90005704, 1045380700, 3581, 3580, 1045389201, 3);
    InitializeCommonEvent(0, 90005703, 1045380700, 3581, 3582, 1045389201, 3581, 3580, 3583, -1);
    InitializeCommonEvent(0, 90005702, 1045380700, 3583, 3580, 3583);
    InitializeEvent(0, 1045383700, 1045380700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1045380700, true);
});

$Event(1045382390, Restart, function() {
    DisableAsset(1045381390);
});

$Event(1045383700, Restart, function(X0_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3580) && EventFlag(1045389203)) {
            SetEventFlagID(1045389203, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(3585)) {
        WaitFor(EventFlag(3585));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(3580));
    GotoIf(L2, EventFlag(3581));
    GotoIf(L4, EventFlag(3583));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    SetCharacterTalkRange(X0_4, 100);
    if (EventFlag(1045389205)) {
        ForceAnimationPlayback(X0_4, 90101, false, false, false);
    }
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3585));
    RestartEvent();
});
