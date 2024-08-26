// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2048430000, 2048431950, 0, 0, 0, 0);
    RegisterBonfire(2048430001, 2048431951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005250, 2048430310, 2048432300, 0, 0);
    InitializeCommonEvent(0, 90005250, 2048430300, 2048432300, 1082130432, 0);
    InitializeCommonEvent(0, 90005221, 2048430200, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430202, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430203, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430209, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 90005221, 2048430211, 30003, 20003, 0, 0);
    InitializeCommonEvent(0, 900005580, 580600, 2048431602, 9146);
    InitializeEvent(0, 2048430700, 2048430700, 4460, 4463, 4465, 1106247680, 90100, 4900, 2048432700, 2048432706);
    InitializeCommonEvent(0, 90005749, 2048430701, 2048430700, 4465, 2048432706);
    InitializeEvent(0, 2048430701, 4465, 4460, 2048439213, 2048439207, 2048439208, 2);
    InitializeCommonEvent(0, 90005744, 2048430700, 2048439217, 2048439217, 90200);
    InitializeCommonEvent(0, 90005748, 2048431700, 206020, 1030027, 1106247680, 4917);
});

$Event(2048430700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    EnableCharacterInvincibility(X0_4);
    EndIf(EventFlag(X24_4));
    if (!EventFlag(X12_4)) {
        WaitFor(EventFlag(X12_4));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(X4_4));
    GotoIf(L4, EventFlag(X8_4));
L1:
    GotoIf(L20, EventFlag(X32_4));
    EnableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterTalkRange(X0_4, X16_4);
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
    WaitFor(CharacterBackreadStatus(X0_4) && EventFlag(X4_4));
    WaitFixedTimeRealFrames(1);
    if (X28_4 == 0) {
        ResetCharacterPosition(X0_4);
    } else {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X28_4, -1);
    }
    Goto(L20);
L4:
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    Goto(L20);
L20:
    WaitFor(!EventFlag(X12_4));
    RestartEvent();
});

$Event(2048430701, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(X0_4));
    EndIf(!EventFlag(X4_4));
    EndIf(!EventFlag(X8_4));
    EndIf(EventFlag(X12_4));
    IncrementEventValue(X16_4, 4, X20_4);
    if (EventValue(X16_4, 4) >= X20_4) {
        SetEventFlagID(X12_4, ON);
    }
    EndEvent();
});

$Event(2048430705, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeFrames(1);
    DisableCharacter(X0_4);
    DisableCharacter(X4_4);
    SetEventFlagID(X16_4, ON);
    EndEvent();
    if (EventFlag(X20_4)) {
        if (!EventFlag(X24_4)) {
            if (!(EventFlag(X8_4) && !EventFlag(X28_4))) {
                Goto(L1);
L1:
                if (!EventFlag(X12_4)) {
                    EnableCharacter(X0_4);
                    ForceAnimationPlayback(X0_4, 30007, false, false, false);
                    EndEvent();
                }
                EnableCharacter(X4_4);
                ForceAnimationPlayback(X4_4, 30008, false, false, false);
                SetCharacterTeamType(X4_4, TeamType.Disabled);
                DisableCharacterCollision(X4_4);
                EndEvent();
            }
        }
    }
L20:
    EndEvent();
});


