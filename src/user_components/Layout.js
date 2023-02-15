import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Home from './../pages/Home';
import { Route, Routes } from 'react-router-dom';
import routes from './../routes';


const Layout = () => {
  return (
    <>
    <Header />
    <Home />
    <Footer />

    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component}/>
      ))}
    </Routes>

    </>
  )
}

export default Layout