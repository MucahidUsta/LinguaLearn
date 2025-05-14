import { View, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { ArrowLeft, CircleCheck as CheckCircle, Circle as XCircle, CircleAlert as AlertCircle } from 'lucide-react-native';
import Typography from '@/components/common/Typography';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import colors from '@/constants/colors';
import spacing from '@/constants/spacing';
import { basicVocabQuizQuestions, practiceExercises } from '@/constants/data';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ExerciseScreen() {
  const { exercise } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Find the exercise details
  const exerciseDetails = practiceExercises.find(ex => ex.id === exercise);
  // Using basic vocab quiz questions for this example
  const questions = basicVocabQuizQuestions;

  const handleSelectOption = (optionIndex: number) => {
    if (answered) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setAnswered(true);
    
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setCompleted(false);
  };

  const renderQuizContent = () => {
    if (completed) {
      const percentage = Math.round((score / questions.length) * 100);
      
      return (
        <Card style={styles.resultCard}>
          <Typography variant="h3" color={colors.neutral[800]} style={styles.resultTitle}>
            Quiz Completed!
          </Typography>
          
          <View style={styles.scoreContainer}>
            <Typography variant="h1" color={getScoreColor(percentage)}>
              {percentage}%
            </Typography>
            <Typography variant="subtitle1" color={colors.neutral[600]}>
              Your Score: {score}/{questions.length}
            </Typography>
          </View>
          
          <View style={styles.resultMessage}>
            {percentage >= 80 ? (
              <View style={styles.messageContainer}>
                <CheckCircle size={24} color={colors.success[500]} />
                <Typography variant="body1" color={colors.neutral[700]} style={styles.message}>
                  Excellent! You've mastered this topic.
                </Typography>
              </View>
            ) : percentage >= 50 ? (
              <View style={styles.messageContainer}>
                <AlertCircle size={24} color={colors.warning[500]} />
                <Typography variant="body1" color={colors.neutral[700]} style={styles.message}>
                  Good job! A little more practice and you'll perfect it.
                </Typography>
              </View>
            ) : (
              <View style={styles.messageContainer}>
                <XCircle size={24} color={colors.error[500]} />
                <Typography variant="body1" color={colors.neutral[700]} style={styles.message}>
                  Keep practicing! This topic needs more attention.
                </Typography>
              </View>
            )}
          </View>
          
          <View style={styles.resultButtons}>
            <Button 
              variant="contained" 
              color="primary"
              onPress={handleRestart}
              style={styles.resultButton}
            >
              Restart Quiz
            </Button>
            <Button 
              variant="outlined" 
              color="primary"
              onPress={() => router.back()}
              style={styles.resultButton}
            >
              Back to Practice
            </Button>
          </View>
        </Card>
      );
    }

    const currentQ = questions[currentQuestion];
    
    return (
      <>
        <View style={styles.progressInfo}>
          <Typography variant="subtitle2" color={colors.neutral[700]}>
            Question {currentQuestion + 1} of {questions.length}
          </Typography>
        </View>
        
        <Card style={styles.questionCard}>
          <Typography variant="h5" color={colors.neutral[800]} style={styles.question}>
            {currentQ.question}
          </Typography>
          
          <View style={styles.options}>
            {currentQ.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedOption === index && styles.selectedOption,
                  answered && index === currentQ.correctAnswer && styles.correctOption,
                  answered && selectedOption === index && 
                  index !== currentQ.correctAnswer && styles.incorrectOption,
                ]}
                onPress={() => handleSelectOption(index)}
                disabled={answered}
              >
                <Typography
                  variant="body1"
                  color={
                    (answered && index === currentQ.correctAnswer) ? colors.success[700] :
                    (answered && selectedOption === index && index !== currentQ.correctAnswer) ? 
                    colors.error[700] : colors.neutral[800]
                  }
                >
                  {option}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
          
          {answered && (
            <View style={styles.explanation}>
              <Typography variant="subtitle2" color={colors.neutral[800]}>
                Explanation:
              </Typography>
              <Typography variant="body2" color={colors.neutral[700]}>
                {currentQ.explanation}
              </Typography>
            </View>
          )}
        </Card>
        
        <View style={styles.actionButtons}>
          {!answered ? (
            <Button
              variant="contained"
              color="primary"
              onPress={handleSubmit}
              disabled={selectedOption === null}
              fullWidth
            >
              Check Answer
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onPress={handleNext}
              fullWidth
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          )}
        </View>
      </>
    );
  };

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
            {exerciseDetails?.title || 'Practice Exercise'}
          </Typography>
          {exerciseDetails && (
            <View style={styles.categoryBadge}>
              <Typography variant="caption" color={colors.primary[700]}>
                {exerciseDetails.category}
              </Typography>
            </View>
          )}
        </View>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        {renderQuizContent()}
      </ScrollView>
    </View>
  );
}

// Helper function to get color based on score percentage
function getScoreColor(percentage: number): string {
  if (percentage >= 80) return colors.success[500];
  if (percentage >= 50) return colors.warning[500];
  return colors.error[500];
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
  categoryBadge: {
    backgroundColor: colors.primary[50],
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: spacing.xs,
    borderWidth: 1,
    borderColor: colors.primary[100],
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xxxl,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  questionCard: {
    marginBottom: spacing.lg,
  },
  question: {
    marginBottom: spacing.md,
  },
  options: {
    marginBottom: spacing.md,
  },
  optionButton: {
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: 8,
    marginBottom: spacing.sm,
    backgroundColor: colors.white,
  },
  selectedOption: {
    borderColor: colors.primary[500],
    backgroundColor: colors.primary[50],
  },
  correctOption: {
    borderColor: colors.success[500],
    backgroundColor: colors.success[50],
  },
  incorrectOption: {
    borderColor: colors.error[500],
    backgroundColor: colors.error[50],
  },
  explanation: {
    backgroundColor: colors.neutral[100],
    padding: spacing.md,
    borderRadius: 8,
  },
  actionButtons: {
    marginBottom: spacing.xl,
  },
  resultCard: {
    alignItems: 'center',
    padding: spacing.lg,
  },
  resultTitle: {
    marginBottom: spacing.lg,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  resultMessage: {
    marginBottom: spacing.lg,
    width: '100%',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.neutral[100],
    padding: spacing.md,
    borderRadius: 8,
  },
  message: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  resultButtons: {
    width: '100%',
  },
  resultButton: {
    marginBottom: spacing.md,
  },
});