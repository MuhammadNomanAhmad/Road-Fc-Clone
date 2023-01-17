import React from 'react'
import './Cards.css'
import growthImg from '../../Assets-img/growth.png'
import mintImg from '../../Assets-img/mint.png'
import lvImg from '../../Assets-img/lv.png'
import mysteryBoxImg from '../../Assets-img/mystery-box.png'
import nftStalkingImg from '../../Assets-img/nft-stalking.png'
import nftMarketImg from '../../Assets-img/nft-market.png'
import comingSoonImg from '../../Assets-img/coming soon.png'

const Cards = () => {
  return (
    <div className="bgImage">
      <div className="container">
        <div className="row pt-5 pb-3 d-flex justify-content-end ">
          <div className="col-lg-2 col-md-3 col-3 ">
         
            <button className=" poolbtn">Connect</button>
          </div>    
        </div>
        <div className="row justify-content-around ">
          <div className="col-lg-3 col-md-8 col-10">
          <div className="poolBox text-center">
            <img src={growthImg} alt="growthImg not found"  className='mt-4'/>
            <h5 className='card-heading'>Staking & Point</h5>
            <p className='card-paragraph'>Welcome to the Road pool.Here you are able to benefit from staking tokens and receiving</p>
            <button className='card-btn'>Enter</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-8 col-10">
          <div className="poolBox text-center">
            <img src={mintImg} alt="growthImg not found"  className='mt-4'/>
            <h5 className='card-heading'>Mint</h5>
            <p className='card-paragraph'>With uncertainity, comes excitement, You never know what you are going to get.Try your luck!</p>
            <button className='card-btn'>Mint</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-8 col-10">
          <div className="poolBox text-center">
            <img src={lvImg} alt="lvImg not found"  className='mt-4'/>
            <h5 className='card-heading'>Breed</h5>
            <p className='card-paragraph'>Select two fighters who will perform the breed to get higher level card in exchange.</p>
            <button className='card-btn'>Enter</button>
          </div>
          </div>
          
        </div>
        <div className="row  flex-wrap py-4 justify-content-around">

<div className="col-lg-3 col-md-8 col-10">
  <div className="card-box text-center">
    <img src={mysteryBoxImg} alt="mysteryBoxImg not found" className='pt-4 ' />
    <h5 className='text-white' style={{fontSize:"1.5rem",lineHeight:"3"}}>Mystery Box</h5>
    <div className="para d-flex justify-content-center">
    <div className="col-11 text-center  ">
      <p className='' style={{color:"#5e606e"}}>Limited Mystery boxes waiting to be unboxed! What fighter will you get ?</p>
    </div> 
    </div>
    <div className=" d-flex justify-content-center">
    <div className="col-10 d-grid gap-2">
      <button className="card-button">Mint</button>
    </div>
    </div>
    
  </div>
</div>
<div className="col-lg-3 col-md-8 col-10">
  <div className="card-box text-center">
    <img src={nftStalkingImg} alt="nftStalkingImg not found" className='pt-4 ' />
    <h5 className='text-white' style={{fontSize:"1.5rem",lineHeight:"3"}}>NFT Staking</h5>
    <div className="para d-flex justify-content-center">
    <div className="col-6 text-center  ">
      <p className='' style={{color:"#5e606e"}}>Browse your personal Staking of NFTs</p>
    </div> 
    </div>
    <div className=" d-flex justify-content-center">
    <div className="col-10 d-grid gap-2">
      <button className="card-button">Enter</button>
    </div>
    </div>
    
  </div>
</div>
<div className="col-lg-3 col-md-8 col-10">
  <div className="card-box text-center">
    <img src={nftMarketImg} alt="nftMarketImgnot found" className='pt-4 cMImg1' />
    <img src={comingSoonImg} alt="comingSoonImg not found" className='pt-4 cMImg2 '/>
    <h5 className='text-white' style={{fontSize:"1.5rem",lineHeight:"3"}}>NFT Market</h5>
    <div className="para d-flex justify-content-center">
    <div className="col-6 text-center  ">
      <p className='' style={{color:"#5e606e"}}>Buy and Sell large collection of NFTs</p>
    </div> 
    </div>
    <div className=" d-flex justify-content-center">
    <div className="col-10 d-grid gap-2">
      <button className="card-button">Show Market</button>
    </div>
    </div>
    
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Cards