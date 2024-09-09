import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import SearchInput from '../SearchInput/SearchInput';

const TableColumnSearch = ({ dataIndex, searchedColumn, searchText, setSearchText, setSearchedColumn, dataTitle }) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <SearchInput
            dataTitle={dataTitle}
            dataIndex={dataIndex}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            confirm={confirm}
            clearFilters={clearFilters}
            searchText={searchText}
            setSearchText={setSearchText}
            setSearchedColumn={setSearchedColumn}
            close={close}
        />
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
        searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
            />
        ) : (
            text
        ),
});

export default TableColumnSearch;
