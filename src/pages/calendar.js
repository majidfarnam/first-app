import React, {Fragment, useState} from 'react';
import '../Components/Calendar/calendar.css';
import ToDo from "../Components/Calendar/toDo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';



const CalendarPage =(props)=>{
    // const [value, setValue] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState();
    // function onChange(nextValue) {
    //     setValue(nextValue);
    //   }
    let days = selectedDay;
    console.log(days);
    return (
        <React.Fragment>
            <div className={'calendarContainer'} >
                {/* <ToDo className={"toDoBox"} value={value}/> */}
                {/* <Calendar
                    className={'calendar'}
                    onChange={onChange}
                    value={value}
                    /> */}
            </div>
        <Container style={{paddingTop: '150px'}}>
            <Row>
                <Col>
                    <Calendar
                        locale="fa"
                        value={selectedDay}
                        onChange={setSelectedDay}
                        shouldHighlightWeekends/>
                </Col>
                <Col>
                    <ToDo />
                </Col>
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