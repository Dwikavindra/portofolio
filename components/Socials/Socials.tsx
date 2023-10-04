import Image from "next/image";
export default function Socials() {
  return (
    <div id="socials" style={{ scrollMargin: "1em" }}>
      <h1 className="text-7xl font-bold gap-5 text-center mt-10 lg:text-9xl">
        Socials 💬
      </h1>
      <div className="flex flex-row text-center justify-evenly mt-10">
        <a href="https://github.com/Dwikavindra" target="_blank">
          <div className="relative w-[60px] h-[60px] lg:w-[148px] lg:h-[148px] mt-10 ">
            <Image src="/GithubWhite.png" fill alt={"Github"}></Image>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/dwikavindra-haryo-radithya-236380168/"
          target="_blank"
        >
          <div className="relative w-[60px] h-[60px] lg:w-[148px] lg:h-[148px] mt-10 ">
            <Image src="/Linkedin.png" fill alt={"Linkedin"}></Image>
          </div>
        </a>
        <a href="mailto:dwika34@gmail.com" target="_blank">
          <div className="relative w-[60px] h-[60px] lg:w-[148px] lg:h-[148px] mt-10 ">
            <Image src="/Email.png" fill alt={"Mail"}></Image>
          </div>
        </a>
      </div>
    </div>
  );
}
