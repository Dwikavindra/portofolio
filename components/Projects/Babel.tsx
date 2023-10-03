import Image from "next/image";
export default function Babel() {
  return (
    <div className="flex  h-[100%] flex-col lg:flex-row justify-center content-center">
      <h1 className="text-6xl text-center font-bold">Fyrebel/Babel</h1>
      <div className="relative w-[187px] h-[366px] lg:w-[360px] lg:h-[678px]  self-center mt-10 ">
        <Image src="/Babel.png" fill alt={"Babel Phone Picture"}></Image>
      </div>
      <div className="self-center">
        <div className="rounded-[20px] pl-5 pt-5 pr-5 pb-2 bg-white text-black w-[300px] font-extrabold mt-10 ">
          <p className="text-3xl">
            A concept app for students to request teachers/tutors that are
            nearby to their location to be their personal tutors. I worked on
            this as a Kotlin Developer with a team of 6 people.
          </p>
          <div className="flex flex-row">
            <div className="relative w-[60px] h-[50px]  self-center mt-4 mb-6">
              <Image src="/Github.png" fill alt={"Github"}></Image>
            </div>
            <a
              className="self-center w-[100%]  justify-center pl-6 text-3xl underline"
              href="https://github.com/fyrbel/Babel"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
