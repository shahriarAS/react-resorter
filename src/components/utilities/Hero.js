import React from 'react'
import { Link } from 'react-router-dom'
import defaultBcg from "../../redux/images/defaultBcg.jpeg"

function Hero() {
    return (
        <section className="text-gray-500 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                    <img className="object-cover object-center rounded" alt="hero" src={defaultBcg} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Book your resort
        <br className="hidden lg:inline-block" />before these sold out
      </h1>
                    <p className="mb-8 leading-relaxed">Wanna live some happy moment in a great enviroment? Here you are. World's best resort at cheap price. Best room services, breakfast, family pach, delux pack and much more. We are waiting for your one click on <span class="font-bold">Book</span> button. </p>
                    <div className="flex justify-center">
                        <Link to="/room"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Room</button></Link>
                        <Link to="/contact"><button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Contact</button></Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero
