import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customer_data_type } from "../utils/types";
interface props {
  data : customer_data_type[]
}

const Home = ({data}:props) => {
  let navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[98%] ">
        <table className="w-full text-center table-auto min-w-max shadow-lg rounded-2xl mt-5">
          <thead>
            <tr>
              <th className="p-4 bg-blue-500 rounded-tr-2xl w-[100px]">
                <p className="block text-white text-sm">NU</p>
              </th>
              <th className="p-4 bg-blue-500 w-[1/3]">
                <p className="block text-white text-sm">نام</p>
              </th>
              <th className="p-4 bg-blue-500 w-[1/3]">
                <p className="block text-white text-sm">تخلص</p>
              </th>
              <th className="p-4 bg-blue-500 w-[1/3]">
                <p className="block text-white text-sm">شماره تماس</p>
              </th>
              <th className="p-4 bg-blue-500  rounded-tl-2xl w-[200px]">
                <p className="block text-white text-sm">ای دی مشتری</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((items: customer_data_type, index: number) => {
              return (
                <tr
                  className={`cursor-pointer`}
                  onClick={() => navigate(`customer_details_id/${items.id}/`)}
                  key={index}
                >
                  <td className="p-4">
                    <p className="text-sm text-black">{index + 1}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-black">{items.user_name}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-black">{items.last_name}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-black">{items.phone}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-black">
                      {items.id == null ? "null" : items.id}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
