/* eslint-disable react/prop-types */
import classnames from 'classnames';
const SidebarItem = ({ active, onClick, label, expanded }) => {
  return (
    <button
      onClick={onClick}
      className={classnames(
        {
          'bg-primary text-secondary font-semibold': active,
        },
        {
          'bg-secondary text-white': !active,
        },
        'mb-2 px-4 p-2 rounded w-full text-left'
      )}
    >
      {expanded ? label : label?.[0]}
    </button>
  );
};

export default SidebarItem;
