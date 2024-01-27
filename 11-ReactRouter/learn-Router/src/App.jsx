import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import Nav from "./components/Nav";
import ServicePage from "./pages/Service.page";
import BookPage from "./pages/book/Book.page";
import DetailBook from "./pages/book/DetailBook";
import NotFoundPage from "./pages/NotFound.page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/book/:name" element={<DetailBook />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
