/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import  { useState } from 'react';
import siteLogo from '../../assets/images/logo.png';

const menuItems = [
  { icon: 'ri-home-5-line', text: 'Home' },
  { icon: 'ri-bar-chart-box-line', text: 'Dashboard' },
  { icon: 'ri-wallet-line', text: 'Wallet' },
  { icon: 'ri-todo-line', text: 'Tasks' },
  { icon: 'ri-shopping-bag-4-line', text: 'Shop' }
];

const Sidebar = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className='side-logo-wrap'>
          <a href="javascript:void(0)" className='side-logo'>
            <img className='img-fluid' src={siteLogo} alt=""/>
          </a>
      </div>
      <ul className='side-nav'>
      {menuItems.map((item, index) => (
        <li key={index} className='side-nav-list'>
          <a
            href='javascript:void(0)'
            className={`side-nav-link ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <i className={item.icon}></i>
            <span className='nav-text'>{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
    </aside>
  )
}

export default Sidebar
