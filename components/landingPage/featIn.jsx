import React from 'react'
import Image from "next/image"

const FeatIn = () => {
  return (
    <>
    <div className="flex flex-wrap justfy-content-space-evenly max-width featIn">
        <Image src={'https://storage.googleapis.com/wellness-force-media/2021/07/onnit-logo.png'} width={127} height={34}/>
        <Image src={'https://storage.googleapis.com/wellness-force-media/2021/07/spartan-race-shop-2_myshopify_com_logo.png'} width={130} height={30}/>
        <Image src={'https://storage.googleapis.com/wellness-force-media/2021/07/CHEK-Inst-MASTER-logo-1.png'} width={165} height={34}/>
        <Image src={'https://storage.googleapis.com/wellness-force-media/2021/07/Robb-Wolf-logo.png'} width={127} height={34}/>
        <Image src={'https://storage.googleapis.com/wellness-force-media/2021/07/sealfit-logo.png'} width={127} height={34}/>
        <Image src={'https://storage.googleapis.com/wellness-force-media/2021/07/logo.png'} width={127} height={34}/>

    </div>

    <h3 className='flex justify-content-center'>Honoring the intelligence in us all</h3>
    <style jsx>{`
    .featIn{
        padding:60px 0px;
    }
    h3{
        padding:140px 0px;
        background:url('https://storage.googleapis.com/wellness-force-media/2022/02/a642c177-2022-honoring.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-align: center;
        color: #FFFFFF;
        font-size: 30px;
        font-weight: 500;
    }
    `}</style>
    </>
  )
}

export default FeatIn