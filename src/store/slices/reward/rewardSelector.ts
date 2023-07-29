import { createSelector } from '@reduxjs/toolkit';

const getRewardSelector = createSelector(
  (state: Record<string, string>) => state,
  (rewardSlices) => rewardSlices.reward,
);

export default getRewardSelector;
