import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Home() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    
    // Redirect to the loading page
    navigate("/loading");

    // Simulate video processing delay
    setTimeout(() => {
      // Here you can redirect to another page after processing or show the result
    }, 3000); // Change this value according to your processing time
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-fuchsia-900 to-pink-800 p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-fuchsia">
          Face Enhancement in One Click
        </h1>
        <p className="text-lg text-blue mt-4">
          This photo and video enhancer helps you improve, sharpen, and unblur your media files instantly.
        </p>
      </div>
      <div className="max-w-lg w-full p-10 bg-fuchsia-700 rounded-lg shadow-lg border-dashed border-4 border-gray-400">
        <div className="flex flex-col items-center">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center w-full py-3 bg-pink-500 text-navy_blue font-bold rounded-full shadow-md hover:bg-gray-100 focus:outline-none cursor-pointer"
          >
            <AiOutlineUpload className="mr-2" />
            {file ? file.name : "Choose files"}
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
        <p className="text-xs text-gray-400 text-center mt-6">
          By continuing, you accept our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and acknowledge receipt of our{" "}
          <a href="#" className="underline">
            Privacy & Cookie Policy
          </a>.
        </p>
      </div>
    </div>
  );
}

export default Home;
