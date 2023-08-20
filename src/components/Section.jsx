import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Services from "../pages/Services";
import SideNav from "./SideNav";
import Settings from "./../pages/Settings";
function Section({ nav, handlenav }) {
  return (
    <div className=" w-full h-full flex fixed bg-gray-300">
      <SideNav nav={nav} handlenav={handlenav} />
      <div className="pt-[70px] w-[100%] overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>

      {/* <div className="pt-[75px] w-[100%] overflow-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
        corporis commodi quae impedit reiciendis ab quaerat natus ipsum,
        assumenda aspernatur rerum, eligendi temporibus. Quam a autem nesciunt
        ipsam, animi laudantium.
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt=""
        />
      </div> */}
    </div>
  );
}
export default Section;
