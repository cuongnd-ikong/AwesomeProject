import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewProps,
} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from '../components/Button';
const MyView = React.forwardRef(
  (props: ViewProps, ref: React.LegacyRef<View>) => {
    // some additional logic
    return <View ref={ref} {...props} />;
  },
);

const MyAnimatedView = Animated.createAnimatedComponent(MyView);

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState(-1);
  const buttonRefs = useRef<(View | null)[]>([]);

  const ref = useRef<View | null>(null);
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const steps = [
    {
      content: 'Nội dung của Tooltip 1',
      placement: 'bottom',
    },
    {
      content: 'Nội dung của Tooltip 2',
      placement: 'bottom',
    },
  ];

  // Function to get button layout
  // const getButtonLayout = index => {
  //   return new Promise(resolve => {
  //     if (buttonRefs.current[index]) {
  //       buttonRefs.current[index].measure(
  //         (x, y, width, height, pageX, pageY) => {
  //           resolve({
  //             x: pageX,
  //             y: pageY,
  //             width,
  //             height,
  //           });
  //         },
  //       );
  //     }
  //   });
  // };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <View style={{backgroundColor: 'blue', flex: 1}}>
        <MyAnimatedView style={{...styles.box, width}} />
      </View>

      <Button onPress={handlePress} title="Click me" />
      <View
        style={{backgroundColor: 'red', flex: 1, flexDirection: 'row'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tooltipContent: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  nextButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
});
