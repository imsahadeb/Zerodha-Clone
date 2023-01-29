import React from 'react'
import SideBar from '../component/SideBar'
import DashBoard from '../component/DashBoard'
import './MainBody.css'
import NavBar from './NavBar'
import SearchItem from './SearchItem'
function MainBody() {
  return (
   
       <div id="mainBody">
        <div className="top"></div>
        <div className="mainBody">
        {/* <SideBar/>
        <DashBoard/> */}

        <SearchItem/>
        </div>
       
       </div>

   
  )
}

export default MainBody