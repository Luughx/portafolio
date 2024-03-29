import './App.css';
import { Header } from '../components/home/Header';
import { Projects } from '../components/Projects';
import { Navbar } from '../components/Navbar';
import { AboutMe } from '../components/home/AboutMe';
import { Contact } from '../components/home/Contact';

function HomePage() {
  return (
    <div className="">
      <div class="absolute top-0 z-[-2] h-screen w-full  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Header />
      <div className="container max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
        <div className="mt-3">
          <AboutMe />
        </div>
        <div className="mt-3" id="projects">
          <Projects />
        </div>
        <div className="mt-3" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
