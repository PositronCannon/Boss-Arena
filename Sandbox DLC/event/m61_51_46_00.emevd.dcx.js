// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005639, 2051460500, 2051461500, 2051461501, 2051461502, 1077936128);
    InitializeEvent(0, 2051462510, 0);
    InitializeCommonEvent(0, 90005501, 2051460510, 2051460511, 0, 2051461510, 2051461511, 2051461512, 2051460512);
    InitializeCommonEvent(0, 90005502, 2051460514, 2051461512, 2051462511);
    InitializeCommonEvent(0, 90005525, 2051460620, 2051461620);
    InitializeEvent(0, 2051460700, 2051460700, 90101);
});

$Event(50, Default, function() {
    InitializeEvent(0, 2051460519, 0);
});

$Event(2051462510, Default, function() {
    InitializeCommonEvent(0, 90005500, 2051460510, 2051460511, 0, 2051461510, 2051461511, 2051463511, 2051461512, 2051463512, 2051462511, 2051462512, 2051460512, 2051460513, 2051460514);
});

$Event(2051460519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(2051460510, ON);
    SetThisEventSlot(ON);
});

$Event(2051460700, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
L0:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    EnableCharacterInvincibility(X0_4);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    EndEvent();
});


