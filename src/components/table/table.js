import React from 'react'
import user2 from '../../assets/images/user-2.jpg';
import user3 from '../../assets/images/user-3.jpg';
import user4 from '../../assets/images/user-4.jpg';

const Table = () => {
  return (
    <div className="table-wrap table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Order No.</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className='hstack'>
                        <span className='prof-img me-3'>
                          <img className='img-fluid user-img' src={user2} alt="user 1" width={30} />
                        </span>
                        <span>Wade Warren</span>
                      </span>
                    </td>
                    <td>15478256</td>
                    <td>$124</td>
                    <td>
                      <button type='button' className='btn btn-sm success-btn'>Delivered</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='hstack'>
                        <span className='prof-img me-3'>
                          <img className='img-fluid user-img' src={user2} alt="user 1" width={30} />
                        </span>
                        <span>Jane Cooper</span>
                      </span>
                    </td>
                    <td>15478256</td>
                    <td>$124</td>
                    <td>
                      <button type='button' className='btn btn-sm success-btn'>Delivered</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='hstack'>
                        <span className='prof-img me-3'>
                          <img className='img-fluid user-img' src={user3} alt="user 1" width={30} />
                        </span>
                        <span>Wade Warren</span>
                      </span>
                    </td>
                    <td>15478256</td>
                    <td>$124</td>
                    <td>
                      <button type='button' className='btn btn-sm danger-btn'>Cancelled</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='hstack'>
                        <span className='prof-img me-3'>
                          <img className='img-fluid user-img' src={user4} alt="user 1" width={30} />
                        </span>
                        <span>Wade Warren</span>
                      </span>
                    </td>
                    <td>15478256</td>
                    <td>$124</td>
                    <td>
                      <button type='button' className='btn btn-sm pending-btn'>Pending</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='hstack'>
                        <span className='prof-img me-3'>
                          <img className='img-fluid user-img' src={user2} alt="user 1" width={30} />
                        </span>
                        <span>Wade Warren</span>
                      </span>
                    </td>
                    <td>15478256</td>
                    <td>$124</td>
                    <td>
                      <button type='button' className='btn btn-sm success-btn'>Delivered</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='hstack'>
                        <span className='prof-img me-3'>
                          <img className='img-fluid user-img' src={user3} alt="user 1" width={30} />
                        </span>
                        <span>Wade Warren</span>
                      </span>
                    </td>
                    <td>15478256</td>
                    <td>$124</td>
                    <td>
                      <button type='button' className='btn btn-sm success-btn'>Delivered</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className='hstack'>
                        <span className='prof-img me-3'>
                          <img className='img-fluid user-img' src={user2} alt="user 1" width={30} />
                        </span>
                        <span>Wade Warren</span>
                      </span>
                    </td>
                    <td>15478256</td>
                    <td>$124</td>
                    <td>
                      <button type='button' className='btn btn-sm success-btn'>Delivered</button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
  )
}

export default Table
