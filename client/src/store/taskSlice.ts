import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  isTaskChecked: boolean;
}

const initialState: AppState = {
  isTaskChecked: false,
};

const taskSlise = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const {} = taskSlise.actions;

export default taskSlise.reducer;
