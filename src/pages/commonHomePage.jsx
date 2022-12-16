import React from 'react'
import Hcarousel from '../components/commonHomepage/HomeCarousel'

import Habout from '../components/commonHomepage/Habout'
import Hfooter from '../components/commonHomepage/Hfooter'
import CommonHomepageNavbar from '../components/commonHomepage/commonHomepageNavbar'
function CommonHomePage() {
  return (
    <div>
        <CommonHomepageNavbar/>
        <Habout/>
        <Hcarousel/>
        <Hfooter/>
    </div>
  )
}

export default CommonHomePage