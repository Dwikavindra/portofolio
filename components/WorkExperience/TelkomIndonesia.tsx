import Box from "../Box";
import Image from "next/image";

export default function TelkomIndonesia() {
  return (
    <>
      <Box className="flex-col mt-5 pb-20 pt-5 lg:pr-10">
        <h2 className="ml-7 mt-4 text-5xl font-bold">
          Android Engineer Intern
        </h2>
        <h2 className="ml-7 mt-4 text-4xl font-bold">{`(Remote)`}</h2>
        <h2 className="ml-7 mt-4 text-4xl font-bold">June 2023-August 2023</h2>
        <div className=" lg:flex-row-reverse lg:flex">
          <div className="flex flex-col  items-center w-[100%] lg:w-[500px] ">
            <div className="items-center mt-[20px] lg:mt-0 relative w-[200px] h-[200px] ml-5">
              <Image
                src={"/TelkomIndonesia.png"}
                fill
                alt={"Telkom Indonesia Logo"}
              />
            </div>
            <a
              href="https://www.telkom.co.id/"
              className=" text-center mt-5 text-4xl font-bold underline"
            >
              Telkom Indonesia
            </a>
            <div className="flex gap-2 flex-row justify-evenly mt-5">
              <h6 className="text-2xl text-center  items-center font-extrabold flex flex-wrap pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                Mockito
              </h6>
              <h6 className=" text-2xl text-center items-center font-extrabold  pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                Kotlin Flow
              </h6>
              <h6 className=" text-2xl text-center items-center font-extrabold  pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                JUnit
              </h6>
            </div>

            <div className="flex flex-row  justify-center">
              <h6 className="mt-5 max-w text-2xl text-center font-extrabold flex flex-wrap pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                Native Android {`(Kotlin)`}
              </h6>
            </div>
          </div>

          <div className="flex flex-col items-center  pl-10 pr-10 mt-10  ">
            <p className="text-left font-arial  text-4xl ">
              Telkom Indonesia is Indonesia’s largest telecommunication company.
              I got the chance to work as a mobile engineer intern on their
              education product called{" "}
              <a
                href="https://pijarsekolah.id/"
                className="underline font-bold"
              >
                Pijar Sekolah
              </a>
              . A mobile application focused on school management serving
              millions of students and teachers and over 100+ schools in
              Indonesia . I focused on migrating the mobile application to
              Native Android from React Native
            </p>
            <div className=" w-[100%] pl-7">
              <ul className=" flex flex-col mt-10 list-disc text-4xl items-start justify-start  text-left mx-0">
                <li>
                  Integrating Test Driven Development with JUnit and Mockito
                </li>
                <li className="mt-3">
                  Migrating multiple page views from the React Native app using
                  MVVI (Model View View Intent) with Kotlin Flow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
