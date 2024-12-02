import React, { useState, useCallback, forwardRef, useImperativeHandle, useRef } from 'react';
import Cropper from 'react-easy-crop';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowRotateLeft,
    faArrowRotateRight,
    faArrowUp,
    faMagnifyingGlassMinus,
    faMagnifyingGlassPlus,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import getCroppedImg from '~/Utils/croppedImg';
import styles from './ImageCropper.module.css';

Modal.setAppElement('#root');

const ImageCropper = (
    {
        defaultImage,
        aspectRatio = 1,
        initialCrop = { x: 0, y: 0 },
        initialZoom = 1,
        onImageCropped,
        isError,
        displayStyle, // '', 'square', 'rectangle'
        className,
        style, // circle (default), square, rectangle
    },
    ref,
) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(defaultImage); // url
    const [croppedImageBlob, setCroppedImageBlob] = useState(null); // image file
    const [crop, setCrop] = useState(initialCrop);
    const [zoom, setZoom] = useState(initialZoom);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageType, setImageType] = useState('image/jpeg');

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            const type = file.type; // Get the MIME type of the file
            setImageType(type);
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                setIsModalOpen(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedBlob = await getCroppedImg(selectedImage, croppedAreaPixels, rotation);
            const fileName = 'cropped_image.jpeg';
            const file = new File([croppedBlob], fileName, { type: imageType });
            setCroppedImageBlob(file);
            onImageCropped(file);

            const croppedImageUrl = URL.createObjectURL(croppedBlob);
            setCroppedImage(croppedImageUrl);
            setIsModalOpen(false);
            fileInputRef.current.value = '';
        } catch (e) {
            console.error(e);
        }
    }, [selectedImage, croppedAreaPixels, rotation, onImageCropped]);

    const handleZoomIn = () => {
        setZoom((prevZoom) => Math.min(prevZoom + 0.5, 3));
    };

    const handleZoomOut = () => {
        setZoom((prevZoom) => Math.max(prevZoom - 0.5, 1));
    };

    const handleRotateLeft = () => {
        setRotation((prevRotation) => (prevRotation - 90) % 360);
    };

    const handleRotateRight = () => {
        setRotation((prevRotation) => (prevRotation + 90) % 360);
    };

    const moveCrop = (dx, dy) => {
        setCrop((prevCrop) => {
            const newCropX = prevCrop.x + dx;
            const newCropY = prevCrop.y + dy;

            // const maxX = selectedImage.width - croppedAreaPixels.width;
            // const maxY = selectedImage.height - croppedAreaPixels.height;

            return {
                x: newCropX,
                y: newCropY,
            };
        });
    };

    const handleMoveLeft = () => moveCrop(-10, 0);
    const handleMoveRight = () => moveCrop(10, 0);
    const handleMoveUp = () => moveCrop(0, -10);
    const handleMoveDown = () => moveCrop(0, 10);

    useImperativeHandle(
        ref,
        () => ({
            getCroppedImage: () => {
                return croppedImageBlob ? croppedImageBlob : null;
            },
        }),
        [croppedImageBlob],
    );

    return (
        <>
            <div className={styles['upload-container']}>
                <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    id="file-upload"
                    className={styles['file-input']}
                    onChange={handleImageChange}
                    accept="image/*"
                />
                <label htmlFor="file-upload" className={styles['file-label']}>
                    <div
                        className={cn(
                            styles['upload-circle'],
                            { [styles['upload-error']]: isError },
                            styles[displayStyle],
                            className,
                        )}
                        style={style}
                    >
                        {croppedImage ? (
                            <img src={croppedImage} alt="Cropped" className={styles['uploaded-image']} />
                        ) : (
                            <span className={styles['upload-text']}>Chọn ảnh</span>
                        )}
                    </div>
                </label>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className={styles['crop-modal']}
                overlayClassName={styles['crop-modal-overlay']}
            >
                <div className={styles['crop-title']}>
                    <h2>Vui lòng chọn vùng hình ảnh mà bạn muốn hiển thị</h2>
                    <button className={styles['crop-btn-close']} onClick={() => setIsModalOpen(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className={styles['crop-container']} style={{ zIndex: 100 }}>
                    <Cropper
                        image={selectedImage}
                        crop={crop}
                        zoom={zoom}
                        rotation={rotation}
                        aspect={aspectRatio}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                </div>
                <div className={styles['crop-modal-controls']}>
                    <button onClick={handleRotateLeft}>
                        <FontAwesomeIcon icon={faArrowRotateLeft} />
                    </button>
                    <button onClick={handleRotateRight}>
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                    </button>
                    <hr />
                    <button onClick={handleZoomIn}>
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </button>
                    <button onClick={handleZoomOut}>
                        <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                    </button>
                    <hr />
                    <button onClick={handleMoveLeft}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button onClick={handleMoveRight}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button onClick={handleMoveUp}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button onClick={handleMoveDown}>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>

                    <hr />
                    <button onClick={showCroppedImage}>Hoàn thành</button>
                </div>
            </Modal>
        </>
    );
};

export default forwardRef(ImageCropper);
