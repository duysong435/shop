import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


import Header from '../components/Header';
import Footer from '../components/Footer'
import '../assets/css/Products.css'
import { Images } from '../constants'
import { getImageUrl } from '../utils';


const Products = (props) => {
    const [product, setProduct] = useState([]);

    const getData = async () => {
        await axios.get(`http://shoes.hungvu.net/get-products`)
            .then((response) => {
                console.log(response?.data?.data);
                setProduct(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }
    useEffect(() => {
        // fetch('https://41da-2402-9d80-22e-6bbd-140b-bd4d-58ec-8e38.ap.ngrok.io/products')
        //     .then(response => response.json())
        getData();

    }, [])
    return (
        <div className='relative min-h-[2300px]'>
            {/* Header */}
            <Header />

            <div className="">
                <div className="container-main">
                    <div className="top">
                        <div className="top-contentleft">
                            <Link className="text" to='/'>TRANG CHỦ</Link>
                            <p className='text-black ml-1 mr-1'>/</p>
                            <Link className="text-black cursor-default" to='/products' >
                                <div className='text-black font-bold text-xl'>
                                    SẢN PHẨM
                                </div>
                            </Link>
                        </div>
                        <div className="top-contentright">
                            <p className="text"> Hiển thị một kết quả duy nhất </p>
                            <select className='w-[255] h-9 border' id="option" name="option">
                                <option className="text" value=" Thứ tự mặc định">Thứ tự mặc định</option>
                                <option className="text" value="Thứ tự theo mức độ phổ biến">Thứ tự theo mức độ phổ biến</option>
                                <option className="text" value="Thứ tự theo điểm đánh giá">Thứ tự theo điểm đánh giá</option>
                                <option className="text" value="Mới nhất">Mới nhất</option>
                                <option className="text" value="Thứ tự theo giá: thấp đến cao">Thứ tự theo giá: thấp đến cao </option>
                                <option className="text" value="Thứ tự theo giá: cao xuống thấp">Thứ tự theo giá: cao xuống thấp</option>
                            </select>
                        </div>
                    </div>
                    <div className="bottom grid grid-cols-4">
                        <div className="col-span-1">
                            <div className="row1">
                                <b className="text">SẢN PHẨM</b>
                                <div className="row-main">
                                    <div className="block h-24" >
                                        <Link to='/detail'>
                                            <img className="w-16 h-16 mr-3" src={Images.men_psy_1} />
                                        </Link>
                                        <div className="block-main">
                                            <p><a className="text" href="CTSanpham.html"> One Star Sunbaked</a></p>
                                            <b>2,800,000 đ</b>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <a href=""><img className="w-16 h-16 mr-3" src={Images.men_psy_2} /></a>
                                        <div className="block-main">
                                            <p><a className="text" href=""> Chuck 70 Psy-Kicks Ox</a></p>
                                            <b>2,800,000 đ</b>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <a href=""><img className="w-16 h-16 mr-3" src={Images.women_sunbaked_1} /></a>
                                        <div className="block-main">
                                            <p><a className="text" href=""> Chuck 70 Psy-Kicks Ox</a></p>
                                            <b>2,800,000 đ</b>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <a href=""><img className="w-16 h-16 mr-3" src={Images.women_sunbaked_2} /></a>
                                        <div className="block-main">
                                            <p><a className="text" href=""> One Star Sunbaked</a></p>
                                            <b>2,800,000 đ</b>
                                        </div>
                                    </div>
                                    <div className="block">
                                        <a href=""><img className="w-16 h-16 mr-3" src={Images.women_sunbaked_3} /></a>
                                        <div className="block-main">
                                            <p><a className="text" href=""> Chuck 70 Psy-Kicks Ox</a></p>
                                            <b>2,800,000 đ</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <b className="text">BÀI VIẾT MỚI NHẤT</b>
                                <div className="row-main">
                                    <div className=" flex items-center border-b-[1px] border-dashed" >
                                        <a href="CTSanpham.html"><img className="block-img img-circel" src={Images.news_2} /></a>
                                        <div className="block-main">
                                            <p className='text-[16px]' >
                                                <a className="text-[#353535]" href="">
                                                    Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam?</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-[1px] border-dashed">
                                        <a href="CTSanpham.html"><img className="block-img img-circel" src={Images.news_3} /></a>
                                        <div className="block-main">
                                            <p className='text-[16px]'><a className="text-[#353535]" href="">
                                                Xinh xắn nhất những ngày này là những mẫu giày </a></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center border-b-[1px] border-dashed">
                                        <a href="CTSanpham.html"><img className="block-img img-circel" src={Images.news_4} /></a>
                                        <div className="block-main">
                                            <p className='text-[16px]'><a className="text-[#353535]" href="">
                                                CommeGarçons Play x Converse nhá hàng mẫu giày</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 ml-2 mt-8">
                            <div className="grid grid-cols-4 justify-between ">
                                {product.map(e => (
                                    <div className="card-product-small ">
                                        <a href="">
                                            <div className="card-img">
                                                <img src={getImageUrl(e.images?.[0])} />
                                            </div>
                                            <div className="card-bot">
                                                <p className="card-title">{e.name}</p>
                                                <div className="card-price">
                                                    <span>{e.price}đ</span>
                                                </div>
                                                <a href="" className="box-btn btn-card">Xem Sản Phẩm</a>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                                {/* đồ thừa */}
                                <div>

                                    {/* <div className="card-product card-product-small">
                                    <a href="">
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
                                    </a>
                                </div>
                                <div className="card-product card-product-small">
                                    <a href="CTSanpham.html">
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
                                    </a>
                                </div>
                                <div className="card-product card-product-small">
                                    <a href="CTSanpham.html">
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
                                    </a>
                                </div>
                                <div className="card-product card-product-small">
                                    <a href="CTSanpham.html">
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
                                    </a>
                                </div>
                                <div className="card-product card-product-small">
                                    <a href="CTSanpham.html">
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
                                    </a>
                                </div>
                                <div className="card-product card-product-small">
                                    <a href="CTSanpham.html">
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
                                    </a>
                                </div>
                                <div className="card-product card-product-small">
                                    <a href="CTSanpham.html">
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
                                    </a>
                                </div> */}
                                </div>
                                {/* đồ thừa */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Products;