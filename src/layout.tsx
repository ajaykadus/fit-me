import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext';

const Layout = ({ children }: any) => {
  const { state } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {state.isAuthenticated && <Navbar />} <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
