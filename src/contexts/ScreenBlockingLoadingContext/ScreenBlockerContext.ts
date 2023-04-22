import React from 'react';

export interface ScreenBlockerProps {
  isOpen: boolean;
  withLoader?: boolean;
}

interface Props {
  screenBlocker: ScreenBlockerProps;
  setScreenBlocker?: (value: ScreenBlockerProps) => void;
}

const defaultState: Props = {
  screenBlocker: {
    isOpen: true,
    withLoader: true,
  },
};

const ScreenBlockerContext = React.createContext<Props>(defaultState);

export default ScreenBlockerContext;
