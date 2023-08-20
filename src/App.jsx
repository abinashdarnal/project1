import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
function App() {
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-full h-screen">
        <Header nav={nav} handlenav={handlenav} />
        <Section nav={nav} handlenav={handlenav} />
      </div>
    </>
  );
}
export default App;
