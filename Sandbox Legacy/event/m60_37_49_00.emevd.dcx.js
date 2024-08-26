// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(1037490000, 1037491950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005790, 0, 1037490180, 1037492181, 1037492182, 1038480700, 23, 1037492180, 1037492181, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005791, 1037490180, 1037492181, 1037492182, 1038480700);
    InitializeCommonEvent(0, 90005792, 1037490180, 1037492181, 1037492182, 1038480700, 1037490300, 0);
    InitializeCommonEvent(0, 90005793, 1037490180, 1037492181, 1037492182, 1038480700, 1037492180, 0, 0);
    InitializeCommonEvent(0, 90005631, 1037491640, 61023);
    InitializeCommonEvent(0, 90005201, 1037490401, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1037490403, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1037490405, 30010, 20010, 1084227584, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1037493700, 1037490700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1037490700, true);
});

$Event(200, Default, function() {
    InitializeCommonEvent(0, 90005490, 1037490400, 1037490401, 1037491400, 0, 0, 1037492400, 1);
    InitializeCommonEvent(0, 90005490, 1037490402, 1037490403, 1037491402, 0, 0, 1037492402, 1);
    InitializeCommonEvent(0, 90005490, 1037490404, 1037490405, 1037491404, 0, 0, 1037492404, 1);
});

$Event(1037493700, Restart, function(X0_4) {
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 90100, false, false, false);
    DisableCharacterCollision(X0_4);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(400033));
    EndIf(!EventFlag(400031));
    WaitFor(ActionButtonInArea(6472, X0_4));
    RemoveItemFromPlayer(ItemType.Goods, 8154, 1);
    AwardItemLot(100330);
    EndEvent();
});
