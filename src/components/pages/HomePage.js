import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/bg.png'

export default function HomePage() {
    return (
        <div className="text-center" style = {divstyle}>
            <h1 className="main-title home-page-title">Welcome 
            <br/>
            <br/>
            <br/>
            Welcome Information
            
            </h1>
     
        </div>
    )
}
const divstyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}