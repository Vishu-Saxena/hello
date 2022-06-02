import React, { useState } from 'react'
export default function Form() {
  const [inpValue , setInpValue] = useState("");
  const handleOnChange = (e)=>{
    setInpValue(e.target.value);
  }
  const func1 = ()=>{
    setInpValue(parseInt(inpValue)+500);
  }
  const func2 = ()=>{
    setInpValue(parseInt(inpValue)+1000);
  }
  const func3 = ()=>{
    setInpValue(parseInt(inpValue)+5000);
  }
  return (
    <div>
       <div className="container">
      <form>
        <div className="mb-3">
          <input type="number" name="num2" id="num"value={inpValue} className="form-control" placeholder='enter your number' onChange={handleOnChange}/>
        </div>
        <div className='btnbx'>
          <p>ADD</p>
          <button type="button" className="btn btn-primary btn-md" onClick={func1}>500</button>
          <button type="button" className="btn btn-primary btn-md mx-3" onClick={func2}>1000</button>
          <button type="button" className="btn btn-primary btn-md" onClick={func3}>5000</button>
        </div>
      </form>
    </div>
    </div>
  )
}
