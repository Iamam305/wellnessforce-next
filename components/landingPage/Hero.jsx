
import Image from "next/image"
import { GoLocation } from 'react-icons/go';

const Hero = () => {
    return (
        <>
            <section className="hero-parent">
                <div className="hero flex justfy-content-space-evenly align-items-center max-width flex-wrap ">
                    <div className="hero_text flex-column flex align-items-start justfy-content-space-between">
                        <h2>LIVE LIFE <span>WELL</span></h2>
                        <p>We Help Humans Discover Physical & Emotional Intelligence To Thrive In Our Modern World</p>
                        <button><GoLocation /> START HERE</button>


                    </div>
                    <div className="hero-img-parent justify-content-center">

                        <Image src={"	https://storage.googleapis.com/wellness-force-media/2022/02/cd5cf999-cutout-fade.png"}
                            width="413" height="550" className="hero-img " layout="raw" style={{ width: '75%', height: 'auto' }} />
                    </div>

                </div>
            </section>


    <style jsx>{`

    .hero-parent{
      background-image: url("https://storage.googleapis.com/wellness-force-media/2022/02/1027d72c-header2022.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
     
      
     
    }
    .hero{
      min-height: 800px;
      height: 100%;
     max-width:1100px;
     padding:20px;
     width:95%;
    }


    .hero_text {
      color: #FFFFFF;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
      width:50%;
    }


    .hero_text h2{
      font-size: 95px;
      font-weight: 800;
      line-height:1;
    }
    .hero_text p{
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 60px;
      margin-top: 20px;
    }

    .hero_text h2 span{
      color:#3fb65f;
    }

    .hero_text button{
      padding: 15px 30px;
      background-color: #34A8C6;
      border:none;
      color: #FFFFFF;
    }
    .hero-img-parent{
      width:50%;
      display:flex;
    }

    .hero-img Image{
      width:75% !important;
      display:block;
      position:static !important;
    }


    @media (max-width:900px) {
      .hero-parent{
        padding-top:50px;
      }
      .hero_text{
        position:absolute;
        z-index:2;
        width:95%;
        align-self: flex-end;
        padding-bottom:100px;

      }
      .hero-img-parent{
        width:95%;
        justify-content: flex-end;

      }
    }
    }
    
    `} </style>
        </>
    )
}

export default Hero