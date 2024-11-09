import lscs_white from "../../assets/lscs_white.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header className="bg-[black] text-[#FFFFFF] flex justify-between items-center px-2 md:px-8 py-4">
        <div className="flex items-center space-x-1 md:space-x-3">
          <img src={lscs_white} alt="" className="w-12 md:w-20" />
          <div>
            <h1 className="font-bold text-md md:text-3xl">
              Research and Development
            </h1>
            <p className="text-xs md:text-base">
              39th La Salle Computer Society
            </p>
          </div>
        </div>
      </header>
    </>
  );
};
