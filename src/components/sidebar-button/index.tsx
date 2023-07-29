import React, { ReactElement } from 'react';

import classes from './sidebar-button.module.css';
import Close from '../../assets/images/Close.svg';
import Menu from '../../assets/images/Menu.svg';

type Props = {
  isSidebarOpen: boolean;
  onClick: () => void;
};

export default function SidebarButton({ isSidebarOpen, onClick }: Props): ReactElement {
  return (
    <button type="button" className={classes.sidebarButton} onClick={onClick}>
      {isSidebarOpen ? (
        <img src={Close} className={classes.buttonImage} alt="Close button" />
      ) : (
        <img src={Menu} className={classes.buttonImage} alt="Menu button" />
      )}
    </button>
  );
}
