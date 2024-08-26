// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //infinite hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(2051440000, 2051441950, 0, 0, 0, 5);
    InitializeEvent(0, 2051442800, 0);
    InitializeEvent(0, 2051442810, 0);
    InitializeEvent(0, 2051442849, 0);
    InitializeCommonEvent(0, 90005250, 2051440200, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005250, 2051440202, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005250, 2051440203, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005250, 2051440204, 2051442210, 0, -1);
    InitializeCommonEvent(0, 90005301, 2051440300, 2051440300, 2051440500, 1077936128, 0);
    InitializeCommonEvent(0, 90005301, 2051440310, 2051440310, 2051440510, 1077936128, 0);
    InitializeCommonEvent(0, 900005610, 2051441270, 100, 800, 0);
    InitializeEvent(0, 2051442490, 0);
});

//test disable miquella charm break

//$Event(2051442490, Restart, function() {
//    EndIf(EventFlag(4927));
//    WaitFor(InArea(10000, 2051442490) && PlayerIsInOwnWorld());
//    SetNetworkconnectedEventFlagID(4927, ON);
//    SetSpEffect(20000, 20004230);
//});

$Event(2051442800, Restart, function() {
    Unknown200476(2051440800, 30830);
    EndIf(EventFlag(2051440800));
    WaitFor(CharacterHPValue(2051440800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2051440800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2051440800));
    HandleBossDefeatAndDisplayBanner(2051440800, TextBannerType.EnemyFelled);
    //roundtable warp
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
});

$Event(2051442810, Restart, function() {
    if (EventFlag(2051440800)) {
        DisableCharacter(2051440800);
        DisableCharacterCollision(2051440800);
        ForceCharacterDeath(2051440800, false);
        EndIf(!PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(30830);
        EndEvent();
    }
L0:
    DisableCharacterAI(2051440800);
    SetCharacterTeamType(2051440800, TeamType.Enemy);
    DisableCharacter(2051440800);
    WaitFor(EventFlag(2051442805) && InArea(10000, 2051442800));
    EnableCharacter(2051440800);
    ForceAnimationPlayback(2051440800, 63100, false, true, false);
    SetSpEffect(2051440800, 20018695);
    WaitFixedTimeRealFrames(1);
    EnableCharacterAI(2051440800);
    SetNetworkUpdateRate(2051440800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2051440800, 0, 900000562);
});

$Event(2051442849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 2051440800, 2051441800, 2051442800, 2051442805, 2051445800, 10000, 0, 0);
    InitializeCommonEvent(0, 9005801, 2051440800, 2051441800, 2051442800, 2051442805, 2051442806, 10000);
    InitializeCommonEvent(0, 9005811, 2051440800, 2051441800, 3, 0);
    InitializeCommonEvent(0, 9005822, 2051440800, 921100, 2051442805, 2051442806, 0, 2051442802, 0, 0);
});
