// src/components/CreateArticle.jsx
import React, { useState } from 'react';

function CreateArticle({ onPost, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (title && content) {
      const newArticle = {
        id: Date.now(),
        title,
        content,
        contentSnippet: content.substring(0, 100) + '...',
        createdDate: new Date().toLocaleString(),
        comments: [],
      };
      onPost(newArticle);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Article</h1>
      <div className="mb-4">
        <label className="block text-white">Article Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded w-full py-2 px-3 mt-1"
          placeholder="Enter the title"
        />
      </div>
      <div className="mb-6">
        <label className="block text-white">Article Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded w-full py-2 px-3 mt-1 h-40"
          placeholder="Write your article content here"
        ></textarea>
      </div>
      <button
        onClick={handlePost}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-2"
      >
        Post
      </button>
      <button
        onClick={onCancel}
        className="bg-white hover:bg-white text-gray-900 font-semibold py-2 px-4 rounded"
      >
        Cancel
      </button>
    </div>
  );
}

export default CreateArticle;
