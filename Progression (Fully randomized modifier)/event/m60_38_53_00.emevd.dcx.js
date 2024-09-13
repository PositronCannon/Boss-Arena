// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005600, 1038530000, 1038531950, 1084227584, 1038530480);
    InitializeEvent(0, 1038532200, 1038530200);
    InitializeEvent(1, 1038532200, 1038530201);
    InitializeEvent(2, 1038532200, 1038530202);
    InitializeEvent(3, 1038532200, 1038530203);
    InitializeEvent(4, 1038532200, 1038530204);
    InitializeEvent(5, 1038532200, 1038530205);
    InitializeEvent(6, 1038532200, 1038530206);
    InitializeEvent(7, 1038532200, 1038530207);
    InitializeEvent(8, 1038532200, 1038530208);
    InitializeEvent(0, 1038532580, 0);
    InitializeCommonEvent(0, 90005620, 1038530570, 1038531570, 1038531571, 1038531572, 1038532570, 1038532571, 1038532572);
    InitializeCommonEvent(0, 90005621, 1038530570, 1038531573);
});

$Event(1038532580, Restart, function() {
    RegisterLadder(38531580, 38531851, 1038531582);
});

$Event(1038532200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});
