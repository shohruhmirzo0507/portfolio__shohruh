import React from 'react'
import "./Main.css"
import img from "../../assets/men.png"
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineHome, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsFillFileTextFill } from 'react-icons/bs';
import { BiLogoLinkedin, BiLogoTelegram } from 'react-icons/bi';
import Skils from '../skils/Skils';
import Portfolio from '../portfolio/Portfolio';


function Main() {
  return (
    <div>
      <div className="main">
        <div className="sidebar__right">
          <div className="sidebar__top">
            <img className='sidebar__img' src={img} alt="" />
            <h2>Shohruhmirzo</h2>
            <ul className='icons'>
              <li> <AiOutlineTwitter /> </li>
              <li> <FaFacebookF /> </li>
              <li> <AiOutlineInstagram /> </li>
              <li> <BiLogoTelegram /> </li>
              <li> <BiLogoLinkedin /> </li>
            </ul>
          </div>
          <div className="sidebar__bottom">
            <button className='side__btn'> <AiOutlineHome /> Bosh sahifa</button>
            <button className='side__btn'> <AiOutlineUser /> Biz haqimizda</button>
            <button className='side__btn'> <BsFillFileTextFill /> Portfolio</button>
          </div>

        </div>

        <div className="sidebar__left">
          <div className="hero-container">
            <div className="mount">
            <h1>Shohruhmirzo No'monjonov</h1>
            <p>Frontend Dasturchi</p>
            </div>
          
          </div>
            <Skils/>
            <Portfolio/>

        </div>
      </div>


    </div>
  )
}

export default Main