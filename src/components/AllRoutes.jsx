import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../modules/auth/Login';
import Signup from '../modules/auth/Signup';
import Page_not_found from '../pages/Page_not_found';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Page_not_found />} />
    </Routes>
  );
};

export default AllRoutes;
