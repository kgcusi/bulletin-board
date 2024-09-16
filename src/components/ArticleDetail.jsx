// src/components/ArticleDetail.jsx
import React from 'react';
import CommentForm from './CommentForm';

function ArticleDetail({ article, onBack, onAddComment }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="bg-white hover:bg-white text-white font-semibold py-2 px-4 rounded mb-6"
      >
        Back to Articles
      </button>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-white mb-4">{article.content}</p>
      <p className="text-white text-sm mb-6">
        Created on: {article.createdDate}
      </p>
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {article.comments && article.comments.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {article.comments.map((comment) => (
            <li key={comment.id} className="border p-3 rounded shadow">
              <p>{comment.content}</p>
              <p className="text-white text-sm mt-2">
                Commented on: {comment.createdDate}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-6">No comments yet.</p>
      )}
      <CommentForm
        onAddComment={(commentContent) => {
          const newComment = {
            id: Date.now(),
            content: commentContent,
            createdDate: new Date().toLocaleString(),
          };
          onAddComment(newComment);
        }}
      />
    </div>
  );
}

export default ArticleDetail;
