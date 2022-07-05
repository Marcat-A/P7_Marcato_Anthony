const postReducer = (
  state = {
    posts: [],
    loading: false,
    error: false,
    uploading: false,
    deleting: false,
  },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "DELETING_START":
      return { ...state, error: false, deleting: true };
    case "DELETING_SUCCESS":
      return {
        ...state,
        posts: [
          ...state.posts.filter((post) => {
            return post.id !== post._id;
          }),
        ],
      };
    default:
      return state;
  }
};

export default postReducer;
