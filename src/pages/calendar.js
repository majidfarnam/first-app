import React, {Fragment, useState} from 'react';
import Calendar from 'react-calendar';
import '../Components/Calendar/calendar.css';
import ToDo from "../Components/Calendar/toDo";
// import 'react-calendar/dist/Calendar.css';

const CalendarPage =(props)=>{
    const [value, setValue] = useState(new Date());
    function onChange(nextValue) {
        setValue(nextValue);
      }
      console.log();
    return (
        <React.Fragment>
        <div style={{paddingTop: '150px'}}>
            <h2 >تقویم</h2>
        </div>
        
        <div >
               
                {/* <button onClick={props.onClick} /> */}
            </div>
        <div className={'calendarContainer'} >
            <ToDo className={"toDoBox"} value={value}/>
            <Calendar
                className={'calendar'}
                onChange={onChange}
                value={value}
                />
        </div>
        </React.Fragment>
        
    )
}

export default CalendarPage;