/* eslint-disable react/prop-types */
import classnames from 'classnames';
const Topic = ({ text, className, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classnames(
        {
          'bg-primary text-secondary border-primary': isSelected,
        },
        {
          'bg-white text-secondary border-secondary': !isSelected,
        },
        'rounded px-3 py-2 border',
        className
      )}
    >
      {text}
    </button>
  );
};

export default Topic;
