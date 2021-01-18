import React, { useEffect, useState } from "react";
import LoginForm from "../components/form/LoginForm";

// import NormalUser from "../components/NormalUser";
// import Mod from "../components/Mod";
// import Admin from "../components/Admin";

export default function Login() {

 
  return (
    <div>
        <LoginForm />
      {/* {role == "visitor" && <NormalUser />}
      {role == "mod" && <Mod />}
      {role == "admin" && <Admin />} */}
    </div>
  );
}
