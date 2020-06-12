import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../cssFiles/WeatherSearch.css';
import Axios from 'axios';
import SearchCity from './SearchCity';





const WeatherSearch = () => {
    const [report, setReport] = useState({});
    
    const getWeather = (e) => {
        e.preventDefault();
        
        var item = document.getElementById('text').value;
        if (item==='')
            alert('Enter the City Name!!');
        else{
            Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+item+"&units=metric&APPID=540b6759e6a7d085e3204b4de5e306ff")
                    .then(resolve => {
                    console.log(resolve.data);
                    setReport(resolve.data);
                    ReactDOM.render(<SearchCity report={resolve.data} />, document.getElementById("dataField"));
            });
            
            
        }
    }
    
    
    return(
        <div>
            <div>
                <form className="form">
                    <input type="text" placeholder="Enter the name of the city" id="text" className="text" />
                    <input type="submit" value="Search City" className="submit" onClick= {getWeather} />
                </form>
            </div>
            <div id="dataField">
                <h4>Enter The City Name and click on search city to get the weather Report</h4>
            </div>
            
        </div>
    )
}




export default WeatherSearch;