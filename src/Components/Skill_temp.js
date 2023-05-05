import React,{useState} from "react";
import logo from "../images/python_logo.png"
 let Skill_temp = ()=>{
        let [x,setX] =useState(0)
    let [y,setY] =useState(0)
    let[total,settotal]=useState(0)
    function check(e){
        if(x >200){
            setX("100")
        }
    //    console.log(e)
    //    console.log(e.nativeEvent.layerY )
        setX(e.nativeEvent.layerX/2)
        setY(e.nativeEvent.layerY/2)
        settotal((x+y)/10 )
    }
    return(
        <div className="skill" style={{
            transform:`rotate3d(${x},${y},0,${total}deg)`
        }} onMouseMove={check} onMouseOut={()=>{setX(0);setY(0)}}>
            
            <div className="logo">
            <img src={logo} alt="" className="" /></div>
            <div className="corde-base">
                <div className="codebase_head">
                    <div className="">
                    <span className="color-grey "></span>
                    <span className="color-yellow "></span>
                    <span className="color-red "></span>
                    </div>
                    <span className="silver-color">#Python</span>

                </div>
                <div className="codebase_body text-center">

                    <span style={{color:"red"}}>print(</span><span>"Hello world"</span><span style={{color:"red"}}>)</span>
                </div>
            </div>

        </div>
    )
 }

 export default Skill_temp