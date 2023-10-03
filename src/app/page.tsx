"use client";

import Image from "next/image";
import About from "../../components/AboutMe/About";
import Education from "../../components/Education/Education";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Projects from "../../components/Projects/Projects";
import Socials from "../../components/Socials/Socials";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavDesktop from "../../components/NavDesktop";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="ml-5 mr-5 xl:ml-20 lg:ml-20">
        <NavDesktop></NavDesktop>
        <About></About>
        <Education></Education>
        <WorkExperience></WorkExperience>
        <Projects></Projects>
        <Socials></Socials>
      </div>
      <Footer />
    </div>
  );
}
