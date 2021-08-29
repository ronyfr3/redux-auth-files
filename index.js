import { combineReducers } from "redux";
import { ProductReducer } from "./product";
import { cartReducer } from "./cart";
import { notificationReducer } from "./notification";
import authErrorReducer from "./authError";
import authreducer from "./Auth";

export const reducers = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
  authState: authreducer,
  authError: authErrorReducer,
  notification: notificationReducer,
});
