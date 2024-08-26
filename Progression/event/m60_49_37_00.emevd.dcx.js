// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1049370000, 1049371950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005251, 1049370200, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005300, 1049370800, 1049370801, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1049370800, 1049370801);
    InitializeEvent(0, 1049372291, 1049370800, 1049370801);
    InitializeCommonEvent(0, 90005871, 1049370800, 903150605, 10, 1049370801);
    InitializeCommonEvent(0, 90005860, 1049370800, 0, 1049370800, 0, 1049370100, 0);
    InitializeCommonEvent(0, 90005872, 1049370800, 10, 0);
    InitializeCommonEvent(0, 90005870, 1049370850, 904980606, 24);
    InitializeCommonEvent(0, 90005860, 1049370850, 0, 1049370850, 0, 1049370110, 0);
    InitializeEvent(0, 1049372299, 0);
    InitializeCommonEvent(0, 90005300, 1049370299, 1049370299, 1049370700, 0, 0);
    InitializeCommonEvent(0, 90005725, 4780, 4781, 4783, 1049379205, 1049370700, 1049370701, 1049376700);
    InitializeCommonEvent(0, 90005703, 1049370700, 4781, 4782, 1049379206, 4781, 4780, 4784, 0);
    InitializeCommonEvent(0, 90005704, 1049370700, 4781, 4780, 1049379206, 3);
    InitializeCommonEvent(0, 90005702, 1049370700, 4783, 4780, 4784);
    InitializeCommonEvent(0, 90005703, 1049370701, 4781, 4782, 1049379207, 4781, 4780, 4784, 0);
    InitializeCommonEvent(0, 90005704, 1049370701, 4781, 4780, 1049379207, 3);
    InitializeCommonEvent(0, 90005728, 1049370701, 1049372706, 1049372707);
    InitializeCommonEvent(0, 90005727, 4781, 1049370700, 1049370701, 4780, 4783);
    //init boss reward
    InitializeEvent(0, 1049379990, 0);
    //init boss reward
    InitializeEvent(0, 1049379991, 0);
});

//generic boss event - deathrite bird
$Event(1049379990, Default, function() {
    WaitFor(CharacterDead(1049370850));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304177,1049304083,1049304077,-1,1049304749,1049304750,1049304751,1049304752,1049305108,1049305097,1049305113,1049305116,1049300177);
});

//generic boss event - night's cavalry
$Event(1049379991, Default, function() {
    WaitFor(CharacterDead(1049370800));
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001034,1049304183,1049304083,1049304077,-1,1049304776,1049304777,1049304778,1049304779,1049304780,1049305177,1049305179,1049305181,1049305184,1049305188,1049300183);
});

$Event(50, Default, function() {
    if (EventFlag(1049308068) || EventFlag(1049308069))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    SetCharacterBackreadState(1049370700, true);
    SetCharacterBackreadState(1049370701, true);
});

$Event(1049372291, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(CharacterBackreadStatus(X4_4));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(X4_4));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1049372299, Restart, function() {
    WaitFor(InArea(10000, 1049372299));
    ChangeCharacterPatrolBehavior(1049370299, 1049373299);
});
