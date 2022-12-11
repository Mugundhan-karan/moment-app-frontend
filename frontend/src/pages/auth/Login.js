import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser, validateEmail } from '../../services/authService';
import { SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice';

const initialState = {

    email: "",
    password: "",


}

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { email, password } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }

    const login = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            return toast.error("All fields are required")
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter valid email")
        }
        const userData = {
            email, password
        }
        setIsLoading(true)

        try {
            const data = await loginUser(userData)
            console.log(data);
            await dispatch(SET_LOGIN(true))
            await dispatch(SET_NAME(data.name))
            navigate("/dashboard")
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);

        }


    }


    return (
        <div className='login-box'>
            <div className='left'><center><h3>Sign in</h3>
                <form onSubmit={login}>

                    <input type="text" name="email"
                        value={email} onChange={handleInputChange}
                        placeholder="E-mail" />

                    <input type="password" name="password"
                        value={password} onChange={handleInputChange}
                        placeholder="Password" />

                    <button type="submit">Sign In</button>


                </form>
                <div className="right">
                    <p> &nbsp; Don't have an account? &nbsp;</p>
                    <Link to="/register">Sign up</Link>

                </div>
                <div >

                </div>

            </center>

            </div>



        </div>
    )
}

export default Login