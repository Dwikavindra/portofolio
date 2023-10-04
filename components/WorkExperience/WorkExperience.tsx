import Box from "../Box";
import Image from "next/image";
import Viska from "./VIska";
import TelkomIndonesia from "./TelkomIndonesia";
import OYIndonesia from "./OYIndonesia";
import Pahamify from "./Pahamify";

export default function WorkExperience() {
  return (
    <div>
      <h1
        id="workexperience"
        className="scroll-m-80 lg:scroll-m-4 text-7xl mt-24  font-black lg:text-9xl "
      >
        Work Experience 💻
      </h1>
      <Viska></Viska>
      <TelkomIndonesia></TelkomIndonesia>
      <OYIndonesia></OYIndonesia>
      <Pahamify></Pahamify>
    </div>
  );
}
