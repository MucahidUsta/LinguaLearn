import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Card from '@/components/common/Card';
import Typography from '@/components/common/Typography';
import { Volume2, Check, BookmarkPlus } from 'lucide-react-native';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { Platform } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  Easing,
  interpolate,
  runOnJS
} from 'react-native-reanimated';

interface WordCardProps {
  word: string;
  pronunciation: string;
  definition: string;
  examples: string[];
  partOfSpeech: string;
  synonyms: string[];
  learned: boolean;
  onToggleLearned: () => void;
  onPlaySound?: () => void;
}

export default function WordCard({
  word,
  pronunciation,
  definition,
  examples,
  partOfSpeech,
  synonyms,
  learned,
  onToggleLearned,
  onPlaySound,
}: WordCardProps) {
  const [expanded, setExpanded] = useState(false);
  const rotation = useSharedValue(0);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    rotation.value = withTiming(rotation.value === 0 ? 1 : 0, {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      rotation.value,
      [0, 1],
      [120, 220]
    );

    return {
      height,
    };
  });

  const handlePronunciationPlay = () => {
    if (Platform.OS !== 'web') {
      // On native platforms, we'd handle audio via expo-av
      // This is just a placeholder
      onPlaySound?.();
    } else {
      // Web alternative
      onPlaySound?.();
    }
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Card style={styles.card}>
        <TouchableOpacity 
          style={styles.cardContent} 
          onPress={toggleExpanded}
          activeOpacity={0.8}
        >
          <View style={styles.header}>
            <View style={styles.wordContainer}>
              <Typography variant="h3" color={colors.neutral[800]}>
                {word}
              </Typography>
              <Typography 
                variant="body2" 
                color={colors.neutral[500]}
                style={styles.pronunciation}
              >
                {pronunciation}
              </Typography>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={handlePronunciationPlay}
              >
                <Volume2 size={20} color={colors.primary[500]} />
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.actionButton,
                  learned && styles.learnedButton
                ]}
                onPress={onToggleLearned}
              >
                {learned ? (
                  <Check size={20} color={colors.white} />
                ) : (
                  <BookmarkPlus size={20} color={colors.primary[500]} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.partOfSpeech}>
            <Typography 
              variant="caption" 
              color={colors.neutral[600]}
              style={styles.partOfSpeechText}
            >
              {partOfSpeech}
            </Typography>
          </View>

          <Typography variant="body1" color={colors.neutral[700]}>
            {definition}
          </Typography>

          {expanded && (
            <View style={styles.expandedContent}>
              <Typography variant="subtitle2" color={colors.neutral[800]} style={styles.sectionTitle}>
                Examples:
              </Typography>
              
              {examples.map((example, index) => (
                <Typography 
                  key={`example-${index}`} 
                  variant="body2" 
                  color={colors.neutral[700]}
                  style={styles.example}
                >
                  • {example}
                </Typography>
              ))}

              <Typography variant="subtitle2" color={colors.neutral[800]} style={styles.sectionTitle}>
                Synonyms:
              </Typography>
              
              <View style={styles.synonymsContainer}>
                {synonyms.map((synonym, index) => (
                  <View 
                    key={`synonym-${index}`}
                    style={styles.synonymTag}
                  >
                    <Typography variant="caption" color={colors.primary[700]}>
                      {synonym}
                    </Typography>
                  </View>
                ))}
              </View>
            </View>
          )}
        </TouchableOpacity>
      </Card>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  card: {
    marginVertical: spacing.xs,
  },
  cardContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  wordContainer: {
    flex: 1,
  },
  pronunciation: {
    marginTop: -4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.xs,
  },
  learnedButton: {
    backgroundColor: colors.success[500],
  },
  partOfSpeech: {
    marginBottom: spacing.xs,
  },
  partOfSpeechText: {
    fontStyle: 'italic',
  },
  expandedContent: {
    marginTop: spacing.md,
  },
  sectionTitle: {
    marginBottom: spacing.xs,
    marginTop: spacing.sm,
  },
  example: {
    marginLeft: spacing.sm,
    marginBottom: spacing.xs,
  },
  synonymsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.xs,
  },
  synonymTag: {
    backgroundColor: colors.primary[50],
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: 16,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
    borderWidth: 1,
    borderColor: colors.primary[100],
  },
});