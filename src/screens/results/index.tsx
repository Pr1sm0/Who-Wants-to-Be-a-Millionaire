import React, { ReactElement } from 'react';

import Button from '../../components/button';
import classes from './results.module.css';
import GameScreenEnum from '../../enums/GameScreenEnum';
import getRewardSelector from '../../store/slices/reward/rewardSelector';
import HandWithStars from '../../assets/images/Hand_With_Stars.svg';
import { resetReward } from '../../store/slices/reward/rewardSlice';
import { setGameScreen } from '../../store/slices/game-screen/gameScreenSlice';
import { useDispatch, useSelector } from '../../store';

export default function Results(): ReactElement {
  const dispatch = useDispatch();
  const reward = useSelector(getRewardSelector);

  const handleButtonClick = () => {
    dispatch(resetReward());
    dispatch(setGameScreen(GameScreenEnum.GAME));
  };

  return (
    <div className={classes.root}>
      <img src={HandWithStars} className={classes.logo} alt="Hand with stars" />
      <div className={classes.wrapper}>
        <div>
          <p className={classes.label}>Total score:</p>
          <p className={classes.result}>{reward} earned</p>
        </div>
        <Button onClick={handleButtonClick}>Try again</Button>
      </div>
    </div>
  );
}
