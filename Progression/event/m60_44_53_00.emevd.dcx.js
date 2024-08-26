// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005870, 1044530800, 904980605, 24);
    InitializeCommonEvent(0, 90005860, 1044530800, 0, 1044530800, 0, 1044530300, 0);
    //init boss reward
    InitializeEvent(0, 1044539990, 0);
});

//generic boss event
$Event(1044539990, Default, function() {
    WaitFor(CharacterDead(1044530800));
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0,90001033,1049304204,1049304110,-1,-1,1049304871,1049304872,1049304873,1049304874,1049305432,1049305434,1049305436,1049305441,1049300204);
});

$Event(50, Default, function() {
    if (EventFlag(1049308079))
        SetCurrentTime(0, 0, 0, false, false, false, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530450, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530400, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530401, 30001, 20001, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530402, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530403, 30001, 20001, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530404, 30000, 20000, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530405, 30001, 20001, 1044532450, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530200, 30014, 20014, 1106247680, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530201, 30014, 20014, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530220, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530223, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530224, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530225, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530226, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530227, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530213, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530217, 30014, 20014, 1084227584, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530231, 30016, 20016, 1101004800, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1044530232, 30016, 20016, 1044532237, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1044530233, 30016, 20016, 1044532237, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1044530234, 30016, 20016, 1044532237, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530205, 30018, 20018, 1044532237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530206, 30018, 20018, 1044532237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1044530237, 30018, 20018, 1044532237, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1044530800, 30000, 20000, 1106247680, 0, 0, 0, 0, 0);
});
