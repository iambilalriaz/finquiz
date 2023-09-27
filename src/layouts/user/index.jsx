/* eslint-disable react/prop-types */
import { useState } from 'react';
import Sidebar from '../../components/sidebar';
import classnames from 'classnames';
const UserLayout = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  const toggleSidebar = () => setExpanded((prevState) => !prevState);
  return (
    <main>
      <Sidebar expanded={expanded} toggleSidebar={toggleSidebar} />
      <section
        className={classnames(
          {
            'w-[85%] ml-[15%]': expanded,
          },
          {
            'w-[90%] ml-[10%]': !expanded,
          },
          'p-4 relative'
        )}
      >
        {children}
      </section>
    </main>
  );
};

export default UserLayout;
