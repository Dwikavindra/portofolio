import Box from "../Box";
import Image from "next/image";

export default function UGM() {
  return (
    <>
      <Box className="mt-8 text-center  items-center pb-14 md:flex-row md:text-left ">
        <div className="mt-[20px] relative w-[123px] h-[117px] ml-5  md:mt-[20px] md:w-[310px] md:h-[120px] lg:w-[350px] lg:h-[226px] lg:ml-20">
          <Image src={"/UGM.png"} fill alt={"UoB Logo"} />
        </div>
        <div className="flex flex-col md:ml-10 lg:ml-28">
          <h2 className="text-7xl font-bold mt-6 ">Universitas Gadjah Mada</h2>
          <h2 className="text-6xl font-bold mt-5 "> 2020-Present</h2>
          <a
            href="https://dcse.fmipa.ugm.ac.id/site/en/undergraduate-computer-science/"
            target="_blank"
            className="text-5xl underline decoration-white mt-5 "
          >
            Bachelor in Computer Science
          </a>
          <div className="flex flex-col text-left">
            <h4 className=" text-4xl mt-5 font-bold pl-1 md:pl-0">
              Relevant Coursework:
            </h4>
            <p className="hidden text-4xl mt-2 font-bold md:flex">
              Software Engineering and Professional Practice, Operating System
              and Systems Programming, Security and Networks, Artificial
              Intelligence 2
            </p>
            <p className="text-2xl font-bold md:hidden mt-2 pl-1">
              Artificial Intelligence 1 ,Programming 1, <br></br>Programming 2,
              Data Structures and<br></br> Algorithms, Database
            </p>
          </div>
        </div>
      </Box>
    </>
  );
}
