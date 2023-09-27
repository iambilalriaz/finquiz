/* eslint-disable react/prop-types */
import classnames from 'classnames';
const Option = ({ option, isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick(option)}
      className={classnames(
        {
          'bg-primary border-primary text-secondary': isSelected,
        },
        {
          'bg-white border-secondary text-secondary': !isSelected,
        },
        'px-3 py-2 rounded cursor-pointer border'
      )}
    >
      {option}
    </div>
  );
};

export default Option;
