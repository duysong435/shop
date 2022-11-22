
import React from "react";
import '../assets/css/Home.css'
import {
    Link,
    useNavigate,
    NavLink
} from "react-router-dom";
import logo_mona from '../assets/img/logo-mona.png';
import cart from '../assets/img/cart.png';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-top">
                    <div className="header-top-content">
                        <div className="login">
                            <Link to='/login' className="header-text">ĐĂNG NHẬP / ĐĂNG KÝ</Link>
                        </div>
                        <div className="logo">
                            <img src={logo_mona} className="logo-img" />
                        </div>
                        <div className="cart">
                            <Link to='/cart' className="header-text">GIỎ HÀNG / 16192đ</Link>
                            <img src={cart} className="cart-img" />
                        </div>
                    </div>
                </div>
                <div className="header-menu">
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to='/' style={{ paddingBottom: 16 }}>
                                    TRANG CHỦ
                                </Link>
                            </li>
                            <li>
                                <NavLink to='/products' style={{ paddingBottom: 16 }}>
                                    SẢN PHẨM
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/news' style={{ paddingBottom: 16 }}>

                                    TIN TỨC
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/introduce' style={{ paddingBottom: 16 }}>
                                    GIỚI THIỆU
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' style={{ paddingBottom: 16 }}>
                                    LIÊN HỆ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;