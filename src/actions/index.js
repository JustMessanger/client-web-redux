import * as ActionType from './../constants/ActionType';

export const loginRequest = data => ({
    type: ActionType.LOGIN_REQUEST,
    data,
});
