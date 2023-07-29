import { createSlice } from '@reduxjs/toolkit';

const initialReward = '$0';

export const rewardSlice = createSlice({
  name: 'reward',
  initialState: initialReward,
  reducers: {
    setReward(_state, action) {
      return action.payload;
    },
    resetReward() {
      return initialReward;
    },
  },
});

export const { setReward, resetReward } = rewardSlice.actions;
