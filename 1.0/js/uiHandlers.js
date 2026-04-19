// pass in an array of objs
// returns an array of DOM objs
const createKeywordElements = (keywords) => {
    let keywordElements = [];

    // Loop through the keywords
    // and create a label for each one
    keywords.forEach(keyword => {
        // Label
        let label = document.createElement('label');
        label.classList.add('keyword');

        // Input (Checkbox)
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = keyword['ID'];
        checkbox.name = keyword['Keyword'];

        // Span
        let span = document.createElement('span');
        span.innerText = keyword['Keyword'];
        span.style.borderColor = keyword['Color'];

        // Append all child elements
        label.append(checkbox, span);

        keywordElements.push(label);
    });

    return keywordElements;
}

// pass in a string of image data
// returns an array of image data or a single image data
const formatImageData = (rawData, returnAll = true, indexReturned = 0) => {
    let splitData = rawData.split('\n');
    let imgData = [];
    for (let i = 0, l = splitData.length; i < l; i++) {
        imgData.push(splitData[i].split('/'));
    }

    if (returnAll) return imgData;
    else return imgData[indexReturned];
}

// pass in an array of objs
// returns an array of DOM objs
const createProjectElements = (projects) => {
    let projectElements = [];
    
    // Loop through the projects
    // and create a div for each one
    // with the project name, date, about, and keywords
    // Also create an image element for the project
    // and append it to the div
    // Then append the div to the projectElements array
    // and return the array
    for (let i = 0, l = projects.length; i < l; i++) {
        let project = projects[i];

        // Div
        let div = document.createElement('div');
        div.classList.add('project');
        div.dataset.index = i;

        // Image
        let img = document.createElement('img');
        let imgAttributes = formatImageData(project['Images'], false, 0);
        img.src = `media/images/projects/${imgAttributes[0]}`;
        img.alt = imgAttributes[1];

        // Heading
        let h2 = document.createElement('h2');
        h2.innerText = project['Name'];

        // Date
        let date = document.createElement('p');
        date.innerText = `${project['Date Started']} - ${project['Date Finished']}`;

        // About
        let about = document.createElement('p');
        about.innerText = project['About'];

        // Keywords
        let keywords = document.createElement('ul');
        keywords.classList.add('keywords');

        let keyList = project['Keywords'].split(', ');
        for (let i = 0, l = keyList.length; i < l; i++) {
            let keyword = document.createElement('li');
            keyword.innerText = keyList[i];
            keywords.appendChild(keyword);
        }

        // Append all child elements
        div.append(img, h2, keywords, date, about);

        projectElements.push(div);
    }

    return projectElements;
}

const sendToProjectTemplate = (projectData, index) => {
    // Craete a hidden form
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'project-template.php';

    // Create a hidden input for the project data
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'projectData';
    input.value = JSON.stringify(projectData);
    form.appendChild(input);

    // Set the index
    const indexInput = document.createElement('input');
    indexInput.type = 'hidden';
    indexInput.name = 'index';
    indexInput.value = index;
    form.appendChild(indexInput);

    // Append the form to the body
    document.body.appendChild(form);
    
    // Submit the form
    form.submit();
}

export {
    createKeywordElements,
    formatImageData,
    createProjectElements,
    sendToProjectTemplate
}