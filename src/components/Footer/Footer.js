import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <a href='https://instagram.com/'>
        <p> <i class="fa-brands fa-instagram"></i>
          <div className='socialhandle'>Instagram</div>
        </p>
      </a>
      <a href='https://facebook.com/'>
        <p> <i class="fa-brands fa-square-facebook"></i>
        <div className='socialhandle'>Instagram</div>
        </p>
      </a>
      <a href='https://twitter.com/home'>
        <p> <i class="fa-brands fa-square-twitter"></i>
        <div className='socialhandle'>Instagram</div>
        </p>
      </a>
      <a href='https://www.youtube.com/'>
        <p> <i class="fa-brands fa-youtube"></i>
        <div className='socialhandle'>Instagram</div>
        </p>
      </a>
    </div>
  )
}
