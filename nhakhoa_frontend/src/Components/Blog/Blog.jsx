import React from 'react';
import sectionImg from '~/Assets/img/section-img.png';
import blog1 from '~/Assets/img/blog1.jpg';
import blog2 from '~/Assets/img/blog2.jpg';
import blog3 from '~/Assets/img/blog3.jpg';

function Blog() {
    return (
        <section className="blog section" id="blog" style={{ backgroundColor: '#edf2ff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Theo dõi tin tức y tế mới nhất của chúng tôi.</h2>
                            <img src={sectionImg} alt="#" />
                            <p>
                                Cập nhật thông tin y tế mới nhất và các bài viết hữu ích từ chúng tôi. Đừng bỏ lỡ những
                                tin tức quan trọng.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Single Blog */}
                        <div className="single-news">
                            <div className="news-head">
                                <img src={blog1} alt="#" />
                            </div>
                            <div className="news-body">
                                <div className="news-content">
                                    <div className="date">22 Tháng 8, 2020</div>
                                    <h2>
                                        <a href="blog-single.html">Chúng tôi đã công bố sản phẩm mới của mình.</a>
                                    </h2>
                                    <p className="text">
                                        Chúng tôi rất vui được giới thiệu sản phẩm mới. Đọc thêm để tìm hiểu về các tính
                                        năng và lợi ích của nó.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Blog */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Single Blog */}
                        <div className="single-news">
                            <div className="news-head">
                                <img src={blog2} alt="#" />
                            </div>
                            <div className="news-body">
                                <div className="news-content">
                                    <div className="date">15 Tháng 7, 2020</div>
                                    <h2>
                                        <a href="blog-single.html">
                                            Năm cách hàng đầu để giải quyết vấn đề về răng miệng.
                                        </a>
                                    </h2>
                                    <p className="text">
                                        Khám phá các phương pháp hiệu quả để chăm sóc sức khỏe răng miệng và giải quyết
                                        các vấn đề thường gặp.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Blog */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Single Blog */}
                        <div className="single-news">
                            <div className="news-head">
                                <img src={blog3} alt="#" />
                            </div>
                            <div className="news-body">
                                <div className="news-content">
                                    <div className="date">05 Tháng 1, 2020</div>
                                    <h2>
                                        <a href="blog-single.html">
                                            Chúng tôi cung cấp các giải pháp kinh doanh hiệu quả.
                                        </a>
                                    </h2>
                                    <p className="text">
                                        Tìm hiểu về các giải pháp kinh doanh mà chúng tôi cung cấp và cách chúng có thể
                                        giúp nâng cao hiệu suất của bạn.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* End Single Blog */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
