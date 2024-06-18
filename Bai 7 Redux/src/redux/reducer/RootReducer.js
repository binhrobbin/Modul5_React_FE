import {combineReducers} from "redux";
import {studentReducer} from "./StudentReducer";

// Tách nhỏ reducer thành nhiều hàm nhỏ hơn, xử lý cho từng state => clean code
const rootReducer = combineReducers({
    students: studentReducer,
    // teachers: teacherReducer,
    // username: usernameReducer
})

export default rootReducer;