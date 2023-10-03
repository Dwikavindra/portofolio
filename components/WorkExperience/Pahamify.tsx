import Image from "next/image";
import Box from "../Box";
export default function Pahamify() {
  return (
    <>
      <Box className="flex-col mt-5 pb-20 pt-5 lg:pr-10">
        <h2 className="ml-7 mt-4 text-5xl font-bold">Mobile Engineer Intern</h2>
        <h2 className="ml-7 mt-4 text-4xl font-bold">{`(Remote)`}</h2>
        <h2 className="ml-7 mt-4 text-4xl font-bold">
          February 2022-April 2022
        </h2>
        <div className=" lg:flex-row-reverse lg:flex">
          <div className="flex flex-col  items-center w-[100%] lg:w-[500px] ">
            <div className="items-center mt-[20px] lg:mt-0 relative w-[200px] h-[200px] ml-5">
              <Image src={"/Pahamify.png"} fill alt={"Pahamify Logo"} />
            </div>
            <a
              href="https://www.pahamify.com/"
              className=" text-center mt-5 text-4xl font-bold underline"
              target="_blank"
            >
              Pahamify
            </a>
            <div className="flex gap-2 flex-row justify-evenly mt-5">
              <h6 className="text-2xl text-center  items-center font-extrabold flex flex-wrap pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                React Native
              </h6>
              <h6 className=" text-2xl text-center items-center font-extrabold  pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                React
              </h6>
            </div>
          </div>

          <div className="flex flex-col items-center  pl-10 pr-10 mt-10  ">
            <p className="text-left font-arial  text-4xl ">
              Pahamify is an edutech startup in Indoonesia focusing in
              interactive learning for Indonesians students in elementary to
              highschool student. The company focuses on creating unique and
              interesting experience for it’s 1 million + users
            </p>
            <div className=" w-[100%] pl-7">
              <ul className=" flex flex-col mt-10 list-disc text-4xl items-start justify-start  text-left mx-0">
                <li>
                  Received intensive mentorship and guidelines on React Native
                  and React.js 
                </li>
                <li className="mt-3">
                  Worked on Pahamify’s mobile application frontend 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
