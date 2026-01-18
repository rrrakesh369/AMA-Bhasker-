import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Industries from "./components/Industries"
import AboutUs from "./components/AboutUs"
import Careers from "./components/Careers"
import Services from "./components/Services"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"

function App() {

  return (
    
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>} errorElement={<Error/>}> 
        {/* <Route index element={<Home />} /> */}

        {/* <Route path="/login" element={<AboutUs/>}/> */}
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/services" element={<Services/>}/>
        {/* <Route path="/profile" element={<Profile/>}/> */}
        <Route path="/contactus" element={<ContactUs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>    

  )
}

export default App
