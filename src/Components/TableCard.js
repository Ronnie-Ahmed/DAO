import { useEffect, useState } from "react";
import { mygovernor, mygovernorabi } from "./constants";
import { ethers } from "ethers";

export const TableCard = ({
  proposalId,
  proposer,
  description,
  blocknumber,
}) => {
  const [state, setstate] = useState("");

  const ID = `${proposer.slice(0, 6)}...${proposer.slice(-6)}`;

  const fetchdata = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const governorcontract = new ethers.Contract(
          mygovernor,
          mygovernorabi,
          signer
        );
        const data = await governorcontract.state(proposalId);
        console.log(data);
        if (data === 0) {
          setstate("Pending");
        } else if (data === 1) {
          setstate("Active");
        } else if (data === 2) {
          setstate("Canceled");
        } else if (data === 3) {
          setstate("Defeated");
        } else if (data === 4) {
          setstate("Succeeded");
        } else if (data === 5) {
          setstate("Queued");
        } else if (data === 6) {
          setstate("Expired");
        } else if (data === 7) {
          setstate("Executed");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tr>
      <td className="border text-lg px-4 py-2 text-center">{ID}</td>
      <td className="border text-lg px-4 py-2 text-center">{proposer}</td>
      <td className="border text-lg px-4 py-2 text-center">{description}</td>
      <td className="border text-lg px-4 py-2 text-center">{blocknumber}</td>
      <td className="border text-lg px-4 py-2 text-center">{state}</td>
    </tr>
  );
};
