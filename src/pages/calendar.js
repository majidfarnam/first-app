import React, {Fragment, useState} from 'react';
import '../Components/Calendar/calendar.css';
import ToDo from "../Components/Calendar/toDo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            {/* <Calendar
                className={'calendar'}
                onChange={onChange}
                value={value}
                /> */}
        </div>
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
        </React.Fragment>
        
    )
}

export default CalendarPage;