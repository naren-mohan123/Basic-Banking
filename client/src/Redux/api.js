import axios from 'axios';

const url = "http://localhost:3000";

export const fetchUsers = () => axios.get(`${url}/users`);
export const createUser = (newUser) => axios.post(`${url}/users`, newUser);
export const updatePost = (id,post) => axios.put(`${url}/users/${id}`, post);
export const fetchTransactions = () => axios.get(`${url}/transferhistroy`);
export const UpdateTransactions = (newTransaction) => axios.post(`${url}/transferhistroy`,newTransaction);