import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import projectsData from '../assets/data/projects.json';
import Carousel from '../components/Carousel.jsx';
import Icon from '../components/Icon.jsx';

import './ProjectTemplate.css';

export default function ProjectTemplate() {
    const [project, setProject] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const { projectId } = useParams();

    useEffect(() => {
        const foundProject = projectsData.find(p => p['Project ID'] === projectId);

        setProject(foundProject || {});
        setLoaded(true);
    }, [projectId]);

    if (!loaded) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <>
            <header className='project-hero'>
                <Carousel imgs={project['Images'].split('\n')} />
                <div className='project-hero-text'>
                    <h1>{project['Name']}</h1>
                    <p>{project['Date Started']} - {project['Date Finished']}</p>
                </div>
            </header>
            <main className='project-content'>
                <div>
                    {project['Keywords'].split(', ').map((icon, index) => (
                        <Icon key={`${project['Project ID']}-${index}`} name={icon} height="40" displayInTextIfNoIcon={true} />
                    ))}
                </div>
                <div>
                    <p><strong>Creater(s): </strong>{project['Creaters']}</p>
                    <p>{project['About']}</p>

                    <h2>My Works</h2>
                    <ul>
                        {
                            project['My Works'].split('\n').map((c, idx) => (
                                <li key={`${projectId}-works-${idx}`}>{c}</li>
                            ))
                        }
                    </ul>

                    {project['Others'] !== "N/A" && (
                        <>
                            <h2>Other Documentations</h2>
                            <ul>
                                {
                                    project['Others'].split('\n').map((d, idx) => (
                                        <li key={`${projectId}-works-${idx}`}>
                                            <a 
                                                href={d.split('.')[1] === 'pdf' ? `/pdfs/${projectId}/${d}` : `/images/projects/${d}`} 
                                                target='_blank' 
                                                className='project-doc-link'
                                            >
                                                {d}<span className='open-note'>(Opens in another tab)</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    )}

                    {project['Link'] !== "N/A" && (
                        <>
                            <a href={project['Link']} target='_blank' className='more'>Learn More</a>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}