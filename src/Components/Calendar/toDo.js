import React, { Children } from 'react';
// import Calandar from '../../pages/calendar';
const ToDo =(props)=>{
    // onClickDay =()=>{
        var value = props.value.toString();
        const taskHandler =()=>{

        }
        if (props.value){
            return(
                <React.Fragment className={"toDoBox"}>
                    <div>
                     <label value={props.value}> لیست برنامه ها </label>
                    </div>
                    <input onChange={taskHandler} placeholder={"برنامه خود را وارد کنید"}></input>

                </React.Fragment>
                

                )
        }else{  
            return(
            <label value={value}>تست کردن</label>
                
                )
        }

    // }

}

export default ToDo;