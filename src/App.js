import React from "react"
import { Route, Switch } from "react-router-dom";
import './assets/main.css';
import Home from "./components/Home";
import Room from "./components/Room";
import Navbar from "./components/root/Navbar";
import Error from "./components/utilities/Error";
import Roomview from "./components/utilities/Roomview";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/room">
                    <Room />
                </Route>
                <Route path="/view/room/:title">
                    <Roomview/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;