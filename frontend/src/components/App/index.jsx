import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import HomePage from "../Homepage";

import AboutPage from "../AboutPage";
import ProductsPage from "../ProductsPage";
import ServicesPage from "../ServicesPage";
import ServiceDetailsPage from "../ServiceDetailsPage";
import CreateServicePage from "../CreateServicePage";
import AuthFormPage from "../AuthFormPage";

import "./styles.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/services/create" element={<CreateServicePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth/:formType" element={<AuthFormPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
