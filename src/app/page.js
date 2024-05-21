'use client';
import Hero from "./components/Hero/page";
import Navbar from "./components/Navbar/page";
import Skills from "./components/Skills/page";
import WorkExperience from "./components/WorkExperience/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactMe from "./components/Contact/page";
import Footer from "./components/Footer/page";
import Projects from "./components/Projects/page";
import { useEffect, useState } from "react";
export default function Home() {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }


  return (
    <>
      <Navbar theme={theme} toggleTheme={changeTheme} />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
