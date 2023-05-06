import React,{useState} from "react";

 let Skill_temp = (props)=>{
        let [x,setX] =useState(0)
    let [y,setY] =useState(0)
    let[total,settotal]=useState(0)
    function check(e){
        
    //    console.log(e)
    //    console.log(e.nativeEvent.layerY )
        setX(e.nativeEvent.layerX/10)
        setY(e.nativeEvent.layerY/10)
        // settotal((x+y)/10 )
    }
    return(
        <div className="skill mb-2" style={{
            transform:` rotateX(${x}deg) rotateY(${y}deg)`
        }} onMouseMove={check} onMouseOut={()=>{setX(0);setY(0)}}>
            
            <div className="logo">
            <img src={props.logo} alt="" className="" /></div>
            <div className="corde-base">
                <div className="codebase_head">
                    <div className="">
                    <span className="color-grey "></span>
                    <span className="color-yellow "></span>
                    <span className="color-red "></span>
                    </div>
                    <span className="silver-color">{props.title}</span>

                </div>
                <div className="codebase_body text-center">

                    <span style={{color:"red"}}>{props.start_code}</span><span>{props.codeinner}</span><span style={{color:"red"}}>{props.end_code}</span>
                </div>
            </div>

        </div>
    )
 }

 export default Skill_temp