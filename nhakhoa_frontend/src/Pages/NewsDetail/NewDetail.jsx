import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import request from '~/Utils/httpRequest';

function ServiceDetail() {
    const { id } = useParams(); // Get the ID from the URL
    const [newsDetail, setNewsDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            try {
                const response = await request.get(`get-news-by-id/${id}`);
                if (response.data.success) {
                    setNewsDetail(response.data.data);
                } else {
                    setError('News not found');
                }
            } catch (err) {
                console.error('Error fetching news detail:', err);
                setError('Failed to fetch news detail');
            } finally {
                setLoading(false);
            }
        };

        fetchNewsDetail();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!newsDetail) return <p>No news detail available.</p>;

    return (
        <>
            <BreadScrum
                title="chi tiết tin tức"
                links={[
                    { title: 'danh sách tin tức', href: config.routes.services },
                    { title: 'chi tiết tin tức', href: config.routes.service_detail },
                ]}
            />

<section class="news-single " style={{padding:'30px 30px'}}>
			<div class="container">
				<div class="row">
							<div class="col-12">
								<div class="single-main">
                                <h2 className='mb-3'>
                                    <a
                                        href="blog-single.html"
                                        style={{ color: '#1C77D1', fontSize: '33px' }}
                                    >
                                       {newsDetail.name}
                                    </a>
                                </h2>
                                <div class="meta" style={{padding:'2px 0px'}}>
										<div class="mt-2 mb-2 ml-1">
											<span class="author img-fluid"><a href="#"><img style={{height:'30px',width:'30px', borderRadius: '100%'}} src="https://tse4.mm.bing.net/th?id=OIP.qbWrUTnCKozFDIt7s0QUAgHaHa&pid=Api&P=0&h=180" alt="#"/>  Nguyễn Phạm Bảo Khang</a></span>
											<span class="date ml-5"><i class="fa fa-clock-o"></i>{new Date(newsDetail.created_at).toLocaleDateString()}</span>
											<span class="views ml-5"><i class="fa fa-eye"></i>{newsDetail.view.toLocaleString()} Lượt xem</span>
										</div>
									</div>
                                    <div class="news-text mt-4">
										<blockquote class="overlay">
											<p> {newsDetail.description}</p>					
										</blockquote>
									</div>
                                   

                                    <div className='mt-3' dangerouslySetInnerHTML={{ __html: newsDetail.content }} />


									<div class="blog-bottom mt-4">
										<ul class="social-share">
											<li class="facebook"><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
											<li class="twitter"><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
											<li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
											<li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
											<li class="pinterest"><a href="#"><i class="fa fa-pinterest"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							
							
						</div>
					</div>
		</section>
         
        </>
    );
}

export default ServiceDetail;
