import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Home() {
  var settings = {
    dots: true,
    infinite: true,
  
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <Header/>
        <div className=' bg-blue-900 home'>
        <div className=' text-white text-center '>
<p className=' text-3xl'>Chicago’s Premier Web Design & Development Company Since 2009
</p>
<b className=' text-7xl'>
Your Trusted Brand-First Digital Agency</b>
<div className=' flex mx-96 mt-24'>
  <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/top-software-developers-by-clutch-1.png" alt="" />
  <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/top-web-development-company-by-good-firms.png" alt="" />
  <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/best-digital-marketing-agencies-by-designrush.png" alt="" />
</div>
<div className=' mt-5 text-3xl'>
<b >WHAT WE DO</b>
</div>
</div>
</div>
        <div className="container-fluid mt-10 a1">
            <div className="row">
                <div className="col-md-6 box">
                <div className=' mt-16 mx-16'>
                     <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/web-design-company.jpg" alt="" />
                     </div>
                   
                </div>
                <div className="col-md-6 mt-11">
                  <b className=' text-green-400 text-xl'>ABOUT US</b> <br />
                  <b className=' text-4xl'>SITE IT NOW - A LEADING WEB DESIGN AGENCY</b>
                  <p>We are an award-winning web design company that offers various  <br /> services to elevate your brand’s digital presence including <br /> website designing, custom web development, mobile app <br /> development, eCommerce development, software development, <br /> Shopify website development, logo designing, web hosting, SEO,  <br />social media marketing, and much more. <br /> <br />
                  Our mission is to empower brands and drive their organic growth <br /> by creating a strong and reliable online presence because we <br /> believe that every business has the potential to achieve <br /> incredible success by using the opportunities that the digital <br /> world has to offer.</p>
                  <button className=' bg-blue-950 text-white p-3 mt-10'>REQUEST A FREE QUOTE  <i className="bi bi-chevron-compact-right"></i></button>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-blue-950 mt-10">
          <p className=' text-3xl text-white text-center'>
          EXPLORE OUR SERVICES</p>
          <div className="container mt-10 ">
            <div className="row">
<div className="col-md-4">
<div className=' bg-white p-5 rounded-2xl'>
    <img src="https://www.siteitnow.com/wp-content/uploads/2023/11/web-design-services.png" alt="" className=' mx-16' /> <br /> 
    <b className=' text-blue-950 text-2xl text-center'>Web Design Services</b> <br /> <br />
    <p>We craft bespoke web designs that stand <br /> out and are tailored to attract more  <br />customers while helping your brand</p> <br /> <br />
    <i className="bi bi-box-arrow-up-right text-blue-950 text-2xl cursor-pointer">Read more...</i>
  </div>
</div>
<div className="col-md-4">  <div className=' bg-white p-5 rounded-2xl'>
    <img src="https://www.siteitnow.com/wp-content/uploads/2023/11/website-development.png" alt="" className=' mx-16' /> <br />
    <b className=' text-blue-950 text-2xl text-center'>Website Development</b> <br /><br />
    <p>We develop top-notch websites using<br /> the latest technologies and advanced <br />features to ensure high performance.</p>  <br /> <br />
    <i className="bi bi-box-arrow-up-right text-blue-950 text-2xl cursor-pointer">Read more...</i>
  </div></div>
<div className="col-md-4">  <div className=' bg-white p-5 rounded-2xl'>
    <img src="https://www.siteitnow.com/wp-content/uploads/2023/11/mobile-app-development.png" alt="" className=' mx-16' /> <br />
    <b className=' text-blue-950 text-2xl text-center'>Mobile App Development</b> <br /> <br />
    <p>We combine creativity and innovation to<br /> craft mobile apps that deliver engaging, <br />user-friendly digital experiences.</p>  <br /> <br />
    <i className="bi bi-box-arrow-up-right text-blue-950 text-2xl cursor-pointer">Read more...</i>
  </div></div>
            </div>
          </div>
          <div className="container mt-10">
            <div className="row">
<div className="col-md-4">
<div className=' bg-white p-5 rounded-2xl'>
    <img src="https://www.siteitnow.com/wp-content/uploads/2023/11/seo-services.png" alt="" className=' mx-16' /> <br />
    <b className=' text-blue-950 text-2xl text-center'>SEO Services</b> <br /> <br />
    <p>Increase your brand's visibility, drive <br />organic traffic, and see concrete results <br />with our ROI-driven SEO services.</p>  <br /> <br />
    <i className="bi bi-box-arrow-up-right text-blue-950 text-2xl cursor-pointer">Read more...</i>
  </div>
</div>
<div className="col-md-4">  <div className=' bg-white p-5 rounded-2xl'>
    <img src="https://www.siteitnow.com/wp-content/uploads/2023/11/ecommerce-solutions.png" alt="" className=' mx-16' /> <br />
    <b className=' text-blue-950 text-2xl text-center'>eCommerce Solutions</b> <br /> <br />
    <p>We develop advanced, custom-tailored,<br /> and user-friendly e-commerce websites<br />that drive your brand's retail success..</p>  <br /> <br />
    <i className="bi bi-box-arrow-up-right text-blue-950 text-2xl cursor-pointer">Read more...</i>
  </div></div>
<div className="col-md-4">  <div className=' bg-white p-5 rounded-2xl'>
    <img src="https://www.siteitnow.com/wp-content/uploads/2023/11/software-development.png" alt="" className=' mx-16' /> <br />
    <b className=' text-blue-950 text-2xl text-center'>Software Development</b> <br /> <br />
    <p>We offer exceptional and cost-effective<br />software development services to <br />individuals and small to large size <br />businesses.</p>  <br />
    <i className="bi bi-box-arrow-up-right text-blue-950 text-2xl cursor-pointer">Read more...</i>
  </div></div>
  
            </div>
          </div>
          <div className='text-center p-6 a2'>
            <button className='text-white h- p-4 text-xl'>REQUEST A FREE QUOTE</button>
            <button className=' text-blue-950 bg-white  p-4 text-xl'><i className="bi bi-globe"></i>BROWSE MORE SERVICES</button>
          </div>
             </div>
             <div className='text-center p-5 text-4xl'><b>We Excel By Leveraging Cutting-Edge Tools And Technologies</b></div>
             <Slider {...settings} className=' overflow-hidden slider'>
        <div>
          <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/php.jpg" alt="" />
        </div>
        <div>
          <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/woocommerce.png" alt="" />
        </div>
        <div>
          <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/microsoft.net.png" alt="" />
        </div>
        <div>
          <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/html5.jpg" alt="" />
        </div>
        <div>
          <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/css3.jpg" alt="" />
        </div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/laravel.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/code-igniter.jpg" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/shopify.jpg" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/salesforce-1.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/reactjs.jpg" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/nodejs.jpg" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/python.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/ai.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/drupal.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/rails.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/opencart.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/magento.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/ionic.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/cakephp.png" alt="" /></div>
        <div><img src="https://www.siteitnow.com/wp-content/uploads/2023/09/wpf.png" alt="" /></div>
       
      </Slider>
          
             <div className="container-fluid bg-blue-950 text-white p-5 mt-5">
              <p className='text-center text-5xl'>WHETHER SMALL OR LARGE, WE’VE GOT YOUR BUSINESS COVERED!</p>
              <p className='text-center text-2xl mt-5'>It won’t take long, just spare 30 seconds and fill in your expectations.</p>
              <div className='text-center p-6 a2 mt-5'>
            <button className='text-white  p-4 text-xl'>REQUEST A FREE QUOTE</button>
            <button className=' text-blue-950 bg-white  p-4 text-xl'><i className="bi bi-telephone">CALL US NOW</i></button>
          </div>
             </div>
             <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                <div className=' mt-16 mx-16'>
                     <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/wordpress-development-services.jpg" alt="" />
                     </div>
                </div>
                <div className="col-md-6 mt-16">
                  <div>
                  <b className=' text-green-400 text-xl'>
                  WORDPRESS DEVELOPMENT</b> <br />
                  <b className=' text-4xl'>Expert WordPress Solutions For Your Business</b>
                  <p>Site It Now has more than a decade of expertise in providing highly <br />customized and user-friendly WordPress website development<br />services. We design your websites from scratch tailoring it to your<br /> business requirements, and integrating the same with WordPress<br /> backend. We offer a range of custom services, ranging from <br />modifying and developing custom plugins for personalized digital<br /> 
                  experiences to regular website maintenance and support to ensure <br /> ongoing smooth functionality. As a leading WordPress development<br /> company, we will help you maximize the potential of your web <br /> presence, creating a website that truly defines your business as a <br />brand.</p> 
                  <button className=' bg-blue-950 text-white p-3 mt-10'>REQUEST A FREE QUOTE  <i className="bi bi-chevron-compact-right"></i></button>
                  </div>
                </div>
              </div>
             </div>
             <div className="container-fluid">
              <div className="row">
              <div className="col-md-6 mt-16">
                  <div className='mx-5'>
                  <b className=' text-green-400 text-xl'>
                  SHOPIFY WEBSITE DESIGN SERVICES</b> <br />
                  <b className=' text-4xl'>Custom Shopify Solutions For <br /> Your Business</b>
                  <p>At Site It Now, our team of experts is committed to delivering <br />custom Shopify solutions to ensure that your website meets your<br />preferences and business expectations. We understand that the<br /> success of your business depends upon a reliable and attractive<br /> web presence that offers seamless functionality and ROI-driven<br />outcomes while reflecting your brand image, that is why we offer<br /> 
                  highly personalized services while crafting your website on Shopify. <br />From custom theme development for your online store to<br /> responsive designs and strategic optimization for smooth user <br /> experiences, with Shopify, we create e-commerce websites that are <br />high-performing and visually stunning integrated with modern <br />graphics and advanced features.</p> 
                  <button className=' bg-blue-950 text-white p-3 mt-10'>REQUEST A FREE QUOTE  <i className="bi bi-chevron-compact-right"></i></button>
                  </div>
                </div>
                <div className="col-md-6">
                <div className=' mt-16 mx-16'>
                     <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/shopify-website-design-services.png" alt="" />
                     </div>
                </div>
              </div>
             </div>
             <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                <div className=' mt-28 mx-16'>
                     <img src="https://www.siteitnow.com/wp-content/uploads/2024/05/web-development-services.png" alt="" />
                     </div>
                </div>
                <div className="col-md-6 mt-16">
                  <div>
                  <b className=' text-green-400 text-xl'>
                  CUSTOM WEB DEVELOPMENT SERVICES</b> <br />
                  <b className=' text-4xl'>Professional Web Development Solutions</b>
                  <p>Transform your digital presence with our expert custom website <br />development services, carefully tailored to your businesst<br />requirements. We understand that every brand has a unique identity<br /> and deserves a personalized web presence that truly represents its<br /> voice. That is why we focus on delivering quality and customized <br />voice. That is why we focus on delivering quality and customized<br /> 
                  coding for a smoother user experience. Having more than 10 years of<br /> expertise in creating job board websites, hospital portals, restaurant<br /> company, we will help you maximize the potential of your web <br /> much more, we build highly customized websites and UI designs from<br />scratch. Our expertise lies in exceptional front-end and back-end <br /> development across various technologies like PHP, Dot Net, Ruby On <br />Rails, and much more.</p> 
                  <button className=' bg-blue-950 text-white p-3 mt-10'>REQUEST A FREE QUOTE  <i className="bi bi-chevron-compact-right"></i></button>
                  </div>
                </div>
              </div>
             </div>
             <div className="container-fluid">
              <div className="row">
              <div className="col-md-6 mt-16">
                  <div className=''>
                  <b className=' text-green-400 text-xl'>
                  SEO SERVICES</b> <br />
                  <b className=' text-4xl'>Your Local SEO Company</b>
                  <p>Site It Now is a local SEO agency dedicated to empowering your brand with <br />expert SEO solutions for its digital growth. We prioritize your brand’s visibility,<br />driving organic traffic, and building a unique identity to help it stand out<br /> amongst its competitors. Our team of experts employs advanced SEO tactics<br />and tools, customized to your specific goals, to enhance your brand’s reach<br />and optimize user experience. <br /> <br />
                  Our approach is ROI-driven, ensuring your business gets the highest website <br />rankings and reap maximum benefits. By utilizing white hat SEO techniques,<br /> we allow your business to grow with ethical practices for sustainable, long- <br /> term success with quality link-building and content creation. Experience the <br />transformative power of SEO with us, where you’re not just a customer but a <br />future success story..</p> 
                  <button className=' bg-blue-950 text-white p-3 mt-10'>REQUEST A FREE QUOTE  <i className="bi bi-chevron-compact-right"></i></button>
                  </div>
                </div>
                <div className="col-md-6">
                <div className=' mt-16 mx-16'>
                     <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/local-seo-company.png" alt="" />
                     </div>
                </div>
              </div>
             </div>
             <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                <div className=' mt-16 mx-16'>
                     <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/salesforce-integration.png" alt="" />
                     </div>
                </div>
                <div className="col-md-6 mt-16">
                  <div>
                  <b className=' text-green-400 text-xl'>
               
SALESFORCE CONSULTING SERVICES</b> <br />
                  <b className=' text-4xl'>Advanced Salesforce Integration</b>
                  <p>We are your trusted partner when it comes to getting the most out of your <br />Salesforce implementation with seamless dataflow and communication. Site<br />It Now provides unmatched value, skilled guidance, and streamlined<br /> integration on the Salesforce service cloud to ensure the continued success<br />of your brand. We have years of experience in providing customized <br />Salesforce integration services, ranging from sales and marketing to project<br /> 
                  accounting, project management, resource management, and more, allowing<br /> you to efficiently plan, execute, and analyze business projects. With our<br /> Salesforce data expertise, we ensure that you can track all your expenses and <br />revenues easily while enhancing marketing, customer service, client<br />relationships, and sales performance, for the overall operational efficiency of<br /> your business.</p> 
                  <button className=' bg-blue-950 text-white p-3 mt-10'>REQUEST A FREE QUOTE  <i className="bi bi-chevron-compact-right"></i></button>
                  </div>
                </div>
              </div>
             </div>
             <div className="container-fluid bg-blue-950 a3 p-5">
<p className='text-center text-white p-5 text-4xl'>Explore Our Portfolio</p>
<div className='mx- text-xl'>
  <button>ALL</button>
  <button>WEB DESIGN</button>
  <button>WEB DEVELOPMENT</button>
  <button>e-COMMERCE DEVELOPMENT</button>
  <button>MOBILE APP DEVELOPMENT</button>
</div>
<div className="container mt-4">
  <div className="row">
    <div className="col-md-4">
      <div>
        <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/client1.png" alt="" />
      </div>
    </div>
    <div className="col-md-4">
      <div>
        <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/client2.png" alt="" />
      </div>
    </div>
    <div className="col-md-4">
      <div>
        <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/client4.png" alt="" />
      </div>
    </div>
  </div>
</div>
<div className="container mt-4">
<div className="row">
    <div className="col-md-4">
      <div>
        <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/client5.png" alt="" />
      </div>
    </div>
    <div className="col-md-4">
      <div>
        <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/client3.png" alt="" />
      </div>
    </div>
    <div className="col-md-4">
      <div>
        <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/client6.png" alt="" />
      </div>
    </div>
  </div>
</div>
</div>
              <Footer/>
                 </div>
  )
}

export default Home