import React,{useState,useContext} from 'react';
import Button from '../button/button';
import './signIn.css';
import ReCAPTCHA from 'react-google-recaptcha';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import {AuthContext} from '../../../src/context/auth/AuthContext';
 
const LoginForm =()=>{
    const[password, setPassword] = useState('');
    const[username,setUsername]=useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const[captchValue,setCaptchValue] = useState('');
    const {login} = useContext(AuthContext);

    const ResponseGoogle = (response) => {
        console.log(response);
      }
    const onChange =(value)=>{
        // console.log("Captcha value:", value);
        setCaptchValue(value)
        // console.log(captchValue);
    }
    const usernameHandler =(event)=>{
        setUsername(event.target.value);
    }
    const passwordHandler =(event)=>{
        setPassword(event.target.value);
    }
    const validate =()=>{
        if(username===''){
            setErrorMessage('نام کاربری را وارد کنید.');
            return false;
        } else if(password==='') {
            setErrorMessage('کلمه عبور را وارد کنید.');
            return false;
        } else{
            setErrorMessage('');
            return true;
        }
    }
    
    const loginHandler =()=>{
        if(captchValue===''){
            setErrorMessage('کپچا به درستی وارد نشده است.');
        }else{
            const validateResult = validate();            
            if(validateResult){
                fetch('http://192.168.1.103/student/user_login.php',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    email:username,
                    password:password
                })
            }).then((response)=>response.json())
                .then((responseJson)=>{
                    if(responseJson==="Data Matched"){
                        login();
                        console.log('test');
                    } else{ 
                        setErrorMessage(responseJson);
                    }
                }).catch((error)=>{
                    setErrorMessage(error)
                })
            }else{
                setErrorMessage('captcah Invalid');
                return false;
            }
        }
    }
    return(
        <React.Fragment >
            <p style={{color:'red', fontSize:'56'}}>{errorMessage}</p>
            <input type='text' placeholder='Username' onChange={usernameHandler} />
            <input type='password' placeholder='Password' onChange={passwordHandler}/>
            <ReCAPTCHA
                sitekey="6LdnOdsZAAAAAC05EnvStOwyAfeTA5AdponSaobV"
                onChange={onChange}/>
            <Button  clicked={loginHandler}>ورود</Button>
            <GoogleLogin
                clientId="752119207410-ee7g09tqnk34cfecdoqaq1cru0bps6u7.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={ResponseGoogle}
                onFailure={ResponseGoogle}
                cookiePolicy={'single_host_origin'}
            />
                {/* document.getElementById('googleButton') */}
            
        </React.Fragment>

    )
}

export default LoginForm;