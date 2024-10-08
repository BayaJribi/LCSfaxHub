import React from 'react';
import Event from './Event';
import eventData from '../../data/Event.json';
import '../../App.css';

function Events() {
    return (
        <div className="container-fluid py-6 px-5 secondary-Background-color">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                <h1 className="display-5 mb-0">Latest LC Events</h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row g-5">
                {eventData.map((event) => (
                    <Event
                        key={event.id}
                        date={event.date}
                        month={event.month}
                        year={event.year}
                        author={event.author}
                        category={event.category}
                        title={event.title}
                        image={event.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Events;
