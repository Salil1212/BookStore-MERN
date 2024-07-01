import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="p-8 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">User Profile</h2>
        <p className="mb-4 text-lg">Welcome, user!</p>
        <Link
          to="/"
          className="px-4 py-2 text-white rounded-lg bg-sky-600 hover:bg-sky-800"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Profile;
