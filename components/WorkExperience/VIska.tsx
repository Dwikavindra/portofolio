import Box from "../Box";
import Image from "next/image";

export default function Viska() {
  return (
    <>
      <Box className="flex-col mt-5 pb-20 pt-5 lg:pr-10">
        <h2 className="ml-7 mt-4 text-5xl font-bold">Software Engineer</h2>
        <h2 className="ml-7 mt-4 text-4xl font-bold">{`(Remote)`}</h2>
        <h2 className="ml-7 mt-4 text-4xl font-bold">December 2022-Present</h2>
        <div className=" lg:flex-row-reverse lg:flex">
          <div className="flex flex-col  items-center w-[100%] lg:w-[500px]  ">
            <div className="items-center mt-[20px] lg:mt-0 relative w-[200px] h-[200px] ml-5">
              <Image src={"/Viska.png"} fill alt={"Viska Logo"} />
            </div>
            <a
              href="https://viska.io/"
              className=" text-center mt-5 text-4xl font-bold underline"
            >
              Viska
            </a>
            <div className="flex gap-5  flex-row justify-evenly mt-5">
              <h6 className="text-2xl text-center font-extrabold flex flex-wrap pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                React
              </h6>
              <h6 className=" text-2xl text-center font-extrabold  pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                Next.js
              </h6>
              <h6 className=" text-2xl text-center font-extrabold pl-[10px]  pt-[7px] pb-[7px] pr-[12px] text-black bg-white rounded-[50px]">
                Express.js
              </h6>
            </div>
            <div className="flex flex-row  justify-center">
              <h6 className="mt-5 max-w text-2xl text-center font-extrabold flex flex-wrap pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                React Native
              </h6>
            </div>
            <div className="flex flex-row  justify-center">
              <h6 className="mt-5 max-w text-2xl text-center font-extrabold flex flex-wrap pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                Native Android {`(Kotlin)`}
              </h6>
            </div>
          </div>

          <div className="flex flex-col items-center  pl-10 pr-10 mt-10 ">
            <p className="text-left font-arial  text-4xl ">
              Viska is a software company based in Iceland. Viska focuses in
              taking projects from large Icelandic partners such as
              <a href="https://pizzan.is" className="underline font-bold">
                {" "}
                Pizzan
              </a>{" "}
              and{" "}
              <a href="https://wolt.com/en/isl" className="underline font-bold">
                Wolt
              </a>
              . Viska is currently developing it’s own POS system for partners
              in Iceland named{" "}
              <a className="underline font-bold " href="https://upsell.is">
                Upsell
              </a>
            </p>
            <div className="w-[100%] pl-7">
              <ul className="mt-10 list-disc text-4xl ">
                <li>
                  Developing Upsell POS mobile application using React Native
                </li>
                <li className="mt-3">
                  Integrating ESC/POS printer with Bluetooth Low Energy (BLE)
                  capibilities using native Android and Kotlin
                </li>
                <li className="mt-3">
                  Developing Upsell frontend using React Native, Next.js, and
                  Native Android with Kotlin
                </li>
                <li className="mt-3">
                  Evaluating and improving performance on existing search
                  queries using MongoDB, Reddis, and Express.js for , and Pizzan
                  (pizzan.is)
                </li>
                <li className="mt-3">
                  Took leadership on creating backend features related to
                  payment systems with Express.js for  Upsell, and Pizzan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
