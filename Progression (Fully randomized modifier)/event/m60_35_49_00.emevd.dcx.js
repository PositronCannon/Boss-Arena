// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //inf hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    InitializeEvent(0, 1035492220, 0);
    InitializeCommonEvent(0, 90005631, 1035491640, 61022);
});

$Event(1035492220, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, 1035490220, 30, 1);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(1035490220, 3011, false, false, false);
    WaitFixedTimeSeconds(5);
    TriggerAISound(4020, 1035492220, TargetEntityType.Area);
    EndEvent();
});
