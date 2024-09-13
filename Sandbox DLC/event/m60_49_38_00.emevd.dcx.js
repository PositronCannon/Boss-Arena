// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    RegisterLadder(49381500, 49381501, 1049381500);
    RegisterLadder(49381502, 49381503, 1049381502);
    RegisterLadder(49381504, 49381505, 1049381504);
    InitializeCommonEvent(0, 9005810, 1049380800, 1049380000, 1049380950, 1049381950, 1084227584);
    RegisterBonfire(1049380001, 1049381951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76418, 76413, 1049381981, 77400, 5, 78400, 78401, 78402, 78403, 78404, 78405, 78406, 78407, 78408, 78409);
    InitializeCommonEvent(0, 90005511, 1049380560, 1049381560, 1049383560, 99020, 0);
    InitializeCommonEvent(0, 90005512, 1049380560, 1049382560, 1049382561);
    InitializeCommonEvent(0, 90005780, 1049380800, 1049382160, 1049382161, 1049380700, 20, 1049382701, 0, 1, 0);
    InitializeCommonEvent(0, 90005781, 1049380800, 1049382160, 1049382161, 1049380700);
    InitializeCommonEvent(0, 90005783, 1049380800, 1049382160, 1049382161, 1049380700, 1049382700, 1049382400, 0);
    InitializeCommonEvent(0, 90005300, 1049380290, 1049380290, 40404, 0, 0);
    InitializeEvent(0, 1049382210, 0);
    InitializeEvent(0, 1049382211, 1049381235, 1086324736);
    InitializeEvent(1, 1049382211, 1049381236, 1094713344);
    InitializeEvent(2, 1049382211, 1049381237, 1077936128);
    InitializeEvent(3, 1049382211, 1049381238, 1073741824);
    InitializeEvent(4, 1049382211, 1049381239, 1092616192);
    InitializeEvent(5, 1049382211, 1049381240, 1096810496);
    InitializeEvent(6, 1049382211, 1049381241, 1090519040);
    InitializeEvent(7, 1049382211, 1049381242, 1084227584);
    InitializeEvent(8, 1049382211, 1049381243, 1082130432);
    InitializeCommonEvent(0, 90005250, 1049380399, 1049382399, 0, -1);
    InitializeEvent(0, 1049382200, 1049380200, 14807);
    InitializeEvent(1, 1049382200, 1049380201, 14807);
    InitializeEvent(2, 1049382200, 1049380202, 14807);
    InitializeCommonEvent(0, 90005250, 1049380200, 1049382200, 0, -1);
    InitializeCommonEvent(0, 90005250, 1049380201, 1049382200, 0, -1);
    InitializeCommonEvent(0, 90005250, 1049380202, 1049382200, 0, -1);
    InitializeCommonEvent(0, 90005200, 1049380311, 30002, 20002, 1049382311, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 1049380306, 1049382311, 1118044160, -1);
    InitializeCommonEvent(0, 90005250, 1049380310, 1049382311, 1102053376, -1);
    InitializeCommonEvent(0, 90005250, 1049380312, 1049382311, 1122369536, -1);
    InitializeCommonEvent(0, 90005250, 1049380313, 1049382311, 1112014848, -1);
    InitializeCommonEvent(0, 90005251, 1049380800, 1108082688, 0, -1);
    InitializeCommonEvent(0, 90005870, 1049380800, 903050600, 11);
    InitializeCommonEvent(0, 90005860, 1049380800, 0, 1049380800, 1, 30405, 0);
    InitializeCommonEvent(0, 90005872, 1049380800, 11, 0);
    InitializeEvent(0, 1049382820, 1049380800, 1049385800, 11130, 20015);
    InitializeEvent(0, 1049382824, 1049380800, 1049385801, 11131, 20015);
    InitializeEvent(0, 1049382821, 1049380800, 1049385800, 1049385801, 20016);
});

$Event(1049382200, Restart, function(X0_4, X4_4) {
    SetSpEffect(X0_4, X4_4);
});

$Event(1049382210, Restart, function() {
    CreateBulletOwner(1049380299);
});

$Event(1049382211, Restart, function(X0_4, X4_4) {
    EnableNetworkSync();
    WaitFixedTimeSeconds(8);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 70, 1));
    WaitFixedTimeSeconds(X4_4);
    if (GameCycle() == 0) {
        ShootBullet(1049380299, X0_4, -1, 802700000, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1049380299, X0_4, -1, 802700010, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1049380299, X0_4, -1, 802700020, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1049380299, X0_4, -1, 802700030, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1049380299, X0_4, -1, 802700040, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1049380299, X0_4, -1, 802700050, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1049380299, X0_4, -1, 802700060, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1049380299, X0_4, -1, 802700070, 0, 0, 0);
        Goto(L0);
    }
L0:
    RestartEvent();
});

$Event(1049382399, Default, function(X0_4, X4_4, X8_4) {
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterHasSpEffect(X0_4, X8_4) && !CharacterDead(X0_4));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, -1, X0_4);
    ForceAnimationPlayback(X0_4, 20025, true, false, false);
    RequestCharacterAIReplan(X0_4);
});

$Event(1049382820, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(1049380800)) {
        DisableCharacter(X4_4);
        DisableCharacterCollision(X4_4);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
L0:
    if (!EventFlag(1049382300)) {
        DisableCharacterAI(X4_4);
        DisableCharacter(X4_4);
        WaitFor(CharacterHasSpEffect(X0_4, X8_4) && !CharacterDead(X0_4));
        RequestCharacterAICommand(X0_4, -1, 0);
    }
L1:
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    EnableCharacterAI(X4_4);
    if (!EventFlag(1049382300)) {
        SetEventFlagID(1049382300, ON);
        ForceAnimationPlayback(X4_4, X12_4, false, true, false);
    }
});

$Event(1049382821, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X0_4)) {
        DisableCharacter(X4_4);
        DisableCharacterCollision(X4_4);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4));
    ForceAnimationPlayback(X4_4, X12_4, false, false, true);
    ForceAnimationPlayback(X8_4, X12_4, false, false, true);
    WaitFixedTimeSeconds(3);
    DisableCharacter(X4_4);
    DisableCharacterCollision(X4_4);
    ForceCharacterDeath(X4_4, false);
    DisableCharacter(X8_4);
    DisableCharacterCollision(X8_4);
    ForceCharacterDeath(X8_4, false);
    EndEvent();
});

$Event(1049382824, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(1049380800)) {
        DisableCharacter(X4_4);
        DisableCharacterCollision(X4_4);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
L0:
    if (!EventFlag(1049382301)) {
        DisableCharacterAI(X4_4);
        DisableCharacter(X4_4);
        WaitFor(CharacterHasSpEffect(X0_4, X8_4) && !CharacterDead(X0_4));
        RequestCharacterAICommand(X0_4, -1, 0);
    }
L1:
    EnableCharacter(X4_4);
    EnableCharacterCollision(X4_4);
    EnableCharacterAI(X4_4);
    if (!EventFlag(1049382301)) {
        SetEventFlagID(1049382301, ON);
        ForceAnimationPlayback(X4_4, X12_4, false, true, false);
    }
});


