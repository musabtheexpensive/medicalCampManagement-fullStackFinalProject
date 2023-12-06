import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';

const ManageCamp = () => {
    return (
        <div>
      <Helmet>
        <title>MediCo | MangeCamps</title>
      </Helmet>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>CampName</th>
                  <th>Venue Location</th>
                  <th>Scheduled Date And Time</th>
                  <th>Specialized Services Provided</th>
                </tr>
              </thead>
              <tbody>
                {/* {menu.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td className="text-right">${item.price}</td>
            
              
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default ManageCamp;