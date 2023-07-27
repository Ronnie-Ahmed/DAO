import React, { useState } from "react";
import {
  ownablebox,
  mygovernor,
  mygovernorabi,
  ownableboxabi,
} from "./constants";
import { ethers } from "ethers";

export const FormPopup = ({ onClose, onSubmit, paramValue }) => {
  const [proposal, setproposal] = useState("");
  const [value, setvalue] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(proposal, value);

    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const ownableboxcontract = new ethers.Contract(
          ownablebox,
          ownableboxabi,
          signer
        );
        const mygovernorcontract = new ethers.Contract(
          mygovernor,
          mygovernorabi,
          signer
        );
        const encodecall = ownableboxcontract.interface.encodeFunctionData(
          "changeValue",
          [ethers.utils.parseEther(value).toString()]
        );
        const txResponse = await mygovernorcontract.propose(
          [ownablebox],
          [0],
          [encodecall],
          ` ${proposal}`
        );
        await txResponse.wait(1);
        alert("Proposal Created");
      }
    } catch (err) {
      console.log(err);
    }
    setproposal("");
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-0">
      <div className="max-w-md w-full p-6 duration-300 bg-gradient-to-b bg-gray-600 rounded-lg shadow-2xl bg-opacity-80">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-black bg-gradient-to-r from-blue-500 to-blue-700 text-center text-sm font-bold mb-2 py-2 rounded-md"
              htmlFor="name"
            >
              Proposal Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline resize-both overflow-auto"
              rows="4"
              onChange={(e) => setproposal(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black bg-gradient-to-r from-blue-500 to-blue-700 text-center text-sm font-bold mb-2 py-2 rounded-md"
              htmlFor="name"
            >
              Value
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white leading-tight focus:outline-none focus:shadow-outline resize-both overflow-auto"
              type="number" // Use type="number" to accept only numeric input
              min="0" // Set a minimum value (optional, use any minimum you desire)
              step="1" // Set step="1" to allow only whole numbers (integer values)
              onChange={(e) => setvalue(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full mr-4 transform hover:scale-110 transition-all duration-300"
              type="submit"
            >
              Submit
            </button>

            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
