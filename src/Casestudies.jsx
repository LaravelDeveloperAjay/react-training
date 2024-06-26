import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Casestudies() {
  return (
    <div>
      <Header/>
     <div className='casesstudies'>
     <div className='text-center text-white  '> 
      <div className=' absolute mt-44 mx-72'>
     <b className='text-7xl'>Case Studies</b>
     <p className='text-4xl mt-16'>Home-  
     Case Studies</p>
     </div>
     </div>
     </div>
     <div className="container-fluid mt-10 text-center">
      <b className='text-4xl'>From Vision To Success: Discover Our Achievements</b>
      <div className='mx- text-xl c1 mt-5'>
  <button>ALL</button>
  <button>WEB DESIGN</button>
  <button>WEB DEVELOPMENT</button>
  <button>e-COMMERCE DEVELOPMENT</button>
  <button>MOBILE APP DEVELOPMENT</button>
</div>

     </div>
     <div className="container mt-10">
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
<div className="container mt-10">
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
<div className="container-fluid mt-20 but">
        <div className="col-md-12 text-center">
          <b className='text-5xl' >Ready To Establish An Impactful Digital Presence?</b>
          <p className=' text-blue-950 text-2xl mt-10'>Discuss Your Goals With Our Web Design and Marketing Experts Today!</p>
          <button className='text-white bg-blue-950  p-4 text-xl'>REQUEST A FREE QUOTE</button>
          <button className=' text-blue-950 bg-white  p-4 text-xl'><i className="bi bi-telephone">CALL US NOW</i></button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Casestudies