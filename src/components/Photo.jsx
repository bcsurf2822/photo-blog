import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photo({ post, removePost, comments }) {
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>

      <figcaption>
        <p>{post.description}</p>
      </figcaption>

      <div className="button-container">
        <button onClick={() => removePost(post.id)} className="remove-button">
          Remove
        </button>

        <Link className="button" to={`/single/${post.id}`}> 
 <div className="comment-count"> 
 <div className="speech-bubble"> </div>
0
 </div>
 </Link>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default Photo;
