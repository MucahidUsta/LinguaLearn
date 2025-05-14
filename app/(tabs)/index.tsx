import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Typography from '@/components/common/Typography';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ProgressBar from '@/components/common/ProgressBar';
import { ChevronRight, Book, GraduationCap, Dumbbell, Zap } from 'lucide-react-native';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={[
        styles.content, 
        { paddingTop: insets.top + spacing.md }
      ]}
    >
      <View style={styles.header}>
        <Typography variant="h2" color={colors.neutral[800]}>
          Welcome to LinguaLearn!
        </Typography>
        <Typography variant="body1" color={colors.neutral[600]} style={styles.subtitle}>
          Let's continue your English learning journey
        </Typography>
      </View>

      <View style={styles.dailyProgress}>
        <Card style={styles.progressCard}>
          <Typography variant="h5" color={colors.neutral[800]}>
            Daily Progress
          </Typography>
          <View style={styles.progressDetails}>
            <View style={styles.progressItem}>
              <View style={styles.progressCircle}>
                <Typography variant="h4" color={colors.primary[500]}>
                  2
                </Typography>
              </View>
              <Typography variant="body2" color={colors.neutral[600]}>
                Lessons
              </Typography>
            </View>
            <View style={styles.progressItem}>
              <View style={styles.progressCircle}>
                <Typography variant="h4" color={colors.primary[500]}>
                  10
                </Typography>
              </View>
              <Typography variant="body2" color={colors.neutral[600]}>
                Words
              </Typography>
            </View>
            <View style={styles.progressItem}>
              <View style={styles.progressCircle}>
                <Typography variant="h4" color={colors.primary[500]}>
                  15
                </Typography>
              </View>
              <Typography variant="body2" color={colors.neutral[600]}>
                Minutes
              </Typography>
            </View>
          </View>
          <View style={styles.streakContainer}>
            <Zap size={20} color={colors.accent[500]} />
            <Typography variant="subtitle2" color={colors.neutral[700]} style={styles.streakText}>
              3 day streak! Keep it up.
            </Typography>
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Typography variant="h4" color={colors.neutral[800]}>
            Continue Learning
          </Typography>
          <Button 
            variant="text" 
            endIcon={<ChevronRight size={18} color={colors.primary[500]} />}
            onPress={() => router.push('/grammar')}
          >
            See All
          </Button>
        </View>

        <Card style={styles.continueCard}>
          <View style={styles.continueCardContent}>
            <View style={[styles.iconContainer, { backgroundColor: colors.primary[500] + '20' }]}>
              <GraduationCap size={24} color={colors.primary[500]} />
            </View>
            <View style={styles.continueCardText}>
              <Typography variant="subtitle1" color={colors.neutral[800]}>
                Present Simple Tense
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Learn to talk about facts and habits
              </Typography>
              <View style={styles.progressRow}>
                <ProgressBar 
                  progress={0.2} 
                  style={styles.smallProgress} 
                />
                <Typography variant="caption" color={colors.neutral[600]}>
                  20% completed
                </Typography>
              </View>
            </View>
          </View>
          <Button onPress={() => router.push('/grammar/present-simple')}>
            Continue
          </Button>
        </Card>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Typography variant="h4" color={colors.neutral[800]}>
            Recommended for You
          </Typography>
        </View>
        
        <View style={styles.featuresGrid}>
          <Card style={[styles.featureCard, { backgroundColor: colors.primary[500] + '10' }]}>
            <View style={styles.featureContent}>
              <Book size={24} color={colors.primary[500]} />
              <Typography variant="subtitle1" color={colors.neutral[800]} style={styles.featureTitle}>
                Vocabulary
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Learn essential everyday words
              </Typography>
            </View>
            <Button 
              size="small" 
              onPress={() => router.push('/vocabulary')}
            >
              Start
            </Button>
          </Card>

          <Card style={[styles.featureCard, { backgroundColor: colors.secondary[500] + '10' }]}>
            <View style={styles.featureContent}>
              <GraduationCap size={24} color={colors.secondary[600]} />
              <Typography variant="subtitle1" color={colors.neutral[800]} style={styles.featureTitle}>
                Grammar
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Master English grammar rules
              </Typography>
            </View>
            <Button 
              size="small" 
              color="secondary"
              onPress={() => router.push('/grammar')}
            >
              Start
            </Button>
          </Card>

          <Card style={[styles.featureCard, { backgroundColor: colors.accent[500] + '10' }]}>
            <View style={styles.featureContent}>
              <Dumbbell size={24} color={colors.accent[500]} />
              <Typography variant="subtitle1" color={colors.neutral[800]} style={styles.featureTitle}>
                Practice
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Test your knowledge with quizzes
              </Typography>
            </View>
            <Button 
              size="small" 
              color="accent"
              onPress={() => router.push('/practice')}
            >
              Start
            </Button>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  content: {
    padding: spacing.md,
    paddingBottom: spacing.xxxl,
  },
  header: {
    marginBottom: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  dailyProgress: {
    marginBottom: spacing.xl,
  },
  progressCard: {
    padding: spacing.md,
  },
  progressDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  progressItem: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary[50],
    borderWidth: 2,
    borderColor: colors.primary[200],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent[50],
    padding: spacing.sm,
    borderRadius: spacing.sm,
  },
  streakText: {
    marginLeft: spacing.xs,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  continueCard: {
    padding: spacing.md,
  },
  continueCardContent: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  continueCardText: {
    flex: 1,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  smallProgress: {
    flex: 1,
    marginRight: spacing.sm,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '100%',
    marginBottom: spacing.md,
  },
  featureContent: {
    marginBottom: spacing.md,
  },
  featureTitle: {
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
});