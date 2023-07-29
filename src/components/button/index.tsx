import React, { ReactElement } from 'react';

import classes from './button.module.css';

type Props = {
  onClick: () => void;
  children: string;
};

export default function Button({ onClick, children }: Props): ReactElement {
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}
