import React, { Children, useEffect, useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import User from "../Componenets/user/User";
// import Navigation from "../Componenets/Navigation/Navigation";
import Expense from "../Componenets/expense/Expense";
import Expenditure from "../Componenets/expense/Expenditure";
import Navigation from "../Componenets/Navigation/Navigation";

const Protected = () => {
  const [navigate, setNavigate] = useState("expense");
  const user = UserAuth();

  if (!user.user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <User />
      <Navigation setNavigate={setNavigate} navigate={navigate} />

      {navigate === "expense" ? (
        <Expense />
      ) : navigate === "expenditure" ? (
        <Expenditure />
      ) : (
        ""
      )}
    </div>
  );
};

export default Protected;
