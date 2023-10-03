import Image from "next/image";
export default function SendIt() {
  return (
    <div className="flex  h-[100%] flex-col lg:flex-row-reverse justify-center content-center">
      <h1 className="text-6xl mt-[-20px] text-center font-bold">SendIt</h1>
      <div className="relative w-[211px] h-[366px] lg:w-[426px] lg:h-[699px]  self-center mt-10">
        <Image src="/SendIt.png" fill alt={"SendIt Phone Picture"}></Image>
      </div>
      <div className="self-center">
        <div className="rounded-[20px] pl-5 pt-5 pr-5 pb-2 bg-white text-black w-[300px] font-extrabold mt-8">
          <p className="text-3xl">
            A Simple TCP/IP app that I developed it's UI and backend using
            Flutter and python with other teammates for networking class with
            the server written in python
          </p>
          <div className="flex flex-row">
            <div className="relative w-[60px] h-[50px]  self-center mt-4 mb-6">
              <Image src="/Github.png" fill alt={"Github"}></Image>
            </div>
            <a
              className="self-center w-[100%]  justify-center pl-6 text-3xl underline"
              href="https://github.com/Dwikavindra/SendIt"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
