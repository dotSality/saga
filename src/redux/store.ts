import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { appReducer } from './slices/app-slice';
import { log } from './sagas/app';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(log);

export type StateType = ReturnType<typeof store.getState>