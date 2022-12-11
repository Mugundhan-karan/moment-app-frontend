import React from 'react';
import { SiMomenteo } from "react-icons/si"
import { Link } from "react-router-dom"
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/HiddenLinks';
import "./Home.scss"
import heroImg from "../../assets/img2.jpg";

const Home = () => {
    return (
        <div className='home'>

            <nav className='container --flex-between'>
                <div className='logo'>
                    <SiMomenteo size={35} />
                </div>
                <ul className="home-links">

                    <ShowOnLogout>
                        <li className='list'>
                            <Link to="/register">Sign Up</Link>
                        </li>
                    </ShowOnLogout>

                    <ShowOnLogout>
                        <li>
                            <button className='btn'>
                                <Link to="/login">Sign In</Link></button>
                        </li>
                    </ShowOnLogout>

                    <ShowOnLogin>
                        <li>
                            <button className='btn'>
                                <Link to="/dashboard">Dashboard</Link></button>
                        </li>
                    </ShowOnLogin>



                </ul>

            </nav>

            {/* HERO SECTION */}
            <section className="container hero">
                <div className="hero-text">
                    <h2>Moments  of timeless pleasure</h2>
                    <p>
                        Photo management application to control and manage your precious moments.
                    </p>


                </div>

                <div className="hero-image">
                    <img src={heroImg} alt="Inventory" />
                </div>


            </section>
        </div>
    )
}

export default Home; 