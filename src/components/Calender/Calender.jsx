import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; 

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  // Sample events
  const events = [
    {
      id: 1,
      title: 'Event 1',
      start: new Date(2024, 4, 21, 10, 0),
      end: new Date(2024, 4, 21, 12, 0),
    },
    {
      id: 2,
      title: 'Event 2',
      start: new Date(2024, 4, 22, 14, 0),
      end: new Date(2024, 4, 22, 16, 0),
    },
  ];

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(2024, 4, 1)}
        views={['month']}
        style={{ height: 600 }}
        toolbar={true}
      />
    </div>
  );
}

export default MyCalendar;
