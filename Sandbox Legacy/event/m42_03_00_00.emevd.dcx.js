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
    RegisterBonfire(42030000, 42031950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005646, 42037000, 42032840, 42032841, 42031840, 42032840, 810);
    InitializeEvent(0, 42032580, 0);
    InitializeEvent(0, 42032630, 0);
    InitializeEvent(0, 42032631, 0);
    InitializeEvent(0, 42032632, 0);
    InitializeCommonEvent(0, 90005555, 42037000, 42030000, 42031600);
    InitializeCommonEvent(0, 900005610, 42031640, 100, 800, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005250, 42030300, 42032300, 0, 3015);
    InitializeCommonEvent(0, 90005200, 42030301, 30002, 20002, 42032301, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 42030305, 42032301, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030302, 30001, 20001, 42032302, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030303, 30001, 20001, 42032303, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 42030304, 42032304, 1108869120, 1084227584, 0);
    InitializeEvent(0, 42032305, 0);
    InitializeEvent(0, 42032304, 42030245, 42030246, 42030247, 42030248, 42030249);
    InitializeCommonEvent(0, 90005200, 42030200, 30000, 20000, 42032200, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030212, 30000, 20000, 42032210, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030217, 30000, 20000, 42032217, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030218, 30000, 20000, 42032217, 1036831949, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030219, 30000, 20000, 42032217, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030220, 30000, 20000, 42032217, 1053609165, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030234, 30000, 20000, 42032234, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030240, 30000, 20000, 42032230, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 42030241, 42032302, 1053609165, 0);
    InitializeCommonEvent(0, 90005200, 42030237, 30000, 20000, 42032236, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 42030238, 30000, 20000, 42032236, 1058642330, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 42030239, 42032303, 0, 0);
    InitializeEvent(0, 42032201, 42030245);
    InitializeEvent(1, 42032201, 42030246);
    InitializeEvent(2, 42032201, 42030247);
    InitializeEvent(3, 42032201, 42030248);
    InitializeEvent(4, 42032201, 42030249);
    InitializeEvent(0, 42032200, 42030200, 42032201);
});

$Event(42032580, Default, function() {
    RegisterLadder(42030580, 42030581, 42031580);
    RegisterLadder(42030582, 42030583, 42031582);
    RegisterLadder(42030584, 42030585, 42031584);
});

$Event(42032600, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(42037000));
    CreateAssetfollowingSFX(42031600, 100, 834010);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(209200, 42031600));
    RotateCharacter(10000, 42031600, -1, true);
    ForceAnimationPlayback(10000, 60100, false, false, false);
    WaitFixedTimeSeconds(1);
    CreateAssetfollowingSFX(42031600, 100, 800380);
    WaitFixedTimeSeconds(1);
    DeleteAssetfollowingSFX(42031600, true);
    WaitFixedTimeSeconds(2.5);
    AwardItemsIncludingClients(42030000);
});

$Event(42032630, Restart, function() {
    EndIf(EventFlag(42030631));
    EndIf(EventFlag(42030632));
    ReproduceAssetAnimation(42031630, 10);
    SetNetworkconnectedEventFlagID(42032631, ON);
    DisableObjAct(42031631, 449011);
});

$Event(42032631, Restart, function() {
    if (EventFlag(42030631)) {
        DisableObjAct(42031631, 449011);
        ReproduceAssetAnimation(42031630, 10);
    }
L0:
    WaitFor(!EventFlag(42030631) && ObjActEventFlag(42033631));
    SetNetworkconnectedEventFlagID(42030631, ON);
    SetNetworkconnectedEventFlagID(42030632, OFF);
    DisableObjAct(42031631, 449011);
    EnableObjAct(42031632, 449011);
    ForceAnimationPlayback(42031630, 21, false, true, false);
    RestartEvent();
});

$Event(42032632, Restart, function() {
    if (EventFlag(42030632)) {
        DisableObjAct(42031632, 449011);
        ReproduceAssetAnimation(42031630, 20);
    }
L0:
    WaitFor(!EventFlag(42030632) && ObjActEventFlag(42033632));
    SetNetworkconnectedEventFlagID(42030632, ON);
    SetNetworkconnectedEventFlagID(42030631, OFF);
    DisableObjAct(42031632, 449011);
    EnableObjAct(42031631, 449011);
    ForceAnimationPlayback(42031630, 12, false, true, false);
    RestartEvent();
});

$Event(42032200, Restart, function(X0_4, X4_4) {
    WaitFor(InArea(X0_4, X4_4));
    SetSpEffect(X0_4, 4080);
    SetSpEffect(X0_4, 4085);
    WaitFor(!InArea(X0_4, X4_4));
    ClearSpEffect(X0_4, 4080);
    ClearSpEffect(X0_4, 4085);
    RestartEvent();
});

$Event(42032201, Restart, function(X0_4) {
    DisableCharacter(X0_4);
    DisableCharacterCollision(X0_4);
    DisableCharacterGravity(X0_4);
});

$Event(42032304, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(42032249));
    if (CharacterDead(42030304)) {
        EndEvent();
    }
L0:
    WaitFor(
        CharacterHasSpEffect(42030304, 5025)
            && (!EventFlag(42032245)
                || !EventFlag(42032246)
                || !EventFlag(42032247)
                || !EventFlag(42032248)
                || !EventFlag(42032249)));
    if (!EventFlag(42032245)) {
        EnableCharacter(X0_4);
        EnableCharacterCollision(X0_4);
        EnableCharacterGravity(X0_4);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, 42030304, 100, 42030304);
        ForceAnimationPlayback(X0_4, 20002, false, false, false);
        WaitFixedTimeRealFrames(45);
        ForceAnimationPlayback(X0_4, 20003, false, false, false);
        SetCharacterHome(X0_4, 42032245);
        SetNetworkconnectedEventFlagID(42032245, ON);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    } else {
L0:
        if (!EventFlag(42032246)) {
            EnableCharacter(X4_4);
            EnableCharacterCollision(X4_4);
            EnableCharacterGravity(X4_4);
            SetNetworkUpdateRate(X4_4, true, CharacterUpdateFrequency.AlwaysUpdate);
            WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, 42030304, 100, 42030304);
            ForceAnimationPlayback(X4_4, 20002, false, false, false);
            WaitFixedTimeRealFrames(45);
            ForceAnimationPlayback(X4_4, 20003, false, false, false);
            SetCharacterHome(X4_4, 42032245);
            SetNetworkconnectedEventFlagID(42032246, ON);
            SetNetworkUpdateRate(X4_4, false, CharacterUpdateFrequency.AlwaysUpdate);
        } else {
L1:
            if (!EventFlag(42032247)) {
                EnableCharacter(X8_4);
                EnableCharacterCollision(X8_4);
                EnableCharacterGravity(X8_4);
                SetNetworkUpdateRate(X8_4, true, CharacterUpdateFrequency.AlwaysUpdate);
                WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Character, 42030304, 100, 42030304);
                ForceAnimationPlayback(X8_4, 20002, false, false, false);
                WaitFixedTimeRealFrames(45);
                ForceAnimationPlayback(X8_4, 20003, false, false, false);
                SetCharacterHome(X8_4, 42032245);
                SetNetworkconnectedEventFlagID(42032247, ON);
                SetNetworkUpdateRate(X8_4, true, CharacterUpdateFrequency.AlwaysUpdate);
            } else {
L2:
                if (!EventFlag(42032248)) {
                    EnableCharacter(X12_4);
                    EnableCharacterCollision(X12_4);
                    EnableCharacterGravity(X12_4);
                    SetNetworkUpdateRate(X12_4, true, CharacterUpdateFrequency.AlwaysUpdate);
                    WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Character, 42030304, 100, 42030304);
                    ForceAnimationPlayback(X12_4, 20002, false, false, false);
                    WaitFixedTimeRealFrames(45);
                    ForceAnimationPlayback(X12_4, 20003, false, false, false);
                    SetCharacterHome(X12_4, 42032245);
                    SetNetworkconnectedEventFlagID(42032248, ON);
                    SetNetworkUpdateRate(X12_4, true, CharacterUpdateFrequency.AlwaysUpdate);
                } else {
L3:
                    if (!EventFlag(42032249)) {
                        EnableCharacter(X16_4);
                        EnableCharacterCollision(X16_4);
                        EnableCharacterGravity(X16_4);
                        SetNetworkUpdateRate(X16_4, true, CharacterUpdateFrequency.AlwaysUpdate);
                        WarpCharacterAndCopyFloor(X16_4, TargetEntityType.Character, 42030304, 100, 42030304);
                        ForceAnimationPlayback(X16_4, 20002, false, false, false);
                        WaitFixedTimeRealFrames(45);
                        ForceAnimationPlayback(X16_4, 20003, false, false, false);
                        SetCharacterHome(X16_4, 42032245);
                        SetNetworkconnectedEventFlagID(42032249, ON);
                        SetNetworkUpdateRate(X16_4, false, CharacterUpdateFrequency.AlwaysUpdate);
                        ClearSpEffect(42030304, 8081);
                        EndEvent();
                    }
                }
            }
        }
    }
L10:
    RestartEvent();
});

$Event(42032305, Restart, function() {
    EndIf(EventFlag(42032249));
    if (CharacterDead(42030304)) {
        SetNetworkconnectedEventFlagID(42032305, ON);
        EndEvent();
    }
L0:
    WaitFor(
        InArea(10000, 42032304)
            && !EntityInRadiusOfEntity(10000, 42030304, 4, 1)
            && (!EventFlag(42032245)
                || !EventFlag(42032246)
                || !EventFlag(42032247)
                || !EventFlag(42032248)
                || !EventFlag(42032249)));
    if (!EventFlag(42032305)) {
        WaitFixedTimeSeconds(17);
    }
    if (CharacterAIState(42030304, AIStateType.Combat)) {
        SetNetworkconnectedEventFlagID(42032305, ON);
        EndEvent();
    }
    ForceAnimationPlayback(42030304, 20000, false, true, false);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});


