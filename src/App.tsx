import React from 'react';
import './app.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCount } from './redux/selectors/app-selector';
import { decrement, increment } from './redux/slices/app-slice';

function App() {
  const count = useSelector(getCount);

  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(increment());

  const decrementHandler = () => dispatch(decrement());

  return (
    <div className="app">
      <div className="app-container">
        <h1 className="app-container_result">{count}</h1>
        <div className="app-container-buttons">
          <button className="app-container-buttons_button" onClick={decrementHandler}>Dec</button>
          <button className="app-container-buttons_button" onClick={incrementHandler}>Inc</button>
        </div>
      </div>
    </div>
  );
}

export default App;
