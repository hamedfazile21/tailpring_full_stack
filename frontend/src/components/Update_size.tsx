import React from "react";
import { IoIosClose } from "react-icons/io";
import { useParams } from "react-router-dom";
import api from "../utils/post";
import { customer_size_data_type } from "../utils/types";
interface props {
  is_update_open: boolean;
  set_is_update_open: React.Dispatch<React.SetStateAction<boolean>>;
  data: customer_size_data_type | undefined;
}
import name from "../utils/list";

const Update_size = ({ set_is_update_open, is_update_open, data }: props) => {
  const { id } = useParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.target as HTMLFormElement);

    const formObject = Object.fromEntries(formData.entries());
    try {
      await api.put(`get_customer_sizes_by_id=${id}/`, formObject);
      location.reload();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen pup_up flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl text-black flex flex-col items-end justify-end w-1/3 text-sm">
        <div className="flex items-center justify-between w-full border-b  border-gray-300 pb-5">
          <h1 className="text-xl">اپدیت اندازه مشتری</h1>
          <button
            className="cursor-pointer"
            onClick={() => set_is_update_open(!is_update_open)}
          >
            <IoIosClose className="text-2xl" />
          </button>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="">
          <div className="flex flex-wrap items-center justify-center w-full mt-2 gap-y-2 ">
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.maine_width}>{name?.maine_width}</label>
              <input
                type="number"
                defaultValue={data?.main_width}
                name="main_width"
                id={name?.maine_width}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.pants_width}>{name?.pants_width}</label>
              <input
                type="number"
                name="pants_width"
                defaultValue={data?.pants_width}
                id={name?.pants_width}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.shoulder_width}>
                {name?.shoulder_width}
              </label>
              <input
                type="number"
                name="shoulder_width"
                defaultValue={data?.shoulder_width}
                id={name?.shoulder_width}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.stein_width}>{name?.stein_width}</label>
              <input
                type="number"
                name="stein_width"
                defaultValue={data?.stein_width}
                id={name?.stein_width}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.stein_radius}>{name?.stein_radius}</label>
              <input
                type="number"
                name="stein_radius"
                defaultValue={data?.stein_radius}
                id={name?.stein_radius}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.side_hight}>{name?.side_hight}</label>
              <input
                type="number"
                name="side_hight"
                id={name?.side_hight}
                defaultValue={data?.side_hight}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.throat_radius}>{name?.throat_radius}</label>
              <input
                type="number"
                name="throat_radius"
                defaultValue={data?.throat_radius}
                id={name?.throat_radius}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.pants_radius}>{name?.pants_radius}</label>
              <input
                type="number"
                name="pants_radius"
                defaultValue={data?.pants_radius}
                id={name?.pants_radius}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.stein_model}>{name?.stein_model}</label>
              <input
                type="text"
                name="stein_model"
                id={name?.stein_model}
                defaultValue={data?.stein_model}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
            <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
              <label htmlFor={name?.collar_model}>{name?.collar_model}</label>
              <input
                type="text"
                name="collar_model"
                defaultValue={data?.collar_model}
                id={name?.collar_model}
                className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-lg py-3 px-5 text-white text-sm float-end cursor-pointer mt-2"
          >
            ذخیره کردن
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update_size;
