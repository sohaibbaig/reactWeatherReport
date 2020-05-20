import React, {Component} from 'react';
import SearchCity from './SearchCity';
import '../cssFiles/WeatherSearch.css';

class WeatherSearch extends Component{
    state = {
            searched: false,
            city: ''
        }
    
    getWeather = (e) => {
        e.preventDefault();
        
        var item = document.getElementById('text').value;
        //console.log(item);
        
        this.setState({
            searched: true,
            city: item
        });
    }
    
    render(){
        return(
            <div>
                <div>
                    <form className="form">
                        <input type="text" placeholder="Enter the name of the city" id="text" className="text" />
                        <input type="submit" value="Search City" className="submit" onClick= {this.getWeather} />
                    </form>
                </div>
                {
                    this.state.searched ? (<SearchCity cityName = {this.state.city} /> ): (<h4>Enter The City Name and click on "search city" to get the weather Report</h4> )
            
            }
            </div>
        )
    }
}
export default WeatherSearch;