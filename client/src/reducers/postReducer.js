const postReducer = (
  state = {
    posts: [],
    loading: false,
    error: false,
    uploading: false,
    deleting: false,
    like: false,
    unlike: false,
    updating: false,
    commenting: false,
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
            return action.data.postId !== post._id;
          }),
        ],
        error: false,
        deleting: false,
      };
    case "LIKE_START":
      return { ...state, error: false, like: true };
    case "LIKE_SUCCESS":
      const postLike = state.posts.find((post) => {
        return action.data.postId === post._id;
      });
      postLike.likes.push(action.data.userId);
      return {
        ...state,
        posts: [
          ...state.posts.filter((post) => {
            return action.data.postId !== post._id;
          }),
          postLike,
        ],
        error: false,
        like: false,
      };
    case "UNLIKE_START":
      return { ...state, error: false, unlike: true };
    case "UNLIKE_SUCCESS":
      // Step 1 : Récupération du post
      const postUnlike = state.posts.find((post) => {
        return action.data.postId === post._id;
      });

      // Step 2 : on enlève le like correspondant à l'utilisateur
      postUnlike.likes = postUnlike.likes.filter(
        (userId) => userId !== action.data.userId
      );
      // Step 3 : on récupère les anciens posts qui ne correspondent pas avec le post avec l'id qui correspond
      const unchangedPostList = state.posts.filter((post) => {
        return action.data.postId !== post._id;
      });

      // Step 4 : On mix les deux
      return {
        ...state,
        posts: [...unchangedPostList, postUnlike],
        error: false,
        unlike: false,
      };
    case "UPDATE_START":
      return { ...state, error: false, updating: true };
    case "UPDATE_SUCCESS":
      // Step 1 : Récupération du post
      const postUpdate = state.posts.find((post) => {
        return action.data.postId === post._id;
      });
      // Step 2 : Récupération des autres posts
      const postNoUpdate = state.posts.filter((post) => {
        return action.data.postId !== post._id;
      });
      // Step 3 : Modification du post récupéré

      postUpdate.desc = action.data.userId.desc;
      postUpdate.image = action.data.userId.image;

      // Step 4 : Retour de tout les posts
      return {
        ...state,
        posts: [...postNoUpdate, postUpdate],
      };
    case "COMMENT_START":
      return { ...state, error: false, commenting: true };
    case "COMMENT_SUCCESS":
      // Step 1 : Récupération du post
      const postComment = state.posts.find((post) => {
        return action.data.postId === post._id;
      });
      // Step 2 : Récupération des autres posts
      const postNoComment = state.posts.filter((post) => {
        return action.data.postId !== post._id;
      });
      // Step 3 : Modification du post récupéré
      postComment.comments.push(action.data.comment);

      // Step 4 : Retour de tout les posts
      console.log(action.data);
      return {
        ...state,
        posts: [...postNoComment, postComment],
      };
    default:
      return { ...state, posts: [...state.posts] };
  }
};

export default postReducer;
