import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-800 mb-4">Oops! Page not found</p>
        <p className="text-md text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Back to Home
        </a>
      </div>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/400x300.png?text=404+Error"
          alt="404"
          className="max-w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default NotFound;
