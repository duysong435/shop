import { Link } from 'react-router-dom';

import Header from "../components/Header";
import Footer from '../components/Footer'
import { Images, Icons } from '../constants'

import '../assets/css/Introduce.css'

const Introduce = () => {
    return (
        <div className="bodyy">
            {/* Header */}
            <Header />

            <div className="">
                <div className="gap"></div>
                <div className="gt-banner">
                    <div className="gt-banner-content">
                        <div className="gt-banner-img">
                            <img src={Images.banner_1} alt="" />
                            <div className="gt-banner-block">
                                <div className="gt-banner-title">
                                    <h1 className="text-3xl">TIN TỨC</h1>
                                </div>
                                <div className="gt-banner-text">
                                    <Link to='/'>Trang chủ</Link>
                                    <span className="gach_ngang"> / </span>
                                    Tin tức
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content grid grid-cols-2 mt-7">
                    <div className="content-img col-span-1">
                        <img src={Images.gioithieu} />
                    </div>
                    <div className="content-main col-span-1">
                        <h2 className="main-title text-3xl">GIỚI THIỆU</h2>
                        <p className="main-text">Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh</p>
                        <h3 className="main-title text-2xl">SẢN PHẨM GIÀY TỐT NHẤT</h3>
                        <div className="main-row">
                            <div className="col col-right">
                                <p className="main-text">Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh.</p>
                            </div>
                            <div className="col col-left">
                                <p className="main-text">Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-6 ">
                    <div className="col-span-1"></div>
                    <div className="col-span-2 pl-3 ">
                        <div className="flex justify-end">
                            <div className="item-img">
                                <img src={Icons.ship} />
                            </div>
                            <div className="item-main">
                                <div className="main-title">
                                    Miễn phí giao hàng
                                </div>
                                <p className="main-text">
                                    Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="item-img">
                                <img src={Icons.doitra} />
                            </div>
                            <div className="item-main">
                                <div className="main-title">
                                    Đổi trả trong vòng 7 ngày
                                </div>
                                <p className="main-text">
                                    Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="item-img">
                                <img src={Icons.new_product} />
                            </div>
                            <div className="item-main">
                                <div className="main-title">
                                    Sản phẩm mới 100%
                                </div>
                                <p className="main-text">
                                    Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="flex">
                            <div className="item-img">
                                <img src={Icons.chat} />
                            </div>
                            <div className="item-main">
                                <div className="main-title">
                                    Chăm sóc khách hàng
                                </div>
                                <p className="main-text">
                                    Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="item-img">
                                <img src={Icons.baove} />
                            </div>
                            <div className="item-main">
                                <div className="main-title">
                                    Hàng chính hãng
                                </div>
                                <p className="main-text">
                                    Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="item-img">
                                <img src={Icons.thanhtoan} />
                            </div>
                            <div className="item-main">
                                <div className="main-title">
                                    Thanh toán đa dạng
                                </div>
                                <p className="main-text">
                                    Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Introduce;