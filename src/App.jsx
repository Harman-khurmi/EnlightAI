import React from 'react'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'


// import { BrowserRouter } from "react-router-dom"

const App = () => {

  return (
    <>
      {/* <div className='min-h-screen flex '>
      <SideBar />
      <Main/>
      </div> */}
      <div className="flex h-screen">
        {/* Sidebar with fixed width */}
        <SideBar className="w-64" />

        {/* Main container: navbar + scrollable content */}
        <div className="flex flex-col flex-1">
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
