import React from 'react'
import 'remixicon/fonts/remixicon.css';
import user1 from '../../assets/images/user-1.jpg';

const Header = ({ toggleSidebar }) => {
  return (
    <header className='main-header row g-0 align-items-center'>
        <div className='left-widget col-6 px-3 hstack gap-2'>
            <button type='btn' className='btn-menu d-lg-none' onClick={toggleSidebar}>
              <i class="ri-menu-2-line"></i>
            </button>
            <div className='search'>
              <button type='btn' className='search-icon' >
              <i class="ri-search-line"></i>
              </button>
              <input type="text" className='control-form' placeholder='search' />
            </div>
        </div>
        <div className='right-widget col-6 hstack px-3'>
          <ul class="hstack widget-eliment ms-auto">
              <li className='element-lst'>
                <a href="javascript:void(0)" className='elem-link'>
                   <i class="ri-mail-line"></i>
                </a>
              </li>
              <li className='element-lst'>
                <a href="javascript:void(0)" className='elem-link'>
                   <i class="ri-settings-2-line"></i>
                </a>
              </li>
              <li className='element-lst'>
                <a href="javascript:void(0)" className='elem-link'>
                  <i class="ri-notification-3-line"></i>
                </a>
              </li>
              <li className='element-lst'>
                <a href="javascript:void(0)" className='prof-link'>
                    <img className='img-fluid' src={user1} alt="profile-img" />
                </a>
              </li>
          </ul>
        </div>  
    </header>
  )
}

export default Header
