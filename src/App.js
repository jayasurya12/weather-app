import React,{useState} from 'react'
import InputBox from './components/inputBox';
import axios from 'axios';
import Result from "./components/result/result"

const App = () => {
  const [input, setinput] = useState('');
  const [weatherData, setWeather] = useState([{
    temp:"",
    description:"",
    icon:"",
    
  }])
 
  const [Temp, setTemp] = useState('')
  
  
  const findWeather=async()=>{
    const apiKey='e0e83b0c17ddaf027f15d443e0c5e69a'
    const units="matric";
    const url='https://api.openweathermap.org/data/2.5/weather?q='
     +input+"&appid="+apiKey+"&units="+units
     ////////////////////
    const {data}= await axios(url)
    ////////////////////////

    let temp=data.main.temp;
    let description=data.weather[0].description;
    // let icon=data.weather[0].icon
    let icon='https://openweathermap.org/img/wn/'+data.weather[0].icon+"@2x.png";
    console.log(data)
    // setIcon(iconurl)
    setTemp(temp)
    setWeather({
      icon,
     description,
      temp
    });
    setinput("")
  }
 
  return (
    <div>
      {Temp ===""?(
      <InputBox input={input} setInput={setinput} findWeather={findWeather} check={weatherData}/>)
      :(
      <Result data={weatherData} setTemp={setTemp}/>
      )}
    </div>
  )
}

export default App
