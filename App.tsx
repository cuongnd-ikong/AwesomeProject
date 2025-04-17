import './global.css';
import {StatusBar, View} from 'react-native';

import React, {StrictMode} from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';
type Props = {};
export const AppContent = () => {
  // const refObj = useRef({
  //   isConnected: undefined as boolean | undefined,
  // }).current;
  // const [state, setState] = useState({
  //   isReady: false,
  //   isUpdate: false,
  //   isConnected: false,
  //   bundleURL: undefined as string | undefined,
  //   isNewAppVersion: false,
  // });

  // useEffect(() => {
  //   const netEvent = NetInfo.addEventListener(state => {
  //     if (refObj.isConnected !== state.isConnected) {
  //       refObj.isConnected = state.isConnected as any;
  //       // init();
  //     }
  //   });
  //   return () => {
  //     netEvent != null && netEvent();
  //   };
  // }, []);

  // const init = async () => {
  //   setState(s => ({
  //     ...s,
  //     isReady: false,
  //   }));
  //   // await loadReduxDataSync();

  //   const networkInfo = await NetInfo.fetch();
  //   if (!networkInfo.isConnected) {
  //     setState(s => ({
  //       ...s,
  //       isConnected: false,
  //       isReady: true,
  //     }));
  //     return;
  //   }

  //   // SplashScreen.hide();

  //   setState(s => ({
  //     ...s,
  //     isConnected: true,
  //     isReady: true,
  //   }));
  // };
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      {/* {!state.isReady ? (
        <Screen className="center-parent">
          <AppActivityIndicator />
          <Text className="mt-10" />
        </Screen>
      ) : !state.isConnected ? null : state.bundleURL ? null : ( //
        <AppNavigation />
      )}
      {!!state.isNewAppVersion && <ModalAppNewVersionComponent />}
            <Apploading /> */}
      <AppNavigation />
    </>
  );
};

const App = (props: Props) => {
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

export default App;
