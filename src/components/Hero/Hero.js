
import React, {useState} from "react";
import "./Hero.css"
import TestModal from "../TestModal/TestModal";



     
export default function Hero () {

const [open, setOpen]=useState(false)

function toggleModal (){
    setOpen(!open)

}
    const openModal =() =>
        setOpen(true)
    return(
        <div className="Hero">
            <button style={{marginTop: 100}} onClick={openModal}>Open Modal</button>
            <div style={{height:"100%", textAlign:"center", margin:0, padding:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
                {open &&<TestModal onClose={toggleModal} title={"gomez"}/>}
            <h1 style={{fontSize:"5rem", color:"#ffffff", textAlign:"center", margin:0, padding:0, display:"flex", alignItems:"center", justifyContent:"center" }}>LEW POMORZE</h1>
            </div>

        </div>

        
    )
}
