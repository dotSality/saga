import { StateType } from '../store';

export const getLatestNewsSelector = (state: StateType) => state.app.latestNews
export const getPopularNewsSelector = (state: StateType) => state.app.popularNews