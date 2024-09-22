import React from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import config from '~/Config';
import { Link } from 'react-router-dom';
import ServiceItem from '~/Components/ServiceItem/ServiceItem';

function Services() {
    return (
        <>
            <BreadScrum
                title="danh sách dịch vụ"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'danh sách dịch vụ', href: config.routes.services },
                ]}
            />
            <section class="services section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Chúng Tôi Cung Cấp Các Dịch Vụ Nha Khoa Để Bảo Vệ Sức Khỏe Răng Miệng Của Bạn</h2>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAYBAMAAABO02PvAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///8adtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtEadtENTI36AAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAACkSURBVCiRY2AYNKBHALs44/sGLKLMDAys/y9ikbBPYGD/9hWLxPqDDDwX7mAx6e8TBv0J+QoYEtyfVzPEJ8hPgAuwuLg4MZi4uMQviFfoV+B6AuKquLg4MPD9//+L4f7///8U5BrOMDD/////B0P///8PGPihEt8ZOC//YACxwBIfGJihRjkwMP/+wgAyBWyUAbL9+7F5DwTqF+CQkEnAIUF3AACwtT7DE233HgAAAABJRU5ErkJggg=="
                                    alt="#"
                                />
                                <p>
                                    Khám phá các dịch vụ chuyên nghiệp của chúng tôi để bảo vệ sức khỏe răng miệng và
                                    nâng cao chất lượng cuộc sống.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">                 
                        <ServiceItem data={{ icon:"icofont icofont-prescription",name:"Chỉnh nha không mắc cài Invisalign", describe:"Giải pháp chỉnh nha thẩm mỹ cao cho một hàm răng đẹp và khỏe mạnh"}}/>                                                               
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
