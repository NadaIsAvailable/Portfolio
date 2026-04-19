import Event from './Event.jsx';

import './Timeline.css';

export default function Timeline({times, events }) {
    const removeAllFocusPins = () => {
        const pins = document.getElementsByClassName('pin');
        for(let pin of pins) {
            pin.classList.remove('focus');
        }
    }

    const removeAllFocusEvents = () => {
        const events = document.getElementsByClassName('event');
        for(let event of events) {
            event.classList.remove('focus');
        }
    }

    const scrollToEvent = (eventId) => {
        const scrollTo = document.getElementById(eventId);

        // Check if the target element exist
        if (!scrollTo) return;

        // Calculate the scroll position
        const y = scrollTo.getBoundingClientRect().top + window.pageYOffset;

        // Dehighlight all events by default
        removeAllFocusEvents();

        // Scroll to that event and highlight the event
        // scrollTo.scrollIntoView();
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
        scrollTo.style.transition = 'all 0.3s';
        scrollTo.classList.add('focus');
    };

    const handleClick = (e) => {
        removeAllFocusPins();

        const ele = e.currentTarget;

        ele.classList.add('focus');

        scrollToEvent(ele.dataset.eventid);
    };

    return (
        <>
            <div className='timeline'>
                <div className="times">
                    {
                        times.map((item, idx) => (
                            <div key={`pin-${item.eventID}-${idx}`} className="pin" data-eventid={item.eventID} onClick={handleClick}>{item.label}</div>
                        ))
                    }
                </div>

                <div className="events">
                    {
                        events.map((item) => (
                            <Event key={`event-${item.id}`} data={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}