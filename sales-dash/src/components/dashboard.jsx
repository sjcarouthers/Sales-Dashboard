import React, { useState } from 'react';
import Sidebar from 'Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`dashboard ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <Sidebar collapsed={sidebarCollapsed} />
      <MainContent />
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};

export default Dashboard;