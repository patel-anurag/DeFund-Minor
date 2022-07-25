import React, { useState } from "react";
import { useData } from "../contexts/dataContext";
export const CreateMember = () => {
  const { createStakeholder } = useData();
  const [val, setVal] = useState("");
  return (
    <main className="w-full flex flex-colpy-4 flex-grow max-w-5xl justify-center">
      <div className="max-w-2xl border-2 rounded-xl p-3 mt-10 h-full"
        style={{"backgroundColor":"#2B2F3E","boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px","border": "none"}}
      >
        <div className="flex flex-col justify-center">
          <span style={{"color":"#fff"}}>You are not a member.</span>
          <p style={{"color":"#fff"}}>
            Add <strong>2 MATIC</strong> to become member and more than 2 MATIC
            become a stakeholder
          </p>
          <input
            type="search"
            name="q"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="my-2 w-full py-3 px-3 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none"
            style={{"backgroundColor":"#191E2C",color:"#fff",marginTop:"20px"}}
            placeholder="Amount in MATIC"
            autoComplete="off"
          />
          <button
            className="mt-3 px-2 py-1 rounded-xl bg-blue-600 text-white"
            style={{backgroundColor:"#8852E6",borderRadius:"5px",marginTop:"20px",marginBottom:"20px"}}
            onClick={() => {
              createStakeholder(val);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
};
