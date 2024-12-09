import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";

function DoctorDetail() {
    const query = new URLSearchParams(useLocation().search);
    const doctorId = query.get("doctorId");
    const clinic = query.get("clinic");
    const time = query.get("time");
    
    const [doctors, setDoctors] = useState([]);
    const [clinics, setClinics] = useState([]);
    const [formData, setFormData] = useState({
        patient_name: '',
        booking_email: '',
        booking_phone: '',
        booking_sex: '',
        booking_date: '',
        booking_time: '' || time,
        clinic_id: '' || clinic,
        doctor_id: '' || doctorId,
        notes: '',
    });

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://localhost:4000/get-all-doctor');
                const data = await response.json();

                if (data.success) {
                    setDoctors(data.data);
                } else {
                    console.error('Failed to fetch doctors:', data.error);
                }
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        const fetchClinics = async () => {
            try {
                const response = await fetch('http://localhost:4000/get-list-clinic');
                const data = await response.json();

                if (data.success) {
                    setClinics(data.data);
                } else {
                    console.error('Failed to fetch clinics:', data.error);
                }
            } catch (error) {
                console.error('Error fetching clinics:', error);
            }
        };

        fetchClinics();
        fetchDoctors();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/insert-booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    status: 'Chờ xác nhận', // Default status
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert('Đặt lịch thành công!');
                setFormData({
                    status:'Chờ xác nhận',
                    patient_name: '',
                    booking_email: '',
                    booking_phone: '',
                    booking_sex: '',
                    booking_date: '',
                    booking_time: '',
                    clinic_id: '',
                    doctor_id: '',
                    notes: '',
                });
            } else {
                console.error('Booking failed:', result.error);
                alert('Có lỗi xảy ra. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    return (
        <section className="contact-us " data-stellar-background-ratio="0.5">
            <div className="">
                <div
                    className="call-action"
                    style={{
                        backgroundImage: `url('http://localhost:3000/static/media/bg_contact.f07ff5c58e5f575a0363.webp')`,
                    }}
                >
                    <div className="inner">
                        <div
                            className="contact-us-form row"
                            style={{ padding: '70px 90px' }}
                        >
                            <div
                                className="col-lg-7"
                                style={{
                                    padding: '30px 30px',
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                }}
                            >
                                <div
                                    style={{ marginTop: '-65px' }}
                                    className="text-center"
                                >
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        style={{
                                            fontSize: '80px',
                                            color: '#1A76D1',
                                        }}
                                    />
                                </div>
                                <h3
                                    className="mt-4 mb-1 text-center"
                                    style={{ color: '#1A76D1' }}
                                >
                                    ĐẶT LỊCH KHÁM
                                </h3>
                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="patient_name"
                                                    placeholder="Họ Tên"
                                                    value={formData.patient_name}
                                                    onChange={handleChange}
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="booking_email"
                                                    placeholder="Email"
                                                    value={formData.booking_email}
                                                    onChange={handleChange}
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select
                                                    className="form-control"
                                                    style={{height:'50px'}}
                                                    name="booking_sex"
                                                    value={formData.booking_sex}
                                                    onChange={handleChange}
                                                    
                                                >
                                                    <option value="">
                                                        Giới tính
                                                    </option>
                                                    <option value="1">Nam</option>
                                                    <option value="2">Nữ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="booking_phone"
                                                    placeholder="Số Điện Thoại"
                                                    value={formData.booking_phone}
                                                    onChange={handleChange}
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    type="date"
                                                    name="booking_date"
                                                    value={formData.booking_date}
                                                    onChange={handleChange}
                                                    
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select
                                                    className="form-control"
                                                    style={{height:'50px'}}
                                                    name="clinic_id"
                                                    value={clinic || formData.clinic_id}
                                                    onChange={handleChange}
                                                    
                                                >
                                                    <option value="">
                                                        Địa chỉ khám
                                                    </option>
                                                    {clinics.map((clinic) => (
                                                        <option
                                                            key={clinic.id}
                                                            value={clinic.id}
                                                        >
                                                            {clinic.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select
                                                    className="form-control"
                                                    style={{height:'50px'}}
                                                    name="booking_time"
                                                    value={time||formData.booking_time}
                                                    onChange={handleChange}
                                                    
                                                >
                                                    <option value="">
                                                        Chọn thời gian
                                                    </option>
                                                    <option value="07:00:00 - 08:00:00">
                                                        7:00 - 8:00
                                                    </option>
                                                    <option value="08:00:00 - 09:00:00">
                                                        8:00 - 9:00
                                                    </option>
                                                    <option value="09:00:00 - 10:00:00">
                                                        9:00 - 10:00
                                                    </option>
                                                    <option value="10:00:00 - 11:00:00">
                                                        10:00 - 11:00
                                                    </option>
                                                    <option value="14:00:00 - 15:00:00">
                                                        14:00 - 15:00
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
    <div className="form-group">
      <select
        className="form-control"
        style={{ height: '50px' }}
        name="doctor_id"
        value={doctorId || formData.doctor_id} 
        onChange={handleChange}
        
      >
        <option value="">
          Chọn bác sĩ
        </option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.name}
          </option>
        ))}
      </select>
    </div>
  </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="notes"
                                                    placeholder="Nội dung hẹn khám"
                                                    value={formData.notes}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="form-group login-btn">
                                                <button id="btn-dat-lich-kham" className="btn" type="submit">
                                                    Gửi
                                                </button>
                                            </div>
                                            <p className="text mt-4" style={{ marginBottom: '0px' }}>
                                                Bằng việc xác nhận đặt khám, bạn đã hoàn toàn đồng ý
                                                với{' '}
                                                <span style={{ color: '#3780CB' }}>
                                                    Điều khoản sử dụng
                                                </span>{' '}
                                                dịch vụ của chúng tôi!
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoctorDetail;
