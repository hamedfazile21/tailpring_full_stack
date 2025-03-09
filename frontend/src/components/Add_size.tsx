import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import name from "../utils/list";
import api from "../utils/post";
interface props {
  user_data: any;
}

const Add_size = ({ user_data }: props) => {
  const [is_pup_up_open, set_is_pup_up_open] = useState<boolean>(false);
  const { id } = useParams();

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.target);

    const formObject = Object.fromEntries(formData.entries());
    try {
      await api.post("add_size/", formObject);
      location.reload();
    } catch (error: any) {
      console.log(error);
    }
  };

  const add_customer_size = async () => {
    set_is_pup_up_open(!is_pup_up_open);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="my-10">اندازه ای برای این مشتری اضافه نشده است</h1>
        <button
          className="mb-10 py-3 px-5 rounded-lg bg-blue-500 text-white cursor-pointer"
          onClick={() => add_customer_size()}
        >
          اظافه کردن اندازه
        </button>
      </div>
      {is_pup_up_open == true ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen pup_up flex items-center justify-center">
          <div className="bg-white p-10 rounded-xl text-black flex flex-col items-end justify-end w-1/3 text-sm">
            <div className="flex items-center justify-between w-full border-b  border-gray-300 pb-5">
              <h1 className="text-xl">اضافه کردن اندازه</h1>
              <button
                className="cursor-pointer"
                onClick={() => set_is_pup_up_open(!is_pup_up_open)}
              >
                <IoIosClose className="text-2xl" />
              </button>
            </div>
            <div className="flex items-center justify-between w-full border-b border-gray-300 py-5">
              <h1>
                نام :‌ <span>{user_data?.user_name}</span>
              </h1>
              <h1>
                تخلص : <span>{user_data?.last_name}</span>
              </h1>
              <h1>
                شماره تماس :‌ <span>{user_data?.phone}</span>
              </h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="">
              <div className="flex flex-wrap items-center justify-center w-full mt-2 gap-y-2 ">
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.maine_width}>{name.maine_width}</label>
                  <input
                    type="number"
                    name="main_width"
                    id={name.maine_width}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.pants_width}>{name.pants_width}</label>
                  <input
                    type="number"
                    name="pants_width"
                    id={name.pants_width}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.shoulder_width}>
                    {name.shoulder_width}
                  </label>
                  <input
                    type="number"
                    name="shoulder_width"
                    id={name.shoulder_width}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.stein_width}>{name.stein_width}</label>
                  <input
                    type="number"
                    name="stein_width"
                    id={name.stein_width}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.stein_radius}>{name.stein_radius}</label>
                  <input
                    type="number"
                    name="stein_radius"
                    id={name.stein_radius}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.side_hight}>{name.side_hight}</label>
                  <input
                    type="number"
                    name="side_hight"
                    id={name.side_hight}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.throat_radius}>
                    {name.throat_radius}
                  </label>
                  <input
                    type="number"
                    name="throat_radius"
                    id={name.throat_radius}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.pants_radius}>{name.pants_radius}</label>
                  <input
                    type="number"
                    name="pants_radius"
                    id={name.pants_radius}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.stein_model}>{name.stein_model}</label>
                  <input
                    type="text"
                    name="stein_model"
                    id={name.stein_model}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <div className={`flex flex-col gap-y-1 w-1/2 p-2`}>
                  <label htmlFor={name.collar_model}>{name.collar_model}</label>
                  <input
                    type="text"
                    name="collar_model"
                    id={name.collar_model}
                    className="border border-gray-300 rounded-lg w-full py-1 px-5 outline-none"
                  />
                </div>
                <input hidden value={id} name={"customer_size"} />
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
      ) : (
        ""
      )}
    </>
  );
};

export default Add_size;
