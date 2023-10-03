import Image from "next/image";
export default function Socials() {
  return (
    <div>
      <h1 className="text-7xl font-bold text-center mt-10">Socials 💬</h1>
      <div className="flex flex-row text-center justify-evenly">
        <a href="https://github.com/Dwikavindra" target="_blank">
          <div className="relative w-[148px] h-[148px] mt-10 ">
            <Image src="/GithubWhite.png" fill alt={"Github"}></Image>
          </div>
        </a>
      </div>
    </div>
  );
}
