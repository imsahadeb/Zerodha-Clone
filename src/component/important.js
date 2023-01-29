
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
            setFyersData(response.data.candles);
          } catch (error) {
            console.error(error);
          }
        
    }
    fetchData();

},[sbi]);

console.table(fyersData);