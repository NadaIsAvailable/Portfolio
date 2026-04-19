import {Accordion, AccordionItem} from "@heroui/accordion";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './Event.css';

export default function Event({data}) {
    return (
        <>
            <div id={data.id} className="event">
                <h3>
                    <a href={data.link} target="_blank" className="title-link">{data.company ? data.company : data.college}</a>
                    </h3>

                <p>{data.location}</p>

                {data.role && (<p><strong>{data.role}</strong></p>)}

                {data.school && (<p>{data.school}</p>)}

                {data.degree && (<p><strong>{data.degree}</strong></p>)}

                {data.minor && (<p>Minor in {data.minor}</p>)}

                <p>{data.time}</p>

                {data.gpa && (<p>GPA: {data.gpa}</p>)}

                {data.awards && (<>
                    <p>Awards</p>
                    <ul>
                        {
                            data.awards.map((a, idx) => (
                                <li key={`award-${data.college}-${idx}`}>{a}</li>
                            ))
                        }
                    </ul>
                </>)}

                {data.courses && (<>
                    <p>Relevant Courses</p>
                    <Accordion selectionMode="multiple">
                        {
                            data.courses.map((c) => (
                                <AccordionItem 
                                    key={c.heading} 
                                    aria-label={c.heading} 
                                    title={c.heading} 
                                    className="course-acc"
                                    indicator={({ isOpen }) =>
                                        isOpen ? (
                                            <RemoveCircleOutlineIcon sx={{ color: "black" }} className="acc-indic"/>
                                        ) : (
                                            <AddCircleOutlineIcon sx={{ color: "black" }} className="acc-indic"/>
                                        )
                                    }
                                >
                                    <ul>
                                        {c.courses.map((c, idx) => (
                                            <li key={`courses-${c.heading}-${idx}`}>{c}</li>
                                        ))}
                                    </ul>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </>)}
                
                {data.responsiblities && (<>
                    <p>Responsibilities</p>
                    <ul>
                        {
                            data.responsiblities.map((r, idx) => (
                                <li key={`resp-${data.company}-${idx}`}>{r}</li>
                            ))
                        }
                    </ul>
                </>)}
            </div>
        </>
    );
}