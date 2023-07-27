import walletconnect from "../assets/walletconnect.png";
import { FormPopup } from "../Components/FormPopup";

import { useConnectionStatus, useAddress } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { governortoken, governortokenabi } from "../Components/constants";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const address = useAddress();

  const [votingpower, setvotingpower] = useState("");

  const status = useConnectionStatus();

  const handleSubmitForm = (formData) => {
    setIsFormOpen(false);
  };

  const getmytoekn = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const govenortokencontract = new ethers.Contract(
          governortoken,
          governortokenabi,
          signer
        );
        const havetoken = await govenortokencontract.havetoken(
          signer.getAddress()
        );

        if (havetoken !== true) {
          const mytoken = await govenortokencontract.getMyfreeToken();
          await mytoken.wait();
          alert("Token Minted");
        } else {
          alert("You already got your free token");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchdata = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const govenortokencontract = new ethers.Contract(
        governortoken,
        governortokenabi,
        signer
      );
      const data = await govenortokencontract.balanceOf(address);
      const formatdata = ethers.utils.formatEther(data);
      setvotingpower(formatdata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-column justify-center items-center h-screen">
      {status === "undefined " ||
      status === "disconnected" ||
      status === "disconnected" ||
      status === "connecting" ? (
        <div className="flex items-center justify-center m-5 mx-4 px-1 md:mx-16 rounded-lg transform transition-all duration-300 shadow-2xl shadow-cyan-400 hover:scale-105 mb-8">
          <div className="flex flex-col items-center m-5">
            <img
              src={walletconnect}
              alt="loading"
              className="w-60 h-60 object-cover rounded-full mb-4 transition-transform transform-gpu hover:scale-110"
            />
            <h1 className="text-3xl font-bold">Connect Wallet</h1>
            <h1 className="text-3xl font-bold">Use Mumbai Testnet</h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {/* Wrap in flex-column */}
          <section className="flex flex-col md:flex-row m-5 items-center mx-4 px-1 md:mx-16 rounded-lg p-4 md:p-8 mb-8 shadow-2xl shadow-cyan-800">
            {/* Buttons inside the section */}
            <button
              className="bg-gradient-to-r  from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 mx-2 mt-4 md:mt-0"
              onClick={getmytoekn}
            >
              Get My Token
            </button>
            <button
              className="bg-gradient-to-r  from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 mx-2 mt-4 md:mt-0"
              onClick={() => setIsFormOpen(true)}
            >
              Create Proposal
            </button>
            <Link to="/proposal">
              <button className="bg-gradient-to-r  from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 mx-2 mt-4 md:mt-0">
                CAST A VOTE
              </button>
            </Link>
            <Link to="/result">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 mx-2 mt-4 md:mt-0">
                Result
              </button>
            </Link>

            {isFormOpen && (
              <FormPopup
                onClose={() => setIsFormOpen(false)}
                onClick={handleSubmitForm}
              />
            )}
          </section>

          {/* Box below the section */}
          <div
            className="rounded-lg p-8 mt-8 text-center "
            style={{
              background: "linear-gradient(135deg, #6C63FF, #5850EC)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {" "}
            <h2 className="text-3xl font-bold mb-4">My Voting Power</h2>
            <p className="text-lg text-center font-bold text-black mb-6">
              {votingpower}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
