import React from 'react'
import star1 from "../../img/big_l_star1.png"
import star2 from "../../img/big_l_star2.png"
import tallStar1 from "../../img/tall_star1.png"
import tallStar2 from "../../img/tall_star2.png"
import ornament1 from "../../img/ornament1.png"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <img src={star1} className="star-outlined-1" alt="a purple star"/>
            <img src={star2} className="star-outlined-2" alt="a purple star"/>
            <img src={tallStar1} className="star-filled-1" alt="a purple star"/>
            <img src={tallStar2} className="star-filled-2" alt="a purple star"/>
            <img src={tallStar1} className="star-filled-3" alt="a purple star"/>
            <img src={ornament1} className="ornament-1" alt="a purple star"/>
            <div className="title-box">
                <h1 className="my-name">JUSTIN LAMPE</h1>
                <h2 className="my-title">Web Developer</h2>
            </div>
            
        </div>
    )
}

export default Home
