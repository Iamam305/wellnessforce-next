import React from 'react'
import Image from "next/image"


const CrossSell = () => {
  return (
    <>
      <div className="crossSell-parent">
        <div className="flex justify-content-center align-items-center crossSell sm-flex-column">
          <div className="crossSellImg flex justify-content-center">
            <Image src={'https://storage.googleapis.com/wellness-force-media/2021/12/samplem21@2x-289x300.png'} layout='raw' width={289} height={300} />
          </div>

          <div className="crossSellText">
            <h2>Stressed Out Lately?</h2>
            <p><b>Take a deep breath with the M21™ wellness guide:</b> a simple yet powerful 21 minute morning system that melts stress and gives you more energy through 6 science-backed practices and breathwork.</p>
            <button> <a href="https://wellnessforce.com/#m21_homepage_v1"><b>GET YOUR FREE COPY NOW</b></a></button>
          </div>
        </div>
      </div>

      <style jsx>{`
      .crossSell-parent{
        background-color: #F4F5F5;
      }
     .crossSell{
         max-width:1000px;
         margin:auto;
         padding:80px 0px;
        

     }
     .crossSellImg{
         width:40%;
     }

     .crossSellText{
         width:60%;
     }

     .crossSellText h2{
      color: #34A8C6;
      font-size:22px;
      margin-bottom:12px;
      line-height:1;
     }

     .crossSellText p{
       font-size:17px;
       line-height:2rem;
       font-weight:500;
       margin-bottom:20px;

     }
     .crossSellText button{
       width:100%;
       padding:15px;
       border:none;
       background:#34A8C6;
       color:#fff;
       
     }

     .crossSellText button a{
       width:100%;
     }

      `}</style>
    </>
  )
}

export default CrossSell