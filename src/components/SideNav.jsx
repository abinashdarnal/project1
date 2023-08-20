import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillCheckCircle } from "react-icons/ai";
import { FaElementor, FaGear } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function SideNav({ nav, handlenav }) {
  const [subnav, setSubnav] = useState(false);
  const handleSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      {nav ? (
        <div className=" bg-black text-white absolute md:relative  w-[250px] h-full pt-[75px] transition-all ease-in-out duration-500">
          <div className="flex flex-col opacity-100 transition-opacity ease-in-out duration-500">
            <div>
              <Link to="/">
                <div className="flex items-center gap-1 px-3 py-2 hover:bg-gray-600">
                  <span className="text-lg">
                    <AiFillHome />
                  </span>
                  Home
                </div>
              </Link>
            </div>
            <div>
              <div
                className="relative flex items-center gap-1 px-3 py-2 hover:bg-gray-600 cursor-pointer"
                onClick={handleSubnav}
              >
                <span className="text-lg">
                  <FaElementor />
                </span>
                Element
                <div className="absolute top-[13px] right-2 transition-all  ease-in-out duration-700">
                  {subnav ? (
                    <div>
                      <div className="transform rotate-180 duration-500">
                        <IoIosArrowUp />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="transform -rotate-180 duration-500">
                        <IoIosArrowDown />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {subnav ? (
                  <div>
                    <Link to="/element/subelement1">
                      <div className="flex items-center gap-1 px-3 py-2 pl-8 hover:bg-gray-600">
                        <span className="text-lg">
                          <FaElementor />
                        </span>
                        Sub Element 1
                      </div>
                    </Link>
                    <Link to="/element/subelement2">
                      <div className="flex items-center gap-1 px-3 py-2 pl-8 hover:bg-gray-600">
                        <span className="text-lg">
                          <FaElementor />
                        </span>
                        Sub Element 2
                      </div>
                    </Link>
                    <Link to="/element/subelement3">
                      <div className="flex items-center gap-1 px-3 py-2 pl-8 hover:bg-gray-600">
                        <span className="text-lg">
                          <FaElementor />
                        </span>
                        Sub Element 3
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div>
              <Link to="/services">
                <div className="flex items-center gap-1 px-3 py-2 hover:bg-gray-600">
                  <span className="text-lg">
                    <AiFillCheckCircle />
                  </span>
                  Services
                </div>
              </Link>
            </div>
            <div>
              <Link to="/setting">
                <div className="flex items-center gap-1 px-3 py-2 hover:bg-gray-600">
                  <span className="text-lg">
                    <FaGear />
                  </span>
                  Settings
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-black text-white    w-[0px] h-full pt-[75px] relative  transition-all ease-in-out duration-500 ">
          <div className="flex flex-col absolute   opacity-0 transition-opacity ease-in-out duration-500 ">
            <div>
              <Link to="/">
                <div className="flex items-center gap-1 px-3 py-2 hover:bg-gray-600">
                  <span className="text-lg">
                    <AiFillHome />
                  </span>
                  Home
                </div>
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-1 px-3 py-2 hover:bg-gray-600">
                <span className="text-lg">
                  <FaElementor />
                </span>
                Element
              </div>
            </div>
            <div>
              <Link to="/services">
                <div className="flex items-center gap-1 px-3 py-2 hover:bg-gray-600">
                  <span className="text-lg">
                    <AiFillCheckCircle />
                  </span>
                  Services
                </div>
              </Link>
            </div>
            <div>
              <Link to="/setting">
                <div className="flex items-center gap-1 px-3 py-2 hover:bg-gray-600">
                  <span className="text-lg">
                    <FaGear />
                  </span>
                  Settings
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default SideNav;
