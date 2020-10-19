import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bannerReducer from '../features/banners/bannerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    banner: bannerReducer,
  },
});
