import React, {Fragment, useState} from 'react';
import '../Components/Calendar/calendar.css';
import Calendar from 'react-calendar';
import ToDo from "../Components/Calendar/toDo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import Button from 'react-bootstrap/Button';



const CalendarPage =(props)=>{
    const [value, setValue] = useState(new Date());
    let x = value;
    let day = x.getDate().toString();
    let month = (x.getMonth()+1).toString();
    let year = x.getFullYear().toString();
    let selectedDay = year + month + day;
    

    const pHandler =(task)=>{
        document.cookie = selectedDay + task;
    }
    function onChange(nextValue) {
        setValue(nextValue);
        
        console.log();
        
      }
    
    return (
        <React.Fragment>

        <Container style={{paddingTop: '150px'}}>
            <Row>
                <Col>
                    <Calendar
                        
                        className={'calendar'}
                        onChange={onChange}
                        value={value}
                        />
                        
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