import Box from "../Box";
import Image from "next/image";
import Viska from "./VIska";
import TelkomIndonesia from "./TelkomIndonesia";
import OYIndonesia from "./OYIndonesia";
import Pahamify from "./Pahamify";

export default function WorkExperience() {
  return (
    <div id="workexperience">
      <h1 className="text-6xl mt-24  font-black ">Work Experience 💻</h1>
      <Viska></Viska>
      <TelkomIndonesia></TelkomIndonesia>
      <OYIndonesia></OYIndonesia>
      <Pahamify></Pahamify>
    </div>
  );
}
