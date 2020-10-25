import React from 'react'
import Footer from './root/Footer'
import Hero from './root/Hero'
import Navbar from './root/Navbar'
import PopularRoom from './root/PopularRoom'
import Stats from './root/Stats'

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Stats/>
            <PopularRoom/>
            <Footer/>
        </div>
    )
}

export default Home
