import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {default as React, useEffect, useRef} from 'react';
import {Animated, Text, View} from 'react-native';
import {Routers} from '.';
import {Platform} from '../components/utils';
import {Button} from '../components/Button';
const HEIGHT = 75;

export let BOTTOM_TABS_HEIGHT = HEIGHT;

const ButtonTab = React.memo(
  ({
    disabled,
    onPress,
    focused,
    label: Label,
    icon: Icon,
    routeName,
  }: {
    focused: boolean;
    disabled: boolean;
    onPress: () => void;
    label: React.ReactNode;
    icon: React.ReactNode;
    routeName: string;
    //
  }) => {
    const ref = useRef({
      animated: new Animated.Value(focused ? 1 : 0),
    }).current;

    useEffect(() => {
      Animated.timing(ref.animated, {
        toValue: focused ? 1 : 0,
        useNativeDriver: false,
        duration: 200,
      }).start();
      return () => {
        ref.animated.stopAnimation();
      };
    }, [focused]);
    return (
      <Button key={routeName} onPress={disabled ? undefined : onPress}>
        <View>
          {Icon}
          {typeof Label == 'string' ? (
            <Animated.Text
              numberOfLines={1}
              style={[
                {
                  fontSize: ref.animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.1, Platform.WidthScale(12)],
                  }),
                },
              ]}>
              {Label}
            </Animated.Text>
          ) : (
            Label
          )}
        </View>
      </Button>
    );
  },
);

export const handlerBottomTabScroll = {};
// export const bottomTabScrollProcess = handlerBottomTabScroll?.scrollProps;

export const BottomTabComponent = (
  props: {
    routes?: {
      key: Routers;
      disabled?: boolean;
      icon: React.ReactNode;
      iconActive: React.ReactNode;
      iconDisabled?: React.ReactNode;
      label: string;
      focusColor?: string;
    }[];
  } & BottomTabBarProps,
) => {
  const {
    navigation,
    descriptors,
    state: {index: indexActive, routes},
    routes: routesConfig,
    ...rest
  } = props;

  const ref = useRef({height: 0}).current;
  console.log(routes?.length);
  return (
    <View
      className="w-10 h-10 bg-blue-500"
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        // backgroundColor: 'blue',
      }}>
      {routes.map((e, index) => {
        return (
          <Button
            onPress={() => {
              navigation.navigate(e.name);
            }}
            classButtom={`items-center justify-center w-full bg-red-500`}
            key={e.name + index}>
            <Text className="text-white">{e.name}</Text>
            {/* {Icon}
              {typeof Label == 'string'
                ? focused && <Text className="text-white">{Label}</Text>
                : Label} */}
          </Button>
        );
      })}
    </View>
  );
};
