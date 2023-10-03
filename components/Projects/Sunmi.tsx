import Image from "next/image";
export default function Sunmi() {
  return (
    <div className="flex  h-[100%] flex-col  ">
      <h1 className="text-6xl text-center font-bold">
        ESCPOS React-Native Package
      </h1>
      <div className="self-center mt-4 ">
        <div className="rounded-[20px] pl-5 pt-5 pr-5 pb-2 bg-white text-black w-[300px] font-extrabold mt-10">
          <p className="text-3xl">
            An in development package that I’m working on to integrate esc-pos
            printer especially sunmi printers since not many react-native
            package works accordingly with full bluetooth LE capabilities using
            Kotlin. The future plan is to also make this available for IOS
          </p>
          <div className="flex flex-row">
            <div className="relative w-[60px] h-[50px]  self-center mt-4 mb-6">
              <Image src="/NPM.png" fill alt={"NPM"}></Image>
            </div>
            <a
              className="self-center w-[100%]  justify-center pl-6 text-3xl underline"
              href="https://www.npmjs.com/package/sunmi-external-printer"
              target="_blank"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
