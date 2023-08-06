import './form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Form = () => {
   const [name,setName]=useState("")
   const [number,setNumber]=useState("")
   const [altitude,setAltitude]=useState("")
   const [longitude,setLongitude]=useState("")
   const navigator = useNavigate();
   const goBack = () => {
        navigator('/');
    }

    const handleName=(e)=>{
        setName(e.target.value)
       } 
    const handleNumber=(e)=>{
      setNumber(e.target.value)
     } 
    const handleAltitude=(e)=>{
      setAltitude(e.target.value)
     } 
    const handleLongitude=(e)=>{
      setLongitude(e.target.value)
     } 

    const handleSubmit=()=>{
        const data = new FormData()
        data.append("name",name)
        data.append("number",number)
        data.append("altitude",altitude)
        data.append("longitude",longitude)
        axios.post("http://127.0.0.1:8000/api/addContact",data)
        .then((res) => {
           console.log(res)
           window.location.href="http://localhost:3000/"     
           }).catch((err) => {
              console.log(err);
           })
    
    }
    return (
        <section className='form-container'>
            <div className='form'>
                <p className='head'>Fill the form to add new contact</p>
                <br />
                <label > Personal Info</label>
                <div className='element'>
                  <label>Name</label>
                  <input type="text" name="" id="" placeholder='Name of contact' onChange={handleName}/>
                </div>
                <div className='element'>
                  <label>number</label>
                  <input type="text" name="" id="" placeholder='Number of contact' onChange={handleNumber}/>
                </div>
                <br />
                <label > Address</label>
   
                <div className='element'>
                <label > altitude</label>
                  <input type="number" name="" id="" placeholder='Altitude of locatiom' step="0.0000000001" onChange={handleAltitude}/>
                </div>
                 <div className='element'>
                 <label>longitude</label>
                  <input type="number" name="" id="" placeholder='Longitude of Location' step="0.0000000001" onChange={handleLongitude}/>
                 </div>
                 
                  <br />
                  <div className='footer'>
                    <button onClick={goBack}>Go back</button>
                    <button onSubmit={handleSubmit}>Add contact</button>
                  </div>
                
               
                

            </div>
                

        </section>
    );
}
export default Form;