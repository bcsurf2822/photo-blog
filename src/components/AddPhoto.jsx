import { Component } from "react";
import { useNavigate } from "react-router-dom";

function AddPhoto({ addPost }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };

    if (description && imageLink) {
      addPost(post);
      navigate("/");
    }
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Description" name="description" />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

export default AddPhoto;
