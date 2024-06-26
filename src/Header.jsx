import React from 'react'
import { Link } from "react-router-dom"

function header() {
  return (
   <div className='header '> 
  
<div className=' flex  '>
  <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/smallogo-1.png" alt="" className=' mx' />
  <ul className='flex text-white text-2xl gap-11 ml-28'>
   <Link to={'/'}> <li>Home</li></Link>
   <Link to={'/Services'}> <li className=' z1'>Services
    <div className="mega-box">
      <div className="content">
        <div className="row">
          <b>DISCOVER OUR DESGIN & MARKETING SERVICES<i class="bi bi-arrow-right"></i></b>
          <ul  className='mega-links'>
            <li>Website Desgin</li>
            <li>Web Development</li>
            <li>Wordpress Development</li>
            <li>Mobile Application</li>
            <li>eCommerce Solutions</li>
            <li> Shopify Web Development</li>
            <li> salesforce integration</li>
            <li> Custom web development</li>
            <li> software development</li>
            <li> Api integration</li>
          </ul>
        </div>
        <div className="row">
          <b>DISCOVER OUR DESGIN & MARKETING SERVICES<i class="bi bi-arrow-right"></i></b>
          <ul  className='mega-links'>
            <li>Website Desgin</li>
            <li>Web Development</li>
            <li>Wordpress Development</li>
            <li>Mobile Application</li>
            <li>eCommerce Solutions</li>
            <li> Shopify Web Development</li>
            <li> salesforce integration</li>
            <li> Custom web development</li>
            <li> software development</li>
            <li> Api integration</li>
          </ul>
        </div>
        <div className="row">
          <b>DISCOVER OUR DESGIN & MARKETING SERVICES<i class="bi bi-arrow-right"></i></b>
          <ul  className='mega-links'>
            <li>Website Desgin</li>
            <li>Web Development</li>
            <li>Wordpress Development</li>
            <li>Mobile Application</li>
            <li>eCommerce Solutions</li>
            <li> Shopify Web Development</li>
            <li> salesforce integration</li>
            <li> Custom web development</li>
            <li> software development</li>
            <li> Api integration</li>
          </ul>
        </div>
      </div>
    </div>
   </li>
   
   </Link>
   <Link to={'/Aboutus'}> <li>About Us</li></Link>
   <Link to={'/Casestudies'}> <li>Case studies</li></Link>
   <Link to={'/Blog'}> <li>Blog</li></Link>
    <li><button className='p-1'>Request a Quote</button></li>
    <li><i className="bi bi-list text-4xl "></i></li>
   
  </ul>

    
  
    
</div>
<div> <ul>
<Link to={'/Contactus'}><li className='text-2xl text-white text-center'>Contact us</li></Link>
</ul></div>
   </div>
  )
}

export default header