import logo from './logo.svg';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Components/NavBar";
import { Profile } from "./Components/Profile";
import { ReactSession } from "react-client-session";
import { NotFoundPage } from "./Components/NotFoundPage";
import { Route, Routes, Navigate, BrowserRouter as Router  } from "react-router-dom";
import { SignIn } from  "./Components/SignIn"
import { Tasks } from  "./Components/Tasks"
import './App.css';

ReactSession.setStoreType("localstorage");

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} exact />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/tasks" element={<Tasks />} />
          <Route path="/*/*" element={<NotFoundPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
