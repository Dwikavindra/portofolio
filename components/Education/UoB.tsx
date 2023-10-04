import Box from "../Box";
import Image from "next/image";
export default function UoB() {
  return (
    <>
      <Box className="mt-3 text-center  items-center pb-14 md:flex-row md:text-left">
        <div className="mt-[20px] relative w-[200px] h-[100px]  md:mt-[20px] md:w-[400px] md:h-[100px] lg:w-[550px] lg:h-[193px]">
          <Image src={"/UoB.png"} fill alt={"UoB Logo"} />
        </div>
        <div className="flex flex-col ">
          <h2 className="text-7xl font-bold mt-6 ">University of Birmingham</h2>
          <h2 className="text-6xl font-bold mt-5 "> 2022-Present</h2>
          <a
            href="https://www.birmingham.ac.uk/undergraduate/courses/computer-science/computer-science-software-engineering.aspx"
            target="_blank"
            className="text-5xl underline decoration-white mt-5 "
          >
            M.Eng Computer Science/Software Engineering
          </a>
          <div className="flex flex-col text-left">
            <h4 className=" text-4xl mt-5  pl-7 md:pl-0">
              Relevant Coursework:
            </h4>
            <p className="hidden text-2xl mt-2  md:flex">
              Software Engineering and Professional Practice, Operating System
              and Systems Programming, Security and Networks, Artificial
              Intelligence 2
            </p>
            <p className="text-2xl font-bold md:hidden mt-2 pl-7">
              Software Engineering and Professional , <br></br> Practice,
              Operating System and <br></br>Systems Programming, Security and
              <br></br>
              Networks, Artificial Intelligence 2
            </p>
          </div>
        </div>
      </Box>
    </>
  );
}
