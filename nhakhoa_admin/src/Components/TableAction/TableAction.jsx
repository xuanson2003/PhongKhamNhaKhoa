import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const TableAction = ({ actions, dropdownStyle }) => {
    const menu = (
        <Menu>
            {actions.map((action, index) => (
                <Menu.Item key={index} onClick={action.onClick}>
                    {action.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']} placement={dropdownStyle}>
            <Button icon={<EllipsisOutlined />} style={{ border: 'none' }} />
        </Dropdown>
    );
};

export default TableAction;
