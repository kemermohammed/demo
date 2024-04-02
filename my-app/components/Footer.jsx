'use client';

import { footerLinks, socialMedia, activeLinks } from "../constants";
import Link from "next/link";
import {useState, useEffect} from "react";

const Footer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('http://localhost:3003/login/success', {
        credentials: 'include', // Pass cookies for authentication
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Fetch user error:', error);
    }
  };

         {/* Login Handler Function */}
         const handleGoogleLogin = () => {
          window.location.href = 'http://localhost:3003/auth/google/callback';
        };



  return (
    <footer id="contact-us" className= 'mt-24 w-full'>
        <div className='flex justify-between max-sm:gap-5 max-lg:gap-20 gap-30 flex-wrap font-sans'>
          {user ? (
            <div>
            <div>
              {
                activeLinks.map((item, index) =>(
                  <div key={index}>
                    <h1 className="blue_gradient font-semibold text-2xl">{item.title}</h1>
                    <ul>
                      {item.links.map((link) => (
                      <li
                        className='mt-3  desc hover:text-[#FF6452] hover:duration-300'
                        key={link.name}>
                        <a href={link.link}>{link.name}</a>
                      </li>
                      ))}
            </ul>
                  </div>   
                ))
              }
            </div>
        </div>
          ):(
            <div>
            <div>
              {
                activeLinks.map((item, index) =>(
                  <div key={index}>
                    <h1 className="blue_gradient font-semibold text-2xl">{item.title}</h1>
                      
                      <Link href= '/' ><p className='mt-3  desc hover:text-[#FF6452] hover:duration-300'>Home</p></Link>
                      <h1 onClick= {handleGoogleLogin}
                      className='mt-3  desc hover:text-[#FF6452] hover:duration-300 cursor-pointer'>Sign in</h1>

                     
                  </div>   
                ))
              }
            </div>
        </div>
          )}
          

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='blue_gradient font-semibold text-2xl'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3  desc hover:text-[#FF6452] hover:duration-300'
                    key={link.name}

                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    

      <div className=''><h1 className='mt-16 border-t-[2px] border-t-[#FF6452]'></h1></div>

      <div className='mt-2 flex justify-center md:flex-row flex-col-reverse items-center w-[100%] md:gap-20  gap-5 mb-4'>
        <div className='flex justify-center items-center cursor-pointer'>
          <div className='flex justify-center items-center'>
            <img
              src= '/assets/icons/copyright.png'
              alt='copyright sign'
              className='rounded-full justify-center items-center m-0 h-[30px] w-[30px] max-sm:w-[13px] max-sm:h-[13px]'
            />
          </div>
          <div className='flex '>
            <p className=' text-xl'>Copyright {new Date().getFullYear()} imfecs</p>
          </div> 
        </div>

        <div className='flex items-center gap-5'>
            {socialMedia.map((icon, index) => (
              <a href= {icon.link} target="_blank" key={index} >
              <div
                className='flex justify-center items-center w-8 h-8 bg-white rounded-full cursor-pointer hover:bg-sparktext'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
              </a>
            ))}
          </div> 
      </div>
    </footer>
  )
}

export default Footer;