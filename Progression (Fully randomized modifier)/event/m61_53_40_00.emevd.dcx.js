// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(2053402200, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(2054390800));
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1, 3);
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
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


