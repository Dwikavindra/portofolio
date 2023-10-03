import { Carousel } from "../Carousel";
import Babel from "./Babel";
import SendIt from "./Sendit";
import Sunmi from "./Sunmi";
export default function Projects() {
  return (
    <div>
      <h1 className="text-7xl mt-24  font-black lg:text-center lg:justify-center ">
        Projects 📝
      </h1>
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl mt-20 h-[700px] w-[100%] "
      >
        <Babel />
        <SendIt />
        <Sunmi />
      </Carousel>
    </div>
  );
}