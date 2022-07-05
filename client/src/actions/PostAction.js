import * as PostApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "RETREIVING_FAIL" });
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: "DELETING_START" });
  try {
    const { data } = await PostApi.deletePost(id);
    dispatch({ type: "DELETING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "DELETING_FAIL" });
    console.log(error);
  }
};
