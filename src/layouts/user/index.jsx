/* eslint-disable react/prop-types */
import { useState } from 'react';
import Sidebar from '../../components/sidebar';
import classnames from 'classnames';
const UserLayout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleSidebar = () => setExpanded((prevState) => !prevState);
  return (
    <main>
      <section className=''>
        <Sidebar expanded={expanded} toggleSidebar={toggleSidebar} />
        <section
          className={classnames(
            {
              'w-[85%] lg:ml-[15%]': expanded,
            },
            {
              'w-[70%] lg:w-[90%] ml-[20%] lg:ml-[10%]': !expanded,
            },
            ' relative'
          )}
        >
          {children}
        </section>
      </section>
    </main>
  );
};

export default UserLayout;
