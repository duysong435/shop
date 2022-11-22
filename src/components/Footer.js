
import React from "react";
import '../assets/css/Home.css'
import { Icons, Images } from '../constants'

const Footer = (props) => {
    return (
        <div>
            <div className="footer">
                <div className="footer-main">
                    <div className="footer-content">
                        <div className="box">
                            <h3 className="text"> <b> GIỚI THIỆU</b> </h3>
                            <div className="footer-divider"></div>
                            <p className="font" style={{ paddingRight: '30px' }} >Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh.</p>
                        </div>
                        <div className="box">
                            <h3 className="text"> <b> THÔNG TIN LIÊN HỆ </b> </h3>
                            <div className="footer-divider"></div>
                            <div className="boxbox">
                                <img className="w-[14px] mr-[15px]" src={Icons.icon_map} width={'14'} />
                                <p className="font"> Đại học điện lực</p>
                            </div>
                            <div className="boxbox">
                                <img className="w-[14px] mr-[15px]" src={Icons.icon_phone} width={'14'} />
                                <p className="font1"> 076 922 0162</p>
                            </div>
                            <div className="boxbox">
                                <img className="w-[14px] mr-[15px]" src={Icons.icon_mail_1} width={'14'} />
                                <p className="font1">daihocdienluc@gmail.com</p>
                            </div>
                            <div className="boxbox">
                                <img className="w-[14px] mr-[15px]" src={Icons.skype_png_icon_10} width={'14'} />
                                <p className="font1"> daihocdienluc</p>
                            </div>
                        </div>
                        <div className="box">
                            <h3 className="text"> <b> LIÊN KẾT </b> </h3>
                            <div className="footer-divider"></div>
                            <a className="font1" href=""><p> Trang chủ</p> </a>
                            <a className="font1" href=""><p> Sản phẩm</p> </a>
                            <a className="font1" href=""><p > Giới thiệu</p></a>
                            <a className="font1" href=""><p > Tin Tức</p></a>
                            <a className="font1" href=""><p> Liên hệ</p></a>
                        </div>
                        <div className="box">
                            <h3 className="text"> <b> TẢI ỨNG DỤNG </b> </h3>
                            <div className="footer-divider"></div>
                            <p className="font"> Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay</p>
                            <img className="w-[170px] mt-[10px] mb-[10px]" src={Images.img_googleplay} width={'170'} />
                            <img className="w-[170px] mb-[10px]" src={Images.img_appstore} width={'170'} />
                        </div>
                    </div>
                </div>
                <div className="footer-bot">
                    <img className="m-5" src={Images.img_payment} alt="" width={'400'} height={'50'} />
                </div>
            </div>
        </div>
    )
}

export default Footer;