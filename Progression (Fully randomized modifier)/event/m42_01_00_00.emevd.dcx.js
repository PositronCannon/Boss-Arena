// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(42010000, 42011950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005200, 42010230, 30001, 20001, 42012230, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 42010231, 42012231, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010233, 30002, 20002, 42012233, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010234, 30002, 20002, 42012234, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 42010229, 42012230, 1050253722, 0);
    InitializeCommonEvent(0, 90005200, 42010227, 30001, 20001, 42012227, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010228, 30001, 20001, 42012227, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010200, 30001, 20001, 42012200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010201, 30001, 20001, 42012201, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010202, 30001, 20001, 42012201, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010203, 30001, 20001, 42012201, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010205, 30001, 20001, 42012205, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010209, 30001, 20001, 42012205, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010211, 30001, 20001, 42012205, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010213, 30001, 20001, 42012205, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010214, 30001, 20001, 42012205, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010215, 30001, 20001, 42012205, 0, 8, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010210, 30000, 20000, 42012205, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010207, 30001, 20001, 42012207, 1036831949, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010208, 30001, 20001, 42012207, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010216, 30001, 20001, 42012207, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010217, 30001, 20001, 42012207, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010218, 30001, 20001, 42012207, 1061997773, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010220, 30001, 20001, 42012207, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010224, 30001, 20001, 42012233, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010225, 30001, 20001, 42012233, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010204, 30000, 20000, 42012204, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010222, 30000, 20000, 42012204, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010212, 30000, 20000, 42012212, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010206, 30001, 20001, 42012206, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42010223, 30001, 20001, 42012206, 0, 0, 0, 0, 0);
    InitializeEvent(0, 42012300, 42010212, 42012212);
    InitializeEvent(0, 42012330, 42010212, 42012212);
    InitializeCommonEvent(0, 90005555, 42017000, 42010000, 42011610);
});

$Event(42012610, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(42017000));
    CreateAssetfollowingSFX(42011610, 100, 834010);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(209200, 42011610));
    RotateCharacter(10000, 42011610, -1, true);
    ForceAnimationPlayback(10000, 60100, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateAssetfollowingSFX(42011610, 100, 800380);
    WaitFixedTimeSeconds(1);
    DeleteAssetfollowingSFX(42011610, true);
    WaitFixedTimeSeconds(2.5);
    AwardItemsIncludingClients(42010000);
});

$Event(42012300, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(X0_4, X4_4));
    SetSpEffect(X0_4, 4080);
    WaitFor(!InArea(X0_4, X4_4));
    ClearSpEffect(X0_4, 4080);
    RestartEvent();
});

$Event(42012330, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(X0_4, X4_4));
    SetSpEffect(X0_4, 4085);
    WaitFor(!InArea(X0_4, X4_4));
    ClearSpEffect(X0_4, 4085);
    RestartEvent();
});

$Event(42012360, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4, 1);
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
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X12_4);
        if (Signed(X16_4) != -1) {
            ForceAnimationPlayback(X0_4, X16_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
    EndIf(!areaChrSp.Passed);
    EndIf(!InArea(10000, X4_4));
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X0_4, 3013, false, false, false);
});


