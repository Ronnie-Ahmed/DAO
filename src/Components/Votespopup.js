// import React from "react";
// import {
//   mygovernor,
//   mygovernorabi,
//   governortoken,
//   governortokenabi,
//   ownablebox,
//   ownableboxabi,
// } from "./constants";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";

// export const Votespopup = ({ onClose, paramValue, proposer }) => {
//   const [votefor, setvotefor] = useState(0);
//   const [voteagainst, setvoteagainst] = useState(0);
//   const [abstain, setabstain] = useState(0);
//   const [presentvalue, setpresentvalue] = useState(0);

//   const handlevotes = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();

//     const mygovernorcontract = new ethers.Contract(
//       mygovernor,
//       mygovernorabi,
//       signer
//     );
//     const mygovernortokencontract = new ethers.Contract(
//       governortoken,
//       governortokenabi,
//       signer
//     );
//     const ownableboxcontract = new ethers.Contract(
//       ownablebox,
//       ownableboxabi,
//       signer
//     );
//     const value = await ownableboxcontract.retrievevalue();
//     setpresentvalue(ethers.utils.formatEther(value));

//     const data = await mygovernorcontract.proposalVotes(paramValue);
//     console.log(data);
//     setvotefor(data.forVotes.toString());
//     setvoteagainst(data.againstVotes.toString());
//     setabstain(data.abstainVotes.toString());
//   };
//   useEffect(() => {
//     handlevotes();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-600 bg-opacity-50">
//       <div className="max-w-md w-full p-6 duration-300 bg-gradient-to-b from-gray-800 to-gray-600 rounded-lg shadow-2xl bg-opacity-90">
//         {/* Table */}
//         <table className="table-auto w-full text-white border border-white">
//           <thead>
//             <tr>
//               {/* Table Headers */}
//               <th className="px-4 font-bold text-xl py-2 border border-white text-center">
//                 Current value
//               </th>
//               <th className="px-4 font-bold text-xl py-2 border border-white text-center">
//                 After Execution
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Table rows and data */}
//             <tr>
//               <td className="border text-lg px-4 py-2 text-center">
//                 {presentvalue}
//               </td>
//               <td className="border text-lg px-4 py-2 text-center">
//                 {voteagainst}
//               </td>
//             </tr>

//             {/* Close button row */}
//             <tr>
//               <td colSpan="3" className=" px-4 py-2 text-center">
//                 {/* Close button */}
//                 <button
//                   className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transform hover:scale-110 transition-all duration-300 focus:outline-none border-none"
//                   onClick={onClose}
//                 >
//                   Close
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
