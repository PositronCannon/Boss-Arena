// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(1045352200, Restart, function() {
    
    
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, 1045350200, 30, 1);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(1045350200, 3011, false, false, false);
    EndEvent();
});
