import React, {Component} from 'react';
import Axios from 'axios';
import '../cssFiles/SearchCity.css';

class SearchCity extends Component{
    state = {
        report: {}
    }


    componentDidMount(){
        //console.log("http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&APPID=540b6759e6a7d085e3204b4de5e306ff");
        
        if (this.props.cityName==='')
            alert('Enter the City Name!!')
        else{
            Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+"&units=metric&APPID=540b6759e6a7d085e3204b4de5e306ff")
                .then(resolve => {
                //console.log(resolve.data);
                this.setState({
                    report: resolve.data
                });
            })
        }
        
    }
    
    componentDidUpdate(prevProps){
        
        if (this.props.cityName !== prevProps.cityName) {
            if (this.props.cityName==='')
                    alert('Enter the City Name!!')
            else{
                Axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+"&units=metric&APPID=540b6759e6a7d085e3204b4de5e306ff")
                    .then(resolve => {
                    //console.log(resolve.data);
                    this.setState({
                        report: resolve.data
                    });
                })
            }
        }
        
        
        
    }
    

    render(){
        //console.log(this.state.report);
        const report=this.state.report;
        const show = (!(report===null || Object.keys(report).length === 0))? (
           <div className="display">
                <h2>Current Weather for {report.name} {report.sys.country} </h2>
                <p><strong>Weather</strong>:{report.weather[0].main} </p>
                <p><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+report.weather[0].icon+".png' /> {report.weather[0].description} </p>
                <p><strong>Temperature</strong>:{report.main.temp} &deg;C </p>
                <p><strong>Temperature</strong>:{report.main.temp} &deg;C</p>
                <p><strong>Pressure</strong>:{report.main.pressure} hpa</p>
                <p><strong>Humidity</strong>:{report.main.humidity}%</p>
                <p><strong>Min Temperature</strong>:{report.main.temp_min}&deg;C</p>
                <p><strong>Max Temperature</strong>:{report.main.temp_max}&deg;C</p>
                <p><strong>Wind Speed</strong>:{report.wind.speed}m/s</p>
                <p><strong>Wind Direction</strong>:{report.wind.deg}&deg;</p>
            </div>
        ) : ( <div>Fetching Data....</div> 
            );
         
            
        
        return <div>{show}</div>
    }
}

export default SearchCity;

