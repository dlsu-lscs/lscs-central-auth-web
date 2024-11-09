import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type memberTypes = {
  committee_name: string;
  division_name: string;
  email: string;
  full_name: string;
  position_name: string;
};

export const Member = () => {
  const [currentUser, ,] = useCookies(["currentUser"]);
  const [currentToken, ,] = useCookies(["currentToken"]);

  //check if there is current token
  if (!("currentToken" in currentToken)) window.location.replace("/login");

  const [member, setMember] = useState<memberTypes>({
    committee_name: "",
    division_name: "",
    email: "",
    full_name: "",
    position_name: "",
  });

  useEffect(() => {
    const getMember = async () => {
      const response: any = await axios.post(
        "/auth/member",

        { email: currentUser.currentUser },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMember(response.data);
    };
    getMember();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#000000] text-white md:px-28 py-8">
        <div className="flex justify-center items-center my-32">
          <Card className=" bg-[#030711] border-2 border-[#1D283A] rounded-lg px-3 py-3 flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-white font-bold text-2xl">
                Member:
                <span className="font-normal ml-2">{member.full_name}</span>
              </CardTitle>
              <CardDescription>{member.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white">
                <span className="font-bold mr-2">{member.division_name}:</span>
                {member.position_name} for {member.committee_name}
              </p>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
