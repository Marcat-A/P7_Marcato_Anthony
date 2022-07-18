import React from "react";
// import { getTimelinePosts } from "../../actions/PostAction";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  // useEffect(() => {
  //   dispatch(getTimelinePosts(user._id));
  // });
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  posts.sort(function (a, b) {
    const dateA = new Date(a.createdAt),
      dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  if (posts.length === 0) {
    return (
      <div className="noposts">
        {"<-"} No posts {"->"}{" "}
      </div>
    );
  } else {
    return (
      <div className="Posts">
        {loading
          ? "Fetching posts...."
          : posts.map((post, id) => {
              return <Post data={post} key={id} />;
            })}
      </div>
    );
  }
};

export default Posts;
