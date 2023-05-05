import React,{useState} from "react";
import Skill_temp from "./Skill_temp"
import skill from '../skill.json'
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
                {skill.language.map((language)=>{
                   return  <Skill_temp title={language.title} start_code={language.start_code} codeinner={language.codeinner} end_code={language.end_code} logo={language.logo} />
                })}
            

             </div>
             </div>
        </div>
        </div>
    )
}

export default Skill