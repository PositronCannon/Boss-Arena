// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005201, 2047370210, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370211, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370212, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370213, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370214, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370220, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370221, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370222, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370223, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370224, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370225, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370226, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370227, 30002, 20002, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370228, 30002, 20002, 1103626240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 2047370229, 30002, 20002, 1103626240, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005301, 2047370300, 2047370300, 2047370010, 1086324736, 0);
});

$Event(2047372200, Restart, function(X0_4, X4_4) {
    EndIf(SpecialStandbyEndedFlag(X0_4));
    ForceAnimationPlayback(X0_4, 701, true, false, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.WhitePhantom)
            || CharacterType(10000, TargetType.BluePhantom))
            && EntityInRadiusOfEntity(10000, X0_4, X4_4, 1));
    SetSpecialStandbyEndedFlag(X0_4, ON);
    ForceAnimationPlayback(X0_4, 1701, false, true, false);
});


