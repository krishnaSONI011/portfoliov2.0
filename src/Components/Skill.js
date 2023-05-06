import React,{useState,useEffect} from "react";
import Skill_temp from "./Skill_temp"

import axios from 'axios'


let Skill =()=>{
    let [data,setData] =useState([])
  useEffect(()=>{
    let url ="https://raw.githubusercontent.com/krishnaSONI011/portfoliov2.0/main/src/skill.json"
    axios.get(url).then((response)=>{setData(response.data)
           
        console.log(response.data)
    })
  },[])
   return(
       
        <div style={{
            backgroundColor:"black",
           
        }}>
        <div className="container">
            <div className="flex">
             <div className="timeline"> <div className="bullet"></div> </div>
             <span className="silver-color  p-2 ">Skills/&gt;</span>
             <div className="forskill p-3 ">
                
                {data.language?.map((language)=>{
                   return  <Skill_temp title={language.title} start_code={language.start_code} codeinner={language.codeinner} end_code={language.end_code} logo={language.logo} position={language.position} />
                })}
            

             </div>
             </div>
        </div>
        </div>
    )
}

export default Skill