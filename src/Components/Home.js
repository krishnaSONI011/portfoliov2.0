import React ,{useState}from "react";

let Home = () => {
   
    
    let [onoverk ,setoverk] =useState(true)
    let [onoveri ,setoveri] =useState(true)
    let [onovers ,setovers] =useState(true)
    let [onoverh ,setoverh] =useState(true)
    let [onovern ,setovern] =useState(true)
    let [onovera ,setovera] =useState(true)
    let [onoverso ,setoverso] =useState(true)
    let [onovero ,setovero] =useState(true)
    let [onoverno ,setoverno] =useState(true)
    let [onoverio ,setoverio] =useState(true)
    let [onoverr,setoverr]=useState(true)
   
    
   
    return (
        <div className=" container start ">
            <div className="flex">
                <div className="timeline"> <div className="bullet"></div> </div>
                <div className="allabout p-3">
                    <span className="silver-color">Start/&gt;</span>
                    <div className="about-me">
                        <h1>Hi, my Name is 
                            <span> </span>
                            <span className="purple-color" onMouseOver={()=>{
                               setoverk(false)
                            }} onMouseOut={()=>{
                                setoverk(true)
                            }}>{onoverk ? "K": "✰"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setoverr(false)
                            }} onMouseOut={()=>{
                                setoverr(true)
                            }}>{onoverr ? "R": "◄"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setoveri(false)
                            }} onMouseOut={()=>{
                                setoveri(true)
                            }}>{onoveri ? "I": "☻"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setovers(false)
                            }} onMouseOut={()=>{
                                setovers(true)
                            }}>{onovers ? "S": "¶"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setoverh(false)
                            }} onMouseOut={()=>{
                                setoverh(true)
                            }}>{onoverh ? "H": "&"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setovern(false)
                            }} onMouseOut={()=>{
                                setovern(true)
                            }}>{onovern ? "N": "$"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setovera(false)
                            }} onMouseOut={()=>{
                                setovera(true)
                            }}>{onovera ? "A": "@"}</span>
                            <span> </span>
                            <span className="purple-color" onMouseOver={()=>{
                               setoverso(false)
                            }} onMouseOut={()=>{
                                setoverso(true)
                            }}>{onoverso ? "S": "*"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setovero(false)
                            }} onMouseOut={()=>{
                                setovero(true)
                            }}>{onovero ? "O": "-"}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setoverno(false)
                            }} onMouseOut={()=>{
                                setoverno(true)
                            }}>{onoverno ? "N": "="}</span>
                            <span className="purple-color" onMouseOver={()=>{
                               setoverio(false)
                            }} onMouseOut={()=>{
                                setoverio(true)
                            }}>{onoverio ? "I": "@"}</span>
                            </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;