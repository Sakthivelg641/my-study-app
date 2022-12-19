import React from 'react'
import CommonHomePage from './commonHomePage'
import CommonHomepageNavbar from '../components/commonHomepage/commonHomepageNavbar'
import Login from './login'
import Sign from './sign'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LearnerHomepage from './learnerHomepage'
import AuthorHomepage from './authorHomepage'
function Routing() {
  return (
    <div>
           <BrowserRouter>
            <CommonHomepageNavbar />
    <Routes>
      <Route path="/" element={<CommonHomePage />}>
      </Route>
      <Route path="/login" element={<Login />} /><Route/>
      <Route path="/sign" element={<Sign />} /><Route/>
      <Route path="/learnerHomepage" element={<LearnerHomepage />} /><Route/>
      <Route path="/authorHomepage" element={<AuthorHomepage />} /><Route/>
       
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default Routing