import { Route, Routes } from "react-router-dom";

import { LogIn } from "@/pages/LogIn";
import { Member } from "@/pages/Member";
import { Members } from "@/pages/Members";

import { useCookies } from "react-cookie";

export const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Member></Member>}></Route>
        <Route path="/members" element={<Members></Members>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
      </Routes>
    </>
  );
};
