import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Typography from '@/components/common/Typography';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ProgressBar from '@/components/common/ProgressBar';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { Settings, Award, Calendar, Zap, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const achievements = [
    { title: 'Word Master', description: 'Learn 100 words', progress: 0.35, icon: 'book' },
    { title: 'Grammar Expert', description: 'Complete all grammar lessons', progress: 0.2, icon: 'graduationCap' },
    { title: 'Perfect Score', description: 'Get 100% on 5 quizzes', progress: 0.4, icon: 'award' },
    { title: 'Dedicated Learner', description: '7 day streak', progress: 0.42, icon: 'zap' },
  ];

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={[
        styles.content, 
        { paddingTop: insets.top }
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Typography variant="h2" color={colors.white}>
                  J
                </Typography>
              </View>
            </View>
            <View style={styles.userInfo}>
              <Typography variant="h3" color={colors.neutral[800]}>
                John Doe
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Beginner Level
              </Typography>
              <View style={styles.streakContainer}>
                <Zap size={16} color={colors.accent[500]} />
                <Typography variant="caption" color={colors.neutral[700]} style={styles.streakText}>
                  3 day streak
                </Typography>
              </View>
            </View>
          </View>
          <Button 
            variant="outlined" 
            size="small"
            startIcon={<Settings size={16} color={colors.primary[500]} />}
          >
            Settings
          </Button>
        </View>
      </View>

      <View style={styles.section}>
        <Card style={styles.statsCard}>
          <Typography variant="h5" color={colors.neutral[800]} style={styles.cardTitle}>
            Learning Stats
          </Typography>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Typography variant="h3" color={colors.primary[500]}>
                42
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Words learned
              </Typography>
            </View>
            <View style={styles.statItem}>
              <Typography variant="h3" color={colors.secondary[500]}>
                5
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Lessons completed
              </Typography>
            </View>
            <View style={styles.statItem}>
              <Typography variant="h3" color={colors.accent[500]}>
                8
              </Typography>
              <Typography variant="body2" color={colors.neutral[600]}>
                Quizzes taken
              </Typography>
            </View>
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Typography variant="h4" color={colors.neutral[800]}>
            Achievements
          </Typography>
          <Button 
            variant="text" 
            size="small"
            endIcon={<ChevronRight size={18} color={colors.primary[500]} />}
          >
            View All
          </Button>
        </View>

        {achievements.map((achievement, index) => (
          <Card key={index} style={styles.achievementCard}>
            <View style={styles.achievementContent}>
              <View style={[
                styles.achievementIcon, 
                { backgroundColor: colors.primary[500] + '20' }
              ]}>
                <Award size={24} color={colors.primary[500]} />
              </View>
              <View style={styles.achievementInfo}>
                <Typography variant="subtitle1" color={colors.neutral[800]}>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color={colors.neutral[600]}>
                  {achievement.description}
                </Typography>
                <View style={styles.progressRow}>
                  <ProgressBar 
                    progress={achievement.progress} 
                    style={styles.achievementProgress} 
                  />
                  <Typography variant="caption" color={colors.neutral[600]}>
                    {Math.round(achievement.progress * 100)}%
                  </Typography>
                </View>
              </View>
            </View>
          </Card>
        ))}
      </View>

      <View style={styles.section}>
        <Typography variant="h4" color={colors.neutral[800]} style={styles.sectionTitle}>
          Weekly Activity
        </Typography>
        <Card>
          <View style={styles.calendarContainer}>
            <View style={styles.weekday}>
              <Typography variant="caption" color={colors.neutral[600]}>
                Mon
              </Typography>
              <View style={[styles.activityDot, { backgroundColor: colors.success[500] }]} />
            </View>
            <View style={styles.weekday}>
              <Typography variant="caption" color={colors.neutral[600]}>
                Tue
              </Typography>
              <View style={[styles.activityDot, { backgroundColor: colors.success[500] }]} />
            </View>
            <View style={styles.weekday}>
              <Typography variant="caption" color={colors.neutral[600]}>
                Wed
              </Typography>
              <View style={[styles.activityDot, { backgroundColor: colors.success[500] }]} />
            </View>
            <View style={styles.weekday}>
              <Typography variant="caption" color={colors.neutral[600]}>
                Thu
              </Typography>
              <View style={[styles.activityDot, { backgroundColor: colors.neutral[300] }]} />
            </View>
            <View style={styles.weekday}>
              <Typography variant="caption" color={colors.neutral[600]}>
                Fri
              </Typography>
              <View style={[styles.activityDot, { backgroundColor: colors.neutral[300] }]} />
            </View>
            <View style={styles.weekday}>
              <Typography variant="caption" color={colors.neutral[600]}>
                Sat
              </Typography>
              <View style={[styles.activityDot, { backgroundColor: colors.neutral[300] }]} />
            </View>
            <View style={styles.weekday}>
              <Typography variant="caption" color={colors.neutral[600]}>
                Sun
              </Typography>
              <View style={[styles.activityDot, { backgroundColor: colors.neutral[300] }]} />
            </View>
          </View>
        </Card>
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
    marginBottom: spacing.xl,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: spacing.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
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
  sectionTitle: {
    marginBottom: spacing.sm,
  },
  statsCard: {
    padding: spacing.md,
  },
  cardTitle: {
    marginBottom: spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  achievementCard: {
    marginBottom: spacing.sm,
    padding: spacing.md,
  },
  achievementContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  achievementInfo: {
    flex: 1,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  achievementProgress: {
    flex: 1,
    marginRight: spacing.sm,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  weekday: {
    alignItems: 'center',
  },
  activityDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginTop: spacing.sm,
  },
});