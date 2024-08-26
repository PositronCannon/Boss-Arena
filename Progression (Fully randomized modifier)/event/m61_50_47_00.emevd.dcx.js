// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005250, 2050470800, 2050472800, 0, -1);
    InitializeEvent(0, 2050472810, 2050470800, 906251600, 12);
    InitializeEvent(0, 2050472811, 2050480860, 906251601, 12);
    InitializeEvent(0, 2050472400, 0);
    InitializeEvent(0, 2050472820, 2050470800, 0, 2050470800, 0, 30935, 0);
    InitializeEvent(1, 2050472821, 2050480860, 0, 2050480860, 0, 30950, 0);
    InitializeEvent(0, 2050472800, 0);
    InitializeCommonEvent(0, 90005250, 2050470309, 2050472309, 0, -1);
    InitializeCommonEvent(0, 90005250, 2050470310, 2050472309, 0, -1);
    InitializeCommonEvent(0, 90005250, 2050470311, 2050472309, 0, -1);
    InitializeCommonEvent(0, 90005250, 2050470312, 2050472309, 0, -1);
    InitializeCommonEvent(0, 90005250, 2050470313, 2050472309, 0, -1);
    InitializeCommonEvent(0, 90005250, 2050470314, 2050472309, 0, -1);
    InitializeCommonEvent(0, 90005211, 2050470315, 30016, 20016, 2050472315, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2050470316, 30014, 20014, 2050472315, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 2050470317, 30014, 20014, 2050472315, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(1, 90005271, 2050470351, 0, -1);
    InitializeCommonEvent(2, 90005271, 2050470352, 0, -1);
    InitializeCommonEvent(3, 90005271, 2050470353, 0, -1);
    InitializeCommonEvent(6, 90005271, 2050470356, 0, -1);
    InitializeCommonEvent(7, 90005271, 2050470357, 0, -1);
    InitializeEvent(0, 2050472205, 2050470250, 2050472250, 2050472270, 1073741824, 2050470251);
    InitializeCommonEvent(0, 90005790, 0, 2050470180, 2050472181, 2050472182, 2050470710, 23, 2050472710, 2050472711, 0, 2045429292, 0, 0);
    InitializeCommonEvent(0, 90005791, 2050470180, 2050472181, 2050472182, 2050470710);
    InitializeCommonEvent(0, 90005792, 2050470180, 2050472181, 2050472182, 2050470710, 0, 0);
    InitializeCommonEvent(0, 90005793, 2050470180, 2050472181, 2050472182, 2050470710, 2050472710, 0, 0);
    InitializeCommonEvent(0, 90005774, 2050470180, 116401, 400645);
    InitializeCommonEvent(0, 90005780, 2050470400, 2050472160, 2050472161, 2050470720, 20, 2050472721, 2051459752, 1, 0);
    InitializeCommonEvent(0, 90005781, 2050470400, 2050472160, 2050472161, 2050470720);
    InitializeCommonEvent(0, 90005783, 2050470400, 2050472160, 2050472161, 2050470720, 2050472720, 2050472400, 0);
    InitializeCommonEvent(0, 90005757, 2050470700, 2050470701, 4385, 4952, 2045422710, 4383);
    InitializeCommonEvent(0, 90005759, 2045429280, 4385, 4962, 2050470700, 4952, 2045429292, 4950, 4956, 2045429281, 2045429282, 4901, 1065353216, 2045429342, 1106247680);
    InitializeCommonEvent(0, 90005778, 2050472700, 4952, 400752, 2050470700);
    InitializeCommonEvent(0, 90005779, 2050470700, 4952, 20016, 4385, 4383);
    InitializeCommonEvent(0, 90005744, 2050470700, 2050479200, 2050479200, 20015);
    InitializeCommonEvent(0, 90005766, 2050472181, 2050470710, 1120403456, 2045429277, 4962);
    InitializeCommonEvent(0, 90005767, 2045429280, 4380, 4383, 2050470710, 4901, 2050470711, 2045429297);
    InitializeCommonEvent(0, 90005777, 2050470711, 4962, 4383, 2050472181);
    InitializeCommonEvent(0, 90005774, 2045429297, 116401, 400645);
    InitializeEvent(0, 2050470705, 0);
});

$Event(2050472205, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!CharacterHasSpEffect(X0_4, 20011469)) {
        SetSpEffect(X0_4, 20011469);
    }
    DisableCharacterGravity(X0_4);
    DisableCharacterCollision(X16_4);
    DisableCharacterGravity(X16_4);
    DisableCharacterAI(X16_4);
    DisableLockOnPoint(X16_4, 220);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)));
    if (EntityInRadiusOfEntity(10000, X0_4, X12_4, 1)
        || InArea(10000, X8_4)
        || HasDamageType(X0_4, 0, DamageType.Unspecified)
        || CharacterHasStateInfo(X0_4, 436)
        || CharacterHasStateInfo(X0_4, 2)
        || CharacterHasStateInfo(X0_4, 5)
        || CharacterHasStateInfo(X0_4, 6)
        || CharacterHasStateInfo(X0_4, 260)) {
        SetSpEffect(X16_4, 20013351);
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        EndEvent();
    }
L0:
    SetSpEffect(X0_4, 20011467);
    if (!CharacterHasSpEffect(X0_4, 5025)) {
        ForceAnimationPlayback(X0_4, 3000, false, false, false);
    }
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2050472400, Restart, function() {
    EndIf(EventFlag(2050470400));
    WaitFor(EventFlag(2050470800) && EventFlag(2050480800));
    SetEventFlagID(2050470400, ON);
});

$Event(2050472800, Default, function() {
    DisableNetworkSync();
    WaitFor(
        ((HPRatio(2050470800) <= 0.55 && !CharacterDead(2050470800))
            || (HPRatio(2050480860) <= 0.55 && !CharacterDead(2050480860)))
            && FieldBattleBGMActive(12));
    SetFieldBattleBGMHeatUp(12, true);
    WaitFor((CharacterDead(2050470800) && CharacterDead(2050480860)) || !FieldBattleBGMActive(12));
    SetFieldBattleBGMHeatUp(12, false);
    WaitFixedTimeSeconds(0.3);
    RestartEvent();
});

$Event(2050472810, Default, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat)
            && FieldBattleBGMActive(X8_4)
            && !EventFlag(9000)
            && !EventFlag(X0_4));
L0:
    SetEventFlagID(9290, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 0, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9290, OFF);
    RestartEvent();
});

$Event(2050472811, Default, function(X0_4, X4_4, X8_4) {
    DisableNetworkSync();
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat)
            && FieldBattleBGMActive(X8_4)
            && !EventFlag(9000)
            && !EventFlag(X0_4));
L0:
    SetEventFlagID(9291, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, X0_4, 1, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
        SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    WaitFor(
        !(CharacterAIState(X0_4, AIStateType.Combat) && FieldBattleBGMActive(X8_4))
            || CharacterDead(X0_4)
            || EventFlag(9000));
    if (CharacterDead(X0_4)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, X0_4, 1, X4_4);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Normal);
        SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9291, OFF);
    RestartEvent();
});

$Event(2050472820, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (Signed(X16_4) != 0) {
        Unknown200476(X0_4, X16_4);
    }
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(X16_4) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(X16_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(X8_4) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(X8_4, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2050470800) && CharacterDead(2050480860));
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items, DLC version)
    InitializeCommonEvent(0,90001043,1049304296,1049304152,1049304158,1049307305,1049307306,1049307307,1049307308,1049306589,1049306591,1049306594,1049306599,1049300296);
    //roundtable warp
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
L7:
    if (CharacterAIState(2050480860, AIStateType.Combat) && FieldBattleBGMActive(12)) {
        DisplayBossHealthBar(Enabled, 2050480860, 1, 906251601);
    }
    SetEventFlagID(X0_4, ON);
    if (X4_4 != 0) {
        SetEventFlagID(X4_4, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(X16_4) == 0);
    EndEvent();
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X12_4);
});

$Event(2050472821, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (Signed(X16_4) != 0) {
        Unknown200476(X0_4, X16_4);
    }
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(X16_4) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(X16_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(X8_4) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(X8_4, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2050470800) && CharacterDead(2050480860));
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items, DLC version)
    InitializeCommonEvent(0,90001043,1049304296,1049304152,1049304158,1049307305,1049307306,1049307307,1049307308,1049306589,1049306591,1049306594,1049306599,1049300296);
    //roundtable warp
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
L7:
    if (CharacterAIState(2050470800, AIStateType.Combat) && FieldBattleBGMActive(12)) {
        DisplayBossHealthBar(Enabled, 2050470800, 0, 906251600);
    }
    SetEventFlagID(X0_4, ON);
    if (X4_4 != 0) {
        SetEventFlagID(X4_4, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(X16_4) == 0);

    EndEvent();
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X12_4);
});

$Event(2050470705, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(2051459752, OFF);
    EndIf(EventFlag(2050470800));
    EndIf(!EventFlag(2051459708) && !EventFlag(2051459719) && !EventFlag(2051459720));
    EndIf(EventFlag(25000800));
    SetEventFlagID(2051459752, ON);
    WaitFor(EventFlag(2050470800) || EventFlag(25000800));
    SetEventFlagID(2051459752, OFF);
});
