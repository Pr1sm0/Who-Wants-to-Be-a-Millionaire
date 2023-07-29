import { createSlice } from '@reduxjs/toolkit';

import GameScreenEnum from '../../../enums/GameScreenEnum';

const initialGameScreen = GameScreenEnum.START;

export const gameScreenSlice = createSlice({
  name: 'gameScreen',
  initialState: initialGameScreen,
  reducers: {
    setGameScreen(_state, action) {
      return action.payload;
    },
    resetGameScreen() {
      return initialGameScreen;
    },
  },
});

export const { setGameScreen, resetGameScreen } = gameScreenSlice.actions;
