// src/components/CommentForm.jsx
import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [commentContent, setCommentContent] = useState('');

  const handleAddComment = () => {
    if (commentContent) {
      onAddComment(commentContent);
      setCommentContent('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Add a Comment</h3>
      <textarea
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        className="border rounded w-full py-2 px-3 mt-1 h-24"
        placeholder="Write your comment here"
      ></textarea>
      <button
        onClick={handleAddComment}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-3"
      >
        Add Comment
      </button>
    </div>
  );
}

export default CommentForm;
