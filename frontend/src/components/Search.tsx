import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import api from "../utils/post";
import { customer_data_type } from "../utils/types";
interface props {
  is_search_open: boolean;
  set_is_search_open: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search = ({ is_search_open, set_is_search_open }: props) => {
  const navigate = useNavigate();
  const [search_id, set_search_id] = useState<string>();
  const [search_data, set_search_data] = useState<customer_data_type[]>([]);
  const [not_found, set_not_found] = useState<boolean>(false);

  const close_search_pup_up = (id: number) => {
    navigate(`customer_details_id/${id}/`);
    set_is_search_open(!is_search_open);
    set_search_data([]);
    set_not_found(false);
  };
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      set_not_found(false);
      try {
        const response = await api.get(`get_customer_by_id=${search_id}/`);
        set_search_data(response.data);
      } catch (error: unknown) {
        set_not_found(true);
      }
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen pup_up flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl text-black flex flex-col items-start justify-start w-1/3 text-sm">
        <div className="flex items-center justify-between w-full border-b  border-gray-300 pb-5">
          <h1 className="text-xl">جستجوی مشتری بر اساس ای دی</h1>
          <button
            className="cursor-pointer"
            onClick={() => {
              set_is_search_open(!is_search_open);
              set_search_data([]);
            }}
          >
            <IoIosClose className="text-2xl" />
          </button>
        </div>
        <div className="w-full mt-4 border border-gray-300 rounded-lg flex items-center px-5 ">
          <input
            type="number"
            className="w-full py-2 px-5 outline-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => set_search_id(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
          />
          <FiSearch className="text-xl text-gray-500" />
        </div>
        <div className="w-full">
          <table className="w-full text-center mt-2 ">
            <tbody>
              {search_data?.map((items: customer_data_type, index: number) => {
                return (
                  <tr
                    className={`cursor-pointer bg-gray-200 rounded-lg`}
                    onClick={() => close_search_pup_up(items.id)}
                    key={index}
                  >
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
          {not_found === true ? (
            <h1 className="text-xl w-full text-center mt-5">
              مشتری به این ای دی یافت نشد{" "}
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
