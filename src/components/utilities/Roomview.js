import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ResorterReducer from '../../redux/ResorterReducer'

function Roomview() {
    const dispatch = useDispatch(ResorterReducer)
    const state = useSelector(state => state.rooms)
    const cartstate = useSelector(state => state.cart)
    const lcl = useParams()
    const room = state.filter(i => i.sys.id === lcl.id)[0]

    function AddCart() {
        dispatch({ type: 'add_to_cart', payload: room })
        console.log(cartstate)
    }

    return (
        <section className="text-gray-500 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {room.fields.images.map(img => (
                        <div key={img.fields.file.url} className="p-4 md:w-1/4">
                            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img.fields.file.url} alt="blog" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-600 tracking-widest">{(room.fields.type).toUpperCase()}</h2>
                        <h1 className="text-white text-3xl title-font font-medium mb-1">{(room.fields.name).toUpperCase()}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-500 ml-3">4 Reviews</span>
                            </span>

                        </div>
                        <p className="leading-relaxed border-b-2 border-gray-800 pb-4 mb-2">{room.fields.description}</p>
                        <div className="flex mt-6 items-center pb-5">
                            <div className="leading-relaxed">
                                <h1 className="text-2xl text-white">Features</h1>
                                <ol className="list-disc px-4">
                                    {room.fields.breakfast === true ? <li>Have Breakfast</li> : ""}
                                    {room.fields.pets === true ? <li>Pets Allowed</li> : ""}
                                    <li>{room.fields.size} x {room.fields.size} size</li>
                                </ol>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <div className="leading-relaxed mt-24">
                            <h1 className="text-2xl text-white">Extras</h1>
                            <ol className="list-decimal px-4">
                                {room.fields.extras.map(extra => <li key={uuidv4()}>{extra}</li>)}
                            </ol>
                        </div>
                        <div className="flex mt-12 items-center pb-5 border-b-2 border-gray-800 mb-5">
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-white">${room.fields.price}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={AddCart}>Book</button>
                            {/* <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-600 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button> */}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Roomview