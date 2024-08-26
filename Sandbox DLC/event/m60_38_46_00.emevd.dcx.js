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
    RegisterBonfire(1038460000, 1038461950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 1038461610, 100, 800, 0);
    InitializeCommonEvent(0, 90005511, 1038460560, 1038461550, 1038463560, 257018, 0);
    InitializeCommonEvent(0, 90005512, 1038460560, 1038462550, 1038462551);
    InitializeCommonEvent(0, 90005640, 1038460540, 1038461540);
    InitializeEvent(0, 1038462200, 1038460200);
    InitializeEvent(1, 1038462200, 1038460201);
    InitializeEvent(2, 1038462200, 1038460202);
    InitializeCommonEvent(0, 90005300, 1038460340, 1038460340, 0, 0, 0);
    InitializeEvent(0, 1038460510, 0);
    InitializeCommonEvent(0, 90005501, 1038460650, 1038460651, 0, 1038461650, 1038461651, 1038461652, 1038460652);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1038460519, 0);
    InitializeEvent(0, 1038462340, 0);
});

$Event(1038462200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});

$Event(1038462210, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    WaitFor(InArea(10000, 1038462210));
    CreateAssetfollowingSFX(1038461210, 100, 620383);
    EnableCharacter(X0_4);
    WaitFixedTimeSeconds(2);
    DeleteAssetfollowingSFX(1038461210, true);
    ForceAnimationPlayback(X0_4, 20001, false, true, false);
    EndEvent();
});

$Event(1038462340, Restart, function() {
    EndIf(EventFlag(1038460340));
    DisableCharacterHPBarDisplay(1038460340);
    SetSpEffect(1038460340, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1038460340, 12189);
    EnableCharacterHPBarDisplay(1038460340);
});

$Event(1038460510, Default, function() {
    InitializeCommonEvent(0, 90005500, 1038460650, 1038460651, 0, 1038461650, 1038461651, 1038463651, 1038461652, 1038463652, 1038462651, 1038462652, 1038460652, 1038462653, 0);
});

$Event(1038460519, Default, function() {
    EndIf(ThisEventSlot());
    WaitFor(!PlayerInMap(12, 1, 0, 0));
    SetEventFlagID(1038460650, ON);
});
