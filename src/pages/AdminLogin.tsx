import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here, you can add authentication logic if needed
    navigate("/add-doctors"); // Redirect to Add Doctors page after login
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      {/* Background Image with Overlay */}
      <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: "url('/image/hc.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Header */}
      <header className="bg-blue-500 text-white py-4 shadow-md flex justify-center items-center gap-4 relative z-10">
        <img
          src="hi.jpg"
          alt="Logo"
          className="h-10" // Adjust size
        />
        <h1 className="text-xl font-bold">NITC Health Care Center</h1>
      </header>

      {/* Login Card */}
      <div className="flex-grow flex justify-center items-center relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
          <div>
            <label className="block mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded"
            onClick={handleLogin} // Calls handleLogin on click
          >
            Login
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-3 relative z-10">
        Designed and Developed by Saiteja
      </footer>
    </div>
  );
};

export default AdminLogin;
