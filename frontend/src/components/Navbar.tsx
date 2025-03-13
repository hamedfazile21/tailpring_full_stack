import React from "react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import api from "../utils/post";
import { customer_data_type } from "../utils/types";
interface props {
  setData: React.Dispatch<React.SetStateAction<customer_data_type[]>>;
  data: customer_data_type[];
}
const Navbar = ({ setData, data }: props) => {
  const [is_pup_up_open, set_is_pup_up_open] = useState<boolean>(false);
  const [is_search_open, set_is_search_open] = useState<boolean>(false);

  const add_customer = () => {
    set_is_pup_up_open(!is_pup_up_open);
  };
  const navigate = useNavigate();

  const post_data = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fromData = new FormData(e.target as HTMLFormElement);
    const fromObject = Object.fromEntries(fromData.entries());

    const response = await api.post("add_customer/", fromObject);
    setData([...data, response.data]);
    navigate(`customer_details_id/${response.data.id}/`);
    set_is_pup_up_open(!is_pup_up_open);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full mt-5 py-3 px-5">
        <ul className="flex items-center justify-between">
          <button
            className="bg-blue-500 py-3 px-4 text-white text-sm rounded-lg cursor-pointer"
            onClick={() => set_is_search_open(!is_search_open)}
          >
            جستجوی مشتری ...
          </button>
          <div className="">
            <button
              className="bg-blue-500 py-3 px-4 rounded-lg text-white cursor-pointer text-sm"
              onClick={() => add_customer()}
            >
              ثبت مشتری
            </button>
          </div>
        </ul>
      </div>
      <hr className="w-[80%] my-3 border-gray-300" />
      {is_pup_up_open === true ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen pup_up flex items-center justify-center">
          <div className="bg-white p-10 rounded-xl text-black flex flex-col items-start justify-start w-1/3 text-sm">
            <div className="flex items-center justify-between w-full border-b  border-gray-300 pb-5">
              <h1 className="text-xl">اضافه کردن مشتری</h1>
              <button
                className="cursor-pointer"
                onClick={() => set_is_pup_up_open(!is_pup_up_open)}
              >
                <IoIosClose className="text-2xl" />
              </button>
            </div>
            <form
              onSubmit={(e) => post_data(e)}
              className="flex flex-col w-full pup_up_form"
            >
              <label htmlFor="user_name" className="my-4">
                نام مشتری :
              </label>
              <input
                className="w-full py-2 px-5 border border-gray-300 rounded-lg outline-none"
                type="text"
                id="user_name"
                name="user_name"
                required
              />
              <label htmlFor="last_name" className="my-4">
                تخلص مشتری :
              </label>
              <input
                className="w-full py-2 px-5 border border-gray-300 rounded-lg outline-none"
                type="text"
                id="last_name"
                name="last_name"
                required
              />
              <label htmlFor="phone" className="my-4">
                شماره تماس :
              </label>
              <input
                className="w-full py-2 px-5 border border-gray-300 rounded-lg outline-none"
                type="number"
                name="phone"
                id="phone"
                required
              />
              <button className="mt-5 py-3 bg-blue-500 text-white rounded-lg font-bold cursor-pointer">
                اضافه کردن
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
      {is_search_open === true ? (
        <Search
          set_is_search_open={set_is_search_open}
          is_search_open={is_search_open}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
