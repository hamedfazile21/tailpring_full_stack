import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Customer_details from "./page/Customer_details";
import api from "./utils/post";
const App = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    async function get_data() {
      try {
        const response = await api.get("customer_list/");
        setData(response.data);
      } catch (error) {}
    }
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
