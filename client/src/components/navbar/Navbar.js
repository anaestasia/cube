import React, { useState } from 'react'
import * as VscIcons from "react-icons/vsc"
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { SubNavUserData } from './SubNavUserData'
import { SubNavRessourceData } from './SubNavRessourceData'
import { SubNavBOData } from './SubNavBOData'
import { SubNavDocData } from './SubNavDocData'
import { IconContext } from 'react-icons'

import './Navbar.css'

function Navbar({role}) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                
                <Link to="#">
                    <VscIcons.VscThreeBars onClick={showSidebar} />                   
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items"  onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars close'>
                            <VscIcons.VscClose />
                        </Link>
                    </li>
                    <img
                    src="/img/logo/logo_ressources_relationnelles_transparent.png"
                    className="app-logo-navbar"
                    alt="logo"
                    />
                    <li className="nav-text">
                        <Link to="/">
                            <VscIcons.VscHome />
                            <span>Home</span>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index}>
                                <li className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                                <ul className="">
                                    {item.subNav === 'user' && (
                                            SubNavUserData.map((subItem, subIndex) => {
                                                return (
                                                    <li key={subIndex} className={subItem.cName}>
                                                        <Link to={subItem.path}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        ) 
                                    }
                                    {item.subNav === 'ressources' && (
                                            SubNavRessourceData.map((subItem, subIndex) => {
                                                return (
                                                    <li key={subIndex} className={subItem.cName}>
                                                        <Link to={subItem.path}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        ) 
                                    }
                                    {item.subNav === 'bo' && (
                                            SubNavBOData.map((subItem, subIndex) => {
                                                return (
                                                    <li key={subIndex} className={subItem.cName}>
                                                        <Link to={subItem.path}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        ) 
                                    }
                                    {item.subNav === 'doc' && (
                                            SubNavDocData.map((subItem, subIndex) => {
                                                if(subItem.role === role)
                                                {
                                                    return (
                                                    // {role === subItem.role &&  }
                                                    <li key={subIndex} className={subItem.cName}>
                                                        <Link to={subItem.path}>
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </li>
                                                    )
                                                }
                                                else{ return ( <></>)}
                                            })
                                        ) 
                                    }
                                </ul>
                            </div>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
