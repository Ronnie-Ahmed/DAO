import React from "react";

import { createClient } from "urql";
import { TableCard } from "../Components/TableCard";

import { useState, useEffect } from "react";

export const Result = () => {
  const [result, setresult] = useState([]);

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
  };

  useEffect(() => {
    gettoken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Table */}
      <table
        className="table-auto w-full text-white border border-white"
        style={{ marginLeft: "70px", marginRight: "70px" }}
      >
        <thead>
          <tr>
            {/* Table Headers */}
            <th className="px-4 font-bold text-xl py-2 border border-white text-center">
              Proposal ID
            </th>
            <th className="px-4 font-bold text-xl py-2 border border-white text-center">
              Proposer
            </th>
            <th className="px-4 font-bold text-xl py-2 border border-white text-center">
              Proposal
            </th>
            <th className="px-4 font-bold text-xl py-2 border border-white text-center">
              Block Number
            </th>
            <th className="px-4 font-bold text-xl py-2 border border-white text-center">
              State
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the result and create new rows with TableCard */}
          {result.map((item) => (
            <TableCard
              key={item.proposalId}
              proposalId={item.proposalId}
              proposer={item.proposer}
              description={item.description}
              blocknumber={item.blockNumber}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
