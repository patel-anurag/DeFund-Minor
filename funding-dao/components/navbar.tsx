import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useData } from "../contexts/dataContext";

function Navbar() {
  const router = useRouter();
  const { account, connect, isMember, isStakeholder } = useData();

  return (
    <>
      <nav className="w-full h-16 mt-auto max-w-7xl">
        <div className="flex flex-row justify-between items-center h-full">
          <div className="">
            <Link href="/" passHref>
              <span
                className="font-semibold cursor-pointer"
                style={{ color: "#fff",fontSize:"25px" }}
              >
                DeFund
              </span>
            </Link>
            <span
              className="text-xs bg-blue-500 text-white rounded-lg py-1 px-2 font-bold ml-2"
              style={{ marginTop: "-5px", backgroundColor: "#8852E6" }}
            >
              {!isMember && !isStakeholder
                ? "Not a Member"
                : isStakeholder
                ? "Stakeholder"
                : "Member"}
            </span>
          </div>

          <nav className="w-full h-16 m-auto max-w-5xl flex justify-center">
            <div className="flex flex-row justify-between items-center h-full">
              {account && (
                <div className="flex flex-row items-center justify-center h-full">
                  <TabButton
                    title="Home"
                    isActive={router.asPath === "/"}
                    url={"/"}
                  />
                  {isMember && (
                    <TabButton
                      title="Contracts"
                      isActive={router.asPath === "/contracts"}
                      url={"/contracts"}
                    />
                  )}
                  {isMember && (
                    <TabButton
                      title="Create Proposal"
                      isActive={router.asPath === "/create-proposal"}
                      url={"/create-proposal"}
                    />
                  )}
                  {isMember && (
                    <TabButton
                      title="Stakeholder Lounge"
                      isActive={router.asPath === "/stakeholder-lounge"}
                      url={"/stakeholder-lounge "}
                    />
                  )}
                  {isStakeholder && (
                    <TabButton
                      title="Investments"
                      isActive={router.asPath === "/investments"}
                      url={"/investments"}
                    />
                  )}
                </div>
              )}
            </div>
          </nav>

          {account ? (
            <button
              className="bg-green-500 px-6 py-1 rounded-md cursor-pointer" data-tooltip-target="tooltip-default"
              style={{ backgroundColor: "#8852E6","fontSize":"16px" }}
            >
              {/* <span className="text-white"> */}
                {account.substr(0, 10)}...
              {/* </span> */}
              <div id="tooltip-default" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                  Tooltip content
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </button>
          ) : (
            <div
              className="bg-green-500 px-6 py-1 rounded-md cursor-pointer"
              style={{ backgroundColor: "#8852E6" }}
              onClick={() => {
                connect();
              }}
            >
              <span className="text-white" style={{"fontSize":"20px"}}>Connect</span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

const TabButton = ({
  title,
  isActive,
  url,
}: {
  title: string;
  isActive: boolean;
  url: string;
}) => {
  return (
    <Link href={url} passHref>
      <div
        className={`h-full px-3 flex items-center border-b-2 font-semibold hover:border-blue-700 hover:text-blue-700 cursor-pointer ${
          isActive
            ? "border-blue-700 text-blue-700 text-base font-semibold"
            : "border-white text-gray-400 text-base"
        }`}
      >
        <span>{title}</span>
      </div>
    </Link>
  );
};
