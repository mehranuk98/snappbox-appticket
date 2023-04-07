import React from 'react';
import { emailValidator, passwordValidator } from '../components/regexValidator';
import {useNavigate} from "react-router-dom"
import loginImage from "../images/loginImage.png"



const Login = () => {
    const navigte = useNavigate()
	
	
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
    
  

  const [input, setInput] = React.useState({ email: '', password: '' });

  const [errorMessage, seterrorMessage] = React.useState('');
  const [successMessage, setsuccessMessage] = React.useState('');

  const handleChange = e => {
      setInput({ ...input, [e.target.name]: e.target.value });
  };

  React.useEffect(()=>{
      if(localStorage.getItem('auth')) navigte('/')
  },[])

  const formSubmitter = e => {
      e.preventDefault();
      setsuccessMessage('');
      if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');

      if (!passwordValidator(input.password))
          return seterrorMessage(
              'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
          );
      // setsuccessMessage('Successfully Validated');
      if((input.email !== 'admin@a.com' || input.password !== 'Password@1') && (input.email !== 'admin2@a.com'|| input.password !== 'Password2@1'))  return seterrorMessage('Invalid email or password');
      // if(input.email !== 'admin1@a.com' || input.password !== 'Password1@1') return seterrorMessage('Invalid email or password');


      navigte('/')
      localStorage.setItem('auth', true)

  };

  return (
      <div className='lg:grid lg:grid-cols-2 h-screen xl:mx-[100px] overflow-y-hidden'>
                 
        <div className='hidden lg:block'>
            <div className='lg:mt-[90px] grid justify-items-center '>
            <img src={loginImage} className='h-[550px] w-[750px]'/>      
            </div>
        </div>
        <div>
            
        <div className='grid justify-center my-[-100px]'>
        <div className='div-login'>
                <form onSubmit={formSubmitter}>
                    <p className='text-[25px] pt-[45px] py-[10px]'>SnappBox Appticket</p>
                    <p className='text-[55px] pb-[30px]'>LOGIN</p>
                    {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                    {successMessage.length > 0 && (
                        <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
                    )}
                    <div data-validate="email is required">
                        <p className='pb-[7px]'>Enter you Email address</p>
                        <input className='input-login' type="text" name="email" placeholder="Email address" onChange={handleChange}/>
                        <span data-symbol="" />
                    </div>
                    <div data-validate="Password is required">
                        <p className='pb-[7px]'>Enter your Password</p>
                        <input className='input-login'
                            type="password" name="password" placeholder="Password" onChange={handleChange}/>
                        <span className="" data-symbol="" />
                    </div>
                    
                            <div/>
                            <button className='bg-[#2563EB] text-white w-[200px] h-[50px] rounded-[12px] mt-[15px]'>Sign in</button>
                </form>
       </div>
        </div>
        </div>
          <div id="dropDownSelect1" />
      </div>
  );
};


export default Login