/* eslint-disable react/prop-types */
const ContentLayout = ({ children, heading }) => {
  return (
    <main className='grid place-items-center h-screen'>
      <section className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-center mb-8'>{heading}</h1>
        <section className='flex justify-center flex-wrap gap-4'>
          {children}
        </section>
      </section>
    </main>
  );
};

export default ContentLayout;
