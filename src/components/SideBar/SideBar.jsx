import React, { useContext, useState } from 'react'
// import { assets } from '../../assets/assets'
import { LuMenu } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

import { useTheme } from "./ThemeContext"; //for dark mode
import { Context } from '../../config/GeminiContextAPI';

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);
    const toggleSidebar = () => {
        setExpanded(prev => !prev);
    };

    const { theme, toggleTheme } = useTheme();
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    // for prev prompt data
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt) 
        console.log(prompt)
    }

    return (
        <>
            <div className={`${theme === "dark" ? "dark" : null} h-screen ${expanded ? "w-72" : "w-16"}  duration-400 overflow-hidden inline-flex flex-col justify-between py-4 px-3 bg-[#EFEFEF] dark:bg-zinc-700 dark:text-zinc-300`}>
                {/* top section */}
                <div className={`flex duration-500 transition-[opacity,transform] ease-in-out overflow-hidden flex-col gap-6 `}>
                    {/* menu btn */}
                    <button className='flex w-10 hover:rounded-full' onClick={toggleSidebar}>
                        <LuMenu className='size-10 py-2 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-600 cursor-pointer' />
                    </button>
                    {/* plus */}
                    <div onClick={()=>newChat()} className={`flex py-1.5 ${expanded ? "gap-1 w-30" : "gap-0 w-8.5"} rounded-full bg-zinc-300 dark:bg-zinc-600`}>
                        <FaPlus className='size-5.5 cursor-pointer translate-x-1.5' />
                        <p className={` duration-700 -translate-y-0.5 ${expanded ? "translate-x-3  duration-500 transition-[opacity,transform] ease-in-out" : "duration-500 transition-[opacity,transform] ease-in-out -translate-x-1 opacity-0"}`}>{expanded && "New chat"}</p>
                    </div>
                    {/* chats */}
                    <div className={`w-full flex overflow-hidden flex-col ${expanded ? " duration-1000 transition-[opacity,transform] ease-in-out opacity-100" : "opacity-0"}`}>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} key={index} className={`flex gap-4 hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-full py-2 px-1 `}>
                                    {console.log(item)}
                                    <IoChatboxOutline className='size-6 cursor-pointer translate-x-1' />
                                    <p>{expanded && item.slice(0, 18)}</p>
                                </div>
                            )
                        })}
                        {console.log(prevPrompts)}
                    </div>


                </div>
                {/*  */}
                {/* bottom section */}
                <div className={`flex duration-500 transition-[opacity,transform] ease-in-out overflow-hidden flex-col gap-6 `}>

                    <div className='flex gap-2'>
                        <IoIosHelpCircleOutline className='size-6 cursor-pointer translate-x-1' />
                        <p className={`  ${expanded ? "translate-x-3 duration-500 transition-[opacity,transform] ease-in-out opacity-100" : "translate-x-0 opacity-0"}`}>{expanded && "Help"}</p>
                    </div>
                    <div className='flex gap-2'>
                        <RxCountdownTimer className='size-6 cursor-pointer translate-x-1' />
                        <p className={`  ${expanded ? "translate-x-3 duration-500 transition-[opacity,transform] ease-in-out opacity-100" : "translate-x-0 opacity-0"}`}>{expanded && "Activity"}</p>
                    </div>
                    <div className='flex gap-2 overflow-hidden'>
                        {/* <CiSettings className='size-6 cursor-pointer duration-0 translate-x-1' />
                        <p className={`  ${expanded ? "translate-x-3 duration-500 transition-all opacity-100" : "translate-x-0 opacity-0"}`}>{expanded && "Settings"}</p> */}
                        <button onClick={toggleTheme}>
                            {theme === "light" ? <IoMoon size={20} className='size-6 cursor-pointer duration-0 translate-x-1' /> : <IoSunny size={20} className='size-6 cursor-pointer duration-0 translate-x-1' />}
                        </button>
                        <p className={`  ${expanded ? "translate-x-3 duration-500 transition-[opacity,transform] ease-in-out opacity-100" : "translate-x-0 opacity-0"}`}>  {expanded ? (theme === "light" ? "Light" : "Dark") : ""}</p>
                    </div>
                    {/* <div className='flex gap-2 overflow-hidden'>
                    </div> */}
                </div>
                {/*  */}
            </div>
        </>
    )
}

export default SideBar;
