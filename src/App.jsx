
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

import './App.css';
import { useState } from 'react';


function App() {
  const [isSidebarOpen, setIsSideBarOpen]=useState(false);
  const toggleSidebar=()=>{setIsSideBarOpen(!isSidebarOpen)}

  return (
    <>
      <Navbar></Navbar>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      <h1>Home</h1>
    </>
  )
}

export default App
