import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Lesson from "../Pages/Lesson";


function Body() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/course/:courseId/" element={<Lesson/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Body;