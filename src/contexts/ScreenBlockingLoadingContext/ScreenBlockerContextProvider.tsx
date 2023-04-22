import React, { useState } from 'react';
import ScreenBlockerContext, {
  ScreenBlockerProps,
} from './ScreenBlockerContext';
import ScreenBlocker from '../../components/common/ScreenBlockingLoading/ScreenBlockingLoading';

type Props = {
  children?: React.ReactNode;
};

export const ScreenBlockerContextProvider: React.FC<Props> = ({ children }) => {
  const [screenBlocker, setScreenBlocker] = useState<ScreenBlockerProps>({
    isOpen: true,
    withLoader: true,
  });

  return (
    <ScreenBlockerContext.Provider
      value={{
        screenBlocker,
        setScreenBlocker,
      }}>
      <ScreenBlocker
        visible={screenBlocker.isOpen}
        withLoader={screenBlocker.withLoader}
      />
      {children}
    </ScreenBlockerContext.Provider>
  );
};

export default ScreenBlockerContextProvider;
