import React, { useState } from "react";
import { motion } from "framer-motion";
import {TypeAnimation}from "react-type-animation"
let Home = () => {


    let [onoverk, setoverk] = useState(true)
    let [onoveri, setoveri] = useState(true)
    let [onovers, setovers] = useState(true)
    let [onoverh, setoverh] = useState(true)
    let [onovern, setovern] = useState(true)
    let [onovera, setovera] = useState(true)
    let [onoverso, setoverso] = useState(true)
    let [onovero, setovero] = useState(true)
    let [onoverno, setoverno] = useState(true)
    let [onoverio, setoverio] = useState(true)
    let [onoverr, setoverr] = useState(true)



    return (
        <div className=" container start ">
            <div className="flex">
                <div className="timeline"> <div className="bullet"></div> </div>
                <span className="silver-color  pl ">Start/&gt;</span>
                <motion.div className="allabout p-3"
                    initial={{ opacity: 0, scale: .5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: .3,
                        scale: {
                            type: "spring",
                            damping: 5
                        }
                    }}

                >
                    <div className="about-me">
                        <h1>Hi, my Name is
                            <span> </span>
                            <span className="purple-color" onMouseOver={() => {
                                setoverk(false)
                            }} onMouseOut={() => {
                                setoverk(true)
                            }}>{onoverk ? "K" : "✰"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setoverr(false)
                            }} onMouseOut={() => {
                                setoverr(true)
                            }}>{onoverr ? "R" : "◄"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setoveri(false)
                            }} onMouseOut={() => {
                                setoveri(true)
                            }}>{onoveri ? "I" : "☻"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setovers(false)
                            }} onMouseOut={() => {
                                setovers(true)
                            }}>{onovers ? "S" : "¶"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setoverh(false)
                            }} onMouseOut={() => {
                                setoverh(true)
                            }}>{onoverh ? "H" : "&"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setovern(false)
                            }} onMouseOut={() => {
                                setovern(true)
                            }}>{onovern ? "N" : "$"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setovera(false)
                            }} onMouseOut={() => {
                                setovera(true)
                            }}>{onovera ? "A" : "@"}</span>
                            <span> </span>
                            <span className="purple-color" onMouseOver={() => {
                                setoverso(false)
                            }} onMouseOut={() => {
                                setoverso(true)
                            }}>{onoverso ? "S" : "*"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setovero(false)
                            }} onMouseOut={() => {
                                setovero(true)
                            }}>{onovero ? "O" : "-"}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setoverno(false)
                            }} onMouseOut={() => {
                                setoverno(true)
                            }}>{onoverno ? "N" : "="}</span>
                            <span className="purple-color" onMouseOver={() => {
                                setoverio(false)
                            }} onMouseOut={() => {
                                setoverio(true)
                            }}>{onoverio ? "I" : "@"}</span>
                        </h1>
                    </div>
                    <div className="develop">
                        <motion.h1
                         initial={{ opacity: 0}}
                         animate={{opacity:1}}
                         transition={{
                            duration:1,
                            delay:2
                         }}
                        ><TypeAnimation
                            sequence={[
                                // Same String at the start will only be typed once, initially
                                'I am Web Developer',
                                1000,
                                'I am UI/UX Designer',
                                1000,
                                'I am Freelancer',
                                1000,
                                'I am Web app Developer',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '1em' }}
                            repeat={Infinity}
                        /></motion.h1>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Home;