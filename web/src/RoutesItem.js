import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./home/Home";

import Login from "./login/Login";

const RoutesItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesItem;