import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Contactus() {
  return (
    <div>
        <Header/>
        <div className='contact'>
        <div className='text-center text-white  '> 
      <div className=' absolute mt-44 mx-96'>
     <b className='text-7xl'>Contact Us</b>
     <p className='text-4xl mt-16'>Home-  Contact Us</p>
     </div>
     </div>
        </div>
        <div className="container-fluid mt-10">
            <div className="row">
                <div className="col-md-6 shadow-2xl p-4">
                    <div className=' p-10 cont'>
                        <p className=' text-green-400 text-2xl'>SITE IT NOW- An Award Winning Web Design and Digital Marketing Agency</p>
                        <b className='text-4xl'>
                        Let’s Achieve Greatness Together!</b> <br />
                         <from>
                            <input type="text" placeholder='Full Name' /> <br />
                            <input type="text" placeholder='Company Name' /> <br />
                            <input type="email" placeholder='Email' /> <br />
                            <input type="number" placeholder='(_)_-_' /> <br />
                            <input type="text" placeholder='Project Details'  /> <br />
                            <input type="text" placeholder='How did you hear about us?' />
                            <button className='c1'>submit</button>
                         </from>
                    </div>
                </div>
                <div className="col-md-6 cursor-pointer shadow-2xl">
                    <div>
                    <div className=' text-white c2 '> 
      <div className=' absolute text-center mt-4'>
     <b className=' text-3xl'>Connect with us to create an impactful web presence today!</b>
     <p className='text-2xl mt-16'>1016 W.jackson Boulevard,
        chicago,il 60607 <br />
        contact@sitenow.com
     </p>
     <button className='text-blue-950 bg-white p-2 shadow-xl text-2xl'><i class="bi bi-telephone"></i>(312) 442-0352</button>
     <a href="">  <button className='text-blue-950 bg-white p-2 shadow-xl text-2xl'><i class="bi bi-geo-alt-fill"></i>view on the map</button></a>
     </div>
     </div>
     <div className=' flex'>
     <div className='mt-4 c3'>
        <b className='text-2xl'>SITE IT NOW Reviews</b>
        <ul>
            <li className=' border-b-2 border-red-900 mt-4'>5.0<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> 10 Reviews</li>
            <li className=' border-b-2 border-red-900 mt-4'>Scheduling<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
            <li className=' border-b-2 border-red-900 mt-4'>Quality<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
            <li className=' border-b-2 border-red-900 mt-4'>Cost<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>
            <li className=' border-b-2 border-red-900 mt-4'>Would Refer<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></li>

        </ul>
        <button className=' bg-black text-white p-2 mt-4'>powered by clutch</button>
     </div>
     <div className=' p-10' >
        <img src="https://www.siteitnow.com/wp-content/uploads/2023/10/designrush.jpg" alt="" />
     </div>
     </div>
                    </div>
                </div>
            </div>
        </div>
        <div><p className=' text-3xl text-center mt-6'>Recognized as Top Web Development & Digital Marketing Agency</p></div>
        <div className='flex mt-10 mx-44 gap-10'>
            <img src="https://www.siteitnow.com/wp-content/uploads/elementor/thumbs/part3-qnymlrlg34llayyteij2zgng5042g0hmcgai2czvuo.png" alt="" />
            <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/top-web-development-company-by-good-firms.png" alt="" />
            <img src="https://www.siteitnow.com/wp-content/uploads/2023/09/top-software-developers-by-clutch-1.png" alt="" />
            <img src="https://www.siteitnow.com/wp-content/uploads/2023/10/expertis.png" alt="" />
        </div>
        <div className='mt-10 c4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d23765.513572334374!2d-87.652764!3d41.878033!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1719309492524!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer/>
    </div>
  )
}

export default Contactus