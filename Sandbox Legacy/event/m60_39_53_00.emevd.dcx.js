// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005600, 76350, 1039531950, 1084227584, 0);
    InitializeCommonEvent(0, 90005100, 71602, 76350, 1039531980, 77350, 1, 78350, 78351, 78352, 78353, 78354, 78355, 78356, 78357, 78358, 78359);
    InitializeCommonEvent(0, 90005261, 1039530350, 1039532350, 1114636288, 0, -1);
    InitializeCommonEvent(0, 90005200, 1039530360, 30005, 20005, 1039532360, 1077936128, 0, 0, 0, 0);
    InitializeEvent(0, 1039532400, 0);
    InitializeEvent(0, 1039532650, 0);
    InitializeEvent(0, 1039532660, 0);
    InitializeEvent(0, 1039532600, 0);
    InitializeEvent(0, 1039532610, 0);
    InitializeEvent(0, 1039532300, 0);
    InitializeEvent(0, 1039532670, 0);
    RegisterLadder(1039530580, 1039530581, 1039531580);
    InitializeCommonEvent(0, 90005795, 7603, 0, 1039539200, 1039532141, 1039532142, 80603, 9000, 1039531700, 30010);
    if (CeremonyActive(20)) {
        InitializeCommonEvent(0, 90005796, 7603, 1039530700, 5, 1039532141);
        InitializeEvent(0, 1039532145, 0);
    }
    InitializeEvent(0, 1039533700, 0);
    InitializeCommonEvent(0, 90005774, 7603, 1039530700, 1039537700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039530700, true);
});

$Event(100, Default, function() {
    InitializeEvent(0, 1039532500, 0);
});

$Event(1039532145, Restart, function() {
    EndIf(!CeremonyActive(20));
    SetCharacterBackreadState(1039530700, false);
    SetCharacterTeamType(1039530700, TeamType.Human);
    DeleteAssetfollowingSFX(1039536700, true);
    CreateAssetfollowingSFX(1039536700, 200, 806700);
});

$Event(1039532300, Restart, function() {
    EndIf(ThisEventSlot());
    EnableAssetInvunerability(1039531426);
    SetNetworkconnectedThisEventSlot(ON);
});

$Event(1039532400, Restart, function() {
    if (!EventFlag(1039530510)) {
        DisableAsset(1039536400);
        DisableAsset(1039531480);
        DisableAssetTreasure(1039533501);
        DisableAsset(1039531481);
        DisableAssetTreasure(1039533502);
        WaitFor(
            EventFlag(1039530655)
                && EventFlag(1039520655)
                && EventFlag(1040530655)
                && !AllPlayersInArea(1039532260));
        SetNetworkconnectedEventFlagID(1039530510, ON);
        WaitFixedTimeSeconds(2);
    }
L0:
    EnableAsset(1039536400);
    EnableAsset(1039531480);
    EnableAssetTreasure(1039533501);
    EnableAsset(1039531481);
    EnableAssetTreasure(1039533502);
    EndEvent();
});

$Event(1039532500, Restart, function() {
    if (!EventFlag(1039530505)) {
        WaitFor(EntityInRadiusOfEntity(10000, 1039531500, 100, 1));
        SetNetworkconnectedEventFlagID(1039530505, ON);
        SpawnOneshotSFX(TargetEntityType.Asset, 1039531500, -1, 806850);
        ForceAnimationPlayback(1039531500, 1, false, true, false);
    }
L0:
    DisableAsset(1039531500);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1039532600, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9210, 1039531600));
    DisplayGenericDialog(60031, PromptType.OKCANCEL, NumberofOptions.OneButton, 1039531600, 3);
    if (!EventFlag(1039537080)) {
        AwardItemsIncludingClients(1039530080);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1039532610, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1039537080));
    WaitFor(PlayerIsInOwnWorld() && EventFlag(1039537080));
    WaitFixedTimeSeconds(2);
    DisplayGenericDialog(30101, PromptType.YESNO, NumberofOptions.NoButtons, 0, 5);
});

$Event(1039532650, Restart, function() {
    if (!EventFlag(1039530655)) {
        DisableAsset(1039531650);
        DeleteMapSFX(1039532650, false);
        WaitFor(EventFlag(1039530505));
        EnableAsset(1039531650);
        SpawnMapSFX(1039532650);
        EndEvent();
    }
L0:
    DisableAsset(1039531650);
    DeleteMapSFX(1039532650, false);
    EndEvent();
});

$Event(1039532660, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1039530655));
    WaitFor(
        EventFlag(1039530505) && InArea(10000, 1039532651) && ActionButtonInArea(9521, 1039531650));
    SetNetworkconnectedEventFlagID(1039530655, ON);
    DisableAsset(1039531650);
    RotateCharacter(10000, 1039531650, -1, true);
    ForceAnimationPlayback(10000, 60010, false, false, false);
    WaitFixedTimeSeconds(1);
    PlaySE(1039532650, SoundType.SFX, 806855);
    DeleteMapSFX(1039532650, true);
    EndEvent();
});

$Event(1039532670, Restart, function() {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1039530510);
    MoveBloodstainAndDroppedItems(1039532270, 1039532272);
    MoveBloodstainAndDroppedItems(1039532271, 1039532272);
});

$Event(1039533700, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(400074));
    SetEventFlagID(1039539200, ON);
    EndEvent();
});
