// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeCommonEvent(0, 90005600, 76354, 1037521950, 1077936128, 0);
    InitializeCommonEvent(0, 90005261, 1037520204, 1037522204, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037520205, 1037522204, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037520206, 1037522204, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037520207, 1037522500, 1088421888, 1069547520, 3022);
    InitializeCommonEvent(0, 90005261, 1037520500, 1037522500, 1092616192, 1065353216, 3013);
    InitializeCommonEvent(0, 90005261, 1037520301, 1037522301, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037520303, 1037522301, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037520304, 1037522301, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037520305, 1037522301, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1037520401, 1037522301, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005211, 1037520400, 30000, 20000, 1037522405, 1077936128, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1037520300, 1037522302, 1084227584, 1073741824, -1);
    InitializeCommonEvent(0, 90005261, 1037520310, 1037522350, 1092616192, 0, -1);
    InitializeCommonEvent(1, 90005261, 1037520311, 1037522350, 1092616192, 0, -1);
    InitializeCommonEvent(2, 90005261, 1037520312, 1037522350, 1092616192, 0, -1);
    InitializeCommonEvent(3, 90005261, 1037520313, 1037522350, 1092616192, 0, -1);
    InitializeCommonEvent(4, 90005261, 1037520314, 1037522350, 1092616192, 0, -1);
    InitializeCommonEvent(5, 90005261, 1037520315, 1037522350, 1092616192, 0, -1);
    InitializeCommonEvent(6, 90005261, 1037520350, 1037522350, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005771, 1037520951, 1037522700);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005300, 1037520355, 1037525350, 0, 0, 0);
    InitializeCommonEvent(0, 90005600, 1037520001, 1037521951, 1084227584, 0);
    InitializeCommonEvent(0, 90005200, 1037520614, 30000, 20000, 1037522614, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520615, 30000, 20000, 1037522614, 1069547520, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520616, 30000, 20000, 1037522614, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520617, 30000, 20000, 1037522614, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520618, 30000, 20000, 1037522614, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520619, 30000, 20000, 1037522614, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520620, 30000, 20000, 1037522614, 1073741824, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520621, 30000, 20000, 1037522614, 1065353216, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1037520622, 30000, 20000, 1037522614, 0, 0, 0, 0, 0);
});

$Event(1035542210, Restart, function(X0_4) {
    EndIf(EventFlag(1037520350));
    DisableCharacter(X0_4);
    WaitFor(HPRatio(1037520350) < 0.7);
    EnableCharacter(X0_4);
    SetSpEffect(X0_4, 8971);
});

$Event(1037522220, Restart, function() {
    ForceCharacterDeath(1037520220, false);
    ForceCharacterDeath(1037520221, false);
    ForceCharacterDeath(1037520222, false);
    ForceCharacterDeath(1037520223, false);
    ForceCharacterDeath(1037520224, false);
    ForceCharacterDeath(1037520225, false);
    ForceCharacterDeath(1037520226, false);
    ForceCharacterDeath(1037520227, false);
    ForceCharacterDeath(1037520228, false);
    ForceCharacterDeath(1037520229, false);
});

$Event(1037522900, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (!EventFlag(X24_4)) {
        DisableCharacter(X4_4);
        DisableCharacter(X20_4);
        DisableAsset(X8_4);
        WaitFixedTimeSeconds(1);
        WaitFor(CharacterDead(X16_4));
        SpawnOneshotSFX(TargetEntityType.Asset, X8_4, 200, 1060);
        SetEventFlagID(X24_4, ON);
        WaitFixedTimeSeconds(0.5);
        EnableCharacter(X4_4);
        EnableCharacter(X20_4);
        EnableAsset(X8_4);
    }
L0:
    RegisterBonfire(X0_4, X8_4, 5, 180, 0, X12_4);
});

$Event(1037522300, Restart, function() {
    ClearSpEffect(1037520300, 5070);
    ClearSpEffect(1037520301, 5070);
});

$Event(1037522350, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 3021, false, true, false);
    SetThisEventSlot(ON);
    EndEvent();
});

$Event(1037522370, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 3022, false, true, false);
    SetThisEventSlot(ON);
    EndEvent();
});
