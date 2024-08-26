// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (EventFlag(1049308089))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1048510202, 30001, 20001, 0, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1048510800, 1048510810);
    InitializeEvent(0, 1048512820, 1048510800, 1048510810);
    InitializeCommonEvent(0, 90005871, 1048510800, 903150607, 10, 1048510810);
    InitializeCommonEvent(0, 1048512800, 1048510800, 0, 1048510800, 0, 1048510700, 0);
    InitializeCommonEvent(0, 90005872, 1048510800, 10, 0);
});

$Event(1048512800, Restart, function(X0_4, X8_4, X12_4, X16_4) {
    if (Signed(X16_4) != 0) {
        Unknown200476(X0_4, X16_4);
    }
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        DisableCharacter(1048510810);
        DisableCharacterCollision(1048510810);
        ForceCharacterDeath(1048510810, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(X16_4) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(X16_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(X8_4) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(X8_4, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(X8_4));
    GotoIf(S0, X12_4 == 3);
    if (X12_4 != 2) {
        if (X12_4 != 1) {
            HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.EnemyFelled);
            Goto(L1);
        }
        HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.GreatEnemyFelled);
    }
    Goto(L1);
S0:
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.DemigodFelled);
    Goto(L1);
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.LegendFelled);
L1:
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, -11100);
});

$Event(1048512820, Restart, function(X0_4, X4_4) {
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
