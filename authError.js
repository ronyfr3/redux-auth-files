import {
  REGISTER_FAIL,
  LOGOUT_FAIL,
  LOGIN_FAIL,
} from "../constants/actionType";

const authError = {
  message: "",
};

const authErrorReducer = (state = authError, action) => {
  switch (action.type) {
    case REGISTER_FAIL:
      return { message: action.payload };
    case LOGOUT_FAIL:
      return { message: action.payload };
    case LOGIN_FAIL:
      return { message: action.payload };
    default:
      return state;
  }
};

export default authErrorReducer;
