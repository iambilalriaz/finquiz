/* eslint-disable react/prop-types */

import classnames from 'classnames';
const Button = ({
  children,
  onClick,
  className,
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classnames(
        {
          'bg-primary text-secondary': variant === 'primary',
        },
        {
          'bg-white text-primary border border-primary hover:bg-primary hover:text-secondary':
            variant === 'primary-outline',
        },
        { 'bg-secondary text-white': variant === 'secondary' },
        {
          'text-secondary bg-white border border-secondary hover:bg-secondary hover:text-white':
            variant === 'secondary-outline',
        },

        'px-3 py-2 rounded-sm',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
