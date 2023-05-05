import React,{useState} from "react";
import Skill_temp from "./Skill_temp"
let Skill =()=>{

    return(
        <div style={{
            backgroundColor:"black",
           
        }}>
        <div className="container">
            <div className="flex">
             <div className="timeline"> <div className="bullet"></div> </div>
             <span className="silver-color  p-2 ">Skills/&gt;</span>
             <div className="forskill p-3">
             <Skill_temp/>
             
             

             </div>
             </div>
        </div>
        </div>
    )
}

export default Skill