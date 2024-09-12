// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005870, 2046460800, 905210600, 23);
    InitializeCommonEvent(0, 90005860, 2046460800, 0, 2046460800, 0, 30940, 0);
    InitializeCommonEvent(0, 90005872, 2046460800, 23, 2046462802);
    InitializeEvent(0, 2046462814, 0);
    InitializeEvent(0, 2046462811, 0);
    InitializeEvent(0, 2046462815, 0);
    InitializeEvent(0, 2046462816, 0);
    InitializeEvent(0, 2046462830, 0);
    InitializeEvent(0, 2046462817, 2046460800);
    InitializeEvent(1, 2046462820, 2046462851, 2046463801);
    InitializeEvent(2, 2046462820, 2046462852, 2046463802);
    InitializeEvent(3, 2046462820, 2046462853, 2046463803);
    InitializeEvent(4, 2046462820, 2046462854, 2046463804);
    InitializeEvent(5, 2046462820, 2046462855, 2046463805);
    InitializeEvent(6, 2046462820, 2046462856, 2046463806);
    InitializeEvent(7, 2046462820, 2046462857, 2046463807);
    InitializeEvent(8, 2046462820, 2046462858, 2046463808);
    InitializeEvent(9, 2046462820, 2046462859, 2046463809);
    InitializeEvent(0, 2046462840, 2046460815);
    InitializeEvent(1, 2046462840, 2046460816);
    InitializeEvent(2, 2046462840, 2046460817);
    InitializeEvent(3, 2046462840, 2046460818);
    InitializeCommonEvent(0, 90005301, 2046460290, 2046460290, 2046460000, 1077936128, 0);
    InitializeCommonEvent(0, 90005557, 2046461680);
    InitializeCommonEvent(0, 90005557, 2046461681);
    InitializeCommonEvent(0, 90005557, 2046461682);
    InitializeCommonEvent(0, 90005557, 2046461683);
    InitializeCommonEvent(0, 90005557, 2046461684);
    InitializeCommonEvent(0, 90005557, 2046461685);
    InitializeCommonEvent(0, 90005557, 2046461686);
    InitializeCommonEvent(0, 90005556, 2046461687, 2046467800);
    InitializeCommonEvent(0, 90005638, 2046460500, 2046461500, 2046461501);
});

$Event(2046462811, Restart, function() {
    EndIf(EventFlag(20000800));
    WaitFor(
        CharacterHasSpEffect(10000, 20011220)
            && (CharacterHasSpEffect(10000, 501000)
                || CharacterHasSpEffect(10000, 501001)
                || CharacterHasSpEffect(10000, 501002)
                || CharacterHasSpEffect(10000, 501003)
                || CharacterHasSpEffect(10000, 501004)
                || CharacterHasSpEffect(10000, 501005)
                || CharacterHasSpEffect(10000, 501006)
                || CharacterHasSpEffect(10000, 501007)
                || CharacterHasSpEffect(10000, 501008)
                || CharacterHasSpEffect(10000, 501009)
                || CharacterHasSpEffect(10000, 501010)
                || CharacterHasSpEffect(10000, 501011)
                || CharacterHasSpEffect(10000, 501012)));
    SetSpEffect(10000, 20011246);
    if (CharacterHasSpEffect(10000, 501000)) {
        SetSpEffect(2046460800, 20011221);
    } else if (CharacterHasSpEffect(10000, 501001)) {
        SetSpEffect(2046460800, 20011222);
    } else if (CharacterHasSpEffect(10000, 501002)) {
        SetSpEffect(2046460800, 20011223);
    } else if (CharacterHasSpEffect(10000, 501003)) {
        SetSpEffect(2046460800, 20011224);
    } else if (CharacterHasSpEffect(10000, 501004)) {
        SetSpEffect(2046460800, 20011225);
    } else if (CharacterHasSpEffect(10000, 501005)) {
        SetSpEffect(2046460800, 20011226);
    } else if (CharacterHasSpEffect(10000, 501006)) {
        SetSpEffect(2046460800, 20011227);
    } else if (CharacterHasSpEffect(10000, 501007)) {
        SetSpEffect(2046460800, 20011228);
    } else if (CharacterHasSpEffect(10000, 501008)) {
        SetSpEffect(2046460800, 20011229);
    } else if (CharacterHasSpEffect(10000, 501009)) {
        SetSpEffect(2046460800, 20011230);
    } else if (CharacterHasSpEffect(10000, 501010)) {
        SetSpEffect(2046460800, 20011231);
    } else if (CharacterHasSpEffect(10000, 501011)) {
        SetSpEffect(2046460800, 20011232);
    } else if (CharacterHasSpEffect(10000, 501012)) {
        SetSpEffect(2046460800, 20011233);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

$Event(2046462814, Restart, function() {
    if (EventFlag(2046460800)) {
        ChangeWeather(Weather.None, -1, false);
        ClearSpEffect(10000, 20004220);
        ClearSpEffect(10000, 20004221);
        ClearSpEffect(10000, 20004222);
        EndEvent();
    }
L0:
    DisableNetworkSync();
    WaitFor(
        (CharacterHasSpEffect(2046460800, 20011210)
            || CharacterHasSpEffect(2046460800, 20011211)
            || CharacterHasSpEffect(2046460800, 20011212)
            || CharacterHasSpEffect(2046460800, 20011215)
            || CharacterHasSpEffect(2046460800, 20011218))
            && ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.BluePhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2046462800)));
    ClearSpEffect(10000, 20004220);
    ClearSpEffect(10000, 20004221);
    ClearSpEffect(10000, 20004222);
    if (CharacterHasSpEffect(2046460800, 20011210)) {
        ChangeWeather(Weather.ScatteredRain, 1440, false);
        SetSpEffect(10000, 20004220);
    } else if (CharacterHasSpEffect(2046460800, 20011211)) {
        ChangeWeather(Weather.HeavySnow, 1440, false);
        SetSpEffect(10000, 20004221);
    } else if (CharacterHasSpEffect(2046460800, 20011212)) {
        ChangeWeather(Weather.PuffyClouds, 1440, false);
        SetSpEffect(10000, 20004222);
    } else if (CharacterHasSpEffect(2046460800, 20011215)) {
        ChangeWeather(Weather.None, -1, false);
    } else if (CharacterHasSpEffect(2046460800, 20011218)) {
        ChangeWeather(Weather.Fog, 1440, false);
        Goto(L1);
    }
L1:
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(2046462815, Restart, function() {
    EndIf(EventFlag(2046460800));
    WaitFor(CharacterHPValue(2046460800) == 0);
    ForceCharacterDeath(2046460811, false);
    ForceCharacterDeath(2046460812, false);
    ForceCharacterDeath(2046460813, false);
    ForceCharacterDeath(2046460814, false);
    ForceCharacterDeath(2046460815, false);
    ForceCharacterDeath(2046460816, false);
    ForceCharacterDeath(2046460817, false);
    ForceCharacterDeath(2046460818, false);
    ChangeWeather(Weather.None, -1, false);
    ClearSpEffect(10000, 20004220);
    ClearSpEffect(10000, 20004221);
    ClearSpEffect(10000, 20004222);
    EndEvent();
});

$Event(2046462816, Default, function() {
    EndIf(EventFlag(2046460800));
    EndIf(EventFlag(2046462802));
    WaitFor(CharacterHasSpEffect(2046460800, 20011239));
    SetNetworkconnectedEventFlagID(2046462802, ON);
    EndEvent();
});

$Event(2046462817, Restart, function(X0_4) {
    if (EventFlag(2046460800)) {
        EndEvent();
    }
L0:
    SetEventFlagID(2046462851, OFF);
    SetEventFlagID(2046462852, OFF);
    SetEventFlagID(2046462853, OFF);
    SetEventFlagID(2046462854, OFF);
    SetEventFlagID(2046462855, OFF);
    SetEventFlagID(2046462856, OFF);
    SetEventFlagID(2046462857, OFF);
    SetEventFlagID(2046462858, OFF);
    SetEventFlagID(2046462859, OFF);
    WaitFor(CharacterHasSpEffect(X0_4, 20011217) && InArea(X0_4, 2046462800));
    WaitFixedTimeRealFrames(1);
    if (InArea(X0_4, 2046462810)) {
        SpawnOneshotSFX(TargetEntityType.Area, 2046462811, -1, 653505);
        SpawnOneshotSFX(TargetEntityType.Area, 2046462812, -1, 653505);
        SpawnOneshotSFX(TargetEntityType.Area, 2046462813, -1, 653505);
        SpawnOneshotSFX(TargetEntityType.Area, 2046462814, -1, 653505);
        SetEventFlagID(2046462851, ON);
    } else {
L1:
        if (InArea(X0_4, 2046462820)) {
            SpawnOneshotSFX(TargetEntityType.Area, 2046462821, -1, 653505);
            SpawnOneshotSFX(TargetEntityType.Area, 2046462822, -1, 653505);
            SpawnOneshotSFX(TargetEntityType.Area, 2046462823, -1, 653505);
            SpawnOneshotSFX(TargetEntityType.Area, 2046462824, -1, 653505);
            SetEventFlagID(2046462852, ON);
        } else {
L2:
            if (InArea(X0_4, 2046462830)) {
                SpawnOneshotSFX(TargetEntityType.Area, 2046462831, -1, 653505);
                SpawnOneshotSFX(TargetEntityType.Area, 2046462832, -1, 653505);
                SpawnOneshotSFX(TargetEntityType.Area, 2046462833, -1, 653505);
                SpawnOneshotSFX(TargetEntityType.Area, 2046462834, -1, 653505);
                SetEventFlagID(2046462853, ON);
            } else {
L3:
                if (InArea(X0_4, 2046462840)) {
                    SpawnOneshotSFX(TargetEntityType.Area, 2046462841, -1, 653505);
                    SpawnOneshotSFX(TargetEntityType.Area, 2046462842, -1, 653505);
                    SpawnOneshotSFX(TargetEntityType.Area, 2046462843, -1, 653505);
                    SpawnOneshotSFX(TargetEntityType.Area, 2046462844, -1, 653505);
                    SetEventFlagID(2046462854, ON);
                } else {
L4:
                    if (InArea(X0_4, 2046462850)) {
                        SpawnOneshotSFX(TargetEntityType.Area, 2046462851, -1, 653505);
                        SpawnOneshotSFX(TargetEntityType.Area, 2046462852, -1, 653505);
                        SpawnOneshotSFX(TargetEntityType.Area, 2046462853, -1, 653505);
                        SpawnOneshotSFX(TargetEntityType.Area, 2046462854, -1, 653505);
                        SetEventFlagID(2046462855, ON);
                    } else {
L5:
                        if (InArea(X0_4, 2046462860)) {
                            SpawnOneshotSFX(TargetEntityType.Area, 2046462861, -1, 653505);
                            SpawnOneshotSFX(TargetEntityType.Area, 2046462862, -1, 653505);
                            SpawnOneshotSFX(TargetEntityType.Area, 2046462863, -1, 653505);
                            SpawnOneshotSFX(TargetEntityType.Area, 2046462864, -1, 653505);
                            SetEventFlagID(2046462856, ON);
                        } else {
L6:
                            if (InArea(X0_4, 2046462870)) {
                                SpawnOneshotSFX(TargetEntityType.Area, 2046462871, -1, 653505);
                                SpawnOneshotSFX(TargetEntityType.Area, 2046462872, -1, 653505);
                                SpawnOneshotSFX(TargetEntityType.Area, 2046462873, -1, 653505);
                                SpawnOneshotSFX(TargetEntityType.Area, 2046462874, -1, 653505);
                                SetEventFlagID(2046462857, ON);
                            } else {
L7:
                                if (InArea(X0_4, 2046462880)) {
                                    SpawnOneshotSFX(TargetEntityType.Area, 2046462881, -1, 653505);
                                    SpawnOneshotSFX(TargetEntityType.Area, 2046462882, -1, 653505);
                                    SpawnOneshotSFX(TargetEntityType.Area, 2046462883, -1, 653505);
                                    SpawnOneshotSFX(TargetEntityType.Area, 2046462884, -1, 653505);
                                    SetEventFlagID(2046462858, ON);
                                } else {
L8:
                                    NoOp();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
L10:
    if (EventFlag(2046462830)) {
        SpawnOneshotSFX(TargetEntityType.Area, 2046462891, -1, 653505);
        SpawnOneshotSFX(TargetEntityType.Area, 2046462892, -1, 653505);
        SpawnOneshotSFX(TargetEntityType.Area, 2046462893, -1, 653505);
        SpawnOneshotSFX(TargetEntityType.Area, 2046462894, -1, 653505);
        SetEventFlagID(2046462859, ON);
    }
L11:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2046462820, Restart, function(X0_4, X4_4) {
    if (EventFlag(2046460800)) {
        DisableGenerator(X4_4);
        EndEvent();
    }
L0:
    DisableGenerator(X4_4);
    WaitFor(EventFlag(X0_4));
    WaitFor(cond);
    EnableGenerator(X4_4);
    WaitFixedTimeSeconds(5);
    DisableGenerator(X4_4);
    RestartEvent();
});

$Event(2046462830, Restart, function() {
    EndIf(EventFlag(2046460800));
    SetEventFlagID(2046462830, OFF);
    WaitFor(
        CharacterHasSpEffect(2046460800, 20011217)
            && (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.BluePhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2046462890)));
    SetEventFlagID(2046462830, ON);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(2046462840, Restart, function(X0_4) {
    EndIf(EventFlag(2046460800));
    WaitFor(CharacterBackreadStatus(X0_4) && EventFlag(2046462830));
    EnableCharacterGravity(X0_4);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

$Event(2046462500, Restart, function() {
    if (EventFlag(2046460500)) {
        DisableAsset(2046461500);
        DisableAsset(2046461501);
        EndEvent();
    }
L0:
    EnableAssetInvunerability(2046461501);
    WaitFor(AssetDestroyed(2046461500, Equal, 1));
    DisableAssetInvunerability(2046461501);
    WaitFixedTimeRealFrames(1);
    RequestAssetDestruction(2046461501, 0);
    SetEventFlagID(2046460500, ON);
});



