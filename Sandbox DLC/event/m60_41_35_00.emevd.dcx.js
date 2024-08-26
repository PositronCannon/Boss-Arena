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
    RegisterBonfire(1041350000, 1041351950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 1041351680, 100, 800, 0);
    InitializeCommonEvent(0, 90005300, 1041350210, 1041350210, 40144, 0, 0);
    InitializeEvent(0, 1041350700, 1041350700);
    InitializeEvent(0, 1041350701, 0);
    InitializeCommonEvent(0, 90005708, 1041350700, 6001, 0);
    InitializeEvent(0, 1041353702, 0);
});

$Event(1041352680, Restart, function() {
    CreateAssetfollowingSFX(1041351680, 100, 800);
});

$Event(1041350700, Restart, function(X0_4) {
    DisableCharacterGravity(X0_4);
    SetCharacterMaphit(X0_4, false);
});

$Event(1041350701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(10000, 9611) && !CharacterHasSpEffect(10000, 9612));
    ForceAnimationPlayback(10000, 60510, false, false, false);
    WaitFixedTimeSeconds(0.2);
    RestartEvent();
});

$Event(1041353702, Restart, function() {
    SetEventFlagID(1041359950, OFF);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(1041359950, ON);
    EndEvent();
});
