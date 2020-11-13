import React from 'react';
import './sliderContent.css';
import Button from '../../button/button';

const SliderContent =()=>{
    return (
        <div className="sliderContent">
            <img src="http://www.pte90.net/wp-content/uploads/2020/10/1-1.jpg" alt="تست اسلاید" />
            {/* <img src="http://enative.ir/wp-content/uploads/2020/03/slide-2.jpg" alt="2تست اسلاید" /> */}
            <div className="slideTitr">
                <h1>Focus on PTE Vocabulary</h1>
                <h2>The best book for</h2>
                <h2>reading PTE vocab</h2>
                <Button btnType="danger">خرید کتاب</Button>
            </div>
            
        </div>

        
        // transform: translateX(-${props => props.translate}px);
        // transition: transform ease-out ${props => props.transition}s;
        // height: auto;
        // width: ${props => props.width}px;
        // display: flex;
        
        )
}

export default SliderContent;