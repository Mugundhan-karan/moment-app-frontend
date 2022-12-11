import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import { registerUser, validateEmail } from "../../services/authService";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice"

const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",

}

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { name, email, phone, password, password2 } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })

    }

    const register = async (e) => {
        e.preventDefault()

        if (!name || !email || !phone || !password) {
            return toast.error("All fields are required")
        }
        if (password !== password2) {
            return toast.error("Passwords do not match")
        }
        if (password.length < 6) {
            return toast.error("Password must be upto 6 chracters")
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter valid email")
        }

        const userData = {
            name, email, phone, password
        }

        setIsLoading(true)

        try {
            const data = await registerUser(userData)
            //console.log(data);
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
            <div className='left'><center><h3>Sign up</h3>

                <form onSubmit={register} >
                    <input type="text" name="name"
                        value={name} onChange={handleInputChange}
                        placeholder="Username" />

                    <input type="text" name="email"
                        value={email} onChange={handleInputChange}
                        placeholder="E-mail" />

                    <input type="text" name="phone"
                        value={phone} onChange={handleInputChange}
                        placeholder="Phone" />

                    <input type="password" name="password"
                        value={password} onChange={handleInputChange}
                        placeholder="Password" />

                    <input type="password" name="password2"
                        value={password2} onChange={handleInputChange}
                        placeholder="Confirm password" />

                    <button type="submit">Sign Up</button>


                </form>
                <div className="right">
                    <p> &nbsp; Already have an account? &nbsp;</p>
                    <Link to="/login">Sign in</Link>
                </div>


            </center>

            </div>



        </div>
    )
}

export default Register