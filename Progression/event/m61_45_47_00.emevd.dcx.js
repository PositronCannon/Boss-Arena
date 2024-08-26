// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(76914, 2045471950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005301, 2045470200, 2045470200, 2045470400, 0, 0);
    InitializeCommonEvent(0, 90005211, 2045470221, 30000, 20001, 2045472220, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 2045470220, 2045472220, 1065353216, 0, 3010);
    InitializeCommonEvent(0, 90005301, 2045470350, 2045470350, 40916, 0, 0);
    InitializeEvent(0, 2045472542, 2045478542, 2045471542, 2045471543, 2045473543, 1464026, 10, 2, 2045473542, 464057);
    InitializeEvent(0, 2045472690, 0);
    InitializeEvent(0, 2045472695, 0);
    InitializeEvent(0, 2045472699, 0);
    InitializeEvent(0, 2045472540, 2045470540, 2045472540);
    //devonia
    InitializeEvent(0, 2045479995, 0);
});

//devonia
$Event(2045479995, Default, function() {
    WaitFor(CharacterDead(2045470200));
    //add defeat banner
    HandleBossDefeatAndDisplayBanner(2045470200, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items, DLC version)
    InitializeCommonEvent(0,90001043,1049304279,-1,-1,1049307276,1049307277,1049307278,1049307279,1049306517,1049306519,1049306521,1049306523,1049300279);
    //roundtable warp
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0)
});

$Event(2045472540, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, X4_4));
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(2045472542, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    if (EventFlag(X0_4)) {
        DisableObjAct(X8_4, X16_4);
        DisableObjAct(X4_4, X32_4);
        ReproduceAssetAnimation(X4_4, X24_4);
        EndEvent();
    }
L0:
    obj = ObjActEventFlag(X12_4);
    obj2 = ObjActEventFlag(X28_4);
    WaitFor(obj || obj2);
    SetNetworkconnectedEventFlagID(X0_4, ON);
    if (!obj2.Passed) {
        DisableObjAct(X8_4, X16_4);
        DisableObjAct(X4_4, X32_4);
        ForceAnimationPlayback(X4_4, X20_4, false, false, false);
        EndEvent();
    }
L1:
    DisableObjAct(X8_4, X16_4);
    DisableObjAct(X4_4, X32_4);
    EndEvent();
});

$Event(2045472690, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(2045472691, OFF);
    SetEventFlagID(2045472692, OFF);
    EndIf(EventFlag(2045470690));
    if (!EventFlag(2050460690)) {
        if (!EventFlag(40000690)) {
            DeleteAssetfollowingSFX(2045471690, true);
            CreateAssetfollowingSFX(2045471690, 100, 6102);
            WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(209524, 2045471690));
            ForceAnimationPlayback(10000, 60071, false, false, false);
            AwardItemsIncludingClients(2045470900);
            SetEventFlagID(2045470690, ON);
            DeleteAssetfollowingSFX(2045471690, true);
            EndEvent();
        }
    }
L10:
    item |= PlayerHasItem(ItemType.Weapon, 2540000)
        || PlayerHasItem(ItemType.Weapon, 2540001)
        || PlayerHasItem(ItemType.Weapon, 2540002)
        || PlayerHasItem(ItemType.Weapon, 2540003)
        || PlayerHasItem(ItemType.Weapon, 2540004)
        || PlayerHasItem(ItemType.Weapon, 2540005)
        || PlayerHasItem(ItemType.Weapon, 2540006)
        || PlayerHasItem(ItemType.Weapon, 2540007)
        || PlayerHasItem(ItemType.Weapon, 2540008)
        || PlayerHasItem(ItemType.Weapon, 2540009)
        || PlayerHasItem(ItemType.Weapon, 2540010);
    onlineActItem = PlayerIsInOwnWorld() && ActionButtonInArea(209525, 2045471691) && item;
    WaitFor(onlineActItem || !item);
    if (onlineActItem.Passed) {
        DisplayGenericDialogAndSetEventFlags(2020025, PromptType.YESNO, NumberofOptions.TwoButtons, 2045471691, 2, 2045472691, 2045472692, 2045472692);
        RestartIf(!EventFlag(2045472691));
        ForceAnimationPlayback(10000, 60071, false, false, false);
        if (PlayerHasItem(ItemType.Weapon, 2540010)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540010, 1);
            AwardItemsIncludingClients(2045470600);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477600, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540009)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540009, 1);
            AwardItemsIncludingClients(2045470590);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477590, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540008)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540008, 1);
            AwardItemsIncludingClients(2045470580);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477580, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540007)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540007, 1);
            AwardItemsIncludingClients(2045470570);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477570, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540006)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540006, 1);
            AwardItemsIncludingClients(2045470560);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477560, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540005)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540005, 1);
            AwardItemsIncludingClients(2045470550);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477550, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540004)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540004, 1);
            AwardItemsIncludingClients(2045470540);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477540, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540003)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540003, 1);
            AwardItemsIncludingClients(2045470530);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477530, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540002)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540002, 1);
            AwardItemsIncludingClients(2045470520);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477520, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540001)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540001, 1);
            AwardItemsIncludingClients(2045470510);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477510, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2540000)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2540000, 1);
            AwardItemsIncludingClients(2045470500);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477500, OFF);
            Goto(L11);
        }
L11:
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L0:
    ClearCompiledConditionGroupState();
    item |= PlayerHasItem(ItemType.Weapon, 2540000)
        || PlayerHasItem(ItemType.Weapon, 2540001)
        || PlayerHasItem(ItemType.Weapon, 2540002)
        || PlayerHasItem(ItemType.Weapon, 2540003)
        || PlayerHasItem(ItemType.Weapon, 2540004)
        || PlayerHasItem(ItemType.Weapon, 2540005)
        || PlayerHasItem(ItemType.Weapon, 2540006)
        || PlayerHasItem(ItemType.Weapon, 2540007)
        || PlayerHasItem(ItemType.Weapon, 2540008)
        || PlayerHasItem(ItemType.Weapon, 2540009)
        || PlayerHasItem(ItemType.Weapon, 2540010);
    WaitFor(item);
    RestartEvent();
});

$Event(2045472695, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(2045472693, OFF);
    SetEventFlagID(2045472694, OFF);
    EndIf(EventFlag(2045470690));
    if (!EventFlag(2050460690)) {
        if (!EventFlag(40000690)) {
            EndEvent();
        }
    }
L10:
    item &= !PlayerHasItem(ItemType.Weapon, 2540000)
        && !PlayerHasItem(ItemType.Weapon, 2540001)
        && !PlayerHasItem(ItemType.Weapon, 2540002)
        && !PlayerHasItem(ItemType.Weapon, 2540003)
        && !PlayerHasItem(ItemType.Weapon, 2540004)
        && !PlayerHasItem(ItemType.Weapon, 2540005)
        && !PlayerHasItem(ItemType.Weapon, 2540006)
        && !PlayerHasItem(ItemType.Weapon, 2540007)
        && !PlayerHasItem(ItemType.Weapon, 2540008)
        && !PlayerHasItem(ItemType.Weapon, 2540009)
        && !PlayerHasItem(ItemType.Weapon, 2540010)
        && (PlayerHasItem(ItemType.Weapon, 2560000)
            || PlayerHasItem(ItemType.Weapon, 2560001)
            || PlayerHasItem(ItemType.Weapon, 2560002)
            || PlayerHasItem(ItemType.Weapon, 2560003)
            || PlayerHasItem(ItemType.Weapon, 2560004)
            || PlayerHasItem(ItemType.Weapon, 2560005)
            || PlayerHasItem(ItemType.Weapon, 2560006)
            || PlayerHasItem(ItemType.Weapon, 2560007)
            || PlayerHasItem(ItemType.Weapon, 2560008)
            || PlayerHasItem(ItemType.Weapon, 2560009)
            || PlayerHasItem(ItemType.Weapon, 2560010));
    onlineActItem = PlayerIsInOwnWorld() && ActionButtonInArea(209525, 2045471691) && item;
    WaitFor(onlineActItem || !item);
    if (onlineActItem.Passed) {
        DisplayGenericDialogAndSetEventFlags(2020027, PromptType.YESNO, NumberofOptions.TwoButtons, 2045471691, 2, 2045472693, 2045472694, 2045472694);
        RestartIf(!EventFlag(2045472693));
        ForceAnimationPlayback(10000, 60071, false, false, false);
        if (PlayerHasItem(ItemType.Weapon, 2560010)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560010, 1);
            AwardItemsIncludingClients(2045470600);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477600, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560009)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560009, 1);
            AwardItemsIncludingClients(2045470590);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477590, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560008)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560008, 1);
            AwardItemsIncludingClients(2045470580);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477580, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560007)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560007, 1);
            AwardItemsIncludingClients(2045470570);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477570, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560006)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560006, 1);
            AwardItemsIncludingClients(2045470560);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477560, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560005)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560005, 1);
            AwardItemsIncludingClients(2045470550);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477550, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560004)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560004, 1);
            AwardItemsIncludingClients(2045470540);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477540, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560003)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560003, 1);
            AwardItemsIncludingClients(2045470530);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477530, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560002)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560002, 1);
            AwardItemsIncludingClients(2045470520);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477520, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560001)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560001, 1);
            AwardItemsIncludingClients(2045470510);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477510, OFF);
        } else if (PlayerHasItem(ItemType.Weapon, 2560000)) {
            RemoveItemFromPlayer(ItemType.Weapon, 2560000, 1);
            AwardItemsIncludingClients(2045470500);
            WaitFixedTimeRealFrames(1);
            SetEventFlagID(2045477500, OFF);
            Goto(L11);
        }
L11:
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L0:
    ClearCompiledConditionGroupState();
    item &= !PlayerHasItem(ItemType.Weapon, 2540000)
        && !PlayerHasItem(ItemType.Weapon, 2540001)
        && !PlayerHasItem(ItemType.Weapon, 2540002)
        && !PlayerHasItem(ItemType.Weapon, 2540003)
        && !PlayerHasItem(ItemType.Weapon, 2540004)
        && !PlayerHasItem(ItemType.Weapon, 2540005)
        && !PlayerHasItem(ItemType.Weapon, 2540006)
        && !PlayerHasItem(ItemType.Weapon, 2540007)
        && !PlayerHasItem(ItemType.Weapon, 2540008)
        && !PlayerHasItem(ItemType.Weapon, 2540009)
        && !PlayerHasItem(ItemType.Weapon, 2540010)
        && (PlayerHasItem(ItemType.Weapon, 2560000)
            || PlayerHasItem(ItemType.Weapon, 2560001)
            || PlayerHasItem(ItemType.Weapon, 2560002)
            || PlayerHasItem(ItemType.Weapon, 2560003)
            || PlayerHasItem(ItemType.Weapon, 2560004)
            || PlayerHasItem(ItemType.Weapon, 2560005)
            || PlayerHasItem(ItemType.Weapon, 2560006)
            || PlayerHasItem(ItemType.Weapon, 2560007)
            || PlayerHasItem(ItemType.Weapon, 2560008)
            || PlayerHasItem(ItemType.Weapon, 2560009)
            || PlayerHasItem(ItemType.Weapon, 2560010));
    WaitFor(item);
    RestartEvent();
});

$Event(2045472699, Restart, function() {
    if (PlayerIsInOwnWorld()) {
        if (!EventFlag(2050460690)) {
            if (!EventFlag(40000690)) {
                SetNetworkconnectedEventFlagID(2045472697, ON);
                EnableAsset(2045471690);
                DisableAsset(2045471691);
                DisableAsset(2045471692);
                EndEvent();
            }
        }
L10:
        SetNetworkconnectedEventFlagID(2045472698, ON);
        DisableAsset(2045471690);
        EnableAsset(2045471691);
        DisableAsset(2045471692);
        EndEvent();
    }
L15:
    EnableAsset(2045471690);
    DisableAsset(2045471691);
    DisableAsset(2045471692);
    WaitFor(EventFlag(2045472697) || EventFlag(2045472698));
    EndIf(EventFlag(2045472697));
    DisableAsset(2045471690);
    EnableAsset(2045471691);
    DisableAsset(2045471692);
});
