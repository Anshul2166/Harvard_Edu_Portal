import axios from "axios";
import { UPDATE_COMMUNITIES_LIST } from "../types/communitiesTypes";

export const createCommunity = (name, description) => async dispatch => {
  try {
    const community = await axios.post("/api/communities/create", {
      name,
      description
    });
    console.log("Community have been successfully created");
  } catch (error) {
    console.log(error, error.response);
    throw error.response;
  }
};

export const fetchCommunities = () => async dispatch => {
  try {
    const res = await axios.get("/api/communities/list");
    console.log("Communties have been fetched", res.data);
    dispatch({
      type: UPDATE_COMMUNITIES_LIST,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
