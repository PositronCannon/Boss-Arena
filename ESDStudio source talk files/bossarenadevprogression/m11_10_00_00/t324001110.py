# -*- coding: utf-8 -*-
def t324001110_1():
    """State 0,1"""
    t324001110_x0()
    Quit()
    
def t324001110_x3():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #last boss selected
        AddTalkListData(1, 99998416, -1)
        #random menu
        AddTalkListDataIf(GetEventFlag(1049304330) == 1,2, 99998406, -1)
        #tier 1
        AddTalkListDataIf(GetEventFlag(1049300006) == 0,3, 99998430, -1)
        #tier 1 (all items)
        AddTalkListDataIf(GetEventFlag(1049300022) == 1,3, 99998470, -1)
        #tier 1 (defeated)
        AddTalkListDataIf(GetEventFlag(1049300006) == 1,3, 99998450, -1)
        #tier 2
        AddTalkListDataIf(GetEventFlag(1049304315) == 1 and GetEventFlag(1049300007) == 0,4, 99998431, -1)
        #tier 2 (all items)
        AddTalkListDataIf(GetEventFlag(1049304315) == 1 and GetEventFlag(1049300023) == 1,4, 99998471, -1)
        #tier 2 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304315) == 1 and GetEventFlag(1049300007) == 1,4, 99998451, -1)
        #tier 3
        AddTalkListDataIf(GetEventFlag(1049304316) == 1 and GetEventFlag(1049300008) == 0,5, 99998432, -1)
        #tier 3 (all items)
        AddTalkListDataIf(GetEventFlag(1049304316) == 1 and GetEventFlag(1049300024) == 1,5, 99998472, -1)
        #tier 3 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304316) == 1 and GetEventFlag(1049300008) == 1,5, 99998452, -1)
        #tier 4
        AddTalkListDataIf(GetEventFlag(1049304317) == 1 and GetEventFlag(1049300009) == 0,6, 99998433, -1)
        #tier 4 (all items)
        AddTalkListDataIf(GetEventFlag(1049304317) == 1 and GetEventFlag(1049300025) == 1,6, 99998473, -1)
        #tier 4 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304317) == 1 and GetEventFlag(1049300009) == 1,6, 99998453, -1)
        #tier 5
        AddTalkListDataIf(GetEventFlag(1049304318) == 1 and GetEventFlag(1049300010) == 0,7, 99998434, -1)
        #tier 5 (all items)
        AddTalkListDataIf(GetEventFlag(1049304318) == 1 and GetEventFlag(1049300026) == 1,7, 99998474, -1)
        #tier 5 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304318) == 1 and GetEventFlag(1049300010) == 1,7, 99998454, -1)
        #tier 6
        AddTalkListDataIf(GetEventFlag(1049304319) == 1 and GetEventFlag(1049300011) == 0,8, 99998435, -1)
        #tier 6 (all items)
        AddTalkListDataIf(GetEventFlag(1049304319) == 1 and GetEventFlag(1049300027) == 1,8, 99998475, -1)
        #tier 6 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304319) == 1 and GetEventFlag(1049300011) == 1,8, 99998455, -1)
        #tier 7
        AddTalkListDataIf(GetEventFlag(1049304320) == 1 and GetEventFlag(1049300012) == 0,9, 99998436, -1)
        #tier 7 (all items)
        AddTalkListDataIf(GetEventFlag(1049304320) == 1 and GetEventFlag(1049300028) == 1,9, 99998476, -1)
        #tier 7 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304320) == 1 and GetEventFlag(1049300012) == 1,9, 99998456, -1)
        #tier 8
        AddTalkListDataIf(GetEventFlag(1049304321) == 1 and GetEventFlag(1049300013) == 0,10, 99998437, -1)
        #tier 8 (all items)
        AddTalkListDataIf(GetEventFlag(1049304321) == 1 and GetEventFlag(1049300029) == 1,10, 99998477, -1)
        #tier 8 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304321) == 1 and GetEventFlag(1049300013) == 1,10, 99998457, -1)
        #tier 9
        AddTalkListDataIf(GetEventFlag(1049304322) == 1 and GetEventFlag(1049300014) == 0,11, 99998438, -1)
        #tier 9 (all items)
        AddTalkListDataIf(GetEventFlag(1049304322) == 1 and GetEventFlag(1049300030) == 1,11, 99998478, -1)
        #tier 9 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304322) == 1 and GetEventFlag(1049300014) == 1,11, 99998458, -1)
        #tier 10
        AddTalkListDataIf(GetEventFlag(1049304323) == 1 and GetEventFlag(1049300015) == 0,12, 99998439, -1)
        #tier 10 (all items)
        AddTalkListDataIf(GetEventFlag(1049304323) == 1 and GetEventFlag(1049300031) == 1,12, 99998479, -1)
        #tier 10 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304323) == 1 and GetEventFlag(1049300015) == 1,12, 99998459, -1)
        #tier 11
        AddTalkListDataIf(GetEventFlag(1049304324) == 1 and GetEventFlag(1049300016) == 0,13, 99998440, -1)
        #tier 11 (all items)
        AddTalkListDataIf(GetEventFlag(1049304324) == 1 and GetEventFlag(1049300032) == 1,13, 99998480, -1)
        #tier 11 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304324) == 1 and GetEventFlag(1049300016) == 1,13, 99998460, -1)
        #tier dlc 1
        AddTalkListDataIf(GetEventFlag(1049304325) == 1 and GetEventFlag(1049300017) == 0,14, 99998441, -1)
        #tier dlc 1 (all items)
        AddTalkListDataIf(GetEventFlag(1049304325) == 1 and GetEventFlag(1049300033) == 1,14, 99998481, -1)
        #tier dlc 1 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304325) == 1 and GetEventFlag(1049300017) == 1,14, 99998461, -1)
        #tier dlc 2
        AddTalkListDataIf(GetEventFlag(1049304326) == 1 and GetEventFlag(1049300018) == 0,15, 99998442, -1)
        #tier dlc 2 (all items)
        AddTalkListDataIf(GetEventFlag(1049304326) == 1 and GetEventFlag(1049300034) == 1,15, 99998482, -1)
        #tier dlc 2 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304326) == 1 and GetEventFlag(1049300018) == 1,15, 99998462, -1)
        #tier dlc 3
        AddTalkListDataIf(GetEventFlag(1049304327) == 1 and GetEventFlag(1049300019) == 0,16, 99998443, -1)
        #tier dlc 3 (all items)
        AddTalkListDataIf(GetEventFlag(1049304327) == 1 and GetEventFlag(1049300035) == 1,16, 99998483, -1)
        #tier dlc 3 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304327) == 1 and GetEventFlag(1049300019) == 1,16, 99998463, -1)
        #tier dlc 4
        AddTalkListDataIf(GetEventFlag(1049304328) == 1 and GetEventFlag(1049300020) == 0,17, 99998444, -1)
        #tier dlc 4 (all items)
        AddTalkListDataIf(GetEventFlag(1049304328) == 1 and GetEventFlag(1049300036) == 1,17, 99998484, -1)
        #tier dlc 4 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304328) == 1 and GetEventFlag(1049300020) == 1,17, 99998464, -1)
        #tier dlc 5
        AddTalkListDataIf(GetEventFlag(1049304329) == 1 and GetEventFlag(1049300021) == 0,18, 99998445, -1)
        #tier dlc 5 (all items)
        AddTalkListDataIf(GetEventFlag(1049304329) == 1 and GetEventFlag(1049300037) == 1,18, 99998485, -1)
        #tier dlc 5 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304329) == 1 and GetEventFlag(1049300021) == 1,18, 99998465, -1)
        # respawn location options
        AddTalkListData(19, 99998417, -1)
        # reset first encounter flags
        AddTalkListData(20, 99999037, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302260, 1)
        elif GetTalkListEntryResult() == 2:
            assert t324001110_18()
        elif GetTalkListEntryResult() == 3:
            assert t324001110_2()
        elif GetTalkListEntryResult() == 4:
            assert t324001110_3()
        elif GetTalkListEntryResult() == 5:
            assert t324001110_4()
        elif GetTalkListEntryResult() == 6:
            assert t324001110_5()
        elif GetTalkListEntryResult() == 7:
            assert t324001110_6()
        elif GetTalkListEntryResult() == 8:
            assert t324001110_7()
        elif GetTalkListEntryResult() == 9:
            assert t324001110_8()
        elif GetTalkListEntryResult() == 10:
            assert t324001110_9()
        elif GetTalkListEntryResult() == 11:
            assert t324001110_10()
        elif GetTalkListEntryResult() == 12:
            assert t324001110_11()
        elif GetTalkListEntryResult() == 13:
            assert t324001110_12()
        elif GetTalkListEntryResult() == 14:
            assert t324001110_13()
        elif GetTalkListEntryResult() == 15:
            assert t324001110_14()
        elif GetTalkListEntryResult() == 16:
            assert t324001110_15()
        elif GetTalkListEntryResult() == 17:
            assert t324001110_16()
        elif GetTalkListEntryResult() == 18:
            assert t324001110_17()
        #respawn location options
        elif GetTalkListEntryResult() == 19:
            assert t324001110_19()
        # reset first encounter flags
        elif GetTalkListEntryResult() == 20:
            SetEventFlag(1049302243, 1)
            return 0
        else:
            return 0    
            
def t324001110_19():
    while True:
        c1_110()
        ClearTalkListData()
        # respawn before boss
        AddTalkListDataIf (GetEventFlag(1049300052) == 0,1, 99998418, -1)
        # respawn before boss (currently active)
        AddTalkListDataIf (GetEventFlag(1049300052) == 1,1, 99998420, -1)
        # respawn at roundtable
        AddTalkListDataIf (GetEventFlag(1049300053) == 0,2, 99998419, -1)
        # respawn at roundtable (currently active)
        AddTalkListDataIf (GetEventFlag(1049300053) == 1,2, 99998421, -1)
        # note
        AddTalkListData(3, 99998422, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049300052, 1)
            SetEventFlag(1049300053, 0)
            pass
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049300053, 1)
            SetEventFlag(1049300052, 0)
            pass
        elif GetTalkListEntryResult() == 3:
            pass
        else:
            return 0

def t324001110_18():
    while True: 
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #random all bosses
        AddTalkListData(1, 99998407, -1)
        #random remembrance
        AddTalkListData(2, 99998408, -1)
        #random great enemies
        AddTalkListData(3, 99998409, -1)
        #random minor bosses
        AddTalkListData(4, 99998410, -1)
        #random dlc main
        AddTalkListData(5, 99998411, -1)
        #random dlc minor
        AddTalkListData(6, 99998412, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302245, 1)
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049302246, 1)
        elif GetTalkListEntryResult() == 3:
            SetEventFlag(1049302247, 1)
        elif GetTalkListEntryResult() == 4:
            SetEventFlag(1049302248, 1)
        elif GetTalkListEntryResult() == 5:
            SetEventFlag(1049302249, 1)
        elif GetTalkListEntryResult() == 6:
            SetEventFlag(1049302250, 1)
        else:
            return 0

#tier 1
def t324001110_2():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #soldier of godrick
        AddTalkListDataIf(GetEventFlag(1049304100) == 0,1, 15000437, -1)
        #soldier of godrick (all items)
        AddTalkListDataIf(GetEventFlag(1049300100) == 1,1, 16000001, -1)
        #soldier of godrick (defeated)
        AddTalkListDataIf(GetEventFlag(1049304100) == 1,1, 16000000, -1)
        #beastman groveside
        AddTalkListDataIf(GetEventFlag(1049304101) == 0,2, 15000438, -1)
        #beastman groveside (all items)
        AddTalkListDataIf(GetEventFlag(1049300101) == 1,2, 16000003, -1)
        #beastman groveside (defeated)
        AddTalkListDataIf(GetEventFlag(1049304101) == 1,2, 16000002, -1)
        #black knife assassin deathtouched
        AddTalkListDataIf(GetEventFlag(1049304102) == 0,3, 15000523, -1)
        #black knife assassin deathtouched (all items)
        AddTalkListDataIf(GetEventFlag(1049300102) == 1,3, 16000005, -1)
        #black knife assassin deathtouched (defeated)
        AddTalkListDataIf(GetEventFlag(1049304102) == 1,3, 16000004, -1)
        #erdtree burial watchdog stormfoot
        AddTalkListDataIf(GetEventFlag(1049304103) == 0,4, 15000426, -1)
        #erdtree burial watchdog stormfoot (all items)
        AddTalkListDataIf(GetEventFlag(1049300103) == 1,4, 16000007, -1)
        #erdtree burial watchdog stormfoot (defeated)
        AddTalkListDataIf(GetEventFlag(1049304103) == 1,4, 16000006, -1)
        #grave warden duelist murkwater
        AddTalkListDataIf(GetEventFlag(1049304104) == 0,5, 15000421, -1)
        #grave warden duelist murkwater (all items)
        AddTalkListDataIf(GetEventFlag(1049300104) == 1,5, 16000009, -1)
        #grave warden duelist murkwater (defeated)
        AddTalkListDataIf(GetEventFlag(1049304104) == 1,5, 16000008, -1)
        #guardian golem
        AddTalkListDataIf(GetEventFlag(1049304105) == 0,6, 15000444, -1)
        #guardian golem (all items)
        AddTalkListDataIf(GetEventFlag(1049300105) == 1,6, 16000011, -1)
        #guardian golem (defeated)
        AddTalkListDataIf(GetEventFlag(1049304105) == 1,6, 16000010, -1)
        #mad pumpkin
        AddTalkListDataIf(GetEventFlag(1049304106) == 0,7, 15000515, -1)
        #mad pumpkin (all items)
        AddTalkListDataIf(GetEventFlag(1049300106) == 1,7, 16000013, -1)
        #mad pumpkin (defeated)
        AddTalkListDataIf(GetEventFlag(1049304106) == 1,7, 16000012, -1)
        #patches
        AddTalkListDataIf(GetEventFlag(1049304107) == 0,8, 15000443, -1)
        #patches (all items)
        AddTalkListDataIf(GetEventFlag(1049300107) == 1,8, 16000015, -1)
        #patches (defeated)
        AddTalkListDataIf(GetEventFlag(1049304107) == 1,8, 16000014, -1)
        #stonedigger limgrave
        AddTalkListDataIf(GetEventFlag(1049304108) == 0,9, 99993010, -1)
        #stonedigger limgrave (all items)
        AddTalkListDataIf(GetEventFlag(1049300108) == 1,9, 16000017, -1)
        #stonedigger limgrave (defeated)
        AddTalkListDataIf(GetEventFlag(1049304108) == 1,9, 16000016, -1)
        #demi-human chiefs
        AddTalkListDataIf(GetEventFlag(1049304109) == 0,10, 15000439, -1)
        #demi-human chiefs (all items)
        AddTalkListDataIf(GetEventFlag(1049300109) == 1,10, 16000019, -1)
        #demi-human chiefs (defeated)
        AddTalkListDataIf(GetEventFlag(1049304109) == 1,10, 16000018, -1)
        #cemetery shade tombsward
        AddTalkListDataIf(GetEventFlag(1049304110) == 0,11, 99992002, -1)
        #cemetery shade tombsward (all items)
        AddTalkListDataIf(GetEventFlag(1049300110) == 1,11, 16000021, -1)
        #cemetery shade tombsward (defeated)
        AddTalkListDataIf(GetEventFlag(1049304110) == 1,11, 16000020, -1)
        #erdtree burial watchdog impaler's
        AddTalkListDataIf(GetEventFlag(1049304111) == 0,12, 15000427, -1)
        #erdtree burial watchdog impaler's (all items)
        AddTalkListDataIf(GetEventFlag(1049300111) == 1,12, 16000023, -1)
        #erdtree burial watchdog impaler's (defeated)
        AddTalkListDataIf(GetEventFlag(1049304111) == 1,12, 16000022, -1)
        #miranda
        AddTalkListDataIf(GetEventFlag(1049304112) == 0,13, 15000452, -1)
        #miranda (all items)
        AddTalkListDataIf(GetEventFlag(1049300112) == 1,13, 16000025, -1)
        #miranda (defeated)
        AddTalkListDataIf(GetEventFlag(1049304112) == 1,13, 16000024, -1)
        #runebear
        AddTalkListDataIf(GetEventFlag(1049304113) == 0,14, 15000445, -1)
        #runebear (all items)
        AddTalkListDataIf(GetEventFlag(1049300113) == 1,14, 16000027, -1)
        #runebear (defeated)
        AddTalkListDataIf(GetEventFlag(1049304113) == 1,14, 16000026, -1)
        #scaly misbegotten
        AddTalkListDataIf(GetEventFlag(1049304114) == 0,15, 15000457, -1)
        #scaly misbegotten (all items)
        AddTalkListDataIf(GetEventFlag(1049300114) == 1,15, 16000029, -1)
        #scaly misbegotten (defeated)
        AddTalkListDataIf(GetEventFlag(1049304114) == 1,15, 16000028, -1)    
        #leonine
        AddTalkListDataIf(GetEventFlag(1049304115) == 0,16, 16000500, -1)
        #leonine (all items)
        AddTalkListDataIf(GetEventFlag(1049300115) == 1,16, 16000031, -1)
        #leonine (defeated)
        AddTalkListDataIf(GetEventFlag(1049304115) == 1,16, 16000030, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #soldier of godrick
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304100) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302131, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304100) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #beastman groveside
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304101) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302132, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304101) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #black knife assassin deathtouched
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304102) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302107, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304102) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree burial watchdog stormfoot
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304103) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302108, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304103) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #grave warden duelist murkwater
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304104) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302109, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304104) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #guardian golem
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304105) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302134, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304105) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #mad pumpkin
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304106) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302153, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304106) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #patches
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304107) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302135, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304107) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #stonedigger limgrave
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304108) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302154, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304108) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #demi-human chiefs
        elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304109) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302133, 1)
        elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304109) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #cemetery shade tombsward
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304110) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302110, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304110) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree burial watchdog impaler's
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304111) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302111, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304111) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #miranda
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304112) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302136, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304112) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #runebear
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304113) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302137, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304113) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #scaly misbegotten
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304114) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302155, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304114) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #leonine
        elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304115) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302017, 1)
        elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304115) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0
#tier 2
def t324001110_3():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #darriwil
        AddTalkListDataIf(GetEventFlag(1049304117) == 0,1, 15000382, -1)
        #darriwil (all items)
        AddTalkListDataIf(GetEventFlag(1049300117) == 1,1, 16000035, -1)
        #darriwil (defeated)
        AddTalkListDataIf(GetEventFlag(1049304117) == 1,1, 16000034, -1)
        #deathbird limgrave
        AddTalkListDataIf(GetEventFlag(1049304118) == 0,3, 15000529, -1)
        #deathbird limgrave (all items)
        AddTalkListDataIf(GetEventFlag(1049300118) == 1,3, 16000037, -1)
        #deathbird limgrave (defeated)
        AddTalkListDataIf(GetEventFlag(1049304118) == 1,3, 16000036, -1)
        #night's cavalry limgrave
        AddTalkListDataIf(GetEventFlag(1049304119) == 0,4, 15000537, -1)
        #night's cavalry limgrave (all items)
        AddTalkListDataIf(GetEventFlag(1049300119) == 1,4, 16000039, -1)
        #night's cavalry limgrave (defeated)
        AddTalkListDataIf(GetEventFlag(1049304119) == 1,4, 16000038, -1)
        #tibia limgrave
        AddTalkListDataIf(GetEventFlag(1049304120) == 0,5, 13040157, -1)
        #tibia limgrave (all items)
        AddTalkListDataIf(GetEventFlag(1049300120) == 1,5, 16000041, -1)
        #tibia limgrave (defeated)
        AddTalkListDataIf(GetEventFlag(1049304120) == 1,5, 16000040, -1)
        #tree sentinel
        AddTalkListDataIf(GetEventFlag(1049304121) == 0,6, 13040153, -1)
        #tree sentinel (all items)
        AddTalkListDataIf(GetEventFlag(1049300121) == 1,6, 16000043, -1)
        #tree sentinel (defeated)
        AddTalkListDataIf(GetEventFlag(1049304121) == 1,6, 16000042, -1)
        #ancient hero of zamor gaol
        AddTalkListDataIf(GetEventFlag(1049304122) == 0,7, 15000384, -1)
        #ancient hero of zamor gaol (all items)
        AddTalkListDataIf(GetEventFlag(1049300122) == 1,7, 16000045, -1)
        #ancient hero of zamor gaol (defeated)
        AddTalkListDataIf(GetEventFlag(1049304122) == 1,7, 16000044, -1)
        #bell bearing limgrave
        AddTalkListDataIf(GetEventFlag(1049304116) == 0,2, 13040158, -1)
        #bell bearing limgrave (all items)
        AddTalkListDataIf(GetEventFlag(1049300116) == 1,2, 16000033, -1)
        #bell bearing limgrave (defeated)
        AddTalkListDataIf(GetEventFlag(1049304116) == 1,2, 16000032, -1)
        #deathbird weeping
        AddTalkListDataIf(GetEventFlag(1049304123) == 0,8, 13040152, -1)
        #deathbird weeping (all items)
        AddTalkListDataIf(GetEventFlag(1049300123) == 1,8, 16000047, -1)
        #deathbird weeping (defeated)
        AddTalkListDataIf(GetEventFlag(1049304123) == 1,8, 16000046, -1)
        #erdtree avatar weeping
        AddTalkListDataIf(GetEventFlag(1049304124) == 0,9, 15000373, -1)
        #erdtree avatar weeping (all items)
        AddTalkListDataIf(GetEventFlag(1049300124) == 1,9, 16000049, -1)
        #erdtree avatar weeping (defeated)
        AddTalkListDataIf(GetEventFlag(1049304124) == 1,9, 16000048, -1)
        #night's cavalry weeping
        AddTalkListDataIf(GetEventFlag(1049304125) == 0,10, 15000538, -1)
        #night's cavalry weeping (all items)
        AddTalkListDataIf(GetEventFlag(1049300125) == 1,10, 16000051, -1)
        #night's cavalry weeping (defeated)
        AddTalkListDataIf(GetEventFlag(1049304125) == 1,10, 16000050, -1)
        #margit
        AddTalkListDataIf(GetEventFlag(1049304126) == 0,11, 16000501, -1)
        #margit (all items)
        AddTalkListDataIf(GetEventFlag(1049300126) == 1,11, 16000053, -1)
        #margit (defeated)
        AddTalkListDataIf(GetEventFlag(1049304126) == 1,11, 16000052, -1)
        #godrick
        AddTalkListDataIf(GetEventFlag(1049304127) == 0,12, 16000502, -1)
        #godrick (all items)
        AddTalkListDataIf(GetEventFlag(1049300127) == 1,12, 16000055, -1)
        #godrick (defeated)
        AddTalkListDataIf(GetEventFlag(1049304127) == 1,12, 16000054, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #bloodhound knight darriwil
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304117) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302097, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304117) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #deathbird limgrave
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304118) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302051, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304118) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry limgrave
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304119) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302052, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304119) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #tibia limgrave
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304120) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302053, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304120) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #tree sentinel
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304121) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302054, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304121) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #ancient hero of zamor gaol
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304122) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302098, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304122) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #bell bearing limgrave
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304116) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302050, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304116) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #deathbird weeping
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304123) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302055, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304123) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree avatar weeping
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304124) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302056, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304124) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry weeping
        elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304125) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302057, 1)
        elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304125) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #margit
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304126) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302018, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304126) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godrick
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304127) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302000, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304127) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0
#tier 3
def t324001110_4():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #crucible knight gaol
        AddTalkListDataIf(GetEventFlag(1049304128) == 0,1, 15000383, -1)
        #crucible knight gaol (all items)
        AddTalkListDataIf(GetEventFlag(1049300128) == 1,1, 16000057, -1)
        #crucible knight gaol (defeated)
        AddTalkListDataIf(GetEventFlag(1049304128) == 1,1, 16000056, -1)
        #flying dragon agheel
        AddTalkListDataIf(GetEventFlag(1049304130) == 0,2, 13040134, -1)
        #flying dragon agheel (all items)
        AddTalkListDataIf(GetEventFlag(1049300130) == 1,2, 16000061, -1)
        #flying dragon agheel (defeated)
        AddTalkListDataIf(GetEventFlag(1049304130) == 1,2, 16000060, -1)
        #ancestor spirit
        AddTalkListDataIf(GetEventFlag(1049304131) == 0,3, 13040128, -1)
        #ancestor spirit (all items)
        AddTalkListDataIf(GetEventFlag(1049300131) == 1,3, 16000063, -1)
        #ancestor spirit (defeated)
        AddTalkListDataIf(GetEventFlag(1049304131) == 1,3, 16000062, -1)
        #black knife assassin black knife
        AddTalkListDataIf(GetEventFlag(1049304132) == 0,4, 15000423, -1)
        #black knife assassin black knife (all items)
        AddTalkListDataIf(GetEventFlag(1049300132) == 1,4, 16000065, -1)
        #black knife assassin black knife (defeated)
        AddTalkListDataIf(GetEventFlag(1049304132) == 1,4, 16000064, -1)
        #bloodhound knight
        AddTalkListDataIf(GetEventFlag(1049304133) == 0,5, 15000447, -1)
        #bloodhound knight (all items)
        AddTalkListDataIf(GetEventFlag(1049300133) == 1,5, 16000067, -1)
        #bloodhound knight (defeated)
        AddTalkListDataIf(GetEventFlag(1049304133) == 1,5, 16000066, -1)
        #cemetery shade black knife
        AddTalkListDataIf(GetEventFlag(1049304134) == 0,6, 99992003, -1)
        #cemetery shade black knife (all items)
        AddTalkListDataIf(GetEventFlag(1049300134) == 1,6, 16000069, -1)
        #cemetery shade black knife (defeated)
        AddTalkListDataIf(GetEventFlag(1049304134) == 1,6, 16000068, -1)
        #cleanrot
        AddTalkListDataIf(GetEventFlag(1049304135) == 0,7, 15000446, -1)
        #cleanrot (all items)
        AddTalkListDataIf(GetEventFlag(1049300135) == 1,7, 16000071, -1)
        #cleanrot (defeated)
        AddTalkListDataIf(GetEventFlag(1049304135) == 1,7, 16000070, -1)
        #crystalian lucaria
        AddTalkListDataIf(GetEventFlag(1049304136) == 0,8, 15000458, -1)
        #crystalian lucaria (all items)
        AddTalkListDataIf(GetEventFlag(1049300136) == 1,8, 16000073, -1)
        #crystalian lucaria (defeated)
        AddTalkListDataIf(GetEventFlag(1049304136) == 1,8, 16000072, -1)
        #erdtree burial watchdog cliffbottom
        AddTalkListDataIf(GetEventFlag(1049304138) == 0,9, 15000428, -1)
        #erdtree burial watchdog cliffbottom (all items)
        AddTalkListDataIf(GetEventFlag(1049300138) == 1,9, 16000075, -1)
        #erdtree burial watchdog cliffbottom (defeated)
        AddTalkListDataIf(GetEventFlag(1049304138) == 1,9, 16000074, -1)
        #grafted scion
        AddTalkListDataIf(GetEventFlag(1049304137) == 0,10, 13040156, -1)
        #grafted scion (all items)
        AddTalkListDataIf(GetEventFlag(1049300137) == 1,10, 16000077, -1)
        #grafted scion (defeated)
        AddTalkListDataIf(GetEventFlag(1049304137) == 1,10, 16000076, -1)
        #omenkiller
        AddTalkListDataIf(GetEventFlag(1049304167) == 0,11, 15000375, -1)
        #omenkiller (all items)
        AddTalkListDataIf(GetEventFlag(1049300167) == 1,11, 16000135, -1)
        #omenkiller (defeated)
        AddTalkListDataIf(GetEventFlag(1049304167) == 1,11, 16000134, -1)
        #royal revenant
        AddTalkListDataIf(GetEventFlag(1049304139) == 0,12, 15000514, -1)
        #royal revenant (all items)
        AddTalkListDataIf(GetEventFlag(1049300139) == 1,12, 16000079, -1)
        #royal revenant (defeated)
        AddTalkListDataIf(GetEventFlag(1049304139) == 1,12, 16000078, -1)
        #spiritcaller snail road's end
        AddTalkListDataIf(GetEventFlag(1049304140) == 0,13, 15000431, -1)
        #spiritcaller snail road's end (all items)
        AddTalkListDataIf(GetEventFlag(1049300140) == 1,13, 16000081, -1)
        #spiritcaller snail road's end (defeated)
        AddTalkListDataIf(GetEventFlag(1049304140) == 1,13, 16000080, -1)
        #ulcerated tree spirit fringefolk
        AddTalkListDataIf(GetEventFlag(1049304141) == 0,14, 15000519, -1)
        #ulcerated tree spirit fringefolk (all items)
        AddTalkListDataIf(GetEventFlag(1049300141) == 1,14, 16000083, -1)
        #ulcerated tree spirit fringefolk (defeated)
        AddTalkListDataIf(GetEventFlag(1049304141) == 1,14, 16000082, -1)
        #dragonkin nokstella
        AddTalkListDataIf(GetEventFlag(1049304129) == 0,15, 16000503, -1)
        #dragonkin nokstella (all items)
        AddTalkListDataIf(GetEventFlag(1049300129) == 1,15, 16000059, -1)
        #dragonkin nokstella (defeated)
        AddTalkListDataIf(GetEventFlag(1049304129) == 1,15, 16000058, -1)
        #red wolf of radagon
        AddTalkListDataIf(GetEventFlag(1049304142) == 0,16, 16000504, -1)
        #red wolf of radagon (all items)
        AddTalkListDataIf(GetEventFlag(1049300142) == 1,16, 16000085, -1)
        #red wolf of radagon (defeated)
        AddTalkListDataIf(GetEventFlag(1049304142) == 1,16, 16000084, -1)
        #royal knight loretta
        AddTalkListDataIf(GetEventFlag(1049304143) == 0,17, 16000505, -1)
        #royal knight loretta (all items)
        AddTalkListDataIf(GetEventFlag(1049300143) == 1,17, 16000087, -1)
        #royal knight loretta (defeated)
        AddTalkListDataIf(GetEventFlag(1049304143) == 1,17, 16000086, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #crucible knight gaol
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304128) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302099, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304128) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #flying dragon agheel
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304130) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302020, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304130) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #ancestor spirit
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304131) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302021, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304131) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #black knife assassin black knife
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304132) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302112, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304132) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #bloodhound knight
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304133) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302138, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304133) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #cemetery shade black knife
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304134) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302113, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304134) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #cleanrot
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304135) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302139, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304135) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #crystalian lucaria
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304136) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302156, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304136) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree burial watchdog cliffbottom
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304138) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302114, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304138) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #grafted scion
        elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304137) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302058, 1)
        elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304137) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #omenkiller
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304167) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302066, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304167) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #royal revenant
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304139) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302157, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304139) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #spiritcaller snail road's end
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304140) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302115, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304140) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #ulcerated tree spirit fringefolk
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304141) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302116, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304141) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #dragonkin nokstella
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304129) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302019, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304129) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #red wolf of radagon
        elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304142) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302022, 1)
        elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304142) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #royal knight loretta
        elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304143) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302023, 1)
        elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304143) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0
            
#tier 4
def t324001110_5():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #adan
        AddTalkListDataIf(GetEventFlag(1049304144) == 0,1, 15000386, -1)
        #adan (all items)
        AddTalkListDataIf(GetEventFlag(1049300144) == 1,1, 16000089, -1)
        #adan (defeated)
        AddTalkListDataIf(GetEventFlag(1049304144) == 1,1, 16000088, -1)
        #cemetery shade caelid
        AddTalkListDataIf(GetEventFlag(1049304145) == 0,2, 15000424, -1)
        #cemetery shade caelid (all items)
        AddTalkListDataIf(GetEventFlag(1049300145) == 1,2, 16000091, -1)
        #cemetery shade caelid (defeated)
        AddTalkListDataIf(GetEventFlag(1049304145) == 1,2, 16000090, -1)
        #cleanrot x2
        AddTalkListDataIf(GetEventFlag(1049304146) == 0,3, 99992001, -1)
        #cleanrot x2 (all items)
        AddTalkListDataIf(GetEventFlag(1049300146) == 1,3, 16000093, -1)
        #cleanrot x2 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304146) == 1,3, 16000092, -1)
        #crystalian x2 academy 
        AddTalkListDataIf(GetEventFlag(1049304147) == 0,4, 15000448, -1)
        #crystalian x2 academy (all items)
        AddTalkListDataIf(GetEventFlag(1049300147) == 1,4, 16000111, -1)
        #crystalian x2 academy (defeated)
        AddTalkListDataIf(GetEventFlag(1049304147) == 1,4, 16000110, -1)
        #deathbird liurnia
        AddTalkListDataIf(GetEventFlag(1049304160) == 0,13, 15000531, -1)
        #deathbird liurnia (all items)
        AddTalkListDataIf(GetEventFlag(1049300160) == 1,13, 16000121, -1)
        #deathbird liurnia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304160) == 1,13, 16000120, -1)
        #demi-human queen gilika
        AddTalkListDataIf(GetEventFlag(1049304162) == 0,14, 15000517, -1)
        #demi-human queen gilika (all items)
        AddTalkListDataIf(GetEventFlag(1049300162) == 1,14, 16000125, -1)
        #demi-human queen gilika (defeated)
        AddTalkListDataIf(GetEventFlag(1049304162) == 1,14, 16000124, -1)
        #erdtree burial watchdog x2
        AddTalkListDataIf(GetEventFlag(1049304148) == 0,5, 15000429, -1)
        #erdtree burial watchdog x2 (all items)
        AddTalkListDataIf(GetEventFlag(1049300148) == 1,5, 16000095, -1)
        #erdtree burial watchdog x2 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304148) == 1,5, 16000094, -1)
        #frenzied duelist
        AddTalkListDataIf(GetEventFlag(1049304150) == 0,7, 15000449, -1)
        #frenzied duelist (all items)
        AddTalkListDataIf(GetEventFlag(1049300150) == 1,7, 16000099, -1)
        #frenzied duelist (defeated)
        AddTalkListDataIf(GetEventFlag(1049304150) == 1,7, 16000098, -1)
        #mad pumpkin x2
        AddTalkListDataIf(GetEventFlag(1049304151) == 0,8, 99992009, -1)
        #mad pumpkin x2 (all items)
        AddTalkListDataIf(GetEventFlag(1049300151) == 1,8, 16000101, -1)
        #mad pumpkin x2 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304151) == 1,8, 16000100, -1)
        #night's cavalry liurnia east
        AddTalkListDataIf(GetEventFlag(1049304165) == 0,15, 15000539, -1)
        #night's cavalry liurnia east (all items)
        AddTalkListDataIf(GetEventFlag(1049300165) == 1,15, 16000131, -1)
        #night's cavalry liurnia east (defeated)
        AddTalkListDataIf(GetEventFlag(1049304165) == 1,15, 16000130, -1)
        #nox duo
        AddTalkListDataIf(GetEventFlag(1049304153) == 0,10, 15000381, -1)
        #nox duo (all items)
        AddTalkListDataIf(GetEventFlag(1049300153) == 1,10, 16000105, -1)
        #nox duo (defeated)
        AddTalkListDataIf(GetEventFlag(1049304153) == 1,10, 16000104, -1)
        #magma wyrm makar
        AddTalkListDataIf(GetEventFlag(1049304154) == 0,11, 16000506, -1)
        #magma wyrm makar (all items)
        AddTalkListDataIf(GetEventFlag(1049300154) == 1,11, 16000107, -1)
        #magma wyrm makar (defeated)
        AddTalkListDataIf(GetEventFlag(1049304154) == 1,11, 16000106, -1)
        #rennala
        AddTalkListDataIf(GetEventFlag(1049304155) == 0,12, 16000507, -1)
        #rennala (all items)
        AddTalkListDataIf(GetEventFlag(1049300155) == 1,12, 16000109, -1)
        #rennala (defeated)
        AddTalkListDataIf(GetEventFlag(1049304155) == 1,12, 16000108, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #adan
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304144) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302100, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304144) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #cemetery shade caelid
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304145) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302117, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304145) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #cleanrot x2
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304146) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302140, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304146) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #crystalian x2 academy
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304147) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302141, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304147) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #deathbird liurnia
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304160) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302061, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304160) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #demi-human queen gilika
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304162) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302161, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304162) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree burial watchdog x2
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304148) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302118, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304148) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #frenzied duelist
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304150) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302142, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304150) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #mad pumpkin x2
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304151) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302159, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304151) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry liurnia east
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304165) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302070, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304165) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #nox duo
        elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304153) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302059, 1)
        elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304153) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #magma wyrm makar
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304154) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302024, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304154) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #rennala
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304155) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302001, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304155) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0
#tier 5
def t324001110_6():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #abductor virgins
        AddTalkListDataIf(GetEventFlag(1049304156) == 0,1, 15000454, -1)
        #abductor virgins (all items)
        AddTalkListDataIf(GetEventFlag(1049300156) == 1,1, 16000113, -1)
        #abductor virgins (defeated)
        AddTalkListDataIf(GetEventFlag(1049304156) == 1,1, 16000112, -1)
        #ancient hero of zamor sainted hero
        AddTalkListDataIf(GetEventFlag(1049304157) == 0,2, 15000521, -1)
        #ancient hero of zamor sainted hero (all items)
        AddTalkListDataIf(GetEventFlag(1049300157) == 1,2, 16000115, -1)
        #ancient hero of zamor sainted hero (defeated)
        AddTalkListDataIf(GetEventFlag(1049304157) == 1,2, 16000114, -1)
        #bell bearing liurnia
        AddTalkListDataIf(GetEventFlag(1049304158) == 0,3, 15000708, -1)
        #bell bearing liurnia (all items)
        AddTalkListDataIf(GetEventFlag(1049300158) == 1,3, 16000117, -1)
        #bell bearing liurnia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304158) == 1,3, 16000116, -1)
        #bols
        AddTalkListDataIf(GetEventFlag(1049304159) == 0,4, 15000387, -1)
        #bols (all items)
        AddTalkListDataIf(GetEventFlag(1049300159) == 1,4, 16000119, -1)
        #bols (defeated)
        AddTalkListDataIf(GetEventFlag(1049304159) == 1,4, 16000118, -1)
        #deathrite liurnia
        AddTalkListDataIf(GetEventFlag(1049304161) == 0,6, 15000533, -1)
        #deathrite liurnia (all items)
        AddTalkListDataIf(GetEventFlag(1049300161) == 1,6, 16000123, -1)
        #deathrite liurnia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304161) == 1,6, 16000122, -1)
        #demi-human queen margot
        AddTalkListDataIf(GetEventFlag(1049304178) == 0,19, 15000441, -1)
        #demi-human queen margot (all items)
        AddTalkListDataIf(GetEventFlag(1049300178) == 1,19, 16000157, -1)
        #demi-human queen margot (defeated)
        AddTalkListDataIf(GetEventFlag(1049304178) == 1,19, 16000156, -1)
        #erdtree avatar liurnia east
        AddTalkListDataIf(GetEventFlag(1049304163) == 0,8, 15000525, -1)
        #erdtree avatar liurnia east (all items)
        AddTalkListDataIf(GetEventFlag(1049300163) == 1,8, 16000127, -1)
        #erdtree avatar liurnia east (defeated)
        AddTalkListDataIf(GetEventFlag(1049304163) == 1,8, 16000126, -1)
        #erdtree avatar liurnia west
        AddTalkListDataIf(GetEventFlag(1049304164) == 0,9, 15000524, -1)
        #erdtree avatar liurnia west (all items)
        AddTalkListDataIf(GetEventFlag(1049300164) == 1,9, 16000129, -1)
        #erdtree avatar liurnia west (defeated)
        AddTalkListDataIf(GetEventFlag(1049304164) == 1,9, 16000128, -1)
        #fallingstar sellia
        AddTalkListDataIf(GetEventFlag(1049304149) == 0,20, 15000511, -1)
        #fallingstar sellia (all items)
        AddTalkListDataIf(GetEventFlag(1049300149) == 1,20, 16000097, -1)
        #fallingstar sellia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304149) == 1,20, 16000096, -1)
        #kindred of rot seethewater
        AddTalkListDataIf(GetEventFlag(1049304182) == 0,21, 15000451, -1)
        #kindred of rot seethewater (all items)
        AddTalkListDataIf(GetEventFlag(1049300182) == 1,21, 16000165, -1)
        #kindred of rot seethewater (defeated)
        AddTalkListDataIf(GetEventFlag(1049304182) == 1,21, 16000164, -1)
        #magma wyrm gael
        AddTalkListDataIf(GetEventFlag(1049304152) == 0,22, 15000459, -1)
        #magma wyrm gael (all items)
        AddTalkListDataIf(GetEventFlag(1049300152) == 1,22, 16000103, -1)
        #magma wyrm gael (defeated)
        AddTalkListDataIf(GetEventFlag(1049304152) == 1,22, 16000102, -1)
        #night's cavalry liurnia north
        AddTalkListDataIf(GetEventFlag(1049304166) == 0,11, 15000701, -1)
        #night's cavalry liurnia north (all items)
        AddTalkListDataIf(GetEventFlag(1049300166) == 1,11, 16000133, -1)
        #night's cavalry liurnia north (defeated)
        AddTalkListDataIf(GetEventFlag(1049304166) == 1,11, 16000132, -1)
        #onyx lord gaol
        AddTalkListDataIf(GetEventFlag(1049304168) == 0,13, 15000388, -1)
        #onyx lord gaol (all items)
        AddTalkListDataIf(GetEventFlag(1049300168) == 1,13, 16000137, -1)
        #onyx lord gaol (defeated)
        AddTalkListDataIf(GetEventFlag(1049304168) == 1,13, 16000136, -1)
        #perfumer tricia
        AddTalkListDataIf(GetEventFlag(1049304169) == 0,14, 15000436, -1)
        #perfumer tricia (all items)
        AddTalkListDataIf(GetEventFlag(1049300169) == 1,14, 16000139, -1)
        #perfumer tricia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304169) == 1,14, 16000138, -1)
        #red wolf of the champion
        AddTalkListDataIf(GetEventFlag(1049304186) == 0,23, 15000435, -1)
        #red wolf of the champion (all items)
        AddTalkListDataIf(GetEventFlag(1049300186) == 1,23, 16000173, -1)
        #red wolf of the champion (defeated)
        AddTalkListDataIf(GetEventFlag(1049304186) == 1,23, 16000172, -1)
        #sanguine noble
        AddTalkListDataIf(GetEventFlag(1049304170) == 0,15, 15000516, -1)
        #sanguine noble (all items)
        AddTalkListDataIf(GetEventFlag(1049300170) == 1,15, 16000141, -1)
        #sanguine noble (defeated)
        AddTalkListDataIf(GetEventFlag(1049304170) == 1,15, 16000140, -1)
        #stonedigger altus
        AddTalkListDataIf(GetEventFlag(1049304171) == 0,16, 99992010, -1)
        #stonedigger altus (all items)
        AddTalkListDataIf(GetEventFlag(1049300171) == 1,16, 16000143, -1)
        #stonedigger altus (defeated)
        AddTalkListDataIf(GetEventFlag(1049304171) == 1,16, 16000142, -1)
        #tibia liurnia
        AddTalkListDataIf(GetEventFlag(1049304172) == 0,17, 15000722, -1)
        #tibia liurnia (all items)
        AddTalkListDataIf(GetEventFlag(1049300172) == 1,17, 16000145, -1)
        #tibia liurnia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304172) == 1,17, 16000144, -1)
        #elemer
        AddTalkListDataIf(GetEventFlag(1049304187) == 0,24, 16000508, -1)
        #elemer (all items)
        AddTalkListDataIf(GetEventFlag(1049300187) == 1,24, 16000175, -1)
        #elemer (defeated)
        AddTalkListDataIf(GetEventFlag(1049304187) == 1,24, 16000174, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #abductor virgins
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304156) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302143, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304156) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #ancient hero of zamor sainted hero
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304157) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302119, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304157) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #bell bearing liurnia
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304158) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302060, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304158) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #bols
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304159) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302101, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304159) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #deathrite liurnia
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304161) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302062, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304161) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #demi-human queen margot
        elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304178) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302144, 1)
        elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304178) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree avatar liurnia east
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304163) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302064, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304163) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree avatar liurnia west
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304164) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302063, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304164) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #fallingstar sellia
        elif GetTalkListEntryResult() == 20 and (GetEventFlag(1049304149) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302158, 1)
        elif GetTalkListEntryResult() == 20 and GetEventFlag(1049304149) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #kindred of rot seethewater
        elif GetTalkListEntryResult() == 21 and (GetEventFlag(1049304182) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302145, 1)
        elif GetTalkListEntryResult() == 21 and GetEventFlag(1049304182) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #magma wyrm gael
        elif GetTalkListEntryResult() == 22 and (GetEventFlag(1049304152) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302160, 1)
        elif GetTalkListEntryResult() == 22 and GetEventFlag(1049304152) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry liurnia north
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304166) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302065, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304166) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #onyx lord gaol
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304168) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302102, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304168) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #perfumer tricia
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304169) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302120, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304169) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #red wolf of the champion
        elif GetTalkListEntryResult() == 23 and (GetEventFlag(1049304186) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302123, 1)
        elif GetTalkListEntryResult() == 23 and GetEventFlag(1049304186) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #sanguine noble
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304170) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302162, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304170) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #stonedigger altus
        elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304171) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302163, 1)
        elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304171) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #tibia liurnia
        elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304172) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302067, 1)
        elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304172) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #elemer
        elif GetTalkListEntryResult() == 24 and (GetEventFlag(1049304187) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302027, 1)
        elif GetTalkListEntryResult() == 24 and GetEventFlag(1049304187) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0
#tier 6
def t324001110_7():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #battlemage hugues
        AddTalkListDataIf(GetEventFlag(1049304174) == 0,1, 15000389, -1)
        #battlemage hugues (all items)
        AddTalkListDataIf(GetEventFlag(1049300174) == 1,1, 16000149, -1)
        #battlemage hugues (defeated)
        AddTalkListDataIf(GetEventFlag(1049304174) == 1,1, 16000148, -1)
        #black knife assassin sage's
        AddTalkListDataIf(GetEventFlag(1049304190) == 0,16, 99993012, -1)
        #black knife assassin sage's (all items)
        AddTalkListDataIf(GetEventFlag(1049300190) == 1,16, 16000181, -1)
        #black knife assassin sage's (defeated)
        AddTalkListDataIf(GetEventFlag(1049304190) == 1,16, 16000180, -1)
        #commander o'neil
        AddTalkListDataIf(GetEventFlag(1049304175) == 0,2, 13040124, -1)
        #commander o'neil (all items)
        AddTalkListDataIf(GetEventFlag(1049300175) == 1,2, 16000151, -1)
        #commander o'neil (defeated)
        AddTalkListDataIf(GetEventFlag(1049304175) == 1,2, 16000150, -1)
        #crystalian x2 altus
        AddTalkListDataIf(GetEventFlag(1049304176) == 0,3, 15000442, -1)
        #crystalian x2 altus (all items)
        AddTalkListDataIf(GetEventFlag(1049300176) == 1,3, 16000153, -1)
        #crystalian x2 altus (defeated)
        AddTalkListDataIf(GetEventFlag(1049304176) == 1,3, 16000152, -1)
        #deathrite caelid
        AddTalkListDataIf(GetEventFlag(1049304177) == 0,4, 15000534, -1)
        #deathrite caelid (all items)
        AddTalkListDataIf(GetEventFlag(1049300177) == 1,4, 16000155, -1)
        #deathrite caelid (defeated)
        AddTalkListDataIf(GetEventFlag(1049304177) == 1,4, 16000154, -1)
        #dragonkin (siofra)
        AddTalkListDataIf(GetEventFlag(1049304208) == 0,17, 99992007, -1)
        #dragonkin (siofra) (all items)
        AddTalkListDataIf(GetEventFlag(1049300208) == 1,17, 16000217, -1)
        #dragonkin (siofra) (defeated)
        AddTalkListDataIf(GetEventFlag(1049304208) == 1,17, 16000216, -1)
        #erdtree burial watchdog wyndham
        AddTalkListDataIf(GetEventFlag(1049304179) == 0,6, 15000518, -1)
        #erdtree burial watchdog wyndham (all items)
        AddTalkListDataIf(GetEventFlag(1049300179) == 1,6, 16000159, -1)
        #erdtree burial watchdog wyndham (defeated)
        AddTalkListDataIf(GetEventFlag(1049304179) == 1,6, 16000158, -1)
        #glintstone dragon smarag
        AddTalkListDataIf(GetEventFlag(1049304180) == 0,7, 13040136, -1)
        #glintstone dragon smarag (all items)
        AddTalkListDataIf(GetEventFlag(1049300180) == 1,7, 16000161, -1)
        #glintstone dragon smarag (defeated)
        AddTalkListDataIf(GetEventFlag(1049304180) == 1,7, 16000160, -1)
        #grave warden duelist auriza
        AddTalkListDataIf(GetEventFlag(1049304181) == 0,8, 99990300, -1)
        #grave warden duelist auriza (all items)
        AddTalkListDataIf(GetEventFlag(1049300181) == 1,8, 16000163, -1)
        #grave warden duelist auriza (defeated)
        AddTalkListDataIf(GetEventFlag(1049304181) == 1,8, 16000162, -1)
        #night's cavalry caelid
        AddTalkListDataIf(GetEventFlag(1049304183) == 0,10, 15000702, -1)
        #night's cavalry caelid (all items)
        AddTalkListDataIf(GetEventFlag(1049300183) == 1,10, 16000167, -1)
        #night's cavalry caelid (defeated)
        AddTalkListDataIf(GetEventFlag(1049304183) == 1,10, 16000166, -1)
        #omenkiller+miranda
        AddTalkListDataIf(GetEventFlag(1049304199) == 0,19, 99990299, -1)
        #omenkiller+miranda (all items)
        AddTalkListDataIf(GetEventFlag(1049300199) == 1,19, 16000199, -1)
        #omenkiller+miranda (defeated)
        AddTalkListDataIf(GetEventFlag(1049304199) == 1,19, 16000198, -1)
        #onyx lord sealed
        AddTalkListDataIf(GetEventFlag(1049304184) == 0,11, 15000512, -1)
        #onyx lord sealed (all items)
        AddTalkListDataIf(GetEventFlag(1049300184) == 1,11, 16000169, -1)
        #onyx lord sealed (defeated)
        AddTalkListDataIf(GetEventFlag(1049304184) == 1,11, 16000168, -1)
        #putrid avatar caelid
        AddTalkListDataIf(GetEventFlag(1049304185) == 0,12, 15000374, -1)
        #putrid avatar caelid (all items)
        AddTalkListDataIf(GetEventFlag(1049300185) == 1,12, 16000171, -1)
        #putrid avatar caelid (defeated)
        AddTalkListDataIf(GetEventFlag(1049304185) == 1,12, 16000170, -1)
        #misbegotten+crucible
        AddTalkListDataIf(GetEventFlag(1049304173) == 0,18, 16000509, -1)
        #misbegotten+crucible (all items)
        AddTalkListDataIf(GetEventFlag(1049300173) == 1,18, 16000147, -1)
        #misbegotten+crucible (defeated)
        AddTalkListDataIf(GetEventFlag(1049304173) == 1,18, 16000146, -1)
        #regal ancestor
        AddTalkListDataIf(GetEventFlag(1049304188) == 0,15, 16000510, -1)
        #regal ancestor (all items)
        AddTalkListDataIf(GetEventFlag(1049300188) == 1,15, 16000177, -1)
        #regal ancestor (defeated)
        AddTalkListDataIf(GetEventFlag(1049304188) == 1,15, 16000176, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #battlemage hugues
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304174) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302103, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304174) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #black knife assassin sage's
        elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304190) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302146, 1)
        elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304190) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #commander o'neil
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304175) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302026, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304175) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #crystalian x2 altus
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304176) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302164, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304176) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #deathrite caelid
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304177) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302068, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304177) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #dragonkin (siofra)
        elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304208) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302031, 1)
        elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304208) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree burial watchdog wyndham
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304179) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302121, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304179) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #glintstone dragon smarag
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304180) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302028, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304180) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #grave warden duelist auriza
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304181) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302122, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304181) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry caelid
        elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304183) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302069, 1)
        elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304183) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #omenkiller+miranda
        elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304199) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302149, 1)
        elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304199) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #onyx lord sealed
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304184) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302165, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304184) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #putrid avatar caelid
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304185) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302071, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304185) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #misbegotten+crucible
        elif GetTalkListEntryResult() == 18 and (GetEventFlag(1049304173) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302025, 1)
        elif GetTalkListEntryResult() == 18 and GetEventFlag(1049304173) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #regal ancestor
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304188) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302002, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304188) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0
    
#tier 7
def t324001110_8():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #black knife assassin (altus)
        AddTalkListDataIf(GetEventFlag(1049304189) == 0,1, 15000461, -1)
        #black knife assassin (altus) (all items)
        AddTalkListDataIf(GetEventFlag(1049300189) == 1,1, 16000179, -1)
        #black knife assassin (altus) (defeated)
        AddTalkListDataIf(GetEventFlag(1049304189) == 1,1, 16000178, -1)
        #giant wormface
        AddTalkListDataIf(GetEventFlag(1049304193) == 0,4, 15000377, -1)
        #giant wormface (all items)
        AddTalkListDataIf(GetEventFlag(1049300193) == 1,4, 16000187, -1)
        #giant wormface (defeated)
        AddTalkListDataIf(GetEventFlag(1049304193) == 1,4, 16000186, -1)
        #godfrey golden shade
        AddTalkListDataIf(GetEventFlag(1049304210) == 0,5, 13040118, -1)
        #godfrey golden shade (all items)
        AddTalkListDataIf(GetEventFlag(1049300210) == 1,5, 16000221, -1)
        #godfrey golden shade (defeated)
        AddTalkListDataIf(GetEventFlag(1049304210) == 1,5, 16000220, -1)
        #godskin apostle altus
        AddTalkListDataIf(GetEventFlag(1049304195) == 0,6, 99992005, -1)
        #godskin apostle altus (all items)
        AddTalkListDataIf(GetEventFlag(1049300195) == 1,6, 16000191, -1)
        #godskin apostle altus (defeated)
        AddTalkListDataIf(GetEventFlag(1049304195) == 1,6, 16000190, -1)
        #mimic tear
        AddTalkListDataIf(GetEventFlag(1049304196) == 0,7, 13040155, -1)
        #mimic tear (all items)
        AddTalkListDataIf(GetEventFlag(1049300196) == 1,7, 16000193, -1)
        #mimic tear (defeated)
        AddTalkListDataIf(GetEventFlag(1049304196) == 1,7, 16000192, -1)
        #necromancer garris
        AddTalkListDataIf(GetEventFlag(1049304197) == 0,8, 15000453, -1)
        #necromancer garris (all items)
        AddTalkListDataIf(GetEventFlag(1049300197) == 1,8, 16000195, -1)
        #necromancer garris (defeated)
        AddTalkListDataIf(GetEventFlag(1049304197) == 1,8, 16000194, -1)
        #night's cavalry altus
        AddTalkListDataIf(GetEventFlag(1049304198) == 0,9, 15000703, -1)
        #night's cavalry altus (all items)
        AddTalkListDataIf(GetEventFlag(1049300198) == 1,9, 16000197, -1)
        #night's cavalry altus (defeated)
        AddTalkListDataIf(GetEventFlag(1049304198) == 1,9, 16000196, -1)
        #putrid crystalian x3 sellia
        AddTalkListDataIf(GetEventFlag(1049304191) == 0,11, 99990204, -1)
        #putrid crystalian x3 sellia (all items)
        AddTalkListDataIf(GetEventFlag(1049300191) == 1,11, 16000183, -1)
        #putrid crystalian x3 sellia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304191) == 1,11, 16000182, -1)
        #tree sentinels altus
        AddTalkListDataIf(GetEventFlag(1049304200) == 0,12, 15000456, -1)
        #tree sentinels altus (all items)
        AddTalkListDataIf(GetEventFlag(1049300200) == 1,12, 16000201, -1)
        #tree sentinels altus (defeated)
        AddTalkListDataIf(GetEventFlag(1049304200) == 1,12, 16000200, -1)
        #godskin noble
        AddTalkListDataIf(GetEventFlag(1049304215) == 0,14, 16000511, -1)
        #godskin noble (all items)
        AddTalkListDataIf(GetEventFlag(1049300215) == 1,14, 16000231, -1)
        #godskin noble (defeated)
        AddTalkListDataIf(GetEventFlag(1049304215) == 1,14, 16000230, -1)
        #starscourge radahn
        AddTalkListDataIf(GetEventFlag(1049304201) == 0,13, 16000512, -1)
        #starscourge radahn (all items)
        AddTalkListDataIf(GetEventFlag(1049300201) == 1,13, 16000203, -1)
        #starscourge radahn (defeated)
        AddTalkListDataIf(GetEventFlag(1049304201) == 1,13, 16000202, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #black knife assassin (altus)
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304189) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302072, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304189) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #giant wormface
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304193) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302075, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304193) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godfrey golden shade
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304210) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302033, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304210) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godskin apostle altus
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304195) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302074, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304195) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #mimic tear
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304196) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302029, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304196) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #necromancer garris
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304197) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302148, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304197) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry altus
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304198) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302076, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304198) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #putrid crystalian x3 sellia
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304191) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302147, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304191) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #tree sentinels altus
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304200) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302077, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304200) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godskin noble
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304215) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302034, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304215) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #starscourge radahn
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304201) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302003, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304201) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0

#tier 8
def t324001110_9():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #bell bearing outskirts
        AddTalkListDataIf(GetEventFlag(1049304202) == 0,1, 15000709, -1)
        #bell bearing outskirts (all items)
        AddTalkListDataIf(GetEventFlag(1049300202) == 1,1, 16000205, -1)
        #bell bearing outskirts (defeated)
        AddTalkListDataIf(GetEventFlag(1049304202) == 1,1, 16000204, -1)
        #crucible knight siluria
        AddTalkListDataIf(GetEventFlag(1049304225) == 0,2, 13040145, -1)
        #crucible knight siluria (all items)
        AddTalkListDataIf(GetEventFlag(1049300225) == 1,2, 16000251, -1)
        #crucible knight siluria (defeated)
        AddTalkListDataIf(GetEventFlag(1049304225) == 1,2, 16000250, -1)
        #deathbird outskirts
        AddTalkListDataIf(GetEventFlag(1049304204) == 0,3, 15000532, -1)
        #deathbird outskirts (all items)
        AddTalkListDataIf(GetEventFlag(1049300204) == 1,3, 16000209, -1)
        #deathbird outskirts (defeated)
        AddTalkListDataIf(GetEventFlag(1049304204) == 1,3, 16000208, -1)
        #demi-human queen maggie
        AddTalkListDataIf(GetEventFlag(1049304206) == 0,5, 15000376, -1)
        #demi-human queen maggie (all items)
        AddTalkListDataIf(GetEventFlag(1049300206) == 1,5, 16000213, -1)
        #demi-human queen maggie (defeated)
        AddTalkListDataIf(GetEventFlag(1049304206) == 1,5, 16000212, -1)
        #draconic tree sentinel
        AddTalkListDataIf(GetEventFlag(1049304207) == 0,6, 13040154, -1)
        #draconic tree sentinel (all items)
        AddTalkListDataIf(GetEventFlag(1049300207) == 1,6, 16000215, -1)
        #draconic tree sentinel (defeated)
        AddTalkListDataIf(GetEventFlag(1049304207) == 1,6, 16000214, -1)
        #fallingstar altus
        AddTalkListDataIf(GetEventFlag(1049304192) == 0,18, 15000719, -1)
        #fallingstar altus (all items)
        AddTalkListDataIf(GetEventFlag(1049300192) == 1,18, 16000185, -1)
        #fallingstar altus (defeated)
        AddTalkListDataIf(GetEventFlag(1049304192) == 1,18, 16000184, -1)
        #fia's champs
        AddTalkListDataIf(GetEventFlag(1049304209) == 0,8, 15000378, -1)
        #fia's champs (all items)
        AddTalkListDataIf(GetEventFlag(1049300209) == 1,8, 16000219, -1)
        #fia's champs (defeated)
        AddTalkListDataIf(GetEventFlag(1049304209) == 1,8, 16000218, -1)
        #godefroy
        AddTalkListDataIf(GetEventFlag(1049304194) == 0,19, 15000392, -1)
        #godefroy (all items)
        AddTalkListDataIf(GetEventFlag(1049300194) == 1,19, 16000189, -1)
        #godefroy (defeated)
        AddTalkListDataIf(GetEventFlag(1049304194) == 1,19, 16000188, -1)
        #magma wyrm (gelmir)
        AddTalkListDataIf(GetEventFlag(1049304211) == 0,10, 20000001, -1)
        #magma wyrm (gelmir) (all items)
        AddTalkListDataIf(GetEventFlag(1049300211) == 1,10, 16000223, -1)
        #magma wyrm (gelmir) (defeated)
        AddTalkListDataIf(GetEventFlag(1049304211) == 1,10, 16000222, -1)
        #tibia altus (gelmir)
        AddTalkListDataIf(GetEventFlag(1049304212) == 0,11, 15000707, -1)
        #tibia altus (gelmir) (all items)
        AddTalkListDataIf(GetEventFlag(1049300212) == 1,11, 16000225, -1)
        #tibia altus (gelmir) (defeated)
        AddTalkListDataIf(GetEventFlag(1049304212) == 1,11, 16000224, -1)
        #ulcerated tree spirit gelmir
        AddTalkListDataIf(GetEventFlag(1049304213) == 0,12, 15000536, -1)
        #ulcerated tree spirit gelmir (all items)
        AddTalkListDataIf(GetEventFlag(1049300213) == 1,12, 16000227, -1)
        #ulcerated tree spirit gelmir (defeated)
        AddTalkListDataIf(GetEventFlag(1049304213) == 1,12, 16000226, -1)
        #valiant gargs
        AddTalkListDataIf(GetEventFlag(1049304214) == 0,13, 13040121, -1)
        #valiant gargs (all items)
        AddTalkListDataIf(GetEventFlag(1049300214) == 1,13, 16000229, -1)
        #valiant gargs (defeated)
        AddTalkListDataIf(GetEventFlag(1049304214) == 1,13, 16000228, -1)
        #astel
        AddTalkListDataIf(GetEventFlag(1049304216) == 0,15, 16000513, -1)
        #astel (all items)
        AddTalkListDataIf(GetEventFlag(1049300216) == 1,15, 16000233, -1)
        #astel (defeated)
        AddTalkListDataIf(GetEventFlag(1049304216) == 1,15, 16000232, -1)
        #lichdragon fortissax
        AddTalkListDataIf(GetEventFlag(1049304217) == 0,16, 16000514, -1)
        #lichdragon fortissax (all items)
        AddTalkListDataIf(GetEventFlag(1049300217) == 1,16, 16000235, -1)
        #lichdragon fortissax (defeated)
        AddTalkListDataIf(GetEventFlag(1049304217) == 1,16, 16000234, -1)
        #morgott
        AddTalkListDataIf(GetEventFlag(1049304218) == 0,17, 16000515, -1)
        #morgott (all items)
        AddTalkListDataIf(GetEventFlag(1049300218) == 1,17, 16000237, -1)
        #morgott (defeated)
        AddTalkListDataIf(GetEventFlag(1049304218) == 1,17, 16000236, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #bell bearing outskirts
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304202) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302078, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304202) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #crucible knight siluria
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304225) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302041, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304225) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #deathbird outskirts
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304204) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302079, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304204) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #demi-human queen maggie
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304206) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302080, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304206) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #draconic tree sentinel
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304207) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302081, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304207) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #fallingstar altus
        elif GetTalkListEntryResult() == 18 and (GetEventFlag(1049304192) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302073, 1)
        elif GetTalkListEntryResult() == 18 and GetEventFlag(1049304192) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #fia's champs
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304209) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302032, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304209) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godefroy
        elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304194) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302105, 1)
        elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304194) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #magma wyrm (gelmir)
        elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304211) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302035, 1)
        elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304211) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #tibia altus
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304212) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302082, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304212) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #ulcerated tree spirit gelmir
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304213) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302083, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304213) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #valiant gargs
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304214) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302036, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304214) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #astel
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304216) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302004, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304216) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #lichdragon fortissax
        elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304217) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302005, 1)
        elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304217) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #morgott
        elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304218) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302006, 1)
        elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304218) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0
    
#tier 9
def t324001110_10():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #ancient dragon lansseax
        AddTalkListDataIf(GetEventFlag(1049304219) == 0,1, 99992004, -1)
        #ancient dragon lansseax (all items)
        AddTalkListDataIf(GetEventFlag(1049300219) == 1,1, 16000239, -1)
        #ancient dragon lansseax (defeated)
        AddTalkListDataIf(GetEventFlag(1049304219) == 1,1, 16000238, -1)
        #ancient hero of zamor mountaintops
        AddTalkListDataIf(GetEventFlag(1049304220) == 0,2, 15000522, -1)
        #ancient hero of zamor mountaintops (all items)
        AddTalkListDataIf(GetEventFlag(1049300220) == 1,2, 16000241, -1)
        #ancient hero of zamor mountaintops (defeated)
        AddTalkListDataIf(GetEventFlag(1049304220) == 1,2, 16000240, -1)
        #black blade kindred forbidden
        AddTalkListDataIf(GetEventFlag(1049304221) == 0,3, 20000002, -1)
        #black blade kindred forbidden (all items)
        AddTalkListDataIf(GetEventFlag(1049300221) == 1,3, 16000243, -1)
        #black blade kindred forbidden (defeated)
        AddTalkListDataIf(GetEventFlag(1049304221) == 1,3, 16000242, -1)
        #dragonkin (rot)
        AddTalkListDataIf(GetEventFlag(1049304226) == 0,8, 13040129, -1)
        #dragonkin (rot) (all items)
        AddTalkListDataIf(GetEventFlag(1049300226) == 1,8, 16000253, -1)
        #dragonkin (rot) (defeated)
        AddTalkListDataIf(GetEventFlag(1049304226) == 1,8, 16000252, -1)
        #esgar
        AddTalkListDataIf(GetEventFlag(1049304227) == 0,9, 15000434, -1)
        #esgar (all items)
        AddTalkListDataIf(GetEventFlag(1049300227) == 1,9, 16000255, -1)
        #esgar (defeated)
        AddTalkListDataIf(GetEventFlag(1049304227) == 1,9, 16000254, -1)
        #fell twins
        AddTalkListDataIf(GetEventFlag(1049304222) == 0,4, 15000379, -1)
        #fell twins (all items)
        AddTalkListDataIf(GetEventFlag(1049300222) == 1,4, 16000245, -1)
        #fell twins (defeated)
        AddTalkListDataIf(GetEventFlag(1049304222) == 1,4, 16000244, -1)
        #spiritcaller snail mountaintops
        AddTalkListDataIf(GetEventFlag(1049304223) == 0,5, 99993011, -1)
        #spiritcaller snail mountaintops (all items)
        AddTalkListDataIf(GetEventFlag(1049300223) == 1,5, 16000247, -1)
        #spiritcaller snail mountaintops (defeated)
        AddTalkListDataIf(GetEventFlag(1049304223) == 1,5, 16000246, -1)
        #ulcerated tree spirit mountaintops
        AddTalkListDataIf(GetEventFlag(1049304224) == 0,6, 15000425, -1)
        #ulcerated tree spirit mountaintops (all items)
        AddTalkListDataIf(GetEventFlag(1049300224) == 1,6, 16000249, -1)
        #ulcerated tree spirit mountaintops (defeated)
        AddTalkListDataIf(GetEventFlag(1049304224) == 1,6, 16000248, -1)
        #crucible knight ordovis
        AddTalkListDataIf(GetEventFlag(1049304203) == 0,15, 15000433, -1)
        #crucible knight ordovis (all items)
        AddTalkListDataIf(GetEventFlag(1049300203) == 1,15, 16000207, -1)
        #crucible knight ordovis (defeated)
        AddTalkListDataIf(GetEventFlag(1049304203) == 1,15, 16000206, -1)
        #decaying ekzykes
        AddTalkListDataIf(GetEventFlag(1049304205) == 0,16, 13040138, -1)
        #decaying ekzykes (all items)
        AddTalkListDataIf(GetEventFlag(1049300205) == 1,16, 16000211, -1)
        #decaying ekzykes (defeated)
        AddTalkListDataIf(GetEventFlag(1049304205) == 1,16, 16000210, -1)
        #mohg
        AddTalkListDataIf(GetEventFlag(1049304229) == 0,11, 13040144, -1)
        #mohg (all items)
        AddTalkListDataIf(GetEventFlag(1049300229) == 1,11, 16000259, -1)
        #mohg (defeated)
        AddTalkListDataIf(GetEventFlag(1049304229) == 1,11, 16000258, -1)
        #roundtable knight vyke
        AddTalkListDataIf(GetEventFlag(1049304230) == 0,12, 15000391, -1)
        #roundtable knight vyke (all items)
        AddTalkListDataIf(GetEventFlag(1049300230) == 1,12, 16000261, -1)
        #roundtable knight vyke (defeated)
        AddTalkListDataIf(GetEventFlag(1049304230) == 1,12, 16000260, -1)
        #rykard
        AddTalkListDataIf(GetEventFlag(1049304231) == 0,13, 16000516, -1)
        #rykard (all items)
        AddTalkListDataIf(GetEventFlag(1049300231) == 1,13, 16000263, -1)
        #rykard (defeated)
        AddTalkListDataIf(GetEventFlag(1049304231) == 1,13, 16000262, -1)
        #commander niall
        AddTalkListDataIf(GetEventFlag(1049304232) == 0,14, 16000517, -1)
        #commander niall (all items)
        AddTalkListDataIf(GetEventFlag(1049300232) == 1,14, 16000265, -1)
        #commander niall (defeated)
        AddTalkListDataIf(GetEventFlag(1049304232) == 1,14, 16000264, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #ancient dragon lansseax
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304219) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302037, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304219) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #ancient hero of zamor mountaintops
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304220) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302125, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304220) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #black blade kindred forbidden
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304221) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302084, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304221) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #crucible knight ordovis
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304203) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302124, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304203) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #decaying ekzykes
        elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304205) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302030, 1)
        elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304205) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #fell twins
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304222) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302085, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304222) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #spiritcaller snail mountaintops
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304223) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302150, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304223) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #ulcerated tree spirit mountaintops
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304224) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302126, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304224) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #dragonkin (rot)
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304226) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302038, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304226) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #esgar
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304227) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302127, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304227) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #mohg
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304229) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302039, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304229) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #roundtable knight vyke
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304230) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302104, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304230) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #rykard
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304231) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302007, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304231) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #commander niall
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304232) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302040, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304232) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0

#tier 10
def t324001110_11():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #beastman x2
        AddTalkListDataIf(GetEventFlag(1049304238) == 0,6, 99991000, -1)
        #beastman x2 (all items)
        AddTalkListDataIf(GetEventFlag(1049300238) == 1,6, 16000277, -1)
        #beastman x2 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304238) == 1,6, 16000276, -1)
        #deathrite mountaintops
        AddTalkListDataIf(GetEventFlag(1049304233) == 0,1, 13040151, -1)
        #deathrite mountaintops (all items)
        AddTalkListDataIf(GetEventFlag(1049300233) == 1,1, 16000267, -1)
        #deathrite mountaintops (defeated)
        AddTalkListDataIf(GetEventFlag(1049304233) == 1,1, 16000266, -1)
        #erdtree avatar mountaintops
        AddTalkListDataIf(GetEventFlag(1049304234) == 0,2, 15000526, -1)
        #erdtree avatar mountaintops (all items)
        AddTalkListDataIf(GetEventFlag(1049300234) == 1,2, 16000269, -1)
        #erdtree avatar mountaintops (defeated)
        AddTalkListDataIf(GetEventFlag(1049304234) == 1,2, 16000268, -1)
        #fullgrown fallingstar
        AddTalkListDataIf(GetEventFlag(1049304228) == 0,18, 13040149, -1)
        #fullgrown fallingstar (all items)
        AddTalkListDataIf(GetEventFlag(1049300228) == 1,18, 16000257, -1)
        #fullgrown fallingstar (defeated)
        AddTalkListDataIf(GetEventFlag(1049304228) == 1,18, 16000256, -1)
        #night's cavalry forbidden
        AddTalkListDataIf(GetEventFlag(1049304236) == 0,4, 15000704, -1)
        #night's cavalry forbidden (all items)
        AddTalkListDataIf(GetEventFlag(1049300236) == 1,4, 16000273, -1)
        #night's cavalry forbidden (defeated)
        AddTalkListDataIf(GetEventFlag(1049304236) == 1,4, 16000272, -1)
        #flying dragon greyll
        AddTalkListDataIf(GetEventFlag(1049304252) == 0,20, 13040148, -1)
        #flying dragon greyll (all items)
        AddTalkListDataIf(GetEventFlag(1049300252) == 1,20, 16000305, -1)
        #flying dragon greyll (defeated)
        AddTalkListDataIf(GetEventFlag(1049304252) == 1,20, 16000304, -1)
        #glintstone dragon adula
        AddTalkListDataIf(GetEventFlag(1049304253) == 0,21, 13040135, -1)
        #glintstone dragon adula (all items)
        AddTalkListDataIf(GetEventFlag(1049300253) == 1,21, 16000307, -1)
        #glintstone dragon adula (defeated)
        AddTalkListDataIf(GetEventFlag(1049304253) == 1,21, 16000306, -1)
        #godskin duo
        AddTalkListDataIf(GetEventFlag(1049304235) == 0,3, 13040119, -1)
        #godskin duo (all items)
        AddTalkListDataIf(GetEventFlag(1049300235) == 1,3, 16000271, -1)
        #godskin duo (defeated)
        AddTalkListDataIf(GetEventFlag(1049304235) == 1,3, 16000270, -1)
        #misbegotten crusader
        AddTalkListDataIf(GetEventFlag(1049304244) == 0,12, 15000455, -1)
        #misbegotten crusader (all items)
        AddTalkListDataIf(GetEventFlag(1049300244) == 1,12, 16000289, -1)
        #misbegotten crusader (defeated)
        AddTalkListDataIf(GetEventFlag(1049304244) == 1,12, 16000288, -1)
        #putrid grave warden duelist
        AddTalkListDataIf(GetEventFlag(1049304245) == 0,13, 15000422, -1)
        #putrid grave warden duelist (all items)
        AddTalkListDataIf(GetEventFlag(1049300245) == 1,13, 16000291, -1)
        #putrid grave warden duelist (defeated)
        AddTalkListDataIf(GetEventFlag(1049304245) == 1,13, 16000290, -1)
        #putrid tree spirit wardead
        AddTalkListDataIf(GetEventFlag(1049304239) == 0,7, 15000432, -1)
        #putrid tree spirit wardead (all items)
        AddTalkListDataIf(GetEventFlag(1049300239) == 1,7, 16000279, -1)
        #putrid tree spirit wardead (defeated)
        AddTalkListDataIf(GetEventFlag(1049304239) == 1,7, 16000278, -1)
        #stray mimic
        AddTalkListDataIf(GetEventFlag(1049304241) == 0,9, 99992000, -1)
        #stray mimic (all items)
        AddTalkListDataIf(GetEventFlag(1049300241) == 1,9, 16000283, -1)
        #stray mimic (defeated)
        AddTalkListDataIf(GetEventFlag(1049304241) == 1,9, 16000282, -1)
        #alecto
        AddTalkListDataIf(GetEventFlag(1049304237) == 0,5, 15000393, -1)
        #alecto (all items)
        AddTalkListDataIf(GetEventFlag(1049300237) == 1,5, 16000275, -1)
        #alecto (defeated)
        AddTalkListDataIf(GetEventFlag(1049304237) == 1,5, 16000274, -1)
        #bell bearing dragonbarrow
        AddTalkListDataIf(GetEventFlag(1049304250) == 0,19, 15000718, -1)
        #bell bearing dragonbarrow (all items)
        AddTalkListDataIf(GetEventFlag(1049300250) == 1,19, 16000301, -1)
        #bell bearing dragonbarrow (defeated)
        AddTalkListDataIf(GetEventFlag(1049304250) == 1,19, 16000300, -1)
        #night's cavalry dragonbarrow
        AddTalkListDataIf(GetEventFlag(1049304254) == 0,22, 13040159, -1)
        #night's cavalry dragonbarrow (all items)
        AddTalkListDataIf(GetEventFlag(1049300254) == 1,22, 16000309, -1)
        #night's cavalry dragonbarrow (defeated)
        AddTalkListDataIf(GetEventFlag(1049304254) == 1,22, 16000308, -1)
        #putrid avatar dragonbarrow
        AddTalkListDataIf(GetEventFlag(1049304255) == 0,23, 15000527, -1)
        #putrid avatar dragonbarrow (all items)
        AddTalkListDataIf(GetEventFlag(1049300255) == 1,23, 16000311, -1)
        #putrid avatar dragonbarrow (defeated)
        AddTalkListDataIf(GetEventFlag(1049304255) == 1,23, 16000310, -1)
        #sir gideon ofnir
        AddTalkListDataIf(GetEventFlag(1049304240) == 0,8, 13040146, -1)
        #sir gideon ofnir (all items)
        AddTalkListDataIf(GetEventFlag(1049300240) == 1,8, 16000281, -1)
        #sir gideon ofnir (defeated)
        AddTalkListDataIf(GetEventFlag(1049304240) == 1,8, 16000280, -1)
        #godskin apostle (caelid)
        AddTalkListDataIf(GetEventFlag(1049304247) == 0,15, 16000518, -1)
        #godskin apostle (caelid) (all items)
        AddTalkListDataIf(GetEventFlag(1049300247) == 1,15, 16000295, -1)
        #godskin apostle (caelid) (defeated)
        AddTalkListDataIf(GetEventFlag(1049304247) == 1,15, 16000294, -1)
        #fire giant
        AddTalkListDataIf(GetEventFlag(1049304246) == 0,14, 16000519, -1)
        #fire giant (all items)
        AddTalkListDataIf(GetEventFlag(1049300246) == 1,14, 16000293, -1)
        #fire giant (defeated)
        AddTalkListDataIf(GetEventFlag(1049304246) == 1,14, 16000292, -1)
        #beast clergyman
        AddTalkListDataIf(GetEventFlag(1049304248) == 0,16, 16000520, -1)
        #beast clergyman (all items)
        AddTalkListDataIf(GetEventFlag(1049300248) == 1,16, 16000297, -1)
        #beast clergyman (defeated)
        AddTalkListDataIf(GetEventFlag(1049304248) == 1,16, 16000296, -1)
        #godfrey/hoarah
        AddTalkListDataIf(GetEventFlag(1049304249) == 0,17, 16000521, -1)
        #godfrey/hoarah (all items)
        AddTalkListDataIf(GetEventFlag(1049300249) == 1,17, 16000299, -1)
        #godfrey/hoarah (defeated)
        AddTalkListDataIf(GetEventFlag(1049304249) == 1,17, 16000298, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #deathrite mountaintops
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304233) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302087, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304233) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #erdtree avatar mountaintops
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304234) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302088, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304234) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #fullgrown fallingstar
        elif GetTalkListEntryResult() == 18 and (GetEventFlag(1049304228) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302086, 1)
        elif GetTalkListEntryResult() == 18 and GetEventFlag(1049304228) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry forbidden
        elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304236) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302089, 1)
        elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304236) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #beastman x2
        elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304238) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302151, 1)
        elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304238) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godskin duo
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304235) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302042, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304235) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #misbegotten crusader
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304244) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302152, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304244) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #putrid grave warden duelist
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304245) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302130, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304245) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #putrid tree spirit wardead
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304239) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302128, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304239) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #stray mimic
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304241) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302129, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304241) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #alecto
        elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304237) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302106, 1)
        elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304237) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #bell bearing dragonbarrow
        elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304250) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302090, 1)
        elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304250) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #flying dragon greyll
        elif GetTalkListEntryResult() == 20 and (GetEventFlag(1049304252) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302046, 1)
        elif GetTalkListEntryResult() == 20 and GetEventFlag(1049304252) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #glintstone dragon adula
        elif GetTalkListEntryResult() == 21 and (GetEventFlag(1049304253) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302047, 1)
        elif GetTalkListEntryResult() == 21 and GetEventFlag(1049304253) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry dragonbarrow
        elif GetTalkListEntryResult() == 22 and (GetEventFlag(1049304254) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302092, 1)
        elif GetTalkListEntryResult() == 22 and GetEventFlag(1049304254) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #putrid avatar dragonbarrow
        elif GetTalkListEntryResult() == 23 and (GetEventFlag(1049304255) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302093, 1)
        elif GetTalkListEntryResult() == 23 and GetEventFlag(1049304255) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #sir gideon ofnir
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304240) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302044, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304240) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #fire giant
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304246) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302008, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304246) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godskin apostle (caelid)
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304247) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302043, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304247) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #beast clergyman
        elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304248) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302009, 1)
        elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304248) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #godfrey/hoarah
        elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304249) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302010, 1)
        elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304249) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0

#tier 11
def t324001110_12():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #astel snowfield
        AddTalkListDataIf(GetEventFlag(1049304242) == 0,1, 15000513, -1)
        #astel snowfield (all items)
        AddTalkListDataIf(GetEventFlag(1049300242) == 1,1, 16000285, -1)
        #astel snowfield (defeated)
        AddTalkListDataIf(GetEventFlag(1049304242) == 1,1, 16000284, -1)
        #black blade kindred dragonbarrow
        AddTalkListDataIf(GetEventFlag(1049304251) == 0,2, 13040147, -1)
        #black blade kindred dragonbarrow (all items)
        AddTalkListDataIf(GetEventFlag(1049300251) == 1,2, 16000303, -1)
        #black blade kindred dragonbarrow (defeated)
        AddTalkListDataIf(GetEventFlag(1049304251) == 1,2, 16000302, -1)
        #borealis
        AddTalkListDataIf(GetEventFlag(1049304243) == 0,3, 13040137, -1)
        #borealis (all items)
        AddTalkListDataIf(GetEventFlag(1049300243) == 1,3, 16000287, -1)
        #borealis (defeated)
        AddTalkListDataIf(GetEventFlag(1049304243) == 1,3, 16000286, -1)
        #loretta halig
        AddTalkListDataIf(GetEventFlag(1049304258) == 0,9, 13040125, -1)
        #loretta halig (all items)
        AddTalkListDataIf(GetEventFlag(1049300258) == 1,9, 16000317, -1)
        #loretta halig (defeated)
        AddTalkListDataIf(GetEventFlag(1049304258) == 1,9, 16000316, -1)
        #night's cavalry snowfield
        AddTalkListDataIf(GetEventFlag(1049304259) == 0,10, 15000705, -1)
        #night's cavalry snowfield (all items)
        AddTalkListDataIf(GetEventFlag(1049300259) == 1,10, 16000319, -1)
        #night's cavalry snowfield (defeated)
        AddTalkListDataIf(GetEventFlag(1049304259) == 1,10, 16000318, -1)
        #putrid avatar snowfield
        AddTalkListDataIf(GetEventFlag(1049304260) == 0,11, 15000528, -1)
        #putrid avatar snowfield (all items)
        AddTalkListDataIf(GetEventFlag(1049300260) == 1,11, 16000321, -1)
        #putrid avatar snowfield (defeated)
        AddTalkListDataIf(GetEventFlag(1049304260) == 1,11, 16000320, -1)
        #deathrite snowfield
        AddTalkListDataIf(GetEventFlag(1049304256) == 0,7, 15000535, -1)
        #deathrite snowfield (all items)
        AddTalkListDataIf(GetEventFlag(1049300256) == 1,7, 16000313, -1)
        #deathrite snowfield (defeated)
        AddTalkListDataIf(GetEventFlag(1049304256) == 1,7, 16000312, -1)
        #great wyrm theodorix
        AddTalkListDataIf(GetEventFlag(1049304257) == 0,8, 13040139, -1)
        #great wyrm theodorix (all items)
        AddTalkListDataIf(GetEventFlag(1049300257) == 1,8, 16000315, -1)
        #great wyrm theodorix (defeated)
        AddTalkListDataIf(GetEventFlag(1049304257) == 1,8, 16000314, -1)
        #malenia
        AddTalkListDataIf(GetEventFlag(1049304261) == 0,12, 13040106, -1)
        #malenia (all items)
        AddTalkListDataIf(GetEventFlag(1049300261) == 1,12, 16000323, -1)
        #malenia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304261) == 1,12, 16000322, -1)
        #dragonlord placidusax
        AddTalkListDataIf(GetEventFlag(1049304262) == 0,13, 16000522, -1)
        #dragonlord placidusax (all items)
        AddTalkListDataIf(GetEventFlag(1049300262) == 1,13, 16000325, -1)
        #dragonlord placidusax (defeated)
        AddTalkListDataIf(GetEventFlag(1049304262) == 1,13, 16000324, -1)
        #radagon+elden beast
        AddTalkListDataIf(GetEventFlag(1049304263) == 0,14, 16000523, -1)
        #radagon+elden beast (all items)
        AddTalkListDataIf(GetEventFlag(1049300263) == 1,14, 16000327, -1)
        #radagon+elden beast (defeated)
        AddTalkListDataIf(GetEventFlag(1049304263) == 1,14, 16000326, -1)
        #mohg lord of blood
        AddTalkListDataIf(GetEventFlag(1049304264) == 0,15, 16000524, -1)
        #mohg lord of blood (all items)
        AddTalkListDataIf(GetEventFlag(1049300264) == 1,15, 16000329, -1)
        #mohg lord of blood (defeated)
        AddTalkListDataIf(GetEventFlag(1049304264) == 1,15, 16000328, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #astel snowfield
        if GetTalkListEntryResult() == 1 and (GetEventFlag(1049304242) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302166, 1)
        elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304242) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #black blade kindred dragonbarrow
        elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304251) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302091, 1)
        elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304251) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #borealis
        elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304243) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302045, 1)
        elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304243) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #loretta halig
        elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304258) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302048, 1)
        elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304258) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #night's cavalry snowfield
        elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304259) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302095, 1)
        elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304259) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #putrid avatar snowfield
        elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304260) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302096, 1)
        elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304260) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #deathrite snowfield
        elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304256) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302094, 1)
        elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304256) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #great wyrm theodorix
        elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304257) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302049, 1)
        elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304257) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #malenia
        elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304261) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302016, 1)
        elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304261) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #dragonlord placidusax
        elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304262) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302011, 1)
        elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304262) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #radagon+elden beast
        elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304263) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302012, 1)
        elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304263) == 1 and GetEventFlag(1049304330) == 0:
            pass
        #mohg lord of blood
        elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304264) == 0 or GetEventFlag(1049304330) == 1):
            SetEventFlag(1049302015, 1)
        elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304264) == 1 and GetEventFlag(1049304330) == 0:
            pass
        else:
            return 0

#tier dlc1
def t324001110_13():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #curseblade labirith
        AddTalkListDataIf(GetEventFlag(1049304265) == 0,1, 99993118, -1)
        #curseblade labirith (all items)
        AddTalkListDataIf(GetEventFlag(1049300265) == 1,1, 16000341, -1)
        #curseblade labirith (defeated)
        AddTalkListDataIf(GetEventFlag(1049304265) == 1,1, 16000340, -1)
        #demi-human queen marigga
        AddTalkListDataIf(GetEventFlag(1049304266) == 0,2, 99993128, -1)
        #demi-human queen marigga (all items)
        AddTalkListDataIf(GetEventFlag(1049300266) == 1,2, 16000351, -1)
        #demi-human queen marigga (defeated)
        AddTalkListDataIf(GetEventFlag(1049304266) == 1,2, 16000350, -1)
        #demi-human swordmaster onze
        AddTalkListDataIf(GetEventFlag(1049304267) == 0,3, 99993116, -1)
        #demi-human swordmaster onze (all items)
        AddTalkListDataIf(GetEventFlag(1049300267) == 1,3, 16000331, -1)
        #demi-human swordmaster onze (defeated)
        AddTalkListDataIf(GetEventFlag(1049304267) == 1,3, 16000330, -1)
        #chief bloodfiend
        AddTalkListDataIf(GetEventFlag(1049304268) == 0,4, 99993120, -1)
        #chief bloodfiend (all items)
        AddTalkListDataIf(GetEventFlag(1049300268) == 1,4, 16000339, -1)
        #chief bloodfiend (defeated)
        AddTalkListDataIf(GetEventFlag(1049304268) == 1,4, 16000338, -1)
        #dancer of ranah
        AddTalkListDataIf(GetEventFlag(1049304269) == 0,5, 99993122, -1)
        #dancer of ranah (all items)
        AddTalkListDataIf(GetEventFlag(1049300269) == 1,5, 16000335, -1)
        #dancer of ranah (defeated)
        AddTalkListDataIf(GetEventFlag(1049304269) == 1,5, 16000334, -1)
        #death knight fog
        AddTalkListDataIf(GetEventFlag(1049304270) == 0,6, 99993113, -1)
        #death knight fog (all items)
        AddTalkListDataIf(GetEventFlag(1049300270) == 1,6, 16000333, -1)
        #death knight fog (defeated)
        AddTalkListDataIf(GetEventFlag(1049304270) == 1,6, 16000332, -1)
        #divine beast dancing lion
        AddTalkListDataIf(GetEventFlag(1049304271) == 0,7, 16000525, -1)
        #divine beast dancing lion (all items)
        AddTalkListDataIf(GetEventFlag(1049300271) == 1,7, 16000345, -1)
        #divine beast dancing lion (defeated)
        AddTalkListDataIf(GetEventFlag(1049304271) == 1,7, 16000344, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #curseblade labirith
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302184, 1)
        #demi-human queen marigga
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049302187, 1)
        #demi-human swordmaster onze
        elif GetTalkListEntryResult() == 3:
            SetEventFlag(1049302179, 1)
        #chief bloodfiend
        elif GetTalkListEntryResult() == 4:
            SetEventFlag(1049302183, 1)
        #dancer of ranah
        elif GetTalkListEntryResult() == 5:
            SetEventFlag(1049302182, 1)
        #death knight fog
        elif GetTalkListEntryResult() == 6:
            SetEventFlag(1049302180, 1)
        #divine beast dancing lion
        elif GetTalkListEntryResult() == 7:
            SetEventFlag(1049302167, 1)
        else:
            return 0

#tier dlc2
def t324001110_14():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #ancient dragon-man
        AddTalkListDataIf(GetEventFlag(1049304272) == 0,1, 99993119, -1)
        #ancient dragon-man (all items)
        AddTalkListDataIf(GetEventFlag(1049300272) == 1,1, 16000383, -1)
        #ancient dragon-man (defeated)
        AddTalkListDataIf(GetEventFlag(1049304272) == 1,1, 16000382, -1)
        #black knight edredd
        AddTalkListDataIf(GetEventFlag(1049304273) == 0,2, 99993126, -1)
        #black knight edredd (all items)
        AddTalkListDataIf(GetEventFlag(1049300273) == 1,2, 16000355, -1)
        #black knight edredd (defeated)
        AddTalkListDataIf(GetEventFlag(1049304273) == 1,2, 16000354, -1)
        #dryleaf dane
        AddTalkListDataIf(GetEventFlag(1049304275) == 0,4, 99993129, -1)
        #dryleaf dane (all items)
        AddTalkListDataIf(GetEventFlag(1049300275) == 1,4, 16000369, -1)
        #dryleaf dane (defeated)
        AddTalkListDataIf(GetEventFlag(1049304275) == 1,4, 16000368, -1)
        #blackgaol knight
        AddTalkListDataIf(GetEventFlag(1049304276) == 0,5, 99993121, -1)
        #blackgaol knight (all items)
        AddTalkListDataIf(GetEventFlag(1049300276) == 1,5, 16000375, -1)
        #blackgaol knight (defeated)
        AddTalkListDataIf(GetEventFlag(1049304276) == 1,5, 16000374, -1)
        #black knight garrew
        AddTalkListDataIf(GetEventFlag(1049304277) == 0,6, 99993125, -1)
        #black knight garrew (all items)
        AddTalkListDataIf(GetEventFlag(1049300277) == 1,6, 16000357, -1)
        #black knight garrew (defeated)
        AddTalkListDataIf(GetEventFlag(1049304277) == 1,6, 16000356, -1)
        #red bear
        AddTalkListDataIf(GetEventFlag(1049304278) == 0,7, 99993124, -1)
        #red bear (all items)
        AddTalkListDataIf(GetEventFlag(1049300278) == 1,7, 16000343, -1)
        #red bear (defeated)
        AddTalkListDataIf(GetEventFlag(1049304278) == 1,7, 16000342, -1)
        #count ymir
        AddTalkListDataIf(GetEventFlag(1049304274) == 0,3, 99993127, -1)
        #count ymir (all items)
        AddTalkListDataIf(GetEventFlag(1049300274) == 1,3, 16000347, -1)
        #count ymir (defeated)
        AddTalkListDataIf(GetEventFlag(1049304274) == 1,3, 16000346, -1)
        #crucible knight devonia
        AddTalkListDataIf(GetEventFlag(1049304279) == 0,8, 99993142, -1)
        #crucible knight devonia (all items)
        AddTalkListDataIf(GetEventFlag(1049300279) == 1,8, 16000385, -1)
        #crucible knight devonia (defeated)
        AddTalkListDataIf(GetEventFlag(1049304279) == 1,8, 16000384, -1)
        #death knight scorpion
        AddTalkListDataIf(GetEventFlag(1049304280) == 0,9, 99993114, -1)
        #death knight scorpion (all items)
        AddTalkListDataIf(GetEventFlag(1049300280) == 1,9, 16000349, -1)
        #death knight scorpion (defeated)
        AddTalkListDataIf(GetEventFlag(1049304280) == 1,9, 16000348, -1)
        #ghostflame plain
        AddTalkListDataIf(GetEventFlag(1049304281) == 0,10, 99993139, -1)
        #ghostflame plain (all items)
        AddTalkListDataIf(GetEventFlag(1049300281) == 1,10, 16000337, -1)
        #ghostflame plain (defeated)
        AddTalkListDataIf(GetEventFlag(1049304281) == 1,10, 16000336, -1)
        #ralva
        AddTalkListDataIf(GetEventFlag(1049304282) == 0,11, 99993130, -1)
        #ralva (all items)
        AddTalkListDataIf(GetEventFlag(1049300282) == 1,11, 16000359, -1)
        #ralva (defeated)
        AddTalkListDataIf(GetEventFlag(1049304282) == 1,11, 16000358, -1)
        #rellana
        AddTalkListDataIf(GetEventFlag(1049304283) == 0,12, 16000526, -1)
        #rellana (all items)
        AddTalkListDataIf(GetEventFlag(1049300283) == 1,12, 16000361, -1)
        #rellana (defeated)
        AddTalkListDataIf(GetEventFlag(1049304283) == 1,12, 16000360, -1)
        #gold hippo
        AddTalkListDataIf(GetEventFlag(1049304284) == 0,13, 16000527, -1)
        #gold hippo (all items)
        AddTalkListDataIf(GetEventFlag(1049300284) == 1,13, 16000363, -1)
        #gold hippo (defeated)
        AddTalkListDataIf(GetEventFlag(1049304284) == 1,13, 16000362, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #ancient dragon-man
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302200, 1)
        #black knight edredd
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049302190, 1)
        #count ymir
        elif GetTalkListEntryResult() == 3:
            SetEventFlag(1049302207, 1)
        #dryleaf dane
        elif GetTalkListEntryResult() == 4:
            SetEventFlag(1049302195, 1)
        #blackgaol knight
        elif GetTalkListEntryResult() == 5:
            SetEventFlag(1049302198, 1)
        #black knight garrew
        elif GetTalkListEntryResult() == 6:
            SetEventFlag(1049302191, 1)
        #red bear
        elif GetTalkListEntryResult() == 7:
            SetEventFlag(1049302185, 1)
        #crucible knight devonia
        elif GetTalkListEntryResult() == 8:
            SetEventFlag(1049302208, 1)
        #death knight scorpion
        elif GetTalkListEntryResult() == 9:
            SetEventFlag(1049302186, 1)
        #ghostflame plain
        elif GetTalkListEntryResult() == 10:
            SetEventFlag(1049302181, 1)
        #ralva
        elif GetTalkListEntryResult() == 11:
            SetEventFlag(1049302193, 1)
        #rellana
        elif GetTalkListEntryResult() == 12:
            SetEventFlag(1049302168, 1)
        #gold hippo
        elif GetTalkListEntryResult() == 13:
            SetEventFlag(1049302169, 1)
        else:
            return 0

#tier dlc3
def t324001110_15():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #jagged drake
        AddTalkListDataIf(GetEventFlag(1049304285) == 0,1, 99993136, -1)
        #jagged drake (all items)
        AddTalkListDataIf(GetEventFlag(1049300285) == 1,1, 16000371, -1)
        #jagged drake (defeated)
        AddTalkListDataIf(GetEventFlag(1049304285) == 1,1, 16000370, -1)
        #rugalea
        AddTalkListDataIf(GetEventFlag(1049304286) == 0,2, 99993131, -1)
        #rugalea (all items)
        AddTalkListDataIf(GetEventFlag(1049300286) == 1,2, 16000373, -1)
        #rugalea (defeated)
        AddTalkListDataIf(GetEventFlag(1049304286) == 1,2, 16000372, -1)
        #deathrite charo
        AddTalkListDataIf(GetEventFlag(1049304287) == 0,3, 99993133, -1)
        #deathrite charo (all items)
        AddTalkListDataIf(GetEventFlag(1049300287) == 1,3, 16000367, -1)
        #deathrite charo (defeated)
        AddTalkListDataIf(GetEventFlag(1049304287) == 1,3, 16000366, -1)
        #ghostflame cerulean
        AddTalkListDataIf(GetEventFlag(1049304288) == 0,4, 99993140, -1)
        #ghostflame cerulean (all items)
        AddTalkListDataIf(GetEventFlag(1049300288) == 1,4, 16000365, -1)
        #ghostflame cerulean (defeated)
        AddTalkListDataIf(GetEventFlag(1049304288) == 1,4, 16000364, -1)
        #jori
        AddTalkListDataIf(GetEventFlag(1049304289) == 0,5, 99993115, -1)
        #jori (all items)
        AddTalkListDataIf(GetEventFlag(1049300289) == 1,5, 16000389, -1)
        #jori (defeated)
        AddTalkListDataIf(GetEventFlag(1049304289) == 1,5, 16000388, -1)
        #lamenter
        AddTalkListDataIf(GetEventFlag(1049304290) == 0,6, 99993117, -1)
        #lamenter (all items)
        AddTalkListDataIf(GetEventFlag(1049300290) == 1,6, 16000353, -1)
        #lamenter (defeated)
        AddTalkListDataIf(GetEventFlag(1049304290) == 1,6, 16000352, -1)
        #rakshasa
        AddTalkListDataIf(GetEventFlag(1049304291) == 0,7, 99993123, -1)
        #rakshasa (all items)
        AddTalkListDataIf(GetEventFlag(1049300291) == 1,7, 16000391, -1)
        #rakshasa (defeated)
        AddTalkListDataIf(GetEventFlag(1049304291) == 1,7, 16000390, -1)
        #putrescent
        AddTalkListDataIf(GetEventFlag(1049304292) == 0,8, 16000528, -1)
        #putrescent (all items)
        AddTalkListDataIf(GetEventFlag(1049300292) == 1,8, 16000377, -1)
        #putrescent (defeated)
        AddTalkListDataIf(GetEventFlag(1049304292) == 1,8, 16000376, -1)
        #scadutree
        AddTalkListDataIf(GetEventFlag(1049304293) == 0,9, 16000529, -1)
        #scadutree (all items)
        AddTalkListDataIf(GetEventFlag(1049300293) == 1,9, 16000379, -1)
        #scadutree (defeated)
        AddTalkListDataIf(GetEventFlag(1049304293) == 1,9, 16000378, -1)
        #scadutree
        AddTalkListDataIf(GetEventFlag(1049304294) == 0,10, 16000530, -1)
        #scadutree (all items)
        AddTalkListDataIf(GetEventFlag(1049300294) == 1,10, 16000381, -1)
        #scadutree (defeated)
        AddTalkListDataIf(GetEventFlag(1049304294) == 1,10, 16000380, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #jagged drake
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302196, 1)
        #rugalea
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049302197, 1)
        #deathrite charo
        elif GetTalkListEntryResult() == 3:
            SetEventFlag(1049302194, 1)
        #ghostflame cerulean
        elif GetTalkListEntryResult() == 4:
            SetEventFlag(1049302188, 1)
        #jori
        elif GetTalkListEntryResult() == 5:
            SetEventFlag(1049302199, 1)
        #lamenter
        elif GetTalkListEntryResult() == 6:
            SetEventFlag(1049302189, 1)
        #rakshasa
        elif GetTalkListEntryResult() == 7:
            SetEventFlag(1049302206, 1)
        #putrescent
        elif GetTalkListEntryResult() == 8:
            SetEventFlag(1049302170, 1)
        #scadutree
        elif GetTalkListEntryResult() == 9:
            SetEventFlag(1049302171, 1)
        #commander gaius
        elif GetTalkListEntryResult() == 10:
            SetEventFlag(1049302172, 1)
        else:
            return 0

#tier dlc4
def t324001110_16():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #fallingstar hinter
        AddTalkListDataIf(GetEventFlag(1049304295) == 0,1, 99993134, -1)
        #fallingstar hinter (all items)
        AddTalkListDataIf(GetEventFlag(1049300295) == 1,1, 16000395, -1)
        #fallingstar hinter (defeated)
        AddTalkListDataIf(GetEventFlag(1049304295) == 1,1, 16000394, -1)
        #tree sentinels hinter
        AddTalkListDataIf(GetEventFlag(1049304296) == 0,2, 99993135, -1)
        #tree sentinels hinter (all items)
        AddTalkListDataIf(GetEventFlag(1049300296) == 1,2, 16000399, -1)
        #tree sentinels hinter (defeated)
        AddTalkListDataIf(GetEventFlag(1049304296) == 1,2, 16000398, -1)
        #divine beast dancing lion rauh
        AddTalkListDataIf(GetEventFlag(1049304297) == 0,3, 99993132, -1)
        #divine beast dancing lion rauh (all items)
        AddTalkListDataIf(GetEventFlag(1049300297) == 1,3, 16000393, -1)
        #divine beast dancing lion rauh (defeated)
        AddTalkListDataIf(GetEventFlag(1049304297) == 1,3, 16000392, -1)
        #ghostflame scadu
        AddTalkListDataIf(GetEventFlag(1049304298) == 0,4, 99993141, -1)
        #ghostflame scadu (all items)
        AddTalkListDataIf(GetEventFlag(1049300298) == 1,4, 16000387, -1)
        #ghostflame scadu (defeated)
        AddTalkListDataIf(GetEventFlag(1049304298) == 1,4, 16000386, -1)
        #jagged drake x2
        AddTalkListDataIf(GetEventFlag(1049304299) == 0,5, 99993137, -1)
        #jagged drake x2 (all items)
        AddTalkListDataIf(GetEventFlag(1049300299) == 1,5, 16000397, -1)
        #jagged drake x2 (defeated)
        AddTalkListDataIf(GetEventFlag(1049304299) == 1,5, 16000396, -1)
        #messmer
        AddTalkListDataIf(GetEventFlag(1049304300) == 0,6, 16000531, -1)
        #messmer (all items)
        AddTalkListDataIf(GetEventFlag(1049300300) == 1,6, 16000401, -1)
        #messmer (defeated)
        AddTalkListDataIf(GetEventFlag(1049304300) == 1,6, 16000400, -1)
        #midra
        AddTalkListDataIf(GetEventFlag(1049304301) == 0,7, 16000532, -1)
        #midra (all items)
        AddTalkListDataIf(GetEventFlag(1049300301) == 1,7, 16000405, -1)
        #midra (defeated)
        AddTalkListDataIf(GetEventFlag(1049304301) == 1,7, 16000404, -1)
        #romina
        AddTalkListDataIf(GetEventFlag(1049304302) == 0,8, 16000533, -1)
        #romina (all items)
        AddTalkListDataIf(GetEventFlag(1049300302) == 1,8, 16000407, -1)
        #romina (defeated)
        AddTalkListDataIf(GetEventFlag(1049304302) == 1,8, 16000406, -1)
        #metyr
        AddTalkListDataIf(GetEventFlag(1049304303) == 0,9, 16000534, -1)
        #metyr (all items)
        AddTalkListDataIf(GetEventFlag(1049300303) == 1,9, 16000403, -1)
        #metyr (defeated)
        AddTalkListDataIf(GetEventFlag(1049304303) == 1,9, 16000402, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #fallingstar hinter
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302202, 1)
        #tree sentinels hinter
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049302204, 1)
        #divine beast dancing lion rauh
        elif GetTalkListEntryResult() == 3:
            SetEventFlag(1049302201, 1)
        #ghostflame scadu
        elif GetTalkListEntryResult() == 4:
            SetEventFlag(1049302192, 1)
        #jagged drake x2
        elif GetTalkListEntryResult() == 5:
            SetEventFlag(1049302203, 1)
        #messmer
        elif GetTalkListEntryResult() == 6:
            SetEventFlag(1049302173, 1)
        #midra
        elif GetTalkListEntryResult() == 7:
            SetEventFlag(1049302175, 1)
        #romina
        elif GetTalkListEntryResult() == 8:
            SetEventFlag(1049302176, 1)
        #metyr
        elif GetTalkListEntryResult() == 9:
            SetEventFlag(1049302174, 1)
        else:
            return 0
            
#tier dlc5
def t324001110_17():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #ancient dragon senessax
        AddTalkListDataIf(GetEventFlag(1049304304) == 0,1, 99993138, -1)
        #ancient dragon senessax (all items)
        AddTalkListDataIf(GetEventFlag(1049300304) == 1,1, 16000409, -1)
        #ancient dragon senessax (defeated)
        AddTalkListDataIf(GetEventFlag(1049304304) == 1,1, 16000408, -1)
        #radahn consort of miquella
        AddTalkListDataIf(GetEventFlag(1049304305) == 0,2, 99993112, -1)
        #radahn consort of miquella (all items)
        AddTalkListDataIf(GetEventFlag(1049300305) == 1,2, 16000411, -1)
        #radahn consort of miquella (defeated)
        AddTalkListDataIf(GetEventFlag(1049304305) == 1,2, 16000410, -1)
        #bayle
        AddTalkListDataIf(GetEventFlag(1049304306) == 0,3, 99993110, -1)
        #bayle (all items)
        AddTalkListDataIf(GetEventFlag(1049300306) == 1,3, 16000413, -1)
        #bayle (defeated)
        AddTalkListDataIf(GetEventFlag(1049304306) == 1,3, 16000412, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #ancient dragon senessax
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302205, 1)
        #radahn consort of miquella
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049302177, 1)
        #bayle
        elif GetTalkListEntryResult() == 3:
            SetEventFlag(1049302178, 1)
        else:
            return 0
    
def t324001110_x0():
    """State 0"""
    if not IsClientPlayer():
        """State 1"""
        Label('L0')
        call = t324001110_x1()
        if IsClientPlayer() == 1:
            """State 2"""
            Label('L1')
            call = t324001110_x2()
            if not IsClientPlayer():
                Goto('L0')
            elif IsPlayerDead() == 1:
                pass
        elif IsPlayerDead() == 1:
            pass
    else:
        Goto('L1')
    """State 3"""
    call = t324001110_x4()
    assert not IsPlayerDead()
    Goto('L0')
    """Unused"""
    """State 4"""
    return 0

def t324001110_x1():
    """State 0"""
    while True:
        """State 1"""
        # actionbutton:6000:"Talk"
        call = t324001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000,
                             flag6=6000)
        if call.Done():
            """State 2"""
            call = t324001110_x3()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or IsMultiplayerInProgress() == 1:
                pass
        elif IsMultiplayerInProgress() == 1:
            pass
        """State 3"""
        assert t324001110_x6() and not IsMultiplayerInProgress()
    """Unused"""
    """State 4"""
    return 0

def t324001110_x2():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0
            
def t324001110_x4():
    """State 0,2"""
    assert t324001110_x6()
    """State 1"""
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t324001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
    """State 0"""
    while True:
        """State 1"""
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """State 3"""
        assert (GetEventFlag(flag1) == 1 or GetEventFlag(flag2) == 1 or GetEventFlag(flag3) == 1 or GetEventFlag(flag4)
                == 1 or GetEventFlag(flag5) == 1)
        """State 4"""
        assert not GetEventFlag(flag6)
        """State 2"""
        if GetEventFlag(flag6) == 1:
            pass
        elif (not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not
              IsCharacterDisabled())):
            pass
        elif (not GetEventFlag(flag1) and not GetEventFlag(flag2) and not GetEventFlag(flag3) and not
              GetEventFlag(flag4) and not GetEventFlag(flag5)):
            pass
        # actionbutton:6000:"Talk"
        elif CheckActionButtonArea(actionbutton1):
            break
    """State 5"""
    return 0

def t324001110_x6():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

