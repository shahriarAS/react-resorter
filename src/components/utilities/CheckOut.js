import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ResorterReducer from '../../redux/ResorterReducer'
import { v4 as uuidv4 } from 'uuid';

function CheckOut() {
    const dispatch = useDispatch(ResorterReducer)
    var cartstate = useSelector(state => state.cart)
    var cartstate = cartstate.sort((a, b) => Number(a.sys.id) - Number(b.sys.id))
    function totalpay() {
        var total = 0;
        cartstate.map(
            x => total += ((x.fields.price) * x.total)
        )
        return total
    }

    function setQuantity(event, id) {
        event.preventDefault()
        dispatch(
            {
                type: "change_quantity",
                payload: {
                    id: id,
                    quantity: event.target.value
                }
            }
        )
        console.log("In Cart", event.target.value, id)
    }

    function removeCart(event, id) {
        event.preventDefault()
        dispatch(
            {
                type: "remove_cart",
                payload: {
                    id: id
                }
            }
        )
    }
    return (
        <section className="text-gray-500 bg-gray-900 body-font h-full overflow-hidden">
            <header>
                <main class="my-8">
                    <div class="container mx-auto px-6">
                        <h3 class="text-gray-700 text-2xl font-medium mb-5">Shipping</h3>
                        <div class="flex items-center">
                            <Link to="/cart"><button class="flex text-sm text-blue-500 focus:outline-none"><span class="flex items-center justify-center text-white bg-blue-500 rounded-full h-5 w-5 mr-2">1</span> Cart</button></Link>
                            <Link to="/checkout"><button class="flex text-sm text-blue-500 ml-8 focus:outline-none"><span class="flex items-center justify-center border-2 border-blue-500 rounded-full h-5 w-5 mr-2">2</span> Shipping</button></Link>
                            <Link to="/payment"><button class="flex text-sm text-gray-500 ml-8 focus:outline-none"><span class="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">3</span> Payments</button></Link>
                        </div>
                        <div class="flex flex-col lg:flex-row mt-8 ">
                            <div className="leading-loose">
                                <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                                    <p className="text-gray-800 font-medium">Shipping information</p>
                                    <div className="">
                                        <label className="block text-sm text-gray-00" for="cus_name">Tracking ID</label>
                                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" value={uuidv4().slice(0, 7)} readOnly />
                                    </div>
                                    <div className="mt-2">
                                        <label className=" block text-sm text-gray-600" for="cus_email">Shipping Address</label>
                                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
                                    </div>
                                    <div className="mt-2">
                                        <label className="text-sm block text-gray-600" for="cus_email">City</label>
                                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
                                    </div>
                                    <div className="inline-block mt-2 w-1/2 pr-1">
                                        <label className="block text-sm text-gray-600" for="cus_email">Country</label>
                                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
                                    </div>
                                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                        <label className="block text-sm text-gray-600" for="cus_email">Zip</label>
                                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
                                    </div>
                                    <div class="flex items-center justify-between mt-8">
                                        <button class="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
                                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                            <Link to="/cart"><span class="mx-2">Cart</span></Link>
                                        </button>
                                        <Link to="/payment"><button class="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                            <span>Payment</span>
                                            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </button></Link>
                                    </div>
                                </form>
                            </div>

                            <div class="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                                <div class="flex justify-center lg:justify-end">
                                    <div class="border rounded-md max-w-md w-full px-4 py-3">
                                        <div class="flex items-center justify-between">
                                            <h3 class="text-gray-700 font-medium">Order total ({cartstate.length})</h3>
                                            <Link to="/cart"><span class="text-gray-600 text-sm">Edit</span></Link>
                                        </div>
                                        {cartstate.map(
                                            item => (
                                                <div class="flex justify-between mt-6">
                                                    <div class="flex">
                                                        <img class="h-20 w-20 object-cover rounded" src={item.fields.images[0].fields.file.url} alt="" />
                                                        <div class="mx-3">
                                                            <Link to={{ pathname: `/view/room/${item.sys.id}/${item.fields.slug}` }}>
                                                                <h3 class="text-sm text-gray-600">{item.fields.name}</h3>
                                                            </Link>
                                                            <div class="flex items-center mt-2 ">
                                                                <input name="quantity" type="number" min={1} className="text-white bg-gray-900 h-10 whitespace-no-wrap text-xl" defaultValue={item.total} onChange={(event) => setQuantity(event, item.sys.id)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="text-gray-600">${(item.fields.price) * (item.total)}</span>
                                                </div>
                                            )
                                        )}
                                        <div class="flex items-center justify-between mt-6">
                                            <h3 class="text-gray-700 font-medium">Total Pay ${totalpay()}</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </header ></section >
    )
}

export default CheckOut
