import Image from "next/image";
import { useState } from "react";
export default function Header() {
  const [isClicked, setClicked] = useState<boolean>(false);
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
      setClicked(!isClicked);
    }
  };

  return (
    <div
      className={`flex flex-col sticky top-0 z-10 ${
        isClicked ? "h-[200px]" : "h-[50px]"
      } max-w-full py-4   bg-[#202020] lg:hidden transition-height duration-700`}
    >
      <div className="flex justify-between text-color-white border-b-2 px-4 ">
        <h1 className=" self-center text-5xl">D/H/R</h1>
        <button onClick={() => setClicked(!isClicked)}>
          <div className="relative w-[36px] h-[31px]">
            {!isClicked ? (
              <Image src="/HamburgerIcon.png" fill alt="Hamburger"></Image>
            ) : (
              <h1 className="self-center text-5xl">X</h1>
            )}
          </div>
        </button>
      </div>

      <div
        className={`flex flex-col px-4 ${
          !isClicked ? "opacity-0" : "opacity-100"
        }transition-opacity duration-1000`}
      >
        <button onClick={() => scrollToElement("aboutme")}>
          <h1
            className={`py-2 text-2xl transition-opacity duration-1000 ${
              isClicked ? "opacity-100" : "opacity-0"
            }`}
          >
            About Me
          </h1>
        </button>
        <button onClick={() => scrollToElement("education")}>
          <h1
            className={`py-2 text-2xl transition-opacity duration-1000 ${
              isClicked ? "opacity-100" : "opacity-0"
            }`}
          >
            Education
          </h1>
        </button>
        <h1
          className={`py-2 text-2xl transition-opacity duration-1000 ${
            isClicked ? "opacity-100" : "opacity-0"
          }`}
        >
          Work Experience
        </h1>
        <h1
          className={`py-2 text-2xl transition-opacity duration-1000 ${
            isClicked ? "opacity-100" : "opacity-0"
          }`}
        >
          Projects
        </h1>
        <h1
          className={`py-2 text-2xl transition-opacity duration-1000 ${
            isClicked ? "opacity-100" : "opacity-0"
          }`}
        >
          Socials
        </h1>
      </div>
    </div>
  );
}
