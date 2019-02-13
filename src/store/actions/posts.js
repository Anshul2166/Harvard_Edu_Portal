import axios from "axios";

export const createPost = (community, title, description) => async dispatch => {
  try {
    console.log("Create post have been called");
    const res = await axios.post("/api/posts/create-post", {
      title,
      community,
      description: JSON.stringify(description)
    });
    console.log("Post have been successfully created", res.data);
  } catch (error) {
    console.log(error);
  }
};
