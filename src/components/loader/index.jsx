/* eslint-disable react/prop-types */
import Lottie from 'react-lottie-player';
import loaderAnimation from '../../assets/loader.json';
const Loader = ({ label }) => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <h1 className='text-secondary text-2xl'>{label}</h1>
      <Lottie
        loop
        animationData={loaderAnimation}
        play
        style={{ width: 150, height: 150 }}
      />
    </section>
  );
};

export default Loader;
