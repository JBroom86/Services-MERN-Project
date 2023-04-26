import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import HomePage from '../HomePage'
// import LogInPage from '../Log-inPage'
import AboutPage from '../AboutPage'
import ProductsPage from '../ProductsPage'
import ServicesPage from '../ServicesPage'
import ServiceDetailsPage from '../ServiceDetailsPage'
import CreateServicePage from '../CreateServicePage'
// import SignupPage from '../SignupPage'
import axios from 'axios'
import './styles.css'
// import AccountPage from '../AccountPage'




function App() {
  

  return (

    <>
      <Header />
    

      
      
        <Routes>

            <Route path="/" element={<HomePage />} />   
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
            <Route path='/services/create' element= {<CreateServicePage/>} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/login" element={<LogInPage />} /> */}
            {/* <Route path="/signup" element={<SignupPage />} /> */}
            {/* <Route path="/account" element={<AccountPage />}/> 
            <Route path="/account/services" element={<AccountPage />}/> 
            <Route path="/account/products" element={<AccountPage />}/>  */}

        </Routes>
      
      <Footer />
      
    </>
  )

  
}

export default App
