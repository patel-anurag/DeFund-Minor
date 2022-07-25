import Img from "next/image";
import Link from "next/link";
import React from "react";
import { useTimer } from "react-timer-hook";
import Web3 from "web3";
import { useData } from "../contexts/dataContext";
import { Proposal } from "../utils/interface";
import { AddFundsModal } from "./addFundModal";

interface Props {
  proposal: Proposal;
  openModal: () => void;
}
export const ProposalInvestmentCard: React.FC<Props> = ({
  proposal,
  openModal,
}) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(parseInt(proposal.livePeriod) * 1000),
    onExpire: () => console.warn("onExpire called"),
  });
  const { isStakeholder, getProposal, releaseFunding } = useData();
  const [isOpen, setIsOpen] = React.useState(false);
  const isCompleted =
    new Date(parseInt(proposal.livePeriod) * 1000) < new Date();
  console.log(`proposal.isPaid`, proposal.isPaid);

  return (
    <div
      className="w-full sm:my-1 sm:px-1 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:w-1/2 xl:w-1/2 my-2"
      style={{ width:"100%"}}
      onClick={async () => {
        if (isStakeholder) {
          console.log("isStakeholder");
          var data: Proposal = await getProposal(proposal.id);
          console.log(`data`, data);
          openModal();
        }
      }}
    >
      <AddFundsModal
        isOpen={isOpen}
        id={proposal.id}
        closeModal={() => {
          setIsOpen(false);
        }}
        fundingRequired={Web3.utils.fromWei(
          (
            parseInt(proposal.amount) - parseInt(proposal.totalFundRaised)
          ).toString()
        )}
        fundingRaised={Web3.utils.fromWei(proposal.totalFundRaised)}
      />
      <div className="flex flex-col border-2 border-gray-300 p-3 hover:border-blue-700"
      style={{"width":"98%","backgroundColor":"#2B2F3E","boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px","border": "none",borderRadius:"5px",height:"fit-content"}}>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 inline-flex justify-between" style={{"color":"#fff"}}>
            Proposal - #{parseInt(proposal.id) + 1}
          </span>
          <span className="text-lg inline-flex justify-between mt-2"  style={{"color":"#fff"}}>
            {proposal.title}
            <span className="text-xs text-white rounded-lg py-2 px-4 font-bold ml-2 h-8" style={{"backgroundColor":"#8852E6"}}>
              Voting Period
            </span>
          </span>
          <span className="text-sm line-clamp-3 mt-4 mb-6"  style={{"color":"#fff"}}>
            {proposal.desc}
          </span>
          <span className="text-sm" style={{"color":"#fff"}}>
            Proposer:{" "}
          </span>
          <span className="text-sm my-3">
            <span className="text-xm text-blue-200 p-1 rounded-lg">
              {proposal.proposer}
            </span>
          </span>
        </div>
        <span className="my-3"  style={{"color":"#fff"}}>
          {isCompleted &&
          parseInt(proposal.voteInFavor) > parseInt(proposal.voteAgainst)
            ? `Total Funding Received - ${Web3.utils.fromWei(
                proposal.totalFundRaised
              )} MATIC`
            : ""}
        </span>
        {!proposal.isPaid && isCompleted && (
          <div
            className="px-3 py-2 bg-blue-600 text-white font-bold text-center rounded-xl"
            style={{backgroundColor:"#8852E6",borderRadius:"5px",marginTop:"10px",marginBottom:"20px"}} 
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add Funds
          </div>
        )}
        {!proposal.isPaid &&
          isCompleted &&
          parseInt(proposal.totalFundRaised) >= parseInt(proposal.amount) && (
            <div
              className="px-3 py-2 text-white bg-green-600 font-bold text-center rounded-xl mt-3"
              style={{borderRadius:"5px",marginTop:"10px",marginBottom:"20px"}} 
              onClick={async () => {
                await releaseFunding(proposal.id);
              }}
            >
              Relese Funds
            </div>
          )}
        {proposal.isPaid && (
          <span className="text-center border-2 px-3 py-1 rounded-xl" style={{"color":"#8852E6",border:"none"}}>
            Funds are released to Proposer.
          </span>
        )}
        {!isCompleted && (
          <div className="flex flex-row flex-nowrap justify-between items-center mt-5">
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-gray-500 font-bold" style={{"color":"#fff"}}>Time</span>
              <span className="text-sm">
                <span style={{"color":"#fff"}}>{days} days</span> <span style={{"color":"#fff"}}>{hours}:</span>
                <span style={{"color":"#fff"}}>{minutes}:</span><span style={{"color":"#fff"}}>{seconds}</span>
                {/* <span>{ampm}</span> */}
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-gray-500 font-bold" style={{"color":"#fff"}}>In Favor</span>
              <span className="text-sm" style={{"color":"#fff"}}>{proposal.voteInFavor}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-gray-500 font-bold" style={{"color":"#fff"}}>Against</span>
              <span className="text-sm" style={{"color":"#fff"}}>{proposal.voteAgainst}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
