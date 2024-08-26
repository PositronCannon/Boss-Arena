// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    //infinite hp/fp/stam
    InitializeCommonEvent(0, 90001001, 0);
    RegisterBonfire(2047450000, 2047451950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005870, 2047450800, 905840501, 12);
    //boss event
    InitializeCommonEvent(0, 90005860, 2047450800, 0, 2047450800, 0, 30955, 0);
    InitializeCommonEvent(0, 90005250, 2047450800, 2047452292, 0, -1);
    InitializeCommonEvent(0, 90005872, 2047450800, 12, 0);
    InitializeCommonEvent(0, 90005250, 2047450203, 2047452203, 0, -1);
    InitializeCommonEvent(0, 90005250, 2047450204, 2047452310, 0, -1);
    InitializeCommonEvent(0, 90005251, 2047450208, 1099956224, 0, -1);
    InitializeCommonEvent(0, 90005250, 2047450214, 2047452216, 0, -1);
    InitializeCommonEvent(0, 90005250, 2047450235, 2047452216, 1065353216, -1);
    InitializeCommonEvent(0, 90005251, 2047450222, 1090519040, 0, -1);
    InitializeCommonEvent(0, 90005250, 2047450236, 2047452236, 0, -1);
    InitializeCommonEvent(0, 90005250, 2047450223, 2047452223, 0, -1);
    InitializeCommonEvent(0, 90005251, 2047450224, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005250, 2047450310, 2047452310, 0, -1);
    InitializeCommonEvent(0, 90005301, 2047450380, 2047450380, 2047450700, 1086324736, 0);
    InitializeCommonEvent(0, 90005557, 2047451680);
    InitializeCommonEvent(0, 90005557, 2047451681);
    InitializeCommonEvent(0, 90005557, 2047451682);
    InitializeCommonEvent(0, 90005557, 2047451683);
    InitializeCommonEvent(0, 90005557, 2047451684);
    InitializeCommonEvent(0, 90005557, 2047451685);
    InitializeCommonEvent(0, 90005557, 2047451686);
    InitializeCommonEvent(0, 90005557, 2047451687);
    InitializeCommonEvent(0, 90005557, 2047451688);
    InitializeCommonEvent(0, 90005556, 2047451689, 2047457800);
    InitializeEvent(0, 2047452580, 0);
    InitializeEvent(0, 2047452540, 2047450540, 2047452540);
});

$Event(2047452540, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, X4_4));
    SetEventFlagID(X0_4, ON);
    EndEvent();
});

$Event(2047452580, Default, function() {
    RegisterLadder(2047450580, 2047450581, 2047451580);
    RegisterLadder(2047450582, 2047450583, 2047451582);
    RegisterLadder(2047450584, 2047450585, 2047451584);
    RegisterLadder(2047450586, 2047450587, 2047451586);
});
