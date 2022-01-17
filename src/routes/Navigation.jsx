import React from "react";
import { HomePage } from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Navigation = () => {
    return (
        <>
            <Navbar />

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>

            <Footer />
        </>
    );
};
