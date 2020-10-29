import React from 'react'

function Contact() {
    return (
        <section class="text-gray-500 bg-gray-900 body-font relative">
            <div class="absolute inset-0 bg-gray-900">
                <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Kushtia  &ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.16)"}}></iframe>
            </div>
            <div class="container px-5 py-24 mx-auto flex">
                <div class="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 class="text-white text-lg mb-1 font-medium title-font">Contact</h2>
                    <p class="leading-relaxed mb-5 text-gray-500">Any Problem, suggestion or help? Contact us through the form</p>
                    <input class="bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
                    <textarea class="bg-gray-800 text-white rounded border border-gray-700 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                    <p class="text-xs text-gray-600 mt-3">We don't store any information you provided. Don't Panic</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
