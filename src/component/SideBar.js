import {React,useEffect,useState} from 'react'
import './SideBar.css'
import API_ENDPOINT from '../config/api_endpoint';
import fyersCredintial from '../config/fyers_api'
import axios from 'axios'

import {  faBars, faChartLine, faTrash, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const dayChange = -.67;


function SideBar() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      async function getData() {
        const response = await axios({
          method: 'GET',
          url:API_ENDPOINT.getSbi,
          headers: {
            Authorization: fyersCredintial.auth
          }
        });
        setData(response.data);
      }
      getData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(data);
 
  return (

    <div id="sideBar">
      <div className="scrollItems">



        <div className="listItem">
          <input type="text" className="search" placeholder='Search Stok, Index, Opions, Gold, ETF' />
        </div>

        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
            SBIN
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className='red'>
            {data && data.d && data.d[0] && data.d[0].v && data.d[0].v.ch ? data.d[0].v.ch : 'N/A'}
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
            {data && data.d && data.d[0] && data.d[0].v && data.d[0].v.lp ? data.d[0].v.lp : 'N/A'}
            </div>
          </div>
        </div>




        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className="dayChange">
              .64%
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="itemLeft">
            <div className="itemName">
              Reliance last
            </div>
          </div>
          <div className="itemRight">
            <div className="itemHidden">
              <button className="btn">B</button>
              <button className="btn">S</button>

              <span className="icon"><FontAwesomeIcon icon={faBars} /></span>
              <span className="icon"><FontAwesomeIcon icon={faChartLine} /></span>
              <span className="icon"> <FontAwesomeIcon icon={faTrash} /></span>
              <span className="icon"><FontAwesomeIcon icon={faEllipsis} /></span>
            </div>
            <div className={`dayChange ${dayChange < 0 ? "red" : ""}`}>
              {dayChange}
            </div>
            <div className="upDownLogo">
            </div>
            <div className="currentPrice">
              2459.65
            </div>
          </div>
        </div>


      </div>

      <div className="bottomSticky">
        <div className="wList">1</div>
        <div className="wList">2</div>
        <div className="wList">3</div>
        <div className="wList">4</div>
        <div className="wList">5</div>
        <div className="wList">6</div>
        <div className="wList">7</div>

      </div>
      <div className="bottomGap">
        bottom
      </div>






    </div>

  )
}

export default SideBar