import React from "react";
import { createClient } from "urql";
import { Card } from "../Components/Card";
import image2 from "../assets/Loading2.gif";

import { useConnectionStatus } from "@thirdweb-dev/react";
import walletconnect from "../assets/walletconnect.png";
import { useState, useEffect } from "react";

export const Proposal = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [result, setresult] = useState([]);
  const status = useConnectionStatus();
  const graphrui =
    "https://api.studio.thegraph.com/query/50179/governor4/version/latest";
  const query = `{
   proposalCreateds {
    proposalId
    description
    proposer
    voteEnd
    voteStart
    blockNumber
    blockTimestamp
  }
}`;
  const client = createClient({
    url: graphrui,
  });
  const gettoken = async () => {
    const { data } = await client.query(query).toPromise();

    setresult(data.proposalCreateds);

    setIsLoading(false);
  };
  useEffect(() => {
    gettoken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-gray-800 flex justify-center items-center min-h-screen">
      {status === "undefined" ||
      status === "disconnected" ||
      status === "connecting" ? (
        <div className="flex items-center justify-center m-5 mx-4 px-1 md:mx-16 rounded-lg transform transition-all duration-300 shadow-2xl shadow-cyan-400 hover:scale-105 mb-8">
          <div className="flex flex-col items-center m-5">
            <img
              src={walletconnect}
              alt="loading"
              className="w-60 h-60 object-cover rounded-full mb-4 transition-transform transform-gpu hover:scale-110"
            />
            <h1 className="text-3xl  bg-black font-bold text-center text-white">
              Connect Wallet
            </h1>
            <h1 className="text-3xl  bg-black  text-white font-bold text-center">
              Use Mumbai Testnet
            </h1>
          </div>
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center m-5 mx-4 px-1 md:mx-16 rounded-lg transform transition-all duration-300 shadow-2xl shadow-cyan-400 hover:scale-105 mb-8">
          <div className="flex flex-col items-center">
            <img
              src={image2}
              alt="loading"
              className="w-60 h-60 object-cover rounded-full mb-4"
            />
            <h1 className="text-3xl font-bold">Loading.......</h1>
          </div>
        </div>
      ) : (
        <section
          className="flex flex-col md:flex-row items-center mt-32 px-1 md:mx-16 rounded-lg p-4 md:p-8 shadow-2xl shadow-black mb-8 md:mt-0"
          style={{ marginTop: "70px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {result.map((item, key) => (
              <div key={item.proposalId} className="mb-6">
                <Card
                  proposalId={item.proposalId}
                  proposer={item.proposer}
                  description={item.description}
                  votingstart={item.voteStart}
                  votingend={item.voteEnd}
                  blocknumber={item.blockNumber}
                  timestamp={item.blockTimestamp}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
