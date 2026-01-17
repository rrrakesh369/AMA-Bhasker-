import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Body from "./Body"
import Profile from "./Profile"
import Login from "./Login"
import Industries from "./Industries"
import AboutUs from "./AboutUs"
import Careers from "./Careers"
import Services from "./Services"
import ContactUs from "./ContactUs"

function App() {

  return (
    <>    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  {/* <NavBar/> */}
     
    </>
  )
}

export default App
