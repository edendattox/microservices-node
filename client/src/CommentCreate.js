import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (content.length > 0) {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content,
      });
    }

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
