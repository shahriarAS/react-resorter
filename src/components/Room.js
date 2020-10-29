import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Room() {
    var roomstate = useSelector(state => state.rooms)
    const [type, setType] = useState("")
    const [price, setPrice] = useState()
    const [pet, setPet] = useState()
    const [breakfast, setBreakfast] = useState()
    const [size, setSize] = useState()
    if (type) {
        var roomstate = roomstate.filter(x => x.fields.type == type)
    }
    if (price) {
        var roomstate = roomstate.filter(x => x.fields.price <= Number(price))
    }
    if (pet == true) {
        var roomstate = roomstate.filter(x => x.fields.pets == true)
    }
    if (breakfast == true) {
        var roomstate = roomstate.filter(x => x.fields.breakfast == true)
    }
    if (size) {
        var roomstate = roomstate.filter(x => x.fields.size <= Number(size))
    }
    return (
        <div>
            <section className="text-gray-500 bg-gray-900 body-font min-h-screen h-full">
                <div className="pt-12 text-center">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Popular Room On Service</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Best Room On Service at Cheap Price</h1>
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Filter</h2>
                    </div>
                    <div className="my-2 flex sm:flex-row flex-col">
                        <div className="flex flex-row mb-1 sm:mb-0">
                            <form class="form-inline">
                                <div className="mx-4 flex text-center justify-center items-center">
                                    <p className="pr-2">Type </p>
                                    <select
                                        value={type}
                                        className="bg-gray-700"
                                        onChange={event => setType(event.target.value)}>
                                        <option value="">All</option>
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                        <option value="family">Family</option>
                                        <option value="presidential">Presidential</option>
                                    </select>
                                </div>
                                <div className="mx-4 flex text-center justify-center items-center">
                                    <p className="pr-2">Price </p>
                                    <input
                                        className="mx-8"
                                        type="range"
                                        min="0"
                                        max="700"
                                        step="10"
                                        onChange={event => setPrice(event.target.value)} />
                                        {price ? "$" : ""}{price}
                                </div>
                                <div className="mx-4 flex text-center justify-center items-center">
                                    <p className="pr-2">Size </p>
                                    <input
                                        className="mx-8"
                                        type="range"
                                        min="100"
                                        max="1000"
                                        step="10"
                                        onChange={event => setSize(event.target.value)} />
                                    {size} {size ? "X" : ""} {size}
                                </div>
                                <div className="mx-4 flex flex-col">
                                    <label>
                                        <input type="checkbox" name="remember" value={pet} onChange={event => setPet(pet == true ? "" : true)} />
                                    Pet Allow
                                    </label>
                                    <label>
                                        <input type="checkbox" name="remember" value={breakfast} onChange={event => setBreakfast(breakfast == true ? "" : true)} />
                                    Breakfast
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {roomstate.map(room => (
                            <div key={room.sys.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <Link to={{ pathname: `/view/room/${room.sys.id}/${room.fields.slug}` }} className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={room.fields.images[0].fields.file.url} />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{(room.fields.type).toUpperCase()}</h3>
                                    <Link to={{ pathname: `/view/room/${room.sys.id}/${room.fields.slug}` }}>
                                        <h2 className="text-white title-font text-lg font-medium">{(room.fields.name).toUpperCase()}</h2>
                                    </Link>
                                    <p className="mt-1">${room.fields.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Room
