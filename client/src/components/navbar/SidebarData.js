import React from 'react'
import * as VscIcons from "react-icons/vsc"
import * as HiIcons from "react-icons/hi";

import './Navbar.css'

export const SidebarData = [
    {
        title: 'Gestion du profil',
        path: '/profile',
        icon: <HiIcons.HiOutlineUser />,
        cName: 'nav-text',
        subNav: 'user'
    },
    {
        title: 'Ressources',
        path: '/catalog',
        icon: <VscIcons.VscFileSubmodule />,
        cName: 'nav-text',
        subNav: 'ressources'
    },
    {
        title: 'Back-office',
        path: '/admin',
        icon: <VscIcons.VscSettings />,
        cName: 'nav-text',
        subNav: 'bo'
    },
    {
        title: 'Documentations',
        path: '/documentation/visitor',
        icon: <VscIcons.VscInfo />,
        cName: 'nav-text',
        subNav: 'doc'
    }
]
