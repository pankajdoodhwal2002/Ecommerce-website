import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newletter" />
                <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1 "
                  placeholder="Your email address..."
                  aria-label="Your email address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 text-white" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className='footer-links d-flex flex-column'>
                <address className='text-white fs-7'>Hno: 277 Near Vill Chopal, <br /> 
                  Sonipat, Haryana <br />
                  Pincode: 131103
                </address>
                <a href="tel:- +91 8258962361" className='text-white mt-1 d-block mb-1 '>Tel:- +91 8258962361</a>
                <a href="mailto: pankajdaskljf@gmail.com" className='text-white mt-1 d-block mb-1 '>Mail To:- pankajdaskljf@gmail.com</a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="" className='text-white fs-5'>
                    <BsLinkedin/>
                  </a>
                  <a href="" className='text-white fs-5'>
                    <BsGithub/>
                  </a>
                  <a href="" className='text-white fs-5'>
                    <BsInstagram/>
                  </a>
                  <a href="" className='text-white fs-5'>
                    <BsYoutube/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms ans Conditions</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About US</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &Copy; {new Date().getFullYear()};
                Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer