import { createSlice } from '@reduxjs/toolkit';

const initialStage = 1;

export const rewardStageSlice = createSlice({
  name: 'rewardStage',
  initialState: initialStage,
  reducers: {
    setNextStage(state) {
      return state + 1;
    },
    resetStage() {
      return initialStage;
    },
  },
});

export const { setNextStage, resetStage } = rewardStageSlice.actions;
