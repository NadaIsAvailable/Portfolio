// ============================================================================
// Used in Experience
// ============================================================================
const pins = document.querySelectorAll('.pin');
const events = document.querySelectorAll('.event');

// This function is used to remove the active class from all pins
// when a new pin is clicked
const removeAllActivePins = () => {
    for(let pin of pins) {
        pin.classList.remove('active');
    }
}

// This function is used to remove the active class from all events
// when a new event is clicked
const removeAllActiveEvents = () => {
    // Dehighlight all events by default
    for(let event of events) {
        event.classList.remove('active');
    }
}

// This function is used to scroll to the event with the given ID
// and highlight it
// It also dehighlights all other events
// by default
const scrollToEvent = (eventId) => {
    const scrollTo = document.getElementById(eventId);
    const navbar = document.querySelector('nav');

    // Check if the target element and navbar exist
    if (!scrollTo || !navbar) return;

    // Calculate the scroll position
    // to account for the navbar height
    const navHeight = navbar.offsetHeight;
    const y = scrollTo.getBoundingClientRect().top + window.pageYOffset - navHeight;

    // Dehighlight all events by default
    for(let event of events) {
        event.classList.remove('active');
    }

    // Scroll to that event and highlight the event
    // scrollTo.scrollIntoView();   // doesn't account for navbar height
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
    scrollTo.style.transition = 'all 0.3s';
    scrollTo.classList.add('active');
}

// Add click event listener to each pin
for(let pin of pins) {
    pin.addEventListener('click', (e) => {
        // remove all active pins
        // and add the active class to the clicked pin
        removeAllActivePins();
        pin.classList.add('active');

        // Get the event ID from the pin's data attribute
        // and scroll to the corresponding event
        let eventId = e.currentTarget.dataset.event;
        scrollToEvent(eventId);
    });
}