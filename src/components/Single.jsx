import { useParams } from "react-router-dom";
import Photo from "./Photo";

function Single(props) {
  const { id } = useParams();
  const post = props.posts.find((p) => p.id === id);
  console.log(post);
  return (
    <div className="single-photo">
      <Photo post={post} />
    </div>
  );
}

export default Single;
