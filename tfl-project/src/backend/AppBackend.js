import { useState, useEffect } from "react";
import axios from 'axios';


const AppBackend = () => {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.tfl.gov.uk/Line/Mode/tube`
            );
            // addForecast(response.data);
            setData(response.data);
            console.log(response.data); //You can see all the weather data in console log
            // setLogged(prev => !prev);
        
        } catch (error) {
            console.error(error);
        }
    };

  useEffect(() => {
    // console.log("num changed declared");
    fetchData();
  }, []);

  return (
    <>
    <h2>{data[0].name}</h2>
    </>
  );

};

export default AppBackend;