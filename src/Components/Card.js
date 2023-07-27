import React, { useEffect } from "react";
import { useState } from "react";
import { ethers } from "ethers";
// import { Votespopup } from "./Votespopup";

import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

import {
  ownablebox,
  mygovernor,
  mygovernorabi,
  ownableboxabi,
} from "./constants";
export const Card = ({
  proposalId,
  proposer,
  votingstart,
  description,
  votingend,
  blocknumber,
  timestamp,
}) => {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  // const handleSubmitForm = (formData) => {
  //   setIsFormOpen(false);
  // };
  const truncatedSeller = `${proposer.slice(0, 6)}...${proposer.slice(-6)}`;
  const ID = `${proposalId.slice(0, 6)}...${proposalId.slice(-6)}`;
  const [block, setBlock] = useState(0);
  const address = useAddress();
  const navigate = useNavigate();

  const getcurrentblock = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const blockNumber = await provider.getBlockNumber();
        return blockNumber;
      } else {
        throw new Error("Please Connect Wallet");
      }
    } catch (err) {
      throw err;
    }
  };

  const handleGetCurrentBlock = async () => {
    try {
      const currentBlock = await getcurrentblock();
      setBlock(currentBlock);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    handleGetCurrentBlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlevoting = async (id) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const mygovernorcontract = new ethers.Contract(
        mygovernor,
        mygovernorabi,
        signer
      );
      const data = await mygovernorcontract.state(proposalId);
      if (data === 1) {
        const data = await mygovernorcontract.hasVoted(proposalId, address);
        if (data !== true) {
          if (id === "against") {
            const data = await mygovernorcontract.castVote(proposalId, 0);
            await data.wait();
            alert("Voted Against");
          } else if (id === "for") {
            const data = await mygovernorcontract.castVote(proposalId, 1);
            await data.wait();
            alert("Voted For");
          } else {
            const data = await mygovernorcontract.castVote(proposalId, 2);
            await data.wait();
            alert("Abstain from voting ");
          }
        } else {
          alert("You already voted");
        }
      } else {
        alert("Proposal is not currently active");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleexecute = async () => {
    try {
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
      const data = await mygovernorcontract.state(proposalId);
      if (data === 4 || data === 5) {
        const encodecall = ownableboxcontract.interface.encodeFunctionData(
          "changeValue",
          [77]
        );
        const descriptionhash = ethers.utils.keccak256(
          ethers.utils.toUtf8Bytes(description)
        );
        const queuetx = await mygovernorcontract.queue(
          [ownablebox],
          [0],
          [encodecall],
          descriptionhash
        );
        await queuetx.wait(1);
        const executetx = await mygovernorcontract.execute(
          [ownablebox],
          [0],
          [encodecall],
          descriptionhash
        );
        await executetx.wait(1);
        alert("Executed");
        navigate("/result");
      } else {
        alert("Proposal not successfull");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handlecancel = async () => {
    try {
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
        [77]
      );
      const descriptionhash = ethers.utils.keccak256(
        ethers.utils.toUtf8Bytes(description)
      );
      const data = await mygovernorcontract.state(proposalId);
      console.log(data);
      if (data === 3 && proposer === address) {
        const canceltx = await mygovernorcontract.cancel(
          [ownablebox],
          [0],
          [encodecall],
          descriptionhash
        );
        await canceltx.wait(1);

        alert("Canceled");
        navigate("/result");
      } else {
        alert("Too late to cancel or not your proposal");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-500 rounded-lg shadow-md p-4">
      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-xl font-bold" colSpan="2">
              BLOCK #{blocknumber}
            </th>
          </tr>
          <tr>
            <td className="font-bold">ProposalID:</td>
            <td>{ID}</td>
          </tr>
          <tr>
            <td className="font-bold">Proposer:</td>
            <td>{truncatedSeller}</td>
          </tr>
          <tr>
            <td className="font-bold">Description:</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td className="font-bold">Starting :</td>
            <td>#{votingstart}</td>
          </tr>
          <tr>
            <td className="font-bold">CurrentBlock:</td>
            <td>#{block}</td>
          </tr>
          <tr>
            <td className="font-bold">Ending:</td>
            <td>#{votingend}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          id="against"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300 mr-2"
          onClick={() => handlevoting("asainst")}
        >
          Vote Against
        </button>
        <button
          id="for"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300 mr-2"
          onClick={() => handlevoting("for")}
        >
          Vote For
        </button>
        <button
          id="abstain"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300"
          onClick={() => handlevoting("abstain")}
        >
          Vote Abstain
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="w-full bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300"
          onClick={handleexecute}
        >
          Execute
        </button>
        <button
          className="w-full bg-red-800 ml-2 hover:bg-red-900 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300"
          onClick={handlecancel}
        >
          Cancel
        </button>
        {/* <button
          className="w-full bg-violet-600 ml-2 hover:bg-violet-800 text-white font-bold py-3 px-6 rounded-full transform hover:scale-110 transition-all duration-300"
          onClick={() => setIsFormOpen(true)}
        >
          Votes
        </button> */}
        {/* {isFormOpen && (
          <Votespopup
            onClose={() => setIsFormOpen(false)}
            onClick={handleSubmitForm}
            paramValue={proposalId}
            proposer={proposer}
          />
        )} */}
      </div>
    </div>
  );
};
