import axios from "axios";
import {
  EDIT_USER,
  GET_USERS,
  LOGIN_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
} from "./users.actionTypes";

export const req_loading = () => {
  return { type: REQUEST_LOADING };
};
export const req_failure = () => {
  return { type: REQUEST_FAILURE };
};
export const login_success = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const get_users = (payload) => {
  return {
    type: GET_USERS,
    payload,
  };
};
export const edit_user = () => {
  return {
    type: EDIT_USER,
  };
};
// ALL ACTIONS
// FETCH USERS
export const fetch_users = (dispatch) => {
  dispatch(req_loading());
  //
  axios
    .get(`https://sore-erin-elk-ring.cyclic.app/users`)
    .then((res) => {
      dispatch(get_users(res.data));
    })
    .catch((error) => console.log(error));
};
// LOGIN
export const login_action = (body, navigate) => (dispatch) => {
  dispatch(req_loading());
  //
  axios
    .post(`https://gorest.co.in/public-api/users`, body, {
      headers: {
        Authorization: `Bearer eeba3f68bc00ffe89109adeacaf3c67077a2d05fa45d95db693814b3f4f5bf7b`,
      },
    })
    .then((res) => {
      dispatch(login_success(res.data.data));
      console.log(res.data.data);
    })
    .then(() => alert("Login success & redirecting to users page..."))
    .then(() => navigate("/"))
    .catch((error) => console.log(error));
};
// EDIT USER DETAIL
export const edit_user_action = (id, body) => (dispatch) => {
  dispatch(req_loading());
  axios
    .patch(`https://sore-erin-elk-ring.cyclic.app/users/${id}`, body)
    .then((res) => alert("Details updated."))
    .then(() => fetch_users(dispatch))
    .catch((error) => console.log(error));
};
