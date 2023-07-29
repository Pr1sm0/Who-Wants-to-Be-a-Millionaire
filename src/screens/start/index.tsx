import React, { ReactElement } from 'react';

import Button from '../../components/button';
import classes from './start.module.css';
import GameScreenEnum from '../../enums/GameScreenEnum';
import HandWithStars from '../../assets/images/Hand_With_Stars.svg';
import { setGameScreen } from '../../store/slices/game-screen/gameScreenSlice';
import { useDispatch } from '../../store';

export default function Start(): ReactElement {
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <img src={HandWithStars} className={classes.logo} alt="Hand with stars" />
      <div className={classes.wrapper}>
        <h1 className={classes.gameTitle}>
          Who wants to be <br /> a millionaire?
        </h1>
        <Button onClick={() => dispatch(setGameScreen(GameScreenEnum.GAME))}>Start</Button>
      </div>
    </div>
  );
}
