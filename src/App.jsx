// src/App.jsx
import React, { useState } from 'react';
import TopScreen from './components/TopScreen';
import CreateArticle from './components/CreateArticle';
import ArticleDetail from './components/ArticleDetail';

function App() {
  const [articles, setArticles] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('top');
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const addArticle = (article) => {
    setArticles([article, ...articles]);
  };

  const deleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  const addComment = (articleId, comment) => {
    setArticles(
      articles.map((article) =>
        article.id === articleId
          ? { ...article, comments: [comment, ...article.comments] }
          : article
      )
    );
  };

  return (
    <div className="flex justify-center w-screen">
      {currentScreen === 'top' && (
        <TopScreen
          articles={articles}
          onCreateNew={() => setCurrentScreen('create')}
          onViewArticle={(article) => {
            setSelectedArticleId(article.id);
            setCurrentScreen('detail');
          }}
          onDeleteArticle={deleteArticle}
        />
      )}
      {currentScreen === 'create' && (
        <CreateArticle
          onPost={(article) => {
            addArticle(article);
            setCurrentScreen('top');
          }}
          onCancel={() => setCurrentScreen('top')}
        />
      )}
      {currentScreen === 'detail' && selectedArticleId && (
        <ArticleDetail
          article={articles.find((article) => article.id === selectedArticleId)}
          onBack={() => setCurrentScreen('top')}
          onAddComment={(comment) => {
            addComment(selectedArticleId, comment);
          }}
        />
      )}
    </div>
  );
}

export default App;
