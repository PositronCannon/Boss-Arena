// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000"
// @linked    [0,72,154,238]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeEvent(0, 1038422200, 1038420200);
    InitializeEvent(1, 1038422200, 1038420201);
    InitializeEvent(2, 1038422200, 1038420202);
    InitializeEvent(3, 1038422200, 1038420210);
    InitializeEvent(4, 1038422200, 1038420211);
    InitializeEvent(5, 1038422200, 1038420212);
    InitializeEvent(0, 1038422230, 1038420220, 1038422230, 1038422220);
    InitializeEvent(1, 1038422230, 1038420221, 1038422230, 1038422221);
    InitializeEvent(2, 1038422230, 1038420222, 1038422230, 1038422222);
    InitializeEvent(3, 1038422230, 1038420223, 1038422230, 1038422223);
    InitializeEvent(4, 1038422230, 1038420224, 1038422230, 1038422224);
    InitializeEvent(5, 1038422230, 1038420225, 1038422230, 1038422225);
    InitializeEvent(6, 1038422230, 1038420226, 1038422231, 1038422226);
    InitializeEvent(7, 1038422230, 1038420227, 1038422231, 1038422227);
    InitializeEvent(8, 1038422230, 1038420228, 1038422231, 1038422228);
    InitializeEvent(9, 1038422230, 1038420229, 1038422231, 1038422229);
    InitializeEvent(10, 1038422230, 1038420230, 1038422231, 1038422230);
    InitializeEvent(0, 1038422240, 0);
    InitializeEvent(0, 1038422580, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005261, 1038420240, 1038422240, 1106247680, 0, 0);
});

$Event(1038422200, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});

$Event(1038422230, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    EndIf(SpecialStandbyEndedFlag(X0_4));
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChr = InArea(10000, X4_4)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260);
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    areaChrSp = areaChr && chrSp;
    WaitFor(areaChrSp || sp || sp2 || sp3 || sp4 || sp5);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    SetSpecialStandbyEndedFlag(X0_4, ON);
    WaitRandomTimeSeconds(0, 0.5);
    ForceAnimationPlayback(X0_4, 30004, false, false, false);
    EnableCharacter(X0_4);
    EnableCharacterCollision(X0_4);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    EndEvent();
});

$Event(1038422240, Restart, function() {
    EndIf(CharacterDead(1038420240));
    SetSpEffect(1038420240, 8089);
    EndEvent();
});

$Event(1038422580, Default, function() {
    RegisterLadder(1038420580, 1038420581, 1038421580);
    RegisterLadder(1038420582, 1038420583, 1038421582);
    RegisterLadder(1038420584, 1038420585, 1038421584);
});
