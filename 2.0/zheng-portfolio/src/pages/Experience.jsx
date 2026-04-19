import Timeline from '../components/Timeline/Timeline.jsx';

import './Experience.css';

export default function Experience() {
  const workTimes = [
    {
      label: '2025',
      eventID: 'crazyBowlz',
    },
    {
      label: '2022 - 2023',
      eventID: 'crazyBowlz',
    }
  ];
  const workEvents = [
    {
      id: 'crazyBowlz',
      company: 'Crazy Bowlz',
      link: 'https://www.crazybowlz.net',
      location: 'New Paltz, NY',
      role: 'Cashier/Food Packer/Kitchen Prep',
      time: 'September 2022 - July 2023, July 2025 - August 2025',
      responsiblities: [
        'Performed a variety of customer-focused duties and prepared ingredients to ensure the kitchen is ready for cooking',
        'Successfully multitasked in a fast-paced environment while collaborating effectively with team members to achieve shared objectives'
      ]
    }
  ];

  const edTimes = [
    {
      label: '2023 - Now',
      eventID: 'rit',
    },
    {
      label: '2019 - 2023',
      eventID: 'hhs',
    },
    {
      label: '2019',
      eventID: 'phs',
    }
  ];
  const edEvents = [
    {
      id: 'rit',
      college: 'Rochester Institute of Technology',
      link: 'https://www.rit.edu',
      location: 'Rochester, NY',
      school: 'Golisano College of Computing and Information Sciences',
      degree: 'Bachelor of Science, Game Design and Development',
      minor: 'Web Development',
      time: 'August 2023 - Now (Anticipated May 2027)',
      gpa: '4.0/4.0',
      awards: [
        "Dean's List (Fall 2023, Spring 2024, Fall 2024, Spring 2025, and Fall 2026)",
        'RIT Presidential Scholar',
        'Academic Excellence'
      ],
      courses: [
        {
          heading: 'Game Design and Development',
          courses: [
            "Foundation of Game Graphics Programming (Spring 2026)",
            "Level Design (Spring 2026)",
            "Game Design and Development II (Fall 2025)",
            "Real Time Simulation Games II (Fall 2025)",
            "Real Time Simulation Games I (Spring 2025)",
            "Experience Design Games & Media (Spring 2025)",
            "Game Design and Development I (Spring 2025)",
            "Rich Media Web App Dev I (Spring 2025)",
            "Interactive Media Development (Fall 2024)",
            "3D Animation and Asset Production (Fall 2024)",
            "Introduction to Web Technology for Game Developers (Fall 2024)",
            "Game Development and Algorithmic Problem Solving (Spring 2024)",
            "2D Animation and Asset Production (Spring 2024)",
            "Math Graphical Simulation I (Spring 2024)",
            "Discrete Mathematics (Fall 2023)",
            "Problem Solving with Data Structures and Algorithms for Games (Fall 2023)",
            "Intro to Interactive Media (Fall 2023)"
          ]
        },
        {
          heading: 'Web Development',
          courses: [
            "Server Programming (Spring 2026)",
            "Client Programming (Fall 2025)",
            "Software Design Principles and Patterns (Fall 2025)",
            "Intro to Database and Data Modeling (Spring 2025)",
            "Web & Mobile II (Spring 2025)",
            "Web & Mobile I (Fall 2024)"
          ]
        }
      ]
    },
    {
      id: 'hhs',
      college: 'Highland High School',
      link: 'https://www.highland-k12.org',
      location: 'Highland, NY',
      degree: 'High School Diploma (Advanced Regents Diploma)',
      time: 'December 2019 - June 2023'
    },
    {
      id: 'phs',
      college: 'Patuxent High School',
      link: 'https://phs.calvertnet.k12.md.us',
      location: 'Lusby, MD',
      time: 'September 2019 - December 2019'
    }
  ];

  return (
    <>
      <main>
        <h1 className='experience'>My Experience</h1>

        <section>
          <h2 className='experience'>Work</h2>
          <Timeline times={workTimes} events={workEvents} />
        </section>

        <section>
          <h2 className='experience'>Education</h2>
          <Timeline times={edTimes} events={edEvents} />
        </section>
        
      </main>
    </>
  );
}