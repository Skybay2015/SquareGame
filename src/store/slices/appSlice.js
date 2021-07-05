import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState = {
   presets: null,
   error: null,
   selectedMode: null,
   rowAndCol: [],
};

export const fetchPresets = createAsyncThunk('app/fetchPresets', async () => {
   try {
      const { data } = await axios.get();
      return data;
   } catch (e) {
      return e;
   }
});

const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setSelectedMode: (state, action) => {
         state.selectedMode = action.payload;
      },
      setRowAndCol: (state, action) => {
         state.rowAndCol = [action.payload, ...state.rowAndCol];
      },
      resetHistory: (state, action) => {
         state.rowAndCol = [];
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchPresets.fulfilled, (state, action) => {
         state.presets = action.payload;
      });
      builder.addCase(fetchPresets.rejected, (state, action) => {
         state.error = action.payload;
      });
   },
});

export const { setSelectedMode, setRowAndCol, resetHistory } = appSlice.actions;

export default appSlice;
