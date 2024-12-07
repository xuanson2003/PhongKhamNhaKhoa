import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you have axios installed for HTTP requests
import deniAvatar from '~/Assets/img/jm_denis.jpg';
import talhaAvatar from '~/Assets/img/talha.jpg';
import chadAvatar from '~/Assets/img/chadengle.jpg';

function Dashbroad(props) {
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        // Fetch the data from the API
        axios
            .get('http://localhost:4000/get-dashboard')
            .then((response) => {
                if (response.data.success) {
                    setDashboardData(response.data.data);
                }
            })
            .catch((error) => {
                console.error('There was an error fetching the dashboard data!', error);
            });
    }, []);

    if (!dashboardData) {
        return <div>Loading...</div>; // Show loading while data is being fetched
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-primary bubble-shadow-small">
                                        <i className="fas fa-users"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Lượt truy cập</p>
                                        <h4 className="card-title">1 294</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-info bubble-shadow-small">
                                        <i className="fas fa-clipboard-list"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Lịch khám</p>
                                        <h4 className="card-title">{dashboardData.dc_booking}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-success bubble-shadow-small">
                                        <i className="fas fa-newspaper"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Tin tức</p>
                                        <h4 className="card-title">{dashboardData.dc_news}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="card card-stats card-round">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-icon">
                                    <div className="icon-big text-center icon-secondary bubble-shadow-small">
                                        <i className="fas fa-notes-medical"></i>
                                    </div>
                                </div>
                                <div className="col col-stats ms-3 ms-sm-0">
                                    <div className="numbers">
                                        <p className="card-category">Dịch vụ</p>
                                        <h4 className="card-title">{dashboardData.dc_service}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card card-round">
                        <div className="card-header">
                            <div className="card-head-row card-tools-still-right">
                                <div className="card-title">Lịch Sử Đặt Lịch Khám</div>
                                <div className="card-tools">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-icon btn-clean me-0"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-ellipsis-h"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">
                                                Thêm Lịch Khám
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                Xóa Lịch Khám
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Tên bác sĩ</th>
                                            <th scope="col" className="text-end">
                                                Ngày & Giờ
                                            </th>
                                            <th scope="col" className="text-end">
                                                Số Tiền
                                            </th>
                                            <th scope="col" className="text-end">
                                                Trạng Thái
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">

                                                Đỗ Khánh Hưng
                                            </th>
                                            <td className="text-end">4/12/2024</td>
                                            <td className="text-end">500,000 Đ</td>
                                            <td className="text-end">
                                                <span className="badge badge-success">Hoàn Thành</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                
                                                Phan Kim Liên
                                            </th>
                                            <td className="text-end">4/12/2024</td>
                                            <td className="text-end">300,000 Đ</td>
                                            <td className="text-end">
                                                <span className="badge badge-warning">Chờ Xác Nhận</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                 
                                                Lê Hùng Đại
                                            </th>
                                            <td className="text-end">4/12/2024</td>
                                            <td className="text-end">400,000 Đ</td>
                                            <td className="text-end">
                                                <span className="badge badge-danger">Từ chối</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-primary card-round">
                        <div className="card-header">
                            <div className="card-head-row">
                                <div className="card-title">Doanh Thu Hôm Nay</div>
                            </div>
                        </div>
                        <div className="card-body pb-0">
                            <div className="mb-4 mt-2">
                                <h1>1,200,000 Đ</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card card-round">
                        <div className="card-body pb-0">
                            <div className="h1 fw-bold float-end text-primary">+10%</div>
                            <h2 className="mb-2">15</h2>
                            <p className="text-muted">Người dùng trực tuyến</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rest of the component code remains unchanged */}
        </div>
    );
}

export default Dashbroad;
