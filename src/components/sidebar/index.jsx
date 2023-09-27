/* eslint-disable react/prop-types */
import { PiCaretDoubleLeftBold, PiCaretDoubleRightBold } from 'react-icons/pi';
import { useState } from 'react';
import classnames from 'classnames';
import SidebarItem from './sidebar-item';
const Sidebar = ({ expanded, toggleSidebar }) => {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('home');

  const handleSidebarItemClick = (sidebarItem) => {
    setSelectedSidebarItem(sidebarItem);
  };
  return (
    <aside
      className={classnames(
        {
          'w-[15%]': expanded,
        },
        {
          'w-10%': !expanded,
        },
        'bg-secondary h-screen p-4 text-whites fixed left-0 cursor-pointer'
      )}
    >
      <div className='text-white flex justify-between items-center'>
        {expanded && (
          <p>
            Hi <strong>Bilal</strong>!
          </p>
        )}
        <div
          onClick={toggleSidebar}
          className='bg-white text-secondary w-fit text-lg font-semibold rounded p-2'
        >
          {expanded ? <PiCaretDoubleLeftBold /> : <PiCaretDoubleRightBold />}
        </div>
      </div>
      <section className='text-white flex flex-col justify-center mt-12 items-start'>
        <SidebarItem
          expanded={expanded}
          label='Home'
          active={selectedSidebarItem === 'home'}
          onClick={handleSidebarItemClick.bind(this, 'home')}
        />
        <SidebarItem
          expanded={expanded}
          label='Topics'
          active={selectedSidebarItem === 'topics'}
          onClick={handleSidebarItemClick.bind(this, 'topics')}
        />
        <SidebarItem
          expanded={expanded}
          label='Profile'
          active={selectedSidebarItem === 'profile'}
          onClick={handleSidebarItemClick.bind(this, 'profile')}
        />
      </section>
    </aside>
  );
};

export default Sidebar;
