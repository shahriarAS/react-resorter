import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../assets/image/error.jpg"

function Error() {
    return (
        <section class="text-gray-500 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={error} />
                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Oops!! 404 Page Not Found</h1>
                    <p class="leading-relaxed mb-8">Maybe you are requesting a page which is not present here at this moment. Or you have misspelled the page name in url. Please invetigate or Contact us for more info.</p>
                    <div class="flex justify-center">
                        <Link to="/"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Home</button></Link>
                        <Link to="/contact"><button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Contact</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error
