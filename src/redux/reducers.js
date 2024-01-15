import { combineReducers } from "redux";
import drawerReducer from "./drawer/drawerReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
	drawer: drawerReducer,
	user: userReducer,
});
