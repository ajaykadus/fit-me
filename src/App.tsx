import React from 'react';
import Dashboard from './pages/dashboard';
import { Routes, Route, Link } from 'react-router-dom';
import TrackActivity from './pages/TrackActivity';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/login';
import Navbar from './components/Navbar';
import Layout from './layout';

const App = () => {
  const { state } = useAuth();
  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trackActivity" element={<TrackActivity />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
};

export default App;
