import React, { useRef } from 'react';
import { Button, Input, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faFilter, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({
    dataIndex,
    selectedKeys,
    setSelectedKeys,
    confirm,
    clearFilters,
    searchText,
    setSearchText,
    setSearchedColumn,
    close,
    dataTitle,
}) => {
    const searchInput = useRef(null);

    const handleSearch = () => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = () => {
        clearFilters();
        setSearchText('');
    };

    return (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Input
                ref={searchInput}
                placeholder={dataTitle}
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={handleSearch}
                style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
                <Button
                    type="primary"
                    onClick={handleSearch}
                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    size="small"
                    style={{ width: 90 }}
                ></Button>
                <Button
                    onClick={handleReset}
                    icon={<FontAwesomeIcon icon={faArrowRotateRight} />}
                    size="small"
                    style={{ width: 90 }}
                ></Button>
                <Button
                    type="link"
                    size="small"
                    icon={<FontAwesomeIcon icon={faFilter} />}
                    onClick={() => {
                        confirm({ closeDropdown: false });
                        setSearchText(selectedKeys[0]);
                        setSearchedColumn(dataIndex);
                    }}
                ></Button>
                <Button type="link" size="small" icon={<FontAwesomeIcon icon={faXmark} />} onClick={close}></Button>
            </Space>
        </div>
    );
};

export default SearchInput;
