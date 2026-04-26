import React, {Component, useState} from "react";
import Navbar from "./KPnavbar";

const Home=()=>{
 const [numer1,setNumer1]=useState(0);
 const [numer2,setNumer2]=useState(0);
 const [wynik,setWynik]=useState(0);

 const handleNumer1 = (e) => {
    setNumer1(Number(e.target.value));
  };
  const handleNumer2 = (e) => {
    setNumer2(Number(e.target.value));
  };
  const handleOblicz=()=>{
    setWynik(numer1+numer2);

  }
  return(
    <div>
        <Navbar/>

        <label><input type="number" value={numer1} onChange={handleNumer1}/></label>
        <label><input type="number" value={numer2} onChange={handleNumer2}/></label>

        <button onClick={handleOblicz}>Policz</button>
        <p>Wynik: {wynik}</p>
        
    </div>
  )
  

  
}
export default Home;