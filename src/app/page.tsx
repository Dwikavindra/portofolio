import Image from "next/image";
import About from "../../components/AboutMe/About";
import Education from "../../components/Education/Education";
import WorkExperience from "../../components/WorkExperience/WorkExperience";

export default function Home() {
  return (
    <div className="ml-5 mr-5 xl:ml-20">
      <About></About>
      <Education></Education>
      <WorkExperience></WorkExperience>
    </div>
  );
}
