import axios from "axios";
import {
  UPDATE_PROFILE_LOGGED_IN,
  UPDATE_PROFILE_LOGGED_OUT,
  UPDATED_PROFILE
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

export const updateProfile=(updates)=>async dispatch=>{
  try {
    const res = await axios.put("/api/users/",updates);
    console.log("Profile have been fetched", res.data);
    dispatch({
      type: UPDATED_PROFILE
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_PROFILE_LOGGED_OUT
    });
  }
}
