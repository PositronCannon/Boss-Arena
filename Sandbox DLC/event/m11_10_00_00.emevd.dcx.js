// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    SetPlayerRespawnPoint(11102021); //set respawn to roundtable
    BonfirelikeRecovery();
    RegisterBonfire(11100000, 11101950, 0, 0, 0, 1);
    InitializeCommonEvent(0, 90005790, 0, 11100180, 11102180, 11102181, 11100785, 23, 11102385, 11102386, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 11100180, 11102180, 11102181, 11100785);
    InitializeCommonEvent(0, 90005792, 11100180, 11102180, 11102181, 11100785, 11100800, 0);
    InitializeCommonEvent(0, 90005620, 11100570, 11101570, 11101571, 0, 11102570, 11102571, 11102572);
    InitializeCommonEvent(0, 90005621, 11100570, 11101573);
    InitializeCommonEvent(0, 90005620, 11100575, 11101575, 11101576, 11101577, 11102575, 11102576, 11102577);
    InitializeCommonEvent(0, 90005621, 11100575, 11101578);
    InitializeCommonEvent(0, 11103702, 0);
    InitializeCommonEvent(0, 11103703, 0);
    InitializeCommonEvent(0, 90005708, 11100705, 3480, 0);
    InitializeCommonEvent(0, 90005708, 11100705, 11109355, 0);
    InitializeCommonEvent(0, 90005708, 11100735, 4110, 0);
    InitializeCommonEvent(0, 90005750, 11101716, 4110, 103400, 400349, 400349, 4048, 0);
    InitializeCommonEvent(0, 90005775, 81463900, 1045399206, -1082130432);
    InitializeCommonEvent(0, 90005740, 11102845, 11102846, 11102847, 11100740, 702, 11101741, 702, 1053609165, 90300, 90302, -1, 1067869798);
    InitializeCommonEvent(0, 90005741, 11102848, 11102849, 11102847, 11100740, 90320, 0, 90322, -1, 1056964608);
    InitializeCommonEvent(0, 90005733, 11102844);
    InitializeCommonEvent(0, 90005708, 11100755, 3900, 0);
    InitializeCommonEvent(0, 90005708, 11100755, 3903, 0);
    InitializeCommonEvent(0, 90005750, 11101755, 4110, 103590, 400359, 400359, 3909, 0);
    InitializeCommonEvent(0, 90005750, 11101755, 4110, 103580, 400356, 400358, 400359, 0);
    InitializeCommonEvent(0, 90005775, 85495300, 11109687, -1082130432);
    InitializeCommonEvent(0, 90005774, 11109656, 11100900, 11107900);
    InitializeCommonEvent(0, 90005750, 11101765, 4110, 104900, 400490, 400490, 11109656, 0);
    InitializeCommonEvent(0, 11103770, 0);
    InitializeCommonEvent(0, 11103771, 0);
    InitializeCommonEvent(0, 11103772, 0);
    InitializeCommonEvent(0, 90005704, 1042360710, 4701, 4700, 1042369301, 3);
    InitializeCommonEvent(0, 90005703, 1042360710, 4701, 4702, 1042369301, 4701, 4700, 4704, -1);
    InitializeCommonEvent(0, 90005702, 1042360710, 4703, 4700, 4704);
    InitializeEvent(0, 11105555, 0);
    InitializeEvent(0, 11106667, 0);
    InitializeEvent(0, 11106668, 0);
    InitializeEvent(0, 11106669, 0);
    InitializeEvent(0, 11106670, 0);
    InitializeEvent(0, 11106671, 0);
    InitializeEvent(0, 11106672, 0);
    InitializeEvent(0, 11104445, 0);
    InitializeEvent(0, 11104446, 0);
    InitializeEvent(0, 11104447, 0);
    InitializeEvent(0, 11104448, 0);
    InitializeEvent(0, 11107778, 0);
    InitializeEvent(0, 11107792, 0);
    InitializeEvent(0, 11107793, 0);
    InitializeEvent(0, 11107794, 0);
    InitializeEvent(0, 11107796, 0);
    InitializeEvent(0, 11107780, 0);
    InitializeEvent(0, 11107795, 0);
    InitializeEvent(0, 11107700, 0);
    InitializeEvent(0, 11107782, 0);
    InitializeEvent(0, 11107788, 0);
    InitializeEvent(0, 11107789, 0);
    InitializeEvent(0, 11107797, 0);
    InitializeEvent(0, 11107798, 0);
    InitializeEvent(0, 11107719, 0);
    InitializeEvent(0, 11107720, 0);
    InitializeEvent(0, 11107721, 0);
    InitializeEvent(0, 11107722, 0);
    InitializeEvent(0, 11107723, 0);
    InitializeEvent(0, 11107724, 0);
    InitializeEvent(0, 11107725, 0);
    InitializeEvent(0, 11107726, 0);
    InitializeEvent(0, 11107727, 0);
    InitializeEvent(0, 11107728, 0);
    InitializeEvent(0, 11107800, 0);
    InitializeEvent(0, 11107801, 0);
});

$Event(50, Default, function() {
    BatchSetEventFlags(1049302000,1049302215, OFF); //set all boss selection flags off
    SetEventFlagID(1049302260, OFF); //set rematch trigger off
    //run character startup script if it has not already
    if (!EventFlag(1049300000)) 
        InitializeCommonEvent(0, 10010001, 0);
    else
        //run one-time item check
        if (!EventFlag(1049300051))
            InitializeEvent(0, 11109999, 0);
    SetCharacterBackreadState(11100711, true);
    SetCharacterBackreadState(11100715, true);
    SetCharacterBackreadState(11100735, true);
    SetCharacterBackreadState(11100765, true);
    SetCharacterBackreadState(14000700, true);
    EnableAssetInvunerability(11101715);
    EnableAssetInvunerability(11101730);
});

$Event(11109999, Default, function() {
    //check if any main boss flags have been tripped
    if (EventFlag(19000800)
        || EventFlag(10000800)
        || EventFlag(1052380800)
        || EventFlag(11000800)
        || EventFlag(16000800)
        || EventFlag(12050800)
        || EventFlag(15000800)
        || EventFlag(14000800)
        || EventFlag(12030850)
        || EventFlag(13000800)
        || EventFlag(12040800)
        || EventFlag(12090800)
        || EventFlag(11050800)
        || EventFlag(1052520800)
        || EventFlag(13000830)
        || EventFlag(20000800)
        || EventFlag(2048440800)
        || EventFlag(22000800)
        || EventFlag(21000850)
        || EventFlag(21010800)
        || EventFlag(2049480800)
        || EventFlag(2050480800)
        || EventFlag(25000800)
        || EventFlag(28000800)
        || EventFlag(2044450800)
        || EventFlag(2054390800)
        || EventFlag(20010800)) {
            DisplayFullScreenMessage(2081020);
            SetEventFlagID(1049300051, ON); //commented = warning will appear every time map loads
    //check if whetblades are missing
    } if (!PlayerHasItemIncludingBBox(3, 8970)
        || !PlayerHasItemIncludingBBox(3, 8971)
        || !PlayerHasItemIncludingBBox(3, 8972)
        || !PlayerHasItemIncludingBBox(3, 8973)
        || !PlayerHasItemIncludingBBox(3, 8974)) {
            DisplayFullScreenMessage(2081021);
            SetEventFlagID(1049300051, ON); //commented = warning will appear every time map loads
    } else 
            SetEventFlagID(1049300051, ON); //commented = checks will run every time map loads
});

$Event(11104445, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(11102790, ON);
    EndEvent();
});

$Event(11104446, Restart, function() {
    DisableNetworkSync();
    ClearSpEffect(10000, 9621);
    WaitFor(PlayerInMap(11, 10, 0, 0) && !InArea(10000, 11102600) && !CeremonyActive(20));
    SetSpEffect(10000, 9621);
    WaitFixedTimeSeconds(1);
    WaitFor(!(PlayerInMap(11, 10, 0, 0) && !InArea(10000, 11102600) && !CeremonyActive(20)));
    RestartEvent();
});

$Event(11104447, Default, function() {
    EndIf(ThisEventSlot());
    WaitFor(PlayerIsInOwnWorld() && PlayerInMap(11, 10, 0, 0));
    SetEventFlagID(71190, ON);
    OpenWorldMapPoint(111000, 100);
    SetEventFlagID(105, ON);
});

$Event(11104448, Restart, function() {
    EndIf(!PlayerInMap(11, 10, 0, 0));
    SetPlayerPositionDisplay(Disabled, true, 11, 10, 0, 0, -305.7, -20.58, -298.1);
});

$Event(11105555, Restart, function() {
    SetCharacterBackreadState(1042360710, false);
    EnableCharacter(1042360710);
    SetCharacterTeamType(1042360710, TeamType.FriendlyNPC);
    ForceAnimationPlayback(1042360710, 930003, false, false, false);
    EnableCharacterInvincibility(1042360710);
    EnableCharacterImmortality(1042360710);
    SetCharacterTalkRange(14000701, 60);
    EnableCharacter(14000701);
    SetCharacterBackreadState(14000701, false);
    ForceAnimationPlayback(14000701, 930010, false, false, false);
    EnableCharacterInvincibility(14000701);
    EnableCharacterImmortality(14000701);
    EnableCharacter(11100765);
    SetCharacterBackreadState(11100765, false);
    ForceAnimationPlayback(11100765, 90100, false, false, false);
    EnableCharacterInvincibility(11100765);
    EnableCharacterImmortality(11100765);
    EnableCharacter(11100735);
    SetCharacterBackreadState(11100735, false);
    ForceAnimationPlayback(11100735, 930000, false, false, false);
    EnableCharacter(11100711);
    SetCharacterBackreadState(11100711, false);
    EnableCharacterInvincibility(11100711);
    EnableCharacterImmortality(11100711);
    EnableCharacter(11100721);
    EnableCharacterInvincibility(11100721);
    EnableCharacterImmortality(11100721);
    ForceAnimationPlayback(11100711, 90104, false, false, false);
    ForceAnimationPlayback(11100720, 930001, false, false, false);
    SetCharacterBackreadState(11100715, false);
    EnableCharacter(11100715);
    ForceAnimationPlayback(11100715, 930010, false, false, false);
    EnableCharacterInvincibility(11100715);
    EnableCharacterImmortality(11100715);
    EnableCharacter(1043310705);
    SetCharacterBackreadState(1043310705, false);
    ForceAnimationPlayback(1043310705, 90100, false, false, false);
    EnableCharacterInvincibility(1043310705);
    EnableCharacterImmortality(1043310705);
    RequestAssetRestoration(1043311700);
    EnableAssetInvunerability(1043311700);
    EndEvent();
});
    
//morgott's ng+ options
$Event(11106667, Restart, function() {
    SetEventFlagID(1049302229, ON);
    BatchSetEventFlags(1049302230,1049302237, OFF);
    if (GameCycle() == 0) 
        SetEventFlagID(1049302230, ON);
     else if (GameCycle() == 1) 
         SetEventFlagID(1049302231, ON);
     else if (GameCycle() == 2) 
         SetEventFlagID(1049302232, ON);
     else if (GameCycle() == 3) 
         SetEventFlagID(1049302233, ON);
     else if (GameCycle() == 4) 
         SetEventFlagID(1049302234, ON);
     else if (GameCycle() == 5)
         SetEventFlagID(1049302235, ON);
     else if (GameCycle() == 6)
         SetEventFlagID(1049302236, ON);
     else 
         SetEventFlagID(1049302237, ON);
    WaitFor(!EventFlag(1049302229));
    SetEventFlagID(1049302229, ON);
    IncrementGameCycle();
    SaveRequest();
    if (EventFlag(1049302230))
       DisplayBlinkingMessage(30011);
    else if (EventFlag(1049302231)) 
       DisplayBlinkingMessage(30012);
    else if (EventFlag(1049302232)) 
       DisplayBlinkingMessage(30013);
    else if (EventFlag(1049302233)) 
       DisplayBlinkingMessage(30014);
    else if (EventFlag(1049302234)) 
       DisplayBlinkingMessage(30015);
    else if (EventFlag(1049302235)) 
       DisplayBlinkingMessage(30016);
    else if (EventFlag(1049302236)) 
       DisplayBlinkingMessage(30017);
     RestartEvent();
});

//jar-bairn's 1M runes
$Event(11106668, Restart, function() {
    WaitFor(EventFlag(1049302238));
    SetEventFlagID(1049302238, OFF);
    SetSpEffect(10000, 999990);
    DisplayBlinkingMessage(30003);
    RestartEvent();
});

//jar-bairn's infinite hp/fp/stamina
$Event(11106669, Restart, function() {
    WaitFor(EventFlag(1049302239));
    SetEventFlagID(1049302239, OFF);
    if (EventFlag(1049300001)) {
        SetEventFlagID(1049300001, OFF);
        ClearSpEffect(10000, 10493010);
        DisplayBlinkingMessage(30002);
    } else {
        SetEventFlagID(1049300001, ON);
        SetSpEffect(10000, 10493010);
        DisplayBlinkingMessage(30001);
    }
    RestartEvent();
});

$Event(11106670, Restart, function() {
    WaitFor(EventFlag(1049302240));
    SetEventFlagID(1049302240, OFF);
    if (EventFlag(1049300002)) {
        SetEventFlagID(1049300002, OFF);
        ClearSpEffect(10000, 10493020);
        DisplayBlinkingMessage(30007);
    } else {
        SetEventFlagID(1049300002, ON);
        SetSpEffect(10000, 10493020);
        DisplayBlinkingMessage(30006);
    }
    RestartEvent();
});

$Event(11106671, Restart, function() {
    WaitFor(EventFlag(1049302241));
    SetEventFlagID(1049302241, OFF);
    if (EventFlag(1049300003)) {
        SetEventFlagID(1049300003, OFF);
        ClearSpEffect(10000, 10493030);
        DisplayBlinkingMessage(30005);
    } else {
        SetEventFlagID(1049300003, ON);
        SetSpEffect(10000, 10493030);
        DisplayBlinkingMessage(30004);
    }
    RestartEvent();
});

//bugs info
$Event(11106672, Restart, function() {
    WaitFor(EventFlag(1049302242));
    SetEventFlagID(1049302242, OFF);
    DisplayFullScreenMessage(80863);
    RestartEvent();
});

//set default boss sorting flag if none set
$Event(11107797, Default, function() {
    if (!EventFlag(1049300004) && !EventFlag(1049300005))
        SetEventFlagID(1049300004, ON);
    else
        EndEvent();
});

//set default respawn flag if none set
$Event(11107800, Default, function() {
    if (!EventFlag(1049300052) && !EventFlag(1049300053))
        SetEventFlagID(1049300052, ON);
    else
        EndEvent();
});

//reset first encounter flags
$Event(11107801, Default, function() {
    WaitFor(EventFlag(1049302243));
    SetEventFlagID(1049302243, OFF);
    SetEventFlagID(10000801, OFF);
    SetEventFlagID(11000801, OFF);
    SetEventFlagID(12050801, OFF);
    SetEventFlagID(15000801, OFF);
    SetEventFlagID(14000801, OFF);
    SetEventFlagID(11050801, OFF);
    SetEventFlagID(10000851, OFF);
    SetEventFlagID(12010801, OFF);
    SetEventFlagID(13000801, OFF);
    SetEventFlagID(1035500801, OFF);
    SetEventFlagID(11000851, OFF);
    SetEventFlagID(16000851, OFF);
    SetEventFlagID(12020801, OFF);
    SetEventFlagID(35000801, OFF);
    SetEventFlagID(13000851, OFF);
    SetEventFlagID(11050851, OFF);
    SetEventFlagID(15000851, OFF);
    SetEventFlagID(10010801, OFF);
    SetEventFlagID(20000801, OFF);
    SetEventFlagID(20000544, OFF);
    SetEventFlagID(21000851, OFF);
    SetEventFlagID(21010801, OFF);
    SetEventFlagID(21018542, OFF);
    SetEventFlagID(2050480801, OFF);
    SetEventFlagID(2054390801, OFF);
    SetEventFlagID(20010801, OFF);
    DisplayBlinkingMessage(2081022);
    RestartEvent();
});

//last boss selected (remembrance)
$Event(11107719, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308000))
        SetEventFlagID(1049302000, ON);
    else if (EventFlag(1049308001))
        SetEventFlagID(1049302001, ON);
    else if (EventFlag(1049308002))
        SetEventFlagID(1049302002, ON);
    else if (EventFlag(1049308003))
        SetEventFlagID(1049302003, ON);
    else if (EventFlag(1049308004))
        SetEventFlagID(1049302004, ON);
    else if (EventFlag(1049308005))
        SetEventFlagID(1049302005, ON);
    else if (EventFlag(1049308006))
        SetEventFlagID(1049302006, ON);
    else if (EventFlag(1049308007))
        SetEventFlagID(1049302007, ON);
    else if (EventFlag(1049308008))
        SetEventFlagID(1049302008, ON);
    else if (EventFlag(1049308009))
        SetEventFlagID(1049302009, ON);
    else if (EventFlag(1049308010))
        SetEventFlagID(1049302010, ON);
    else if (EventFlag(1049308011))
        SetEventFlagID(1049302011, ON);
    else if (EventFlag(1049308012))
        SetEventFlagID(1049302012, ON);
    else if (EventFlag(1049308013))
        SetEventFlagID(1049302013, ON);
    else if (EventFlag(1049308014))
        SetEventFlagID(1049302014, ON);
    else if (EventFlag(1049308015))
        SetEventFlagID(1049302015, ON);
    else if (EventFlag(1049308016))
        SetEventFlagID(1049302016, ON);
});

//last boss selected (great enemies)
$Event(11107720, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308017))
        SetEventFlagID(1049302017, ON);
    else if (EventFlag(1049308018))
        SetEventFlagID(1049302018, ON);
    else if (EventFlag(1049308019))
        SetEventFlagID(1049302019, ON);
    else if (EventFlag(1049308020))
        SetEventFlagID(1049302020, ON);
    else if (EventFlag(1049308021))
        SetEventFlagID(1049302021, ON);
    else if (EventFlag(1049308022))
        SetEventFlagID(1049302022, ON);
    else if (EventFlag(1049308023))
        SetEventFlagID(1049302023, ON);
    else if (EventFlag(1049308024))
        SetEventFlagID(1049302024, ON);
    else if (EventFlag(1049308025))
        SetEventFlagID(1049302025, ON);
    else if (EventFlag(1049308026))
        SetEventFlagID(1049302026, ON);
    else if (EventFlag(1049308027))
        SetEventFlagID(1049302027, ON);
    else if (EventFlag(1049308028))
        SetEventFlagID(1049302028, ON);
    else if (EventFlag(1049308029))
        SetEventFlagID(1049302029, ON);
    else if (EventFlag(1049308030))
        SetEventFlagID(1049302030, ON);
    else if (EventFlag(1049308031))
        SetEventFlagID(1049302031, ON);
    else if (EventFlag(1049308032))
        SetEventFlagID(1049302032, ON);
    else if (EventFlag(1049308033))
        SetEventFlagID(1049302033, ON);
    else if (EventFlag(1049308034))
        SetEventFlagID(1049302034, ON);
    else if (EventFlag(1049308035))
        SetEventFlagID(1049302035, ON);
    else if (EventFlag(1049308036))
        SetEventFlagID(1049302036, ON);
    else if (EventFlag(1049308037))
        SetEventFlagID(1049302037, ON);
    else if (EventFlag(1049308038))
        SetEventFlagID(1049302038, ON);
    else if (EventFlag(1049308039))
        SetEventFlagID(1049302039, ON);
    else if (EventFlag(1049308040))
        SetEventFlagID(1049302040, ON);
    else if (EventFlag(1049308041))
        SetEventFlagID(1049302041, ON);
    else if (EventFlag(1049308042))
        SetEventFlagID(1049302042, ON);
    else if (EventFlag(1049308043))
        SetEventFlagID(1049302043, ON);
    else if (EventFlag(1049308044))
        SetEventFlagID(1049302044, ON);
    else if (EventFlag(1049308045))
        SetEventFlagID(1049302045, ON);
    else if (EventFlag(1049308046))
        SetEventFlagID(1049302046, ON);
    else if (EventFlag(1049308047))
        SetEventFlagID(1049302047, ON);
    else if (EventFlag(1049308048))
        SetEventFlagID(1049302048, ON);
    else if (EventFlag(1049308049))
        SetEventFlagID(1049302049, ON);
});

//last boss selected (overworld 1)
$Event(11107721, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308050))
        SetEventFlagID(1049302050, ON);
    else if (EventFlag(1049308051))
        SetEventFlagID(1049302051, ON);
    else if (EventFlag(1049308052))
        SetEventFlagID(1049302052, ON);
    else if (EventFlag(1049308053))
        SetEventFlagID(1049302053, ON);
    else if (EventFlag(1049308054))
        SetEventFlagID(1049302054, ON);
    else if (EventFlag(1049308055))
        SetEventFlagID(1049302055, ON);
    else if (EventFlag(1049308056))
        SetEventFlagID(1049302056, ON);
    else if (EventFlag(1049308057))
        SetEventFlagID(1049302057, ON);
    else if (EventFlag(1049308058))
        SetEventFlagID(1049302058, ON);
    else if (EventFlag(1049308059))
        SetEventFlagID(1049302059, ON);
    else if (EventFlag(1049308060))
        SetEventFlagID(1049302060, ON);
    else if (EventFlag(1049308061))
        SetEventFlagID(1049302061, ON);
    else if (EventFlag(1049308062))
        SetEventFlagID(1049302062, ON);
    else if (EventFlag(1049308063))
        SetEventFlagID(1049302063, ON);
    else if (EventFlag(1049308064))
        SetEventFlagID(1049302064, ON);
    else if (EventFlag(1049308065))
        SetEventFlagID(1049302065, ON);
    else if (EventFlag(1049308066))
        SetEventFlagID(1049302066, ON);
    else if (EventFlag(1049308067))
        SetEventFlagID(1049302067, ON);
    else if (EventFlag(1049308068))
        SetEventFlagID(1049302068, ON);
    else if (EventFlag(1049308069))
        SetEventFlagID(1049302069, ON);
    else if (EventFlag(1049308070))
        SetEventFlagID(1049302070, ON);
    else if (EventFlag(1049308071))
        SetEventFlagID(1049302071, ON);
    else if (EventFlag(1049308072))
        SetEventFlagID(1049302072, ON);
    else if (EventFlag(1049308073))
        SetEventFlagID(1049302073, ON);
    else if (EventFlag(1049308074))
        SetEventFlagID(1049302074, ON);
    else if (EventFlag(1049308075))
        SetEventFlagID(1049302075, ON);
});

//last boss selected (overworld 2)
$Event(11107722, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308076))
        SetEventFlagID(1049302076, ON);
    else if (EventFlag(1049308077))
        SetEventFlagID(1049302077, ON);
    else if (EventFlag(1049308078))
        SetEventFlagID(1049302078, ON);
    else if (EventFlag(1049308079))
        SetEventFlagID(1049302079, ON);
    else if (EventFlag(1049308080))
        SetEventFlagID(1049302080, ON);
    else if (EventFlag(1049308081))
        SetEventFlagID(1049302081, ON);
    else if (EventFlag(1049308082))
        SetEventFlagID(1049302082, ON);
    else if (EventFlag(1049308083))
        SetEventFlagID(1049302083, ON);
    else if (EventFlag(1049308084))
        SetEventFlagID(1049302084, ON);
    else if (EventFlag(1049308085))
        SetEventFlagID(1049302085, ON);
    else if (EventFlag(1049308086))
        SetEventFlagID(1049302086, ON);
    else if (EventFlag(1049308087))
        SetEventFlagID(1049302087, ON);
    else if (EventFlag(1049308088))
        SetEventFlagID(1049302088, ON);
    else if (EventFlag(1049308089))
        SetEventFlagID(1049302089, ON);
    else if (EventFlag(1049308090))
        SetEventFlagID(1049302090, ON);
    else if (EventFlag(1049308091))
        SetEventFlagID(1049302091, ON);
    else if (EventFlag(1049308092))
        SetEventFlagID(1049302092, ON);
    else if (EventFlag(1049308093))
        SetEventFlagID(1049302093, ON);
    else if (EventFlag(1049308094))
        SetEventFlagID(1049302094, ON);
    else if (EventFlag(1049308095))
        SetEventFlagID(1049302095, ON);
    else if (EventFlag(1049308096))
        SetEventFlagID(1049302096, ON);
});

//last boss selected (evergaols)
$Event(11107723, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308097))
        SetEventFlagID(1049302097, ON);
    else if (EventFlag(1049308098))
        SetEventFlagID(1049302098, ON);
    else if (EventFlag(1049308099))
        SetEventFlagID(1049302099, ON);
    else if (EventFlag(1049308100))
        SetEventFlagID(1049302100, ON);
    else if (EventFlag(1049308101))
        SetEventFlagID(1049302101, ON);
    else if (EventFlag(1049308102))
        SetEventFlagID(1049302102, ON);
    else if (EventFlag(1049308103))
        SetEventFlagID(1049302103, ON);
    else if (EventFlag(1049308104))
        SetEventFlagID(1049302104, ON);
    else if (EventFlag(1049308105))
        SetEventFlagID(1049302105, ON);
    else if (EventFlag(1049308106))
        SetEventFlagID(1049302106, ON);
});

//last boss selected (catacombs)
$Event(11107724, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308107))
        SetEventFlagID(1049302107, ON);
    else if (EventFlag(1049308108))
        SetEventFlagID(1049302108, ON);
    else if (EventFlag(1049308109))
        SetEventFlagID(1049302109, ON);
    else if (EventFlag(1049308110))
        SetEventFlagID(1049302110, ON);
    else if (EventFlag(1049308111))
        SetEventFlagID(1049302111, ON);
    else if (EventFlag(1049308112))
        SetEventFlagID(1049302112, ON);
    else if (EventFlag(1049308113))
        SetEventFlagID(1049302113, ON);
    else if (EventFlag(1049308114))
        SetEventFlagID(1049302114, ON);
    else if (EventFlag(1049308115))
        SetEventFlagID(1049302115, ON);
    else if (EventFlag(1049308116))
        SetEventFlagID(1049302116, ON);
    else if (EventFlag(1049308117))
        SetEventFlagID(1049302117, ON);
    else if (EventFlag(1049308118))
        SetEventFlagID(1049302118, ON);
    else if (EventFlag(1049308119))
        SetEventFlagID(1049302119, ON);
    else if (EventFlag(1049308120))
        SetEventFlagID(1049302120, ON);
    else if (EventFlag(1049308121))
        SetEventFlagID(1049302121, ON);
    else if (EventFlag(1049308122))
        SetEventFlagID(1049302122, ON);
    else if (EventFlag(1049308123))
        SetEventFlagID(1049302123, ON);
    else if (EventFlag(1049308124))
        SetEventFlagID(1049302124, ON);
    else if (EventFlag(1049308125))
        SetEventFlagID(1049302125, ON);
    else if (EventFlag(1049308126))
        SetEventFlagID(1049302126, ON);
    else if (EventFlag(1049308127))
        SetEventFlagID(1049302127, ON);
    else if (EventFlag(1049308128))
        SetEventFlagID(1049302128, ON);
    else if (EventFlag(1049308129))
        SetEventFlagID(1049302129, ON);
    else if (EventFlag(1049308130))
        SetEventFlagID(1049302130, ON);
});

//last boss selected (caves)
$Event(11107725, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308131))
        SetEventFlagID(1049302131, ON);
    else if (EventFlag(1049308132))
        SetEventFlagID(1049302132, ON);
    else if (EventFlag(1049308133))
        SetEventFlagID(1049302133, ON);
    else if (EventFlag(1049308134))
        SetEventFlagID(1049302134, ON);
    else if (EventFlag(1049308135))
        SetEventFlagID(1049302135, ON);
    else if (EventFlag(1049308136))
        SetEventFlagID(1049302136, ON);
    else if (EventFlag(1049308137))
        SetEventFlagID(1049302137, ON);
    else if (EventFlag(1049308138))
        SetEventFlagID(1049302138, ON);
    else if (EventFlag(1049308139))
        SetEventFlagID(1049302139, ON);
    else if (EventFlag(1049308140))
        SetEventFlagID(1049302140, ON);
    else if (EventFlag(1049308141))
        SetEventFlagID(1049302141, ON);
    else if (EventFlag(1049308142))
        SetEventFlagID(1049302142, ON);
    else if (EventFlag(1049308143))
        SetEventFlagID(1049302143, ON);
    else if (EventFlag(1049308144))
        SetEventFlagID(1049302144, ON);
    else if (EventFlag(1049308145))
        SetEventFlagID(1049302145, ON);
    else if (EventFlag(1049308146))
        SetEventFlagID(1049302146, ON);
    else if (EventFlag(1049308147))
        SetEventFlagID(1049302147, ON);
    else if (EventFlag(1049308148))
        SetEventFlagID(1049302148, ON);
    else if (EventFlag(1049308149))
        SetEventFlagID(1049302149, ON);
    else if (EventFlag(1049308150))
        SetEventFlagID(1049302150, ON);
    else if (EventFlag(1049308151))
        SetEventFlagID(1049302151, ON);
    else if (EventFlag(1049308152))
        SetEventFlagID(1049302152, ON);
});

//last boss selected (tunnels/ruins)
$Event(11107726, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308153))
        SetEventFlagID(1049302153, ON);
    else if (EventFlag(1049308154))
        SetEventFlagID(1049302154, ON);
    else if (EventFlag(1049308155))
        SetEventFlagID(1049302155, ON);
    else if (EventFlag(1049308156))
        SetEventFlagID(1049302156, ON);
    else if (EventFlag(1049308157))
        SetEventFlagID(1049302157, ON);
    else if (EventFlag(1049308158))
        SetEventFlagID(1049302158, ON);
    else if (EventFlag(1049308159))
        SetEventFlagID(1049302159, ON);
    else if (EventFlag(1049308160))
        SetEventFlagID(1049302160, ON);
    else if (EventFlag(1049308161))
        SetEventFlagID(1049302161, ON);
    else if (EventFlag(1049308162))
        SetEventFlagID(1049302162, ON);
    else if (EventFlag(1049308163))
        SetEventFlagID(1049302163, ON);
    else if (EventFlag(1049308164))
        SetEventFlagID(1049302164, ON);
    else if (EventFlag(1049308165))
        SetEventFlagID(1049302165, ON);
    else if (EventFlag(1049308166))
        SetEventFlagID(1049302166, ON);
});

//last boss selected (dlc main)
$Event(11107727, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308167))
        SetEventFlagID(1049302167, ON);
    else if (EventFlag(1049308168))
        SetEventFlagID(1049302168, ON);
    else if (EventFlag(1049308169))
        SetEventFlagID(1049302169, ON);
    else if (EventFlag(1049308170))
        SetEventFlagID(1049302170, ON);
    else if (EventFlag(1049308171))
        SetEventFlagID(1049302171, ON);
    else if (EventFlag(1049308172))
        SetEventFlagID(1049302172, ON);
    else if (EventFlag(1049308173))
        SetEventFlagID(1049302173, ON);
    else if (EventFlag(1049308174))
        SetEventFlagID(1049302174, ON);
    else if (EventFlag(1049308175))
        SetEventFlagID(1049302175, ON);
    else if (EventFlag(1049308176))
        SetEventFlagID(1049302176, ON);
    else if (EventFlag(1049308177))
        SetEventFlagID(1049302177, ON);
    else if (EventFlag(1049308178))
        SetEventFlagID(1049302178, ON);
});

//last boss selected (dlc minor)
$Event(11107728, Restart, function() {
    WaitFor(EventFlag(1049302260));
    if (EventFlag(1049308179))
        SetEventFlagID(1049302179, ON);
    else if (EventFlag(1049308180))
        SetEventFlagID(1049302180, ON);
    else if (EventFlag(1049308181))
        SetEventFlagID(1049302181, ON);
    else if (EventFlag(1049308182))
        SetEventFlagID(1049302182, ON);
    else if (EventFlag(1049308183))
        SetEventFlagID(1049302183, ON);
    else if (EventFlag(1049308184))
        SetEventFlagID(1049302184, ON);
    else if (EventFlag(1049308185))
        SetEventFlagID(1049302185, ON);
    else if (EventFlag(1049308186))
        SetEventFlagID(1049302186, ON);
    else if (EventFlag(1049308187))
        SetEventFlagID(1049302187, ON);
    else if (EventFlag(1049308188))
        SetEventFlagID(1049302188, ON);
    else if (EventFlag(1049308189))
        SetEventFlagID(1049302189, ON);
    else if (EventFlag(1049308190))
        SetEventFlagID(1049302190, ON);
    else if (EventFlag(1049308191))
        SetEventFlagID(1049302191, ON);
    else if (EventFlag(1049308192))
        SetEventFlagID(1049302192, ON);
    else if (EventFlag(1049308193))
        SetEventFlagID(1049302193, ON);
    else if (EventFlag(1049308194))
        SetEventFlagID(1049302194, ON);
    else if (EventFlag(1049308195))
        SetEventFlagID(1049302195, ON);
    else if (EventFlag(1049308196))
        SetEventFlagID(1049302196, ON);
    else if (EventFlag(1049308197))
        SetEventFlagID(1049302197, ON);
    else if (EventFlag(1049308198))
        SetEventFlagID(1049302198, ON);
    else if (EventFlag(1049308199))
        SetEventFlagID(1049302199, ON);
    else if (EventFlag(1049308200))
        SetEventFlagID(1049302200, ON);
    else if (EventFlag(1049308201))
        SetEventFlagID(1049302201, ON);
    else if (EventFlag(1049308202))
        SetEventFlagID(1049302202, ON);
    else if (EventFlag(1049308203))
        SetEventFlagID(1049302203, ON);
    else if (EventFlag(1049308204))
        SetEventFlagID(1049302204, ON);
    else if (EventFlag(1049308205))
        SetEventFlagID(1049302205, ON);
    else if (EventFlag(1049308206))
        SetEventFlagID(1049302206, ON);
    else if (EventFlag(1049308207))
        SetEventFlagID(1049302207, ON);
    else if (EventFlag(1049308208))
        SetEventFlagID(1049302208, ON);
});

//Random boss selection
$Event(11107798, Restart, function() {
    WaitFor(
        //all bosses
        EventFlag(1049302245)
            //remembrance
            || EventFlag(1049302246)
            //great enemies
            || EventFlag(1049302247)
            //minor bosses
            || EventFlag(1049302248)
            //dlc main
            || EventFlag(1049302249)
            //dlc minor
            || EventFlag(1049302250));
        //all bosses
        if (EventFlag(1049302245)) {
            SetEventFlagID(1049302245, OFF);
            RandomlySetEventFlagInRange(1049302000,1049302208, ON);
        //remembrance
        } else if (EventFlag(1049302246)) {
            SetEventFlagID(1049302246, OFF);
            RandomlySetEventFlagInRange(1049302000,1049302016, ON);
        //great enemies
        } else if (EventFlag(1049302247)) {
            SetEventFlagID(1049302247, OFF); 
            RandomlySetEventFlagInRange(1049302017,1049302049, ON);
        //minor bosses
        } else if (EventFlag(1049302248)) {
            SetEventFlagID(1049302248, OFF);
            RandomlySetEventFlagInRange(1049302050,1049302166, ON);
        //dlc main
        } else if (EventFlag(1049302249)) {
            SetEventFlagID(1049302249, OFF);
            RandomlySetEventFlagInRange(1049302167,1049302178, ON);
        //dlc minor
        } else if (EventFlag(1049302250)) {
            SetEventFlagID(1049302250, OFF);
            RandomlySetEventFlagInRange(1049302179,1049302208, ON);
        }
});

//remembrance bosses
$Event(11107778, Restart, function() {
    WaitFor(AnyBatchEventFlags(1049302000,1049302016));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
    //radagon+elden beast
    if (EventFlag(1049302012)) {
        SetEventFlagID(1049308012, ON);
        SetEventFlagID(19000800, OFF);
        SetEventFlagID(1049300040, OFF);
        SetEventFlagID(1049300041, ON);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(19000098);
        WarpPlayer(19, 0, 0, 0, 19000098, 0);
        //radagon
    } else if (EventFlag(1049302013)) {
        SetEventFlagID(1049308013, ON);
        SetEventFlagID(19000800, OFF);
        SetEventFlagID(1049300040, OFF);
        SetEventFlagID(1049300041, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(19000098);
        WarpPlayer(19, 0, 0, 0, 19000098, 0);
        //elden beast
    } else if (EventFlag(1049302014)) {
        SetEventFlagID(1049308014, ON);
        SetEventFlagID(19000800, OFF);
        SetEventFlagID(1049300040, ON);
        SetEventFlagID(1049300041, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(19000098);
        WarpPlayer(19, 0, 0, 0, 19000098, 0);
        //godrick
    } else if (EventFlag(1049302000)) {
        SetEventFlagID(1049308000, ON);
        SetEventFlagID(10000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(10002899);
        WarpPlayer(10, 0, 0, 0, 10002899, 0);
        //radahn
    } else if (EventFlag(1049302003)) {
        SetEventFlagID(1049308003, ON);
        SetEventFlagID(1052380800, OFF);
        WarpPlayer(60, 51, 37, 0, 60513799, 0);
        //morgott
    } else if (EventFlag(1049302006)) {
        SetEventFlagID(1049308006, ON);
        SetEventFlagID(11000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(11000099);
        WarpPlayer(11, 0, 0, 0, 11000099, 0);
        //rykard
    } else if (EventFlag(1049302007)) {
        SetEventFlagID(1049308007, ON);
        SetEventFlagID(16000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(16000099);
        WarpPlayer(16, 0, 0, 0, 16000099, 0);
        //mohg lord of blood
    } else if (EventFlag(1049302015)) {
        SetEventFlagID(1049308015, ON);
        SetEventFlagID(12050800, OFF);
        WarpPlayer(12, 5, 0, 0, 12050099, 0);
        //malenia
    } else if (EventFlag(1049302016)) {
        SetEventFlagID(1049308016, ON);
        SetEventFlagID(15000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(15000099);
        WarpPlayer(15, 0, 0, 0, 15000099, 0);
        //rennala
    } else if (EventFlag(1049302001)) {
        SetEventFlagID(1049308001, ON);
        SetEventFlagID(14000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(14000099);
        WarpPlayer(14, 0, 0, 0, 14000099, 0);
        //fortissax
    } else if (EventFlag(1049302005)) {
        SetEventFlagID(1049308005, ON);
        SetEventFlagID(12030800, ON);
        SetEventFlagID(12030850, OFF);
        WarpPlayer(12, 3, 0, 0, 12030099, 0);
        //maliketh
    } else if (EventFlag(1049302009)) {
        SetEventFlagID(1049308009, ON);
        SetEventFlagID(13000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(13000099);
        WarpPlayer(13, 0, 0, 0, 13000099, 0);
        //astel
    } else if (EventFlag(1049302004)) {
        SetEventFlagID(1049308004, ON);
        SetEventFlagID(12040800, OFF);
        WarpPlayer(12, 4, 0, 0, 12040099, 0);
        //regal ancestor
    } else if (EventFlag(1049302002)) {
        SetEventFlagID(1049308002, ON);
        SetEventFlagID(12090800, OFF);
        WarpPlayer(12, 9, 0, 0, 12090099, 0);
        //hoarah loux
    } else if (EventFlag(1049302010)) {
        SetEventFlagID(1049308010, ON);
        SetEventFlagID(11050800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(11050099);
        WarpPlayer(11, 5, 0, 0, 11050099, 0);
        //fire giant
    } else if (EventFlag(1049302008)) {
        SetEventFlagID(1049308008, ON);
        SetEventFlagID(1052520800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1052530099);
        WarpPlayer(60, 52, 53, 0, 1052530099, 0);
        //placidusax
    } else if (EventFlag(1049302011)) {
        SetEventFlagID(1049308011, ON);
        SetEventFlagID(13000830, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(13000098);
        WarpPlayer(13, 0, 0, 0, 13000098, 0);
    }
    RestartEvent();
});

//great enemies
$Event(11107792, Restart, function() {
    WaitFor(AnyBatchEventFlags(1049302017,1049302049));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
        //goldfrey
    if (EventFlag(1049302033)) {
        SetEventFlagID(1049308033, ON);
        SetEventFlagID(11000850, OFF);
        WarpPlayer(11, 0, 0, 0, 11000091, 0);
        //godskin duo
    } else if (EventFlag(1049302042)) {
        SetEventFlagID(1049308042, ON);
        SetEventFlagID(13000850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(13000095);
        WarpPlayer(13, 0, 0, 0, 13000095, 0);
        //godskin noble (volcano)
    } else if (EventFlag(1049302034)) {
        SetEventFlagID(1049308034, ON);
        SetEventFlagID(16000850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(16000091);
        WarpPlayer(16, 0, 0, 0, 16000091, 0);
        //godskin apostle (caelid)
    } else if (EventFlag(1049302043)) {
        SetEventFlagID(1049308043, ON);
        SetEventFlagID(34130800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(34130099);
        WarpPlayer(34, 13, 0, 0, 34130099, 0);
        //valiant gargoyles
    } else if (EventFlag(1049302036)) {
        SetEventFlagID(1049308036, ON);
        SetEventFlagID(12020800, OFF);
        SetEventFlagID(12030850, ON);
        WarpPlayer(12, 2, 0, 0, 12020098, 0);
        //elemer
    } else if (EventFlag(1049302027)) {
        SetEventFlagID(1049308027, ON);
        SetEventFlagID(1039540800, OFF);
        WarpPlayer(60, 39, 54, 0, 60395499, 0);
        //niall
    } else if (EventFlag(1049302040)) {
        SetEventFlagID(1049308040, ON);
        SetEventFlagID(1051570800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1051570099);
        WarpPlayer(60, 51, 57, 0, 1051570099, 0);
        //o'neil
    } else if (EventFlag(1049302026)) {
        SetEventFlagID(1049308026, ON);
        SetEventFlagID(1049380800, OFF);
        WarpPlayer(60, 49, 38, 0, 60493899, 0);
        //loretta (haligtree)
    } else if (EventFlag(1049302048)) {
        SetEventFlagID(1049308048, ON);
        SetEventFlagID(15000850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(15000097);
        WarpPlayer(15, 0, 0, 0, 15000097, 0);
        //loretta (caria)
    } else if (EventFlag(1049302023)) {
        SetEventFlagID(1049308023, ON);
        SetEventFlagID(1035500800, OFF);
        WarpPlayer(60, 35, 50, 0, 60355099, 0);
        //margit
    } else if (EventFlag(1049302018)) {
        SetEventFlagID(1049308018, ON);
        SetEventFlagID(10000850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(10000091);
        WarpPlayer(10, 0, 0, 0, 10000091, 0);
        //ancestor spirit
    } else if (EventFlag(1049302021)) {
        SetEventFlagID(1049308021, ON);
        SetEventFlagID(12080800, OFF);
        WarpPlayer(12, 8, 0, 0, 12080099, 0);
        //dragonkin (lake of rot)
    } else if (EventFlag(1049302038)) {
        SetEventFlagID(1049308038, ON);
        SetEventFlagID(12010850, OFF);
        SetEventFlagID(12010595, ON);
        WarpPlayer(12, 1, 0, 0, 12010091, 0);
        //dragonkin (nokstella)
    } else if (EventFlag(1049302019)) {
        SetEventFlagID(1049308019, ON);
        SetEventFlagID(12010800, OFF);
        WarpPlayer(12, 1, 0, 0, 12010098, 0);
        //leonine misbegotten
    } else if (EventFlag(1049302017)) {
        SetEventFlagID(1049308017, ON);
        SetEventFlagID(1043300800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1043300099);
        WarpPlayer(60, 43, 30, 0, 1043300099, 0);
        //red wolf of radagon
    } else if (EventFlag(1049302022)) {
        SetEventFlagID(1049308022, ON);
        SetEventFlagID(14000850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(14000092);
        WarpPlayer(14, 0, 0, 0, 14000092, 0);
        //agheel
    } else if (EventFlag(1049302020)) {
        SetEventFlagID(1049308020, ON);
        SetEventFlagID(1043360800, OFF);
        WarpPlayer(60, 43, 36, 0, 60433699, 0);
        //adula
    } else if (EventFlag(1049302047)) {
        SetEventFlagID(1049308047, ON);
        SetEventFlagID(1034420800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1034412001);
        WarpPlayer(60, 34, 41, 0, 1034412001, 0);
        //smarag
    } else if (EventFlag(1049302028)) {
        SetEventFlagID(1049308028, ON);
        SetEventFlagID(1034450800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1034452099);
        WarpPlayer(60, 34, 45, 0, 1034452099, 0);
        //borealis
    } else if (EventFlag(1049302045)) {
        SetEventFlagID(1049308045, ON);
        SetEventFlagID(1054560800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1054562099);
        WarpPlayer(60, 54, 56, 0, 1054562099, 0);
        //ekzykes
    } else if (EventFlag(1049302030)) {
        SetEventFlagID(1049308030, ON);
        SetEventFlagID(1048370800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1048372099);
        WarpPlayer(60, 48, 37, 0, 1048372099, 0);
        //theodorix
    } else if (EventFlag(1049302049)) {
        SetEventFlagID(1049308049, ON);
        SetEventFlagID(1050560800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1050562099);
        WarpPlayer(60, 50, 56, 0, 1050562099, 0);
        //makar
    } else if (EventFlag(1049302024)) {
        SetEventFlagID(1049308024, ON);
        SetEventFlagID(39200800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(39200099);
        WarpPlayer(39, 20, 0, 0, 39200099, 0);
        //mohg (sewers)
    } else if (EventFlag(1049302039)) {
        SetEventFlagID(1049308039, ON);
        SetEventFlagID(35000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(35000094);
        WarpPlayer(35, 0, 0, 0, 35000094, 0);
        //siluria
    } else if (EventFlag(1049302041)) {
        SetEventFlagID(1049308041, ON);
        SetEventFlagID(12030800, OFF);
        SetEventFlagID(12030850, ON);
        SetEventFlagID(12030390, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(12030092);
        WarpPlayer(12, 3, 0, 0, 12030092, 0);
    //misbegotten + crucible
    } else if (EventFlag(1049302025)) {
        SetEventFlagID(1049308025, ON);
        SetEventFlagID(1051360800, OFF);
        SetEventFlagID(9410, OFF);
        SetEventFlagID(9413, ON);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1051362001);
        WarpPlayer(60, 51, 36, 0, 1051362001, 0);
    //mimic tear
    } else if (EventFlag(1049302029)) {
        SetEventFlagID(1049308029, ON);
        SetEventFlagID(12020850, OFF);
        WarpPlayer(12, 2, 0, 0, 12020099, 0);
    //dragonkin (siofra)
    } else if (EventFlag(1049302031)) {
        SetEventFlagID(1049308031, ON);
        SetEventFlagID(12020830, OFF);
        WarpPlayer(12, 2, 0, 0, 12020096, 0);
    //fia's champions
    } else if (EventFlag(1049302032)) {
        SetEventFlagID(1049308032, ON);
        SetEventFlagID(12030800, OFF);
        SetEventFlagID(12030850, ON);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(12030099);
        WarpPlayer(12, 3, 0, 0, 12030099, 0);
    //magma wyrm (gelmir)
    } else if (EventFlag(1049302035)) {
        SetEventFlagID(1049308035, ON);
        SetEventFlagID(1035530800, OFF);
        WarpPlayer(60, 35, 53, 0, 1035532001, 0);
    //lansseax
    } else if (EventFlag(1049302037)) {
        SetEventFlagID(1049308037, ON);
        SetEventFlagID(1041520800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1041522099);
        WarpPlayer(60, 41, 52, 0, 1041522099, 0);
    //gideon
    } else if (EventFlag(1049302044)) {
        SetEventFlagID(1049308044, ON);
        SetEventFlagID(11050800, OFF);
        SetEventFlagID(11050850, OFF);
        WarpPlayer(11, 5, 0, 0, 11050971, 0);
    //greyll
    } else if (EventFlag(1049302046)) {
        SetEventFlagID(1049308046, ON);
        SetEventFlagID(1052410800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1052412099);
        WarpPlayer(60, 52, 41, 0, 1052412099, 0);
    }
    RestartEvent();
});

//overworld bosses 1
$Event(11107780, Restart, function() {
    WaitFor(AnyBatchEventFlags(1049302050,1049302075));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
        //deathbird (weeping)
    if (EventFlag(1049302055)) {
        SetEventFlagID(1049308055, ON);
        SetEventFlagID(1044320340, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1044322099);
        WarpPlayer(60, 44, 32, 0, 1044322099, 0);
        //tree sentinel (limgrave)
    } else if (EventFlag(1049302054)) {
        SetEventFlagID(1049308054, ON);
        SetEventFlagID(1042360800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1042362099);
        WarpPlayer(60, 42, 36, 0, 1042362099, 0);
        //grafted scion
    } else if (EventFlag(1049302058)) {
        SetEventFlagID(1049308058, ON);
        SetEventFlagID(10010800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(10010099);
        WarpPlayer(10, 1, 0, 0, 10010099, 0);
        //tibia (limgrave)
    } else if (EventFlag(1049302053)) {
        SetEventFlagID(1049308053, ON);
        SetEventFlagID(1045390800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1045392099);
        WarpPlayer(60, 45, 39, 0, 1045392099, 0);
        //bell bearing (limgrave)
    } else if (EventFlag(1049302050)) {
        SetEventFlagID(1049308050, ON);
        SetEventFlagID(1042380850, OFF);
        SetEventFlagID(1042380701, ON);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1042382001);
        WarpPlayer(60, 42, 38, 0, 1042382001, 0);
        //erdtree avatar (weeping)
    } else if (EventFlag(1049302056)) {
        SetEventFlagID(1049308056, ON);
        SetEventFlagID(1043330800, OFF);
        WarpPlayer(60, 43, 33, 0, 1043330972, 0);
        //putrid avatar (caelid)
    } else if (EventFlag(1049302071)) {
        SetEventFlagID(1049308071, ON);
        SetEventFlagID(1047400800, OFF);
        WarpPlayer(60, 46, 40, 0, 1046400970, 0);
        //omenkiller (albinauric village)
    } else if (EventFlag(1049302066)) {
        SetEventFlagID(1049308066, ON);
        SetEventFlagID(1035420800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1035422098);
        WarpPlayer(60, 35, 42, 0, 1035422098, 0);
        //wormface
    } else if (EventFlag(1049302075)) {
        SetEventFlagID(1049308075, ON);
        SetEventFlagID(1041530800, OFF);
        WarpPlayer(60, 41, 53, 0, 60415399, 0);
        //nox duo
    } else if (EventFlag(1049302059)) {
        SetEventFlagID(1049308059, ON);
        SetEventFlagID(1049390800, OFF);
        SetEventFlagID(1049390200, ON);
        SetEventFlagID(1049390201, ON);
        WarpPlayer(60, 49, 39, 0, 1049390981, 0);
        //erdtree avatar (liurnia west)
    } else if (EventFlag(1049302063)) {
        SetEventFlagID(1049308063, ON);
        SetEventFlagID(1033430800, OFF);
        WarpPlayer(60, 33, 43, 0, 60334399, 0);
        //erdtree avatar (liurnia east)
    } else if (EventFlag(1049302064)) {
        SetEventFlagID(1049308064, ON);
        SetEventFlagID(1038480800, OFF);
        WarpPlayer(60, 38, 48, 0, 603848001, 0);
        //fallingstar (altus)
    } else if (EventFlag(1049302073)) {
        SetEventFlagID(1049308073, ON);
        SetEventFlagID(1041500800, OFF);
        WarpPlayer(60, 41, 50, 0, 60415001, 0);
        //deathbird (limgrave)
    } else if (EventFlag(1049302051)) {
        SetEventFlagID(1049308051, ON);
        SetEventFlagID(1042380800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1042382002);
        WarpPlayer(60, 42, 38, 0, 1042382002, 0);
        //deathbird (liurnia)
    } else if (EventFlag(1049302061)) {
        SetEventFlagID(1049308061, ON);
        SetEventFlagID(1037420340, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1037422001);
        WarpPlayer(60, 37, 42, 0, 1037422001, 0);
        //bell bearing (liurnia)
    } else if (EventFlag(1049302060)) {
        SetEventFlagID(1049308060, ON);
        SetEventFlagID(1037460800, OFF);
        SetEventFlagID(1037460701, ON);
        WarpPlayer(60, 37, 46, 0, 1037462650, 0);
        //bk assassin (outside sainted hero)
    } else if (EventFlag(1049302072)) {
        SetEventFlagID(1049308072, ON);
        SetEventFlagID(1040520800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1040522001);
        WarpPlayer(60, 40, 52, 0, 1040522001, 0);
        //godskin apostle (altus)
    } else if (EventFlag(1049302074)) {
        SetEventFlagID(1049308074, ON);
        SetEventFlagID(1042550800, OFF);
        WarpPlayer(60, 42, 55, 0, 60425599, 0);
        //tibia (liurnia)
    } else if (EventFlag(1049302067)) {
        SetEventFlagID(1049308067, ON);
        SetEventFlagID(1039440800, OFF);
        WarpPlayer(60, 39, 44, 0, 60394499, 0);
        //death rite (liurnia)
    } else if (EventFlag(1049302062)) {
        SetEventFlagID(1049308062, ON);
        SetEventFlagID(1036450340, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1036452001);
        WarpPlayer(60, 36, 45, 0, 1036452001, 0);
        //death rite (caelid)
    } else if (EventFlag(1049302068)) {
        SetEventFlagID(1049308068, ON);
        SetEventFlagID(1049370850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1049372001);
        WarpPlayer(60, 49, 37, 0, 1049372001, 0);
        //night's cavalry (limgrave)
    } else if (EventFlag(1049302052)) {
        SetEventFlagID(1049308052, ON);
        SetEventFlagID(1043370340, OFF);
        WarpPlayer(60, 43, 37, 0, 1043370971, 0);
        //night's cavalry (weeping)
    } else if (EventFlag(1049302057)) {
        SetEventFlagID(1049308057, ON);
        SetEventFlagID(1044320342, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1044332001);
        WarpPlayer(60, 44, 33, 0, 1044332001, 0);
        //night's cavalry (liurnia north)
    } else if (EventFlag(1049302065)) {
        SetEventFlagID(1049308065, ON);
        SetEventFlagID(1036480340, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1036482001);
        WarpPlayer(60, 36, 48, 0, 1036482001, 0);
        //night's cavalry (liurnia east)
    } else if (EventFlag(1049302070)) {
        SetEventFlagID(1049308070, ON);
        SetEventFlagID(1039430340, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1039432099);
        WarpPlayer(60, 39, 43, 0, 1039432099, 0);
        //night's cavalry (caelid)
    } else if (EventFlag(1049302069)) {
        SetEventFlagID(1049308069, ON);
        SetEventFlagID(1049370800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1049372002);
        WarpPlayer(60, 49, 37, 0, 1049372002, 0);
    }
    RestartEvent();
});    

//overworld bosses 2
$Event(11107795, Restart, function() {
    WaitFor(AnyBatchEventFlags(1049302076,1049302096));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
        //black blade kindred (dragonbarrow)
    if (EventFlag(1049302091)) {
        SetEventFlagID(1049308091, ON);
        SetEventFlagID(1051430800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1051432001);
        WarpPlayer(60, 51, 43, 0, 1051432001, 0);
        //tree sentinel x2 (altus)
    } else if (EventFlag(1049302077)) {
        SetEventFlagID(1049308077, ON);
        SetEventFlagID(1041510800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1041512099);
        WarpPlayer(60, 41, 51, 0, 1041512099, 0);
        //erdtree avatar (mountaintops)
    } else if (EventFlag(1049302088)) {
        SetEventFlagID(1049308088, ON);
        SetEventFlagID(1052560800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1052562099);
        WarpPlayer(60, 52, 56, 0, 1052562099, 0);
        //putrid avatar (dragonbarrow)
    } else if (EventFlag(1049302093)) {
        SetEventFlagID(1049308093, ON);
        SetEventFlagID(1051400800, OFF);
        WarpPlayer(60, 51, 40, 0, 1051400970, 0);
        //putrid avatar (snowfield)
    } else if (EventFlag(1049302096)) {
        SetEventFlagID(1049308096, ON);
        SetEventFlagID(1050570850, OFF);
        WarpPlayer(60, 50, 57, 0, 60505799, 0);
       //bell bearing (outskirts)
    } else if (EventFlag(1049302078)) {
        SetEventFlagID(1049308078, ON);
        SetEventFlagID(1043530800, OFF);
        SetEventFlagID(1043530701, ON);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1043532001);
        WarpPlayer(60, 43, 53, 0, 1043532001, 0); 
        //bell bearing (dragonbarrow)
    } else if (EventFlag(1049302090)) {
        SetEventFlagID(1049308090, ON);
        SetEventFlagID(1048410800, OFF);
        SetEventFlagID(1048410701, ON);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1048412001);
        WarpPlayer(60, 48, 41, 0, 1048412001, 0);
        //black blade kindred (forbidden)
    } else if (EventFlag(1049302084)) {
        SetEventFlagID(1049308084, ON);
        SetEventFlagID(1049520800, OFF);
        WarpPlayer(60, 49, 52, 0, 1049520970, 0);
        //fell twins
    } else if (EventFlag(1049302085)) {
        SetEventFlagID(1049308085, ON);
        SetEventFlagID(34140850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(34140001);
        WarpPlayer(34, 14, 0, 0, 34140001, 0);
        //maggie
    } else if (EventFlag(1049302080)) {
        SetEventFlagID(1049308080, ON);
        SetEventFlagID(1037530800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1037532001);
        WarpPlayer(60, 37, 53, 0, 1037532001, 0);
        //night's cavalry (dragonbarrow)
    } else if (EventFlag(1049302092)) {
        SetEventFlagID(1049308092, ON);
        SetEventFlagID(1052410850, OFF);
        SetEventFlagID(1052410851, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1052412098);
        WarpPlayer(60, 52, 41, 0, 1052412098, 0);
        //draconic tree sentinel
    } else if (EventFlag(1049302081)) {
        SetEventFlagID(1049308081, ON);
        SetEventFlagID(1045520800, OFF);
        WarpPlayer(60, 45, 52, 0, 1045520970, 0);
        //full-grown fallingstar
    } else if (EventFlag(1049302086)) {
        SetEventFlagID(1049308086, ON);
        SetEventFlagID(1036540800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1036542001);
        WarpPlayer(60, 36, 54, 0, 1036542001, 0);
        //deathbird (outskirts)
    } else if (EventFlag(1049302079)) {
        SetEventFlagID(1049308079, ON);
        SetEventFlagID(1044530800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1044532001);
        WarpPlayer(60, 44, 53, 0, 1044532001, 0);
        //death rite (mountaintops)
    } else if (EventFlag(1049302087)) {
        SetEventFlagID(1049308087, ON);
        SetEventFlagID(1050570800, OFF);
        WarpPlayer(60, 50, 57, 0, 1050570970, 0);
        //death rite (snowfield)
    } else if (EventFlag(1049302094)) {
        SetEventFlagID(1049308094, ON);
        SetEventFlagID(1048570800, OFF);
        //disable mausoleum
        SetEventFlagID(1247580400, ON);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1048572099);
        WarpPlayer(60, 48, 57, 0, 1048572099, 0);
        //tree spirit (gelmir)
    } else if (EventFlag(1049302083)) {
        SetEventFlagID(1049308083, ON);
        SetEventFlagID(1037540810, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1037542099);
        WarpPlayer(60, 37, 54, 0, 1037542099, 0);
        //night's cavalry (altus)
    } else if (EventFlag(1049302076)) {
        SetEventFlagID(1049308076, ON);
        SetEventFlagID(1039510800, OFF);
        SetEventFlagID(1039510801, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1039512001);
        WarpPlayer(60, 39, 51, 0, 1039512001, 0);
        //night's cavalry (forbidden)
    } else if (EventFlag(1049302089)) {
        SetEventFlagID(1049308089, ON);
        SetEventFlagID(1048510800, OFF);
        SetEventFlagID(1048510810, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1048512099);
        WarpPlayer(60, 48, 51, 0, 1048512099, 0);
        //night's cavalry x2
    } else if (EventFlag(1049302095)) {
        SetEventFlagID(1049308095, ON);
        SetEventFlagID(1248550800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1048552001);
        WarpPlayer(60, 48, 55, 0, 1048552001, 0);
        //tibia (altus)
    } else if (EventFlag(1049302082)) {
        SetEventFlagID(1049308082, ON);
        SetEventFlagID(1038520340, OFF);
        SetEventFlagID(1038520800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1038522099);
        WarpPlayer(60, 38, 52, 0, 1038522099, 0);
    }
    RestartEvent();
});    

//evergaol bosses
$Event(11107793, Restart, function() {
    WaitFor(AnyBatchEventFlags(1049302097,1049302106));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
        //darriwil
        if (EventFlag(1049302097)) {
        SetEventFlagID(1049308097, ON);
        SetEventFlagID(1044350800, OFF);
        WarpPlayer(60, 44, 35, 0, 60443599, 0);
        //crucible knight (evergaol)
    } else if (EventFlag(1049302099)) {
        SetEventFlagID(1049308099, ON);
        SetEventFlagID(1042370800, OFF);
        WarpPlayer(60, 42, 37, 0, 60423799, 0);
        //zamor (evergaol)
    } else if (EventFlag(1049302098)) {
        SetEventFlagID(1049308098, ON);
        SetEventFlagID(1042330800, OFF);
        SetEventFlagID(1042330570, ON);
        WarpPlayer(60, 42, 33, 0, 60423399, 0);
        //adan
    } else if (EventFlag(1049302100)) {
        SetEventFlagID(1049308100, ON);
        SetEventFlagID(1038410800, OFF);
        WarpPlayer(60, 38, 41, 0, 60384199, 0);
        //bols
    } else if (EventFlag(1049302101)) {
        SetEventFlagID(1049308101, ON);
        SetEventFlagID(1033450800, OFF);
        WarpPlayer(60, 33, 45, 0, 60334599, 0);
        //onyx lord (evergaol)
    } else if (EventFlag(1049302102)) {
        SetEventFlagID(1049308102, ON);
        SetEventFlagID(1036500800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1036502099);
        WarpPlayer(60, 36, 50, 0, 1036502099, 0);
        //hugues
    } else if (EventFlag(1049302103)) {
        SetEventFlagID(1049308103, ON);
        SetEventFlagID(1049390850, OFF);
        WarpPlayer(60, 49, 39, 0, 60493999, 0);
        //vyke
    } else if (EventFlag(1049302104)) {
        SetEventFlagID(1049308104, ON);
        SetEventFlagID(1053560800, OFF);
        WarpPlayer(60, 53, 56, 0, 60535699, 0);
        //godefroy
    } else if (EventFlag(1049302105)) {
        SetEventFlagID(1049308105, ON);
        SetEventFlagID(1039500800, OFF);
        SetEventFlagID(1039500570, ON);
        WarpPlayer(60, 39, 50, 0, 60395099, 0);
        //alecto
    } else if (EventFlag(1049302106)) {
        SetEventFlagID(1049308106, ON);
        SetEventFlagID(1033420800, OFF);
        WarpPlayer(60, 33, 42, 0, 60334299, 0);
    }
    RestartEvent();
});

//catacomb and grave bosses
$Event(11107794, Restart, function() {
    WaitFor(AnyBatchEventFlags(1049302107,1049302130));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
        //duelist (murkwater)
        if (EventFlag(1049302109)) {
        SetEventFlagID(1049308109, ON);
        SetEventFlagID(30040800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30040099);
        WarpPlayer(30, 4, 0, 0, 30040099, 0);
        //putrid duelist (snowfield)
    } else if (EventFlag(1049302130)) {
        SetEventFlagID(1049308130, ON);
        SetEventFlagID(30190800, OFF);
        WarpPlayer(30, 19, 0, 0, 30190099, 0);
        //bk assassin (bk catacombs)
    } else if (EventFlag(1049302112)) {
        SetEventFlagID(1049308112, ON);
        SetEventFlagID(30050850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30050099);
        WarpPlayer(30, 5, 0, 0, 30050099, 0);
        //cemetery shade (caelid)
    } else if (EventFlag(1049302117)) {
        SetEventFlagID(1049308117, ON);
        SetEventFlagID(30150800, OFF);
        WarpPlayer(30, 15, 0, 0, 30150099, 0);
        //tree spirit (mountaintops)
    } else if (EventFlag(1049302126)) {
        SetEventFlagID(1049308126, ON);
        SetEventFlagID(30180800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30180099);
        WarpPlayer(30, 18, 0, 0, 30180099, 0);
        //watchdog (stormfoot)
    } else if (EventFlag(1049302108)) {
        SetEventFlagID(1049308108, ON);
        SetEventFlagID(30020800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30020099);
        WarpPlayer(30, 2, 0, 0, 30020099, 0);
        //watchdog (impaler's)
    } else if (EventFlag(1049302111)) {
        SetEventFlagID(1049308111, ON);
        SetEventFlagID(30010800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30010099);
        WarpPlayer(30, 1, 0, 0, 30010099, 0);
        //watchdog (cliffbottom)
    } else if (EventFlag(1049302114)) {
        SetEventFlagID(1049308114, ON);
        SetEventFlagID(30060800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30060099);
        WarpPlayer(30, 6, 0, 0, 30060099, 0);
        //watchdog x2 (minor erdtree)
    } else if (EventFlag(1049302118)) {
        SetEventFlagID(1049308118, ON);
        SetEventFlagID(30140800, OFF);
        WarpPlayer(30, 14, 0, 0, 30140099, 0);
        //watchdog (wyndham)
    } else if (EventFlag(1049302121)) {
        SetEventFlagID(1049308121, ON);
        SetEventFlagID(30070800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30070099);
        WarpPlayer(30, 7, 0, 0, 30070099, 0);
        //tree spirit (fringefolk)
    } else if (EventFlag(1049302116)) {
        SetEventFlagID(1049308116, ON);
        SetEventFlagID(18000800, OFF);
        WarpPlayer(18, 0, 0, 0, 18000098, 0);
        //zamor (sainted hero)
    } else if (EventFlag(1049302119)) {
        SetEventFlagID(1049308119, ON);
        SetEventFlagID(30080800, OFF);
        WarpPlayer(30, 8, 0, 0, 30080099, 0);
        //zamor (giant-conquering)
    } else if (EventFlag(1049302125)) {
        SetEventFlagID(1049308125, ON);
        SetEventFlagID(30170800, OFF);
        WarpPlayer(30, 17, 0, 0, 30170099, 0);
        //bk assassin (deathtouched)
    } else if (EventFlag(1049302107)) {
        SetEventFlagID(1049308107, ON);
        SetEventFlagID(30110800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30110099);
        WarpPlayer(30, 11, 0, 0, 30110099, 0);
        //cemetery shade (tombsward)
    } else if (EventFlag(1049302110)) {
        SetEventFlagID(1049308110, ON);
        SetEventFlagID(30000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30000094);
        WarpPlayer(30, 0, 0, 0, 30000094, 0);
        //cemetery shade (bk catacombs)
    } else if (EventFlag(1049302113)) {
        SetEventFlagID(1049308113, ON);
        SetEventFlagID(30050800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30050096);
        WarpPlayer(30, 5, 0, 0, 30050096, 0);
        //stray mimic
    } else if (EventFlag(1049302129)) {
        SetEventFlagID(1049308129, ON);
        SetEventFlagID(30200800, OFF);
        WarpPlayer(30, 20, 0, 0, 30200099, 0);
        //duelist (auriza)
    } else if (EventFlag(1049302122)) {
        SetEventFlagID(1049308122, ON);
        SetEventFlagID(30130800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30130099);
        WarpPlayer(30, 13, 0, 0, 30130099, 0);
        //snail (road's end)
    } else if (EventFlag(1049302115)) {
        SetEventFlagID(1049308115, ON);
        SetEventFlagID(30030800, OFF);
        WarpPlayer(30, 3, 0, 0, 30030099, 0);
        //putrid tree spirit
    } else if (EventFlag(1049302128)) {
        SetEventFlagID(1049308128, ON);
        SetEventFlagID(30160800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30160099);
        WarpPlayer(30, 16, 0, 0, 30160099, 0);
        //ordovis
    } else if (EventFlag(1049302124)) {
        SetEventFlagID(1049308124, ON);
        SetEventFlagID(30100800, OFF);
        WarpPlayer(30, 10, 0, 0, 30100099, 0);
        //esgar
    } else if (EventFlag(1049302127)) {
        SetEventFlagID(1049308127, ON);
        SetEventFlagID(35000850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(35000099);
        WarpPlayer(35, 0, 0, 0, 35000099, 0);
        //red wolf of champion
    } else if (EventFlag(1049302123)) {
        SetEventFlagID(1049308123, ON);
        SetEventFlagID(30090800, OFF);
        WarpPlayer(30, 9, 0, 0, 30090099, 0);
        //tricia
    } else if (EventFlag(1049302120)) {
        SetEventFlagID(1049308120, ON);
        SetEventFlagID(30120800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(30120099);
        WarpPlayer(30, 12, 0, 0, 30120099, 0);
    }
    RestartEvent();
});

//cave bosses
$Event(11107782, Default, function() {
    WaitFor(AnyBatchEventFlags(1049302131,1049302152));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
    //soldier of godrick
    if (EventFlag(1049302131)) {
        SetEventFlagID(1049308131, ON);
        SetEventFlagID(18000850, OFF);
        WarpPlayer(18, 0, 0, 0, 18000095, 0);
        //beastman (groveside)
    } else if (EventFlag(1049302132)) {
        SetEventFlagID(1049308132, ON);
        SetEventFlagID(31030800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31030096);
        WarpPlayer(31, 3, 0, 0, 31030096, 0);
        //demi-human chiefs
    } else if (EventFlag(1049302133)) {
        SetEventFlagID(1049308133, ON);
        SetEventFlagID(31150800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31150099);
        WarpPlayer(31, 15, 0, 0, 31150099, 0);
        //margot
    } else if (EventFlag(1049302144)) {
        SetEventFlagID(1049308144, ON);
        SetEventFlagID(31090800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31090099);
        WarpPlayer(31, 9, 0, 0, 31090099, 0);
        //patches
    } else if (EventFlag(1049302135)) {
        SetEventFlagID(1049308135, ON);
        SetEventFlagID(31000800, OFF);
        SetEventFlagID(3683, OFF);
        SetEventFlagID(3691, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31000097);
        WarpPlayer(31, 0, 0, 0, 31000097, 0);
        //guardian golem
    } else if (EventFlag(1049302134)) {
        SetEventFlagID(1049308134, ON);
        SetEventFlagID(31170800, OFF);
        WarpPlayer(31, 17, 0, 0, 31170099, 0);
        //runebear
    } else if (EventFlag(1049302137)) {
        SetEventFlagID(1049308137, ON);
        SetEventFlagID(31010800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31010099);
        WarpPlayer(31, 1, 0, 0, 31010099, 0);
        //cleanrot
    } else if (EventFlag(1049302139)) {
        SetEventFlagID(1049308139, ON);
        SetEventFlagID(31040800, OFF);
        WarpPlayer(31, 4, 0, 0, 31040099, 0);
        //bloodhound
    } else if (EventFlag(1049302138)) {
        SetEventFlagID(1049308138, ON);
        SetEventFlagID(31050800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31050099);
        WarpPlayer(31, 5, 0, 0, 31050099, 0);
        //crystalian x2 (academy crystal cave)
    } else if (EventFlag(1049302141)) {
        SetEventFlagID(1049308141, ON);
        SetEventFlagID(31060800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31060097);
        WarpPlayer(31, 6, 0, 0, 31060097, 0);
        //frenzied duelist
    } else if (EventFlag(1049302142)) {
        SetEventFlagID(1049308142, ON);
        SetEventFlagID(31210800, OFF);
        WarpPlayer(31, 21, 0, 0, 31210099, 0);
        //kindred of rot
    } else if (EventFlag(1049302145)) {
        SetEventFlagID(1049308145, ON);
        SetEventFlagID(31070800, OFF);
        WarpPlayer(31, 7, 0, 0, 31070099, 0);
        //miranda
    } else if (EventFlag(1049302136)) {
        SetEventFlagID(1049308136, ON);
        SetEventFlagID(31020800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31020099);
        WarpPlayer(31, 2, 0, 0, 31020099, 0);
        //garris
    } else if (EventFlag(1049302148)) {
        SetEventFlagID(1049308148, ON);
        SetEventFlagID(31190850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31190098);
        WarpPlayer(31, 19, 0, 0, 31190098, 0);
        //virgins
    } else if (EventFlag(1049302143)) {
        SetEventFlagID(1049308143, ON);
        SetEventFlagID(16000860, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(16000089);
        WarpPlayer(16, 0, 0, 0, 16000089, 0);
        //misbegotten crusader
    } else if (EventFlag(1049302152)) {
        SetEventFlagID(1049308152, ON);
        SetEventFlagID(31120800, OFF);
        WarpPlayer(31, 12, 0, 0, 31120099, 0);
        //bk assassin (sage's)
    } else if (EventFlag(1049302146)) {
        SetEventFlagID(1049308146, ON);
        SetEventFlagID(31190800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31190093);
        WarpPlayer(31, 19, 0, 0, 31190093, 0);
        //snail (spiritcaller cave)
    } else if (EventFlag(1049302150)) {
        SetEventFlagID(1049308150, ON);
        SetEventFlagID(31220800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31220099);
        WarpPlayer(31, 22, 0, 0, 31220099, 0);
        //cleanrot x2
    } else if (EventFlag(1049302140)) {
        SetEventFlagID(1049308140, ON);
        SetEventFlagID(31200800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31200099);
        WarpPlayer(31, 20, 0, 0, 31200099, 0);
        //beastman x2
    } else if (EventFlag(1049302151)) {
        SetEventFlagID(1049308151, ON);
        SetEventFlagID(31100800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31100099);
        WarpPlayer(31, 10, 0, 0, 31100099, 0);
        //putrid crystalian x3
    } else if (EventFlag(1049302147)) {
        SetEventFlagID(1049308147, ON);
        SetEventFlagID(31110800, OFF);
        WarpPlayer(31, 11, 0, 0, 31110099, 0);
        //omenkiller+miranda
    } else if (EventFlag(1049302149)) {
        SetEventFlagID(1049308149, ON);
        SetEventFlagID(31180800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(31180099);
        WarpPlayer(31, 18, 0, 0, 31180099, 0);
    }
    RestartEvent();
});

//tunnel and ruin bosses
$Event(11107796, Default, function() {
    WaitFor(AnyBatchEventFlags(1049302153,1049302166));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
    //stonedigger troll (limgrave)
    if (EventFlag(1049302154)) {
        SetEventFlagID(1049308154, ON);
        SetEventFlagID(32010800, OFF);
        WarpPlayer(32, 1, 0, 0, 32010099, 0);
        //stonedigger troll (altus)
    } else if (EventFlag(1049302163)) {
        SetEventFlagID(1049308163, ON);
        SetEventFlagID(32040800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(32040099);
        WarpPlayer(32, 4, 0, 0, 32040099, 0);
        //scaly misbegotten
    } else if (EventFlag(1049302155)) {
        SetEventFlagID(1049308155, ON);
        SetEventFlagID(32000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(32000097);
        WarpPlayer(32, 0, 0, 0, 32000097, 0);
        //crystalian (raya lucaria crystal tunnel)
    } else if (EventFlag(1049302156)) {
        SetEventFlagID(1049308156, ON);
        SetEventFlagID(32020800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(32020095);
        WarpPlayer(32, 2, 0, 0, 32020095, 0);
        //crystalian x2 (altus)
    } else if (EventFlag(1049302164)) {
        SetEventFlagID(1049308164, ON);
        SetEventFlagID(32050800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(32050099);
        WarpPlayer(32, 5, 0, 0, 32050099, 0);
        //magma wyrm (gael)
    } else if (EventFlag(1049302160)) {
        SetEventFlagID(1049308160, ON);
        SetEventFlagID(32070800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(32070099);
        WarpPlayer(32, 7, 0, 0, 32070099, 0);
        //fallingstar (sellia)
    } else if (EventFlag(1049302158)) {
        SetEventFlagID(1049308158, ON);
        SetEventFlagID(32080800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(32080099);
        WarpPlayer(32, 8, 0, 0, 32080099, 0);
        //onyx lord (sealed tunnel)
    } else if (EventFlag(1049302165)) {
        SetEventFlagID(1049308165, ON);
        SetEventFlagID(34120800, OFF);
        WarpPlayer(34, 12, 0, 0, 34120099, 0);
        //astel stars of darkness
    } else if (EventFlag(1049302166)) {
        SetEventFlagID(1049308166, ON);
        SetEventFlagID(32110800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(32110099);
        WarpPlayer(32, 11, 0, 0, 32110099, 0);
        //royal revenant
    } else if (EventFlag(1049302157)) {
        SetEventFlagID(1049308157, ON);
        SetEventFlagID(1034480800, OFF);
        WarpPlayer(60, 34, 48, 0, 60344899, 0);
        //mad pumpkin
    } else if (EventFlag(1049302153)) {
        SetEventFlagID(1049308153, ON);
        SetEventFlagID(1044360800, OFF);
        WarpPlayer(60, 44, 36, 0, 60443699, 0);
        //mad pumpkin x2
    } else if (EventFlag(1049302159)) {
        SetEventFlagID(1049308159, ON);
        SetEventFlagID(1048400800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(1048402099);
        WarpPlayer(60, 48, 40, 0, 1048402099, 0);
        //sanguine noble
    } else if (EventFlag(1049302162)) {
        SetEventFlagID(1049308162, ON);
        SetEventFlagID(1040530800, OFF);
        WarpPlayer(60, 40, 53, 0, 60405399, 0);
        //gilika
    } else if (EventFlag(1049302161)) {
        SetEventFlagID(1049308161, ON);
        SetEventFlagID(1038510800, OFF);
        //prevent tibia mariner from dying when in the area
        SetEventFlagID(1038520340, OFF);
        SetEventFlagID(1038520800, OFF);
        WarpPlayer(60, 38, 51, 0, 60385199, 0);
    }
    RestartEvent();
});

//dlc main
$Event(11107788, Default, function() {
    WaitFor(AnyBatchEventFlags(1049302167,1049302178));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
    //divine beast
    if (EventFlag(1049302167)) {
        SetEventFlagID(1049308167, ON);
        SetEventFlagID(20000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(20000099);
        WarpPlayer(20, 0, 0, 0, 20000099, 0);
        //rellana
    } else if (EventFlag(1049302168)) {
        SetEventFlagID(1049308168, ON);
        SetEventFlagID(2048440800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2048442099);
        WarpPlayer(61, 48, 44, 0, 2048442099, 0);
        //putrescent
    } else if (EventFlag(1049302170)) {
        SetEventFlagID(1049308170, ON);
        SetEventFlagID(22000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(22000099);
        WarpPlayer(22, 0, 0, 0, 22000099, 0);
        //golden hippo
    } else if (EventFlag(1049302169)) {
        SetEventFlagID(1049308169, ON);
        SetEventFlagID(21000850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(21000099);
        WarpPlayer(21, 0, 0, 0, 21000099, 0);
        //messmer
    } else if (EventFlag(1049302173)) {
        SetEventFlagID(1049308173, ON);
        SetEventFlagID(21010800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(21010099);
        WarpPlayer(21, 1, 0, 0, 21010099, 0);
        //gaius
    } else if (EventFlag(1049302172)) {
        SetEventFlagID(1049308172, ON);
        SetEventFlagID(2049480800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2049482099);
        WarpPlayer(61, 49, 48, 0, 2049482099, 0);
        //scadutree
    } else if (EventFlag(1049302171)) {
        SetEventFlagID(1049308171, ON);
        SetEventFlagID(2050480800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(21000098);
        WarpPlayer(21, 0, 0, 0, 21000098, 0);
        //metyr
    } else if (EventFlag(1049302174)) {
        SetEventFlagID(1049308174, ON);
        SetEventFlagID(25000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(25000099);
        WarpPlayer(25, 0, 0, 0, 25000099, 0);
        //midra
    } else if (EventFlag(1049302175)) {
        SetEventFlagID(1049308175, ON);
        SetEventFlagID(28000800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(28000099);
        WarpPlayer(28, 0, 0, 0, 28000099, 0);
        //romina
    } else if (EventFlag(1049302176)) {
        SetEventFlagID(1049308176, ON);
        SetEventFlagID(2044450800, OFF);
        SetEventFlagID(330, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2044462099);
        WarpPlayer(61, 44, 46, 0, 2044462099, 0);
        //bayle
    } else if (EventFlag(1049302178)) {
        SetEventFlagID(1049308178, ON);
        SetEventFlagID(2054390800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2054392099);
        WarpPlayer(61, 54, 39, 0, 2054392099, 0);
        //consort
    } else if (EventFlag(1049302177)) {
        SetEventFlagID(1049308177, ON);
        SetEventFlagID(20010800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(20010099);
        WarpPlayer(20, 1, 0, 0, 20010099, 0);
    }
    RestartEvent();
});

//dlc minor
$Event(11107789, Default, function() {
    WaitFor(AnyBatchEventFlags(1049302179,1049302208));
    SetPlayerRespawnPoint(11102021);
    BatchSetEventFlags(1049308000,1049308215, OFF);
    //death knight fog rift
    if (EventFlag(1049302180)) {
        SetEventFlagID(1049308180, ON);
        SetEventFlagID(40000800, OFF);
        WarpPlayer(40, 0, 0, 0, 400000001, 0);
        //death knight scorpion river
    } else if (EventFlag(1049302186)) {
        SetEventFlagID(1049308186, ON);
        SetEventFlagID(40010800, OFF);
        WarpPlayer(40, 1, 0, 0, 400100001, 0);
        //jori
    } else if (EventFlag(1049302199)) {
        SetEventFlagID(1049308199, ON);
        SetEventFlagID(2052430800, OFF);
        SetEventFlagID(2052432848, OFF);
        WarpPlayer(40, 2, 0, 0, 4002000001, 0);
        //onze
    } else if (EventFlag(1049302179)) {
        SetEventFlagID(1049308179, ON);
        SetEventFlagID(41000800, OFF);
        WarpPlayer(41, 0, 0, 0, 41000099, 0);
        //lamenter
    } else if (EventFlag(1049302189)) {
        SetEventFlagID(1049308189, ON);
        SetEventFlagID(41020800, OFF);
        WarpPlayer(41, 2, 0, 0, 410200001, 0);
        //labirith
    } else if (EventFlag(1049302184)) {
        SetEventFlagID(1049308184, ON);
        SetEventFlagID(41010800, OFF);
        WarpPlayer(41, 1, 0, 0, 410100001, 0);
        //dragon-man
    } else if (EventFlag(1049302200)) {
        SetEventFlagID(1049308200, ON);
        SetEventFlagID(43010800, OFF);
        WarpPlayer(43, 1, 0, 0, 430100001, 0);
        //chief bloodfiend
    } else if (EventFlag(1049302183)) {
        SetEventFlagID(1049308183, ON);
        SetEventFlagID(43000800, OFF);
        WarpPlayer(43, 0, 0, 0, 430000001, 0);
        //blackgaol
    } else if (EventFlag(1049302198)) {
        SetEventFlagID(1049308198, ON);
        SetEventFlagID(2046410800, OFF);
        WarpPlayer(61, 46, 41, 0, 614641001, 0);
        //ranah
    } else if (EventFlag(1049302182)) {
        SetEventFlagID(1049308182, ON);
        SetEventFlagID(2046380800, OFF);
        WarpPlayer(61, 46, 38, 0, 614638001, 0);
        //rakshasa
    } else if (EventFlag(1049302206)) {
        SetEventFlagID(1049308206, ON);
        SetEventFlagID(2051440800, OFF);
        WarpPlayer(61, 51, 44, 0, 615144001, 0);
        //red bear
    } else if (EventFlag(1049302185)) {
        SetEventFlagID(1049308185, ON);
        SetEventFlagID(2046450800, OFF);
        WarpPlayer(61, 46, 45, 10, 614645101, 0);
        //garrew
    } else if (EventFlag(1049302191)) {
        SetEventFlagID(1049308191, ON);
        SetEventFlagID(2047450800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2047452099);
        WarpPlayer(61, 47, 45, 10, 2047452099, 0);
        //edredd
    } else if (EventFlag(1049302190)) {
        SetEventFlagID(1049308190, ON);
        SetEventFlagID(2049430850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2049432099);
        WarpPlayer(61, 49, 43, 0, 2049432099, 0);
        //marigga
    } else if (EventFlag(1049302187)) {
        SetEventFlagID(1049308187, ON);
        SetEventFlagID(2046400800, OFF);
        WarpPlayer(61, 46, 40, 0, 614640001, 0);
        //dane
    } else if (EventFlag(1049302195)) {
        SetEventFlagID(1049308195, ON);
        SetEventFlagID(2049440800, OFF);
        SetEventFlagID(2049440700, OFF);
        SetEventFlagID(2049449211, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2049442099);
        WarpPlayer(61, 49, 44, 0, 2049442099, 0);
        //ralva
    } else if (EventFlag(1049302193)) {
        SetEventFlagID(1049308193, ON);
        SetEventFlagID(2049450800, OFF);
        WarpPlayer(61, 49, 45, 0, 2049450971, 0);
        //rugalea
    } else if (EventFlag(1049302197)) {
        SetEventFlagID(1049308197, ON);
        SetEventFlagID(2044470800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2044472099);
        WarpPlayer(61, 44, 47, 10, 2044472099, 0);
        //divine beast (rauh)
    } else if (EventFlag(1049302201)) {
        SetEventFlagID(1049308201, ON);
        SetEventFlagID(2046460800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2046462099);
        WarpPlayer(61, 46, 46, 10, 2046462099, 0);
        //death rite bird (charo's)
    } else if (EventFlag(1049302194)) {
        SetEventFlagID(1049308194, ON);
        SetEventFlagID(2047390800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2047392099);
        WarpPlayer(61, 47, 39, 0, 2047392099, 0);
        //fallingstar (hinterland)
    } else if (EventFlag(1049302202)) {
        SetEventFlagID(1049308202, ON);
        SetEventFlagID(2052480800, OFF);
        WarpPlayer(61, 52, 48, 0, 615248001, 0);
        //tree sentinel x2 (hinterland)
    } else if (EventFlag(1049302204)) {
        SetEventFlagID(1049308204, ON);
        SetEventFlagID(2050470800, OFF);
        SetEventFlagID(2050480860, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2050472099);
        WarpPlayer(61, 50, 47, 0, 2050472099, 0);
        //jagged peak drake
    } else if (EventFlag(1049302196)) {
        SetEventFlagID(1049308196, ON);
        SetEventFlagID(2049410800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2049412099);
        WarpPlayer(61, 49, 41, 0, 2049412099, 0);
        //jagged peak drake x2
    } else if (EventFlag(1049302203)) {
        SetEventFlagID(1049308203, ON);
        SetEventFlagID(2052400800, OFF);
        SetEventFlagID(2052400200, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2052402099);
        WarpPlayer(61, 52, 40, 0, 2052402099, 0);
        //senessax
    } else if (EventFlag(1049302205)) {
        SetEventFlagID(1049308205, ON);
        SetEventFlagID(2054390850, OFF);
        WarpPlayer(61, 54, 39, 0, 2054392098, 0);
        //ghostflame (gravesite)
    } else if (EventFlag(1049302181)) {
        SetEventFlagID(1049308181, ON);
        SetEventFlagID(2045440800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2045442099);
        WarpPlayer(61, 45, 44, 10, 2045442099, 0);
        //ghostflame (cerulean)
    } else if (EventFlag(1049302188)) {
        SetEventFlagID(1049308188, ON);
        SetEventFlagID(2048380850, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2048382099);
        WarpPlayer(61, 48, 38, 0, 2048382099, 0);
        //ghostflame (scadu)
    } else if (EventFlag(1049302192)) {
        SetEventFlagID(1049308192, ON);
        SetEventFlagID(2049430800, OFF);
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2049432098);
        WarpPlayer(61, 49, 43, 0, 2049432098, 0);
        //ymir
    } else if (EventFlag(1049302207)) {
        SetEventFlagID(1049308207, ON);
        SetEventFlagID(2051450800, OFF);
        SetEventFlagID(25000800, ON); //set metyr as defeated to trigger ymir fight
        if (EventFlag(1049300052))
            SetPlayerRespawnPoint(2051452099);
        WarpPlayer(61, 51, 45, 0, 2051452099, 0);
        //crucible knight devonia
    } else if (EventFlag(1049302208)) {
        SetEventFlagID(1049308208, ON);
        SetEventFlagID(2045470200, OFF);
        WarpPlayer(61, 45, 47, 0, 2045470970, 0);
    }
    RestartEvent();
});
