import React from "react";

function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-fuchsia-900 to-pink-800">
      <div className="flex flex-col items-center">
        <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mb-4 animate-spin"></div>
        <h2 className="text-2xl text-white font-bold">Processing Video...</h2>
        <p className="text-lg text-gray-300 mt-2">Please wait while we enhance your video.</p>
      </div>
    </div>
  );
}

export default LoadingPage;
