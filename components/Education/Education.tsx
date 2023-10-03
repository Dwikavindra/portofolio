import Box from "../Box";
import Image from "next/image";
import UoB from "./UoB";
import UGM from "./UGM";
export default function Education() {
  return (
    <div id="education" style={{ scrollMargin: "250px" }}>
      <h1 className="text-7xl mt-24  font-black ">Education 🎓</h1>
      <UoB></UoB>
      <UGM></UGM>
    </div>
  );
}
