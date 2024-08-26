# -*- coding: utf-8 -*-
def t339001110_1():
    """State 0,1"""
    t339001110_x0()
    Quit()

def t339001110_x0():
    """State 0"""
    if not IsClientPlayer():
        """State 1"""
        Label('L0')
        call = t339001110_x1()
        if IsClientPlayer() == 1:
            """State 2"""
            Label('L1')
            call = t339001110_x2()
            if not IsClientPlayer():
                Goto('L0')
            elif IsPlayerDead() == 1:
                pass
        elif IsPlayerDead() == 1:
            pass
    else:
        Goto('L1')
    """State 3"""
    call = t339001110_x4()
    assert not IsPlayerDead()
    Goto('L0')
    """Unused"""
    """State 4"""
    return 0

def t339001110_x1():
    """State 0"""
    while True:
        """State 1"""
        # actionbutton:6000:"Talk"
        call = t339001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000,
                             flag6=6000)
        if call.Done():
            """State 2"""
            call = t339001110_x3()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or IsMultiplayerInProgress() == 1:
                pass
        elif IsMultiplayerInProgress() == 1:
            pass
        """State 3"""
        assert t339001110_x6() and not IsMultiplayerInProgress()
    """Unused"""
    """State 4"""
    return 0

def t339001110_x2():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0

def t339001110_x3():
    c1_110()
    ClearTalkListData()
    # "give runes"
    AddTalkListData(1, 99998500, -1)
    # "enable inf hp"
    AddTalkListDataIf(GetEventFlag(1049300001) == 0, 2, 99998207, -1)
    # "disable inf hp"
    AddTalkListDataIf(GetEventFlag(1049300001) == 1,2, 99998208, -1)
    # "enable inf fp"
    AddTalkListDataIf(GetEventFlag(1049300002) == 0, 3, 99998205, -1)
    # "disable inf fp"
    AddTalkListDataIf(GetEventFlag(1049300002) == 1,3, 99998206, -1)
    # "enable inf stam"
    AddTalkListDataIf(GetEventFlag(1049300003) == 0, 4, 99998203, -1)
    # "disable inf stam"
    AddTalkListDataIf(GetEventFlag(1049300003) == 1,4, 99998204, -1)
    # action:20000009:"Leave"
    AddTalkListData(99, 20000009, -1)
    ShowShopMessage(1)
    assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
    if GetTalkListEntryResult() == 1:
        SetEventFlag(1049302238, 1)
        return 0
    elif GetTalkListEntryResult() == 2:
        SetEventFlag(1049302239, 1)
        return 0
    elif GetTalkListEntryResult() == 3:
        SetEventFlag(1049302240, 1)
        return 0
    elif GetTalkListEntryResult() == 4:
        SetEventFlag(1049302241, 1)
        return 0
    else:
        return 0

def t339001110_x4():
    """State 0,2"""
    assert t339001110_x6()
    """State 1"""
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t339001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
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

def t339001110_x6():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

