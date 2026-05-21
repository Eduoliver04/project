import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isLoading: boolean;
  notification: string | null;
}

const initialState: UIState = {
  isLoading: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setNotification: (state, action: PayloadAction<string | null>) => {
      state.notification = action.payload;
    },
  },
});

export const { setLoading, setNotification } = uiSlice.actions;
export default uiSlice.reducer;
