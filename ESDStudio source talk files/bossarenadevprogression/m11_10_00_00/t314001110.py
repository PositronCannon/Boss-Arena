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
        c1_110()
        ClearTalkActionState()
        ClearTalkListData()
        #upgrade materials
        AddTalkListData(1, 99999025, -1)
        #basic weapons
        AddTalkListData(2, 99999028, -1)
        #unlocked weapons
        AddTalkListData(3, 99999027, -1)
        #armor
        AddTalkListData(4, 99999001, -1)
        #spells
        AddTalkListData(5, 99999002, -1)
        #ashes of war
        AddTalkListData(6, 99999005, -1)
        #tools
        AddTalkListData(7, 99999009, -1)
        #consumables
        AddTalkListData(8, 99999006, -1)
        #ammo
        AddTalkListData(9, 99999004, -1)
        #crafting materials
        AddTalkListData(10, 99999026, -1)
        #gestures
        AddTalkListData(11, 99999010, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #upgrade materials
        if GetTalkListEntryResult() == 1:
            OpenRegularShop(7000800,7000899)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #basic weapons
        elif GetTalkListEntryResult() == 2:
            OpenRegularShop(7000000, 7000099)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #unlocked weapons
        elif GetTalkListEntryResult() == 3:
            OpenRegularShop(8000000, 8000999)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #armor
        elif GetTalkListEntryResult() == 4:
            OpenRegularShop(7000100, 7000199)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #spells
        elif GetTalkListEntryResult() == 5:
            OpenRegularShop(7000200, 7000299)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #ashes of war
        elif GetTalkListEntryResult() == 6:
            OpenRegularShop(7000300, 7000399)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #tools
        elif GetTalkListEntryResult() == 7:
            OpenRegularShop(7000400, 7000499)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #consumables
        elif GetTalkListEntryResult() == 8:
            OpenRegularShop(7000500, 7000599)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #ammo
        elif GetTalkListEntryResult() == 9:
            OpenRegularShop(7000600, 7000699)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #crafting materials
        elif GetTalkListEntryResult() == 10:
            OpenRegularShop(7000700, 7000799)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        #gestures
        elif GetTalkListEntryResult() == 11:
            assert t314001110_3()
        else:
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
            
def t314001110_x6():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

