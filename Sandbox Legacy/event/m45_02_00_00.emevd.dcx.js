// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 45022200, 0);
    InitializeEvent(0, 45022210, 0);
    InitializeEvent(0, 45022220, 0);
    InitializeEvent(0, 45022260, 0);
    GotoIf(L0, HasArenaMatchType(ArenaMatchType.Duel, false));
    GotoIf(L0, HasArenaMatchType(ArenaMatchType.Duel, true));
    GotoIf(L1, HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, false));
    GotoIf(L1, HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, true));
    GotoIf(L2, HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, false));
    GotoIf(L2, HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, true));
    GotoIf(L3, HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, false));
    GotoIf(L3, HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, true));
    GotoIf(L4, HasArenaMatchType(ArenaMatchType.OneVersusOne, false));
    GotoIf(L4, HasArenaMatchType(ArenaMatchType.OneVersusOne, true));
    GotoIf(L5, HasArenaMatchType(ArenaMatchType.TwoVersusTwo, false));
    GotoIf(L5, HasArenaMatchType(ArenaMatchType.TwoVersusTwo, true));
    GotoIf(L6, HasArenaMatchType(ArenaMatchType.ThreeVersusThree, false));
    GotoIf(L6, HasArenaMatchType(ArenaMatchType.ThreeVersusThree, true));
L0:
    InitializeCommonEvent(0, 98005100, 0, 45022300, 88000, 88020);
    InitializeCommonEvent(0, 98005110, 45022300);
    InitializeCommonEvent(0, 98005121, 45022300);
    EndEvent();
L1:
    InitializeCommonEvent(0, 98005100, 1, 45022300, 88001, 88021);
    Goto(L9);
L2:
    InitializeCommonEvent(0, 98005100, 2, 45022300, 88002, 88022);
    Goto(L9);
L3:
    InitializeCommonEvent(0, 98005100, 3, 45022300, 88003, 88023);
    Goto(L9);
L4:
    InitializeCommonEvent(0, 98005100, 4, 45022300, 88004, 88024);
    Goto(L9);
L5:
    InitializeCommonEvent(0, 98005100, 5, 45022300, 88005, 88025);
    Goto(L9);
L6:
    InitializeCommonEvent(0, 98005100, 6, 45022300, 88006, 88026);
    Goto(L9);
L9:
    InitializeCommonEvent(0, 98005120, 45022300);
});

$Event(45022200, Default, function() {
    DisableNetworkSync();
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, false));
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, true));
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.OneVersusOne, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoVersusTwo, false));
    EndIf(HasArenaMatchType(ArenaMatchType.ThreeVersusThree, false));
    WaitFor(PlayerRespawnedInArena());
    SetEventFlagID(45020110, OFF);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(45022210, Default, function() {
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, false));
    EndIf(HasArenaMatchType(ArenaMatchType.OneVersusOne, false));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoVersusTwo, false));
    EndIf(HasArenaMatchType(ArenaMatchType.ThreeVersusThree, false));
    DisableNetworkSync();
    WaitFor(CharacterDead(10000));
    SetSpEffect(10000, 202);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(45022220, Default, function() {
    DisableNetworkSync();
    EndIf(HasArenaMatchType(ArenaMatchType.Duel, true));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoPlayerBrawl, true));
    EndIf(HasArenaMatchType(ArenaMatchType.FourPlayerBrawl, true));
    EndIf(HasArenaMatchType(ArenaMatchType.SixPlayerBrawl, true));
    EndIf(HasArenaMatchType(ArenaMatchType.OneVersusOne, true));
    EndIf(HasArenaMatchType(ArenaMatchType.TwoVersusTwo, true));
    EndIf(HasArenaMatchType(ArenaMatchType.ThreeVersusThree, true));
    SetEventFlagID(45020110, ON);
    DisableCharacter(45020110);
});

$Event(45022260, Restart, function() {
    EndIf(!PlayerInMap(45, 2, 0, 0));
    SetPlayerPositionDisplay(Disabled, true, 60, 42, 40, 0, -24.47, 208.82, -66.69);
});


