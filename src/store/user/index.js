export const userActions = {
    GET_USER: 'USER/GET_USER',
    GET_USER_SUCCESS: 'USER/GET_USER_SUCCESS',
    GET_USER_ERROR: 'USER/GET_USER_ERROR',
}
export const getUserSuccess = user => ({
    type: userActions.GET_USER_SUCCESS,
    user
});
export default (state = {}, action) => {
    switch (action.type) {
        case userActions.GET_USER_SUCCESS:
            return action.user
        default:
            return state;
    }
};