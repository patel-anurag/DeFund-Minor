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
          <span className="text-lg font-bold mt-5 text-center">
            Sorry, you have no proposals yet. Create one{" "}
            <Link href="/create-proposal">
              <a className="textx-blue-600 underline">now!</a>
            </Link>
          </span>
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
