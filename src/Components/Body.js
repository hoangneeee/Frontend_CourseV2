import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";

function Body() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Body;