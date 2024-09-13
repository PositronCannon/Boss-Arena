// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1051412200, 1051410210, 1051411210, 1051412210);
    InitializeCommonEvent(0, 90005300, 1051410290, 1051410290, 40420, 0, 0);
});

$Event(1051412200, Restart, function(X0_4, X4_4, X8_4) {
    DisableCharacter(X0_4);
    EndIf(EventFlag(X8_4));
    EndIf(CharacterDead(X0_4));
    DisableCharacterHPBarDisplay(X0_4);
    WaitFor(
        InArea(10000, X8_4)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    CreateAssetfollowingSFX(X4_4, 100, 620383);
    EnableCharacter(X0_4);
    SetNetworkconnectedEventFlagID(X8_4, ON);
    WaitFixedTimeSeconds(2);
    DeleteAssetfollowingSFX(X4_4, true);
    ForceAnimationPlayback(X0_4, 20001, false, false, false);
    WaitFixedTimeSeconds(1.9);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X0_4, 20004, false, false, false);
    WaitFixedTimeSeconds(1);
    DisableCharacter(X0_4);
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});
