import { useCallback, useState } from 'react';
import Question from '../../components/question';
import ContentLayout from '../../layouts/content';
import Button from '../../components/button';
import Timer from '../../components/timer';
import Loader from '../../components/loader';
import { useNavigate } from 'react-router-dom';
const QUESTIONS = [
  {
    text: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Rome', 'Paris'],
  },
  {
    text: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
  },
  {
    text: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      'Charles Dickens',
      'William Shakespeare',
      'Jane Austen',
      'Leo Tolstoy',
    ],
  },
  {
    text: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Hg', 'Fe'],
  },
  {
    text: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
  },
];
const Questions = () => {
  const naviagte = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submittingQuiz, setSubmittingQuiz] = useState(false);
  const [loaderText, setLoaderText] = useState('Submitting Quiz...');

  const goToNextQuestion = () => {
    if (currentQuestion < QUESTIONS?.length - 1) {
      setCurrentQuestion((prevState) => prevState + 1);
    }
  };
  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevState) => prevState - 1);
    }
  };
  const onSubmitQuiz = useCallback(() => {
    setSubmittingQuiz(true);
    setTimeout(() => {
      setLoaderText('Calculating your score...');
    }, 2000);
    setTimeout(() => {
      setSubmittingQuiz(false);
      naviagte('/score', {
        replace: true,
      });
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContentLayout>
      {submittingQuiz ? (
        <Loader label={loaderText} />
      ) : (
        <>
          <Timer onSubmitQuiz={onSubmitQuiz} />
          <Question
            question={`${currentQuestion + 1}. ${
              QUESTIONS?.[currentQuestion]?.text
            }`}
            options={QUESTIONS?.[currentQuestion]?.options}
          />
          <section className='absolute flex w-full justify-around items-center bottom-24'>
            {currentQuestion > 0 && (
              <Button className='w-24' onClick={goToPreviousQuestion}>
                Previous
              </Button>
            )}
            {currentQuestion < QUESTIONS?.length - 1 && (
              <Button className='w-24' onClick={goToNextQuestion}>
                Next
              </Button>
            )}
            {currentQuestion === QUESTIONS?.length - 1 && (
              <Button
                variant='secondary'
                className='w-24'
                onClick={onSubmitQuiz}
              >
                Submit
              </Button>
            )}
          </section>
        </>
      )}
    </ContentLayout>
  );
};

export default Questions;
