import * as ActionTypes from "./ActionTypes";

export default (transactions = [], action) => {
  switch (action.type) {
    case ActionTypes.TRANSACTION_FETCH_ALL:
      return action.payload;
    case ActionTypes.TRANSACTION_CREATE:
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};