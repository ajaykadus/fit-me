import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { state, dispatch } = useAuth();
  return (
    <>
      {state.isAuthenticated ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Welcome to your fitness dashboard {state.user?.username}
          </h2>
        </div>
      ) : (
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          <Link to="/login">Login</Link>
        </h2>
      )}
    </>
  );
};

export default Dashboard;
