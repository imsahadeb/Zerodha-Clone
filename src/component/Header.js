import React, { useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios'
import {Line} from 'react-chartjs-2'
const fyers_token="UGY069G3IZ-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2NzQxNzcyMjIsImV4cCI6MTY3NDI2MTA0MiwibmJmIjoxNjc0MTc3MjIyLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCanllckd6Yl9PZEdkXzZCaUZvVl9qMVhTRkR4cm5yamJSbFZjaG5TMUpJZGU0b3QwVmllUTNoV2lhakJid0RJbTFfNHpRS0RCbVpXeDhkaVlHX3huQ01YeWxkY1NHWHVrdDJNSW1RblJvSzJibXBlST0iLCJkaXNwbGF5X25hbWUiOiJTQUhBREVCIEJBUk1BTiIsIm9tcyI6bnVsbCwiZnlfaWQiOiJEUzAyMjgzIiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.mZsV7S-K45b08lM6fhg4fOeUfAPY3dVa7S1gBS1deZc";
const fyers_url ="https://api.fyers.in/api/v2/profile";

const sbi ="data-rest/v2/history/?symbol=NSE:SBIN-EQ&resolution=30&date_format=1&range_from=2021-01-01&range_to=2021-02-02&cont_flag=";
const quote ="data-rest/v2/quotes/?symbols=NSE:SBIN-EQ";
const proxyUrl="https://cors-anywhere.herokuapp.com/";
function Header() {
const [fyersData, setFyersData] = useState([]);
useEffect(()=>{
    async function fetchData(){
        try {
            const response = await axios(`${sbi}`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
              'Authorization':`${fyers_token}`,
            }
            });
           // const data = await response.json();
            //console.log(data);
            setFyersData(response.data);
          } catch (error) {
            console.error(error);
          }
        
    }
    fetchData();

},[sbi]);

console.log(fyersData);
    
  return (
    <div className="data">
        <h1>chart</h1>
        
        <div>
            <p>
                {fyersData.candles}
            </p>
        </div>
 
    </div>
   

    
  )
}

export default Header