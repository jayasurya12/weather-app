import { Button } from '@material-ui/core'
import React from 'react'
import './result.css'
const result = ({data:{temp,description,icon},setTemp}) => {
    return (
        <div className="resultContainer">
            <div className='result_Box'>
                <h1>Temp: {(temp-273).toFixed(2)} °C</h1>
                <h5>Description: {description}</h5>
                <img src={icon} alt="icon"/><br/>
                <Button variant='contained' color="default" onClick={()=>{setTemp("")}}>Back</Button>
            </div>
            
        </div>
    )
}

export default result
