import axios from "axios";
import {
  UPDATE_PROFILE_LOGGED_IN,
  UPDATE_PROFILE_LOGGED_OUT
} from "../types/profileTypes";

export const fetchProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/users/get-user");
    console.log("Profile have been fetched", res.data);
    dispatch({
      type: UPDATE_PROFILE_LOGGED_IN,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_PROFILE_LOGGED_OUT
    });
  }
};
