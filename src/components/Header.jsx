import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
function Header({ nav, handlenav }) {
  return (
    <>
      <div className="bg-blue-500 text-white fixed top-0 z-50 w-full ">
        <div className="flex justify-between items-center px-4 py-5 ">
          <div className="flex items-center gap-6 transition-all  ease-in-out duration-700">
            {nav ? (
              <div>
                <div
                  onClick={handlenav}
                  className="cursor-pointer md:text-xl text-lg transform -rotate-180 duration-300"
                >
                  <FaTimes className="" />
                </div>
              </div>
            ) : (
              <div>
                <div
                  onClick={handlenav}
                  className="cursor-pointer md:text-xl text-lg transform rotate-180 duration-300"
                >
                  <FaBars />
                </div>
              </div>
            )}
            <div className="md:text-2x text-xl font-semibold ">
              <h1>Company Name</h1>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="rounded-full overflow-hidden w-[25px]">
              <img
                src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
                alt=""
              />
            </div>
            <h2>User Name</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
