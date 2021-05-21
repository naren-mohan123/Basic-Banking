import * as ActionTypes from "./ActionTypes";
import * as api from "./api";

export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchUsers();
  
      dispatch({ type: ActionTypes.USER_FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createUser = (user) => async (dispatch) => {
    try {
      const { data } = await api.createUser(user);
  
      dispatch({ type: ActionTypes.USER_CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateUser = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: ActionTypes.USER_UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const getTransactions = () => async(dispatch) => {
  try{
    const {data}  = await api.fetchTransactions();

    dispatch({type : ActionTypes.TRANSACTION_FETCH_ALL,payload : data});
  }catch (error) {
    console.log(error.message);
  }
}

export const updateTransactions = (Transaction) => async(dispatch) => {
  try{
    const {data}  = await api.UpdateTransactions(Transaction);
    
    dispatch({type : ActionTypes.TRANSACTION_CREATE,payload : data});
  }catch (error) {
    console.log(error.message);
  }
}
