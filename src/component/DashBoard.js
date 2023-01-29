import React, { useEffect,useState } from 'react'
import './DashBoard.css'




function DashBoard() {
 

  return (







    <div id="dashBoard">

      <div className="topName">
        <span >Hi </span>

      </div>
      <div className="accountInfo">
        <div className="infoLeft">
          <div className="equity">
            <span></span>
            <span>Equity</span>
          </div>
          <div className="margin">
            <div className="avl">
            
            </div>
            <span>Margin available</span>
          </div>
          <div className="divider"></div>
        </div>
        <div className="infoCenter">Center</div>
        <div className="infoRight">Right</div>
      </div>
      <div className="infoInvesting">
        Start Investing
      </div>

      <div className="marketOverview">

      </div>
    </div>


  )
}

export default DashBoard