
import React, { useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Images } from '../constants'

const Home = () => {
    const [banner, setBanner] = useState([]);

    return (
        <div className='bodyi'>
            {/* Header */}
            <Header />
            {/* Body */}
            <div className="gap"></div>
            <div className="banner">
                <div className="slideshow">
                    <div className="mySlide bg1" style={{ display: 'block' }}>
                        <div className="slide-text left5">
                            <h1>MONA SNEAKER</h1>
                            <p>Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh. </p>
                        </div>
                    </div>
                    <div className="mySlide bg2">
                        <div className="slide-text right5">
                            <h1>MONA SNEAKER</h1>
                            <p>Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh. </p>
                        </div>
                    </div>
                    <a className="prev"></a>
                    <a className="next"></a>

                    <div style={{ textAlign: 'center' }} className="slide-footer">
                        <span className="dot" ></span>
                        <span className="dot" ></span>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
            <div className="">
                <div className="content-top">
                    <div className="col-sneaker">
                        <div className="box-sneaker">
                            <div className="img-title">
                                <img src={Images.title_block_03} />
                            </div>
                            <img src={Images.product_block_03} className="img-sneaker" />
                            <div className="box-button">
                                <a href="CTSanPham.html" className="box-btn">Xem sản phẩm</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sneaker">
                        <div className="box-sneaker">
                            <div className="img-title">
                                <img src={Images.title_block_05} />
                            </div>
                            <img src={Images.product_block_05} className="img-sneaker" />
                            <div className="box-button">
                                <a href="CTSanPham.html" className="box-btn">Xem sản phẩm</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sneaker">
                        <div className="box-sneaker">
                            <div className="img-title">
                                <img src={Images.title_block_07} />
                            </div>
                            <img src={Images.product_block_07} className="img-sneaker" />
                            <div className="box-button">
                                <a href="CTSanPham.html" className="box-btn">Xem sản phẩm</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap"></div>
                <div className="content-row">
                    <div className="row-title">
                        <h3>SẢN PHẨM MỚI</h3>
                    </div>
                    <div className="row-product">
                        <div className="card-product">
                            <div className="card-img">
                                <img src={Images.women_classic_1} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Chuck Taylor Classic</p>
                                <div className="card-price">
                                    <span>1,250,000 đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img">
                                <img src={Images.women_classic_2} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Chuck Taylor Classic</p>
                                <div className="card-price">
                                    <span>1,250,000 đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img">
                                <img src={Images.women_classic_3} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Chuck Taylor Classic</p>
                                <div className="card-price">
                                    <span>1,250,000 đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img">
                                <img src={Images.women_classic_4} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Chuck Taylor Classic</p>
                                <div className="card-price">
                                    <span>1,250,000 đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap"></div>
                <div className="content-banner">
                    <div className="banner-text">
                        <h5>MONA SNEAKER</h5>
                        <h1>KHUYẾN MÃI <span>GIẢM GIÁ 50%</span></h1>
                        <a href="CTSanPham.html" className="box-btn">Xem sản phẩm</a>
                    </div>
                </div>
                <div className="gap"></div>
                <div style={{ clear: 'both' }} />
                <div className="content-row">
                    <div className="row-title">
                        <h3>SẢN PHẨM GIẢM GIÁ</h3>
                    </div>
                    <div className="row-product">
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -30%</span></div>
                                <img src={Images.sale_off_1} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Jack Purcell Pro</p>
                                <div className="card-price">
                                    <span className="price-default">1,250,000đ</span>
                                    <span className="price-sale">1,400,000đ</span>

                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -30%</span></div>
                                <img src={Images.sale_off_2} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">One Star Pro OG Update</p>
                                <div className="card-price">
                                    <span className="price-default">1,950,000đ</span>
                                    <span className="price-sale">1,400,000đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -20%</span></div>
                                <img src={Images.sale_off_3} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Chuck Taylor All Star 70</p>
                                <div className="card-price">
                                    <span className="price-default">3.250,000đ</span>
                                    <span className="price-sale">2.500,000đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -10%</span></div>
                                <img src={Images.sale_off_4} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">84 Thunderbolt Breathable</p>
                                <div className="card-price">
                                    <span className="price-default">1,250,000đ</span>
                                    <span className="price-sale">700,000đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -30%</span></div>
                                <img src={Images.sale_off_5} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Break Point Foundational</p>
                                <div className="card-price">
                                    <span className="price-default">1,750,000đ</span>
                                    <span className="price-sale">1,300,000đ</span>

                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -35%</span></div>
                                <img src={Images.sale_off_1} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">One Star Pro OG Update</p>
                                <div className="card-price">
                                    <span className="price-default">1,400,000đ</span>
                                    <span className="price-sale">1,000,000đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -30%</span></div>
                                <img src={Images.sale_off_2} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">Chuck Taylor All Star 70</p>
                                <div className="card-price">
                                    <span className="price-default">1,650,000đ</span>
                                    <span className="price-sale">1,100,000đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-img img-sale">
                                <div className="sale"><span> -30%</span></div>
                                <img src={Images.sale_off_3} />
                            </div>
                            <div className="card-bot">
                                <p className="card-title">84 Thunderbolt Breathable</p>
                                <div className="card-price">
                                    <span className="price-default">1,550,000đ</span>
                                    <span className="price-sale">1,000,000đ</span>
                                </div>
                                <a href="Giohang.html" className="box-btn card-btn">Thêm vào giỏ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home;