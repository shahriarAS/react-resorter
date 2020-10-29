import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function PopularRoom() {
    var state = useSelector(state => state.rooms)
    var roomstate = state.filter(x => x.sys.id % 2 !== 0)
    return (
        <section class="text-gray-500 bg-gray-900 body-font">
            <div className="text-center">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Popular Room On Service</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Grab The Best Room From Popular One</h1>
            </div>
            <div class="container px-5 py-12 mx-auto">
                <div class="flex mb-2 min-w-full justify-between">
                    <p class="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg mt-6">Popular Room</p>
                    <Link to="/room"><button class="float-right inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-6">All Room</button></Link>
                </div>
                <div class="flex flex-wrap -m-4">
                    {roomstate.map(room => (
                        <div key={room.sys.id} class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link to={{ pathname: `/view/room/${room.sys.id}/${room.fields.slug}` }} class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={room.fields.images[0].fields.file.url} />
                            </Link>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{(room.fields.type).toUpperCase()}</h3>
                                <Link to={{ pathname: `/view/room/${room.sys.id}/${room.fields.slug}` }}>
                                    <h2 class="text-white title-font text-lg font-medium">{(room.fields.name).toUpperCase()}</h2>
                                </Link>
                                <p class="mt-1">${room.fields.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >)
}

export default PopularRoom
