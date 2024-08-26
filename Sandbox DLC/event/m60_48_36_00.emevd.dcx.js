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
    RegisterBonfire(1048360000, 1048361950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76458, 76404, 1048361980, 77410, 1, 78410, 78411, 78412, 78413, 78414, 78415, 78416, 78417, 78418, 78419);
    InitializeCommonEvent(0, 90005250, 1048360201, 1048362201, 0, -1);
    InitializeEvent(0, 1048360700, 1048360700);
    InitializeEvent(0, 1048360701, 0);
});

$Event(1048360700, Restart, function(X0_4) {
    DisableCharacterGravity(X0_4);
    DisableCharacterCollision(X0_4);
});

$Event(1048360701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(10000, 9611) && !CharacterHasSpEffect(10000, 9612));
    ForceAnimationPlayback(10000, 60510, false, false, false);
    WaitFixedTimeSeconds(0.2);
    RestartEvent();
});
