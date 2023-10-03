export default function NavDesktop() {
  return (
    <div className="hidden lg:flex lg:flex-row items-center justify-center content-center">
      <div className="flex flex-col">
        <h1 className="text-[100px] font-bold">Dwikavindra</h1>
        <h1 className="text-[100px] font-bold">Haryo</h1>
        <h1 className="text-[100px] font-bold">Radithya</h1>
      </div>
      <div className="flex flex-col ml-[400px] justify-center items-center content-center mt-10">
        <div className="flex flex-row self-center gap-10">
          <div className="flex justify-center items-center bg-[#1A44F5] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500">
            About Me
          </div>
          <div className="flex justify-center items-center bg-[#70D8A6] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500">
            Socials
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-10 ">
          <div className="flex justify-center items-center bg-[#202020] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500">
            Projects
          </div>
          <div className="flex justify-center items-center bg-[#FFC700] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500">
            Educations
          </div>
        </div>
      </div>
    </div>
  );
}
