// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    RegisterBonfire(42000000, 42001950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005646, 42007000, 42002840, 42002841, 42001840, 42002840, 42);
    InitializeEvent(0, 42002580, 0);
    InitializeEvent(0, 42002630, 0);
    InitializeEvent(0, 42002640, 0);
    InitializeEvent(0, 42002650, 42000200, 42001650, 42002650);
    InitializeEvent(1, 42002650, 42000200, 42001651, 42002651);
    InitializeEvent(2, 42002650, 42000200, 42001652, 42002652);
    InitializeCommonEvent(0, 90005555, 42007000, 42000000, 42001610);
    InitializeCommonEvent(0, 900005610, 42001660, 100, 800, 0);
    InitializeEvent(0, 42000700, 42000700, 30013, 0, 42029205);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 42000200, 42002200, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000201, 30002, 20002, 42002201, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000202, 30002, 20002, 42002202, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 42000203, 42002203, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000300, 30000, 20000, 42002300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000305, 30000, 20000, 42002305, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 42000310, 42002310, 1106247680, 0, 0);
    InitializeCommonEvent(0, 90005211, 42000311, 30000, 20000, 42002310, 1103626240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000316, 30000, 20000, 42002316, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 42000321, 42002319, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000335, 30000, 20000, 42002335, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000336, 30000, 20000, 42002336, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000337, 30000, 20000, 42002337, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000330, 30000, 20000, 42002330, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42000331, 30000, 20000, 42002331, 1065353216, 0, 0, 0, 0);
    InitializeEvent(0, 42002330, 42000330);
    InitializeEvent(1, 42002330, 42000331);
    InitializeEvent(0, 42002315, 42000316, 42002317);
    InitializeEvent(9, 42002315, 42000330, 42002331);
    InitializeEvent(10, 42002315, 42000331, 42002331);
});

$Event(42002580, Default, function() {
    RegisterLadder(42000580, 42000581, 42001580);
    RegisterLadder(42000582, 42000583, 42001582);
    RegisterLadder(42000584, 42000585, 42001584);
    RegisterLadder(42000586, 42000587, 42001586);
});

$Event(42002610, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(42007000));
    CreateAssetfollowingSFX(42001610, 100, 834010);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(209200, 42001610));
    RotateCharacter(10000, 42001610, -1, true);
    ForceAnimationPlayback(10000, 60010, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateAssetfollowingSFX(42001610, 100, 800380);
    WaitFixedTimeSeconds(1);
    DeleteAssetfollowingSFX(42001610, true);
    WaitFixedTimeSeconds(2.5);
    AwardItemsIncludingClients(42000000);
});

$Event(42002630, Restart, function() {
    if (EventFlag(42000630)) {
        DisableObjAct(42001631, 449011);
        ForceAnimationPlayback(42001630, 2, false, true, false);
        RestartEvent();
    }
L0:
    WaitFor(!EventFlag(42000630) && ObjActEventFlag(42003631));
    SetNetworkconnectedEventFlagID(42000630, ON);
    DisableObjAct(42001631, 449011);
    ForceAnimationPlayback(42001630, 1, false, true, false);
    RestartEvent();
});

$Event(42002640, Restart, function() {
    ReproduceAssetAnimation(42001641, 20);
    DisableAsset(42001640);
    EndEvent();
});

$Event(42002641, Restart, function() {
    EndIf(EventFlag(42000641));
    if (EventFlag(42000640)) {
        WaitFor(InArea(10000, 42002641) && EventFlag(42000640));
        DisableAsset(42001640);
        SetNetworkconnectedEventFlagID(42000641, ON);
    }
L0:
    EndEvent();
});

$Event(42002650, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(AssetHitBy(X4_4, X0_4));
    SetNetworkconnectedEventFlagID(X8_4, ON);
    RequestAssetDestruction(X4_4, 1);
});

$Event(42002200, Restart, function() {
    EndIf(ThisEventSlot());
    DisableCharacterAI(42000200);
    chr = CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(42000200, 481)
        && !CharacterHasSpEffect(42000200, 90100)
        && !CharacterHasSpEffect(42000200, 90110)
        && !CharacterHasSpEffect(42000200, 90160);
    sp2 = CharacterHasSpEffect(42000200, 482)
        && !CharacterHasSpEffect(42000200, 90100)
        && !CharacterHasSpEffect(42000200, 90120)
        && !CharacterHasSpEffect(42000200, 90160)
        && !CharacterHasSpEffect(42000200, 90162);
    sp3 = CharacterHasSpEffect(42000200, 483)
        && !CharacterHasSpEffect(42000200, 90100)
        && !CharacterHasSpEffect(42000200, 90140)
        && !CharacterHasSpEffect(42000200, 90160)
        && !CharacterHasSpEffect(42000200, 90161);
    sp4 = CharacterHasSpEffect(42000200, 484)
        && !CharacterHasSpEffect(42000200, 90100)
        && !CharacterHasSpEffect(42000200, 90130)
        && !CharacterHasSpEffect(42000200, 90161)
        && !CharacterHasSpEffect(42000200, 90162);
    sp5 = CharacterHasSpEffect(42000200, 487)
        && !CharacterHasSpEffect(42000200, 90100)
        && !CharacterHasSpEffect(42000200, 90150)
        && !CharacterHasSpEffect(42000200, 90160);
    areaChr = InArea(10000, 42002200) && chr;
    WaitFor(
        HasDamageType(42000200, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(42000200, 436)
            || CharacterHasStateInfo(42000200, 2)
            || CharacterHasStateInfo(42000200, 5)
            || CharacterHasStateInfo(42000200, 6)
            || CharacterHasStateInfo(42000200, 260)
            || areaChr
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(42000200, 3004, true, false, false);
    EnableCharacterAI(42000200);
});

$Event(42002315, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(X0_4, X4_4));
    SetSpEffect(X0_4, 4080);
    SetSpEffect(X0_4, 4085);
    WaitFor(!InArea(X0_4, X4_4));
    ClearSpEffect(X0_4, 4080);
    ClearSpEffect(X0_4, 4085);
    RestartEvent();
});

$Event(42002330, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    DisableCharacter(X0_4);
    DisableCharacterGravity(X0_4);
    SetCharacterMaphit(X0_4, false);
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 42002340));
    EnableCharacter(X0_4);
    EnableCharacterGravity(X0_4);
    SetCharacterMaphit(X0_4, true);
});

$Event(42000700, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!EventFlag(X12_4)) {
L0:
        EnableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, false);
        DisableCharacterGravity(X0_4);
        ForceAnimationPlayback(X0_4, X4_4, false, false, false);
        EndIf(X8_4 == 0);
        WaitFor(CharacterHasSpEffect(X0_4, 9624));
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
        DisableCharacterGravity(X0_4);
    } else {
L5:
        DisableCharacter(X0_4);
        SetCharacterBackreadState(X0_4, true);
        Goto(L20);
    }
L20:
    EndEvent();
});


