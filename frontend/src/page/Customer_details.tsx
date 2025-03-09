import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Add_size from "../components/Add_size";
import Update_size from "../components/Update_size";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import Pup_up from "../components/Pup_up";
import api from "../utils/post";



const Customer_details = () => {
  const { id } = useParams();
  const [customer_data, set_customer_data] = useState<any>();
  const [size_data, set_size_data] = useState<any>();
  const [error, set_error] = useState<boolean>(true);
  const [is_update_pup_up_open, set_is_update_pup_up_open] =
    useState<boolean>();
  const [customer_pup_up, set_customer_pup_up] = useState<boolean>();
  useEffect(() => {
    const get_size_by_id = async () => {
      try {
        const response = await api.get(`get_size_by_id=${id}/`);
        set_size_data(response.data[0]);
      } catch (error: any) {
        if (
          error.response.data.detail === "No Sizes matches the given query."
        ) {
          set_error(false);
        } else {
          set_error(true);
        }
      }
    };

    const get_customer_by_id = async () => {
      try {
        const response = await api.get(`get_customer_by_id=${id}/`);
        set_customer_data(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    get_customer_by_id();
    get_size_by_id();
  }, []);

  const [content, set_content] = useState<any>();
  const pup_up = (verify: any) => {
    set_customer_pup_up(!customer_pup_up);
    if (verify === "delete") {
      set_content("delete");
    } else {
      set_content("update");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[98%] p-5 rounded-2xl text-sm">
        {error == false ? (
          <Add_size user_data={customer_data} />
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="border border-gray-300 rounded-xl py-3 px-5 w-[65%]">
              <div className="flex items-center justify-between w-full border-b border-gray-300 pb-5">
                <h1>
                  نام :‌ <span>{customer_data?.user_name}</span>
                </h1>
                <h1>
                  تخلص : <span>{customer_data?.last_name}</span>
                </h1>
                <h1>
                  شماره تماس :‌ <span>{customer_data?.phone}</span>
                </h1>
                <div className="flex items-center gap-x-2">
                  <button
                    className="border border-red-500 p-2 rounded-lg cursor-pointer text-red-500 "
                    onClick={() => pup_up("delete")}
                  >
                    <MdOutlineDeleteOutline className="text-lg" />
                  </button>
                  <button
                    className="border border-green-500 p-2 rounded-lg cursor-pointer text-green-500 "
                    onClick={() => pup_up("update")}
                  >
                    <FaRegPenToSquare className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-wrap items-start justify-center mt-3 gap-2">
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">قد پیراهن</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.main_width}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">قد تومبان</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.pants_width}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">قد شانه ها</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.shoulder_width}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">قد استین ها</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.stein_width}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">قطر استین ها</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.stein_radius}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">قطر گلو</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.throat_radius}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">اندازه پهلوها</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.side_hight}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">قطر تومبان</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.pants_radius}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">مدل استین</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.stein_model}
                  </div>
                </div>
                <div className="flex flex-row items-center w-[560px] border border-gray-300 py-1 px-4 rounded-lg ">
                  <h3 className="text-sm w-1/5">مدل یخن</h3>
                  <div className="py-1 text-sm font-bold bg-gray-300 rounded-md w-full text-center my-2">
                    {size_data?.collar_model}
                  </div>
                </div>
              </div>
              <button
                className="bg-blue-500 mt-5 py-3 w-1/5 text-center rounded-lg text-white float-end cursor-pointer"
                onClick={() =>
                  set_is_update_pup_up_open(!is_update_pup_up_open)
                }
              >
                اپدیت اندازه ها
              </button>
            </div>
          </div>
        )}
      </div>
      {is_update_pup_up_open == true ? (
        <Update_size
          is_update_open={is_update_pup_up_open}
          set_is_update_open={set_is_update_pup_up_open}
          data={size_data}
        />
      ) : (
        ""
      )}
      {customer_pup_up == true ? (
        <Pup_up default_data={customer_data} request_p={content} set_customer={set_customer_pup_up} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Customer_details;
