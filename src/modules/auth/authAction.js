import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:4001/api/auth/login', {
        email,
        password,
      });
      if (!response.data.success) throw new Error('Login failed');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  },
);

export const getProfile = createAsyncThunk('auth/getProfile', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:4001/api/auth/getProfile');
    if (!response.data.success) throw new Error('Profile fetch failed');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
