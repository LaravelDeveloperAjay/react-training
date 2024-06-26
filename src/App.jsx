import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import{ BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
  import Home from './Home'
  import Services from './Services'
  import Aboutus from './AboutUs'
  import Casestudies from './Casestudies'
  import Blog from './Blog'
  import Contactus from './Contactus'
  


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>  
         <Route path='/Aboutus' element={<Aboutus/>}></Route>
         <Route path='/Casestudies' element={<Casestudies/>}></Route>
         <Route path='/Blog' element={<Blog/>}></Route>
         <Route path='/Contactus' element={<Contactus/>}></Route>
      </Routes>
    </Router>

    </>
    
  )
}

export default App
