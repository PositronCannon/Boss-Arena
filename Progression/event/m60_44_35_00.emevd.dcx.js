// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    RegisterBonfire(1044350000, 1044351950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76161, 76106, 1044351980, 77110, 0, 78110, 78111, 78112, 78113, 78114, 78115, 78116, 78117, 78118, 78119);
    InitializeCommonEvent(0, 90005880, 1044350800, 1044350805, 1044352800, 1044350800, 30130, 2305084, 1044352805);
    InitializeCommonEvent(0, 90005881, 1044350800, 1044350805, 1044352801, 1044352802, 20300, 1044351805, 2305084, 1044352805);
    InitializeCommonEvent(0, 90005882, 1044350800, 1044350805, 1044352800, 1044350800, 1044352806, 1044355810, 1044351800, 1044350810, 1044352810, 904290520, -1, 20021);
    InitializeCommonEvent(0, 90005883, 1044350800, 1044350805, 1044351805);
    InitializeCommonEvent(0, 90005885, 1044350800, 0, 1044352806, 1044352807, 0, 1);
    InitializeCommonEvent(0, 90005390, 1035430270, 1035432270, 1035430270, 1035430280, 1, 1044350100);
    InitializeCommonEvent(0, 90005391, 1035430270, 1035432270, 1035430270, 1035430280, 1);
    InitializeCommonEvent(0, 90005701, 1044350720, 3981, 3982, 1044359301, 3);
    InitializeCommonEvent(0, 90005700, 1044350720, 3981, 3982, 1044359301, 1059481190, 3980, 3983, -1);
    InitializeCommonEvent(0, 90005702, 1044350720, 3983, 3980, 3983);
    InitializeEvent(0, 1044353720, 1044350720);
    InitializeEvent(0, 1044352740, 1044350710, 1044350705);
    InitializeCommonEvent(0, 90005780, 1044350800, 1044352160, 1044352161, 1044350702, 20, 1044352720, 1044349257, 0, 0);
    InitializeCommonEvent(0, 90005781, 1044350800, 1044352160, 1044352161, 1044350702);
    InitializeCommonEvent(0, 90005783, 1044350800, 1044352160, 1044352161, 1044350702, 1044352720, 0, 0);
    InitializeEvent(0, 1044352600, 1044351600, 1044352600);
    InitializeEvent(0, 1044352650, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1044350710, 1044350700, 1044350701);
    InitializeCommonEvent(0, 90005704, 1044350700, 3601, 3600, 1044359251, 3);
    InitializeCommonEvent(0, 90005703, 1044350700, 3601, 3602, 1044359251, 3603, 3600, 3603, -1);
    InitializeCommonEvent(0, 90005702, 1044350700, 3603, 3600, 3604);
    InitializeEvent(0, 1044350715, 1044350700, 1044350701);
    InitializeCommonEvent(0, 90005730, 1044359257, 1101004800, 1044359265, 3615, 1044359255, 1044359256);
    InitializeCommonEvent(0, 90005731, 1044359265, 1044350701, 1106247680, 1112014848);
    InitializeEvent(0, 1044350711, 0);
    InitializeEvent(0, 1044350713, 0);
    InitializeEvent(0, 1044350712, 1044350703);
    InitializeEvent(0, 1044350790, 0);
});

//darriwil
$Event(1044350790, Default, function() {
    WaitFor(CharacterDead(1044350800));
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0,90001023,1049304117,1049304034,-1,1049304008,1049304374,1049304473,1049304474,1049304475,1049304377,1049304379,1049304384,1049300117);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1044350700, true);
    SetCharacterBackreadState(1044350701, true);
    InitializeEvent(0, 1044352250, 0);
    InitializeCommonEvent(0, 90005251, 1044350200, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005251, 1044350201, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005251, 1044350202, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005251, 1044350203, 1084227584, 0, 0);
    InitializeCommonEvent(0, 90005251, 1044350230, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005251, 1044350231, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005261, 1044350220, 1044352220, 1092616192, 0, 0);
    InitializeCommonEvent(0, 90005251, 1044350221, 1113325568, 0, -1);
});

$Event(1044352250, Restart, function() {
    ForceCharacterDeath(1044350250, false);
    ForceCharacterDeath(1044350251, false);
});

$Event(1044352600, Restart, function(X0_4, X4_4) {
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || (InArea(10000, X4_4)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(X0_4, SoundType.GeometrySet, 810000099);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(2);
    TriggerAISound(7000, X4_4, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1044352650, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 44, 35, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    SetEventFlagID(X12_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X8_4, true, true);
    EndIf(EventFlag(X16_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, X4_4, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, X12_4, 1);
    SetEventFlagID(X16_4, ON);
    SetEventFlagID(X20_4, ON);
});

$Event(1044352740, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
});

$Event(1044350710, Restart, function(X0_4, X4_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3600)) {
            SetEventFlagID(1044359252, OFF);
        }
    }
L19:
    if (!EventFlag(3615)) {
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        DisableCharacter(X4_4);
        SetCharacterBackreadState(X4_4, true);
        WaitFor(EventFlag(3615));
        RestartEvent();
    }
L15:
    GotoIf(L0, EventFlag(3600));
    GotoIf(L1, EventFlag(3601));
    GotoIf(L3, EventFlag(3603));
L0:
    GotoIf(L5, EventFlag(1044350715));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterTalkRange(X4_4, 100);
    Goto(L20);
L5:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    ForceAnimationPlayback(X0_4, 930010, false, false, false);
    Goto(L20);
L1:
    GotoIf(L5, EventFlag(1044350715));
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L5:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
    Goto(L20);
L3:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3615));
    RestartEvent();
});

$Event(1044350711, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1044350800));
    WaitFor(EventFlag(3605) && EventFlag(1044352800));
    SetEventFlagID(1044352717, ON);
    SetEventFlagID(3618, ON);
});

$Event(1044350712, Restart, function(X0_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1044352160));
    SetCharacterTalkRange(X0_4, 100);
    SetEventFlagID(1044352715, ON);
});

$Event(1044350713, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1044350800));
    WaitFor(EventFlag(1044350800));
    EndIf(!EventFlag(1044352160));
    SetEventFlagID(1044349258, ON);
});

$Event(1044350714, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    EndIf(!EventFlag(1044350800) && EventFlag(3605) && EventFlag(3600));
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

$Event(1044350715, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    SetEventFlagID(1044359260, OFF);
    WaitFor(EventFlag(3615) && EventFlag(1044359260) && PlayerIsInOwnWorld());
    SetThisEventSlot(ON);
    WaitFixedTimeFrames(1);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterTalkRange(X4_4, 17);
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 20039, false, false, false);
    EndEvent();
});

$Event(1044353720, Default, function(X0_4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1044359300, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3980) && EventFlag(1044352720)) {
            SetEventFlagID(1044352720, OFF);
        }
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
L0:
    GotoIf(L1, EventFlag(3980));
    GotoIf(L2, EventFlag(3981));
    GotoIf(L4, EventFlag(3983));
L1:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 30003, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(X0_4);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableAsset(X0_4);
    Goto(L20);
L20:
    WaitFor(EventFlag(1044359300));
    RestartEvent();
});
