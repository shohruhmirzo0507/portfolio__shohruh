import React from 'react'
import "./Portfolio.css"
import belis from "../../assets/bellissimo.png"
import coin from "../../assets/coin.png"
import faq from "../../assets/faq.png"
import ipad from "../../assets/ipad.png"
import searchimage from "../../assets/searchimage.png"
import weather from "../../assets/weather.png"
import uzum from "../../assets/uzum.png"
import youtube from "../../assets/youtube.png"
import qr from "../../assets/qr.png"
import { TbShare3 } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';


function Portfolio() {
  return (
    <div className='bg'>
     
      <br />
      <div className="portfolio container">
        <div className="soft__top">
          <div className="soft__titol">
            <h2>Portfolio</h2>
            <p>Kompaniya veb sayti uchun frontend ishlarni bajarish.
              HTML, CSS va JavaScriptdan foydalanib, veb sahifalar yaratish.</p>
          </div>
        </div>
        <br />
        <div className="portfolio__card">
          <div className="portfolio__wrap">
            <img src={belis} alt="" />
            <div className="portfolio-links">
              <a href={belis}> <AiOutlinePlus /> </a>
              <a href="https://shohruhmirzo-bellisimo.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={coin} alt="" />
            <div className="portfolio-links">
              <a href={coin}> <AiOutlinePlus /> </a>
              <a href="https://coins-shohruxmirzo.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={faq} alt="" />
            <div className="portfolio-links">
              <a href={faq}> <AiOutlinePlus /> </a>
              <a href="https://faq-shohruhmirzo.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={ipad} alt="" />
            <div className="portfolio-links">
              <a href={ipad}> <AiOutlinePlus /> </a>
              <a href="https://applei-pad.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={searchimage} alt="" />
            <div className="portfolio-links">
              <a href={searchimage}> <AiOutlinePlus /> </a>
              <a href="https://search-image-eta.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={weather} alt="" />
            <div className="portfolio-links">
              <a href={weather}> <AiOutlinePlus /> </a>
              <a href="https://weather-app-eight-ivory.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={uzum} alt="" />
            <div className="portfolio-links">
              <a href={uzum}> <AiOutlinePlus /> </a>
              <a href="https://shohruhmirzo-sayt.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={youtube} alt="" />
            <div className="portfolio-links">
              <a href={youtube}> <AiOutlinePlus /> </a>
              <a href="https://youtube-two-red.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
          <div className="portfolio__wrap">
            <img src={qr} alt="" />
            <div className="portfolio-links">
              <a href={qr}> <AiOutlinePlus /> </a>
              <a href="https://qr-codes-hazel.vercel.app"> <TbShare3 /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio