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
    await PostApi.deletePost(id);
    dispatch({ type: "DELETING_SUCCESS", data: { postId: id } });
  } catch (error) {
    dispatch({ type: "DELETING_FAIL" });
    console.log(error);
  }
};

export const likePost = (id, userId) => async (dispatch) => {
  dispatch({ type: "LIKE_START" });
  try {
    await PostApi.likePost(id, userId);
    dispatch({ type: "LIKE_SUCCESS", data: { postId: id, userId: userId } });
  } catch (error) {
    dispatch({ type: "LIKE_FAIL" });
    console.log(error);
  }
};

export const unLikePost = (id, userId) => async (dispatch) => {
  dispatch({ type: "UNLIKE_START" });
  try {
    await PostApi.unLikePost(id, userId);
    dispatch({ type: "UNLIKE_SUCCESS", data: { postId: id, userId: userId } });
  } catch (error) {
    dispatch({ type: "UNLIKE_FAIL" });
    console.log(error);
  }
};

export const updatePost = (id, userId) => async (dispatch) => {
  dispatch({ type: "UPDATE_START" });
  try {
    await PostApi.updatePost(id, userId);
    dispatch({ type: "UPDATE_SUCCESS", data: { postId: id, userId: userId } });
  } catch (error) {
    dispatch({ type: "UPDATE_FAIL" });
    console.log(error);
  }
};
