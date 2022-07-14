import * as UserApi from "../api/UserRequest";

export const updateUser = (id, userData) => async (dispatch) => {
  dispatch({ type: "UPDATING_START" });
  try {
    const { data } = await UserApi.updateUser(id, userData);
    dispatch({ type: "UPDATING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATING_FAIL" });
  }
};

export const followUser = (person, user) => async (dispatch) => {
  dispatch({ type: "FOLLOW_START" });
  try {
    const { data } = await UserApi.followUser(person, user);
    dispatch({ type: "FOLLOW_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "FOLLOW_FAIL" });
  }
};

export const unFollowUser = (id, data) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_USER" });
  try {
    const { toto } = await UserApi.unFollowUser(id, data);
    dispatch({ type: "UNFOLLOW_SUCCESS", toto: toto });
  } catch (error) {
    dispatch({ type: "UNFOLLOW_FAIL" });
  }
};
