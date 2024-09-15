# -*- coding: utf-8 -*-
def t324001110_1():
    """State 0,1"""
    t324001110_x0()
    Quit()
    
def t324001110_x3():
    while True:
        c1_110()
        ClearTalkListData()
        #last boss selected
        AddTalkListData(1, 99998416, -1)
        # action:99996000:"remembrance bosses"
        AddTalkListData(2, 99996000, -1)
        # action:99993021:"great enemies"
        AddTalkListData(3, 99993021, -1)
        # action:99993020:"minor bosses"
        AddTalkListData(4, 99993020, -1)
        #random menu
        AddTalkListData(7, 99998406, -1)
        # action:99998403:"sorting options"
        AddTalkListData(8, 99998403, -1)
        # respawn location options
        AddTalkListData(9, 99998417, -1)
        # reset first encounter flags
        AddTalkListData(10, 99999037, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #last boss selected
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049302260, 1)
        #remembrance bosses
        elif GetTalkListEntryResult() == 2:
            assert t324001110_2()
        #great enemies
        elif GetTalkListEntryResult() == 3:
            assert t324001110_5()
        #minor bosses
        elif GetTalkListEntryResult() == 4:
            assert t324001110_6()
        #random
        elif GetTalkListEntryResult() == 7:
            assert t324001110_16()
        #sorting options
        elif GetTalkListEntryResult() == 8:
            assert t324001110_15()
        #respawn location options
        elif GetTalkListEntryResult() == 9:
            assert t324001110_17()
        # reset first encounter flags
        elif GetTalkListEntryResult() == 10:
            SetEventFlag(1049302243, 1)
            return 0
        else:
            return 0    

def t324001110_15():
    while True:
        c1_110()
        ClearTalkListData()
        # sort by level
        AddTalkListDataIf (GetEventFlag(1049300004) == 0,1, 99998404, -1)
        # sort by level (currently active)
        AddTalkListDataIf (GetEventFlag(1049300004) == 1,1, 99998413, -1)
        # sort by name
        AddTalkListDataIf (GetEventFlag(1049300005) == 0,2, 99998405, -1)
        # sort by name (currently active)
        AddTalkListDataIf (GetEventFlag(1049300005) == 1,2, 99998414, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        if GetTalkListEntryResult() == 1:
            SetEventFlag(1049300004, 1)
            SetEventFlag(1049300005, 0)
            pass
        elif GetTalkListEntryResult() == 2:
            SetEventFlag(1049300005, 1)
            SetEventFlag(1049300004, 0)
            pass
        else:
            return 0
            
def t324001110_17():
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
            
def t324001110_16():
    while True: 
        c1_110()
        ClearTalkListData()
        #random all bosses
        AddTalkListData(1, 99998407, -1)
        #random remembrances
        AddTalkListData(2, 99998408, -1)
        #random great enemies
        AddTalkListData(3, 99998409, -1)
        #random minor bosses
        AddTalkListData(4, 99998410, -1)
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
        else:
            return 0

#remembrance bosses
def t324001110_2():
    while True:
        #ordered by level
        if GetEventFlag(1049300004) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:13040101:"godrick"
            AddTalkListData(1, 13040101, -1)
            # action:13040107:"rennala"
            AddTalkListData(2, 13040107, -1)
            # action:13040112:"regal ancestor"
            AddTalkListData(3, 13040112, -1)
            # action:13040102:"radahn"
            AddTalkListData(4, 13040102, -1)
            # action:13040111:"astel naturalborn"
            AddTalkListData(5, 13040111, -1)
            # action:13040108:"fortissax"
            AddTalkListData(6, 13040108, -1)
            # action:13040103:"morgott"
            AddTalkListData(7, 13040103, -1)
            # action:13040104:"rykard"
            AddTalkListData(8, 13040104, -1)
            # action:13040109:"maliketh"
            AddTalkListData(10, 13040109, -1)
            # action:13040114:"fire giant"
            AddTalkListData(9, 13040114, -1)
            # action:13040113:"hoarah loux"
            AddTalkListData(11, 13040113, -1)
            # action:13040115:"placidusax"
            AddTalkListData(12, 13040115, -1)
            # action:99992008:"radagon+eldenbeast"
            AddTalkListData(13, 99992008, -1)
            # action:13040117:"radagon"
            AddTalkListData(14, 13040117, -1)
            # action:13040116:"elden beast"
            AddTalkListData(15, 13040116, -1)    
            # action:13040105:"mohg lord of blood"
            AddTalkListData(16, 13040105, -1)
            # action:13040106:"malenia"
            AddTalkListData(17, 13040106, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #godrick
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302000, 1)
            #rennala
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302001, 1)
            #regal ancestor
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302002, 1)
            #radahn
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302003, 1)
            #astel
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302004, 1)
            #fortissax
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302005, 1)
            #morgott
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302006, 1)
            #rykard
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302007, 1)
            #fire giant
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302008, 1)
            #maliketh
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302009, 1)
            #hoarah loux
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302010, 1)
            #placidusax
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302011, 1)
            #radagon+elden beast
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302012, 1)
            #radagon
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302013, 1)
            #elden beast
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302014, 1)
            #mohg lord of blood
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302015, 1)
            #malenia
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302016, 1)
            else:
                return 0
        #ordered by name
        elif GetEventFlag(1049300005) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:13040111:"astel naturalborn"
            AddTalkListData(1, 13040111, -1)
            # action:13040109:"maliketh"
            AddTalkListData(2, 13040109, -1)
            # action:13040115:"placidusax"
            AddTalkListData(3, 13040115, -1)
            # action:13040116:"elden beast"
            AddTalkListData(4, 13040116, -1)
            # action:13040114:"fire giant"
            AddTalkListData(5, 13040114, -1)
            # action:13040113:"hoarah loux"
            AddTalkListData(6, 13040113, -1)
            # action:13040101:"godrick"
            AddTalkListData(7, 13040101, -1)
            # action:13040108:"fortissax"
            AddTalkListData(8, 13040108, -1)
            # action:13040106:"malenia"
            AddTalkListData(9, 13040106, -1)
            # action:13040105:"mohg lord of blood"
            AddTalkListData(10, 13040105, -1)
            # action:13040103:"morgott"
            AddTalkListData(11, 13040103, -1)
            # action:99992008:"radagon+eldenbeast"
            AddTalkListData(12, 99992008, -1)
            # action:13040117:"radagon"
            AddTalkListData(13, 13040117, -1)
            # action:13040112:"regal ancestor"
            AddTalkListData(14, 13040112, -1)
            # action:13040107:"rennala"
            AddTalkListData(15, 13040107, -1)
            # action:13040104:"rykard"
            AddTalkListData(16, 13040104, -1)
            # action:13040102:"radahn"
            AddTalkListData(17, 13040102, -1)            
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #astel
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302004, 1)
            #beast clergyman
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302009, 1)
            #dragonlord placidusax
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302011, 1)
            #elden beast
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302014, 1)
            #fire giant
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302008, 1)
            #godfrey/hoarah
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302010, 1)
            #godrick
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302000, 1)
            #lichdragon fortissax
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302005, 1)
            #malenia
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302016, 1)
            #mohg lord of blood
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302015, 1)
            #morgott
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302006, 1)
            #radagon+elden beast
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302012, 1)
            #radagon
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302013, 1)
            #regal ancestor
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302002, 1)
            #rennala
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302001, 1)
            #rykard
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302007, 1)
            #starscourge radahn
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302003, 1)
            else:
                return 0
            
def t324001110_5():
    while True:
        #ordered by level
        if GetEventFlag(1049300004) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:13040132:"leonine misbegotten"
            AddTalkListData(1, 13040161, -1)
            # action:13040127:"margit"
            AddTalkListData(2, 13040127, -1)
            # action:13040131:"dragonkin soldier of nokstella"
            AddTalkListData(3, 13040131, -1)
            # action:13040134:"agheel"
            AddTalkListData(4, 13040134, -1)
            # action:13040128:"ancestor spirit"
            AddTalkListData(5, 13040128, -1)
            # action:13040133:"red wolf of radagon"
            AddTalkListData(6, 13040133, -1)
            # action:13040126:"loretta caria"
            AddTalkListData(7, 13040126, -1)
            # action:13040141:"makar"
            AddTalkListData(8, 13040141, -1)
            # action:13040122:"elemer"
            AddTalkListData(11, 13040122, -1)
            # action:13040124:"o'neil"
            AddTalkListData(10, 13040124, -1)
            # action:99992007:"dragonkin soldier (siofra)"
            AddTalkListData(15, 99992007, -1)
            # action:13040136:"smarag"
            AddTalkListData(12, 13040136, -1)
            # action:13040155:"mimic tear"
            AddTalkListData(13, 13040155, -1)
            # action:99990207:"misbegotten warrior + crucible knight"
            AddTalkListData(9, 99990207, -1)
            # action:13040118:"goldfrey"
            AddTalkListData(17, 13040118, -1)
            # action:13040142:"godskin noble (volcano)"
            AddTalkListData(18, 13040142, -1)
            # action:13040145:"crucible knight siluria"
            AddTalkListData(23, 13040145, -1)
            # action:15000378:"fia's champions"
            AddTalkListData(16, 15000378, -1)
            # action:20000001:"magma wyrm (gelmir)"
            AddTalkListData(19, 20000001, -1)
            # action:13040121:"valiant gargoyles"
            AddTalkListData(20, 13040121, -1)
            # action:99992004:"lansseax"        
            AddTalkListData(21, 99992004, -1)
            # action:13040129:"dragonkin soldier (lake of rot)"
            AddTalkListData(24, 13040129, -1)
            # action:13040123:"niall"
            AddTalkListData(22, 13040123, -1)
            # action:13040138:"ekzykes"
            AddTalkListData(14, 13040138, -1)
            # action:13040144:"mohg the omen"
            AddTalkListData(25, 13040144, -1)
            # action:13040143:"godskin apostle (caelid)"
            AddTalkListData(27, 13040143, -1)
            # action:13040148:"greyll"
            AddTalkListData(30, 13040148, -1)
            # action:13040135:"adula"
            AddTalkListData(31, 13040135, -1)
            # action:13040119:"godskin duo"
            AddTalkListData(26, 13040119, -1)
            # action:13040146:"gideon"
            AddTalkListData(28, 13040146, -1)
            # action:13040137:"borealis"
            AddTalkListData(29, 13040137, -1)
            # action:13040125:"loretta haligtree"
            AddTalkListData(33, 13040125, -1)
            # action:13040139:"great wyrm theodorix"
            AddTalkListData(32, 13040139, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #leonine
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302017, 1)
            #margit
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302018, 1)
            #dragonkin nokstella
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302019, 1)
            #agheel
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302020, 1)
            #ancestor spirit
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302021, 1)
            #red wolf of radagon
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302022, 1)
            #loretta (caria)
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302023, 1)
            #makar
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302024, 1)
            #misbegotten+crucible
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302025, 1)
            #o'neil
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302026, 1)
            #elemer
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302027, 1)
            #smarag
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302028, 1)
            #mimic tear
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302029, 1)
            #ekzykes
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302030, 1)
            #dragonkin siofra
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302031, 1)
            #fia's champs
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302032, 1)
            #goldfrey
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302033, 1)
            #godskin noble (volcano)
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302034, 1)
            #magma wyrm gelmir
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302035, 1)
            #valiant gargoyles
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302036, 1)
            #lansseax
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302037, 1)
            #commander niall
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302040, 1)
            #crucible knight siluria
            elif GetTalkListEntryResult() == 23:
                SetEventFlag(1049302041, 1)
            #dragonkin soldier (rot)
            elif GetTalkListEntryResult() == 24:
                SetEventFlag(1049302038, 1)
            #mohg (sewers)
            elif GetTalkListEntryResult() == 25:
                SetEventFlag(1049302039, 1)
            #godskin duo
            elif GetTalkListEntryResult() == 26:
                SetEventFlag(1049302042, 1)
            #godskin apostle (caelid)
            elif GetTalkListEntryResult() == 27:
                SetEventFlag(1049302043, 1)
            #gideon
            elif GetTalkListEntryResult() == 28:
                SetEventFlag(1049302044, 1)
            #borealis
            elif GetTalkListEntryResult() == 29:
                SetEventFlag(1049302045, 1)
            #greyll
            elif GetTalkListEntryResult() == 30:
                SetEventFlag(1049302046, 1)
            #adula
            elif GetTalkListEntryResult() == 31:
                SetEventFlag(1049302047, 1)
            #great wyrm theodorix
            elif GetTalkListEntryResult() == 32:
                SetEventFlag(1049302049, 1)
            #loretta halig
            elif GetTalkListEntryResult() == 33:
                SetEventFlag(1049302048, 1)
            else:
                return 0
        #ordered by name
        elif GetEventFlag(1049300005) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:13040128:"ancestor spirit"
            AddTalkListData(1, 13040128, -1)
            # action:99992004:"lansseax"
            AddTalkListData(2, 99992004, -1)
            # action:13040137:"borealis"
            AddTalkListData(3, 13040137, -1)
            # action:13040123:"niall"
            AddTalkListData(4, 13040123, -1)
            # action:13040124:"o'neil"
            AddTalkListData(5, 13040124, -1)
            # action:13040145:"crucible knight siluria"
            AddTalkListData(6, 13040145, -1)
            # action:13040138:"ekzykes"
            AddTalkListData(7, 13040138, -1)
            # action:13040131:"dragonkin soldier of nokstella"
            AddTalkListData(8, 13040131, -1)
            # action:99992007:"dragonkin soldier (siofra)"
            AddTalkListData(9, 99992007, -1)
            # action:13040129:"dragonkin soldier (lake of rot)"
            AddTalkListData(10, 13040129, -1)
            # action:13040122:"elemer"
            AddTalkListData(11, 13040122, -1)
            # action:15000378:"fia's champions"
            AddTalkListData(12, 15000378, -1)
            # action:13040134:"agheel"
            AddTalkListData(13, 13040134, -1)
            # action:13040148:"greyll"
            AddTalkListData(14, 13040148, -1)
            # action:13040136:"smarag"
            AddTalkListData(15, 13040136, -1)
            # action:13040135:"adula"
            AddTalkListData(16, 13040135, -1)
            # action:13040118:"goldfrey"
            AddTalkListData(17, 13040118, -1)
            # action:13040143:"godskin apostle (caelid)"
            AddTalkListData(18, 13040143, -1)
            # action:13040119:"godskin duo"
            AddTalkListData(19, 13040119, -1)
            # action:13040142:"godskin noble (volcano)"
            AddTalkListData(20, 13040142, -1)
            # action:13040139:"great wyrm theodorix"
            AddTalkListData(21, 13040139, -1)
            # action:13040132:"leonine misbegotten"
            AddTalkListData(22, 13040161, -1)
            # action:13040125:"loretta haligtree"
            AddTalkListData(23, 13040125, -1)
            # action:13040141:"makar"
            AddTalkListData(24, 13040141, -1)
            # action:20000001:"magma wyrm (gelmir)"
            AddTalkListData(25, 20000001, -1)
            # action:13040127:"margit"
            AddTalkListData(26, 13040127, -1)
            # action:13040155:"mimic tear"
            AddTalkListData(27, 13040155, -1)
            # action:99990207:"misbegotten warrior + crucible knight"
            AddTalkListData(28, 99990207, -1)
            # action:13040144:"mohg the omen"
            AddTalkListData(29, 13040144, -1)
            # action:13040133:"red wolf of radagon"
            AddTalkListData(30, 13040133, -1)
            # action:13040126:"loretta caria"
            AddTalkListData(31, 13040126, -1)
            # action:13040146:"gideon"
            AddTalkListData(32, 13040146, -1)
            # action:13040121:"valiant gargoyles"
            AddTalkListData(33, 13040121, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #ancestor spirit
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302021, 1)
            #ancient dragon lansseax
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302037, 1)
            #borealis
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302045, 1)
            #commander niall
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302040, 1)
            #commander o'neil
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302026, 1)
            #crucible knight siluria
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302041, 1)
            #decaying ekzykes
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302030, 1)
            #dragonkin nokstella
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302019, 1)
            #dragonkin (siofra)
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302031, 1)
            #dragonkin (rot)
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302038, 1)
            #elemer
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302027, 1)
            #fia's champs
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302032, 1)
            #flying dragon agheel
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302020, 1)
            #flying dragon greyll
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302046, 1)
            #glintstone dragon smarag
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302028, 1)
            #glintstone dragon adula
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302047, 1)
            #godfrey golden shade
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302033, 1)
            #godskin apostle (caelid)
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302043, 1)
            #godskin duo
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302042, 1)
            #godskin noble
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302034, 1)
            #great wyrm theodorix
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302049, 1)
            #leonine
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302017, 1)
            #loretta halig
            elif GetTalkListEntryResult() == 23:
                SetEventFlag(1049302048, 1)
            #magma wyrm makar
            elif GetTalkListEntryResult() == 24:
                SetEventFlag(1049302024, 1)
            #magma wyrm (gelmir)
            elif GetTalkListEntryResult() == 25:
                SetEventFlag(1049302035, 1)
            #margit
            elif GetTalkListEntryResult() == 26:
                SetEventFlag(1049302018, 1)
            #mimic tear
            elif GetTalkListEntryResult() == 27:
                SetEventFlag(1049302029, 1)
            #misbegotten+crucible
            elif GetTalkListEntryResult() == 28:
                SetEventFlag(1049302025, 1)
            #mohg
            elif GetTalkListEntryResult() == 29:
                SetEventFlag(1049302039, 1)
            #red wolf of radagon
            elif GetTalkListEntryResult() == 30:
                SetEventFlag(1049302022, 1)
            #royal knight loretta
            elif GetTalkListEntryResult() == 31:
                SetEventFlag(1049302023, 1)
            #sir gideon ofnir
            elif GetTalkListEntryResult() == 32:
                SetEventFlag(1049302044, 1)
            #valiant gargs
            elif GetTalkListEntryResult() == 33:
                SetEventFlag(1049302036, 1)
            else:
                return 0

def t324001110_6():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        # action:99993019:"overworld"
        AddTalkListData(1, 99993019, -1)
        # action:99993018:"evergaols"
        AddTalkListData(2, 99993018, -1)
        # action:99993017:"catacombs"
        AddTalkListData(3, 99993017, -1)
        # action:99993016:"caves"
        AddTalkListData(4, 99993016, -1)
        # action:99993015:"tunnels/ruins"
        AddTalkListData(5, 99993015, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 26000004, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        if GetTalkListEntryResult() == 1:
            assert t324001110_7()
        elif GetTalkListEntryResult() == 2:
            assert t324001110_8()
        elif GetTalkListEntryResult() == 3:
            assert t324001110_9()
        elif GetTalkListEntryResult() == 4:
            assert t324001110_10()
        elif GetTalkListEntryResult() == 5:
            assert t324001110_11()
        else:
            return 0

def t324001110_7():
    while True:
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #ordered by level
        if GetEventFlag(1049300004) == 1:
            # action:15000529:"deathbird (limgrave)"
            AddTalkListData(1, 15000529, -1)
            # action:15000537:"night's cavalry (limgrave)"
            AddTalkListData(3, 15000537, -1)
            # action:13040157:"tibia mariner (limgrave)"
            AddTalkListData(4, 13040157, -1)
            # action:13040153:"tree sentinel (limgrave)"
            AddTalkListData(5, 13040153, -1)
            # action:13040158:"bell bearing hunter (limgrave)"
            AddTalkListData(2, 13040158, -1)
            # action:13040152:"deathbird (weeping)"
            AddTalkListData(6, 13040152, -1)
            # action:15000373:"erdtree avatar (weeping)"
            AddTalkListData(7, 15000373, -1)
            # action:15000538:"night's cavalry (weeping)"
            AddTalkListData(8, 15000538, -1)
            # action:13040156:"grafted scion (chapel)"
            AddTalkListData(9, 13040156, -1)
            # action:15000375:"omenkiller (albinaurics)"
            AddTalkListData(18, 15000375, -1)
            # action:15000531:"deahbird (liurnia)"
            AddTalkListData(12, 15000531, -1)
            # action:15000539:"night's cavalry (liurnia east)"
            AddTalkListData(16, 15000539, -1)
            # action:15000381:"nox swordstress and monk"
            AddTalkListData(10, 15000381, -1)
            # action:15000708:"bell bearing hunter (liurnia)"
            AddTalkListData(11, 15000708, -1)
            # action:15000533:"death rite bird (liurnia)"
            AddTalkListData(13, 15000533, -1)
            # action:15000524:"erdtree avatar (liurnia west)"
            AddTalkListData(14, 15000524, -1)
            # action:15000525:"erdtree avatar (liurnia east)"
            AddTalkListData(15, 15000525, -1)
            # action:15000701:"night's cavalry (liurnia north)"
            AddTalkListData(17, 15000701, -1)
            # action:15000706:"tibia mariner (liurnia)"
            AddTalkListData(19, 15000706, -1)
            # action:15000534:"death rite bird (caelid)"
            AddTalkListData(20, 15000534, -1)
            # action:15000702:"night's cavalry (caelid)"
            AddTalkListData(21, 15000702, -1)
            # action:15000374:"putrid avatar (caelid)"
            AddTalkListData(22, 15000374, -1)
            # action:15000374:"bk assassin (altus)"
            AddTalkListData(23, 15000461, -1)
            # action:15000377:"giant wormface"
            AddTalkListData(25, 15000377, -1)
            # action:99992005:"godskin apostle (altus)"
            AddTalkListData(26, 99992005, -1)
            # action:15000703:"night's cavalry (altus)"
            AddTalkListData(27, 15000703, -1)
            # action:15000456:"tree sentinels (altus)"
            AddTalkListData(28, 15000456, -1)
            # action:15000709:"bell bearing hunter (outskirts)"
            AddTalkListData(29, 15000709, -1)
            # action:15000532:"deathbird (outskirts)"
            AddTalkListData(30, 15000532, -1)
            # action:15000376:"demi-human queen maggie"
            AddTalkListData(31, 15000376, -1)
            # action:13040154:"draconic tree sentinel"
            AddTalkListData(32, 13040154, -1)
            # action:15000719:"fallingstar beast (altus)"
            AddTalkListData(24, 15000719, -1)
            # action:15000707:"tibia mariner (altus)"
            AddTalkListData(33, 15000707, -1)
            # action:15000536:"ulcerated tree spirit (gelmir)"
            AddTalkListData(34, 15000536, -1)
            # action:20000002:"black blade kindred (forbidden lands)"
            AddTalkListData(35, 20000002, -1)
            # action:15000379:"fell twins"
            AddTalkListData(36, 15000379, -1)
            # action:13040151:"death rite bird (mountaintops"
            AddTalkListData(38, 13040151, -1)
            # action:15000526:"erdtree avatar (mountaintops)"
            AddTalkListData(39, 15000526, -1)
            # action:13040149:"fullgrown fallingstar beast"
            AddTalkListData(37, 13040149, -1)
            # action:15000704:"night's cavalry (forbidden lands)"
            AddTalkListData(40, 15000704, -1)
            # action:15000718:"bell bearing hunter (dragonbarrow)"
            AddTalkListData(41, 15000718, -1)
            # action:13040159:"night's cavalry (dragonbarrow)"
            AddTalkListData(43, 13040159, -1)
            # action:15000527:"putrid avatar (dragonbarrow)"
            AddTalkListData(44, 15000527, -1)
            # action:13040147:"black blade kindred (dragonbarrow)"
            AddTalkListData(42, 13040147, -1)
            # action:15000705:"night's cavalry (snowfield)"
            AddTalkListData(46, 15000705, -1)
            # action:15000528:"putrid avatar (snowfield)"
            AddTalkListData(47, 15000528, -1)
            # action:15000535:"death rite bird (snowfield)"
            AddTalkListData(45, 15000535, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #deathbird limgrave
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302051, 1)
            #night's cavalry limgrave
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302052, 1)
            #tibia limgrave
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302053, 1)
            #tree sentinel
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302054, 1)
            #bell bearing limgrave
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302050, 1)
            #deathbird weeping
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302055, 1)
            #erdtree avatar weeping
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302056, 1)
            #night's cavalry weeping
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302057, 1)
            #grafted scion
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302058, 1)
            #nox duo
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302059, 1)
            #bell bearing liurnia
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302060, 1)
            #deathbird liurnia
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302061, 1)
            #deathrite liurnia
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302062, 1)
            #erdtree avatar liurnia west
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302063, 1)
            #erdtree avatar liurnia east
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302064, 1)
            #night's cavalry liurnia east
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302070, 1)
            #night's cavalry liurnia north
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302065, 1)
            #omenkiller
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302066, 1)
            #tibia liurnia
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302067, 1)
            #deathrite caelid
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302068, 1)
            #night's cavalry caelid
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302069, 1)
            #putrid avatar caelid
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302071, 1)
            #black knife assassin (altus)
            elif GetTalkListEntryResult() == 23:
                SetEventFlag(1049302072, 1)
            #fallingstar altus
            elif GetTalkListEntryResult() == 24:
                SetEventFlag(1049302073, 1)
                #giant wormface
            elif GetTalkListEntryResult() == 25:
                SetEventFlag(1049302075, 1)
            #godskin apostle altus
            elif GetTalkListEntryResult() == 26:
                SetEventFlag(1049302074, 1)
            #night's cavalry altus
            elif GetTalkListEntryResult() == 27:
                SetEventFlag(1049302076, 1)
            #tree sentinels altus
            elif GetTalkListEntryResult() == 28:
                SetEventFlag(1049302077, 1)
            #bell bearing outskirts
            elif GetTalkListEntryResult() == 29:
                SetEventFlag(1049302078, 1)
            #deathbird outskirts
            elif GetTalkListEntryResult() == 30:
                SetEventFlag(1049302079, 1)
            #demi-human queen maggie
            elif GetTalkListEntryResult() == 31:
                SetEventFlag(1049302080, 1)
            #draconic sentinel
            elif GetTalkListEntryResult() == 32:
                SetEventFlag(1049302081, 1)
            #tibia altus
            elif GetTalkListEntryResult() == 33:
                SetEventFlag(1049302082, 1)
            #ulcerated tree spirit gelmir
            elif GetTalkListEntryResult() == 34:
                SetEventFlag(1049302083, 1)
            #black blade kindred forbidden
            elif GetTalkListEntryResult() == 35:
                SetEventFlag(1049302084, 1)
            #fell twins
            elif GetTalkListEntryResult() == 36:
                SetEventFlag(1049302085, 1)
            #fullgrown fallingstar
            elif GetTalkListEntryResult() == 37:
                SetEventFlag(1049302086, 1)
            #deathrite mountaintops
            elif GetTalkListEntryResult() == 38:
                SetEventFlag(1049302087, 1)
            #erdtree avatar mountaintops
            elif GetTalkListEntryResult() == 39:
                SetEventFlag(1049302088, 1)
            #night's cavalry forbidden
            elif GetTalkListEntryResult() == 40:
                SetEventFlag(1049302089, 1)
            #bell bearing dragonbarrow
            elif GetTalkListEntryResult() == 41:
                SetEventFlag(1049302090, 1)
            #black blade kindred dragonbarrow
            elif GetTalkListEntryResult() == 42:
                SetEventFlag(1049302091, 1)
            #night's cavalry dragonbarrow
            elif GetTalkListEntryResult() == 43:
                SetEventFlag(1049302092, 1)
            #putrid avatar dragonbarrow
            elif GetTalkListEntryResult() == 44:
                SetEventFlag(1049302093, 1)
            #deathrite snowfield
            elif GetTalkListEntryResult() == 45:
                SetEventFlag(1049302094, 1)
            #night's cavalry snowfield
            elif GetTalkListEntryResult() == 46:
                SetEventFlag(1049302095, 1)
            #putrid avatar snowfield
            elif GetTalkListEntryResult() == 47:
                SetEventFlag(1049302096, 1)
            else:
                return 0
        #ordered by name
        elif GetEventFlag(1049300005) == 1:
            # action:13040158:"bell bearing hunter (limgrave)"
            AddTalkListData(1, 13040158, -1)
            # action:15000708:"bell bearing hunter (liurnia)"
            AddTalkListData(2, 15000708, -1)
            # action:15000709:"bell bearing hunter (outskirts)"
            AddTalkListData(3, 15000709, -1)
            # action:15000718:"bell bearing hunter (dragonbarrow)"
            AddTalkListData(4, 15000718, -1)
            # action:20000002:"black blade kindred (forbidden lands)"
            AddTalkListData(5, 20000002, -1)
            # action:13040147:"black blade kindred (dragonbarrow)"
            AddTalkListData(6, 13040147, -1)
            # action:15000374:"bk assassin (altus)"
            AddTalkListData(7, 15000461, -1)
            # action:15000529:"deathbird (limgrave)"
            AddTalkListData(8, 15000529, -1)
            # action:13040152:"deathbird (weeping)"
            AddTalkListData(9, 13040152, -1)
            # action:15000531:"deahbird (liurnia)"
            AddTalkListData(10, 15000531, -1)
            # action:15000532:"deathbird (outskirts)"
            AddTalkListData(11, 15000532, -1)
            # action:15000533:"death rite bird (liurnia)"
            AddTalkListData(12, 15000533, -1)
            # action:15000534:"death rite bird (caelid)"
            AddTalkListData(13, 15000534, -1)
            # action:13040151:"death rite bird (mountaintops)"
            AddTalkListData(14, 13040151, -1)
            # action:15000535:"death rite bird (snowfield)"
            AddTalkListData(15, 15000535, -1)
            # action:15000376:"demi-human queen maggie"
            AddTalkListData(16, 15000376, -1)
            # action:13040154:"draconic tree sentinel"
            AddTalkListData(17, 13040154, -1)
            # action:15000373:"erdtree avatar (weeping)"
            AddTalkListData(18, 15000373, -1)
            # action:15000525:"erdtree avatar (liurnia east)"
            AddTalkListData(19, 15000525, -1)
            # action:15000524:"erdtree avatar (liurnia west)"
            AddTalkListData(20, 15000524, -1)
            # action:15000526:"erdtree avatar (mountaintops)"
            AddTalkListData(21, 15000526, -1)
            # action:15000719:"fallingstar beast (altus)"
            AddTalkListData(22, 15000719, -1)
            # action:15000379:"fell twins"
            AddTalkListData(23, 15000379, -1)
            # action:13040149:"fullgrown fallingstar beast"
            AddTalkListData(24, 13040149, -1)
            # action:15000377:"giant wormface"
            AddTalkListData(25, 15000377, -1)
            # action:99992005:"godskin apostle (altus)"
            AddTalkListData(26, 99992005, -1)
            # action:13040156:"grafted scion (chapel)"
            AddTalkListData(27, 13040156, -1)
            # action:15000537:"night's cavalry (limgrave)"
            AddTalkListData(28, 15000537, -1)
            # action:15000538:"night's cavalry (weeping)"
            AddTalkListData(29, 15000538, -1)
            # action:15000539:"night's cavalry (liurnia east)"
            AddTalkListData(30, 15000539, -1)
            # action:15000701:"night's cavalry (liurnia north)"
            AddTalkListData(31, 15000701, -1)
            # action:15000702:"night's cavalry (caelid)"
            AddTalkListData(32, 15000702, -1)
            # action:15000703:"night's cavalry (altus)"
            AddTalkListData(33, 15000703, -1)
            # action:15000704:"night's cavalry (forbidden lands)"
            AddTalkListData(34, 15000704, -1)
            # action:13040159:"night's cavalry (dragonbarrow)"
            AddTalkListData(35, 13040159, -1)
            # action:15000705:"night's cavalry (snowfield)"
            AddTalkListData(36, 15000705, -1)
            # action:15000381:"nox swordstress and monk"
            AddTalkListData(37, 15000381, -1)
            # action:15000375:"omenkiller (albinaurics)"
            AddTalkListData(38, 15000375, -1)
            # action:15000374:"putrid avatar (caelid)"
            AddTalkListData(39, 15000374, -1)
            # action:15000527:"putrid avatar (dragonbarrow)"
            AddTalkListData(40, 15000527, -1)
            # action:15000528:"putrid avatar (snowfield)"
            AddTalkListData(41, 15000528, -1)
            # action:13040157:"tibia mariner (limgrave)"
            AddTalkListData(42, 13040157, -1)
            # action:15000706:"tibia mariner (liurnia)"
            AddTalkListData(43, 15000706, -1)
            # action:15000707:"tibia mariner (altus)"
            AddTalkListData(44, 15000707, -1)
            # action:13040153:"tree sentinel (limgrave)"
            AddTalkListData(45, 13040153, -1)
            # action:15000456:"tree sentinels (altus)"
            AddTalkListData(46, 15000456, -1)
            # action:15000536:"ulcerated tree spirit (gelmir)"
            AddTalkListData(47, 15000536, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #bell bearing limgrave
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302050, 1)
            #bell bearing liurnia
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302060, 1)
            #bell bearing outskirts
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302078, 1)
            #bell bearing dragonbarrow
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302090, 1)
            #black blade kindred forbidden
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302084, 1)
            #black blade kindred dragonbarrow
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302091, 1)
            #black knife assassin (altus)
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302072, 1)
            #deathbird limgrave
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302051, 1)
            #deathbird weeping
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302055, 1)
            #deathbird liurnia
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302061, 1)
            #deathbird outskirts
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302079, 1)
            #deathrite liurnia
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302062, 1)
            #deathrite caelid
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302068, 1)
            #deathrite mountaintops
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302087, 1)
            #deathrite snowfield
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302094, 1)
            #demi-human queen maggie
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302080, 1)
            #draconic sentinel
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302081, 1)
            #erdtree avatar weeping
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302056, 1)
            #erdtree avatar liurnia east
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302064, 1)
            #erdtree avatar liurnia west
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302063, 1)
            #erdtree avatar mountaintops
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302088, 1)
            #fallingstar altus
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302073, 1)
            #fell twins
            elif GetTalkListEntryResult() == 23:
                SetEventFlag(1049302085, 1)
            #fullgrown fallingstar
            elif GetTalkListEntryResult() == 24:
                SetEventFlag(1049302086, 1)
            #giant wormface
            elif GetTalkListEntryResult() == 25:
                SetEventFlag(1049302075, 1)
            #godskin apostle altus
            elif GetTalkListEntryResult() == 26:
                SetEventFlag(1049302074, 1)
            #grafted scion
            elif GetTalkListEntryResult() == 27:
                SetEventFlag(1049302058, 1)
            #night's cavalry limgrave
            elif GetTalkListEntryResult() == 28:
                SetEventFlag(1049302052, 1)
            #night's cavalry weeping
            elif GetTalkListEntryResult() == 29:
                SetEventFlag(1049302057, 1)
            #night's cavalry liurnia east
            elif GetTalkListEntryResult() == 30:
                SetEventFlag(1049302070, 1)
            #night's cavalry liurnia north
            elif GetTalkListEntryResult() == 31:
                SetEventFlag(1049302065, 1)
            #night's cavalry caelid
            elif GetTalkListEntryResult() == 32:
                SetEventFlag(1049302069, 1)
            #night's cavalry altus
            elif GetTalkListEntryResult() == 33:
                SetEventFlag(1049302076, 1)
            #night's cavalry forbidden
            elif GetTalkListEntryResult() == 34:
                SetEventFlag(1049302089, 1)
            #night's cavalry dragonbarrow
            elif GetTalkListEntryResult() == 35:
                SetEventFlag(1049302092, 1)
            #night's cavalry snowfield
            elif GetTalkListEntryResult() == 36:
                SetEventFlag(1049302095, 1)
            #nox duo
            elif GetTalkListEntryResult() == 37:
                SetEventFlag(1049302059, 1)
            #omenkiller
            elif GetTalkListEntryResult() == 38:
                SetEventFlag(1049302066, 1)
            #putrid avatar caelid
            elif GetTalkListEntryResult() == 39:
                SetEventFlag(1049302071, 1)
            #putrid avatar dragonbarrow
            elif GetTalkListEntryResult() == 40:
                SetEventFlag(1049302093, 1)
            #putrid avatar snowfield
            elif GetTalkListEntryResult() == 41:
                SetEventFlag(1049302096, 1)
            #tibia limgrave
            elif GetTalkListEntryResult() == 42:
                SetEventFlag(1049302053, 1)
            #tibia liurnia
            elif GetTalkListEntryResult() == 43:
                SetEventFlag(1049302067, 1)
            #tibia altus
            elif GetTalkListEntryResult() == 44:
                SetEventFlag(1049302082, 1)
            #tree sentinel
            elif GetTalkListEntryResult() == 45:
                SetEventFlag(1049302054, 1)
            #tree sentinels altus
            elif GetTalkListEntryResult() == 46:
                SetEventFlag(1049302077, 1)
            #ulcerated tree spirit gelmir
            elif GetTalkListEntryResult() == 47:
                SetEventFlag(1049302083, 1)
            else:
                return 0

def t324001110_8():
    while True:
        #ordered by level
        if GetEventFlag(1049300004) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000382:"darriwil"
            AddTalkListData(1, 15000382, -1)
            # action:15000384:"ancient hero of zamor"
            AddTalkListData(2, 15000384, -1)
            # action:15000383:"crucible knight"
            AddTalkListData(3, 15000383, -1)
            # action:15000386:"adan"
            AddTalkListData(4, 15000386, -1)
            # action:15000387:"bols"
            AddTalkListData(5, 15000387, -1)
            # action:15000388:"onyx lord"
            AddTalkListData(6, 15000388, -1)
            # action:15000389:"hugues"
            AddTalkListData(7, 15000389, -1)
            # action:15000391:"godefroy"
            AddTalkListData(8, 15000392, -1)
            # action:15000392:"vyke"
            AddTalkListData(9, 15000391, -1)
            # action:15000393:"alecto"
            AddTalkListData(10, 15000393, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #bloodhound knight darriwil
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302097, 1)
            #ancient hero of zamor gaol 
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302098, 1)
            #crucible knight gaol
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302099, 1)
            #adan
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302100, 1)
            #bols
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302101, 1)
            #onyx lord gaol
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302102, 1)
            #battlemage hugues
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302103, 1)
            #godefroy
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302105, 1)
            #roundtable knight vyke
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302104, 1)
            #alecto
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302106, 1)
            else:
                return 0
        #ordered by name
        elif GetEventFlag(1049300005) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000386:"adan"
            AddTalkListData(1, 15000386, -1)
            # action:15000393:"alecto"
            AddTalkListData(2, 15000393, -1)
            # action:15000384:"ancient hero of zamor"
            AddTalkListData(3, 15000384, -1)
            # action:15000389:"hugues"
            AddTalkListData(4, 15000389, -1)
            # action:15000382:"darriwil"
            AddTalkListData(5, 15000382, -1)
            # action:15000387:"bols"
            AddTalkListData(6, 15000387, -1)
            # action:15000383:"crucible knight"
            AddTalkListData(7, 15000383, -1)
            # action:15000392:"godefroy"
            AddTalkListData(8, 15000392, -1)
            # action:15000388:"onyx lord"
            AddTalkListData(9, 15000388, -1)
            # action:15000391:"vyke"
            AddTalkListData(10, 15000391, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #adan
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302100, 1)
            #alecto
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302106, 1)
            #ancient hero of zamor gaol 
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302098, 1)
            #battlemage hugues
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302103, 1)
            #bloodhound knight darriwil
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302097, 1)
            #bols
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302101, 1)
            #crucible knight gaol
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302099, 1)
            #godefroy
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302105, 1)
            #onyx lord gaol
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302102, 1)
            #roundtable knight vyke
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302104, 1)
            else:
                return 0

def t324001110_9():
    while True:
        #ordered by level
        if GetEventFlag(1049300004) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000523:"black knife (deathtouched)"
            AddTalkListData(1, 15000523, -1)
            # action:15000426:"erdtree burial watchdog (stormfoot)"
            AddTalkListData(2, 15000426, -1)
            # action:15000421:"grave warden duelist (murkwater)"
            AddTalkListData(3, 15000421, -1)
            # action:99992002:"cemetery shade (tombsward)"
            AddTalkListData(4, 99992002, -1)
            # action:15000427:"erdtree burial watchdog (impaler's)"
            AddTalkListData(5, 15000427, -1)
            # action:15000423:"black knife (black knife)"
            AddTalkListData(6, 15000423, -1)
            # action:99992003:"cemetery shade (black knife)"
            AddTalkListData(7, 99992003, -1)
            # action:15000428:"erdtree burial watchdog (cliffbottom)"
            AddTalkListData(8, 15000428, -1)
            # action:15000431:"spiritcaller snail (road's end)"
            AddTalkListData(9, 15000431, -1)
            # action:15000519:"ulcerated tree spirit (fringefolk hero)"
            AddTalkListData(10, 15000519, -1)
            # action:15000424:"cemetery shade (caelid)"
            AddTalkListData(11, 15000424, -1)
            # action:15000429:"erdtree burial watchdog (minor erdtree)"
            AddTalkListData(12, 15000429, -1)
            # action:15000521:"ancient hero of zamor (sainted hero's)"
            AddTalkListData(13, 15000521, -1)
            # action:15000436:"tricia"
            AddTalkListData(14, 15000436, -1)
            # action:15000435:"red wolf of the champion"
            AddTalkListData(17, 15000435, -1)
            # action:15000518:"erdtree burial watchdog (wyndham)"
            AddTalkListData(15, 15000518, -1)
            # action:99990300:"grave warden duelist (auriza)"
            AddTalkListData(16, 99990300, -1)
            # action:15000522:"ancient hero of zamor (giant conquering)"
            AddTalkListData(19, 15000522, -1)
            # action:15000434:"esgar"
            AddTalkListData(21, 15000434, -1)
            # action:15000425:"ulcerated tree spirit (giants' mountaintops)"
            AddTalkListData(20, 15000425, -1)
            # action:15000433:"ordovis"
            AddTalkListData(18, 15000433, -1)
            # action:15000422:"grave warden duelist (snowfield catacombs)"
            AddTalkListData(24, 15000422, -1)
            # action:15000432:"putrid tree spirit"
            AddTalkListData(22, 15000432, -1)
            # action:99992000:"stray mimic tear"
            AddTalkListData(23, 99992000, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #black knife assassin deathtouched
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302107, 1)
            #erdtree burial watchdog stormfoot
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302108, 1)
            #grave warden duelist murkwater
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302109, 1)
            #cemetery shade tombsward
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302110, 1)
            #erdtree burial watchdog impaler's
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302111, 1)
            #black knife assassin black knife
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302112, 1)
            #cemetery shade black knife
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302113, 1)
            #erdtree burial watchdog cliffbottom
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302114, 1)
            #spiritcaller snail road's end
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302115, 1)
            #ulcerated tree spirit fringefolk
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302116, 1)
            #cemetery shade caelid
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302117, 1)
            #erdtree burial watchdog x2 minor erdtree
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302118, 1)
            #ancient hero of zamor sainted hero
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302119, 1)
            #perfumer tricia
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302120, 1)
            #erdtree burial watchdog wyndham
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302121, 1)
            #grave warden duelist auriza
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302122, 1)
            #red wolf of the champion
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302123, 1)
            #crucible knight ordovis
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302124, 1)
            #ancient hero of zamor mountaintops
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302125, 1)
            #ulcerated tree spirit mountaintops
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302126, 1)
            #esgar
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302127, 1)
            #putrid tree spirit wardead
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302128, 1)
            #stray mimic
            elif GetTalkListEntryResult() == 23:
                SetEventFlag(1049302129, 1)
            #putrid grave warden duelist
            elif GetTalkListEntryResult() == 24:
                SetEventFlag(1049302130, 1)
            else:
                return 0
        #ordered by name
        elif GetEventFlag(1049300005) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000521:"ancient hero of zamor (sainted hero's)"
            AddTalkListData(1, 15000521, -1)
            # action:15000522:"ancient hero of zamor (giant conquering)"
            AddTalkListData(2, 15000522, -1)
            # action:15000523:"black knife (deathtouched)"
            AddTalkListData(3, 15000523, -1)
            # action:15000423:"black knife (black knife)"
            AddTalkListData(4, 15000423, -1)
            # action:99992002:"cemetery shade (tombsward)"
            AddTalkListData(5, 99992002, -1)
            # action:99992003:"cemetery shade (black knife)"
            AddTalkListData(6, 99992003, -1)
            # action:15000424:"cemetery shade (caelid)"
            AddTalkListData(7, 15000424, -1)
            # action:15000433:"ordovis"
            AddTalkListData(8, 15000433, -1)
            # action:15000426:"erdtree burial watchdog (stormfoot)"
            AddTalkListData(9, 15000426, -1)
            # action:15000427:"erdtree burial watchdog (impaler's)"
            AddTalkListData(10, 15000427, -1)
            # action:15000428:"erdtree burial watchdog (cliffbottom)"
            AddTalkListData(11, 15000428, -1)
            # action:15000429:"erdtree burial watchdog (minor erdtree)"
            AddTalkListData(12, 15000429, -1)
            # action:15000518:"erdtree burial watchdog (wyndham)"
            AddTalkListData(13, 15000518, -1)
            # action:15000434:"esgar"
            AddTalkListData(14, 15000434, -1)
            # action:15000421:"grave warden duelist (murkwater)"
            AddTalkListData(15, 15000421, -1)
            # action:99990300:"grave warden duelist (auriza)"
            AddTalkListData(16, 99990300, -1)
            # action:15000436:"tricia"
            AddTalkListData(17, 15000436, -1)
            # action:15000422:"putrid grave warden duelist (snowfield catacombs)"
            AddTalkListData(18, 15000422, -1)
            # action:15000432:"putrid tree spirit"
            AddTalkListData(19, 15000432, -1)
            # action:15000435:"red wolf of the champion"
            AddTalkListData(20, 15000435, -1)
            # action:15000431:"spiritcaller snail (road's end)"
            AddTalkListData(21, 15000431, -1)
            # action:99992000:"stray mimic tear"
            AddTalkListData(22, 99992000, -1)
            # action:15000519:"ulcerated tree spirit (fringefolk hero)"
            AddTalkListData(23, 15000519, -1)
            # action:15000425:"ulcerated tree spirit (giants' mountaintops)"
            AddTalkListData(24, 15000425, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #ancient hero of zamor sainted hero
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302119, 1)
            #ancient hero of zamor mountaintops
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302125, 1)
            #black knife assassin deathtouched
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302107, 1)
            #black knife assassin black knife
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302112, 1)
            #cemetery shade tombsward
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302110, 1)
            #cemetery shade black knife
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302113, 1)
            #cemetery shade caelid
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302117, 1)
            #crucible knight ordovis
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302124, 1)
            #erdtree burial watchdog stormfoot
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302108, 1)
            #erdtree burial watchdog impaler's
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302111, 1)
            #erdtree burial watchdog cliffbottom
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302114, 1)
            #erdtree burial watchdog x2 minor erdtree
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302118, 1)
            #erdtree burial watchdog wyndham
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302121, 1)
            #esgar
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302127, 1)
            #grave warden duelist murkwater
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302109, 1)
            #grave warden duelist auriza
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302122, 1)
            #perfumer tricia
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302120, 1)
            #putrid grave warden duelist
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302130, 1)
            #putrid tree spirit wardead
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302128, 1)
            #red wolf of the champion
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302123, 1)
            #spiritcaller snail road's end
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302115, 1)
            #stray mimic
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302129, 1)
            #ulcerated tree spirit fringefolk
            elif GetTalkListEntryResult() == 23:
                SetEventFlag(1049302116, 1)
            #ulcerated tree spirit mountaintops
            elif GetTalkListEntryResult() == 24:
                SetEventFlag(1049302126, 1)
            else:
                return 0

def t324001110_10():
    while True:
        #ordered by level
        if GetEventFlag(1049300004) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000437:"soldier of godrick"
            AddTalkListData(1, 15000437, -1)
            # action:15000438:"beastman of farum azula"
            AddTalkListData(2, 15000438, -1)
            # action:15000444:"guardian golem"
            AddTalkListData(3, 15000444, -1)
            # action:15000443:"patches"
            AddTalkListData(4, 15000443, -1)
            # action:15000439:"demi-human chiefs"
            AddTalkListData(5, 15000439, -1)
            # action:15000452:"miranda (tombsward)"
            AddTalkListData(6, 15000452, -1)
            # action:15000445:"runebear"
            AddTalkListData(7, 15000445, -1)
            # action:15000447:"bloodhound"
            AddTalkListData(8, 15000447, -1)
            # action:15000446:"cleanrot knight"
            AddTalkListData(9, 15000446, -1)
            # action:99992001:"cleanrot x2"
            AddTalkListData(10, 99992001, -1)
            # action:15000448:"crystalian x2 (academy crystal cave)"
            AddTalkListData(11, 15000448, -1)
            # action:15000449:"frenzied duelist (gaol cave)"
            AddTalkListData(12, 15000449, -1)
            # action:15000454:"virgins"
            AddTalkListData(13, 15000454, -1)
            # action:15000441:"margot"
            AddTalkListData(14, 15000441, -1)
            # action:15000451:"kindred of rot x2"
            AddTalkListData(15, 15000451, -1)
            # action:99993012:"black knife (sages cave)"
            AddTalkListData(16, 99993012, -1)
            # action:99990299:"omenkiller+miranda"
            AddTalkListData(18, 99990299, -1)
            # action:15000453:"necromancer garris"
            AddTalkListData(17, 15000453, -1)
            # action:99990204:"putrid crystalian x3"
            AddTalkListData(19, 99990204, -1)
            # action:99993011:"spiritcaller snail (spiriticaller cave)"
            AddTalkListData(20, 99993011, -1)
            # action:99991000:"beastman of farum azula x2"
            AddTalkListData(21, 99991000, -1)
            # action:15000455:"crusader"
            AddTalkListData(22, 15000455, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #soldier of godrick
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302131, 1)
            #beastman groveside
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302132, 1)
            #guardian golem
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302134, 1)
            #patches
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302135, 1)
            #demi-human chiefs
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302133, 1)
            #miranda
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302136, 1)
            #runebear
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302137, 1)
            #bloodhound knight
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302138, 1)
            #cleanrot
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302139, 1)
            #cleanrot x2
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302140, 1)
            #crystalian x2 academy
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302141, 1)
            #frenzied duelist
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302142, 1)
            #abductor virgins
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302143, 1)
            #demi-human queen margot
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302144, 1)
            #kindred of rot seethewater
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302145, 1)
            #black knife assassin sage's
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302146, 1)
            #necromancer garris
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302148, 1)
            #omenkiller+miranda
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302149, 1)
            #putrid crystalian x3
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302147, 1)
            #spiritcaller snail mountaintops
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302150, 1)
            #beastman x2
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302151, 1)
            #misbegotten crusader
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302152, 1)
            else:
                return 0
        #ordered by name
        elif GetEventFlag(1049300005) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000454:"virgins"
            AddTalkListData(1, 15000454, -1)
            # action:15000438:"beastman of farum azula"
            AddTalkListData(2, 15000438, -1)
            # action:99991000:"beastman of farum azula x2"
            AddTalkListData(3, 99991000, -1)
            # action:99993012:"black knife (sages cave)"
            AddTalkListData(4, 99993012, -1)
            # action:15000447:"bloodhound"
            AddTalkListData(5, 15000447, -1)
            # action:15000446:"cleanrot knight"
            AddTalkListData(6, 15000446, -1)
            # action:99992001:"cleanrot x2"
            AddTalkListData(7, 99992001, -1)
            # action:15000448:"crystalian x2 (academy crystal cave)"
            AddTalkListData(8, 15000448, -1)
            # action:15000439:"demi-human chiefs"
            AddTalkListData(9, 15000439, -1)
            # action:15000441:"margot"
            AddTalkListData(10, 15000441, -1)
            # action:15000449:"frenzied duelist (gaol cave)"
            AddTalkListData(11, 15000449, -1)
            # action:15000444:"guardian golem"
            AddTalkListData(12, 15000444, -1)
            # action:15000451:"kindred of rot x2"
            AddTalkListData(13, 15000451, -1)
            # action:15000452:"miranda (tombsward)"
            AddTalkListData(14, 15000452, -1)
            # action:15000455:"misbegotten crusader"
            AddTalkListData(15, 15000455, -1)
            # action:15000453:"necromancer garris"
            AddTalkListData(16, 15000453, -1)
            # action:99990299:"omenkiller + miranda"
            AddTalkListData(17, 99990299, -1)
            # action:15000443:"patches"
            AddTalkListData(18, 15000443, -1)
            # action:99990204:"crystalian x3"
            AddTalkListData(19, 99990204, -1)
            # action:15000445:"runebear"
            AddTalkListData(20, 15000445, -1)
            # action:15000437:"soldier of godrick"
            AddTalkListData(21, 15000437, -1)
            # action:99993011:"spiritcaller snail (spiriticaller cave)"
            AddTalkListData(22, 99993011, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #abductor virgins
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302143, 1)
            #beastman groveside
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302132, 1)
            #beastman x2
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302151, 1)
            #black knife assassin sage's
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302146, 1)
            #bloodhound knight
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302138, 1)
            #cleanrot
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302139, 1)
            #cleanrot x2
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302140, 1)
            #crystalian x2 academy
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302141, 1)
            #demi-human chiefs
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302133, 1)
            #demi-human queen margot
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302144, 1)
            #frenzied duelist
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302142, 1)
            #guardian golem
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302134, 1)
            #kindred of rot seethewater
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302145, 1)
            #miranda
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302136, 1)
            #misbegotten crusader
            elif GetTalkListEntryResult() == 15:
                SetEventFlag(1049302152, 1)
            #necromancer garris
            elif GetTalkListEntryResult() == 16:
                SetEventFlag(1049302148, 1)
            #omenkiller+miranda
            elif GetTalkListEntryResult() == 17:
                SetEventFlag(1049302149, 1)
            #patches
            elif GetTalkListEntryResult() == 18:
                SetEventFlag(1049302135, 1)
            #crystalian x3 sellia
            elif GetTalkListEntryResult() == 19:
                SetEventFlag(1049302147, 1)
            #runebear
            elif GetTalkListEntryResult() == 20:
                SetEventFlag(1049302137, 1)
            #soldier of godrick
            elif GetTalkListEntryResult() == 21:
                SetEventFlag(1049302131, 1)
            #spiritcaller snail mountaintops
            elif GetTalkListEntryResult() == 22:
                SetEventFlag(1049302150, 1)
            else:
                return 0

def t324001110_11():
    while True:
        #ordered by level
        if GetEventFlag(1049300004) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000515:"mad pumpkin head"
            AddTalkListData(1, 15000515, -1)
            # action:99993010:"stonedigger troll (limgrave)"
            AddTalkListData(2, 99993010, -1)
            # action:15000457:"scaly misbegotten"
            AddTalkListData(3, 15000457, -1)
            # action:15000458:"crystalian"
            AddTalkListData(4, 15000458, -1)
            # action:15000514:"royal revenant"
            AddTalkListData(5, 15000514, -1)
            # action:15000517:"gilika"
            AddTalkListData(9, 15000517, -1)
            # action:99992009:"mad pumpkin head x2"
            AddTalkListData(7, 99992009, -1)
            # action:15000511:"fallingstar beast (sellia crystal tunnel)"
            AddTalkListData(6, 15000511, -1)
            # action:15000459:"magma wyrm (gael)"
            AddTalkListData(8, 15000459, -1)
            # action:15000516:"sanguine noble"
            AddTalkListData(10, 15000516, -1)
            # action:99992010:"stonedigger troll (altus)"
            AddTalkListData(11, 99992010, -1)
            # action:15000442:"crystalian x2 (altus tunnel)"
            AddTalkListData(12, 15000442, -1)
            # action:15000512:"onyx lord (sealed)"
            AddTalkListData(13, 15000512, -1)
            # action:15000513:"astel stars of darkness"
            AddTalkListData(14, 15000513, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #mad pumpkin
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302153, 1)
            #stonedigger limgrave
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302154, 1)
            #scaly misbegotten
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302155, 1)
            #crystalian lucaria
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302156, 1)
            #royal revenant
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302157, 1)
            #fallingstar sellia
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302158, 1)
            #mad pumpkin x2
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302159, 1)
            #magma wyrm gael
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302160, 1)
            #demi-human queen gilika
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302161, 1)
            #sanguine
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302162, 1)
            #stonedigger altus
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302163, 1)
            #crystalian x2 altus
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302164, 1)
            #onyx lord sealed
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302165, 1)
            #astel snowfield
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302166, 1)
            else:
                return 0
        #ordered by name
        elif GetEventFlag(1049300005) == 1:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            # action:15000513:"astel stars of darkness"
            AddTalkListData(1, 15000513, -1)
            # action:15000458:"crystalian"
            AddTalkListData(2, 15000458, -1)
            # action:15000442:"crystalian x2 (altus tunnel)"
            AddTalkListData(3, 15000442, -1)
            # action:15000517:"gilika"
            AddTalkListData(4, 15000517, -1)
            # action:15000511:"fallingstar beast (sellia crystal tunnel)"
            AddTalkListData(5, 15000511, -1)
            # action:15000515:"mad pumpkin head"
            AddTalkListData(6, 15000515, -1)
            # action:99992009:"mad pumpkin head x2"
            AddTalkListData(7, 99992009, -1)
            # action:15000459:"magma wyrm (gael)"
            AddTalkListData(8, 15000459, -1)
            # action:15000512:"onyx lord (sealed)"
            AddTalkListData(9, 15000512, -1)
            # action:15000514:"royal revenant"
            AddTalkListData(10, 15000514, -1)
            # action:15000516:"sanguine noble"
            AddTalkListData(11, 15000516, -1)
            # action:15000457:"scaly misbegotten"
            AddTalkListData(12, 15000457, -1)
            # action:99993010:"stonedigger troll (limgrave)"
            AddTalkListData(13, 99993010, -1)
            # action:99992010:"stonedigger troll (altus)"
            AddTalkListData(14, 99992010, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 26000004, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #astel snowfield
            if GetTalkListEntryResult() == 1:
                SetEventFlag(1049302166, 1)
            #crystalian lucaria
            elif GetTalkListEntryResult() == 2:
                SetEventFlag(1049302156, 1)
            #crystalian x2 altus
            elif GetTalkListEntryResult() == 3:
                SetEventFlag(1049302164, 1)
            #demi-human queen gilika
            elif GetTalkListEntryResult() == 4:
                SetEventFlag(1049302161, 1)
            #fallingstar sellia
            elif GetTalkListEntryResult() == 5:
                SetEventFlag(1049302158, 1)
            #mad pumpkin
            elif GetTalkListEntryResult() == 6:
                SetEventFlag(1049302153, 1)
            #mad pumpkin x2
            elif GetTalkListEntryResult() == 7:
                SetEventFlag(1049302159, 1)
            #magma wyrm gael
            elif GetTalkListEntryResult() == 8:
                SetEventFlag(1049302160, 1)
            #onyx lord sealed
            elif GetTalkListEntryResult() == 9:
                SetEventFlag(1049302165, 1)
            #royal revenant
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(1049302157, 1)
            #sanguine
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(1049302162, 1)
            #scaly misbegotten
            elif GetTalkListEntryResult() == 12:
                SetEventFlag(1049302155, 1)
            #stonedigger limgrave
            elif GetTalkListEntryResult() == 13:
                SetEventFlag(1049302154, 1)
            #stonedigger altus
            elif GetTalkListEntryResult() == 14:
                SetEventFlag(1049302163, 1)
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

