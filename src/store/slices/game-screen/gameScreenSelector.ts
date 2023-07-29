import { createSelector } from '@reduxjs/toolkit';

const getGameScreenSelector = createSelector(
  (state: Record<string, string>) => state,
  (gameScreenSlices) => gameScreenSlices.gameScreen,
);

export default getGameScreenSelector;
