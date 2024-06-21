
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={[
          { title: 'BIRTHDAY', date: '2024-06-20' },
          { title: 'EXAMINATION', date: '2024-06-01' },
        ]}
      />
    </div>
  );
};

export default Calendar;
