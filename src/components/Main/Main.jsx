import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useTheme } from "../SideBar/ThemeContext";
import { FaRegCompass, FaRegLightbulb } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BiImageAdd } from "react-icons/bi";
import { PiMicrophoneBold } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import { useAuth } from "./AuthContext";
import { Context } from '../../config/GeminiContextAPI';
import { assets } from '../../assets/assets';

const Main = () => {
  const { theme } = useTheme();
  const { isAuthenticated, user } = useAuth();
  const { inputPrompt, setInputPrompt, recentPrompt, resultData, onSent, loading, showResult } = useContext(Context);

  return (
    <div className={`flex flex-col w-full h-screen ${theme === "dark" ? "dark" : "light"} bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300`}>

      {/* Navbar - Fixed at the top */}
      <div className="">
        <Navbar />
      </div>

      {/* Main Content Area - Only this area scrolls */}
      <div className="flex-1 p-8  justify-center items-start flex overflow-y-auto scrollbar-none">
        {showResult ?
          <>
            <div className='flex flex-col items-center justify-center mr-12'>
              <div className="w-full max-w-4xl flex justify-end items-center gap-4 ml-12">
                <p className="text-md font-medium p-4 px-5 bg-zinc-200 dark:bg-zinc-700 rounded-full ">
                  {recentPrompt}
                </p>
              </div>
              <div className='flex items-baseline my-4 gap-4 justify-center '>
                <img src={assets.fevicon} className='h-7' alt="fevicon" />
                {loading ?
                  <>

                    <div role="status" className="animate-pulse flex flex-col items-center justify-center">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-xl md:w-3xl lg:w-4xl  mb-4"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-xl md:w-3xl lg:w-4xl  mb-4"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-xl md:w-3xl lg:w-4xl  mb-4"></div>
                      {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div> */}
                      {/* <span className="sr-only">Loading...</span> */}
                    </div>


                  </> :
                  <>
                    <p
                      dangerouslySetInnerHTML={{ __html: resultData }}
                      className=' bg-zinc-200 dark:bg-zinc-700 rounded-4xl p-6 max-w-4xl leading-7'
                    ></p></>}

              </div>
            </div>
          </>
          :
          <>
            <div className="w-full max-w-4xl flex flex-col">
              <div className="flex flex-col items-left">
                <h1 className="text-5xl py-4 font-bold bg-gradient-to-r from-[#1E4D7B] via-[#4BA3D8] via-[15%] to-[#C8A2C8] text-transparent bg-clip-text bg-[length:60%_auto]">
                  {isAuthenticated ? `Hi ${user.given_name}` : "Hi User"}
                </h1>
                <h2 className="text-5xl font-bold opacity-30 dark:text-[#EFEFEF]">
                  How can I help you today?
                </h2>
              </div>
              {/* Cards */}
              <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card
                  text="Suggest beautiful places to see on an upcoming road trip."
                  Icon={FaRegCompass}
                />
                <Card
                  text="Briefly summarize this concept: urban planning."
                  Icon={FaRegLightbulb}
                />
                <Card
                  text="Brainstrong team planning activities for our work retreat."
                  Icon={FiMessageSquare}
                />
                <Card
                  text="Improve the readability of the following code."
                  Icon={IoCodeSlashOutline}
                />
              </div>
            </div>
          </>
        }
      </div>

      {/* Search Bar - Fixed at the bottom */}
      <div className="flex-none w-full p-4">
        <div className="relative w-full max-w-4xl mx-auto">
          <input
            onChange={(e) => {
              setInputPrompt(e.target.value)
            }}
            value={inputPrompt}
            type="text"
            placeholder="Enter your prompt here"
            className="w-full h-14 pl-6 pr-20 rounded-full border-2 border-zinc-300 dark:border-zinc-500 focus:outline-none bg-zinc-50 dark:bg-zinc-800 dark:text-[#E2E2E2]"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 gap-2">
            <button className="text-gray-700 hover:text-gray-900 dark:text-[#E2E2E2] dark:hover:text-white">
              <BiImageAdd size={20} />
            </button>
            <button className="text-gray-700 hover:text-gray-900 dark:text-[#E2E2E2] dark:hover:text-white">
              <PiMicrophoneBold size={20} />
            </button>
            {inputPrompt ? <button
              onClick={onSent}
              className="text-gray-800 hover:text-gray-900 dark:text-[#E2E2E2] dark:hover:text-white"
            >
              <CiLocationArrow1 size={20} />
            </button> : null}
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 p-2 text-sm">
          <p>EnlightAI can make mistakes, so double-check it.</p>
        </div>
      </div>

    </div>
  );
};

const Card = (props) => (
  <div className="cursor-pointer hover:bg-[#E2E2E2] dark:hover:bg-zinc-700 h-48 p-4 rounded-2xl flex flex-col justify-between bg-[#EFEFEF] dark:bg-zinc-600">
    <p className="text-md">{props.text}</p>
    <div className="self-end">
      <props.Icon className="bg-white dark:bg-zinc-500 dark:text-zinc-50 text-zinc-700 p-2 rounded-full" size={40} />
    </div>
  </div>
);

export default Main;

