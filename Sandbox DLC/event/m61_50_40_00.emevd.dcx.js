// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005250, 2050400200, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400201, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400202, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400203, 2050402200, 0, 0);
    InitializeCommonEvent(0, 90005250, 2050400204, 2050402200, 0, 0);
    InitializeEvent(0, 2050402200, 2050400201);
    InitializeEvent(0, 2050402210, 2050400201, 2050400202);
    InitializeEvent(1, 2050402210, 2050400202, 2050400203);
    InitializeEvent(2, 2050402210, 2050400203, 2050400204);
    InitializeEvent(3, 2050402210, 2050400204, 2050400205);
    InitializeCommonEvent(0, 90005261, 2050400210, 2050402210, 1092616192, 0, 1703);
    InitializeEvent(0, 2050402600, 0);
});

$Event(2050402200, Restart, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    sp = !CharacterHasSpEffect(X0_4, 20011075);
    SetSpEffect(X0_4, 20011073);
});

$Event(2050402210, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 20011075));
    ClearSpEffect(X0_4, 20011076);
    WaitFixedTimeSeconds(10);
    SetSpEffect(X4_4, 20011073);
});

$Event(2050402600, Default, function() {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(2050400600)) {
        DisableObjAct(2050401600, 52407);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(2050400000);
        EndEvent();
    }
    if (PlayerHasItem(ItemType.Goods, 2008008)) {
        WaitFor(
            PlayerIsInOwnWorld()
                && PlayerHasItem(ItemType.Goods, 2008008)
                && ObjActEventFlag(2050403600));
        SetNetworkconnectedEventFlagID(2050400600, ON);
        WaitFixedTimeSeconds(10);
        AwardItemsIncludingClients(2050400000);
        EndEvent();
    }
L10:
    DisableObjAct(2050401600, 52407);
    WaitFor(PlayerHasItem(ItemType.Goods, 2008008));
    EnableObjAct(2050401600, 52407);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});


