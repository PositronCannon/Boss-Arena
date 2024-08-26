// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9005810, 25000800, 25000000, 25000950, 25001950, 1084227584);
    InitializeEvent(0, 25002800, 0);
    InitializeEvent(0, 25002810, 0);
    InitializeEvent(0, 25002849, 0);
    InitializeEvent(0, 25002812, 0);
    InitializeEvent(0, 25002811, 0);
    InitializeEvent(0, 25002819, 0);
    InitializeEvent(0, 25002820, 25000820, 25002820);
    InitializeEvent(1, 25002820, 25000821, 25002821);
    InitializeEvent(2, 25002820, 25000822, 25002822);
    InitializeEvent(3, 25002820, 25000823, 25002823);
    InitializeEvent(4, 25002820, 25000824, 25002824);
    InitializeEvent(5, 25002820, 25000825, 25002825);
    InitializeEvent(6, 25002820, 25000826, 25002826);
    InitializeEvent(7, 25002820, 25000827, 25002827);
    InitializeEvent(8, 25002820, 25000828, 25002828);
    InitializeEvent(9, 25002820, 25000829, 25002829);
    InitializeEvent(10, 25002820, 25000830, 25002830);
    InitializeEvent(11, 25002820, 25000831, 25002831);
    InitializeEvent(12, 25002820, 25000832, 25002832);
    InitializeEvent(13, 25002820, 25000833, 25002833);
    InitializeEvent(14, 25002820, 25000834, 25002834);
    InitializeEvent(0, 25002840, 0);
    InitializeEvent(0, 25000700, 2051459725, 25002805);
    InitializeEvent(0, 25000701, 2051459207, 25000800, 2051459750, 2051459751, 2051459752);
});

$Event(50, Default, function() {
    InitializeEvent(0, 25002200, 0);
});

$Event(25002200, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(25000800));
    WaitFor(PlayerInMap(25, 0, 0, 0) && !EventFlag(25000800));
});

$Event(25000700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4));
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(25000701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4));
    SetEventFlagID(X0_4, ON);
    SetEventFlagID(X8_4, OFF);
    SetEventFlagID(X12_4, OFF);
    SetEventFlagID(X16_4, OFF);
    EndEvent();
});

$Event(25002800, Restart, function() {
    EndIf(EventFlag(25000800));
    WaitFor(CharacterHPValue(25000800) <= 0);
    ForceCharacterDeath(25000820, false);
    ForceCharacterDeath(25000821, false);
    ForceCharacterDeath(25000822, false);
    ForceCharacterDeath(25000823, false);
    ForceCharacterDeath(25000824, false);
    ForceCharacterDeath(25000825, false);
    ForceCharacterDeath(25000826, false);
    ForceCharacterDeath(25000827, false);
    ForceCharacterDeath(25000828, false);
    ForceCharacterDeath(25000829, false);
    ForceCharacterDeath(25000830, false);
    ForceCharacterDeath(25000831, false);
    ForceCharacterDeath(25000832, false);
    ForceCharacterDeath(25000833, false);
    ForceCharacterDeath(25000834, false);
    WaitFixedTimeSeconds(4);
    PlaySE(25000800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(25000800));
    HandleBossDefeatAndDisplayBanner(25000800, TextBannerType.LegendFelled);
    //boss rewards (6 bonus items, DLC version)
InitializeCommonEvent(0,90001046,1049304303,1049304154,1049304158,1049307316,1049307317,1049307318,1049307319,1049307320,1049307321,1049307321,1049306619,1049306623,1049306626,1049306631,1049306633,1049306635,1049306637,1049300303);
    //roundtable warp
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
});

$Event(25002810, Restart, function() {
    if (EventFlag(25000800)) {
        DisableCharacter(25000800);
        DisableCharacterCollision(25000800);
        ForceCharacterDeath(25000800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(25000800);
    DisableCharacterHPBarDisplay(25000800);
    DisableLockOnPoint(25000800, 220);
    EnableCharacterDefaultBackread(25000800);
    WaitFor(
        (InArea(10000, 25002800)
            && CharacterBackreadStatus(25000800)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)))
            || HasDamageType(25000800, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(25000800, 436)
            || CharacterHasStateInfo(25000800, 2)
            || CharacterHasStateInfo(25000800, 5)
            || CharacterHasStateInfo(25000800, 6)
            || CharacterHasStateInfo(25000800, 260));
    SetNetworkconnectedEventFlagID(25002803, ON);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(25000801, ON);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(2051452602, ON);
    }
    SetNetworkconnectedEventFlagID(25002801, ON);
    EnableLockOnPoint(25000800, 220);
    EnableCharacterAI(25000800);
    SetNetworkUpdateRate(25000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 25000800, 0, 905200000);
});

$Event(25002819, Restart, function() {
    EndIf(EventFlag(25000800));
    WaitFor(CharacterHasSpEffect(25000800, 20010850));
    if (!EventFlag(25002820)) {
        EnableCharacterGravity(25000820);
        EnableCharacterCollision(25000820);
        EnableCharacterAI(25000820);
        InvokeEnemyGenerator(25004820);
        SetEventFlagID(25002820, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000820, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002821)) {
        EnableCharacterGravity(25000821);
        EnableCharacterCollision(25000821);
        EnableCharacterAI(25000821);
        InvokeEnemyGenerator(25004821);
        SetEventFlagID(25002821, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000821, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002822)) {
        EnableCharacterGravity(25000822);
        EnableCharacterCollision(25000822);
        EnableCharacterAI(25000822);
        InvokeEnemyGenerator(25004822);
        SetEventFlagID(25002822, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000822, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002823)) {
        EnableCharacterGravity(25000823);
        EnableCharacterCollision(25000823);
        EnableCharacterAI(25000823);
        InvokeEnemyGenerator(25004823);
        SetEventFlagID(25002823, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000823, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002824)) {
        EnableCharacterGravity(25000824);
        EnableCharacterCollision(25000824);
        EnableCharacterAI(25000824);
        InvokeEnemyGenerator(25004824);
        SetEventFlagID(25002824, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000824, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002825)) {
        EnableCharacterGravity(25000825);
        EnableCharacterCollision(25000825);
        EnableCharacterAI(25000825);
        InvokeEnemyGenerator(25004825);
        SetEventFlagID(25002825, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000825, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002826)) {
        EnableCharacterGravity(25000826);
        EnableCharacterCollision(25000826);
        EnableCharacterAI(25000826);
        InvokeEnemyGenerator(25004826);
        SetEventFlagID(25002826, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000826, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002827)) {
        EnableCharacterGravity(25000827);
        EnableCharacterCollision(25000827);
        EnableCharacterAI(25000827);
        InvokeEnemyGenerator(25004827);
        SetEventFlagID(25002827, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000827, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002828)) {
        EnableCharacterGravity(25000828);
        EnableCharacterCollision(25000828);
        EnableCharacterAI(25000828);
        InvokeEnemyGenerator(25004828);
        SetEventFlagID(25002828, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000828, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002829)) {
        EnableCharacterGravity(25000829);
        EnableCharacterCollision(25000829);
        EnableCharacterAI(25000829);
        InvokeEnemyGenerator(25004829);
        SetEventFlagID(25002829, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000829, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002830)) {
        EnableCharacterGravity(25000830);
        EnableCharacterCollision(25000830);
        EnableCharacterAI(25000830);
        InvokeEnemyGenerator(25004830);
        SetEventFlagID(25002830, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000830, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002831)) {
        EnableCharacterGravity(25000831);
        EnableCharacterCollision(25000831);
        EnableCharacterAI(25000831);
        InvokeEnemyGenerator(25004831);
        SetEventFlagID(25002831, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000831, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002832)) {
        EnableCharacterGravity(25000832);
        EnableCharacterCollision(25000832);
        EnableCharacterAI(25000832);
        InvokeEnemyGenerator(25004832);
        SetEventFlagID(25002832, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000832, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002833)) {
        EnableCharacterGravity(25000833);
        EnableCharacterCollision(25000833);
        EnableCharacterAI(25000833);
        InvokeEnemyGenerator(25004833);
        SetEventFlagID(25002833, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000833, TargetEntityType.Character, 25000800, 40);
    } else if (!EventFlag(25002834)) {
        EnableCharacterGravity(25000834);
        EnableCharacterCollision(25000834);
        EnableCharacterAI(25000834);
        InvokeEnemyGenerator(25004834);
        SetEventFlagID(25002834, ON);
        WaitFixedTimeRealFrames(1);
        IssueShortWarpRequest(25000834, TargetEntityType.Character, 25000800, 40);
        Goto(L20);
    }
L20:
    ActivateMultiplayerdependantBuffs(25005848);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(25002820, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterDead(X0_4) && EventFlag(X4_4));
    SetNetworkconnectedEventFlagID(X4_4, OFF);
    WaitFixedTimeSeconds(0.1);
    WaitFor(EventFlag(X4_4));
    RestartEvent();
});

$Event(25002811, Restart, function() {
    EndIf(EventFlag(25000800));
    DeactivateGparamOverride(6);
    WaitFor(CharacterHasSpEffect(25000800, 20010880));
    DisableAsset(25001610);
    DisableAsset(25005610);
    ActivateGparamOverride(3, 3);
    WaitFor(!CharacterHasSpEffect(25000800, 20010880));
    EnableAsset(25001610);
    EnableAsset(25005610);
    RestartEvent();
});

$Event(25002812, Restart, function() {
    EndIf(EventFlag(25000800));
    WaitFor(CharacterHasSpEffect(25000800, 20010890));
    SetEventFlagID(25002802, ON);
});

$Event(25002840, Restart, function() {
    EndIf(EventFlag(25000800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        EventFlag(25002820)
            && EventFlag(25002821)
            && EventFlag(25002822)
            && EventFlag(25002823)
            && EventFlag(25002824)
            && EventFlag(25002825)
            && EventFlag(25002826)
            && EventFlag(25002827)
            && EventFlag(25002828)
            && EventFlag(25002829)
            && EventFlag(25002830)
            && EventFlag(25002831)
            && EventFlag(25002832)
            && EventFlag(25002833)
            && EventFlag(25002834));
    SetSpEffect(25000800, 20010855);
    WaitFixedTimeSeconds(60);
    WaitFor(
        !EventFlag(25002820)
            || !EventFlag(25002821)
            || !EventFlag(25002822)
            || !EventFlag(25002823)
            || !EventFlag(25002824)
            || !EventFlag(25002825)
            || !EventFlag(25002826)
            || !EventFlag(25002827)
            || !EventFlag(25002828)
            || !EventFlag(25002829)
            || !EventFlag(25002830)
            || !EventFlag(25002831)
            || !EventFlag(25002832)
            || !EventFlag(25002833)
            || !EventFlag(25002834));
    ClearSpEffect(25000800, 20010855);
    WaitFixedTimeRealFrames(10);
    RestartEvent();
});

$Event(25002849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 25000800, 0, 0, 25002805, 25005800, 10000, 25002801, 25002800);
    InitializeCommonEvent(0, 9005822, 25000800, 520000, 25002805, 25002806, 25002803, 25002802, 0, 0);
});
