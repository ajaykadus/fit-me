import React from 'react';
import Dashboard from './pages/dashboard';
import { Routes, Route, Link } from 'react-router-dom';
import TrackActivity from './pages/TrackActivity';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/login';
import Layout from './layout';
import SignupForm from './signup';

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
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
};

export default App;
