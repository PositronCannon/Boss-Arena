# -*- coding: utf-8 -*-
def t314001110_1():
    """State 0,1"""
    t314001110_x0()
    Quit()
    
def t314001110_x0():
    """State 0"""
    if not IsClientPlayer():
        """State 1"""
        Label('L0')
        call = t314001110_x1()
        if IsClientPlayer() == 1:
            """State 2"""
            Label('L1')
            call = t314001110_x2()
            if not IsClientPlayer():
                Goto('L0')
            elif IsPlayerDead() == 1:
                pass
        elif IsPlayerDead() == 1:
            pass
    else:
        Goto('L1')
    """State 3"""
    call = t314001110_x4()
    assert not IsPlayerDead()
    Goto('L0')
    """Unused"""
    """State 4"""
    return 0
    
def t314001110_x1():
    """State 0"""
    while True:
        """State 1"""
        # actionbutton:6000:"Talk"
        call = t314001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000,
                             flag6=6000)
        if call.Done():
            """State 2"""
            call = t314001110_x3()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or IsMultiplayerInProgress() == 1:
                pass
        elif IsMultiplayerInProgress() == 1:
            pass
        """State 3"""
        assert t314001110_x6() and not IsMultiplayerInProgress()
    """Unused"""
    """State 4"""
    return 0
    
def t314001110_x2():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0
            
def t314001110_x4():
    """State 0,2"""
    assert t314001110_x6()
    """State 1"""
    Quit()
    """Unused"""
    """State 3"""
    return 0
    
def t314001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
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
    
def t314001110_x3():
    while True:
        """State 0"""
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        # action:99999000:"weapons"
        AddTalkListData(1, 99999000, -1)
        # action:99999001:"armor"
        AddTalkListData(2, 99999001, -1)
        # action:99999002:"spells"
        AddTalkListData(3, 99999002, -1)
        # action:99999005:"ashes of war"
        AddTalkListData(4, 99999005, -1)
        # action:99999003:"talismans"
        AddTalkListData(5, 99999003, -1)
        # action:99999007:"spirit ashes"
        AddTalkListData(6, 99999007, -1)
        # action:99999009:"tools/misc"
        AddTalkListData(7, 99999009, -1)
        # action:99999006:"consumables"
        AddTalkListData(8, 99999006, -1)
        # action:99999004:"Ammunition"
        AddTalkListData(9, 99999004, -1)
        # action:99999008:"materials"
        AddTalkListData(10, 99999008, -1)
        # action:99999012:"DLC items"
        AddTalkListData(11, 99999012, -1)
        # action:99999010:"gestures"
        AddTalkListData(12, 99999010, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 1"""
        if GetTalkListEntryResult() == 1:
            """State 2"""
            assert t314001110_4()
        elif GetTalkListEntryResult() == 2:
            """State 3"""
            assert t314001110_5()
        elif GetTalkListEntryResult() == 3:
            """State 4"""
            assert t314001110_6()
        elif GetTalkListEntryResult() == 4:
            """State 5"""
            OpenRegularShop(9150000, 9150099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 5:
            """State 6"""
            OpenRegularShop(9130000, 9130200)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 6:
            """State 7"""
            OpenRegularShop(9160000, 9160099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 7:
            """State 8"""
            OpenRegularShop(9190000, 9190099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 8:
            """State 9"""
            OpenRegularShop(9170000, 9170199)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 9:
            """State 10"""
            OpenRegularShop(9140000, 9140099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 10:
            """State 11"""
            OpenRegularShop(9180100, 9180199)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 11:
            """State 12"""
            assert t314001110_7()
        elif GetTalkListEntryResult() == 12:
            """State 13"""
            assert t314001110_3()
        else:
            """State 14"""
            return 0
            
def t314001110_4():
    while True:
        """State 0"""
        ClearTalkActionState()
        ClearTalkListData()
        # action:99990202:"western swords"
        AddTalkListData(1, 99990202, -1)
        # action:99990201:"eastern swords"
        AddTalkListData(2, 99990201, -1)
        # action:99990206:"axes/hammers/flails/colossals"
        AddTalkListData(3, 99990206, -1)
        # action:28000015:"spears/halberds/reapers"
        AddTalkListData(4, 28000015, -1)
        # action:28000014:"daggers/whips/fists/claws"
        AddTalkListData(5, 28000014, -1)
        # action:28000013:"ranged weapons"
        AddTalkListData(6, 28000013, -1)
        # action:28000012:"staves/seals"
        AddTalkListData(7, 28000012, -1)
        # action:28000011:"shields"
        AddTalkListData(8, 28000011, -1)
        # action:28000010:"torches"
        AddTalkListData(9, 28000010, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 1"""
        if GetTalkListEntryResult() == 1:
            """State 2"""
            OpenRegularShop(9100000, 9100099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 2:
            """State 3"""
            OpenRegularShop(9100100, 9100199)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 3:
            """State 4"""
            OpenRegularShop(9100200, 9100299)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 4:
            """State 5"""
            OpenRegularShop(9100300, 9100399)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 5:
            """State 6"""
            OpenRegularShop(9100400, 9100499)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 6:
            """State 7"""
            OpenRegularShop(9100500, 9100599)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 7:
            """State 8"""
            OpenRegularShop(9100600, 9100699)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 8:
            """State 9"""
            OpenRegularShop(9100700, 9100799)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 9:
            """State 10"""
            OpenRegularShop(9100800, 9100899)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        else:
            """State 11"""
            return 0

def t314001110_5():
    while True:
        """State 0"""
        ClearTalkActionState()
        ClearTalkListData()
        # action:28000009:"head armor"
        AddTalkListData(1, 28000009, -1)
        # action:28000008:"body"
        AddTalkListData(2, 28000008, -1)
        # action:28000007:"hand"
        AddTalkListData(3, 28000007, -1)
        # action:28000006:"leg"
        AddTalkListData(4, 28000006, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 1"""
        if GetTalkListEntryResult() == 1:
            """State 2"""
            OpenRegularShop(9110000, 9110199)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 2:
            """State 3"""
            OpenRegularShop(9110200, 9110499)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 3:
            """State 4"""
            OpenRegularShop(9110500, 9110599)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 4:
            """State 5"""
            OpenRegularShop(9110600, 9110799)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        else:
            """State 6"""
            return 0
            
def t314001110_6():
    while True:
        """State 0"""
        ClearTalkActionState()
        ClearTalkListData()
        # action:26001165:"attack sorceries"
        AddTalkListData(1, 26001165, -1)
        # action:26001164:"support sorceries"
        AddTalkListData(2, 26001164, -1)
        # action:26001163:"attack incantations"
        AddTalkListData(3, 26001163, -1)
        # action:26001162:"support incantations"
        AddTalkListData(4, 26001162, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 1"""
        if GetTalkListEntryResult() == 1:
            """State 2"""
            OpenRegularShop(9120000, 9120099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 2:
            """State 3"""
            OpenRegularShop(9120100, 9120199)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 3:
            """State 4"""
            OpenRegularShop(9120200, 9120299)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 4:
            """State 5"""
            OpenRegularShop(9120300, 9120399)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        else:
            """State 6"""
            return 0
            
def t314001110_3():
    """State 0"""
    # gesture:0:Bow
    AcquireGesture(0)
    SetEventFlag(60800, 1)
    # gesture:1:Polite Bow
    AcquireGesture(1)
    SetEventFlag(60801, 1)
    # gesture:2:My Thanks
    AcquireGesture(2)
    SetEventFlag(60802, 1)
    # gesture:3:Curtsy
    AcquireGesture(3)
    SetEventFlag(60803, 1)
    # gesture:4:Reverential Bow
    AcquireGesture(4)
    SetEventFlag(60804, 1)
    # gesture:5:My Lord
    AcquireGesture(5)
    SetEventFlag(60805, 1)
    # gesture:6:Warm Welcome
    AcquireGesture(6)
    SetEventFlag(60806, 1)
    # gesture:7:Wave
    AcquireGesture(7)
    SetEventFlag(60807, 1)
    # gesture:8:Casual Greeting
    AcquireGesture(8)
    SetEventFlag(60808, 1)
    # gesture:9:Strength!
    AcquireGesture(9)
    SetEventFlag(60809, 1)
    # gesture:10:As You Wish
    AcquireGesture(10)
    SetEventFlag(60810, 1)
    # gesture:20:Point Forwards
    AcquireGesture(20)
    SetEventFlag(60811, 1)
    # gesture:21:Point Upwards
    AcquireGesture(21)
    SetEventFlag(60812, 1)
    # gesture:22:Point Downwards
    AcquireGesture(22)
    SetEventFlag(60813, 1)
    # gesture:23:Beckon
    AcquireGesture(23)
    SetEventFlag(60814, 1)
    # gesture:24:Wait!
    AcquireGesture(24)
    SetEventFlag(60815, 1)
    # gesture:25:Calm Down!
    AcquireGesture(25)
    SetEventFlag(60816, 1)
    # gesture:30:Nod In Thought
    AcquireGesture(30)
    SetEventFlag(60817, 1)
    # gesture:40:Extreme Repentance
    AcquireGesture(40)
    SetEventFlag(60818, 1)
    # gesture:41:Grovel For Mercy
    AcquireGesture(41)
    SetEventFlag(60819, 1)
    # gesture:50:Rallying Cry
    AcquireGesture(50)
    SetEventFlag(60820, 1)
    # gesture:51:Heartening Cry
    AcquireGesture(51)
    SetEventFlag(60821, 1)
    # gesture:52:By My Sword
    AcquireGesture(52)
    SetEventFlag(60822, 1)
    # gesture:53:Hoslow's Oath
    AcquireGesture(53)
    SetEventFlag(60823, 1)
    # gesture:54:Fire Spur Me
    AcquireGesture(54)
    SetEventFlag(60824, 1)
    # gesture:60:Bravo!
    AcquireGesture(60)
    SetEventFlag(60826, 1)
    # gesture:70:Jump for Joy
    AcquireGesture(70)
    SetEventFlag(60827, 1)
    # gesture:71:Triumphant Delight
    AcquireGesture(71)
    SetEventFlag(60828, 1)
    # gesture:72:Fancy Spin
    AcquireGesture(72)
    SetEventFlag(60829, 1)
    # gesture:73:Finger Snap
    AcquireGesture(73)
    SetEventFlag(60830, 1)
    # gesture:80:Dejection
    AcquireGesture(80)
    SetEventFlag(60831, 1)
    # gesture:90:Patches' Crouch
    AcquireGesture(90)
    SetEventFlag(60832, 1)
    # gesture:91:Crossed Legs
    AcquireGesture(91)
    SetEventFlag(60833, 1)
    # gesture:92:Rest
    AcquireGesture(92)
    SetEventFlag(60834, 1)
    # gesture:93:Sitting Sideways
    AcquireGesture(93)
    SetEventFlag(60835, 1)
    # gesture:94:Dozing Cross-Legged
    AcquireGesture(94)
    SetEventFlag(60836, 1)
    # gesture:95:Spread Out
    AcquireGesture(95)
    SetEventFlag(60837, 1)
    # gesture:97:Balled Up
    AcquireGesture(97)
    SetEventFlag(60839, 1)
    # gesture:98:What Do You Want?
    AcquireGesture(98)
    SetEventFlag(60840, 1)
    # gesture:100:Prayer
    AcquireGesture(100)
    SetEventFlag(60841, 1)
    # gesture:101:Desperate Prayer
    AcquireGesture(101)
    SetEventFlag(60842, 1)
    # gesture:102:Rapture
    AcquireGesture(102)
    SetEventFlag(60843, 1)
    SetEventFlag(60844, 1)
    # gesture:103:Erudition
    AcquireGesture(103)
    SetEventFlag(60845, 1)
    # gesture:104:Outer Order
    AcquireGesture(104)
    SetEventFlag(60846, 1)
    # gesture:105:Inner Order
    AcquireGesture(105)
    SetEventFlag(60847, 1)
    # gesture:106:Golden Order Totality
    AcquireGesture(106)
    SetEventFlag(60848, 1)
    # gesture:108:The Ring
    AcquireGesture(108)
    SetEventFlag(60849, 1)
    AcquireGesture(111)
    SetEventFlag(60850, 1)
    AcquireGesture(112)
    SetEventFlag(60851, 1)
    AcquireGesture(113)
    SetEventFlag(60852, 1)
    AcquireGesture(114)
    SetEventFlag(60853, 1)
    AcquireGesture(115)
    SetEventFlag(60854, 1)
    return 0
            
def t314001110_7():
    while True:
        """State 0"""
        ClearTalkActionState()
        ClearTalkListData()
        # action:99999013:"DLC weapons"
        AddTalkListData(1, 99999013, -1)
        # action:99999014:"DLC armor"
        AddTalkListData(2, 99999014, -1)
        # action:99999015:"DLC spells"
        AddTalkListData(3, 99999015, -1)
        # action:99999016:"DLC ashes of war"
        AddTalkListData(4, 99999017, -1)
        # action:99999017:"DLC talismans"
        AddTalkListData(5, 99999016, -1)
        # action:99999018:"DLC spirit ashes"
        AddTalkListData(6, 99999018, -1)
        # action:99999024:"DLC misc items"
        AddTalkListData(7, 99999024, -1)
        # action:99999019:"DLC consumables/ammo"
        AddTalkListData(8, 99999019, -1)
        # action:99999023:"DLC materials"
        AddTalkListData(9, 99999023, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 1"""
        if GetTalkListEntryResult() == 1:
            """State 2"""
            OpenRegularShop(8000000, 8000199)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 2:
            """State 3"""
            OpenRegularShop(8000200, 8000399)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 3:
            """State 4"""
            OpenRegularShop(8000500, 8000599)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 4:
            """State 5"""
            OpenRegularShop(8000600, 8000699)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 5:
            """State 6"""
            OpenRegularShop(8000400, 8000499)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 6:
            """State 7"""
            OpenRegularShop(8000700, 8000799)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 7:
            """State 8"""
            OpenRegularShop(8000900, 8000999)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 8:
            """State 9"""
            OpenRegularShop(8000800, 8000899)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 9:
            """State 10"""
            OpenRegularShop(8001000, 8001099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        else:
            """State 11"""
            return 0

def t314001110_x6():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

