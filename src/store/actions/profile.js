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

export const updateProfile = updates => async dispatch => {
  try {
    const res = await axios.put("/api/users/", updates);
    console.log("Profile have been fetched", res.data);
    dispatch({
      type: UPDATED_PROFILE,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_PROFILE_LOGGED_OUT
    });
  }
};

export const markQuestionAsSolved = questionName => async dispatch => {
  console.log("Mark question as solved have been called");
  try {
    const res = await axios.post("/api/users/solved-question", {
      question: questionName
    });
    dispatch({
      type: UPDATED_PROFILE,
      payload: res.data
    });
    console.log("The question has been markes as solved", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const markQuestionAsUnSolved = questionName => async dispatch => {
  console.log("Mark questions as unsolved", questionName);
  try {
    const res = await axios.post("/api/users/unsolve-question", {
      question: questionName
    });
    dispatch({
      type: UPDATED_PROFILE,
      payload: res.data
    });
    console.log("the question have been mark as unsolved", res.data);
  } catch (error) {
    console.log(error);
  }
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export const updateImage = userImage => async dispatch => {
  let baseConverted = await getBase64(userImage);
  let image = { userImage: baseConverted };
  console.log(userImage);
  console.log(image);
  try {
    const res = await axios.post("/api/users/image", image);
    console.log("Profile have been fetched", res.data);
    dispatch({
      type: UPDATED_PROFILE,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_PROFILE_LOGGED_OUT
    });
  }
};

export const signUpUser = (name, email, password) => async dispatch => {
  try {
    console.log("Sign up users have been called");
    const res = await axios.post("/api/users/signup", {
      name,
      email,
      password
    });
    dispatch({
      type: UPDATE_PROFILE_LOGGED_IN,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    if (error.response) console.log(error.response);
    throw error.response;
  }
};
