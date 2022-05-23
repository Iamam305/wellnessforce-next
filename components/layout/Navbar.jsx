import { useState } from "react";
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    if (typeof window !== "undefined") {
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
          setColorchange(true);
        }
        else{
          setColorchange(false);
        }
     };
     window.addEventListener('scroll', changeNavbarColor)
    }
    return (
        <>
            <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <div className="flex justfy-content-space-between align-items-center max-width ">
                    <div className="logo">
                    <Image src={"https://storage.googleapis.com/wellness-force-media/2021/10/4f7201b1-logodesktop-1.svg"} width="150" height="76" />
                    </div>

                    <ul className="flex">
                        <li>
                            <a href="https://wellnessforce.com/store-products/" target="_blank">STORE</a>
                        </li>
                        <li>
                            <Link href={'/'}>PODCAST</Link>
                        </li>
                        <li>
                            <Link href={'/about'}>ABOUT</Link>
                        </li>
                        <li>
                            <Link href={'/blog'}>BLOG</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* style jsx  */}


            <style jsx>{`
              .navbar.colorChange{
                  background-color: #000;
              }
              .navbar{
                position: fixed;
                width: 100%;
                height: 80px;
                z-index:999;
              }

              .logo{
                 height: 76px;
                 
              }
              ul{
                list-style: none;
              }

              li{
                  padding: 13px 20px;
                  font-weight: 600;
                  font-size: 1rem;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
              }

              li:hover{
                  color:#3fb65f;
              }
            `}</style>

        </>
    )
}



export default Navbar