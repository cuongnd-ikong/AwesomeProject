import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TooltipProps {
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({message}) => {
  return (
    <View style={styles.tooltipContainer}>
      <Text style={styles.tooltipText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltipContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    top: -40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  tooltipText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Tooltip;
