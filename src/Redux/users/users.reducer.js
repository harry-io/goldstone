import {
  GET_USERS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
} from "./users.actionTypes";

const initState = {
  isloading: false,
  isError: false,
  users: [],
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST_LOADING: {
      return {
        ...state,
        isloading: true,
      };
    }
    case REQUEST_FAILURE: {
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    }
    case GET_USERS: {
      return {
        ...state,
        isloading: false,
        isError: false,
        users: payload,
      };
    }
    default: {
      return state;
    }
  }
};
