import { createSlice } from '@reduxjs/toolkit';
import { getProfile, loginUser } from './authAction';

// Helper to handle async thunks with auto-keyed loading/error
const asyncThunkReducer = (builder, thunk, onFulfilled) => {
  const key = thunk.typePrefix.split('/').pop(); // auto key from thunk

  builder
    .addCase(thunk.pending, (state) => {
      state.loading[key] = true;
      state.error[key] = null;
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.loading[key] = false;
      onFulfilled(state, action);
    })
    .addCase(thunk.rejected, (state, action) => {
      state.loading[key] = false;
      state.error[key] = action.payload;
    });
};

const initialState = {
  name: '',
  id: '',
  email: '',
  accessToken: '',
  loading: {}, // auto-generated per thunk
  error: {}, // auto-generated per thunk
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout_user: (state) => {
      state.name = '';
      state.id = '';
      state.email = '';
      state.accessToken = '';
      state.error = {};
      state.loading = {};
    },
  },
  extraReducers: (builder) => {
    asyncThunkReducer(builder, loginUser, (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    });

    asyncThunkReducer(builder, getProfile, (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
