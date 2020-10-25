import React from 'react'
import Footer from './root/Footer'
import Hero from './utilities/Hero'
import PopularRoom from './utilities/PopularRoom'
import Stats from './utilities/Stats'

function Home() {
    return (
        <div>
            <Hero/>
            <Stats/>
            <PopularRoom/>
            <Footer/>
        </div>
    )
}

export default Home
