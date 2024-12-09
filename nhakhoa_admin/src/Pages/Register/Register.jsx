import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button } from 'antd';
import cn from 'classnames';
import { notification } from 'antd';

import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Register.module.css';
import config from '~/Config';
import ImageCropper from '~/Components/ImageCropper/ImageCropper';
import request from '~/Utils/httpRequest';

Modal.setAppElement('#root');

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const cropperRef = useRef(null);
    const [profileImage, setProfileImage] = useState(null);
    const [api, contextHolder] = notification.useNotification();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            confirm_password: '',
            phone: '',
            address: '',
            position_id: '',
            gender: '',
            profile_image: '', // profile_image is optional
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
            name: Yup.string().required('Vui lòng nhập họ tên'),
            password: Yup.string()
                .required('Mật khẩu là bắt buộc')
                .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Mật khẩu phải bao gồm cả chữ và số'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
                .required('Vui lòng nhập lại mật khẩu'),
            phone: Yup.string().required('Vui lòng nhập số điện thoại'),
            address: Yup.string().required('Vui lòng nhập địa chỉ'),
            gender: Yup.string().required('Vui lòng chọn giới tính'),
            position_id: Yup.string().required('Vui lòng chọn chức vụ'),
            profile_image: Yup.string(), // Make profile_image optional
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                setIsSubmitting(true);
                let responseFile;

                // Check if a profile image exists before attempting to upload
                if (values.profile_image) {
                    const formData = new FormData();
                    formData.append('file', values.profile_image);

                    responseFile = await request.post('upload', formData);
                    if (!responseFile.data.success) {
                        setIsSubmitting(false);
                        openNotification('topRight', 'Thất bại', 'Đăng ký thất bại, vui lòng thử lại sau', 'error');
                        return;
                    }
                }

                // Create new user without requiring profile_image if it's not available
                const { profile_image, ...restValues } = values;
                const responseUser = await request.post('signup', {
                    ...restValues,
                    image_url: responseFile?.data ? responseFile.data.image_url : '', // Use the image_url only if a file was uploaded
                });

                if (!responseUser.data.success && responseUser.data.errorField === 'email') {
                    setIsSubmitting(false);
                    setErrors({ email: 'Email này đã được đăng ký' });
                    return;
                }

                if (responseFile?.data) {
                    // Update file reference if image was uploaded
                    const responseUpdalteFile = await request.patch('update-file', {
                        file_id: responseFile.data.file_id,
                        user_id: responseUser.data.userId,
                    });
                    if (responseUpdalteFile.data.success) {
                        setIsSubmitting(false);
                        openNotification(
                            'topRight',
                            'Thành công',
                            'Đăng ký thành công, vui lòng chờ đến khi tài khoản được duyệt',
                            'success',
                        );
                    }
                } else {
                    // If no image was uploaded, show success without updating the file reference
                    setIsSubmitting(false);
                    openNotification(
                        'topRight',
                        'Thành công',
                        'Đăng ký thành công, vui lòng chờ đến khi tài khoản được duyệt',
                        'success',
                    );
                }
            } catch (error) {
                setIsSubmitting(false);
                openNotification('topRight', 'Thất bại', 'Đăng ký thất bại, vui lòng thử lại sau', 'error');
            } finally {
                setSubmitting(false);
            }
        },
    });

    const openNotification = (placement, title, desc, type) => {
        api.open({
            message: '',
            description: (
                <Alert
                    message={title}
                    description={desc}
                    type={type}
                    showIcon
                    className="show"
                    style={{ marginTop: -8 }}
                />
            ),
            placement,
            showProgress: true,
            pauseOnHover: true,
        });
    };

    return (
        <div className={styles['signup']}>
            {contextHolder}
            <div className={styles['sign-container']}>
                <form className={styles['login-form']} onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className={styles['login-form-field']}>
                                <ImageCropper
                                    ref={cropperRef}
                                    aspectRatio={1 / 1}
                                    defaultImage={null}
                                    onImageCropped={(image) => {
                                        formik.values.profile_image = image;
                                        setProfileImage(image);
                                    }}
                                    
                                />
                                {!profileImage && formik.touched.profile_image ? (
                                    <p className={cn(styles['login-form-field-error'], 'text-center')}>
                                        {formik.errors.profile_image}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <input
                                    className={formik.touched.email && formik.errors.email ? styles.error : ''}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <p className={styles['login-form-field-error']}>{formik.errors.email}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <input
                                    className={formik.touched.name && formik.errors.name ? styles.error : ''}
                                    type="text"
                                    name="name"
                                    placeholder="Nhập họ tên"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <p className={styles['login-form-field-error']}>{formik.errors.name}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <div className={styles['login-form-field-group']}>
                                    <input
                                        className={formik.touched.password && formik.errors.password ? styles.error : ''}
                                        name="password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Mật khẩu"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {passwordVisible ? (
                                        <FontAwesomeIcon
                                            onClick={() => setPasswordVisible(false)}
                                            className={styles['login-form-field-icon']}
                                            icon={faEye}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            onClick={() => setPasswordVisible(true)}
                                            className={styles['login-form-field-icon']}
                                            icon={faEyeSlash}
                                        />
                                    )}
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <p className={styles['login-form-field-error']}>{formik.errors.password}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <div className={styles['login-form-field-group']}>
                                    <input
                                        className={formik.touched.confirm_password && formik.errors.confirm_password ? styles.error : ''}
                                        name="confirm_password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Nhập lại mật khẩu"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirm_password}
                                    />
                                    {passwordVisible ? (
                                        <FontAwesomeIcon
                                            onClick={() => setPasswordVisible(false)}
                                            className={styles['login-form-field-icon']}
                                            icon={faEye}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            onClick={() => setPasswordVisible(true)}
                                            className={styles['login-form-field-icon']}
                                            icon={faEyeSlash}
                                        />
                                    )}
                                </div>
                                {formik.touched.confirm_password && formik.errors.confirm_password ? (
                                    <p className="login-form-field-error">{formik.errors.confirm_password}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <select
                                    name="position_id"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.position_id}
                                    className={formik.touched.position_id && formik.errors.position_id ? styles.error : ''}
                                >
                                    <option value="">Chọn chức vụ</option>
                                    <option value="1">Bác sĩ</option>
                                    <option value="2">Nhân viên vệ sinh</option>
                                </select>
                                {formik.touched.position_id && formik.errors.position_id ? (
                                    <p className={styles['login-form-field-error']}>{formik.errors.position_id}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <div className="row mt-2">
                                    <label className="col-md-3 d-flex align-items-center">
                                        <input
                                            style={{ width: '40px', height: '20px' }}
                                            type="radio"
                                            name="gender"
                                            value="Nam"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.gender === 'Nam'}
                                        />
                                        <span style={{ fontSize: '16px' }}>Nam</span>
                                    </label>
                                    <label className="col-md-6 d-flex align-items-center">
                                        <input
                                            style={{ width: '40px', height: '20px' }}
                                            type="radio"
                                            name="gender"
                                            value="Nữ"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            checked={formik.values.gender === 'Nữ'}
                                        />
                                        <span style={{ fontSize: '16px' }}>Nữ</span>
                                    </label>
                                </div>
                                {formik.touched.gender && formik.errors.gender ? (
                                    <p className={styles['login-form-field-error']}>{formik.errors.gender}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <input
                                    className={formik.touched.phone && formik.errors.phone ? styles.error : ''}
                                    type="tel"
                                    name="phone"
                                    placeholder="Số điện thoại"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <p className={styles['login-form-field-error']}>{formik.errors.phone}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles['login-form-field']}>
                                <input
                                    className={formik.touched.address && formik.errors.address ? styles.error : ''}
                                    type="text"
                                    name="address"
                                    placeholder="Địa chỉ"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                />
                                {formik.touched.address && formik.errors.address ? (
                                    <p className={styles['login-form-field-error']}>{formik.errors.address}</p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="row w-100">
                        {isSubmitting ? (
                            <Button type="primary" loading block>
                                Đang đăng ký...
                            </Button>
                        ) : (
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-100"
                                disabled={isSubmitting}
                            >
                                Đăng ký
                            </Button>
                        )}
                    </div>
                    <div className="row w-100 mt-2">
                        <span className="text-muted">
                            Đã có tài khoản?{' '}
                            <Link to="/login" className="ml-1">
                                Đăng nhập
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
