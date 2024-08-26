// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 90005261, 2054400306, 2054402306, 1086324736, 0, 0);
    InitializeEvent(0, 2054402200, 2054400200, 2054402200);
    InitializeEvent(1, 2054402200, 2054400201, 2054402200);
    InitializeEvent(2, 2054402200, 2054400202, 2054402200);
    InitializeEvent(3, 2054402200, 2054400203, 2054402200);
    InitializeEvent(4, 2054402200, 2054400204, 2054402200);
    InitializeEvent(5, 2054402200, 2054400205, 2054402200);
    InitializeEvent(6, 2054402200, 2054400206, 2054402200);
    InitializeEvent(7, 2054402200, 2054400207, 2054402200);
    InitializeEvent(8, 2054402200, 2054400208, 2054402200);
    InitializeEvent(9, 2054402200, 2054400209, 2054402200);
});

$Event(2054402200, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(2054390800));
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1, 5);
    if (!EventFlag(70)) {
        if (EventFlag(50)) {
            ShootBullet(X0_4, X0_4, -1, 804008500, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X0_4, -1, 804008510, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X0_4, -1, 804008520, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X0_4, -1, 804008530, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X0_4, -1, 804008540, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X0_4, -1, 804008550, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X0_4, -1, 804008560, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X0_4, -1, 804008570, 0, 0, 0);
        }
    } else {
L0:
        if (EventFlag(50)) {
            ShootBullet(X0_4, X0_4, -1, 804018500, 0, 0, 0);
        }
        if (EventFlag(51)) {
            ShootBullet(X0_4, X0_4, -1, 804018510, 0, 0, 0);
        }
        if (EventFlag(52)) {
            ShootBullet(X0_4, X0_4, -1, 804018520, 0, 0, 0);
        }
        if (EventFlag(53)) {
            ShootBullet(X0_4, X0_4, -1, 804018530, 0, 0, 0);
        }
        if (EventFlag(54)) {
            ShootBullet(X0_4, X0_4, -1, 804018540, 0, 0, 0);
        }
        if (EventFlag(55)) {
            ShootBullet(X0_4, X0_4, -1, 804018550, 0, 0, 0);
        }
        if (EventFlag(56)) {
            ShootBullet(X0_4, X0_4, -1, 804018560, 0, 0, 0);
        }
        if (EventFlag(57)) {
            ShootBullet(X0_4, X0_4, -1, 804018570, 0, 0, 0);
        }
    }
L1:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


