import * as ActionTypes from "./ActionTypes";

export default (users = [], action) => {
  switch (action.type) {
    case ActionTypes.USER_FETCH_ALL:
      return action.payload;
    case ActionTypes.USER_CREATE:
      return [...users, action.payload];
    case ActionTypes.USER_UPDATE:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    default:
      return users;
  }
};