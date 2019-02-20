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

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export const updateImage=(userImage)=>async dispatch=>{
  let baseConverted=await getBase64(userImage);
  let image={userImage:baseConverted};
  console.log(userImage);
  console.log(image);
  try {
    const res = await axios.post("/api/users/image",image);
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