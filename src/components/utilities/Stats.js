import React from 'react'
import CountUp from "react-countup";

function Stats() {
    return (
        <section class="text-gray-500 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-nowrap -m-4 text-center">
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <CountUp start={0} end={100} delay={2}>
                            {({ countUpRef }) => (
                                <h2 ref={countUpRef} class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
                            )}
                        </CountUp>
                        <p class="leading-relaxed">Subscribes</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <CountUp start={0} end={250} delay={0}>
                            {({ countUpRef }) => (
                                <h2 ref={countUpRef} class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
                            )}
                        </CountUp>
                        <p class="leading-relaxed">Subscribes</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <CountUp start={0} end={200} delay={0}>
                            {({ countUpRef }) => (
                                <h2 ref={countUpRef} class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
                            )}
                        </CountUp>
                        <p class="leading-relaxed">Subscribes</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <CountUp start={0} end={20} delay={0}>
                            {({ countUpRef }) => (
                                <h2 ref={countUpRef} class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
                            )}
                        </CountUp>
                        <p class="leading-relaxed">Subscribes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
