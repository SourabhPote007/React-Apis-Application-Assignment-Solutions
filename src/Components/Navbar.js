import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default function Navbar() {
    return (
    <div>
    <ul className='Nav' >
        <li> <Link to="/Home" style={{ textDecoration : "none",color : "white"}}>Home</Link> </li>
        <li> <Link to="/Post" style={{ textDecoration : "none",color : "white"}}>Posts</Link> </li>
    </ul>
    </div>
)
}