import React from "react";
import { Landing } from "./landing";
import { Final } from "../modules";
import Navbar from "../components/Menu";
const Main = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Final />
    </>
  );
};

export default Main;
