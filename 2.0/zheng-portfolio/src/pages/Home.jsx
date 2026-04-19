import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import Masonry from '@mui/lab/Masonry';

import List from '../components/List.jsx';
import Icon from '../components/Icon.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

import projectsData from '../assets/data/recents.json';

import './Home.css';

export default function Home() {
  const [projects, setProjects] = useState([]);

  const specialities = [
    'Game Design',
    'Game Development',
    'Web Development',
    'Mobile Development',
    'Frontend Development',
    'Backend Development',
    'Interactive Experience Design'
  ];

  useEffect(() => {
    setProjects(projectsData || []);
  }, []);

  return (
    <>
      <div id='hero'>
        <div id='intro-text'>
          <h1 className="home">Hi, My Name is <span className="highlighted-text">Kevin Zheng</span></h1>
          <p className='i-am'>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1000,
                'I am a Game Developer',
                2000,
                'I am a Web Developer',
                2000,
                'I am a Software Engineer',
                2000,
                'I am a Tech Enthusiast',
                2000,
                'I am egear to learn',
                2000,
                'I am a Problem Solver',
                2000,
                'I am a Creative Thinker',
                2000,
                'I am your next teammate!',
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>
        <div id='intro-img'>
          <img src="/images/tiger.gif" alt="Hero" />
        </div>
        <a href="#main-content">
          <FontAwesomeIcon icon={faAngleDoubleDown} id="scroll-hint" />
        </a>
      </div>

      <main id="main-content">
        <p id="description">I specialize in creating immersive and interactive experiences, blending code with creativity. Each project is an opportunity to experiment, learn, and craft something memorable.</p>
        <iframe
          id="demo-video"
          width="840"
          height="473"
          src="https://www.youtube.com/embed/TED9eNtWx_o?autoplay=1&mute=1&loop=1&playlist=TED9eNtWx_o"
          title="YouTube video player"
          allow="autoplay; encrypted-media">
        </iframe>

        <h2 className="home">About Me</h2>
        <h3 className="home">Specialities</h3>
        <List items={specialities} />

        <h3 className="home">Skills</h3>
        <div className="list-icons">
          <div>
            <p>Frontend Development</p>
            <Icon name="HTML" height="60" />
            <Icon name="CSS" height="60" />
            <Icon name="JavaScript" height="60" />
            <Icon name="React" height="60" />
            <Icon name="jQuery" height="60" />
            <Icon name="Flutter" height="60" />
            <Icon name="Dart" height="60" />
          </div>

          <div>
            <p>Backend Development</p>
            <Icon name="C#" height="60" />
            <Icon name="C++" height="60" />
            <Icon name="PHP" height="60" />
            <Icon name="Java" height="60" />
          </div>

          <div>
            <p>Database</p>
            <Icon name="MySQL" height="60" />
          </div>
        </div>

        <h3 className="home">Tools & Technologies</h3>
        <div className="list-icons">
          <div>
            <p>IDEs</p>
            <Icon name="Visual Studio" height="60" />
            <Icon name="VS Code" height="60" />
          </div>

          <div>
            <p>Game Engines</p>
            <Icon name="Unity" height="60" />
          </div>

          <div>
            <p>Game Frameworks / Graphics APIs</p>
            <Icon name="MonoGame" height="60" />
            <Icon name="Flame" height="60" />
            <Icon name="Box2D" height="60" />
            <Icon name="DirectX 11" height="60" />
            <Icon name="OpenGL" height="60" />
            <Icon name="PixiJS" height="60" />
            <Icon name="SFML" height="60" />
          </div>

          <div>
            <p>Art Tools</p>
            <Icon name="Maya" height="60" />
          </div>

          <div>
            <p>UI Libraries</p>
            <Icon name="Bootstrap" height="60" />
            <Icon name="Ant Design" height="60" />
            <Icon name="Material UI" height="60" />
            <Icon name="jQuery UI" height="60" />
            <Icon name="Semantic UI" height="60" />
          </div>

          <div>
            <p>Others</p>
            <Icon name="Git" height="60" />
            <Icon name="GitHub" height="60" />
            <Icon name="Figma" height="60" />
            <Icon name="Trello" height="60" />
            <Icon name="NPM" height="60" />
            <Icon name="FlutterFlow" height="60" />
          </div>
        </div>

        <h2 className="home recents">Some of my recent works</h2>
        <Masonry columns={3} spacing={2} className='project-cards'>
          {
            projects.map((p, i) => (
              <ProjectCard key={`project-${i}`} data={p} />
            ))
          }
        </Masonry>
      </main>
    </>
  );
}