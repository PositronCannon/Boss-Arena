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
    InitializeEvent(0, 1060002510, 0);
    InitializeEvent(0, 1060002410, 0);
    InitializeEvent(0, 1060002430, 0);
    InitializeEvent(0, 1060002420, 0);
});

$Event(1060002410, Restart, function() {
    DisableNetworkSync();
    ClearSpEffect(20000, 4202);
    WaitFor(
        InArea(20000, 1060002410)
            && PlayerInMap(60, -1, -1, -1)
            && TimeOfDayInRange(6, 0, 0, 17, 59, 0)
            && (WeatherActive(Weather.Default, 10, 0)
                || WeatherActive(Weather.Cloudless, 10, 0)
                || WeatherActive(Weather.FlatClouds, 10, 0)
                || WeatherActive(Weather.PuffyClouds, 10, 0)));
    SetSpEffect(20000, 4202);
    WaitFixedTimeSeconds(1);
    WaitFor(
        !(InArea(20000, 1060002410)
            && PlayerInMap(60, -1, -1, -1)
            && TimeOfDayInRange(6, 0, 0, 17, 59, 0)
            && (WeatherActive(Weather.Default, 10, 0)
                || WeatherActive(Weather.Cloudless, 10, 0)
                || WeatherActive(Weather.FlatClouds, 10, 0)
                || WeatherActive(Weather.PuffyClouds, 10, 0))));
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(1060002420, Restart, function() {
    DisableNetworkSync();
    ClearSpEffect(20000, 4210);
    WaitFor(
        ((InArea(20000, 1060002420) && CharacterHasSpEffect(10000, 4190))
            || (InArea(40000, 1060002420) && CharacterHasSpEffect(40000, 4190)))
            && TimeOfDayInRange(20, 0, 0, 3, 0, 0));
    SetSpEffect(20000, 4210);
    WaitFixedTimeSeconds(1);
    WaitFor(
        !(((InArea(20000, 1060002420) && CharacterHasSpEffect(10000, 4190))
            || (InArea(40000, 1060002420) && CharacterHasSpEffect(40000, 4190)))
            && TimeOfDayInRange(20, 0, 0, 3, 0, 0)));
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(1060002430, Restart, function() {
    DisableNetworkSync();
    ClearSpEffect(20000, 4205);
    WaitFor(InArea(20000, 1060002430));
    SetSpEffect(20000, 4205);
    WaitFixedTimeSeconds(1);
    WaitFor(!InArea(20000, 1060002430));
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(1060002500, Restart, function() {
    DisableNetworkSync();
    DeleteAssetfollowingSFX(1060001500, true);
    ClearSpEffect(10000, 4200);
    ClearSpEffect(10000, 4201);
    SetWindSFX(-1);
    timeMap = TimeOfDayInRange(0, 0, 0, 2, 59, 59)
        && WeatherActive(Weather.Default, 0, 0)
        && PlayerInMap(60, -1, -1, -1);
    online = MultiplayerEvent(0);
    WaitFor(timeMap || online || EventFlag(9989));
    SetWindSFX(808004);
    WaitFixedTimeSeconds(5);
    CreateAssetfollowingSFX(1060001500, 200, 806800);
    WaitFixedTimeSeconds(14);
    SetSpEffect(10000, 4200);
    SetSpEffect(10000, 4201);
    if (!online.Passed) {
        WaitFor(
            (!(TimeOfDayInRange(0, 0, 0, 3, 29, 59)
                && WeatherActive(Weather.Default, 0, 0)
                && PlayerInMap(60, -1, -1, -1))
                && !EventFlag(9989))
                || TimeOfDay(1, 0, 0));
        SetWindSFX(-1);
        DeleteAssetfollowingSFX(1060001500, true);
        ClearSpEffect(10000, 4200);
        ClearSpEffect(10000, 4201);
        WaitFixedTimeSeconds(150);
        RestartEvent();
    }
L2:
    DisplayNetworkMessage(3000202, false);
    WaitFixedTimeSeconds(300);
    SetWindSFX(-1);
    DeleteAssetfollowingSFX(1060001500, true);
    ClearSpEffect(10000, 4200);
    ClearSpEffect(10000, 4201);
    WaitFixedTimeSeconds(150);
    RestartEvent();
});

$Event(1060002501, Restart, function() {
    EnableAsset(1060001500);
    WaitFor(EventFlag(9988));
    DisableAsset(1060001500);
    WaitFor(!EventFlag(9988));
    RestartEvent();
});

$Event(1060002510, Restart, function() {
    DisableNetworkSync();
    DeleteAssetfollowingSFX(1060001500, true);
    WaitFor(EventFlag(9988));
    CreateAssetfollowingSFX(1060001500, 200, 806810);
    WaitFor(!EventFlag(9988));
    RestartEvent();
});
