import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Admin from "./screens/Admin";
import Cart from "./screens/Cart";
import Contact from "./screens/Contact";
import Detail from "./screens/Detail";
import Home from './screens/Home';
import Introduce from "./screens/Introduce";
import Login from './screens/Login';
import News from "./screens/News";
import NotFound from "./screens/NotFound";
import Products from './screens/Products';
import Register from "./screens/Register";

export default function Router() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Layout />}>
        //             <Route index element={<Home />} />
        //             <Route path="blogs" element={<Blogs />} />
        //             <Route path="contact" element={<Contact />} />
        //             <Route path="*" element={<NoPage />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/news" element={<News />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}