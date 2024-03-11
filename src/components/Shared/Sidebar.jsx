import React from 'react'
import classNames from 'classnames';
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation';
import { Link, useLocation} from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

//allows page reload whenever company name is clicked
const handleNameClick = () => {
    window.location.reload();
};

//allows logout
const handleLogout = () => {
    // Perform any logout logic here, such as clearing user data from state or local storage
    // Then redirect to Google
    window.location.href = 'https://www.google.com';
};

export default function Sidebar(){
    return(
        <div className={classNames('bg-neutral-900 p-3 flex flex-col text-white')}>
            {/* Sidebar Content */}
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24}/>
                <span className='text-neutral-100 text-lg cursor-pointer' onClick={handleNameClick}>OpenShop</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>         
                 ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
            <div className={classNames ('text-red-500 cursor-pointer', linkClasses)} onClick={handleLogout}>
                <span className='text-xl'><HiOutlineLogout/></span>
                Logout
            </div>
        </div>
    )
}

function SidebarLink({item}){
    const {pathname} = useLocation();

    return(
        <Link to={item.path} className={classNames (pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}