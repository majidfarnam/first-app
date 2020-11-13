import React from 'react';
import Calendar from 'react-calendar';
import '../Components/Calendar/calendar.css';
const CalendarPage =()=>{
    return (
        <div style={{paddingTop: '150px'}}>
            <h2>تقویم</h2>
            <Calendar className='calendar' />
        </div>
        
    )
}

export default CalendarPage;