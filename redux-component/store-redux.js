import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/reduxSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

