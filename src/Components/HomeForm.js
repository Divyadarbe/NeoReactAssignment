import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Background from './Images/home1.jpeg';

const HomeForm=()=>{
    const [textField1,setTextField1]=useState('');
    const [textField2,setTextField2]=useState('');
    const [seletedRadioButton,setRadioOption]=useState('');
    const [checkedOption,setCheckedValue]=useState('');
    const [selectedDate,setSelectedDate]=useState(new Date());

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("FirstName: "+textField1+"LastName: "+textField2+"Gender "+seletedRadioButton+"Skill "+checkedOption+"Birth Date "+selectedDate);
    }
    
    return(
        <div style={style.container}>
            <form onSubmit={handleSubmit}>
                <br/>
                    <label>First Name</label><br/>
                    <input type='textbox' value={textField1} style={style.textField1} onChange={(event)=>setTextField1(event.target.value)} />
                    <br/><br/>
                    <label>Last Name</label><br/>
                    <input type='textbox' value={textField2} style={style.textField1}  onChange={(event)=>setTextField2(event.target.value)}/>
                    <br/><br/>
                    
                    <div onChange={(event)=>setRadioOption(event.target.value)}>
                        <input type="radio" value="Male" name="gender"/> Male
                        <input type="radio" value="Female" name="gender"/> Female
                    </div>
                    <br/>

                    <label>Skills:</label><br/>
                    <select onChange={(event)=>setCheckedValue(event.target.value)}>
                        <option value="react">ReactJs</option>
                        <option value="react-native">ReactNative</option>
                        <option  value="html">HTML</option>
                        <option value="css">CSS</option>
                    </select>
                    <br/><br/>
                    
                    <label>Choose Date of Birth:</label><br/>
                    <DatePicker selected={selectedDate} onChange={(date)=>setSelectedDate(date)}/>
                    <br/><br/>

                    <input type="submit" value="Submit" className='btn btn-primary' />
                </form>

        </div>
    )
}
const style={
    textField1:{
        borderColor:'black',
        borderRadius:4
    },
    container:{
        display:'flex',
        alignItem:'center',
        border: '2px solid black',
        justifyContent:'center',
        height:500,
        width:300,
        borderRadius:4,
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    },
  
}
export default HomeForm;