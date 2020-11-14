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

            <div className={"toDoBox"}>
                <ToDo value={value}/>
                {/* <button onClick={props.onClick} /> */}
            </div>
        </div>
        <div className={"calendar"}>
            <Calendar 
                onChange={onChange}
                value={value}
                />
        </div>
        </React.Fragment>
        
    )
}

export default CalendarPage;