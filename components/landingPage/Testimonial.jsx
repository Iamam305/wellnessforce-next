
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BiRightArrowAlt } from 'react-icons/bi'

const tesimonials = [
    {
        name: "Aubrey Marcus",
        img: 'https://storage.googleapis.com/wellness-force-media/2021/09/Aubrey-2nd-Option-for-Blog-and-Email.jpg',
        review: `“Both of my interviews with Josh on Wellness Force were phenomenal. He's truly one of the best Podcast Hosts in the game and he deserves so much credit for that. Thank you for all that you do.”`,
        episode: 'https://wellnessforce.com/aubrey-marcus-owning-the-day-open-relationships-skipping-breakfast/'
    },
    {
        name: "Robb Wolf",
        img: 'https://storage.googleapis.com/wellness-force-media/2021/09/A1VD2IXWcL._SX450_-300x300.jpg',
        review: `“It was such a huge honor to be on Wellness Force. Josh is doing such incredible work and is so good at what he's doing. It is mind-blowing that I played a part in Wellness Force growth.”`,
        episode: 'https://wellnessforce.com/robb-wolf-electrolytes/'
    },

    {
        name: "Christine Hassler",
        img: 'https://storage.googleapis.com/wellness-force-media/2021/09/U7tLi3LN-300x300.jpg',
        review: `“Wellness Force was one of my favorite podcasts because it did not feel like an interview; it was more of a conversation with Josh. What I love: Josh does his research and he is incredibly curious.”`,
        episode: 'https://wellnessforce.com/christine-hassler/'
    },
    

]
const Testimonial = () => {
    const SlidSettings = {
        className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1.60,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          }
        },
    ]
      };
    return (
       <>
       <Slider {...SlidSettings} className=" m-auto flex flex-col">
           
            {tesimonials.map((testimonial, index) => (
                <>
                <div className="flex flex-col lg:flex-row w-5/6 lg:w-3/4  m-auto justify-between items-center p-12 bg-white rounded-xl" key={index}>
                    <Image src={testimonial.img} width={'300'} height={'300'} layout="raw" className="rounded-full border-8 border-gray-300 border-solid h-60"/>
                    <div className="flex flex-col justify-around pl-7">
                        <h3 className='text-3xl font-semibold'>{testimonial.name}</h3>
                        <p className='text-lg'>{testimonial.review}</p>
                        <a className='text-lg font-bold flex text-blue-500 items-center' href={testimonial.episode}>Listen to episode <BiRightArrowAlt /></a>
                    </div>
                </div>
                </>
            ))}
           
        

        </Slider>
       </>

      
    )
}

export default Testimonial