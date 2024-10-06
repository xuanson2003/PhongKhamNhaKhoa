import React, { useState } from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import bgContact from '~/Assets/img/bg_contact.webp';
import config from '~/Config';
import request from '~/Utils/httpRequest';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch ('http://localhost:4000/add-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    topic: formData.subject,
                    content: formData.message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                alert('Gửi liên hệ thành công !');
            } else {
                alert('Gửi liên hệ thất bại.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form.');
        }
    };

    return (
        <>
            <BreadScrum
                title="Liên hệ với chúng tôi"
                links={[
                    { title: 'trang chủ', href: config.routes.home_1 },
                    { title: 'liên hệ', href: config.routes.contact },
                ]}
            />

            <section className="contact-us section">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-us-left">
                                    <img
                                        src={bgContact}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-us-form">
                                    <h2>Liên Hệ Với Chúng Tôi</h2>
                                    <p>Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi.</p>
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Họ Tên"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Số Điện Thoại"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        placeholder="Chủ Đề"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Tin Nhắn Của Bạn"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group login-btn">
                                                    <button className="btn" type="submit">
                                                        Gửi
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact info section here */}
                </div>
            </section>
        </>
    );
}

export default Contact;
