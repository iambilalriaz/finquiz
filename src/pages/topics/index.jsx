import { useState } from 'react';
import Topic from '../../components/topic';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';

const TOPICS = [
  'Programming',
  'Finance',
  'Business',
  'Sports',
  'Science',
  'Education',
];
const QuizTopics = () => {
  const naviagte = useNavigate();

  const [selectedTopic, setSelectedTopic] = useState(TOPICS?.[2]);

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };
  return (
    <main className='grid place-items-center h-screen'>
      <section className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-center mb-8'>
          Choose your topic for quiz!
        </h1>
        <section className='flex justify-center flex-wrap gap-4'>
          {TOPICS?.map((topic) => (
            <Topic
              key={topic}
              text={topic}
              isSelected={selectedTopic === topic}
              onClick={() => handleTopicChange(topic)}
            />
          ))}
        </section>
        <Button
          className='absolute bottom-24'
          variant='secondary'
          onClick={() => naviagte('/quiz')}
        >
          Start Quiz
        </Button>
      </section>
    </main>
  );
};

export default QuizTopics;
