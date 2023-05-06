import React,{useEffect,useState} from 'react'

export default function Navbar() {
  let[top,setTop] =useState(0)
  let scroll 
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    scroll =window.scrollY
   
  })
  let handleScroll=()=>{
        let new_scroll =window.scrollY
        if(new_scroll > scroll){
            setTop(-70)
            scroll =window.scrollY
        }
        else{
          setTop(0)
          scroll =window.scrollY

        }
  }
  return (
    <div className='Nav' style={{
      top:`${top}px`
    }}>
    <div className='flex justify-cotant-between align-item-center'>

      <div className="barnd-name"><h1 className='title'><span className='purple-color size'>&lt;</span>KrishnA<span className='purple-color size'>/&gt;</span></h1></div>
      <div className="menu">
        <ul className='flex justify-cotant-space'>
            <li><a href='#' className='remove-underline-a  nav-links'>Start<span className='silver-color'>/&gt;</span></a></li>
            <li><a href='#' className='remove-underline-a  nav-links'>Skill<span className='silver-color'>/&gt;</span></a></li>
            <li><a href='#' className='remove-underline-a  nav-links'>Work<span className='silver-color'>/&gt;</span></a></li>
            <li><a href='#' className='remove-underline-a  nav-links'>Contact<span className='silver-color'>/&gt;</span></a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}
