import { userConstants } from '../constants';
import { userService } from '../../services/userService';
import { alertActions } from '../actions/alertAction';
import { history } from '../../helper/history';

export const userActions = {
    loginAction,
    logout,
    register,
    getAll,
    saveUser,
    delete: _delete
};

function loginAction(username, password) {
    return dispatch => {
        userService.login(username, password)
            .then(
                user => {
                    if (user) {
                        console.log("USER DATA ::: ", user);
                        dispatch(success(user));
                        localStorage.setItem('user', JSON.stringify(user));
                        history.push('/dashboard');

                    } else {
                        dispatch(failure("Invalid Credentials."));
                        dispatch(alertActions.error("Invalid Credentials."));
                        history.push('/login');
                    }



                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        userService.logout();
        dispatch(alertActions.success("Logout Succesfully."));
        return { type: userConstants.LOGOUT };
    }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {

    return dispatch => {

        userService.delete(id)
            .then(
                user => {
                    if (user.status === 200) {
                        dispatch(success(id));
                        dispatch(alertActions.success('Deleted'));
                    } else {
                        dispatch(alertActions.error('Invalid Id'));
                    }

                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}


function saveUser(data) {
    return dispatch => {
        dispatch(request(data));
        history.push('/users');
        dispatch(alertActions.success('Save data successful'));
        // userService.register(user)
        //     .then(
        //         user => {
        //             dispatch(success());
        //             history.push('/users');
        //             dispatch(alertActions.success('Save data successful'));
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //             dispatch(alertActions.error(error.toString()));
        //         }
        //     );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function getUser() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

