import React, { useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import { Images } from '../constants'

import '../assets/css/Detail.css'
import { Link } from "react-router-dom";
const Detail = () => {
    const [amountShoes, setAmountShoes] = useState(1);
    var index = 0;
    var imgs = [Images.women_classic_1_1, Images.women_classic_1_2, Images.women_classic_1_3, Images.women_classic_1_4];

    const prev = () => {
        if (index <= 0) index = imgs.length;
        index--;
        document.getElementById('img').src = imgs[index];
    }
    const next = () => {
        if (index >= imgs.length - 1) {
            index = -1;
        }
        index++;
        document.getElementById('img').src = imgs[index];
    }
    return (
        <div className="bodyDetail">
            {/* Header */}
            <Header />

            <div className="gap"></div>
            <div className="container">
                <div className="container-main-detail">
                    <div className="top">
                        <div className="top-left">
                            <div className="content">
                                <img id="img" src={Images.women_classic_1_1} alt='icon' />
                                <a className="prev text-black absolute left-[0px] top-[40%]" onClick={prev} ></a>
                                <a className="next" style={{ color: 'black', position: 'absolute', right: '0px', top: '40%' }} onClick={next} ></a>
                            </div>
                        </div>
                        <div className="top-right">
                            <div className="flex ">
                                <a className=" text-black mr-1" href="">TRANG CHỦ</a>
                                <a className="text-black" href="">SẢN PHẨM</a>
                            </div>
                            <h2 className="text-black text-left text-[30px]" >Chuck Taylor Classic</h2>
                            <div className="divder"></div>
                            <h1 className="product-price text-black text-left font-black">1,250,000 ₫</h1>
                            <div className="item">
                                <input
                                    className="text-black"
                                    type="number"
                                    min="1" max="100"
                                    value={amountShoes}
                                    onChange={(ev) => { setAmountShoes(ev.target.value) }}
                                />
                                <Link className="btn item-btn" to='/cart' style={{ margin: 0, color: 'white', marginRight: '48%' }}>THÊM VÀO GIỎ</Link>
                            </div>
                            <div className="content-bottom">
                                <div className="item-bottom">
                                    <div className="h-[20px] w-[100%]">
                                        <p className="item-bottom-text" style={{ color: 'black' }} > <b>Tính phí ship tự động</b></p>
                                    </div>
                                    <div className="box" style={{ marginTop: '20px' }}>
                                        <img className="item-bottom-img" src={Images.logo_ghn} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_ghtk} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_ninja_van} alt="logo" />
                                    </div>
                                    <div className="box">
                                        <img className="item-bottom-img" src={Images.logo_shipchung} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_vn_post} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_viettle_post} alt="logo" />
                                    </div>
                                </div>
                                <div className="item-bottom">
                                    <div className="h-[20px] w-[100]" >
                                        <p className="item-bottom-text" style={{ color: 'black' }} > <b>Thanh toán</b></p>
                                    </div>
                                    <div className="box mt-[20px]" >
                                        <img className="item-bottom-img" src={Images.logo_acb} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_techcombank} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_vib} alt="logo" />
                                    </div>
                                    <div className="box">
                                        <img className="item-bottom-img" src={Images.logo_vcb} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_paypal} alt="logo" />
                                        <img className="item-bottom-img" src={Images.logo_mastercard} alt="logo" />
                                    </div>
                                </div>
                            </div>
                            <p className="item-bottom-text text-black text-left" ><b>"Hãy trở thành Affilicate của chúng tôi để tìm thêm thu nhập thụ động, kiếm tiền online"</b></p>
                            <a className="btn affi-btn" href="#">Đăng ký Affilicate</a>
                            <div className="product-text">
                                Mã: M5039V
                            </div>
                            <div className="product-text">
                                Danh mục: Nam
                            </div>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="mid-main">
                            <div className="mid-top">
                                <div className="top-item">
                                    <a className="top-item-text text-black" href="">MÔ TẢ</a>
                                </div>
                                <div className="top-item1">
                                    <a className="top-item-text text" href="">ĐÁNH GIÁ (0)</a>
                                </div>
                            </div>
                            <div className="mid-bottom">
                                <div style={{
                                    height: '200px',
                                    width: '1190px',
                                    margin: 'auto',
                                    padding: '40px 20px 20px', textAlign: 'justify', color: 'black'
                                }}>
                                    <p className="text1 mb-[20px]" >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
                                        Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
                                        Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                                    </p>
                                    <p className="text1">
                                        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros egetvelit.
                                        Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc.
                                        Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom1">
                        <div className="bottom-top">
                            <h4>SẢN PHẨM TƯƠNG TỰ</h4>
                        </div>
                        <div className="row-product justify-around">
                            <div className="card-product card-product-small">
                                <div className="card-img">
                                    <img src={Images.women_classic_1} />
                                </div>
                                <div className="card-bot">
                                    <p className="card-title">Chuck Taylor Classic</p>
                                    <div className="card-price">
                                        <span>1,250,000 đ</span>
                                    </div>
                                    <a href="CTSanpham.html" className="box-btn btn-card">Xem Sản Phẩm</a>
                                </div>
                            </div>
                            <div className="card-product card-product-small">
                                <div className="card-img">
                                    <img src={Images.women_classic_2} />
                                </div>
                                <div className="card-bot">
                                    <p className="card-title">Chuck Taylor Classic</p>
                                    <div className="card-price">
                                        <span>1,250,000 đ</span>
                                    </div>
                                    <a href="CTSanpham.html" className="box-btn btn-card">Xem Sản Phẩm</a>
                                </div>
                            </div>
                            <div className="card-product card-product-small">
                                <div className="card-img">
                                    <img src={Images.women_classic_3} />
                                </div>
                                <div className="card-bot">
                                    <p className="card-title">Chuck Taylor Classic</p>
                                    <div className="card-price">
                                        <span>1,250,000 đ</span>
                                    </div>
                                    <a href="CTSanpham.html" className="box-btn btn-card">Xem Sản Phẩm</a>
                                </div>
                            </div>
                            <div className="card-product card-product-small">
                                <div className="card-img">
                                    <img src={Images.women_classic_4} />
                                </div>
                                <div className="card-bot">
                                    <p className="card-title">Chuck Taylor Classic</p>
                                    <div className="card-price">
                                        <span>1,250,000 đ</span>
                                    </div>
                                    <a href="CTSanpham.html" className="box-btn btn-card">Xem Sản Phẩm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail;