import logo from './logo.svg';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Components/NavBar";
import { Profile } from "./Components/Profile";
import { NotFoundPage } from "./Components/NotFoundPage";
import { Route, Routes, Navigate, BrowserRouter as Router  } from "react-router-dom";
import { SignIn } from  "./Components/SignInSide"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} exact />
          <Route path="/login" element={<SignIn />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/*/*" element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;
