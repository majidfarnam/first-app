import React from 'react';
import './slider.css';
import SliderContent from './sliderContent/sliderContent';
// import Button from '../button/button';

const Slider =(props)=>{
    // const backHandler =(props)=>{}

    
    return (
        <React-fragment>
            <div className="slider">
                <SliderContent />
            </div>
            <div>
                {/* <Button onClick={backHandler}>قبلی</Button>
                <Button onClick={nextHandler}>بعدی</Button> */}
            </div>
        </React-fragment>
     )

}

export default Slider;