import React, {useState} from 'react'
// import '../App.css'


function Inputfield(props) {
    const [inputText, setInputText] = useState('')
    const addHandle = ()=>{
        props.addList(inputText)
        setInputText('')
      }
  return (
    <div>
        <input type="text" value={inputText} onChange={(e)=>{
          setInputText(e.target.value)  
        }} className='inputField' placeholder='Enter your task'/>
        <button className='addButton' onClick={addHandle}>+   </button>
    </div>
  )  
}

export default Inputfield