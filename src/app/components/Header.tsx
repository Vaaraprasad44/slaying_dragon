'use client';

import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between w-full">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="text-lg md:text-xl font-bold tracking-widest">
          Studiox
        </h1>
      </div>

      {/* Right: Icons + Buttons */}
      <div className="hidden md:flex items-center gap-6">
        {/* Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z" 
                fill="#fff"
              />
            </svg>
          </a>

          <a href="https://discord.com" target="_blank" aria-label="Discord">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M18.9419 5.55541C17.6473 4.94967 16.263 4.50945 14.8158 4.25879C14.638 4.58013 14.4304 5.01234 14.2872 5.35616C12.7488 5.1248 11.2244 5.1248 9.71431 5.35616C9.57116 5.01234 9.35878 4.58013 9.17947 4.25879C7.73069 4.50945 6.34478 4.95129 5.05016 5.5586C2.43887 9.5046 1.73099 13.3526 2.08493 17.1459C3.81688 18.4393 5.49534 19.225 7.14547 19.7391C7.55291 19.1784 7.91628 18.5823 8.22931 17.9541C7.63313 17.7276 7.06209 17.448 6.52256 17.1235C6.66569 17.0174 6.80572 16.9066 6.94097 16.7925C10.2318 18.3317 13.8074 18.3317 17.0589 16.7925C17.1958 16.9066 17.3358 17.0174 17.4774 17.1235C16.9362 17.4496 16.3637 17.7292 15.7675 17.9557C16.0805 18.5823 16.4423 19.18 16.8513 19.7407C18.503 19.2266 20.1831 18.4409 21.915 17.1459C22.3303 12.7485 21.2056 8.93585 18.9419 5.55541ZM8.67766 14.8131C7.68978 14.8131 6.87963 13.8908 6.87963 12.7678C6.87963 11.6447 7.67247 10.7209 8.67766 10.7209C9.68284 10.7209 10.493 11.6431 10.4757 12.7678C10.4772 13.8908 9.68284 14.8131 8.67766 14.8131ZM15.3223 14.8131C14.3344 14.8131 13.5243 13.8908 13.5243 12.7678C13.5243 11.6447 14.3171 10.7209 15.3223 10.7209C16.3275 10.7209 17.1376 11.6431 17.1203 12.7678C17.1203 13.8908 16.3275 14.8131 15.3223 14.8131Z" 
                fill="#fff"
              />
            </svg>
          </a>

          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5806 7.19355C21.3548 6.32258 20.6774 5.64516 19.8065 5.41935C18.2581 5 12 5 12 5C12 5 5.74194 5 4.19355 5.41935C3.32258 5.64516 2.64516 6.32258 2.41935 7.19355C2 8.77419 2 12 2 12C2 12 2 15.2581 2.41935 16.8065C2.64516 17.6774 3.32258 18.3548 4.19355 18.5806C5.74194 19 12 19 12 19C12 19 18.2581 19 19.8065 18.5806C20.6774 18.3548 21.3548 17.6774 21.5806 16.8065C22 15.2581 22 12 22 12C22 12 22 8.77419 21.5806 7.19355ZM10 15V9L15.1935 12L10 15Z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="h-5 border-l border-gray-400"></div>

        {/* Buttons */}
        <a href="#" className="text-sm hover:underline">
          Sign in
        </a>
        <a
          href="#"
          className="bg-white text-black text-sm px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Enter App →
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-6 flex flex-col items-center space-y-4 md:hidden z-10">
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#contacts" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
    )}
    </header>
  );
};

export default Header;