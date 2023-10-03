import Box from "../Box";
import Image from "next/image";

export default function OYIndonesia() {
  return (
    <>
      <Box className="flex-col mt-5 pb-20 pt-5 lg:pr-10">
        <h2 className="ml-7 mt-4 text-5xl font-bold">
          Software Engineer Intern (Growth Team)
        </h2>
        <h2 className="ml-7 mt-4 text-4xl font-bold">June 2023-August 2023</h2>
        <div className=" lg:flex-row-reverse lg:flex">
          <div className="flex flex-col  items-center w-[100%] lg:w-[500px] ">
            <div className="items-center mt-[20px] lg:mt-0 relative w-[200px] h-[200px] ml-5">
              <Image src={"/OYIndonesia.png"} fill alt={"Viska Logo"} />
            </div>
            <a
              href="https://www.telkom.co.id/"
              className=" text-center mt-5 text-4xl font-bold underline"
            >
              OY! Indonesia
            </a>
            <div className="flex gap-2 flex-row justify-evenly mt-5">
              <h6 className="text-2xl text-center font-extrabold flex flex-wrap pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                React
              </h6>
              <h6 className=" text-2xl text-center font-extrabold  pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                Next.js
              </h6>
              <h6 className=" text-2xl text-center font-extrabold  pl-[28px] pt-[7px] pb-[7px] pr-[28px] text-black bg-white rounded-[50px]">
                Webflow
              </h6>
            </div>
          </div>

          <div className="flex flex-col items-center  pl-10 pr-10 mt-10  ">
            <p className="text-left font-arial  text-4xl ">
              OY! Indonesia is a leading fintech in Indonesiastartup focusing in
              B2B money moving businesses in Indonesia with the partnership of
              over 100 banks in Indonesia. During this internship I got to work
              with the growth team, focusing on engineering problems that would
              boost the growth of the company
            </p>
            <div className=" w-[100%] pl-7">
              <ul className=" flex flex-col mt-10 list-disc text-4xl items-start justify-start  text-left mx-0">
                <li>
                  Developed OY! Indonesia Landing Page Front End   alongside the
                  marketing team and product manager using pure HTML and CSS and
                  Webflow to help OY! Indonesia reached its targeted audience
                  and increased its reach by 30%
                </li>
                <li className="mt-3">
                  Implemented Braze SDK in Next.js (
                  <a className="underline" href="www.oyindonesia.com">
                    mobile dashboard OY! Dashboard
                  </a>{" "}
                  )  and React.js (
                  <a className="underline" href="www.oyindonesia.com">
                    desktop dashboard OY! Dashboard
                  </a>{" "}
                  )  to help OY! Indonesia has increased its retention rate,
                  especially with idle users.
                </li>
                <li className="mt-3">
                  Develop and implemented Front End specification on internal
                  payment and management tools, and payment dashboard, using
                  Next.js
                </li>
                <li className="mt-3">
                  Collaborated alongside ten senior engineers to ensure the best
                  practice and robust code is correctly implemented and achieved
                  the desired outcome outlined by designers, and product
                  managers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
