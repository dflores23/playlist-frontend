import React from "react";
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import './App.css';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';

import ForgotPassword from "./components/ForgotPassword";


function App() {

  return (
    <Container className="mt-4 d-flex align-item-center justify-content-center "
      style={{ minHeight: "100vh" }} >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Routes>
          
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;

