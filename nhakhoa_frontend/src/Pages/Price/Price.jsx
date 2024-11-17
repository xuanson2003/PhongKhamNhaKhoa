import React, { useEffect, useState } from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { Link } from 'react-router-dom';

function Price() {

    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' VNĐ';
    };
    
    const [prices, setPrices] = useState([]); // Manage the list of services
    const [loading, setLoading] = useState(true); // Manage loading state
    const [error, setError] = useState(null); // Manage error state
    
    // Function to fetch the service prices from the API
    const fetchPrices = async () => {
        try {
            const response = await fetch('http://localhost:4000/get-price');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPrices(data.data); // Save the list of services to state
            setLoading(false); // End loading state
        } catch (err) {
            setError(err.message); // Save error message if any
            setLoading(false); // End loading state
        }
    };

    // Fetch prices when the component mounts
    useEffect(() => {
        fetchPrices();
    }, []);

    if (loading) {
        return <p>Loading services...</p>; // Show loading message
    }

    if (error) {
        return <p>Error: {error}</p>; // Show error message if any
    }

    return (
        <>
            <BreadScrum
                title="bảng giá"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'bảng giá', href: config.routes.price },
                ]}
            />
            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Bảng giá dịch vụ tại nha khoa Mediplus</h2>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYBAMAAABO02PvAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///8adtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtENTI36AAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAACkSURBVCiRY2AYNKBHALs44/sGLKLMDAys/y9ikbBPYGD/9hWLxPqDDDwX7mAx6e8TBv0J+QoYEtyfVzPEJ8hPgAuwuLg4MZi4uMQviFfoV+B6AuKquLg4MPD9//+L4f7///8U5BrOMDD/////B0P///8PGPihEt8ZOC//YACxwBIfGJihRjkwMP/+wgAyBWyUAbL9+7F5DwTqF+CQkEnAIUF3AACwtT7DE233HgAAAABJRU5ErkJggg==" alt="#" />
                                <p>Chúng tôi luôn mang đến sự hài lòng và tin tưởng cho khách hàng</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive" style={{ padding: '50px',  }}>
                                        <table className="table table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th className='text-center' style={{ color: '#1a76d1' }}>Tên dịch vụ</th>
                                                    <th className='text-center' style={{ color: '#1a76d1' }}>Giá/ Chi phí (VNĐ)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {prices.map((price) => (
                                                    <tr key={price.id}>
                                                        <td>{price.name}</td>
                                                        <td className='text-right'>{formatCurrency(price.price)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Price;
