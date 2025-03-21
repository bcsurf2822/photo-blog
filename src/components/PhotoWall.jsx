import PropTypes from "prop-types";
import Photo from "./Photo";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
 <div className="addIcon-container">
  <Link className="addIcon" onClick={props.onNavigate} to="/AddPhoto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  </Link>
</div>

      <div className="photoGrid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
            key={index}
            post={post}
            removePost={props.removePost}
            comments={props.comments}
          />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired,
};

export default PhotoWall;
