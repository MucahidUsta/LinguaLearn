import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  withSpring 
} from 'react-native-reanimated';
import { useEffect } from 'react';
import colors from '@/constants/colors';

interface ProgressBarProps {
  progress: number; // 0 to 1
  height?: number;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  animated?: boolean;
}

export default function ProgressBar({
  progress,
  height = 8,
  color = colors.primary[500],
  backgroundColor = colors.neutral[200],
  style,
  animated = true,
}: ProgressBarProps) {
  const progressValue = useSharedValue(0);

  useEffect(() => {
    if (animated) {
      progressValue.value = withSpring(progress, { 
        damping: 15, 
        stiffness: 100 
      });
    } else {
      progressValue.value = withTiming(progress, { duration: 0 });
    }
  }, [progress, animated]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${progressValue.value * 100}%`,
    };
  });

  return (
    <View 
      style={[
        styles.container, 
        { height, backgroundColor }, 
        style
      ]}
    >
      <Animated.View 
        style={[
          styles.progress, 
          { backgroundColor: color }, 
          animatedStyle
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
  },
});