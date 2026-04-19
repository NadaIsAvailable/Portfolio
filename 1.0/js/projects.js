// Importing helper and factory functions from other files
import { fetchJSONData } from "./dataFetcher.js";
import { createKeywordElements, createProjectElements, sendToProjectTemplate } from "./uiHandlers.js";

// Construct the keywords
// const keywordData = await fetchJSONData('data/keywords.json');
const keywordData = await fetchJSONData('https://ia903203.us.archive.org/26/items/projects_202508/keywords.json');
const keywordElements = createKeywordElements(keywordData);

// Append the keyword elements to the fieldset
const keywordFieldset = document.querySelector('fieldset');
keywordElements.forEach(ele => keywordFieldset.appendChild(ele));

// Construct the projects
// const projectData = await fetchJSONData('data/projects.json');
const projectData = await fetchJSONData('https://ia903203.us.archive.org/26/items/projects_202508/projects.json');
const projectElements = createProjectElements(projectData);

// Append the project elements to the section
const projectSection = document.querySelector('section.projects');
projectElements.forEach(ele => {
    projectSection.appendChild(ele);
    ele.addEventListener('click', () => {
        // Create a project page
        // by passing in the raw project data
        sendToProjectTemplate(projectData[ele.dataset.index], ele.dataset.index);
    });
});

// Keyword filter array
let filter = [];

const display = () => {
    // Loop thru all projects
    projectElements.forEach((project) => {
        // Get the keyword list
        const keys = project.querySelectorAll('.keywords li');
        let hasMatch = false;

        // Hide project by default
        project.style.display = 'none';

        // Loop thru the keywords
        keys.forEach((key) => {
            // Get the keyword in this element
            const keywordText = key.textContent.trim().toLowerCase();

            // If the keyword is in the filter, 'activate' it and show the project
            if (filter.includes(keywordText)) {
                key.classList.add('active');
                hasMatch = true;
            }
            else {
                key.classList.remove('active');
            }
        });

        // Show the project if at least one keyword matches
        // or if no filter is selected
        if (hasMatch || filter.length === 0) {
            project.style.display = 'block';
        }
    });
};

const updateFilter = (e) => {
    const keyword = e.target.name.trim().toLowerCase();

    if (e.target.checked) {
        // Check if filter already has this keyword
        // If not continue to add
        if (!filter.includes(keyword)) {
            filter.push(keyword);
        }
    } else {
        // If the checkbox is unchecked, remove it from the filter
        filter = filter.filter((item) => item !== keyword);
    }

    // Display current qualified projects
    display();
};

// Add event listener to all filter checkboxes
const checkboxes = keywordFieldset.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => { checkbox.addEventListener('click', updateFilter) });