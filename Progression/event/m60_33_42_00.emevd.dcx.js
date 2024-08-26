// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 1033422211, 0);
    InitializeEvent(0, 1033422611, 0);
    InitializeCommonEvent(0, 90005300, 1033420610, 1033420610, 0, 0, 0);
    InitializeCommonEvent(0, 90005880, 1033420800, 1033420805, 1033422800, 1033420800, 30265, 2761020, 1033422805);
    InitializeCommonEvent(0, 90005881, 1033420800, 1033420805, 1033422801, 1033422802, 20300, 1033421805, 2761020, 1033422805);
    InitializeCommonEvent(0, 90005882, 1033420800, 1033420805, 1033422800, 1033420800, 1033422806, 1033425810, 1033421800, 1033420810, 1033422810, 902100521, -1, 20020);
    InitializeCommonEvent(0, 90005883, 1033420800, 1033420805, 1033421805);
    InitializeCommonEvent(0, 90005885, 1033420800, 0, 1033422806, 1033422807, 0, 1);
    //init boss reward
    InitializeEvent(0, 1033429990, 0);
});

//generic boss event
$Event(1033429990, Default, function() {
    WaitFor(CharacterDead(1033420800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304237,1049304134,1049304140,-1,1049307016,1049307017,1049307018,1049307019,1049305810,1049305812,1049305814,1049305819,1049300237);
});

$Event(1033422211, Restart, function() {
    EndIf(EventFlag(1033420610));
    DisableCharacterAI(1033420610);
    ForceAnimationPlayback(1033420610, 30008, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgArea = HasDamageType(1033420610, 10000, DamageType.Unspecified)
        || EntityInRadiusOfEntity(1033420610, 40000, 7, 1);
    WaitFor(dmgArea && chrSp);
    SetEventFlagID(1033420610, ON);
    ForceAnimationPlayback(1033420610, 20016, false, true, false);
});

$Event(1033422611, Restart, function() {
    EndIf(EventFlag(1033420610));
    DisableCharacter(1033420610);
    DisableCharacterCollision(1033420610);
    if (!PlayerIsInOwnWorld()) {
        EnableCharacterInvincibility(1033420610);
    }
    WaitFor(EventFlag(1034432616));
    EnableCharacter(1033420610);
    EnableCharacterCollision(1033420610);
    EnableCharacterImmortality(1033420610);
    DisableCharacterHPBarDisplay(1033420610);
});
