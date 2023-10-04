import Box from "../Box";
import Image from "next/image";
import UoB from "./UoB";
import UGM from "./UGM";
export default function Education() {
  return (
    <div>
      <h1
        id="education"
        className="scroll-m-96 text-7xl mt-24 lg:scroll-m-4  font-black lg:text-9xl "
      >
        Education 🎓
      </h1>
      <UoB></UoB>
      <UGM></UGM>
    </div>
  );
}
