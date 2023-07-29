import { createSelector } from '@reduxjs/toolkit';

const getRewardStageSelector = createSelector(
  (state: Record<string, number>) => state,
  (rewardStageSlices) => rewardStageSlices.rewardStage,
);

export default getRewardStageSelector;
