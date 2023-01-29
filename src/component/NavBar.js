import React from 'react'
import './NavBar.css'
import '../media/preview.png'
function NavBar() {
  return (
    <div id="navBar">
        <div className="leftNavBar">
            <div className="nifty">
            <span className="index">
                    NIFTY 50
                </span>
                <span className="indexValue">
                    18000.65
                </span>
                <span className="indexGain">
                    0.55%
                </span>
            </div>
            <div className="bankNifty">

            <span className="index">
                    BANKNIFTY
                </span>
                <span className="indexValue">
                   42500.56
                </span>
                <span className="indexGain">
                    0.55%
                </span>

            </div>

            <div className="vLine"></div>
          
        </div>
        {/* <div className="centerNavbar">center</div> */}
        <div className="rightNavBar">


        <div className="rightBarItem">Dashboard</div>

        <div className="rightBarItem">Orders</div>
        <div className="rightBarItem">Positions</div>

        <div className="rightBarItem">Funds</div>

        <div className="rightBarItem">Apps</div>
        <div className="vLineR"></div>
        <div className="rightBarItem">Notification</div>
        <div className="rightBarItem">User</div>
        </div>
    </div>
  )
}

export default NavBar