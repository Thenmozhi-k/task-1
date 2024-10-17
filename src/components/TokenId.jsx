import React, { useState } from "react";
import buk from "../assets/updated/buk.png";

const TokenId = ({ onNavigate }) => {
  const [url, setUrl] = useState(""); // State to hold the input URL
  const [tokenId, setTokenId] = useState(null); // State to hold the extracted tokenId
  const [error, setError] = useState(""); // State to hold any error messages

  // Function to handle the submission
  const handleSubmit = () => {
    try {
      const urlObject = new URL(url); // Create a URL object from the input URL
      const queryParams = new URLSearchParams(urlObject.search); // Get the query params
      const id = queryParams.get("tokenId"); // Extract the tokenId

      if (id) {
        setTokenId(id); // Set the extracted tokenId
        setError(""); // Clear any previous error
        onNavigate(id); // Call the onNavigate function with the tokenId if needed
        console.log("Extracted Token ID:", id); // Log the extracted tokenId directly
      } else {
        setError("tokenId not found in the URL"); // Handle the case where tokenId is not found
      }
    } catch (error) {
      setError("Invalid URL"); // Handle invalid URLs
      setTokenId(null); // Reset tokenId
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative md:w-[500px] md:h-[500px] sm:h-[350px] sm:w-[350px] bg-[#161616] shadow-lg p-2 flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col items-center justify-between">
          <div className="">
            <img src={buk} alt="buk" className="md:w-[90px] w-[60px]" />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* Form */}
            <div className="flex flex-col items-center justify-center md:mt-10 sm:mt-6 border border-[#FFC4BB] shadow-lg md:py-20 sm:py-4 rounded-lg w-[90%]">
              <label className="text-[#FFC4BB] md:text-md sm:text-xs md:mb-3 sm:mb-2">
                Enter the URL
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)} // Update state on input change
                placeholder="Enter URL"
                className="border border-[#373737] bg-[#222222] sm:text-xs md:text-md rounded-md md:p-2 sm:py-1 mb-4 w-[80%] max-w-[400px] focus:outline-none focus:ring-[0.5px] focus:ring-[#FFCACA] text-white text-center"
              />
              <div className="flex w-full justify-center">
                <button
                  className="bg-[#CA3F2A] sm:text-xs text-white md:px-[145px] sm:px-[60px] md:py-1 sm:py-1 rounded-md md:text-lg border-[#FFE3E3] border border-opacity-50"
                  onClick={handleSubmit} // Call the submit handler
                >
                  Submit
                </button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
              {/* Display error message if any */}
              {tokenId && (
                <p className="text-green-500 mt-2">Token ID: {tokenId}</p>
              )}{" "}
              {/* Display the extracted tokenId */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenId;
