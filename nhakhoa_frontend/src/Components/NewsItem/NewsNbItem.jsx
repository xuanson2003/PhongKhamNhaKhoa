import { faCalendarDays, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react';
import NewsItem from '~/Components/NewsItem/NewsItem';
import request from '~/Utils/httpRequest';

function NewsNbItem() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Pagination state

    // Fetch the news data from the API
    useEffect(() => {
        request.get('get-top-news')
            .then(response => {
                if (response.data.success) {
                    setNewsData(response.data.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h3 className="title">Tin tức nổi bật</h3>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {newsData.map((newsItem, index) => (
                        <React.Fragment key={newsItem.id}>
                            <NewsItem isSm
                                data={{
                                    id:newsItem.id,
                                    image: newsItem.avatar,
                                    name: newsItem.name,
                                    description: newsItem.description,
                                    create_date: new Date(newsItem.created_at).toLocaleDateString('vi-VN'),
                                    views: Number(newsItem.view).toLocaleString(),
                                }}
                            />
                            {index < newsData.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </>
            )}
        </div>
    );
}

export default NewsNbItem;
