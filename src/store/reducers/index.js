import { combineReducers } from "redux";

import LoginReducer from "./loginReducer";
import AlertReducer from "./alertReducer";
import UserReducer from "./userReducer";
import AuthReducer from "./authReducer";

const rootReducer = combineReducers({
    LoginRed: LoginReducer,
    AlertRed: AlertReducer,
    UserRed: UserReducer,
    AuthRed: AuthReducer
});

export default rootReducer;