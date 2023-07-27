import { createContext } from "react";
export const UserContext = createContext(null);
export const governortoken = "0x408739b4FB17C1DdC953B899949e0284F2BB8973";
export const mygovernor = "0x361c31CA645caeB8A35A9Aaf1D33B0781552B5a2";
export const ownablebox = "0xD7245a658ef78acfa1Ce9277f0c780a12e6CE2af";
export const timecontroller = "0x524Ac3437de321f65F9587c3b67bf23BF2662E05";
export const mygovernorabi = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "contract IVotes",
      },
      {
        type: "address",
        name: "_timelock",
        internalType: "contract TimelockController",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "Empty",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "InvalidShortString",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [
      {
        type: "string",
        name: "str",
        internalType: "string",
      },
    ],
    outputs: [],
  },
  {
    type: "event",
    name: "EIP712DomainChanged",
    inputs: [],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProposalCanceled",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProposalCreated",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "proposer",
        indexed: false,
        internalType: "address",
      },
      {
        type: "address[]",
        name: "targets",
        indexed: false,
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        indexed: false,
        internalType: "uint256[]",
      },
      {
        type: "string[]",
        name: "signatures",
        indexed: false,
        internalType: "string[]",
      },
      {
        type: "bytes[]",
        name: "calldatas",
        indexed: false,
        internalType: "bytes[]",
      },
      {
        type: "uint256",
        name: "voteStart",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "voteEnd",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "description",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProposalExecuted",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProposalQueued",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "eta",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProposalThresholdSet",
    inputs: [
      {
        type: "uint256",
        name: "oldProposalThreshold",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newProposalThreshold",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "QuorumNumeratorUpdated",
    inputs: [
      {
        type: "uint256",
        name: "oldQuorumNumerator",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newQuorumNumerator",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "TimelockChange",
    inputs: [
      {
        type: "address",
        name: "oldTimelock",
        indexed: false,
        internalType: "address",
      },
      {
        type: "address",
        name: "newTimelock",
        indexed: false,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "VoteCast",
    inputs: [
      {
        type: "address",
        name: "voter",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "proposalId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "support",
        indexed: false,
        internalType: "uint8",
      },
      {
        type: "uint256",
        name: "weight",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "reason",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "VoteCastWithParams",
    inputs: [
      {
        type: "address",
        name: "voter",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "proposalId",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "support",
        indexed: false,
        internalType: "uint8",
      },
      {
        type: "uint256",
        name: "weight",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "string",
        name: "reason",
        indexed: false,
        internalType: "string",
      },
      {
        type: "bytes",
        name: "params",
        indexed: false,
        internalType: "bytes",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "VotingDelaySet",
    inputs: [
      {
        type: "uint256",
        name: "oldVotingDelay",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newVotingDelay",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "VotingPeriodSet",
    inputs: [
      {
        type: "uint256",
        name: "oldVotingPeriod",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newVotingPeriod",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "BALLOT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "CLOCK_MODE",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "COUNTING_MODE",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "EXTENDED_BALLOT_TYPEHASH",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cancel",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "calldatas",
        internalType: "bytes[]",
      },
      {
        type: "bytes32",
        name: "descriptionHash",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVote",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "support",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVoteBySig",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "support",
        internalType: "uint8",
      },
      {
        type: "uint8",
        name: "v",
        internalType: "uint8",
      },
      {
        type: "bytes32",
        name: "r",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "s",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVoteWithReason",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "support",
        internalType: "uint8",
      },
      {
        type: "string",
        name: "reason",
        internalType: "string",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVoteWithReasonAndParams",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "support",
        internalType: "uint8",
      },
      {
        type: "string",
        name: "reason",
        internalType: "string",
      },
      {
        type: "bytes",
        name: "params",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVoteWithReasonAndParamsBySig",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "support",
        internalType: "uint8",
      },
      {
        type: "string",
        name: "reason",
        internalType: "string",
      },
      {
        type: "bytes",
        name: "params",
        internalType: "bytes",
      },
      {
        type: "uint8",
        name: "v",
        internalType: "uint8",
      },
      {
        type: "bytes32",
        name: "r",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "s",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "clock",
    inputs: [],
    outputs: [
      {
        type: "uint48",
        name: "",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      {
        type: "bytes1",
        name: "fields",
        internalType: "bytes1",
      },
      {
        type: "string",
        name: "name",
        internalType: "string",
      },
      {
        type: "string",
        name: "version",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "chainId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "verifyingContract",
        internalType: "address",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
      {
        type: "uint256[]",
        name: "extensions",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "calldatas",
        internalType: "bytes[]",
      },
      {
        type: "bytes32",
        name: "descriptionHash",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getVotes",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "timepoint",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getVotesWithParams",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "timepoint",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "params",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasVoted",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hashProposal",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "calldatas",
        internalType: "bytes[]",
      },
      {
        type: "bytes32",
        name: "descriptionHash",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "proposalDeadline",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proposalEta",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proposalProposer",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proposalSnapshot",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proposalThreshold",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proposalVotes",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "againstVotes",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "forVotes",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "abstainVotes",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "propose",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "calldatas",
        internalType: "bytes[]",
      },
      {
        type: "string",
        name: "description",
        internalType: "string",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "queue",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "calldatas",
        internalType: "bytes[]",
      },
      {
        type: "bytes32",
        name: "descriptionHash",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "quorum",
    inputs: [
      {
        type: "uint256",
        name: "blockNumber",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quorumDenominator",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quorumNumerator",
    inputs: [
      {
        type: "uint256",
        name: "timepoint",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quorumNumerator",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "relay",
    inputs: [
      {
        type: "address",
        name: "target",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "setProposalThreshold",
    inputs: [
      {
        type: "uint256",
        name: "newProposalThreshold",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setVotingDelay",
    inputs: [
      {
        type: "uint256",
        name: "newVotingDelay",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setVotingPeriod",
    inputs: [
      {
        type: "uint256",
        name: "newVotingPeriod",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "state",
    inputs: [
      {
        type: "uint256",
        name: "proposalId",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "enum IGovernor.ProposalState",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "timelock",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "contract IERC5805",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateQuorumNumerator",
    inputs: [
      {
        type: "uint256",
        name: "newQuorumNumerator",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateTimelock",
    inputs: [
      {
        type: "address",
        name: "newTimelock",
        internalType: "contract TimelockController",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "votingDelay",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "votingPeriod",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "receive",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
];

export const ownableboxabi = [
  {
    type: "event",
    name: "AddValue",
    inputs: [
      {
        type: "uint256",
        name: "value",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "newOwner",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "changeValue",
    inputs: [
      {
        type: "uint256",
        name: "_value",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "retrievevalue",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
];
export const timecontrollerabi = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "uint256",
        name: "minDelay",
        internalType: "uint256",
      },
      {
        type: "address[]",
        name: "proposers",
        internalType: "address[]",
      },
      {
        type: "address[]",
        name: "executors",
        internalType: "address[]",
      },
      {
        type: "address",
        name: "admin",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "CallExecuted",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "index",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "target",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        indexed: false,
        internalType: "bytes",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CallSalt",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "salt",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "CallScheduled",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "index",
        indexed: true,
        internalType: "uint256",
      },
      {
        type: "address",
        name: "target",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        indexed: false,
        internalType: "bytes",
      },
      {
        type: "bytes32",
        name: "predecessor",
        indexed: false,
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "delay",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Cancelled",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "MinDelayChange",
    inputs: [
      {
        type: "uint256",
        name: "oldDuration",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newDuration",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "previousAdminRole",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "newAdminRole",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "sender",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "CANCELLER_ROLE",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "EXECUTOR_ROLE",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "PROPOSER_ROLE",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "TIMELOCK_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cancel",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      {
        type: "address",
        name: "target",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "payload",
        internalType: "bytes",
      },
      {
        type: "bytes32",
        name: "predecessor",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "executeBatch",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "payloads",
        internalType: "bytes[]",
      },
      {
        type: "bytes32",
        name: "predecessor",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getMinDelay",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTimestamp",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hashOperation",
    inputs: [
      {
        type: "address",
        name: "target",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
      {
        type: "bytes32",
        name: "predecessor",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "hashOperationBatch",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "payloads",
        internalType: "bytes[]",
      },
      {
        type: "bytes32",
        name: "predecessor",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "isOperation",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isOperationDone",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isOperationPending",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isOperationReady",
    inputs: [
      {
        type: "bytes32",
        name: "id",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "schedule",
    inputs: [
      {
        type: "address",
        name: "target",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "data",
        internalType: "bytes",
      },
      {
        type: "bytes32",
        name: "predecessor",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "delay",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "scheduleBatch",
    inputs: [
      {
        type: "address[]",
        name: "targets",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "values",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "payloads",
        internalType: "bytes[]",
      },
      {
        type: "bytes32",
        name: "predecessor",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "delay",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateDelay",
    inputs: [
      {
        type: "uint256",
        name: "newDelay",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
];
export const governortokenabi = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "uint256",
        name: "percentages",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "InvalidShortString",
    inputs: [],
    outputs: [],
  },
  {
    type: "error",
    name: "StringTooLong",
    inputs: [
      {
        type: "string",
        name: "str",
        internalType: "string",
      },
    ],
    outputs: [],
  },
  {
    type: "event",
    name: "AddHolder",
    inputs: [
      {
        type: "address",
        name: "holder",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "spender",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DelegateChanged",
    inputs: [
      {
        type: "address",
        name: "delegator",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "fromDelegate",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "toDelegate",
        indexed: true,
        internalType: "address",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "DelegateVotesChanged",
    inputs: [
      {
        type: "address",
        name: "delegate",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "previousBalance",
        indexed: false,
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "newBalance",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "EIP712DomainChanged",
    inputs: [],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "GETfreeToken",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: false,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: false,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        type: "address",
        name: "from",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        indexed: true,
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        indexed: false,
        internalType: "uint256",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "CLOCK_MODE",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        type: "bytes32",
        name: "",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "checkpoints",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
      {
        type: "uint32",
        name: "pos",
        internalType: "uint32",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [
          {
            type: "uint32",
            name: "fromBlock",
            internalType: "uint32",
          },
          {
            type: "uint224",
            name: "votes",
            internalType: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "clock",
    inputs: [],
    outputs: [
      {
        type: "uint48",
        name: "",
        internalType: "uint48",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        type: "uint8",
        name: "",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decreaseAllowance",
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "subtractedValue",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "delegate",
    inputs: [
      {
        type: "address",
        name: "delegatee",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "delegateBySig",
    inputs: [
      {
        type: "address",
        name: "delegatee",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "nonce",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "expiry",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "v",
        internalType: "uint8",
      },
      {
        type: "bytes32",
        name: "r",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "s",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "delegates",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "eip712Domain",
    inputs: [],
    outputs: [
      {
        type: "bytes1",
        name: "fields",
        internalType: "bytes1",
      },
      {
        type: "string",
        name: "name",
        internalType: "string",
      },
      {
        type: "string",
        name: "version",
        internalType: "string",
      },
      {
        type: "uint256",
        name: "chainId",
        internalType: "uint256",
      },
      {
        type: "address",
        name: "verifyingContract",
        internalType: "address",
      },
      {
        type: "bytes32",
        name: "salt",
        internalType: "bytes32",
      },
      {
        type: "uint256[]",
        name: "extensions",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMyfreeToken",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getPastTotalSupply",
    inputs: [
      {
        type: "uint256",
        name: "timepoint",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPastVotes",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "timepoint",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getVotes",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "havetoken",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increaseAllowance",
    inputs: [
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "addedValue",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonces",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "numCheckpoints",
    inputs: [
      {
        type: "address",
        name: "account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "uint32",
        name: "",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "permit",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
      },
      {
        type: "address",
        name: "spender",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "value",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "deadline",
        internalType: "uint256",
      },
      {
        type: "uint8",
        name: "v",
        internalType: "uint8",
      },
      {
        type: "bytes32",
        name: "r",
        internalType: "bytes32",
      },
      {
        type: "bytes32",
        name: "s",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenholders",
    inputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        type: "address",
        name: "from",
        internalType: "address",
      },
      {
        type: "address",
        name: "to",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
];
