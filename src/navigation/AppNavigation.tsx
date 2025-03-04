import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useAppSelector} from '@src/store';
import React, {useEffect, useRef} from 'react';
import {
  NavAuthentication,
  NavModal,
  NavTabs,
  NavWithoutTabs,
  RootStackParamList,
  Routers,
} from './index';

const navTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    card: 'transparent',
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  // const user = useAppSelector(s => s.user);
  // const {

  // } = useAppSelector(s => s.common.booking);
  // const phoneCodes = useAppSelector(s => s.common.phoneCodes);
  // useEffect(() => {
  //   (user.user?.userId || 0) > 0 && init();
  // }, [user.user?.userId]);

  const init = async () => {
    await Promise.all([].filter(Boolean));
  };
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        animation: 'slide_from_right',
        gestureEnabled: true,
        //
      }}>
      {false ? (
        <Stack.Screen
          name={Routers.AUTHENTICATION}
          options={{animation: 'slide_from_bottom'}}
          component={NavAuthentication}
        />
      ) : (
        <>
          <Stack.Screen
            name={Routers.BOTTOM_TABS}
            component={NavTabs}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name={Routers.WITHOUT_TABS}
            component={NavWithoutTabs}
            options={{}}
          />
          <Stack.Screen
            name={Routers.MODAL}
            component={NavModal}
            options={{
              animationDuration: 200,
              presentation: 'containedTransparentModal',
              animation: 'fade_from_bottom',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
export const AppNavigation = () => {
  const refObj = useRef({
    currentRouterName: undefined as string | undefined,
  }).current;

  // const navigationSaved = useAppSelector(s => s.debug.navigationSaved);

  const onReady = () => {
    // dispatch(
    // );
  };

  // const onStateChange = (/* state?: NavigationState */) => {
  //     const currentRoute = refNavigation.current?.getCurrentRoute();
  //     if (refObj.currentRouterName != currentRoute?.name) {
  //         dispatch(
  //             forceUpdateDebug({
  //                 navigation: currentRoute,
  //                 // navigationState: refNavigation.current?.getRootState(),
  //             }),
  //         );
  //     }
  //     refObj.currentRouterName = currentRoute?.name;
  // };

  return (
    <NavigationContainer
      // ref={refNavigation}
      theme={navTheme}
      // initialState={null}
      onReady={onReady}
      // onStateChange={onStateChange}
      // linking={deepLink}
    >
      <RootStack />
    </NavigationContainer>
  );
};
