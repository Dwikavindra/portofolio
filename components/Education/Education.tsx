import Box from "../Box";
import Image from "next/image";
import UoB from "./UoB";
import UGM from "./UGM";
export default function Education() {
  return (
    <div>
      <h1
        id="education"
        style={{ scrollMargin: "1em" }}
        className="text-9xl mt-24  font-black "
      >
        Education 🎓
      </h1>
      <UoB></UoB>
      <UGM></UGM>
    </div>
  );
}
