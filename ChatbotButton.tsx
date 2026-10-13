import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

type ChatbotButtonProps = {
  onPress: () => void;
  accessibilityLabel?: string;
};

export default function ChatbotButton({
  onPress,
  accessibilityLabel = 'Open AI assistant',
}: ChatbotButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.75}
      onPress={onPress}
      style={styles.button}>
      <Svg
        pointerEvents="none"
        width={84}
        height={35}
        style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="aiButtonOutline" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#51C8BE" />
            <Stop offset="52%" stopColor="#58B9C8" />
            <Stop offset="100%" stopColor="#A24A9F" />
          </LinearGradient>
        </Defs>
        <Rect
          x={1.25}
          y={1.25}
          width={81.5}
          height={32.5}
          rx={16.25}
          fill="#FCFDFE"
          stroke="url(#aiButtonOutline)"
          strokeWidth={1.5}
        />
      </Svg>

      <View style={styles.icon}>
        <Svg width={27} height={25} viewBox="0 0 27 25">
          <Path
            d="M3.2 6.8A3.3 3.3 0 0 1 6.5 3.5h10A3.3 3.3 0 0 1 19.8 6.8v7.4a3.3 3.3 0 0 1-3.3 3.3h-5l-5.2 3.8c-.7.5-1.3.1-1.3-.7v-3.2a3.3 3.3 0 0 1-1.8-3V6.8Z"
            fill="none"
            stroke="#43BDB5"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M12.8 5.1c-.43 2.45-1.35 3.4-3.8 3.85 2.45.45 3.37 1.4 3.8 3.85.45-2.45 1.37-3.4 3.82-3.85-2.45-.45-3.37-1.4-3.82-3.85Z"
            fill="#F8FFFF"
            stroke="#49BBC4"
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
          <Path
            d="M20.8 3.3c-.2 1.13-.62 1.55-1.75 1.76 1.13.2 1.55.63 1.75 1.76.21-1.13.63-1.56 1.76-1.76-1.13-.21-1.55-.63-1.76-1.76Z"
            fill="#7863B5"
          />
        </Svg>
      </View>

      <Text style={styles.label}>AI</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 84,
    height: 35,
    borderRadius: 18,
    backgroundColor: '#FCFDFE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
    gap: 3,
  },
  icon: {
    width: 27,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#73547F',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});
