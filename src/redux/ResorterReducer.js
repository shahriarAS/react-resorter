import { initialState } from "./InitialState"

function ResorterReducer(state = initialState, action) {
    switch (action.type) {
        case "add_to_cart":
            const id = action.payload.sys.id
            const check = state.cart.filter(x => Number(x.sys.id) === Number(id))
            console.log("Check ", check)
            if (check.length > 0) {
                const newcart = { ...action.payload, total: check[0].total + 1 }
                const cart = state.cart.filter(x => Number(x.sys.id) !== Number(id))
                return { ...state, cart: [...cart, newcart] }
            }
            else {
                const cart = { ...action.payload, total: 1 }
                return { ...state, cart: [...state.cart, cart] }
            }
        case "change_quantity":
            const newcart = { ...state.cart.filter(x => Number(x.sys.id) === Number(action.payload.id))[0], total: Number(action.payload.quantity) }
            const cart = state.cart.filter(x => Number(x.sys.id) !== Number(action.payload.id))
            return { ...state, cart: [...cart, newcart] }
        case "remove_cart":
            const cart_after_remove = state.cart.filter(x => Number(x.sys.id) !== Number(action.payload.id))
            return { ...state, cart: cart_after_remove }
        default:
            return state
    }
}

export default ResorterReducer