import React,{useState} from 'react';
import './contact.scss';


export default function Contact() {
    const [text,setText]=useState("Message");
    const[input,setFormField]=useState({})
    
    const clearText = () =>{
        let newText=" ";
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    let onInputChange = (e) =>{
        setFormField({[e.target.name] : e.target.value})
        console.log(e.target.value)
    }
  
  
  return (
  <section className='form-section'>
  <div className='form'>
     <div className='detail'>
        <input type="text" name="firstName" onChange={(e)=>onInputChange(e)} placeholder='Name'/> <br/>
        <input type="number" name="lastName" onChange={(e)=>onInputChange(e)}  placeholder='Phone'/> <br/>
        <input type="text" name="adress" onChange={(e)=>onInputChange(e)}  placeholder='Email'/> <br/>
      
     </div>

     <div className='message'>
        <textarea value={text} onChange={handleOnChange}></textarea> 
    </div>

    <div className='btn'>
    <button onClick={clearText}>Clear Message</button> 
    <button type='submit'>Submit</button>
    </div>
  </div>
  </section>
    
  )
}
