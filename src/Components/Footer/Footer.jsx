import React from 'react'
import './Footer.css'
import brandLogoImg from '../../Assets-img/road-fc.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail} from "react-icons/md";

const Footer = () => {
  return (
    <div className="bgColor">
      <div className="container-fluid">
        <div className="row pt-4 d-flex justify-content-center">
          <div className="col-2">
            <img src={brandLogoImg} alt="brandLogoImg not found" />
          </div>
          
        </div>
        <div className="row justify-content-center ">

          <div className="col-10 py-4 d-flex flex-wrap">
            <span className='footer-links'>Home</span>
            <span className='footer-links'>topkenomics</span>
            <span className='footer-links'>topkenomics</span>
            <span className='footer-links'>ecosystem</span>
            <span className='footer-links'>nfts card</span>
            <span className='footer-links'>game</span>
            <span className='footer-links'>road pool</span>
            <span className='footer-links'>ROADMAP</span>
            <span className='footer-links'>audit</span>
          </div>
          </div>
          <div className="row">
            
            <div className="socialLinks d-flex justify-content-center align-items-center ">
          <a href="#" className='footer-socialLinksIcons'><FaTelegramPlane className='socialLinks-Icons' /></a>
          <a href="#" className='footer-socialLinksIcons'><FaTwitter className='socialLinks-Icons'/></a>
          <a href="#" className='footer-socialLinksIcons'><FaGithub className='socialLinks-Icons'/></a>
          <a href="#" className='footer-socialLinksIcons'><FaYoutube className='socialLinks-Icons'/></a>
          <a href="#" className='footer-socialLinksIcons'><MdEmail className='socialLinks-Icons' /></a>

        </div>
            
          </div>
          <div className="row text-center">
            <div className=" col-12">
              <p className='text-white footer-copyright'>mma@roadfc.io</p>
              
            </div>
          </div>
          <div className="row text-center">
            <div className=" col-lg-12 col-sm-12 col-12 ">
              <p className='text-white footer-copyright'>ⓒ Copyright 2022 RoadFC. All Rights Reserved.</p>
              
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer