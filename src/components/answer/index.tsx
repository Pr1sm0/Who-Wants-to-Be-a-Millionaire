import React, { ReactElement } from 'react';

import classes from './answer.module.css';

type Props = {
  onClick: () => void;
  letter: string;
  className: string;
  disabled: boolean;
  children: string;
};

export default function Answer({ onClick, letter, className, disabled, children }: Props): ReactElement {
  return (
    <button type="button" className={classes.answerButton} onClick={onClick} disabled={disabled}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 421 72"
        className={`${classes.answerSvg} ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M404 36L421 36" stroke="#D0D0D8" />
        <path d="M0 36L17 36" stroke="#D0D0D8" />
        <path
          d="M39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773Z"
          fill="white"
          stroke="#D0D0D8"
        />
        <text x="50" y="50%" dominantBaseline="middle" className={classes.letter} fill="var(--orange-100)">
          {letter}
        </text>
        <text x="75" y="50%" dominantBaseline="middle" className={classes.text}>
          {children}
        </text>
      </svg>
    </button>
  );
}
