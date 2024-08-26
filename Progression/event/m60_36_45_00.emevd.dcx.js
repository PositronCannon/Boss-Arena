// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(1036450000, 1036451950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005261, 1036450340, 1036452340, 1092616192, 0, 1700);
    InitializeCommonEvent(0, 90005860, 1036450800, 0, 1036450340, 0, 1036450400, 0);
    InitializeCommonEvent(0, 90005870, 1036450340, 904980604, 24);
    InitializeCommonEvent(0, 90005605, 1036451620, 3154492, 1034482620, 0, 1036452620, 1036452621, 1036452622, 0, 0, 0, 0);
//init boss reward
InitializeEvent(0, 1036450990, 0);
});

//generic boss event
$Event(1036450990, Default, function() {
    WaitFor(CharacterDead(1036450340));
    //boss rewards (4 bonus items)
    InitializeCommonEvent(0,90001024,1049304161,1049304058,1049304071,-1,1049304912,1049304677,1049304678,1049304679,1049304680,1049304914,1049304916,1049304919,1049304921,1049300161);
});

$Event(50, Default, function() {
    if (EventFlag(1049308062))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036450220, 1036452220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450221, 1036452220, 1092616192, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450222, 1036452220, 1092616192, 1056964608, -1);
    InitializeCommonEvent(0, 90005251, 1036450223, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036450224, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036450225, 1088421888, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450226, 1036452226, 0, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450227, 1036452226, 0, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450228, 1036452226, 0, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 1036450229, 1036452226, 0, 1050253722, -1);
    InitializeCommonEvent(0, 90005261, 1036450230, 1036452226, 0, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450231, 1036452226, 0, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036450241, 1036452250, 0, 1056964608, -1);
    InitializeCommonEvent(0, 90005261, 1036450242, 1036452250, 0, 1050253722, -1);
    InitializeCommonEvent(0, 90005261, 1036450243, 1036452250, 0, 1065353216, -1);
    InitializeCommonEvent(0, 90005261, 1036450250, 1036452250, 0, 0, -1);
});

$Event(1036452200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(X0_4);
    SetSpEffect(X0_4, 8560);
    DisableCharacter(X0_4);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, X0_4, X4_4, 1);
    areaChrSp = area && chrSp;
    WaitFor(HasDamageType(X0_4, 0, DamageType.Unspecified) || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(X8_4);
        if (Signed(X12_4) != -1) {
            ForceAnimationPlayback(X0_4, X12_4, true, false, false);
        }
    }
L1:
    EnableCharacterAI(X0_4);
    EnableCharacter(X0_4);
});
