// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    RegisterBonfire(1035430000, 1035431950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005390, 1035430220, 1035432220, 1035430220, 1035430230, 1, 1035430100);
    InitializeCommonEvent(0, 90005391, 1035430220, 1035432220, 1035430220, 1035430230, 1);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005211, 1035430200, 30001, 20001, 1035432200, 1077936128, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1035430201, 30001, 20001, 1035432200, 1077936128, 1075838976, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1035430202, 30001, 20001, 1035432200, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1035430203, 30001, 20001, 1035432200, 1077936128, 1065353216, 0, 0, 0, 0);
});

$Event(1035432390, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    GotoIf(L0, !EventFlag(X0_4));
    DisableCharacter(X8_4);
    DisableCharacterGravity(X8_4);
    DisableCharacterCollision(X8_4);
    DisableCharacterAI(X8_4);
    DisableCharacter(X12_4);
    DisableCharacterGravity(X12_4);
    DisableCharacterCollision(X12_4);
    DisableCharacterAI(X12_4);
    EndEvent();
    GotoIf(L0, !EventFlag(X4_4));
    DisableCharacter(X8_4);
    DisableCharacterGravity(X8_4);
    DisableCharacterCollision(X8_4);
    DisableCharacterAI(X8_4);
    EnableCharacter(X12_4);
    EnableCharacterGravity(X12_4);
    EnableCharacterCollision(X12_4);
    EnableCharacterAI(X12_4);
    EndEvent();
L0:
    DisableCharacter(X12_4);
    DisableCharacterGravity(X12_4);
    DisableCharacterCollision(X12_4);
    DisableCharacterAI(X12_4);
    EnableCharacterFadeOnEnable(X12_4);
    WaitFor(CharacterDead(X8_4));
    EnableCharacterDefaultBackread(X8_4);
    EnableCharacterDefaultBackread(X12_4);
    WaitFixedTimeSeconds(0.5);
    DisableCharacterGravity(X8_4);
    DisableCharacterCollision(X8_4);
    DisableCharacterAI(X8_4);
    EnableDistancebasedNetworkUpdateAuthority(X8_4);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(X12_4, TargetEntityType.Character, X8_4, 900, X8_4);
L1:
    WaitFixedTimeSeconds(0.5);
    SetSpEffect(X8_4, 4305);
    GotoIf(L2, Signed(X16_4) == 1);
    GotoIf(L3, Signed(X16_4) == 0);
L2:
    SpawnOneshotSFX(TargetEntityType.Character, X8_4, 900, 601101);
    Goto(L4);
L3:
    SpawnOneshotSFX(TargetEntityType.Character, X8_4, 900, 601100);
    Goto(L4);
L4:
    EnableCharacter(X12_4);
    EnableCharacterGravity(X12_4);
    EnableCharacterCollision(X12_4);
    EnableCharacterAI(X12_4);
    DisableCharacter(X8_4);
    DisableCharacterDefaultBackread(X8_4);
    DisableCharacterDefaultBackread(X12_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(X4_4, ON);
    }
});

$Event(1035432395, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4) && CharacterDead(X12_4));
    WaitFixedTimeSeconds(1);
    GotoIf(L1, Signed(X16_4) == 1);
    GotoIf(L2, Signed(X16_4) == 0);
L1:
    SpawnOneshotSFX(TargetEntityType.Character, X12_4, 960, 601111);
    Goto(L3);
L2:
    SpawnOneshotSFX(TargetEntityType.Character, X12_4, 960, 601110);
    Goto(L3);
L3:
    SetSpEffect(X12_4, 4305);
    WaitFixedTimeSeconds(3);
    if (Signed(X20_4) != 0) {
        if (PlayerIsInOwnWorld()) {
            AwardItemsIncludingClients(X20_4);
        }
    }
    DisableCharacter(X8_4);
    DisableCharacterGravity(X8_4);
    DisableCharacterCollision(X8_4);
    DisableCharacterAI(X8_4);
    DisableCharacter(X12_4);
    DisableCharacterGravity(X12_4);
    DisableCharacterCollision(X12_4);
    DisableCharacterAI(X12_4);
    SetEventFlagID(X0_4, ON);
});
