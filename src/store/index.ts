import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import { gameScreenSlice } from './slices/game-screen/gameScreenSlice';
import { rewardSlice } from './slices/reward/rewardSlice';
import { rewardStageSlice } from './slices/reward-stage/rewardStageSlice';

export default configureStore({
  reducer: { rewardStage: rewardStageSlice.reducer, reward: rewardSlice.reducer, gameScreen: gameScreenSlice.reducer },
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
