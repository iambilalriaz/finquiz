import { Link } from 'react-router-dom';
import ContentLayout from '../../layouts/content';

const Score = () => {
  return (
    <ContentLayout heading='Your Score:'>
      <section className='grid place-items-center'>
        <p className='text-4xl text-primary font-semibold'>
          {507} / {600}
        </p>
        <Link
          to='/'
          className='text-secondary block underline absolute bottom-24'
        >
          Back to Home
        </Link>
      </section>
    </ContentLayout>
  );
};

export default Score;
