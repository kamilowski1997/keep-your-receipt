import React, { FC, useContext, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useDispatch } from '../../redux/store';
import { actions } from '../../redux/slices/auth';
import ScreenBlockerContext from '../../contexts/ScreenBlockingLoadingContext/ScreenBlockerContext';

const withAuth = (Component: FC<any>) => (props: any) => {
  const dispatch = useDispatch();
  const { setScreenBlocker } = useContext(ScreenBlockerContext);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user && user.email) {
        dispatch(actions.setUser({ id: user.uid, email: user.email }));
      } else {
        dispatch(actions.clearUser());
      }
      setScreenBlocker && setScreenBlocker({ isOpen: false });
    });
  }, [dispatch, setScreenBlocker]);

  return <Component {...props} />;
};

export default withAuth;
