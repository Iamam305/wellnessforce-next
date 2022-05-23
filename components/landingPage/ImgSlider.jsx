import Slider from "react-slick";
import Image from "next/Image"

const Images = [
    {
        img:"https://storage.googleapis.com/wellness-force-media/2021/09/paul-check-josh-trent-heaven-house-1024x614.png"
    },
    {
        img:"https://storage.googleapis.com/wellness-force-media/2021/09/PAUL-CHECK-JOSH-TRENT-2017-1024x614.png"
    }, {
        img:"https://storage.googleapis.com/wellness-force-media/2021/09/MIKE-SALEMI-JOSH-TRENT-AUSTIN-2019-1024x614.png"
    }, {
        img:"https://storage.googleapis.com/wellness-force-media/2021/09/2019-PALEO-FX-JOSH-TRENT-1024x614.png"
    }, {
        img:"https://storage.googleapis.com/wellness-force-media/2021/07/NoPath-Copy-29@2x-min-1024x614.jpg"
    }, {
        img:"https://storage.googleapis.com/wellness-force-media/2021/07/NoPath-Copy-27@2x-min-1024x614.jpg"
    }, {
        img:"https://storage.googleapis.com/wellness-force-media/2021/07/NoPath-Copy-25@2x-min-1024x614.jpg"
    }, {
        img:"	https://storage.googleapis.com/wellness-force-media/2021/07/NoPath-Copy-26@2x-min-1024x614.jpg"
    }
]

const ImgSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrow:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
        ]
      };
  return (
    <>
    <Slider {...settings} className=" m-auto flex flex-col py-28">
    {Images.map((image, index) => (
        <Image key={index} src={image.img} width="506" height="304"/>
    ))}
    </Slider>
    
    </>
  )
}

export default ImgSlider