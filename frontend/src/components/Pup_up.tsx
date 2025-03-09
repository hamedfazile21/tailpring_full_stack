import React from "react";
import { CgDanger } from "react-icons/cg";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/post";
import { IoIosClose } from "react-icons/io";
interface props {
  request_p: any;
  set_customer: any;
  default_data: any;
}

const Pup_up = ({ request_p, set_customer, default_data }: props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handel_delete = async () => {
    try {
      await api.delete(`customer_id=${id}/`);
      navigate("/");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.target);

    const formObject = Object.fromEntries(formData.entries());
    try {
      await api.put(`customer_id=${id}/`, formObject);
      location.reload();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen pup_up flex items-center justify-center">
        {request_p === "delete" ? (
          <div className="bg-white  text-black flex flex-col items-end justify-end w-1/5 rounded-2xl">
            <div className="flex items-center justify-center w-full bg-red-500 p-5 rounded-t-2xl">
              <CgDanger className="text-7xl text-white" />
            </div>
            <div className="p-5 w-full text-center mt-5">
              <h1>از حذف این مشتری مطمان هستید؟!</h1>
            </div>
            <div className="flex items-center p-5 gap-x-3">
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"
                onClick={() => set_customer(false)}
              >
                لغو
              </button>
              <button
                className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"
                onClick={(e) => handel_delete()}
              >
                حذف
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white  text-black flex flex-col items-end justify-end w-1/3 rounded-2xl p-10">
            <div className="flex items-center justify-between w-full pb-3 border-b border-gray-300">
              <h2 className="text-xl">اپدیت مشخصات مشتری </h2>
              <button
                className="cursor-pointer"
                onClick={() => set_customer(false)}
              >
                <IoIosClose className="text-2xl" />
              </button>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e)}
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
                defaultValue={default_data?.user_name}
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
                defaultValue={default_data?.last_name}
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
                defaultValue={default_data?.phone}
                required
              />
              <button className="mt-5 py-3 bg-blue-500 text-white rounded-lg font-bold cursor-pointer">
                ذخیره
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Pup_up;
