import React from 'react';

const Sidebar = ({ collapsed }) => {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div>Menu Item 1</div>
      <div>Menu Item 2</div>     
    </div>
  );
};

export default Sidebar;
