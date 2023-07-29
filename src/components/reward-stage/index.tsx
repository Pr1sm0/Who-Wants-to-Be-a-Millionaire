import React, { ReactElement } from 'react';

import classes from './reward-stage.module.css';
import getRewardStageSelector from '../../store/slices/reward-stage/rewardStageSelector';
import { useSelector } from '../../store';

type Props = {
  rewardStageId: number;
  children: string;
};

export default function RewardStage({ rewardStageId, children }: Props): ReactElement {
  const rewardStage = useSelector(getRewardStageSelector);

  const getRewardStageClassName = (id: number): string => {
    if (rewardStage === id) return classes.stageActive;
    if (rewardStage > id) return classes.stageCompleted;
    return '';
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 376 40"
      xmlns="http://www.w3.org/2000/svg"
      className={getRewardStageClassName(rewardStageId)}
    >
      <path d="M69 20H0" stroke="#D0D0D8" />
      <path d="M376 20H307" stroke="#D0D0D8" />
      <path
        d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
        fill="white"
        stroke="#D0D0D8"
      />
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className={classes.text}>
        {children}
      </text>
    </svg>
  );
}
