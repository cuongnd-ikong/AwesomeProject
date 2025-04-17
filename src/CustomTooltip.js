import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomTooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
}) => {
  return (
    <View style={styles.tooltip}>
      <Text style={styles.tooltipText}>{currentStep?.title || 'Bước'}</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={handleStop}>
          Skip
        </Text>
        {!isFirstStep && (
          <Text style={styles.button} onPress={handlePrev}>
            Previous
          </Text>
        )}
        {!isLastStep && (
          <Text style={styles.button} onPress={handleNext}>
            Next
          </Text>
        )}
        {isLastStep && (
          <Text style={styles.button} onPress={handleStop}>
            Finish
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltip: {
    backgroundColor: '#f9f9f9', // Màu nền nhạt, tinh tế
    padding: 20, // Khoảng đệm rộng rãi
    borderRadius: 15, // Bo tròn góc mềm mại
    elevation: 10, // Bóng đổ cho Android
    shadowColor: '#000', // Bóng đổ cho iOS
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  tooltipText: {
    fontSize: 18, // Kích thước chữ lớn hơn
    fontWeight: 'bold', // Đậm để nổi bật
    color: '#333', // Màu chữ tối, dễ đọc
    textAlign: 'center', // Căn giữa
    marginBottom: 15, // Khoảng cách với nút bên dưới
  },
  buttonContainer: {
    flexDirection: 'row', // Sắp xếp nút theo hàng ngang
    justifyContent: 'space-around', // Các nút cách đều nhau
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4CAF50', // Màu xanh lá cây cho nút
    color: 'white', // Chữ trắng
    padding: 10, // Khoảng đệm bên trong
    borderRadius: 5, // Bo tròn góc nút
    textAlign: 'center',
    minWidth: 80, // Độ rộng tối thiểu của nút
  },
});

export default CustomTooltip;
