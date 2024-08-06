import React, { useState } from 'react';
import Header from './layouts/header'
import Sidebar from './layouts/sidebar'
import Container from './layouts/container'
const Dashboard = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <div>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isActive={isSidebarActive}/>
        <Container />
    </div>
  )
}

export default Dashboard
