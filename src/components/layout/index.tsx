import React, { ReactElement } from 'react';

import classes from './layout.module.css';
import Game from '../../screens/game';
import GameScreenEnum from '../../enums/GameScreenEnum';
import getGameScreenSelector from '../../store/slices/game-screen/gameScreenSelector';
import Results from '../../screens/results';
import Start from '../../screens/start';
import { useSelector } from '../../store';

export default function Layout(): ReactElement {
  const gameScreen = useSelector(getGameScreenSelector);

  return (
    <div className={classes.root}>
      {gameScreen === GameScreenEnum.START && <Start />}
      {gameScreen === GameScreenEnum.GAME && <Game />}
      {gameScreen === GameScreenEnum.RESULTS && <Results />}
    </div>
  );
}
