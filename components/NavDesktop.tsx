export default function NavDesktop() {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  return (
    <div className="hidden lg:flex lg:flex-row items-center justify-center content-center">
      <div className="flex flex-col">
        <h1 className="text-[100px] font-bold">Dwikavindra</h1>
        <h1 className="text-[100px] font-bold">Haryo</h1>
        <h1 className="text-[100px] font-bold">Radithya</h1>
      </div>
      <div className="flex flex-col ml-[400px] justify-center items-center content-center mt-10">
        <div className="flex flex-row self-center gap-20">
          <div
            onClick={() => scrollToElement("aboutme")}
            className="flex justify-center items-center bg-[#1A44F5] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500"
          >
            About Me
          </div>
          <div
            onClick={() => scrollToElement("socials")}
            className="flex justify-center items-center bg-[#70D8A6] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500"
          >
            Socials
          </div>
        </div>
        <div
          onClick={() => scrollToElement("aboutme")}
          className="flex justify-center items-center bg-[#1A44F5] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500 text-center mt-10 mb-10 bg-[#601AF5]"
        >
          Work Experience
        </div>
        <div className="flex flex-row gap-20 mt-10 ">
          <div
            onClick={() => scrollToElement("projects")}
            className="flex justify-center items-center bg-[#202020] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500"
          >
            Projects
          </div>
          <div
            onClick={() => {
              scrollToElement("education");
            }}
            className="flex justify-center items-center bg-[#FFC700] w-[276px] h-[318px] text-[48px] font-bold rounded-[50px] hover:scale-125 duration-500"
          >
            Education
          </div>
        </div>
      </div>
    </div>
  );
}
