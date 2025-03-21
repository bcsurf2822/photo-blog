import { useParams } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

function Single({ posts, comments, addComment }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const postComments = comments[id] || [];

  return (
    <div className="single-photo">
      <Photo post={post} />
      <Comments addComment={addComment} postId={id} comments={postComments} />
    </div>
  );
}

export default Single;
