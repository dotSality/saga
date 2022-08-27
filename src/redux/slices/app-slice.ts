import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    latestNews: [] as any[],
    popularNews: [] as any[],
  },
  reducers: {
    setLatestNews: (state, action: PayloadAction<Array<any>>) => {
      state.latestNews = [...state.latestNews, ...action.payload];
    },
    setPopularNews: (state, action: PayloadAction<Array<any>>) => {
      state.popularNews = [...state.popularNews, ...action.payload];
    },
    getNews: () => {
    },
  },
});

export const appReducer = appSlice.reducer;

export const { getNews, setLatestNews, setPopularNews } = appSlice.actions;