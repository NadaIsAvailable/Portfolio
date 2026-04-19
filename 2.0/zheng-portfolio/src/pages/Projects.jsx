import { useState, useEffect } from 'react';
import {Accordion, AccordionItem} from "@heroui/accordion";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Masonry from '@mui/lab/Masonry';

import ProjectCard from '../components/ProjectCard.jsx';

import keywordsData from '../assets/data/keywords.json';
import projectsData from '../assets/data/projects.json';

import './Project.css';

export default function Projects() {
  const [filters, setFilters] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Convert flat keywords list into grouped filters with string options
    const grouped = (keywordsData || []).reduce((acc, item) => {
      const cat = item.Category || 'Other';
      let group = acc.find(g => g.heading === cat);
      if (!group) {
        group = { heading: cat, options: [] };
        acc.push(group);
      }
      group.options.push({ keyword: item.Keyword, id: item.ID });
      return acc;
    }, []);

    setFilters(grouped);
    setProjects(projectsData || []);
    setLoaded(true);
  }, []);

  const handleSelect = (id) => {
    setSelectedOptions(prev => {
      const newSel = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];

      // Update projects based on selected option ids -> keywords
      if (newSel.length === 0) {
        setProjects(projectsData || []);
      } else {
        // selected keywords
        const selectedKeywords = newSel.map(sid => getOptionByID(sid)).filter(Boolean);

        // filter out the projects that contains the selected keywords
        const filtered = (projectsData || []).filter(p => {
          // project keywords
          const kws = (p.Keywords || '').split(',').map(s => s.trim());

          // check if any of the projects keywords were selected
          return selectedKeywords.some(k => kws.includes(k));
        });
        setProjects(filtered);
      }

      return newSel;
    });
  };

  const getOptionByID = (id) => {
    if (!id || !filters) return '';
    for (let f of filters) {
      const found = f.options.find(o => o.id === id);
      if (found) return found.keyword;
    }
    return '';
  };

  if (loaded) {
    return (
      <>
        <main className='projects'>
          <h1>My Projects</h1>

          <div>
            <fieldset className='filter'>
              <legend>Keyword Filter</legend>

              {selectedOptions.length !== 0 && (
                <>
                  <p>Selected Keywords</p>
                  <div id="selected-keywords">
                    {
                      selectedOptions.map((opt) => (
                        <button 
                          key={`selected-${opt}`} 
                          className="option-btn selected"
                          onClick={() => handleSelect(opt)}
                        >
                          {getOptionByID(opt)}
                        </button>
                      ))
                    }
                  </div>
                </>
              )}

              <Accordion selectionMode="multiple">
                {
                  filters.map((filter, idx) => (
                    <AccordionItem
                      key={`filter-${idx}`}
                      aria-label={filter.heading} 
                      title={filter.heading} 
                      className="filter-acc"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <RemoveCircleOutlineIcon sx={{ color: "black" }} className="acc-indic"/>
                        ) : (
                          <AddCircleOutlineIcon sx={{ color: "black" }} className="acc-indic"/>
                        )
                      }
                      >
                        {filter.options.map((opt) => {
                          const optionID = opt.id;
                          return (
                            <button
                              key={optionID}
                              id={optionID}
                              className={`option-btn ${selectedOptions.includes(optionID) ? 'selected' : ''}`}
                              data-keyword={opt.keyword}
                              onClick={() => handleSelect(optionID)}
                            >
                              {opt.keyword}
                            </button>
                          );
                        })}
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </fieldset>

            <Masonry columns={2} spacing={2} className='project-cards'>
              {
                projects.map((p, i) => (
                  <ProjectCard key={`project-${i}`} data={p} />
                ))
              }
            </Masonry>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main className='projects'>
          <h1>My Projects</h1>

          <div>
            <fieldset className='filter'>
              <legend>Keyword Filter</legend>

              {selectedOptions.length !== 0 && (
                <>
                  <p>Selected Keywords</p>
                  <div id="selected-keywords">
                    {
                      selectedOptions.map((opt) => (
                        <button 
                          key={`selected-${opt}`} 
                          className="option-btn selected"
                          onClick={() => handleSelect(opt)}
                        >
                          {getOptionByID(opt)}
                        </button>
                      ))
                    }
                  </div>
                </>
              )}

              <Accordion selectionMode="multiple">
                {
                  filters.map((filter, idx) => (
                    <AccordionItem
                      key={`filter-${idx}`}
                      aria-label={filter.heading} 
                      title={filter.heading} 
                      className="filter-acc"
                      indicator={({ isOpen }) =>
                        isOpen ? (
                          <RemoveCircleOutlineIcon sx={{ color: "black" }} className="acc-indic"/>
                        ) : (
                          <AddCircleOutlineIcon sx={{ color: "black" }} className="acc-indic"/>
                        )
                      }
                      >
                        {filter.options.map((opt) => {
                          const btnId = opt.id;
                          return (
                            <button
                              key={btnId}
                              id={btnId}
                              className={`option-btn ${selectedOptions.includes(btnId) ? 'selected' : ''}`}
                              data-keyword={opt.keyword}
                              onClick={() => handleSelect(btnId)}
                            >
                              {opt.keyword}
                            </button>
                          );
                        })}
                    </AccordionItem>
                  ))
                }
              </Accordion>
            </fieldset>

            <div className='project-cards'>
              Loading Projects...
            </div>
          </div>
        </main>
      </>
    );
  }
}