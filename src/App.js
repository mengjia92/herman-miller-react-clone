import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import NotifBar from "./components/NotifBar";
import FooterArea from "./components/FooterArea";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import NaviBar from "./components/NaviBar";
import PromoBanner from "./components/PromoBanner";

function App() {
  return (
    <div>
        <BrowserRouter>
            <PromoBanner/>
            <NotifBar/>
            <NaviBar/>
            <div>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cart" exact component={CartPage}/>
            </div>
            <FooterArea/>
        </BrowserRouter>
    </div>
  );
}

export default App;
