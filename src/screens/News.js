import Header from "../components/Header"
import Footer from "../components/Footer"
import '../assets/css/News.css'
import { Icons, Images } from '../constants'
const News = (props) => {
    return (
        <div className="relative min-h-[1300px]">
            {/* Header */}
            <Header />
            <div className="">
                <div className="">
                    <h3 className="text-center text font-bold mb-2 mt-5 cursor-default">TIN TỨC</h3>
                </div>
                <div className="tt-main grid grid-cols-3 ">
                    <div className="col-span-1 mr-14">
                        <div className="ttcol1-search">
                            <form>
                                <input className="pl-2" type="search" placeholder="  Tìm kiếm..." />
                            </form>
                            <button>
                                <img src={Icons.search} height={'25px'} width={'25px'} alt={Icons.search} />

                            </button>
                        </div>
                        <div className="ttcol1-post">
                            <div className="post-title">
                                <h3>Bài viết mới</h3>
                            </div>
                            <ul className="post-menu">
                                <li>
                                    <div className="post-box">
                                        <div className="post-img">
                                            <img src={Images.news_1} height="45px" alt="" />
                                        </div>
                                        <div className="post-text">
                                            <a href=""> Converse sẽ mang Golf le Fleur* Chuck 70 về Việt Nam</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-top">
                                    <div className="post-box ">
                                        <div className="post-img">
                                            <img src={Images.news_2} height="45px" alt="" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">Xinh xắn nhất những ngày này là những mẫu giày</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-top">
                                    <div className="post-box" >
                                        <div className="post-img">
                                            <img src={Images.news_3} height="45px" alt="" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">Fashionista Việt đua nhau sống “ngược” theo trào lưu “ChucksFirst?</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-top">
                                    <div className="post-box">
                                        <div className="post-img">
                                            <img src={Images.news_4} height="45px" alt="" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">Comme des Garçons Play x Converse nhá hàng mẫu giày mới</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-top">
                                    <div className="post-box">
                                        <div className="post-img">
                                            <img src={Images.news_5} height="45px" alt="" />
                                        </div>
                                        <div className="post-text">
                                            <a href="">Hội Thần Kinh Giày xôn xao với hình ảnh</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tt-col2 col-span-2">
                        <div className="ttcol2-main">
                            <div className="ttcol2-block" >
                                <div className="ttcol2-block-main">
                                    <a href="CTtintuc.html">
                                        <div className="ttblock-img">
                                            <img src={Images.news_1_300} alt="" />
                                        </div>
                                        <div className="ttblock-content">
                                            <div className="ttblock-title">
                                                <h5>Converse sẽ mang Golf le Fleur* Chuck 70 Về...</h5>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="ttblock-text">
                                                <span>Nhờ cú leak vừa rồi từ nơi sản sinh ra các thành phẩm của Converse ...</span>
                                            </div>
                                        </div>
                                        <div className="ttblock-box">
                                            <span className="box-date">06</span><br />
                                            <span className="box-month">TH3</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ttcol2-block" >
                                <div className="ttcol2-block-main">
                                    <a href="CTtintuc.html">
                                        <div className="ttblock-img">
                                            <img src={Images.news_2_300} alt="" />
                                        </div>
                                        <div className="ttblock-content">
                                            <div className="ttblock-title">
                                                <h5>Xinh xắn nhất những ngày này là những mẫu</h5>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="ttblock-text">
                                                <span>Phải tới ngày 27 tới, BST này mới chính thức ra mắt nhưng giờ nó ...</span>
                                            </div>
                                        </div>
                                        <div className="ttblock-box">
                                            <span className="box-date">06</span><br />
                                            <span className="box-month">TH3</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ttcol2-block" >
                                <div className="ttcol2-block-main">
                                    <a href="CTtintuc.html">
                                        <div className="ttblock-img">
                                            <img src={Images.news_3_300} alt="" />
                                        </div>
                                        <div className="ttblock-content">
                                            <div className="ttblock-title">
                                                <h5>Fashionista Việt đua nhau sống “ngược”</h5>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="ttblock-text">
                                                <span>Trước lời thách thức của Kaylee và Brian, giới trẻ Việt Nam nói chung hay ...									</span>
                                            </div>
                                        </div>
                                        <div className="ttblock-box">
                                            <span className="box-date">06</span><br />
                                            <span className="box-month">TH3</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ttcol2-block" >
                                <div className="ttcol2-block-main">
                                    <a href="CTtintuc.html">
                                        <div className="ttblock-img">
                                            <img src={Images.news_4_300} alt="" />
                                        </div>
                                        <div className="ttblock-content">
                                            <div className="ttblock-title">
                                                <h5>Comme des Garçons Play x Converse</h5>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="ttblock-text">
                                                <span>Không phụ lòng mong đợi của các fan, Comme des Garçons Play x Converse sẽ ...					</span>
                                            </div>
                                        </div>
                                        <div className="ttblock-box">
                                            <span className="box-date">06</span><br />
                                            <span className="box-month">TH3</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ttcol2-block" >
                                <div className="ttcol2-block-main">
                                    <a href="CTtintuc.html">
                                        <div className="ttblock-img">
                                            <img src={Images.news_5_300} alt="" />
                                        </div>
                                        <div className="ttblock-content">
                                            <div className="ttblock-title">
                                                <h5>Hội Thần Kinh Giày xôn xao với hình ảnh</h5>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="ttblock-text">
                                                <span>Có vẻ như bức hình của cô nhóc xinh xắn cùng đôi Converse trắng đã ...</span>
                                            </div>
                                        </div>
                                        <div className="ttblock-box">
                                            <span className="box-date">06</span><br />
                                            <span className="box-month">TH3</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="ttcol2-block" >
                                <div className="ttcol2-block-main">
                                    <a href="CTtintuc.html">
                                        <div className="ttblock-img">
                                            <img src={Images.news_6_300} alt="" />
                                        </div>
                                        <div className="ttblock-content">
                                            <div className="ttblock-title">
                                                <h5>Nếu chú ý, bạn sẽ thấy đế giày Converse</h5>
                                            </div>
                                            <div className="divider"></div>
                                            <div className="ttblock-text">
                                                <span>Nếu chú ý, bạn sẽ thấy đế giày Converse có một lớp nỉ cao su ...</span>
                                            </div>
                                        </div>
                                        <div className="ttblock-box">
                                            <span className="box-date">06</span><br />
                                            <span className="box-month">TH3</span>
                                        </div>
                                    </a>
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

export default News