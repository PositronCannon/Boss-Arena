// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1043380000, 1043381950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 1043381680, 100, 800, 1043388540);
    InitializeCommonEvent(0, 90005683, 62105, 1043381684, 208, 78194, 78194);
    InitializeCommonEvent(0, 90005251, 1043380260, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005460, 1043380280);
    InitializeCommonEvent(0, 90005461, 1043380280);
    InitializeCommonEvent(0, 90005462, 1043380280);
    InitializeEvent(0, 1043382270, 0);
    InitializeEvent(1, 1043382270, 0);
    InitializeEvent(0, 1043383700, 1043380700, 1043370740);
    InitializeEvent(0, 1043383701, 1043380700, 1043380701, 1043372703, 1043382701, 1043372705, 1043382702, 1043372708);
    InitializeEvent(0, 1043383702, 1043380700);
    InitializeEvent(0, 1043383703, 1043380700, 1043372712, 1126170624);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1043380700, true);
});

$Event(1043382270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1043380270);
    WaitFor(InArea(10000, 1043382270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1043380270, 1043382271, 900, 802101000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1043380270, 1043382271, 900, 802101010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1043380270, 1043382271, 900, 802101020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1043380270, 1043382271, 900, 802101030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1043380270, 1043382271, 900, 802101040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1043380270, 1043382271, 900, 802101050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1043380270, 1043382271, 900, 802101060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1043380270, 1043382271, 900, 802101070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1043382650, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(X4_4));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(X4_4)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 38, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(EventFlag(X4_4));
    SetEventFlagID(X4_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, X8_4, 1);
});

$Event(1043383700, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    GotoIf(L1, !EventFlag(1043372714));
    GotoIf(L2, EventFlag(1043372714));
L1:
    WaitFor(
        HasDamageType(X4_4, 10000, DamageType.Unspecified)
            || HasDamageType(10000, X4_4, DamageType.Unspecified));
    WaitFixedTimeSeconds(10);
    EndIf(!EventFlag(1043372714));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    SetEventFlagID(1043372717, ON);
    RestartEvent();
L2:
    WaitFor(!EventFlag(1043372714) || CharacterDead(X0_4));
    SetEventFlagID(1043372718, ON);
    EndEvent();
});

$Event(1043383701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X4_4, true);
    DisableCharacter(X4_4);
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    WaitFor(EventFlag(1043372717));
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, false);
    GotoIf(L1, InArea(10000, X8_4));
    GotoIf(L2, InArea(10000, X12_4));
    Goto(L3);
L1:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    Goto(L5);
L2:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X20_4, -1);
    Goto(L5);
L3:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X24_4, -1);
    Goto(L5);
L5:
    EnableCharacter(X4_4);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 63010, false, false, false);
    SetSpEffect(X0_4, 9651);
    SetCharacterTeamType(X0_4, TeamType.WhitePhantom);
    DisplayBlinkingMessageWithPriority(80000, 0, false);
    EndEvent();
});

$Event(1043383702, Restart, function(X0_4) {
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    EndIf(!EventFlag(3620) || (!EventFlag(3625) && !EventFlag(3626)));
    WaitFor(EventFlag(1043372718));
    WaitFixedTimeFrames(1);
    GotoIf(L1, CharacterDead(X0_4));
    GotoIf(L2, EventFlag(1043379262));
    Goto(L3);
L1:
    DisplayBlinkingMessageWithPriority(80002, 0, false);
    EndEvent();
L2:
    SetSpEffect(X0_4, 18677);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
    DisplayBlinkingMessageWithPriority(80001, 0, false);
    WaitFixedTimeSeconds(10);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    EndEvent();
L3:
    SetCharacterTeamType(X0_4, TeamType.Disabled);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(1);
    SetSpEffect(X0_4, 18677);
    DisplayBlinkingMessageWithPriority(80003, 0, false);
    WaitFixedTimeSeconds(10);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X0_4);
    EndEvent();
});

$Event(1043383703, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!PlayerIsInOwnWorld());
    SetCharacterTalkRange(X0_4, 17);
    WaitFixedTimeRealFrames(1);
    EndIf(!EventFlag(3620));
    EndIf(!EventFlag(3625) && !EventFlag(3626));
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    WaitFor(!EventFlag(1043372713) && EventFlag(1043372717));
    SetCharacterTalkRange(X0_4, X8_4);
    SetNetworkconnectedEventFlagID(X4_4, ON);
    EndEvent();
});
