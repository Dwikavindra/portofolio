import Box from "../Box";
import Image from "next/image";
import UoB from "./UoB";
import UGM from "./UGM";
export default function Education() {
  return (
    <div>
      <h1
        id="education"
        style={{ scrollMargin: "5em" }}
        className="text-7xl mt-24  font-black "
      >
        Education 🎓
      </h1>
      <UoB></UoB>
      <UGM></UGM>
    </div>
  );
}
