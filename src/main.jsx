import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import BlogList from "./pages/BlogList";
import ContactUs from "./pages/ContactUs";
import ErrorBoundary from "./components/ErrorBoundary";
import BlogDetail from "./pages/BlogDetail";


ReactDOM.createRoot(document.getElementById("root")).render(
 
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs/:id" element={<ErrorBoundary><BlogDetail/></ErrorBoundary>} /> 
        <Route path="/blogs" element={<ErrorBoundary><BlogList/></ErrorBoundary>} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </Router>
 
);




