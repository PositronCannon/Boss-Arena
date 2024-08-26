// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //check if startup script has already run
    if (!EventFlag(1049300000)) {
        InitializeEvent(0, 10010001, 0);
    }
L0:
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

$Event(10010001, Default, function() {
    SetEventFlagID(100, ON);
    SetEventFlagID(9021, ON);
    SetEventFlagID(10010500, ON);
    SetEventFlagID(10010502, ON);
    SetEventFlagID(10018560, ON);
    SetEventFlagID(710000, ON);
    SetEventFlagID(10012802, ON);
    SetEventFlagID(66150, ON);
    SetEventFlagID(66170, ON);
    SetEventFlagID(66180, ON);
    SetEventFlagID(10019200, ON);
    SetEventFlagID(1041389412, ON);
    SetEventFlagID(1041389406, ON);
    SetEventFlagID(60835, ON);
    SetEventFlagID(1041389407, ON);
    SetEventFlagID(1041389411, ON);
    SetEventFlagID(1041382735, ON);
    SetEventFlagID(1041389408, ON);
    SetEventFlagID(11109258, ON);
    SetEventFlagID(11109260, ON);
    SetEventFlagID(11109261, ON);
    SetEventFlagID(11109262, ON);
    SetEventFlagID(11109263, ON);
    SetEventFlagID(30102455, OFF);
    SetEventFlagID(3063, ON);
    SetEventFlagID(11109268, ON);
    SetEventFlagID(35009306, ON);
    SetEventFlagID(4247, ON);
    SetEventFlagID(11109270, ON);
    SetEventFlagID(4248, ON);
    SetEventFlagID(11109272, ON);
    SetEventFlagID(4249, ON);
    SetEventFlagID(11109271, ON);
    SetEventFlagID(1041382732, ON);
    SetEventFlagID(1041389409, ON);
    SetEventFlagID(1041389413, ON);
    SetEventFlagID(3700, ON);
    SetEventFlagID(11102710, ON);
    SetEventFlagID(11109207, ON);
    SetEventFlagID(11109210, ON);
    SetEventFlagID(11109213, ON);
    SetEventFlagID(1041382735, ON);
    SetEventFlagID(11109255, ON);
    SetEventFlagID(11109256, ON);
    SetEventFlagID(60835, ON);
    SetEventFlagID(11109265, ON);
    SetEventFlagID(60803, ON);
    SetEventFlagID(11109267, ON);
    SetEventFlagID(1041389411, ON);
    SetEventFlagID(951, ON);
    SetEventFlagID(953, ON);
    SetEventFlagID(4680, ON);
    SetEventFlagID(4681, ON);
    //torrent whistle
    AwardItemLot(100000);
    //flask of tears
    AwardItemLot(2000);
    //spirit calling bell
    AwardItemLot(103900);
    //30 golden seeds
    AwardItemLot(1035460105);
    //12 sacred tears
    AwardItemLot(1036490005);
    //8 memory stones
    AwardItemLot(1034430105);
    //3 talisman pouch
    AwardItemLot(10005);
    //great runes
    DirectlyGivePlayerItem(ItemType.Goods, 191, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 192, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 193, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 194, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 195, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 196, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 10080, 951, 1);
    //physick flask
    DirectlyGivePlayerItem(ItemType.Goods, 250, 951, 1);
    //crystal tears
    DirectlyGivePlayerItem(ItemType.Goods, 11000, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11001, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11002, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11003, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11004, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11005, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11006, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11007, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11008, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11009, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11010, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11011, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11012, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11013, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11014, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11015, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11016, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11017, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11018, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11019, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11020, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11021, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11022, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11023, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11024, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11025, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11026, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11027, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11028, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11029, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11030, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 11031, 951, 1);
    //whetstones
    DirectlyGivePlayerItem(ItemType.Goods, 8590, 951, 1);
    SetEventFlagID(60130, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 8970, 951, 1);
    SetEventFlagID(65610, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 8971, 951, 1);
    SetEventFlagID(65660, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 8972, 951, 1);
    SetEventFlagID(65720, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 8973, 951, 1);
    SetEventFlagID(65680, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 8974, 951, 1);
    SetEventFlagID(65640, ON);
    //sewing items
    DirectlyGivePlayerItem(ItemType.Goods, 8163, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 8188, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 8161, 951, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 8162, 951, 1);
    //enable armor alteration
    SetEventFlagID(60140, ON);
    SetEventFlagID(60150, ON);
    //maps
    AwardItemLot(1042370200);
    AwardItemLot(1044320000);
    AwardItemLot(1045370020);
    AwardItemLot(1049400500);
    AwardItemLot(1049370500);
    AwardItemLot(1038410200);
    AwardItemLot(1037440210);
    AwardItemLot(1034480200);
    AwardItemLot(1040520500);
    AwardItemLot(1042510500);
    AwardItemLot(1036540500);
    AwardItemLot(1049530700);
    AwardItemLot(1052540700);
    AwardItemLot(1048560700);
    AwardItemLot(12010000);
    AwardItemLot(12010010);
    AwardItemLot(12020060);
    AwardItemLot(12030000);
    AwardItemLot(12050000);
    AwardItemLot(50070);
    //crafting kit
    DirectlyGivePlayerItem(ItemType.Goods, 8500, 951, 1);
    SetEventFlagID(60120, ON);
    //cookbooks
    DirectlyGivePlayerItem(ItemType.Goods, 9300, 951, 1);
    SetEventFlagID(67000, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9311, 951, 1);
    SetEventFlagID(67110, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9301, 951, 1);
    SetEventFlagID(67010, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9380, 951, 1);
    SetEventFlagID(67800, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9383, 951, 1);
    SetEventFlagID(67830, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9302, 951, 1);
    SetEventFlagID(67020, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9305, 951, 1);
    SetEventFlagID(67050, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9388, 951, 1);
    SetEventFlagID(67880, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9343, 951, 1);
    SetEventFlagID(67430, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9303, 951, 1);
    SetEventFlagID(67030, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9322, 951, 1);
    SetEventFlagID(67220, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9306, 951, 1);
    SetEventFlagID(67060, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9308, 951, 1);
    SetEventFlagID(67080, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9387, 951, 1);
    SetEventFlagID(67870, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9390, 951, 1);
    SetEventFlagID(67900, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9329, 951, 1);
    SetEventFlagID(67290, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9310, 951, 1);
    SetEventFlagID(67100, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9327, 951, 1);
    SetEventFlagID(67270, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9307, 951, 1);
    SetEventFlagID(67070, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9323, 951, 1);
    SetEventFlagID(67230, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9312, 951, 1);
    SetEventFlagID(67120, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9389, 951, 1);
    SetEventFlagID(67890, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9309, 951, 1);
    SetEventFlagID(67090, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9391, 951, 1);
    SetEventFlagID(67910, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9361, 951, 1);
    SetEventFlagID(67610, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9360, 951, 1);
    SetEventFlagID(67600, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9365, 951, 1);
    SetEventFlagID(67650, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9364, 951, 1);
    SetEventFlagID(67640, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9363, 951, 1);
    SetEventFlagID(67630, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9313, 951, 1);
    SetEventFlagID(67130, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9423, 951, 1);
    SetEventFlagID(68230, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9320, 951, 1);
    SetEventFlagID(67200, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9321, 951, 1);
    SetEventFlagID(67210, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9328, 951, 1);
    SetEventFlagID(67280, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9326, 951, 1);
    SetEventFlagID(67260, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9331, 951, 1);
    SetEventFlagID(67310, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9330, 951, 1);
    SetEventFlagID(67300, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9325, 951, 1);
    SetEventFlagID(67250, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9341, 951, 1);
    SetEventFlagID(67410, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9345, 951, 1);
    SetEventFlagID(67450, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9348, 951, 1);
    SetEventFlagID(67480, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9340, 951, 1);
    SetEventFlagID(67400, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9342, 951, 1);
    SetEventFlagID(67420, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9346, 951, 1);
    SetEventFlagID(67460, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9347, 951, 1);
    SetEventFlagID(67470, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9344, 951, 1);
    SetEventFlagID(67440, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9384, 951, 1);
    SetEventFlagID(67840, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9385, 951, 1);
    SetEventFlagID(67850, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9386, 951, 1);
    SetEventFlagID(67860, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9392, 951, 1);
    SetEventFlagID(67920, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9400, 951, 1);
    SetEventFlagID(68000, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9401, 951, 1);
    SetEventFlagID(68010, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9403, 951, 1);
    SetEventFlagID(68030, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9402, 951, 1);
    SetEventFlagID(68020, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9420, 951, 1);
    SetEventFlagID(68200, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9422, 951, 1);
    SetEventFlagID(68220, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9421, 951, 1);
    SetEventFlagID(68210, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9440, 951, 1);
    SetEventFlagID(68400, ON);
    DirectlyGivePlayerItem(ItemType.Goods, 9441, 951, 1);
    SetEventFlagID(68410, ON);
    //give dlc cookbooks
    AwardItemLot(2044460100);
    AwardItemLot(2045480700);
    AwardItemLot(2046380060);
    AwardItemLot(2046400010);
    AwardItemLot(2046430030);
    AwardItemLot(2046440040);
    AwardItemLot(2046480011);
    AwardItemLot(2047350010);
    AwardItemLot(2047390030);
    AwardItemLot(2047410050);
    AwardItemLot(2047420020);
    AwardItemLot(2047440000);
    AwardItemLot(2047440810);
    AwardItemLot(2047450030);
    AwardItemLot(2048370060);
    AwardItemLot(2048380020);
    AwardItemLot(2048420010);
    AwardItemLot(2048460020);
    AwardItemLot(2049380040);
    AwardItemLot(2049380050);
    AwardItemLot(2049390010);
    AwardItemLot(2049430400);
    AwardItemLot(2049430510);
    AwardItemLot(2049440000);
    AwardItemLot(2050410000);
    AwardItemLot(2051410010);
    AwardItemLot(2051450010);
    AwardItemLot(2051460010);
    AwardItemLot(2054400000);
    AwardItemLot(107525);
    AwardItemLot(107505);
    AwardItemLot(107515);
    AwardItemLot(107535);
    AwardItemLot(107545);
    AwardItemLot(107555);
    AwardItemLot(41000240);
    AwardItemLot(42000120);
    AwardItemLot(40000010);
    AwardItemLot(40010900);
    AwardItemLot(21000660);
    AwardItemLot(106400);
    AwardItemLot(22000010);
    AwardItemLot(28000060);
    AwardItemLot(21020030);
    AwardItemLot(524095715);
    DirectlyGivePlayerItem(ItemType.Goods,2009341,951,1);
    SetEventFlagID(68910, ON);
    //give dlc crystal tears
    AwardItemLot(2045460501);
    AwardItemLot(2046390061);
    AwardItemLot(2046420981);
    AwardItemLot(2048400021);
    AwardItemLot(2048460705);
    AwardItemLot(2050460501);
    AwardItemLot(2050460511);
    AwardItemLot(2051450701);
    //give dlc maps
    AwardItemLot(2046450710);
    AwardItemLot(2047410900);
    AwardItemLot(2048370040);
    AwardItemLot(2048450500);
    AwardItemLot(2052410600);
    //set startup script flag on
    SetEventFlagID(1049300000, ON);
    //warp to roundtable
    WarpPlayer(11, 10, 0, 0, 11100000, -11100);
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
