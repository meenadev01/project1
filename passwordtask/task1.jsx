import React, { useState } from 'react'
import './task1.css'
function Task1() {
   const[upper,setUpper]=useState(false)
   const[lower,setLower]=useState(false)
   const[symbol,setsym]=useState(false)
   const[number,setNUm]=useState(false)
   const [leng,setLength] = useState('')
   const [len,setLen] = useState('')

   var s=''
   var a=""
   var upp ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   var low="abcdefghijklmnopqrstuvwxyz"
   var sym="/+-*"
   var num="0123456789"



   if(upper){
     a+=upp
   }
   if(lower){
    a+=low
   }
   if(symbol){
    a+=sym
   }
   if(number){
    a+=num
   }
    
    
//  console.log(a);
 
  
  
  const handlesub = () => {
    for (var i=0;i<leng;i++){
      var randomNumbers = Math.floor(Math.random () *a.length)
      setLen(s+=a[randomNumbers])
    }
    
  };

      
   
  return (
    <div className='parent-pass'>
      <div className="child-pass">
        <div className='mun'>
          <h2>Password Generate</h2>
          <br />
<input type="text"   className='mi' onChange={(e)=>setLength(e.target.value)}/>
<button className='bu' onClick={handlesub}>Create</button>
</div>
<br />
<div className='box'>
<input type="checkbox"className='num' onChange={(e) => setUpper(e.target.checked)} />
<label className='lop'>Uppercase</label>
<br />
<input type="checkbox" className='num' onChange={(e) => setLower(e.target.checked)} />
<label className='lop'>Lowercase</label>
<br />
<input type="checkbox" className='num'  onChange={(e) => setsym(e.target.checked)} />
<label className='lop'>Symbol</label>
<br />
<input type="checkbox"  className='num' onChange={(e) => setNUm(e.target.checked)} />
<label className='lop'>numeric</label>
<br />
<h4 className='pu'>Your password is: {len}</h4>
</div>
</div>
    </div>
  )
}

export default Task1