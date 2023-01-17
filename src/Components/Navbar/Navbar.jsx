import React from 'react'
import brandLogo from '../../Assets-img/road-fc.png'
import './navBar.css'
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-color">
    <div class="container pb-5">
      <a class="navbar-brand" href="#">
        <img src={brandLogo} alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 text-center mb-lg-0">
          
          <li class="nav-item navbar-items">
            <a class="nav-link navbar-links" href="#">HOME</a>
          </li>
          <li class="nav-item navbar-items">
            <a class="nav-link navbar-links" href="#">TOKENOMICS</a>
          </li>
          <li class="nav-item navbar-items">
            <a class="nav-link navbar-links" href="#">ECOSYSTEM</a>
          </li>
          <li class="nav-item navbar-items">
            <a class="nav-link navbar-links" href="#">NFTs CARD</a>
          </li>
          <li class="nav-item navbar-items">
            <a class="nav-link navbar-links" href="#">GAME</a>
          </li>
          <li class="nav-item navbar-items">
            <a class="nav-link navbar-links" href="#">ROADPOOL</a>
          </li>
          <li class="nav-item navbar-items">
            <a class="nav-link navbar-links" href="#">ROADMAP</a>
          </li>
          <li class="nav-item navbar-items ">
            <a class="nav-link navbar-links" href="#">PRESALE</a>
          </li>
        </ul>

        <div className="social-links d-flex justify-content-center align-items-center">
          <a href="#" className='socialLinksIcons'><FaTelegramPlane className='socialLinks-Icons' /></a>
          <a href="#" className='socialLinksIcons'><FaTwitter className='socialLinks-Icons'/></a>
          <a href="#" className='socialLinksIcons'><FaGithub className='socialLinks-Icons'/></a>
          <a href="#" className='socialLinksIcons'><FaYoutube className='socialLinks-Icons'/></a>
        </div>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar