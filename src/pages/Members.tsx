import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const Members = () => {
  const [, ,] = useCookies(["currentUser"]);
  const [currentToken, ,] = useCookies(["currentToken"]);

  //check if there is current token
  if (!("currentToken" in currentToken)) window.location.replace("/login");

  useEffect(() => {
    const getMembers = async () => {
      const response = await axios.get(
        "/auth/members",

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };
    getMembers();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-[#000000] text-white md:px-28 py-8"></div>
    </>
  );
};
