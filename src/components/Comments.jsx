import { useState } from "react";

export default function Comments({ addComment, postId, comments = [] }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(postId, text);
      setText("");
    }
  };

  return (
    <div className="comment">
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>

      {comments.map((comment, i) => (
        <p key={i}>{comment}</p>
      ))}
    </div>
  );
}
