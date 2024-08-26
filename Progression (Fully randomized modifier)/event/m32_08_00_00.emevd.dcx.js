// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(32080000, 32081950, 0, 0, 0, 5);
    InitializeEvent(0, 32082800, 0);
    InitializeEvent(0, 32082810, 0);
    InitializeEvent(0, 32082811, 0);
    InitializeEvent(0, 32082849, 0);
    InitializeEvent(0, 32082580, 0);
    InitializeCommonEvent(0, 90005520, 32080588, 32081586, 32080586, 32080587);
    InitializeEvent(0, 32082498, 0);
    InitializeCommonEvent(0, 90005646, 32080800, 32082840, 32082841, 32081840, 32082840, 2080);
    InitializeEvent(0, 32082650, 0);
    InitializeCommonEvent(0, 900005610, 32081680, 100, 800, 0);
    InitializeEvent(0, 32082200, 32080200, 30005, 20005, 0, 0, 0, 0, 0, 32081600, 32081601, 32081602, 0);
    InitializeEvent(1, 32082200, 32080201, 30001, 20001, 0, 0, 0, 0, 0, 32081603, 0, 0, 0);
    InitializeEvent(2, 32082200, 32080202, 30001, 20001, 0, 0, 0, 0, 0, 32081604, 32081605, 0, 0);
    InitializeEvent(3, 32082200, 32080203, 30004, 20004, 0, 0, 0, 0, 0, 32081615, 0, 0, 0);
    InitializeEvent(4, 32082200, 32080204, 30001, 20001, 0, 0, 0, 0, 0, 32081616, 32081617, 0, 0);
    InitializeEvent(5, 32082200, 32080205, 30005, 20005, 0, 0, 0, 0, 0, 32081618, 32081619, 0, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 32082820, 0);
    InitializeCommonEvent(0, 90005250, 32080211, 32082211, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080216, 32082302, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080217, 32082217, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080218, 32082217, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080250, 32082250, 0, -1);
    InitializeCommonEvent(0, 90005200, 32080300, 30009, 20029, 32082300, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32080301, 30009, 20029, 32082301, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32080302, 30009, 20029, 32082302, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 32080303, 30009, 20029, 32082303, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 32080305, 32082305, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080306, 32082306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080307, 32082306, 0, -1);
    InitializeCommonEvent(0, 90005250, 32080308, 32082308, 0, 3008);
});

$Event(32082580, Restart, function() {
    RegisterLadder(32080580, 32080581, 32081580);
    RegisterLadder(32080582, 32080583, 32081582);
    RegisterLadder(32080584, 32080585, 32081584);
});

$Event(32082498, Restart, function() {
    if (!EventFlag(32080588)) {
        ModifyNavimeshConnectionBitflag(32082498, NavimeshType.Solid, BitopType.Add);
        WaitFor(EventFlag(32080588));
    }
L0:
    ModifyNavimeshConnectionBitflag(32082498, NavimeshType.Solid, BitopType.Delete);
    EndEvent();
});

$Event(32082200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4, X40_4, X44_4) {
    EndIf(ThisEventSlot());
    if (X16_4 != 0) {
        DisableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, false);
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(X32_4, Equal, 1)
        || AssetDestroyed(X36_4, Equal, 1)
        || AssetDestroyed(X40_4, Equal, 1)
        || AssetDestroyed(X44_4, Equal, 1))
        && CharacterBackreadStatus(X0_4)
        && (CharacterHasSpEffect(X0_4, 5080) || CharacterHasSpEffect(X0_4, 5450));
    if (!(X20_4 == 0 && X24_4 == 0 && X28_4 == 0)) {
        if (X20_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.Combat);
        }
        if (X24_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.ActiveAlert);
        }
        if (X28_4 != 0) {
            chr |= CharacterAIState(X0_4, AIStateType.PassiveAlert);
        }
        assetChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(X0_4, 481)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90110)
        && !CharacterHasSpEffect(X0_4, 90160);
    sp2 = CharacterHasSpEffect(X0_4, 482)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90120)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp3 = CharacterHasSpEffect(X0_4, 483)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90140)
        && !CharacterHasSpEffect(X0_4, 90160)
        && !CharacterHasSpEffect(X0_4, 90161);
    sp4 = CharacterHasSpEffect(X0_4, 484)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90130)
        && !CharacterHasSpEffect(X0_4, 90161)
        && !CharacterHasSpEffect(X0_4, 90162);
    sp5 = CharacterHasSpEffect(X0_4, 487)
        && !CharacterHasSpEffect(X0_4, 90100)
        && !CharacterHasSpEffect(X0_4, 90150)
        && !CharacterHasSpEffect(X0_4, 90160);
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
            || HasDamageType(X0_4, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(X0_4, 436)
            || CharacterHasStateInfo(X0_4, 2)
            || CharacterHasStateInfo(X0_4, 5)
            || CharacterHasStateInfo(X0_4, 6)
            || CharacterHasStateInfo(X0_4, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(X0_4, 5080) && !CharacterHasSpEffect(X0_4, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        WaitFixedTimeSeconds(X12_4);
        if (X16_4 != 0) {
            EnableCharacterGravity(X0_4);
            SetCharacterMaphit(X0_4, true);
        }
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    if (X16_4 != 0) {
        EnableCharacterGravity(X0_4);
        SetCharacterMaphit(X0_4, true);
    }
    EndEvent();
});

$Event(32082650, Restart, function() {
    WaitFor(EventFlag(32080650));
    ForceAnimationPlayback(10000, 60131, false, false, false);
    SetEventFlagID(9080, ON);
    SetEventFlagID(32080650, OFF);
});

$Event(32082800, Restart, function() {
    EndIf(EventFlag(32080800));
    WaitFor(CharacterHPValue(32080800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32048000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32080800));
    HandleBossDefeatAndDisplayBanner(32080800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0,90001023,1049304149,1049304164,-1,-1,1049304762,1049304619,1049304620,1049304621,1049304765,1049304767,1049304770,1049300149);
    WaitFixedTimeSeconds(6);
    WarpPlayer(11, 10, 0, 0, 11102021, 0);
});

$Event(32082810, Restart, function() {
    if (EventFlag(32080800)) {
        DisableCharacter(32080800);
        DisableCharacterCollision(32080800);
        ForceCharacterDeath(32080800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32080800);
    EnableCharacterInvincibility(32080800);
    if (!EventFlag(32080801)) {
        ForceAnimationPlayback(32080800, 30008, true, false, false);
        flagArea &= EventFlag(32082805) && InArea(10000, 32082800);
        WaitFor(flagArea);
        SetNetworkconnectedEventFlagID(32080801, ON);
        ForceAnimationPlayback(32080800, 20008, false, false, false);
    } else {
L1:
        ForceAnimationPlayback(32080800, 30008, true, false, false);
        flagArea &= EventFlag(32082805) && InArea(10000, 32082800);
        WaitFor(flagArea);
        ForceAnimationPlayback(32080800, 20008, false, false, false);
    }
L2:
    EnableCharacterAI(32080800);
    DisableCharacterInvincibility(32080800);
    SetNetworkUpdateRate(32080800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32080800, 0, 904680320);
});

$Event(32082811, Restart, function() {
    EndIf(EventFlag(32080800));
    WaitFor(CharacterHasSpEffect(32080800, 16495));
    SetEventFlagID(32082802, ON);
});

$Event(32082820, Restart, function() {
    EndIf(EventFlag(32080800));
    EndIf(EventFlag(32080801));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(32088590));
    SetEventFlagID(32088590, OFF);
});

$Event(32082849, Restart, function() {
    InitializeCommonEvent(0, 9005800, 32080800, 32081800, 32082800, 32082805, 32085800, 10000, 32080801, 32082801);
    InitializeCommonEvent(0, 9005801, 32080800, 32081800, 32082800, 32082805, 32082806, 10000);
    InitializeCommonEvent(0, 9005811, 32080800, 32081800, 7, 32080801);
    InitializeCommonEvent(0, 9005822, 32080800, 920800, 32082805, 32082806, 0, 32082802, 0, 0);
});
