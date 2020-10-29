import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ResorterReducer from '../../redux/ResorterReducer';

function Cart() {
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
        <section className="text-gray-500 bg-gray-900 body-font h-screen overflow-hidden">
            <div className="container mx-auto px-4 sm:px-8">
                <h3 class="text-gray-700 text-2xl font-medium mb-5">Cart</h3>
                <div class="flex items-center">
                    <Link to="/cart"><button class="flex text-sm text-blue-500 ml-8 focus:outline-none"><span class="flex items-center justify-center border-2 border-blue-500 rounded-full h-5 w-5 mr-2">1</span> Cart</button></Link>
                    <Link to="/checkout"><button class="flex text-sm text-gray-500 ml-8 focus:outline-none"><span class="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">2</span> CheckOut</button></Link>
                    <Link to="/payment"><button class="flex text-sm text-gray-500 ml-8 focus:outline-none"><span class="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">3</span> Payments</button></Link>
                </div>
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Product
                                </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Price
                                </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Quantity
                                </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Total
                                </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartstate.map(item => (
                                        <tr key={item.sys.id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <Link to={{ pathname: `/view/room/${item.sys.id}/${item.fields.slug}` }}>
                                                            <img className="w-full h-full rounded-full"
                                                                src={item.fields.images[0].fields.file.url}
                                                                alt={item.fields.name} />
                                                        </Link>
                                                    </div>
                                                    <div className="ml-3 uppercase">
                                                        <Link to={{ pathname: `/view/room/${item.sys.id}/${item.fields.slug}` }}>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.fields.name}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">$ {item.fields.price}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <input name="quantity" type="number" min={1} className="text-gray-900 h-10 whitespace-no-wrap text-xl" defaultValue={item.total} onChange={(event) => setQuantity(event, item.sys.id)} />
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <p className="text-gray-900 whitespace-no-wrap">{item.fields.price} * {item.total} = ${(item.fields.price) * (item.total)}</p>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span onClick={(event) => removeCart(event, item.sys.id)}
                                                    className="cursor-pointer relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-red-700 opacity-50 rounded-full"></span>
                                                    <span className="relative">Remove</span>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div class="flex items-center justify-between mt-8">
                                <Link to="/room"><button class="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                    <span class="mx-2">Shop</span>
                                </button></Link>
                                <p className="text-2xl text-white">Total Price ${totalpay()}</p>
                                <Link to="/checkout"><button class="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <span>CheckOut</span>
                                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
