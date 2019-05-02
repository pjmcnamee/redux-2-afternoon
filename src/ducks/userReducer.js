import axios from "axios";

const initialState = {
  email: null,
  fistName: null,
  lastName: null
};

export const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export function requestUserData() {
  let user = axios
    .get("/auth/user-data")
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  return {
    type: REQUEST_USER_DATA,
    payload: user
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
	case REQUEST_USER_DATA + "_FULFILLED":
      const { email, firstName, lastName } = action.payload.user;
      return {email, firstName, lastName };
    default:
      return state;
  }
}
