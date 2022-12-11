
import React, { useState } from 'react'
import "./Sidebar.scss"
import { HiMenuAlt3 } from 'react-icons/hi'
import { SiMomenteo } from "react-icons/si"
import SidebarItems from "./SidebarItems";
import { useNavigate } from 'react-router-dom';



const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true)

    const toggle = () => setIsOpen(!isOpen);

    const navigate = useNavigate();

    const homePage = () => {
        navigate("/");
    };


    return (
        <div className='layout'>
            <div className='sidebar' style={{ width: isOpen ? "230px" : "60px" }}>


                <div className='top-section'>

                    <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
                        <SiMomenteo
                            size={35}
                            style={{ cursor: "pointer" }}
                            onClick={homePage}
                        />
                    </div>

                    <div className='bars' style={{ marginLeft: isOpen ? "180px" : "0px" }}>
                        <HiMenuAlt3 onClick={toggle} />

                    </div>

                    <div style={{ display: isOpen ? "block" : "none" }}>
                        <SidebarItems />
                    </div>

                </div>
            </div>
            <main style={{ paddingLeft: isOpen ? "230px" : "60px", transition: "all.5s " }}>{children}</main>
        </div>
    )
}

export default Sidebar