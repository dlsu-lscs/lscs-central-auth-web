import lscs_white from "../../assets/lscs_white.png";
import { Link } from "react-router-dom";
import { UserIcon } from "@/components/User_Icon/UserIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useCookies } from "react-cookie";

export const NavBar = () => {
  const [currentUser, ,] = useCookies(["currentUser"]);
  const [currentToken, , removeCurrentToken] = useCookies(["currentToken"]);

  return (
    <>
      <header className="bg-[black] text-[#FFFFFF] flex justify-between items-center px-2 md:px-8 py-4">
        <Link to="/" className="flex items-center space-x-1 md:space-x-3">
          <img src={lscs_white} alt="" className="w-12 md:w-20" />
          <div>
            <h1 className="font-bold text-md md:text-3xl">
              Research and Development
            </h1>
            <p className="text-xs md:text-base">
              39th La Salle Computer Society
            </p>
          </div>
        </Link>
        <div className="flex space-x-8">
          {" "}
          {"currentToken" in currentToken ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <UserIcon email={currentUser.currentUser}></UserIcon>{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" bg-[#030711] border-2 border-[#1D283A] rounded-lg text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#030711]" />
                <DropdownMenuItem
                  onClick={() => {
                    removeCurrentToken("currentToken");
                  }}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </header>
    </>
  );
};
