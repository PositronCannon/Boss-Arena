// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1060002480, 0);
    InitializeEvent(0, 1060002490, 0);
});

$Event(1060002480, Restart, function() {
    DisableNetworkSync();
    ClearSpEffect(20000, 20004211);
    WaitFor(
        PlayerStandingOnHitGroup(2000007080)
            && PlayerInMap(61, -1, -1, -1)
            && (WeatherActive(Weather.Default, 10, 0)
                || WeatherActive(Weather.Cloudless, 10, 0)
                || WeatherActive(Weather.FlatClouds, 10, 0)
                || WeatherActive(Weather.PuffyClouds, 10, 0)));
    SetSpEffect(20000, 20004211);
    WaitFixedTimeSeconds(1);
    WaitFor(
        !(PlayerStandingOnHitGroup(2000007080)
            && PlayerInMap(61, -1, -1, -1)
            && (WeatherActive(Weather.Default, 10, 0)
                || WeatherActive(Weather.Cloudless, 10, 0)
                || WeatherActive(Weather.FlatClouds, 10, 0)
                || WeatherActive(Weather.PuffyClouds, 10, 0))));
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1060002490, Restart, function() {
    DisableNetworkSync();
    ClearSpEffect(20000, 20004210);
    WaitFor(
        PlayerStandingOnHitGroup(2000007090)
            && PlayerInMap(61, -1, -1, -1)
            && (WeatherActive(Weather.Default, 10, 0)
                || WeatherActive(Weather.Cloudless, 10, 0)
                || WeatherActive(Weather.FlatClouds, 10, 0)
                || WeatherActive(Weather.PuffyClouds, 10, 0)));
    SetSpEffect(20000, 20004210);
    WaitFixedTimeSeconds(1);
    WaitFor(
        !(PlayerStandingOnHitGroup(2000007090)
            && PlayerInMap(61, -1, -1, -1)
            && (WeatherActive(Weather.Default, 10, 0)
                || WeatherActive(Weather.Cloudless, 10, 0)
                || WeatherActive(Weather.FlatClouds, 10, 0)
                || WeatherActive(Weather.PuffyClouds, 10, 0))));
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


