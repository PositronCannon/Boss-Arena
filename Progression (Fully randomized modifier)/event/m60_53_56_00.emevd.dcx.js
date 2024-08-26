// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1053562200, 1053565200);
    InitializeEvent(0, 1053562250, 1053560250, 1053561250, 1053560270, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(1, 1053562250, 1053560251, 1053561251, 1053560271, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(2, 1053562250, 1053560252, 1053561252, 1053560272, 0, 0, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1053562260, 1053560250, 1053561250, 1053560270, 1053565250, 0, 0, 0, 0, 0, 1053560700, 1053562250);
    InitializeEvent(1, 1053562260, 1053560251, 1053561251, 1053560271, 1053565251, 0, 0, 0, 0, 0, 1053560710, 1053562251);
    InitializeEvent(2, 1053562260, 1053560252, 1053561252, 1053560272, 1053565252, 0, 0, 0, 0, 0, 1053560720, 1053562252);
    InitializeEvent(0, 1053562270, 1053560250, 0, 1053560270, 0, 1053560251, 30010, 20010, 1110704128, 0, 0, 1053562250);
    InitializeEvent(1, 1053562270, 1053560250, 0, 1053560270, 0, 1053560260, 30010, 20010, 1110704128, 0, 0, 1053562250);
    InitializeEvent(3, 1053562270, 1053560251, 0, 1053560271, 0, 1053560253, 30010, 20010, 1108082688, 0, 0, 1053562251);
    InitializeEvent(4, 1053562270, 1053560251, 0, 1053560271, 0, 1053560261, 30010, 20010, 1108082688, 0, 0, 1053562251);
    InitializeEvent(5, 1053562270, 1053560251, 0, 1053560271, 0, 1053560262, 30010, 20010, 1108082688, 0, 0, 1053562251);
    InitializeCommonEvent(0, 90005880, 1053560800, 1053560805, 1053562800, 1053560800, 30515, 3683644, 1053562805);
    InitializeCommonEvent(0, 90005881, 1053560800, 1053560805, 1053562801, 1053562802, 20300, 1053561805, 3683644, 1053562805);
    InitializeCommonEvent(0, 90005882, 1053560800, 1053560805, 1053562800, 1053560800, 1053562806, 1053565810, 1053561800, 1053560810, 1053562810, 130401, -1, 90005);
    InitializeCommonEvent(0, 90005883, 1053560800, 1053560805, 1053561805);
    InitializeCommonEvent(0, 90005885, 1053560800, 921100, 1053562806, 1053562807, 0, 1);
    InitializeEvent(0, 1053562820, 1053560800, 1053560805);
    InitializeCommonEvent(0, 90005620, 1053560570, 1053561570, 1053561571, 1053561572, 1053562570, 1053562571, 1053562572);
    InitializeCommonEvent(0, 90005621, 1053560570, 1053561573);
    //init boss reward
    InitializeEvent(0, 1053569990, 0);
});

//generic boss event
$Event(1053569990, Default, function() {
    WaitFor(CharacterDead(1053560800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304230,1049304124,1049304126,-1,1049304984,1049304985,1049304986,1049304987,1049305730,1049305735,1049305737,1049305739,1049300230);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1053560700, true);
});

$Event(1053562200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});

$Event(1053562250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(X0_4));
    EndIf(HasDamageType(X8_4, 20000, DamageType.Unspecified));
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    IssueShortWarpRequest(X8_4, TargetEntityType.Asset, X4_4, 220);
    WaitFixedTimeSeconds(5.4);
    RestartEvent();
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1053562260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    if (EventFlag(X0_4)) {
        if (!EventFlag(X40_4)) {
            DisableAsset(X4_4);
            DisableCharacter(X8_4);
            DisableCharacterCollision(X8_4);
            ForceCharacterDeath(X8_4, false);
            DisableCharacter(X12_4);
            DisableCharacterCollision(X12_4);
            ForceCharacterDeath(X12_4, false);
            EndEvent();
        }
L1:
        DisableAsset(X4_4);
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(X4_4, 200, 803160);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChr = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X8_4, 436)
        || CharacterHasStateInfo(X8_4, 2)
        || CharacterHasStateInfo(X8_4, 5)
        || CharacterHasStateInfo(X8_4, 6)
        || CharacterHasStateInfo(X8_4, 260);
    WaitFor(dmgChr && chrSp);
    SetEventFlagID(X0_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    DeleteAssetfollowingSFX(X4_4, true);
    WaitFixedTimeSeconds(1);
    DisableAsset(X4_4);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.3);
        AwardItemsIncludingClients(X36_4);
    }
    EndEvent();
    WaitFixedTimeSeconds(X16_4);
    WaitFixedTimeSeconds(X20_4);
    WaitFixedTimeSeconds(X24_4);
    WaitFixedTimeSeconds(X28_4);
    WaitFixedTimeSeconds(X32_4);
});

$Event(1053562270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4) {
    EndIf(EventFlag(X0_4));
    EndIf(SpecialStandbyEndedFlag(X16_4));
    ForceAnimationPlayback(X16_4, X20_4, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(X8_4, 20000, DamageType.Unspecified)
        || HasDamageType(X16_4, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(X16_4, 436)
        || CharacterHasStateInfo(X16_4, 2)
        || CharacterHasStateInfo(X16_4, 5)
        || CharacterHasStateInfo(X16_4, 6)
        || CharacterHasStateInfo(X16_4, 260)
        || EntityInRadiusOfEntity(X16_4, 20000, X28_4, 1);
    WaitFor(dmgChrArea && chrSp);
    SetNetworkconnectedEventFlagID(X40_4, ON);
    SetSpecialStandbyEndedFlag(X16_4, ON);
    WaitFixedTimeSeconds(X32_4);
    ForceAnimationPlayback(X16_4, X24_4, false, false, false);
    EndEvent();
    WaitFixedTimeSeconds(X4_4);
    WaitFixedTimeSeconds(X12_4);
    WaitFixedTimeSeconds(X36_4);
});

$Event(1053562820, Restart, function(X0_4, X4_4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4));
    WaitFixedTimeFrames(5);
    ChangeWeather(Weather.None, -1, true);
});
