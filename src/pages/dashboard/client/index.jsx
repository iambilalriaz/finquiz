import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button';

const ClientDashboard = () => {
  const naviagte = useNavigate();
  return (
    <section className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-4xl'>Welcome to FinQuiz Platform!</h1>
      <Button onClick={() => naviagte('/topics')} className='mt-4'>
        Choose Quiz Topic
      </Button>
    </section>
  );
};

export default ClientDashboard;
