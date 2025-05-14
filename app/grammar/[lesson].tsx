import { View, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft, MessageCircle, CircleCheck as CheckCircle } from 'lucide-react-native';
import Typography from '@/components/common/Typography';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { presentSimpleLesson, grammarLessons } from '@/constants/data';

export default function LessonScreen() {
  const { lesson } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // In a real app, you'd fetch the specific lesson data
  // Here we're just using the example lesson data
  const lessonData = presentSimpleLesson;
  const lessonDetails = grammarLessons.find(l => l.id === lesson);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Button
          variant="text"
          startIcon={<ArrowLeft size={24} color={colors.neutral[800]} />}
          onPress={() => router.back()}
          style={styles.backButton}
        />
        
        <View style={styles.headerContent}>
          <Typography variant="h3" color={colors.neutral[800]}>
            {lessonDetails?.title || lessonData.title}
          </Typography>
          <View style={styles.levelBadge}>
            <Typography variant="caption" color={colors.primary[700]}>
              {lessonDetails?.level || 'Beginner'}
            </Typography>
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Card style={styles.introductionCard}>
          <Typography variant="h4" color={colors.neutral[800]} style={styles.sectionTitle}>
            Introduction
          </Typography>
          <Typography variant="body1" color={colors.neutral[700]}>
            {lessonData.introduction}
          </Typography>
        </Card>

        <Typography variant="h4" color={colors.neutral[800]} style={styles.sectionTitle}>
          Rules
        </Typography>

        {lessonData.rules.map((rule, index) => (
          <Card key={rule.id} style={styles.ruleCard}>
            <Typography variant="subtitle1" color={colors.neutral[800]}>
              {index + 1}. {rule.title}
            </Typography>
            <Typography variant="body1" color={colors.neutral[700]} style={styles.ruleExplanation}>
              {rule.explanation}
            </Typography>
            
            <View style={styles.examplesContainer}>
              {rule.examples.map((example, exIndex) => (
                <View key={`example-${exIndex}`} style={styles.exampleItem}>
                  <MessageCircle size={16} color={colors.primary[500]} style={styles.exampleIcon} />
                  <Typography variant="body2" color={colors.neutral[700]}>
                    {example}
                  </Typography>
                </View>
              ))}
            </View>
          </Card>
        ))}

        <Typography variant="h4" color={colors.neutral[800]} style={styles.sectionTitle}>
          Use Cases
        </Typography>
        
        <Card style={styles.useCasesCard}>
          {lessonData.useCases.map((useCase, index) => (
            <View key={`usecase-${index}`} style={styles.useCaseItem}>
              <CheckCircle size={16} color={colors.success[500]} style={styles.useCaseIcon} />
              <Typography variant="body2" color={colors.neutral[700]}>
                {useCase}
              </Typography>
            </View>
          ))}
        </Card>

        <Typography variant="h4" color={colors.neutral[800]} style={styles.sectionTitle}>
          Tips & Tricks
        </Typography>
        
        <Card style={styles.tipsCard}>
          {lessonData.tips.map((tip, index) => (
            <View key={`tip-${index}`} style={styles.tipItem}>
              <Typography variant="body2" color={colors.neutral[700]}>
                • {tip}
              </Typography>
            </View>
          ))}
        </Card>

        <View style={styles.buttonContainer}>
          <Button 
            variant="contained" 
            color="primary"
            fullWidth
            style={styles.practiceButton}
          >
            Practice This Lesson
          </Button>
          <Button 
            variant="outlined" 
            color="primary"
            fullWidth
          >
            Mark as Completed
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  header: {
    padding: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: spacing.sm,
  },
  headerContent: {
    paddingHorizontal: spacing.sm,
  },
  levelBadge: {
    backgroundColor: colors.primary[50],
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: spacing.xs,
    borderWidth: 1,
    borderColor: colors.primary[100],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xxxl,
  },
  introductionCard: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  ruleCard: {
    marginBottom: spacing.md,
  },
  ruleExplanation: {
    marginTop: spacing.xs,
  },
  examplesContainer: {
    marginTop: spacing.sm,
    backgroundColor: colors.neutral[50],
    padding: spacing.sm,
    borderRadius: 8,
  },
  exampleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  exampleIcon: {
    marginRight: spacing.xs,
    marginTop: 2,
  },
  useCasesCard: {
    marginBottom: spacing.md,
  },
  useCaseItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  useCaseIcon: {
    marginRight: spacing.xs,
    marginTop: 2,
  },
  tipsCard: {
    marginBottom: spacing.xl,
  },
  tipItem: {
    marginBottom: spacing.sm,
  },
  buttonContainer: {
    marginBottom: spacing.xl,
  },
  practiceButton: {
    marginBottom: spacing.md,
  },
});