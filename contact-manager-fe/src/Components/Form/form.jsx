import './form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigator = useNavigate();
    const goBack = () => {
        navigator('/');
    }
    return (
        <section className='form-container'>
            <div className='form'>
                <p className='head'>Fill the form to add new contact</p>
                <br />
                <label > Personal Info</label>
                <div className='element'>
                  <label>Name</label>
                  <input type="text" name="" id="" placeholder='Name of contact'/>
                </div>
                <div className='element'>
                  <label>number</label>
                  <input type="text" name="" id="" placeholder='Number of contact'/>
                </div>
                <br />
                <label > Address</label>
   
                <div className='element'>
                <label > altitude</label>
                  <input type="decimal" name="" id="" placeholder='Number of contact'/>
                </div>
                 <div className='element'>
                 <label>longitude</label>
                  <input type="decimal" name="" id="" placeholder='Name of contact'/>
                 </div>
                 
                  <br />
                  <div className='footer'>
                    <button onClick={goBack}>Go back</button>
                    <button>Add contact</button>
                  </div>
                
               
                

            </div>
                

        </section>
    );
}
export default Form;