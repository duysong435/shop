
import React, { useState } from 'react'
import axios from 'axios'


import Avatar from '../assets/img/avatar.png'
import Fb from '../assets/icon/fb.PNG'
import Twitter from '../assets/icon/twitter.PNG'
import '../assets/css/Login.css'


const Login = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onLoginHandle = async () => {
        const data = {
            username, password
        };
        try {
            const response = await axios.post(`https://33a9-2402-9d80-247-4fc2-9081-a966-989-eb45.ap.ngrok.io/login`, data);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='background '>
            <div className="pt-32">
                <div className="main">
                    <div className="avatar">
                        <img src={Avatar} style={{ height: '80px' }} alt={Avatar} />
                    </div>
                    <div className="top">
                        <h1>ĐĂNG NHẬP</h1>
                    </div>
                    <div className="bot">
                        <div className="login">
                            <form className=''>
                                <input
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(ev) => { setUserName(ev.target.value) }}
                                />
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(ev) => { setPassword(ev.target.value) }}
                                />
                                <div className="remember">
                                    <input type="checkbox" /><label>Remember me</label>
                                    <div className="fogot">
                                        <h6><a style={{ color: '#4769A5' }} href="#">Register</a></h6>
                                    </div>
                                </div>
                                <div
                                    className='bg-red-500 p-3 text-center rounded-md hover:bg-red-400 hover:cursor-default'
                                    onClick={() => { onLoginHandle() }}
                                >
                                    Đăng Nhập
                                </div>
                            </form>
                            <div className="sign-up">
                                <h2>or</h2>
                            </div>
                        </div>
                        <div className="social">
                            <div className="fb ">
                                <a href="#">
                                    <img src={Fb} alt="" />
                                </a>
                            </div>
                            <div className="fb tw">
                                <a href="#">
                                    <img src={Twitter} height="25px" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;