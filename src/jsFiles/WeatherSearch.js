import React, {useState, useEffect} from 'react';
import '../cssFiles/WeatherSearch.css';
import Axios from 'axios';
import '../cssFiles/SearchCity.css';





const WeatherSearch = () => {
    const [isSearched, changeSearched] = useState(false);
    //const [city, setCity] = useState('');
    const [report, setReport] = useState({});
    
    useEffect(() => {
        
        console.log(report);
        
        const show = (!(report===null || Object.keys(report).length === 0))? (
           `<div className="display">
                <h2>Current Weather for ${report.name} ${report.sys.country} </h2>
                <p><strong>Weather</strong>:${report.weather[0].main} </p>
                <p><strong>Description</strong>:<img src='http://openweathermap.org/img/w/${report.weather[0].icon}.png' /> ${report.weather[0].description} </p>
                <p><strong>Temperature</strong>:${report.main.temp} &deg;C </p>
                <p><strong>Temperature</strong>:${report.main.temp} &deg;C</p>
                <p><strong>Pressure</strong>:${report.main.pressure} hpa</p>
                <p><strong>Humidity</strong>:${report.main.humidity}%</p>
                <p><strong>Min Temperature</strong>:${report.main.temp_min}&deg;C</p>
                <p><strong>Max Temperature</strong>:${report.main.temp_max}&deg;C</p>
                <p><strong>Wind Speed</strong>:${report.wind.speed}m/s</p>
                <p><strong>Wind Direction</strong>:${report.wind.deg}&deg;</p>
            </div>`
        ) : ( `<div>Fetching Data....</div>`
            );
        
        console.log(document.getElementById("dataField").innerHTML);
        console.log(show);
        document.getElementById("dataField").innerHTML = show;
    });
    
    const getWeather = (e) => {
        e.preventDefault();
        
        var item = document.getElementById('text').value;
        
        changeSearched(true);
        //setCity(item);
        if (item==='')
            alert('Enter the City Name!!');
        else{
            Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+item+"&units=metric&APPID=540b6759e6a7d085e3204b4de5e306ff")
                    .then(resolve => {
                    //console.log(resolve.data);
                    setReport(resolve.data);
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