import React from "react";

const CommentsList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case "pending":
        content = "This comment is awaiting moderation";
        break;
      case "rejected":
        content = "This comment had been rejected";
        break;
      default:
        content = comment.content;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentsList;
