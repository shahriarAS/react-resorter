import React from "react"
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import './assets/main.css';
import './App.css'
import Home from "./components/Home";
import Room from "./components/Room";
import Navbar from "./components/root/Navbar";
import Error from "./components/utilities/Error";
import Roomview from "./components/utilities/Roomview";
import store from "./redux/ResorterStore";
import Cart from "./components/utilities/Cart";
import CheckOut from "./components/utilities/CheckOut";
import Payment from "./components/utilities/Payment";
import Contact from "./components/utilities/Contact";
import Footer from "./components/root/Footer";

function App() {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/room">
                        <Room />
                    </Route>
                    <Route path="/view/room/:id/:title">
                        <Roomview />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/checkout">
                        <CheckOut />
                    </Route>
                    <Route path="/payment">
                        <Payment />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </Provider>
        </div>
    )
}

export default App;