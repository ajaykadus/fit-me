import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext';

const Layout = ({ children }: any) => {
  const { state } = useAuth();
  return (
    <div className="bg-gray-100">
      {state.isAuthenticated && <Navbar />} <main>{children}</main>
    </div>
  );
};

export default Layout;
