import React, {useEffect} from 'react'
import "./Skils.css"
import img1 from "../../assets/men.png"
import { FcNext } from 'react-icons/fc';


function Skils() {
 
  return (
    <div className='skils'>
      <div  className="skils__top container">
        <div className="section-title">
          <h2>Biz haqimizda</h2>
          <p>Toshkent axborot texnologiyalari Universiteti talabasiman dasturlash sohasini yaxshi o'rganish bilan birga ish ham o'rganib kelganman.</p>
        </div>
      </div>
      <div className="skils__bottom container">
        <div  className="skils__card">
          <img src={img1} alt="" />
        </div>
        <div className="skils__card1">
          <div className="content">
            <h3>Web Dasturchi</h3>
            <p><i>Bog'lanish uchun</i></p>
          </div>
          <div className="content__card">
            <div className="clas__cart">
              <ul>
                <li> <FcNext /> <strong>Tug'ilgan yil:</strong> <span>3 Dekabr 2005</span></li>
                <li> <FcNext /> <strong>Telefon raqam:</strong> <span>+998 94 828 52 28</span></li>
                <li> <FcNext /> <strong>Mamlakat:</strong> <span>Namangan, Uzbekistan</span></li>
              </ul>
            </div>
            <div className="clas__cart">
              <ul>
                <li> <FcNext /> <strong>Yosh:</strong> <span>18</span></li>
                <li> <FcNext /> <strong>Daraja:</strong> <span>Junior</span></li>
                <li> <FcNext /> <strong>PhEmailone:</strong> <span>shohruhmirzo@.gmail.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skils