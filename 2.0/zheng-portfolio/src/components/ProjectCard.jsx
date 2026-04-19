import { useNavigate } from 'react-router-dom';
import Icon from './Icon.jsx';

import './ProjectCard.css';

export default function ProjectCard({ data }) {
    const navigate = useNavigate();
    
    return (
        <>
            <button 
                className='project-card'
                id={data['Project ID']}
                style={{
                    backgroundImage: `url(${`/images/projects/${data['Banner Image']}` || '/images/placeholder.jpg'})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'repeat'
                }}
                data-keywords={data['Keywords'].split(',').map(k => k.trim()).join(',')}
                onClick={() => navigate(`/projects/${data['Project ID']}`)}
            >
                <div className="project-card-spacer"></div>
                <div className='project-card-content'>
                    <h3>{data['Name']}</h3>
                    <p>{data['Date Started']} - {data['Date Finished']}</p>
                    <p><strong>{data['Role']}</strong></p>
                    <p>{data['About']}</p>
                    {data['Keywords'].split(', ').map((icon, index) => (
                        <Icon key={`${data['Project ID']}-${index}`} name={icon} height="30" linked={false} />
                    ))}
                </div>
            </button>
        </>
    );
}