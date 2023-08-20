import React from "react";
import { BiSearchAlt, BiSolidPencil } from "react-icons/bi";
import { ImBin } from "react-icons/im";

import MemberData from "../components/MemberData";
function Home() {
  return (
    <>
      <div className="flex items-center justify-between px-6 py-2 bg-white shadow-lg">
        <div className="md:text-lg text-sm font-bold">
          <h1>Member Details</h1>
        </div>
        <div className="bg-slate-400 flex items-center p-[2px] rounded-3xl h-[30px] gap-[2px]">
          <input
            type="text"
            name="search"
            id="searchDetail"
            className="focus:outline-none rounded-s-3xl bg-white text-black pl-3 h-full"
          />
          <button className="hover:bg-black hover:text-white transition-all ease-in-out duration-300 h-full rounded-e-3xl p-2 flex justify-center items-center">
            <BiSearchAlt />
          </button>
        </div>
      </div>

      <div className="bg-white mt-5 md:p-5 p-0  ">
        <table className="w-full ">
          <thead className="">
            <tr className=" border-b-[1px] font-bold text-xs md:text-[16px]">
              <td>
                <div className="flex justify-center mb-3 mt-3 md:mt-0">SN</div>
              </td>
              <td>
                <div className="flex justify-center mb-3 mt-3 md:mt-0">
                  Member Name
                </div>
              </td>
              <td>
                <div className="flex justify-center mb-3 mt-3 md:mt-0">
                  Gender
                </div>
              </td>
              <td>
                <div className="flex justify-center mb-3 mt-3 md:mt-0">
                  Address
                </div>
              </td>
              <td>
                <div className="flex justify-center mb-3 mt-3 md:mt-0">
                  Mobile No
                </div>
              </td>
              <td>
                <div className="flex justify-center mb-3 mt-3 md:mt-0">
                  Salary
                </div>
              </td>
              <td>
                <div className="flex justify-center mb-3 mt-3 md:mt-0">
                  Action
                </div>
              </td>
            </tr>
          </thead>

          <tbody className="text-xs  md:text-[16px]">
            {MemberData.map((items, id) => (
              <tr key={id} className=" border-b-[1px] ">
                <td>
                  <div className="flex justify-center">{items.id}</div>
                </td>
                <td>
                  <div className="flex justify-center">{items.name}</div>
                </td>
                <td>
                  <div className="flex justify-center">{items.gender}</div>
                </td>
                <td>
                  <div className="flex justify-center">{items.address}</div>
                </td>
                <td>
                  <div className="flex justify-center">{items.mobile_no}</div>
                </td>
                <td>
                  <div className="flex justify-center">{items.salary}</div>
                </td>
                <td className="flex justify-center">
                  <div className="flex">
                    <button className="p-2 m-1 text-white rounded-full bg-blue-600">
                      <BiSolidPencil />
                    </button>
                    <button className="p-2 m-1 text-white rounded-full bg-red-600">
                      <ImBin />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Home;
