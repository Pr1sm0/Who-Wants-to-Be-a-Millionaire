import React, { ReactElement, useState } from 'react';

import Answer from '../../components/answer';
import answerClasses from '../../components/answer/answer.module.css';
import classes from './game.module.css';
import config from '../../assets/config.json';
import GameScreenEnum from '../../enums/GameScreenEnum';
import getRewardStageSelector from '../../store/slices/reward-stage/rewardStageSelector';
import RewardStage from '../../components/reward-stage';
import SidebarButton from '../../components/sidebar-button';
import { resetStage, setNextStage } from '../../store/slices/reward-stage/rewardStageSlice';
import { setGameScreen } from '../../store/slices/game-screen/gameScreenSlice';
import { setReward } from '../../store/slices/reward/rewardSlice';
import { useDispatch, useSelector } from '../../store';

const options = ['A', 'B', 'C', 'D'];

export default function Game(): ReactElement {
  const { moneyPyramid, questions } = config;

  const dispatch = useDispatch();
  const rewardStage = useSelector(getRewardStageSelector);

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [answerClass, setAnswerClass] = useState<string>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleSidebarButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const resetSelectedAnswer = () => {
    setSelectedAnswer('');
    setAnswerClass('');
  };

  const finishGame = () => {
    dispatch(resetStage());
    dispatch(setGameScreen(GameScreenEnum.RESULTS));
    resetSelectedAnswer();
  };

  const handleCorrectAnswer = () => {
    setAnswerClass(answerClasses.answerSvgCorrect);
    setTimeout(() => {
      dispatch(setReward(config.moneyPyramid.find((item) => item.id === rewardStage)?.amount));
      dispatch(setNextStage());
      resetSelectedAnswer();
      if (rewardStage === moneyPyramid.length) {
        finishGame();
      }
    }, 2000);
  };

  const handleWrongAnswer = () => {
    setAnswerClass(answerClasses.answerSvgWrong);
    setShowCorrectAnswer(true);
    setTimeout(() => {
      finishGame();
    }, 2000);
  };

  const handleAnswerClick = (isCorrect: boolean, option: string) => {
    setSelectedAnswer(option);
    setAnswerClass(answerClasses.answerSvgSelected);
    setTimeout(() => {
      return isCorrect ? handleCorrectAnswer() : handleWrongAnswer();
    }, 1000);
  };

  const getAnswerClass = (option: string, index: number) => {
    if (option === selectedAnswer) return answerClass;
    if (showCorrectAnswer && questions[rewardStage - 1]?.answers[index]?.correct) return answerClasses.answerSvgCorrect;
    return '';
  };

  return (
    <div className={`${classes.root} ${classes.mobile}`}>
      <div className={`${classes.wrapper} ${isSidebarOpen ? classes.hideWrapper : classes.showWrapper}`}>
        <SidebarButton isSidebarOpen={isSidebarOpen} onClick={handleSidebarButtonClick} />
        <div className={classes.question}>{questions[rewardStage - 1]?.question}</div>
        <div className={classes.answersWrapper}>
          {options.map((option, i) => (
            <Answer
              key={option}
              onClick={() => handleAnswerClick(questions[rewardStage - 1]?.answers[i]?.correct, option)}
              letter={option}
              disabled={!!selectedAnswer}
              className={getAnswerClass(option, i)}
            >
              {questions[rewardStage - 1]?.answers[i]?.text}
            </Answer>
          ))}
        </div>
      </div>
      <div className={`${classes.sidebar} ${isSidebarOpen ? classes.showSidebar : classes.hideSidebar}`}>
        <SidebarButton isSidebarOpen={isSidebarOpen} onClick={handleSidebarButtonClick} />
        {[...moneyPyramid].reverse().map(({ amount, id }) => (
          <RewardStage key={amount} rewardStageId={id}>
            {amount}
          </RewardStage>
        ))}
      </div>
    </div>
  );
}
