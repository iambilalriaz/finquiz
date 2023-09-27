import { useCallback, useState } from 'react';
import Option from './option';

/* eslint-disable react/prop-types */
const Question = ({ question, options }) => {
  const [selectedOption, setSelectdOption] = useState('');
  const onSelectOption = useCallback((option) => {
    setSelectdOption(option);
  }, []);
  return (
    <section>
      <h1 className='text-2xl'>{question}</h1>
      <section className='grid grid-cols-2 gap-4 mt-4'>
        {options?.map((option) => (
          <Option
            key={option}
            option={option}
            isSelected={selectedOption === option}
            onClick={onSelectOption}
          />
        ))}
      </section>
    </section>
  );
};

export default Question;
