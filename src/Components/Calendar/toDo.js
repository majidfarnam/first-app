import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Calandar from '../../pages/calendar';
const ToDo =(props)=>{

    return(
        <Container >
            <Row>
                <Col>
                    <h1>Hello</h1>
                </Col>
            </Row>
        </Container>
        
    )
    //     const [taskHandler, setTaskHandler] =useState("");        
    //     var value = props.value.toString();

    //     const task =(event)=>{

    //         setTaskHandler(event);
    //         console.log(taskHandler);
    //     }
    //     const addTask =(onClick)=>{
    //         console.log(" it's ok! ");
    //     }
    //     if (props.value){
    //         return(
    //             <div className={"toDoBox"}>
    //                 <div>
    //                   <h1 > لیست برنامه ها </h1>
    //                 </div>
    //                 <div className="todolist">
    //                   <li>زنگ زدن به دکتر</li>
    //                   <li>تماس برای طراحی سایت</li>
    //                   <p onClick={addTask}>+</p>
    //                 </div>
                      
    //             </div>
                

    //             )
    //     }else{  
    //         return(
    //         <label value={value}>تست کردن</label>
                
    //             )
    //     }

    // // }

}

export default ToDo;