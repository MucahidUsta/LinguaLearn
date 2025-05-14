import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Card from '@/components/common/Card';
import Typography from '@/components/common/Typography';
import ProgressBar from '@/components/common/ProgressBar';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { View } from 'react-native';
import * as Lucide from 'lucide-react-native';
import { Lock } from 'lucide-react-native';

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  icon: keyof typeof Lucide;
  color: string;
  progress: number;
  unlocked: boolean;
}

export default function LessonCard({
  id,
  title,
  description,
  level,
  icon,
  color,
  progress,
  unlocked
}: LessonCardProps) {
  const router = useRouter();
  const LucideIcon = Lucide[icon as keyof typeof Lucide] || Lucide.BookOpen;

  const handlePress = () => {
    if (unlocked) {
      router.push(`/grammar/${id}`);
    }
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={unlocked ? 0.7 : 1}
      disabled={!unlocked}
    >
      <Card style={[styles.card, !unlocked && styles.lockedCard]}>
        <View style={styles.content}>
          <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
            {unlocked ? (
              <LucideIcon size={24} color={color} />
            ) : (
              <Lock size={24} color={colors.neutral[400]} />
            )}
          </View>
          <View style={styles.textContainer}>
            <View style={styles.titleRow}>
              <Typography 
                variant="h5" 
                color={unlocked ? colors.neutral[800] : colors.neutral[500]}
                style={styles.title}
              >
                {title}
              </Typography>
              <View style={[
                styles.levelBadge, 
                { 
                  backgroundColor: unlocked ? getLevelColor(level) + '20' : colors.neutral[200] 
                }
              ]}>
                <Typography 
                  variant="caption"
                  color={unlocked ? getLevelColor(level) : colors.neutral[500]}
                >
                  {level}
                </Typography>
              </View>
            </View>
            <Typography 
              variant="body2" 
              color={unlocked ? colors.neutral[600] : colors.neutral[500]}
            >
              {description}
            </Typography>
            <View style={styles.progressContainer}>
              <ProgressBar 
                progress={progress} 
                color={unlocked ? color : colors.neutral[300]}
                style={styles.progressBar} 
              />
              <Typography 
                variant="caption" 
                color={unlocked ? colors.neutral[600] : colors.neutral[500]}
              >
                {Math.round(progress * 100)}% complete
              </Typography>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

// Helper function to get color based on level
function getLevelColor(level: string): string {
  switch (level.toLowerCase()) {
    case 'beginner':
      return colors.success[500];
    case 'intermediate':
      return colors.accent[500];
    case 'advanced':
      return colors.error[500];
    default:
      return colors.primary[500];
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  lockedCard: {
    opacity: 0.8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  title: {
    flex: 1,
    marginRight: spacing.sm,
  },
  levelBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: 16,
  },
  progressContainer: {
    marginTop: spacing.sm,
  },
  progressBar: {
    marginBottom: spacing.xs,
  },
});