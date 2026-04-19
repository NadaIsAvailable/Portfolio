import { formatImageData } from './uiHandlers.js';

let intervalId;
let curIndex = 0;
const curImgList = formatImageData(rawData);

const prevButton = document.querySelector('#prev-image');
const nextButton = document.querySelector('#next-image');

const rotateImage = (imgElement, dir = 'right') => {
    if (dir === 'left') {
        curIndex = (curIndex + 2) % 3;
    }
    else if (dir === 'right') {
        curIndex = (curIndex - 2 + 3) % 3;
    }

    imgElement.src = `media/images/projects/${curImgList[curIndex][0]}`;
    imgElement.alt = curImgList[curIndex][1];

    clearInterval(intervalId);
    intervalId = setInterval(rotateImage, 3000, imgElement, dir);
}

if (curImgList.length === 1) {
    console.log('Only one image');
    // If there is only one image, hide the rotate buttons
    prevButton.classList.add('hidden');
    nextButton.classList.add('hidden');

    // Set the image to the only image
    const imgElement = document.querySelector('#project-image');
    imgElement.src = `media/images/projects/${curImgList[0][0]}`;
    imgElement.alt = curImgList[0][1];
} else {
    // Show the rotate buttons
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');

    // If there are multiple images, set the first image
    curIndex = curImgList.length - 1;

    // and start the rotation
    rotateImage(document.querySelector('#project-image'));
}

// Add event listener to the rotate buttons
prevButton.addEventListener('click', () => {
    // Rotate the image to the left
    rotateImage(document.querySelector('#project-image'), 'left');
});

nextButton.addEventListener('click', () => {
    // Rotate the image to the right
    rotateImage(document.querySelector('#project-image'), 'right');
});