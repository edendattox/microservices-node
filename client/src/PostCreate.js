import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title.length > 0) {
      await axios.post("http://localhost:4000/posts", {
        title,
      });
    }

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
