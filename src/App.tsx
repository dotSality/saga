import React from 'react';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestNewsSelector, getPopularNewsSelector } from './redux/selectors/app-selector';
import { getNews } from './redux/slices/app-slice';

function App() {
  const latestNews = useSelector(getLatestNewsSelector);

  const popularNews = useSelector(getPopularNewsSelector);

  const dispatch = useDispatch();

  const handleNews = () => dispatch(getNews())

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-container_result">Latest news</h1>
        <div className="app-container_news">
          {latestNews.map(({ title, objectID }) => <span key={objectID}>{title}</span>)}
        </div>
        <div className="app-container-buttons">
          <button className="app-container-buttons_button" onClick={handleNews}>Get latest news</button>
        </div>
      </div>
      <div className="app-container">
        <h1 className="app-container_result">Popular news</h1>
        <div className="app-container_news">
          {popularNews.map(({ title, objectID }) => <span key={objectID}>{title}</span>)}
        </div>
        <div className="app-container-buttons">
          <button className="app-container-buttons_button" onClick={handleNews}>Get popular news</button>
        </div>
      </div>
    </div>
  );
}

export default App;
