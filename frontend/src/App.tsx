import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Customer_details from "./page/Customer_details";
import api from "./utils/post";
import { customer_data_type } from "./utils/types";

const App = () => {
  const [data, setData] = useState<customer_data_type[]>([]);
  useEffect(() => {
    const get_data = async () => {
      try {
        const response = await api.get("customer_list/");
        setData(response.data);
        return <Home data={data} />;
      } catch (error) {}
    };
    get_data();
  }, []);
  return (
    <BrowserRouter>
      <Navbar setData={setData} data={data} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="customer_details_id/:id/" element={<Customer_details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
