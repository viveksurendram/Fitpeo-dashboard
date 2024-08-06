import React from 'react'
import user2 from '../../assets/images/user-2.jpg';
import ColumnChart from '../chart/columnChart';
import Table from '../table/table';
import ProgressChart from '../chart/progressChart';
const Container = () => {
  return (
    <main class="main-content">
      <div className='heading mb-3'>
        <h2 className='fw-600'>Dashboard</h2>
      </div>
      <div className='row container-row'>
        <div className='col-lg-6 col-xl-7 col-xxl-8'>
          <div className='row card-row gy-3 gy-xl-0'>
            <div className='col-sm-6 col-lg-6 col-xl-3'>
              <div className='cus-card card-bg'>
                <div className='icon icon-bg'>
                  <i class="ri-shopping-basket-2-line"></i>
                </div>
                <h6 className='my-2 fw-600 mute-100'>Total Orders</h6>
                <div class="hstack flex-wrap align-items-end justify-content-between">
                  <h2 className='card-title fw-700 mb-0'>75</h2>
                  <h5 className='mb-0 green-text fw-600'><span><i class="ri-arrow-up-s-fill me-1"></i></span>3%</h5>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-6 col-xl-3'>
              <div className='cus-card card-bg'>
                <div className='icon green-text green-bg-100'>
                  <i class="ri-truck-line"></i>
                </div>
                <h6 className='my-2 fw-600 mute-100'>Total Delivered</h6>
                <div className='hstack flex-wrap align-items-end justify-content-between'>
                  <h2 className='card-title fw-700 mb-0'>70</h2>
                  <h5 className='mb-0 red-text fw-600'>
                    <span><i class="ri-arrow-down-s-fill me-1"></i></span>3%
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-6 col-xl-3'>
              <div className='cus-card card-bg'>
                <div className='icon orange-text orange-bg-100'>
                  <i class="ri-calendar-close-line"></i>
                </div>
                <h6 className='fw-600 my-2 mute-100'>Total Cancelled</h6>
                <div className='hstack flex-wrap align-items-end justify-content-between'>
                  <h2 className='card-title fw-700'>05</h2>
                  <h5 className='mb-0 green-text fw-600'>
                    <span><i class="ri-arrow-up-s-fill me-1"></i></span>3%
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-6 col-xl-3'>
              <div className='cus-card card-bg'>
                <div className='icon pink-bg-100 pink-text'>
                  <i class="ri-exchange-dollar-line"></i>
                </div>
                <h6 className='fw-600 my-2 mute-100'>Total Revenue</h6>
                <div className='hstack flex-wrap align-items-end justify-content-between'>
                  <h2 className='card-title fw-700'>$112k</h2>
                  <h5 className='mb-0 red-text fw-600'>
                    <span><i class="ri-arrow-down-s-fill me-1"></i></span>3%
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className='chart-wrap cus-card card-bg gb-top'>
            <div className='hstack gap-3 justify-content-between'>
              <h4 className='mb-0 fw-600'>Activity</h4>
              <button type='button' className='btn secondary-btn'>Weekly</button>
            </div>
            <div className='chart-wrap'>
              <ColumnChart />
            </div>
          </div>
          <div className='cus-card card-bg gb-top gb-bottom'>
            <h4 className='mb-0 fw-600 mb-3 mb-xxl-4'>Recent Orders</h4>
              <Table/>
          </div>
        </div>
        <div className='col-lg-6 col-xl-5 col-xxl-4'>
          <div className='cus-card card-bg gb-bottom'>
            <div className='row gy-4 gy-sm-0 overflow-hidden'>
              <div className='col-sm-6'>
                <h6 className='fw-600 mute-100 mb-2'>Net Profit</h6>
                <h1 className='mb-0 fw-700'>$6759.25</h1>
                <h5 class="mb-0 green-text fw-700"><span><i class="ri-arrow-up-s-fill me-1"></i></span>3%</h5>
              </div>
              <div className='col-sm-6 '>
                <ProgressChart />
              </div>
            </div>
          </div>
          <div className='cus-card card-bg gb-bottom h-270'>
            <div className='features-box'>
              <div className='features-item'>
                <div className='ftrs-icons orange-text orange-bg-100'>
                  <i class="ri-focus-3-line"></i>
                </div>
                <h5 className='text-white fw-600'>Goals</h5>
                <div className='float-icon'>
                  <i class="ri-arrow-drop-right-line"></i>
                </div>
              </div>
              <div className='features-item'>
                <div className='ftrs-icons blue-text blue-bg-100'>
                  <i class="ri-restaurant-2-fill"></i>
                </div>
                <h5 className='text-white fw-600'>Popular Dishes</h5>
                <div className='float-icon'>
                  <i class="ri-arrow-drop-right-line"></i>
                </div>
              </div>
              <div className='features-item'>
                <div className='ftrs-icons cyan-text cyan-bg'>
                  <i class="ri-bowl-line"></i>
                </div>
                <h5 className='text-white fw-600'>Menus</h5>
                <div className='float-icon'>
                  <i class="ri-arrow-drop-right-line"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='cus-card card-bg gb-bottom'>
            <h4 class="mb-0 fw-600 mb-3 mb-xxl-4">Customer's Feedback</h4>
              <div className='feedback-group'>
                <div className='feedback-lst-item'>
                  <div class="hstack feedback-stack gap-3 mb-1">
                    <div className='feedback-user'>
                      <img className='rounded-circle' src={user2} alt="user-img" width={40} height={40} />
                    </div>
                    <div className='feedback-content'>
                      <h5 className='mb-1 fw-600'>Jenny Wilson</h5>
                    </div>
                  </div>
                  <ul className='hstack rating'>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti repellendus ipsam at minima sint, et, quas cumque accusamus veniam eveniet quis earum reiciendis hic expedita accusantium nulla.
                  </p>
                </div>
                <div className='feedback-lst-item'>
                  <div class="hstack feedback-stack gap-3 mb-1">
                    <div className='feedback-user'>
                      <img className='rounded-circle' src={user2} alt="user-img" width={40} height={40} />
                    </div>
                    <div className='feedback-content'>
                      <h5 className='mb-1 fw-600'>Jenny Wilson</h5>
                    </div>
                  </div>
                  <ul className='hstack rating'>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti repellendus ipsam at minima sint, et, quas cumque accusamus veniam eveniet quis earum reiciendis hic expedita accusantium nulla.
                  </p>
                </div>
                <div className='feedback-lst-item'>
                  <div class="hstack feedback-stack gap-3 mb-1">
                    <div className='feedback-user'>
                      <img className='rounded-circle' src={user2} alt="user-img" width={40} height={40} />
                    </div>
                    <div className='feedback-content'>
                      <h5 className='mb-1 fw-600'>Jenny Wilson</h5>
                    </div>
                  </div>
                  <ul className='hstack rating'>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti repellendus ipsam at minima sint, et, quas cumque accusamus veniam eveniet quis earum reiciendis hic expedita accusantium nulla.
                  </p>
                </div>
                <div className='feedback-lst-item'>
                  <div class="hstack feedback-stack gap-3 mb-1">
                    <div className='feedback-user'>
                      <img className='rounded-circle' src={user2} alt="user-img" width={40} height={40} />
                    </div>
                    <div className='feedback-content'>
                      <h5 className='mb-1 fw-600'>Jenny Wilson</h5>
                    </div>
                  </div>
                  <ul className='hstack rating'>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti repellendus ipsam at minima sint, et, quas cumque accusamus veniam eveniet quis earum reiciendis hic expedita accusantium nulla.
                  </p>
                </div>
                <div className='feedback-lst-item'>
                  <div class="hstack feedback-stack gap-3 mb-1">
                    <div className='feedback-user'>
                      <img className='rounded-circle' src={user2} alt="user-img" width={40} height={40} />
                    </div>
                    <div className='feedback-content'>
                      <h5 className='mb-1 fw-600'>Jenny Wilson</h5>
                    </div>
                  </div>
                  <ul className='hstack rating'>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn rated' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                    <li className='rating-lst'>
                      <a className='rating-btn' href="javascript:void(0)">
                        <i class="ri-star-fill"></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti repellendus ipsam at minima sint, et, quas cumque accusamus veniam eveniet quis earum reiciendis hic expedita accusantium nulla.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default Container
