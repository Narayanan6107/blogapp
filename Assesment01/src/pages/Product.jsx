import React from 'react'
import { useNavigate} from 'react-router'

const Product = () => {
    const nav=useNavigate();

  return (
    <>
    
    <div className="main">
    <div className="sub">
    <button className="prodbutton" onClick={()=>nav("/")}>←Back to home</button>
    <div className="details">
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Product