import React, { useState } from "react";
import Link from "next/link";
import { useData } from "../contexts/dataContext";
import { ProposalCard } from "./proposalCard";
import { VoteModal } from "./voteModal";
import { Proposal } from "../utils/interface";

export const ProposalList = () => {
  const { allProposals, isMember, isStakeholder } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [proposal, setProposal] = useState<Proposal | null>(null);
  return (
    <>
      <VoteModal
        isOpen={isOpen}
        proposal={proposal}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
      <span className="text-lg text-center my-5 font-bold my-10"  style={{"color":"#fff"}}>
        {isMember && !isStakeholder ? "My Proposal" : "All Proposals"}
      </span>
      <main className="grid grid-cols-3 max-w-9xl justify-center" style={{"width":"100% !important"}}>
        {allProposals.length == 0 && (
          <div className="no_proposal_card_parent">
            <div className="no_pro_card">
              <div className="no_pro_card_icon_div">
                <img src="/alert.png" style={{"height":"100%"}}/>
              </div>
              <div className="no_pro_card_text_div">
                  Sorry, you have no proposals yet. Create one&nbsp;{" "}
                  <Link href="/create-proposal">
                    <a className="textx-blue-600 underline">now!</a>
                  </Link>
              </div>
            </div>
          </div>
          
        )}
        {allProposals.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            proposal={proposal}
            openModal={() => {
              setIsOpen(true);
              setProposal(proposal);
            }}
          />
        ))}
      </main>
    </>
  );
};
