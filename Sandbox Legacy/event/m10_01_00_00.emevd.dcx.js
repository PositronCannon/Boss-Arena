// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 10012682, 0);
    InitializeEvent(0, 10012800, 0);
    InitializeEvent(0, 10012810, 0);
    InitializeEvent(0, 10012811, 0);
    InitializeEvent(0, 10012849, 0);
    InitializeEvent(0, 10012500, 0);
    InitializeEvent(0, 10010790, 0);
    InitializeEvent(0, 10010791, 0);
    InitializeEvent(0, 10010792, 0);
});

$Event(50, Default, function() {
    //run character startup script if it has not already
    if (!EventFlag(1049300000))
        InitializeCommonEvent(0, 10010001, 0);
    SetCharacterBackreadState(10011700, true);
    InitializeEvent(0, 10010020, 0);
    InitializeEvent(0, 10010030, 0);
    InitializeEvent(0, 10010031, 0);
    InitializeEvent(0, 10012502, 0);
    InitializeEvent(0, 10012560, 0);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(100));
    EndIf(EventFlag(102));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    SetCurrentTime(23, 45, 0, false, false, false, 0, 0, 0);
});

$Event(10010020, Restart, function() {
    EndIf(ThisEventSlot());
    EndIf(!PlayerInMap(10, 1, 0, 0));
L0:
    EndEvent();
});

$Event(10010030, Default, function() {
    EndIf(ThisEventSlot() && EventFlag(101));
    EndIf(!PlayerInMap(10, 1, 0, 0));
});

$Event(10010031, Default, function() {
    EndIf(!PlayerInMap(10, 1, 0, 0));
    EndIf(EventFlag(101));
});

$Event(10012500, Restart, function() {
    if (EventFlag(10010500)) {
        DisableAsset(10011500);
        DisableAsset(10011501);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 10012500));
    RequestAssetDestruction(10011500, 1);
});

$Event(10012501, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(100));
    EndIf(EventFlag(102));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    SetWindSFX(808004);
    SetSpEffect(10000, 4200);
});

$Event(10012502, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(10010502));
    EndIf(!PlayerInMap(10, 1, 0, 0));
    DisableAreaWelcomeMessage();
    WaitFor(PlayerIsInOwnWorld() && !InArea(10000, 10012502));
});

$Event(10012504, Restart, function() {
    EndIf(EventFlag(10018540));
    EndIf(EventFlag(60210));
    DisableObjAct(10011540, -1);
    WaitFor(EventFlag(60210));
    EnableObjAct(10011540, -1);
});

$Event(10012560, Restart, function() {
    if (!EventFlag(10018560)) {
        WaitFor(PlayerIsInOwnWorld() && EventFlag(102));
    }
L0:
    DisableObjActAssignIdx(10011560, 2219000, 0);
    DisableObjActAssignIdx(10011560, 2219000, 1);
    DisableObjActAssignIdx(10011560, 2219000, 2);
    DisableObjActAssignIdx(10011560, 2219000, 3);
});

$Event(10012680, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(18000020));
});

$Event(10012682, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(18000020));
});

$Event(10012800, Restart, function() {
    EndIf(EventFlag(10010800));
    WaitFor(CharacterHPValue(10010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(10018000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(10010800));
    HandleBossDefeatAndDisplayBanner(10010800, TextBannerType.EnemyFelled);
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
});

$Event(10012810, Restart, function() {
    if (EventFlag(10010800)) {
        DisableCharacter(10010800);
        DisableCharacterCollision(10010800);
        ForceCharacterDeath(10010800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(10010800);
    if (!EventFlag(10010801)) {
        ForceAnimationPlayback(10010800, 30003, false, false, false);
        DisableCharacterHPBarDisplay(10010800);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 10012801))
                || HasDamageType(10010800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(10010801, ON);
        SetNetworkUpdateRate(10010800, true, CharacterUpdateFrequency.AlwaysUpdate);
        ForceAnimationPlayback(10010800, 20003, false, false, false);
        WaitFixedTimeSeconds(4);
    } else {
L1:
        DisableCharacterCollision(10010800);
        IssueShortWarpRequest(10010800, TargetEntityType.Area, 10012810, -1);
        WaitFor(EventFlag(10012805) && InArea(10000, 10012800));
        EnableCharacterCollision(10010800);
    }
L2:
    SetNetworkUpdateRate(10010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    EnableCharacterAI(10010800);
    DisplayBossHealthBar(Enabled, 10010800, 0, 904690000);
});

$Event(10012811, Restart, function() {
    EndIf(EventFlag(10010800));
    WaitFor(CharacterHasSpEffect(10010800, 16265));
});

$Event(10012849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 10010800, 10011800, 10012800, 10012805, 10015800, 10000, 10010801, 10012801);
    InitializeCommonEvent(0, 9005800, 10010800, 10011801, 10012800, 10012805, 10015800, 10000, 10010801, 10012801);
    InitializeCommonEvent(0, 9005801, 10010800, 10011801, 10012800, 10012805, 10012806, 10000);
    InitializeCommonEvent(0, 9005811, 10010800, 10011800, 16, 10010801);
    InitializeCommonEvent(0, 9005811, 10010800, 10011801, 16, 0);
    InitializeCommonEvent(0, 9005822, 10010800, 920900, 10012805, 10012806, 0, 10012802, 0, 0);
});

$Event(10010790, Restart, function() {
    SetCharacterBackreadState(10011700, false);
    EnableCharacter(10011700);
    ForceAnimationPlayback(10011700, 90100, false, false, false);
    DisableCharacterCollision(10011700);
});

$Event(10010791, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400033));
    EndIf(!EventFlag(400031));
    WaitFor(ActionButtonInArea(6471, 10011700));
    RemoveItemFromPlayer(ItemType.Goods, 8154, 1);
    AwardItemLot(100330);
    EndEvent();
});

$Event(10010792, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(50));
    EndIf(EventFlag(10019200));
    WaitFor(PlayerHasItem(ItemType.Goods, 9500) || ElapsedSeconds(5));
    WaitFixedTimeFrames(1);
    if (PlayerHasItem(ItemType.Goods, 9500)) {
    }
    EndEvent();
});

$Event(10012900, Default, function() {
    WaitFor(EventFlag(10010900));
    IncrementEventValue(10010910, 32, 999999999);
    RestartEvent();
});
