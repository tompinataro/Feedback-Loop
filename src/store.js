import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const feeling = (state = 0, action) => {
  if (action.type === "SET_FEELING") {
    let newFeeling = action.payload;
    return newFeeling;
  } else if (action.type === "RESET_STORE") {
    let newFeeling = 0;
    return newFeeling;
  }
  return state;
};
const support = (state = 0, action) => {
  if (action.type === "SET_SUPPORT") {
    let newSupport = action.payload;
    return newSupport;
  } else if (action.type === "RESET_STORE") {
    let newFeeling = 0;
    return newFeeling;
  }
  return state;
};
const understanding = (state = 0, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    let newUnderstanding = action.payload;
    return newUnderstanding;
  } else if (action.type === "RESET_STORE") {
    let newFeeling = 0;
    return newFeeling;
  }
  return state;
};
const comments = (state = "", action) => {
  if (action.type === "SET_COMMENTS") {
    let newComments = action.payload;
    return newComments;
  } else if (action.type === "RESET_STORE") {
    let newFeeling = "";
    return newFeeling;
  }
  return state;
};

const store = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments,
  }),
  applyMiddleware(logger),
);

export default store;
