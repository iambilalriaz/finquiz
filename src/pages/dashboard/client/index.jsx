import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button';

const ClientDashboard = () => {
  const naviagte = useNavigate();
  return (
    <main className='grid place-items-center h-screen'>
      <section className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl'>Welcome to FinQuiz Platform!</h1>
        <Button onClick={() => naviagte('/topics')} className='mt-4'>
          Choose Quiz Topic
        </Button>
      </section>
    </main>
  );
};

export default ClientDashboard;
