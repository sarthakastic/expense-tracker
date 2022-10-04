import React from "react";
import { Dispatch, SetStateAction } from "react";

interface NavigationProps {
  setNavigate: Dispatch<SetStateAction<any>>;
  navigate: any;
}

const Navigation = ({ setNavigate, navigate }: NavigationProps) => {
  return (
    <div className="w-full h-10 bg-[#031516F0] text-white flex justify-around items-center">
      <div
        onClick={() => setNavigate("expenditure")}
        className={` cursor-pointer  ${
          navigate === "expenditure" ? "text-[#bedbfe] text-lg underline " : ""
        }}  `}
      >
        View Expenditure
      </div>
      <div
        onClick={() => setNavigate("expense")}
        className={` cursor-pointer ${
          navigate === "expense" ? "text-[#bedbfe] text-lg underline " : ""
        }}  `}
      >
        Add Expense
      </div>
    </div>
  );
};

export default Navigation;
