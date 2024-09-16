// src/components/TopScreen.jsx
import React, { useState } from 'react';
import DeleteModal from './DeleteModal';

function TopScreen({ articles, onCreateNew, onViewArticle, onDeleteArticle }) {
  const [showModal, setShowModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const handleDelete = (id) => {
    setArticleToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    onDeleteArticle(articleToDelete);
    setShowModal(false);
    setArticleToDelete(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bulletin Board</h1>
      <button
        onClick={onCreateNew}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-6"
      >
        Create New Article
      </button>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id} className="border p-4 rounded shadow">
            <h2
              onClick={() => onViewArticle(article)}
              className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              {article.title}
            </h2>
            <p className="text-white mt-2">{article.contentSnippet}</p>
            <p className="text-white text-sm mt-1">
              Created on: {article.createdDate}
            </p>
            <button
              onClick={() => handleDelete(article.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded mt-3"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {showModal && (
        <DeleteModal
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default TopScreen;
