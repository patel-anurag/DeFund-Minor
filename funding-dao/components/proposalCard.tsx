import Img from "next/image";
import Link from "next/link";
import React from "react";
import { useTimer } from "react-timer-hook";
import Web3 from "web3";
import { useData } from "../contexts/dataContext";
import { Proposal } from "../utils/interface";

interface Props {
  proposal: Proposal;
  openModal: () => void;
}
export const ProposalCard: React.FC<Props> = ({ proposal, openModal }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(parseInt(proposal.livePeriod) * 1000),
    onExpire: () => console.warn("onExpire called"),
  });
  const { isStakeholder, getProposal } = useData();
  const isCompleted =
    new Date(parseInt(proposal.livePeriod) * 1000) < new Date();
  console.log(`isCompleted`, isCompleted);
  return (
    <div
      className="sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:w-1/2 xl:w-1/2 my-2 mx-3 border-2 border-gray-300 hover:border-blue-700"
      style={{"width":"98%","backgroundColor":"#2B2F3E","boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px","border": "none"}}
      onClick={async () => {
        if (isStakeholder) {
          console.log("isStakeholder");
          var data: Proposal = await getProposal(proposal.id);
          console.log(`data`, data);
          openModal();
        }
      }}
    >
      {/* box-shadow: ; */}
      <div className="flex flex-col p-3">
        <div className="flex flex-col" style={{"color":"#fff"}}>
          <span className="text-sm text-white-500 inline-flex justify-between " style={{"color":"#fff"}}>
            Proposal - #{parseInt(proposal.id) + 1}
            <span>
              Funding Amount -{" "}
              <span className="text-blue-600">
                {Web3.utils.fromWei(proposal.amount)} MATIC
              </span>
            </span>
          </span>
          <span className="text-lg inline-flex justify-between mt-5" style={{"color":"#fff"}}>
            {proposal.title}
            <span className="text-xs text-white rounded-lg py-2 px-4 font-bold ml-2 h-8" style={{"backgroundColor":"#8852E6"}}>
              Voting Period
            </span>
          </span>
          <span className="text-sm line-clamp-3 mt-4 mb-6" style={{"color":"#fff"}}>
            {proposal.desc}
          </span>
          <span className="text-sm" style={{"color":"#fff"}}>
            Proposer:{" "}
          </span>
          <span className="w-90 text-sm my-3 overflow-hidden text-xs">
            <span className="text-blue-300 00 p-1 rounded-lg">
              {proposal.proposer}
            </span>
          </span>
        </div>

        <div className="flex flex-row flex-nowrap justify-between items-center mt-5">
          <div className="flex flex-col space-y-1">
            <span className="text-xs font-bold" style={{"color":"#fff"}}>Time</span>
            {isCompleted ? (
              <span className="text-xs font-bold" style={{"color":"#fff"}}>Voting period is over.</span>
            ) : (
              <span className="text-sm">
                <span  style={{"color":"#fff"}}>{days} days</span> <span  style={{"color":"#fff"}}>{hours}:</span>
                <span  style={{"color":"#fff"}}>{minutes}:</span><span  style={{"color":"#fff"}}>{seconds}</span>
                {/* <span>{ampm}</span> */}
              </span>
            )}
          </div>
          {isCompleted ? (
            <span className="text-base" style={{"marginTop":"20px","color":"#fff"}}>
              Proposal is{" "}
              {parseInt(proposal.voteInFavor) > parseInt(proposal.voteAgainst)
                ? "Accepted"
                : "Rejected"}
            </span>
          ) : (
            <>
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-gray-500 font-bold"  style={{"color":"#fff"}}>
                  In Favor
                </span>
                <span className="text-sm"  style={{"color":"#fff"}}>{proposal.voteInFavor}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-gray-500 font-bold"  style={{"color":"#fff"}}>Against</span>
                <span className="text-sm"  style={{"color":"#fff"}}>{proposal.voteAgainst}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
