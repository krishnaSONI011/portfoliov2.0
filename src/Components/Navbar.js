import React from 'react'

export default function Navbar() {
  return (
    <div className='Nav'>
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
