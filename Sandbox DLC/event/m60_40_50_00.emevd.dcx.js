// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    
    InitializeEvent(0, 1040502200, 1040502200);
    InitializeEvent(1, 1040502200, 1040502201);
    InitializeEvent(2, 1040502200, 1040502202);
    InitializeEvent(3, 1040502200, 1040502203);
    InitializeEvent(4, 1040502200, 1040502204);
    InitializeEvent(5, 1040502200, 1040502205);
    InitializeEvent(6, 1040502200, 1040502206);
    InitializeEvent(7, 1040502200, 1040502207);
    InitializeEvent(8, 1040502200, 1040502208);
    InitializeEvent(9, 1040502200, 1040502209);
    InitializeEvent(10, 1040502200, 1040502210);
    InitializeEvent(11, 1040502200, 1040502211);
    InitializeEvent(12, 1040502200, 1040502212);
    InitializeEvent(13, 1040502200, 1040502213);
    InitializeEvent(14, 1040502200, 1040502214);
    InitializeEvent(15, 1040502200, 1040502215);
    InitializeEvent(16, 1040502200, 1040502216);
    InitializeEvent(17, 1040502200, 1040502217);
    InitializeEvent(18, 1040502200, 1040502218);
    InitializeEvent(19, 1040502200, 1040502219);
    InitializeEvent(20, 1040502200, 1040502220);
    InitializeEvent(21, 1040502200, 1040502221);
    InitializeEvent(22, 1040502200, 1040502222);
    InitializeEvent(23, 1040502200, 1040502223);
    InitializeEvent(24, 1040502200, 1040502224);
    InitializeEvent(25, 1040502200, 1040502225);
    InitializeEvent(26, 1040502200, 1040502226);
});

$Event(1040502200, Restart, function(X0_4) {
    if (!EventFlag(1041500800)) {
        WaitFor(CharacterDead(1041500800));
    }
L0:
    DeleteMapSFX(X0_4, false);
    EndEvent();
});
