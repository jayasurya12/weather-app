import React from 'react'
import {Input,Button} from '@material-ui/core'
import './input.css';

const InputBox = ({input,setInput,findWeather,weatherData}) => {
    const handleChange=(event)=>{
        setInput(event.target.value)
       
    }
   
   const handleClick =(e)=>{
    e.preventDefault();
        findWeather();
   }
    return (
        <div className="inputBox">
            <div className="input_field">
                <h1>Google Weather App</h1>
                <p>Powered by.</p>
                <img 
                src='https://www.sketchappsources.com/resources/source-image/google-g-logo.jpg'
                 alt='Glogo'/>
                <form>
                <Input placeholder='Enter the City Name' 
                onChange={handleChange} value={input}/>
                <br/>
                <Button variant="contained" color="primary" type="submit" onClick={handleClick}>Search</Button>
                </form>
            </div>
        </div>
    )
}

export default InputBox
