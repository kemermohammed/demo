"use client";

import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [user, setUser] = useState(null);
 
  {/* Authentication */}

    {/* User Authentication */}
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
  
           {/* Logout Handler Function */}
    const handleLogout = async () => {
      try {
        await fetch('http://localhost:3003/logout', {
          method: 'GET',
          credentials: 'include', // Pass cookies for authentication
        });
        setUser(null);
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

{/* Authentication */}

  

  return (
    <nav className='flex-between w-full'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/beka.png'
          alt='logo'
          width={150}
          height={50}
          className='object-contain'
        />
      </Link>

      {/* Desktop Navigation */}
      <div className='mt-8 sm:flex hidden'>

        {/* Conditional rendering of navlinks */}

      {user ?(
        <div className='flex gap-3 md:gap-5'>
        <Link href='/services' className='black_btn transition duration-700'>
          Services
        </Link>

        <button 
        type='button' 
        className='outline_btn transition duration-500'
        onClick={handleLogout} 
        >
          Sign Out
        </button>

        <Link href='/'>
          <Image
            src= {user.image}
            width={38}
            height={40}
            className='rounded-full'
            alt='profile'
          />
        </Link>
      </div>
      ) : (
        <>
            <button
              type='button'
              key={''}
              className='black_btn'
              onClick={handleGoogleLogin}
            >
              Sign in
            </button>
          </>
      )}    
      </div>

      {/* Mobile Navigation */}
      <div className='mt-6 sm:hidden flex relative items-center'>
      {user ?(
          <div className='flex'>
            <Image
              src= {user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/services'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Services
                </Link>

                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    handleLogout();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
      ): (
          <>
                <button
                  type='button'
                  key={''}
                  className='black_btn'
                  onClick={handleGoogleLogin}
                >
                  Sign in
                </button>
          </>
      )}
      </div>
    </nav>
  );
};

export default Nav;
