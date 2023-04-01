import React from 'react'
import ParentMenuItem from './ParentMenuItem';

const Sidebar = () => {
  return (
    <div className="sidebar__menu">
      {menuItems.map((item) => (
        <ParentMenuItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Sidebar

const menuItems = [
    {
      id: 1,
      title: 'Payments',
      subMenuItems: [
        { id: 11, title: 'Incoming Payments' },
        { id: 12, title: 'completed Payments' },
        { id: 13, title: 'Pending Payments' },
      ],
    },
    {
      id: 2,
      title: 'Parent Menu 2',
      subMenuItems: [
        { id: 21, title: 'Sub-Menu 1' },
        { id: 22, title: 'Sub-Menu 2' },
      ],
    },
    {
      id: 3,
      title: 'Parent Menu 3',
      subMenuItems: [
        { id: 31, title: 'Sub-Menu 1' },
        { id: 32, title: 'Sub-Menu 2' },
        { id: 33, title: 'Sub-Menu 3' },
        { id: 34, title: 'Sub-Menu 4' },
      ],
    },
  ];
  