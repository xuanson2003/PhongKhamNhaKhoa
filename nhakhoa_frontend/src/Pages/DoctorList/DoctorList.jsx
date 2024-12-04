import React, { useEffect, useState } from 'react';
import BreadScrum from '~/Components/BreadScrumb/BreadScrum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLocationDot, faMagnifyingGlass, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import config from '~/Config';
import DoctorItem from '~/Components/DoctorItem/DoctorItem';
import request from '~/Utils/httpRequest';

function DoctorList() {
    const [doctorData, setDoctorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleDoctors, setVisibleDoctors] = useState(8); // Start by showing 4 doctors
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const [filteredDoctors, setFilteredDoctors] = useState([]); // State for filtered doctors
    const [filterOption, setFilterOption] = useState('all'); // Filter option state

    useEffect(() => {
        request.get('get-all-doctor')
            .then(response => {
                if (response.data.success) {
                    setDoctorData(response.data.data);
                    setFilteredDoctors(response.data.data); // Initialize with full data
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching doctors data:', error);
                setLoading(false);
            });
    }, []);

    const handleShowMore = () => {
        setVisibleDoctors(prevVisible => prevVisible + 4); // Show 4 more doctors on button click
    };

    const handleSearch = () => {
        let filtered = doctorData;

        if (filterOption === 'name') {
            filtered = doctorData.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } else if (filterOption === 'diachi') {
            filtered = doctorData.filter(item =>
                item.address.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } else {
            filtered = doctorData.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredDoctors(filtered); // Update filtered doctors list
    };

    return (
        <>
            <BreadScrum
                title="Danh sách bác sĩ"
                links={[
                    { title: 'Trang chủ', href: config.routes.home_1 },
                    { title: 'Danh sách bác sĩ', href: config.routes.doctor_list },
                ]}
            />

            <section className="blog section" id="blog">
                <div className="container">
                    <div className="single-news">
                        <div className="news-body d-flex" style={{ padding: '15px 20px' }}>
                            <select
                                className="form-control w-25"
                                style={{
                                    height: '40px',
                                    borderColor: 'white',
                                    borderBottomColor: '#2072C3',
                                    borderRadius: '0px'
                                }}
                                name="filter"
                                value={filterOption}
                                onChange={(e) => setFilterOption(e.target.value)} // Update filter option
                            >
                                <option value="all">Tất cả</option>
                                <option value="name">Theo tên</option>
                                <option value="diachi">Theo địa chỉ</option>
                            </select>
                            <input
                                style={{
                                    borderColor: 'white',
                                    borderBottomColor: '#2072C3',
                                    borderRadius: '0px',
                                    height: '40px',
                                    marginLeft: '25px'
                                }}
                                type="text"
                                className="form-control"
                                placeholder="Tìm kiếm bác sĩ"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                            />
                            <div className="input-group-append" style={{ marginLeft: '25px' }}>
                                <button
                                    className="btn btn-outline-secondary"
                                    style={{ height: '40px' }}
                                    type="button"
                                    onClick={handleSearch} // Trigger search on click
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginBottom: '5px' }} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                {filteredDoctors.slice(0, visibleDoctors).map((doctorItem) => (
                                    <React.Fragment key={doctorItem.id}>
                                        <DoctorItem
                                            data={{
                                                id: doctorItem.id,
                                                image: doctorItem.image,
                                                name: doctorItem.name,
                                                description: doctorItem.description,
                                                address: doctorItem.address,
                                                clinic_id:doctorItem.clinic_id,
                                                phone:doctorItem.phone
                                            }}
                                        />
                                    </React.Fragment>
                                ))}
                            </>
                        )}
                    </div>

                    {visibleDoctors < filteredDoctors.length && (
                        <div className="text-center mt-4">
                            <button className="btn btn-primary" onClick={handleShowMore}>
                                Xem thêm
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default DoctorList;
