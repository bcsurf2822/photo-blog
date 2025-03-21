import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>

      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button
          onClick={() => props.removePost(post.id)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

Photo.propTypes = {
  posts: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photo;
