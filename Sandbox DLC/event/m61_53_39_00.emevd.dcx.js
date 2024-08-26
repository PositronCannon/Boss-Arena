// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2053390000, 2053391950, 0, 0, 0, 5);
    InitializeEvent(0, 2053392546, 0);
    InitializeEvent(0, 2053392547, 0);
    InitializeEvent(0, 2053392200, 2053390201, 2053392200);
    InitializeEvent(1, 2053392200, 2053390202, 2053392200);
    InitializeEvent(2, 2053392200, 2053390203, 2053392200);
    InitializeEvent(3, 2053392200, 2053390204, 2053392200);
    InitializeEvent(4, 2053392200, 2053390205, 2053392200);
    InitializeEvent(5, 2053392200, 2053390206, 2053392200);
    InitializeEvent(6, 2053392200, 2053390207, 2053392200);
    InitializeEvent(0, 2053392300, 580420, 580120, 2053390300, 30015, 20015, 2053391500, 2053391501);
});

$Event(2053392200, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(2054390800));
    DisableNetworkSync();
    CreateBulletOwner(X0_4);
    WaitFor(InArea(10000, X4_4));
    WaitRandomTimeSeconds(1.5, 5);
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

$Event(2053392300, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetSpEffect(X0_4, 10124);
    DisableCharacter(X8_4);
    DisableCharacterCollision(X8_4);
    DisableAsset(X20_4);
    DisableAsset(X24_4);
    DisableAssetTreasure(X24_4);
    SetEventFlagID(2053392300, OFF);
    EndIf(EventFlag(X0_4));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && EventFlag(X4_4) && EntityInRadiusOfEntity(X8_4, 10000, 15, 1));
    EnableAsset(X20_4);
    EnableAsset(X24_4);
    ForceAnimationPlayback(X20_4, 2, false, false, false);
    WaitFixedTimeSeconds(13);
    EnableCharacter(X8_4);
    ClearSpEffect(X0_4, 10124);
    ForceAnimationPlayback(X8_4, X12_4, false, false, false);
    SetEventFlagID(2053392300, ON);
    WaitFor(
        EventFlag(2053392300)
            && PlayerIsInOwnWorld()
            && EventFlag(X4_4)
            && EntityInRadiusOfEntity(X8_4, 10000, 5, 1));
    WaitFixedTimeSeconds(4);
    ForceAnimationPlayback(X8_4, X16_4, false, false, false);
    ForceAnimationPlayback(X20_4, 1, false, false, false);
    WaitFixedTimeSeconds(3.8);
    DisableCharacter(X8_4);
    DisableAsset(X20_4);
    EnableAssetTreasure(X24_4);
});

$Event(2053392546, Restart, function() {
    WaitFor(
        InArea(10000, 2053392546)
            && (CharacterType(10000, TargetType.BlackPhantom)
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.BluePhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    ForceAnimationPlayback(2053391546, 1, false, false, false);
    if (!EventFlag(70)) {
        if (EventFlag(50)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208500, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(51)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208510, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(52)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208520, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(53)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208530, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(54)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208540, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(55)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208550, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(56)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208560, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(57)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804208570, DamageTargetType.Character, 4, 20, 0);
        }
    } else {
L0:
        if (EventFlag(50)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218500, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(51)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218510, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(52)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218520, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(53)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218530, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(54)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218540, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(55)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218550, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(56)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218560, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(57)) {
            CreateDamagingAsset(2053392546, 2053391546, 200, 804218570, DamageTargetType.Character, 4, 20, 0);
        }
    }
L1:
    NoOp();
});

$Event(2053392547, Restart, function() {
    WaitFor(
        InArea(10000, 2053392547)
            && (CharacterType(10000, TargetType.BlackPhantom)
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.BluePhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    ForceAnimationPlayback(2053391547, 1, false, false, false);
    if (!EventFlag(70)) {
        if (EventFlag(50)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208500, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(51)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208510, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(52)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208520, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(53)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208530, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(54)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208540, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(55)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208550, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(56)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208560, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(57)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804208570, DamageTargetType.Character, 4, 20, 0);
        }
    } else {
L0:
        if (EventFlag(50)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218500, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(51)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218510, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(52)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218520, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(53)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218530, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(54)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218540, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(55)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218550, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(56)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218560, DamageTargetType.Character, 4, 20, 0);
        }
        if (EventFlag(57)) {
            CreateDamagingAsset(2053392547, 2053391547, 200, 804218570, DamageTargetType.Character, 4, 20, 0);
        }
    }
L1:
    NoOp();
});


