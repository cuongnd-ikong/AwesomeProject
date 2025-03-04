// import { NetworksInspectorComponent } from '@src/ait-components';
import NetInfo from '@react-native-community/netinfo';
import React, {StrictMode, useEffect, useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

// import { Apploading } from './components/Apploading';
// import { AppInfoComponent, NavigationComponent, ReduxComponent } from './components/InfoComponent';
import {AppNavigation} from './navigation';
import {loadReduxDataSync, store} from './store';
import {Screen} from 'react-native-screens';
import {Text} from 'react-native';

export const AppContent = () => {
  const refObj = useRef({
    isConnected: undefined as boolean | undefined,
  }).current;
  const [state, setState] = useState({
    isReady: false,
    isUpdate: false,
    isConnected: false,
    bundleURL: undefined as string | undefined,
    isNewAppVersion: false,
  });

  useEffect(() => {
    const netEvent = NetInfo.addEventListener(state => {
      if (refObj.isConnected !== state.isConnected) {
        refObj.isConnected = state.isConnected as any;
        init();
      }
    });
    return () => {
      netEvent != null && netEvent();
    };
  }, []);

  const init = async () => {
    setState(s => ({
      ...s,
      isReady: false,
    }));
    await loadReduxDataSync();

    const networkInfo = await NetInfo.fetch();
    if (!networkInfo.isConnected) {
      setState(s => ({
        ...s,
        isConnected: false,
        isReady: true,
      }));
      return;
    }

    // SplashScreen.hide();

    setState(s => ({
      ...s,
      isConnected: true,
      isReady: true,
    }));
  };
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      {!state.isReady ? (
        <Screen className="center-parent">
          {/* <AppActivityIndicator /> */}
          <Text className="mt-10" />
        </Screen>
      ) : !state.isConnected ? null : state.bundleURL ? null : ( //
        <AppNavigation />
      )}
      {/* {!!state.isNewAppVersion && <ModalAppNewVersionComponent />}
            <Apploading /> */}
    </>
  );
};

export const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        {false ? (
          <StrictMode>
            <AppContent />
          </StrictMode>
        ) : (
          <AppContent />
        )}
      </Provider>
    </GestureHandlerRootView>
  );
};
